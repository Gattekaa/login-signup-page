

let eye = document.getElementById('eye')

eye.addEventListener('click', function(){

    let password = document.getElementById('password')
    let i = document.getElementById('eye');

    if(password.type == 'password'){
        password.type= "text"
        i.classList.remove('fa-eye');
        i.classList.add('fa-eye-slash');
    } else{
        password.type= "password"
        i.classList.remove('fa-eye-slash');
        i.classList.add('fa-eye');
    }
})



    function changeColor() {
        let color = document.getElementById('cubepicker').value;
        let span = document.getElementById('cubos')
        let shadow = document.getElementById('shadow')
        let dot = document.getElementById('dot')
        let log = document.getElementById('log')
        let dotlogo = document.getElementById('dotlogo')
        let create = document.getElementById('create')
        shadow.style.background = color;
        dot.style.color = color;
        log.style.color = color;
        dotlogo.style.color = color;
        create.style.background = color;
        span.children[0].style.background = 'linear-gradient(#1c1e29,'+ color + ')';
        span.children[1].style.background = 'linear-gradient(#1c1e29,'+ color + ')';
        span.children[2].style.background = 'linear-gradient(#1c1e29,'+ color + ')';
        span.children[3].style.background = 'linear-gradient(#1c1e29,'+ color + ')';
    }

    
