let selectedRow = null;


// ShowAlert
function showAlert(message,className){
     const div = document.createElement('div');
       div.className = `alert alert-${className}`;
       div.appendChild(document.createTextNode(message));
       const container = document.querySelector(".container");
       const main = document.querySelector(".form-box");
       
       container.insertBefore(div,main,);
       setTimeout(()=> document.querySelector(".alert").remove(),5000);
    
}

document.querySelector("#button").addEventListener("click", (e) =>{
    e.preventDefault();

    // get form values
    const fullName = document.querySelector("#full-name").value;
    const email = document.querySelector("#email").value;
    const passwordEL = document.querySelector("#password").value;

    // validate

    if(fullName == "" || email == "" || passwordEL == ""){
        showAlert("Please fill in all fields", "danger");
    }else{
        showAlert("You Profile has been created", "success");
    }
})



// LOGIN PASSWORD AUTH


    var password = document.querySelector('.password');
    var ul = document.querySelector(".password-auth");
   let  msg =document.querySelector(".message");
    
    var helperText = {
        charLength: document.querySelector('.helper-text .length'),
        lowercase: document.querySelector('.helper-text .lowercase'),
        uppercase: document.querySelector('.helper-text .uppercase'),
        special: document.querySelector('.helper-text .special')
    };
    
    var pattern = {
        charLength: function() {
            if( password.value.length >= 8 ) {
                return true;
            }
        },
        lowercase: function() {
            var regex = /^(?=.*[a-z]).+$/; // Lowercase character pattern

            if( regex.test(password.value) ) {
                return true;
            }
        },
        uppercase: function() {
            var regex = /^(?=.*[A-Z]).+$/; // Uppercase character pattern

            if( regex.test(password.value) ) {
                return true;
            }
        },
        special: function() {
            var regex = /^(?=.*[0-9_\W]).+$/; // Special character or number pattern

            if( regex.test(password.value) ) {
                return true;
            }
        }   
    };

    if(password.value.length < 0){
        msg.textContent = "Please provide a correct password"
    }
    
    // Listen for keyup action on password field
  password.addEventListener('keyup', function (){
        
        // Check that password is a minimum of 8 characters
        patternTest( pattern.charLength(), helperText.charLength );
        
        // Check that password contains a lowercase letter      
        patternTest( pattern.lowercase(), helperText.lowercase );
        
        // Check that password contains an uppercase letter
        patternTest( pattern.uppercase(), helperText.uppercase );
        
        // Check that password contains a number or special character
        patternTest( pattern.special(), helperText.special );
    
    // Check that all requirements are fulfilled
    if( hasClass(helperText.charLength, 'valid') &&
              hasClass(helperText.lowercase, 'valid') && 
                hasClass(helperText.uppercase, 'valid') && 
              hasClass(helperText.special, 'valid')
        ) {
            addClass(password.parentElement, 'valid');
    }
    else {
      removeClass(password.parentElement, 'valid');
    }
    });
    
    function patternTest(pattern, response) {
        if(pattern) {
      addClass(response, 'valid');
    }
    else {
      removeClass(response, 'valid');
    }
    }
    
    function addClass(el, className) {
        if (el.classList) {
            el.classList.add(className);
        }
        else {
            el.className += ' ' + className;
        }
    }
    
    function removeClass(el, className) {
        if (el.classList)
                el.classList.remove(className);
            else
                el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
    
    function hasClass(el, className) {
        if (el.classList) {
            return el.classList.contains(className);    
        }
        else {
            new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className); 
        }
    }

    // EMAIL VALIDATION
    
    function validation() {
        let form = document.getElementById('form')
        let email = document.getElementById('email').value
        let text = document.getElementById('text')
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
      
        if (email.match(pattern)) {
          form.classList.add('valid')
          form.classList.remove('invalid')
          text.innerHTML = "Your Email Address in valid"
          text.style.color = '#00ff00'
        } else {
          form.classList.remove('valid')
          form.classList.add('invalid')
          text.innerHTML = "Please Enter Valid Email Address"
          text.style.color = '#ff0000'
        }
      
        if (email == '') {
          form.classList.remove('valid')
          form.classList.remove('invalid')
          text.innerHTML = ""
          text.style.color = '#00ff00'
        }
      }

let passwordField = document.getElementById("password");
let eyeIcon = document.getElementById("eyeicon");

eyeIcon.onclick = function () {
    if (password.type == "password") {
        password.type = "text";
        eyeIcon.src ="img/eye1.png"
    } else {
        password.type = "password";
         eyeIcon.src ="img/hidden.png"
    }
}