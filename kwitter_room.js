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
document.getElementById("user_name").innerHTML = "Welcome " + user_name;

function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    Welcome: "Mumbai"
  })
  localStorage.setItem("room", room_name);
  window.location = "kwitter_room.html"
}


function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room name -" + Room_names);
       row = "<div class = 'room_name' id = " + Room_names + " onclick = 'redirecttorommname(this.id)'>" + Room_names + "</div><hr>"
       document.getElementById("output").innerHTML += row;
    });
  });



}

getData();

function redirecttorommname(name) {
console.log(name);
localStorage.setItem("name", name);
window.location = "kwitter_page.html"
  
}

function logout() {
  localStorage.removeItem("user_name")
  localStorage.removeItem("room_name")
  window.location = "index.html"
}