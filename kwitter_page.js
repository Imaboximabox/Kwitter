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
user_name = localStorage.getItem("user_name")
room_name = localStorage.getItem("room_name")
function send(){
    msg = document.getElementById("msg").value
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    })
document.getElementById("msg").value = ""
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
name = message_data["name"]
message = message_data["message"]
like = message_data["like"]
name_with_tag = "<h4>" +name+ "<img class='user_tick' src='tick.png'></h4>"
message_with_tag = "<h4 class='message_h4'>" +message+ "</h4>"
like_with_tag = "<button  id="+firebase_message_id+" value="+like+" onclick='redirecttoroom_name(this.id)' class='btn btn-success'>"
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>"
row = name_with_tag+message_with_tag+like_with_tag+span_with_tag
document.getElementById("output").innerHTML += row
//End code
 } });  }); }
getData();
function redirecttoroom_name(message_id){
    button_id = message_id
    likes = document.getElementById(button_id).value
    updated_likes = Number(likes)+1
    firebase.database().ref(room_name).child(message_id).update({
        like:updated_likes
  })

}
function logout(){
    window.location = "index.html"
    localStorage.removeItem("room_name")
    localStorage.removeItem("user_name")
}
