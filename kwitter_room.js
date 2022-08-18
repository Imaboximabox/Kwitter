
//ADD YOUR FIREBASE LINKS HERE
 var firebaseconfig = {
      apiKey: "AIzaSyDtrgwkA1k0J41esUtcMHC0MKW3LqMaKRg",
      authDomain: "kwitter-27de3.firebaseapp.com",
      databaseURL: "https://kwitter-27de3-default-rtdb.firebaseio.com",
      projectId: "kwitter-27de3",
      storageBucket: "kwitter-27de3.appspot.com",
      messagingSenderId: "177060927268",
      appId: "1:177060927268:web:5e452afd7eb4bb729205b1"
 }
 firebase.initializeApp(firebaseconfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name
function addroom (){
      room_names = document.getElementById("room_name").value;
    localStorage.setItem("room_name", room_names);
    firebase.database().ref("/").child(room_names).update({
          purpose:"adding room name"
    })
    window.location = "kwitter_page.html";
}




function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'>#" + Room_names + "</div><hr>"
      document.getElementById("output").innerHTML += row


      //End code
      });});}
getData();
function redirect(name){
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";

}

function logout(){
      window.location = "index.html"
      localStorage.removeItem("room_name")
      localStorage.removeItem("user_name")
}
