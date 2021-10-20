//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDEXi9Iu9RusE1BpQqX6_XZJiKnP76apLo",
      authDomain: "kwitter1-2863e.firebaseapp.com",
      databaseURL: "https://kwitter1-2863e-default-rtdb.firebaseio.com",
      projectId: "kwitter1-2863e",
      storageBucket: "kwitter1-2863e.appspot.com",
      messagingSenderId: "744192868349",
      appId: "1:744192868349:web:1b58d1ef921a20370b6394"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem ("room");

 function send() {
       msg = document.getElementById("msg").value;
       firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0

       })
       document.getElementById("msg").value = "";
 }


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
like = message_data['like'];
message = message_data['message'];
name_with_tag = "<h4>" + name + "<img class = 'user_tick' src = 'tick.png'> </h4>" 
message_with_tag = "<h4>" + message + "</h4>"
like_with_tag = "<button class = 'btn btn-warning' id = " + firebase_message_id + "value = " + like + "onclick = 'update_like(this.id)'>";
span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'>Like : " + like + "</span></button><hr>"

row = name_with_tag + message_with_tag + like_with_tag + span_with_tag;
document.getElementById("output").innerHTML += row;

//End code
      } });  }); }
getData();

function update_like(message_id) {
      console.log("test");
      console.log("clicked on like button" + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      })
}

      function logout() {
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location = "index.html"
}
