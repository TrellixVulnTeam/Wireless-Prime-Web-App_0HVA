alert('s1')
function signInAction(){
    alert('s2')
// Initialize Firebase
var config = {
    apiKey: "AIzaSyC4jsvf0PsZvYTH_25jXLAdLXpDVFg1uhw",
    authDomain: "cinegearsuserslist.firebaseapp.com",
    databaseURL: "https://cinegearsuserslist.firebaseio.com",
    projectId: "cinegearsuserslist",
    storageBucket: "cinegearsuserslist.appspot.com",
    messagingSenderId: "934939093990"
  };
  firebase.initializeApp(config);
    var userNameValue = document.getElementById('userNameId').value
    var passwordValue = document.getElementById('passwordId').value

if(userNameValue === '' || passwordValue === ''){
        $('#loginCheckerText').html('Please fill empty fields')}
else{
    firebase.auth().signInWithEmailAndPassword(userNameValue, passwordValue).then((user) =>{
        // alert('Welcome ' + user.email )
        $('#mainDiv').fadeOut('9000', function(){
        $('#welcomeHomeText').html('Welcome ' + user.email)});
        }).catch((error) => {
        $('#loginCheckerText').html(error.code);
    })}
};
 




