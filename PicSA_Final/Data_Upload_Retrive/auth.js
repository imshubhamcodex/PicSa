firebase.auth().onAuthStateChanged(user =>{

  

        if(user)
        {
           console.log("Logged in");
           
         
        }                                                                           

        else
        {
            console.log("Logged Out");
          
        }


});



//signUp
const signupForm=document.querySelector('#signUp')
      signupForm.addEventListener('submit',(e) =>{

            e.preventDefault();

            const email=signupForm['signup-email'].value;
            const password=signupForm['signup-password'].value;

            // console.log(email,password);
        auth.createUserWithEmailAndPassword(email,password).then(cred =>{

              window.location.replace("loadSignup.html");

      
      }).catch(function(error) {
         alert("Invalid Credentials");
          }); 



});



// logIn

const loginForm=document.querySelector('#logIn')
loginForm.addEventListener('submit',(e) =>{

  e.preventDefault();

  const email=loginForm['login-email'].value;
  const password=loginForm['login-password'].value;

 

     auth.signInWithEmailAndPassword(email,password).then(cred =>{


      window.location.replace("loadLogIn.html");


     }).catch(function(error) {
      alert("Invalid Credentials");
         }); 


});


