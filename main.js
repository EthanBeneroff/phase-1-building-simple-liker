// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

//grab the things we need to reference and assign them to variables
const likeBtns = document.querySelectorAll('.like-glyph');
const errorModal = document.querySelector('#modal');
errorModal.classList.add('hidden');

//making an error function to use with SetTimeout
function errorFunc(){
  errorModal.classList.add('hidden')
}

//add event listeners for all of the buttons that invoke mimicservercall
likeBtns.forEach((element) => 
  element.addEventListener('click', (event) =>

    mimicServerCall()
    //if the server returns a success call
    //change the heart to a full heart and add the .activated-heart class
      .then((response) => {
        if(element.textContent === EMPTY_HEART){
          element.textContent = FULL_HEART
          element.classList.add('activated-heart')
        }
        else if(element.textContent === FULL_HEART){
          element.textContent = EMPTY_HEART
          element.classList.remove('activated-heart')
        }
      })


      //if server returns failure respond using catch and display the error by removing the hidden class
      .catch((error) =>{
        //display the server error message in the modal

        console.log("error")
        errorModal.classList.remove('hidden')
        errorModal.textContent = error
        //use set timeout to hdie the modal after 3 secs
        setTimeout(errorFunc, 3000)
      })
  
  )

)







// likeBtns.forEach((heartBtn) => heartBtn.addEventListener('click', (event) => 
//     mimicServerCall()
//     .then(function(response){
//       event.target.classList.toggle('activated-heart')
//       if(event.target.textContent === EMPTY_HEART){
//         event.target.textContent === FULL_HEART
//       }
//       else if(event.target.textcontent === FULL_HEART){
//         event.target.textContent ===EMPTY_HEART
//       }
//     })
//     .catch(function(error){
//       //alert("ERROR! ERROR!")
//       console.log("error")
//       errorModal.classList.remove('hidden')
//       document.querySelector('#modal-message').textContent = "error"
//       setTimeout(errorModal.classList.add('hidden'), 3000);

//     })
//   ))














//when a user clicks on a full heart
//change the heart back to an empty heart
//remove the .activated-heart class

//




















//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
