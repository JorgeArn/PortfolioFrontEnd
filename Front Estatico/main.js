// APARECER Y ESCONDER EL FORMULARIO LOGIN 

let loginForm = document.getElementById("loginForm");
let logoLogin = document.getElementById("logoLogIn");
let botonCancel = document.getElementById("cancelar");

logoLogin.addEventListener("click", ejecutarLogin);
botonCancel.addEventListener("click", cerrarLogin);

function ejecutarLogin() {
    loginForm.style.display = "block";
}

function cerrarLogin() {
    loginForm.style.display = "none";
}


// LOGIN 

let botonIniciar = document.getElementById("iniciarSesion");

botonIniciar.addEventListener("click", login);

function login() {
    let user, password;

    user = document.getElementById("usuario").value;
    password = document.getElementById("contraseña").value;

    if (user == "jorge.arnal08@gmail.com" && password == "test07") {
        alert("Iniciaste sesión!");
        cerrarLogin();
    }
    else {
        alert("Datos incorrectos");
    }
}

// ANIMACIÓN DE LAS BARRAS DE SKILLS

window.onscroll = function () {
    efectoHabilidades();
};

function efectoHabilidades() {
    let skills = document.getElementById("hsSkills");
    let distanciaSkills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distanciaSkills >= 450 && distanciaSkills <= 1300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("angular").classList.add("barra-progreso3");
        document.getElementById("sql").classList.add("barra-progreso4");
        document.getElementById("ingles").classList.add("barra-progreso5");
    }
    else {
        document.getElementById("html").classList.remove("barra-progreso1");
        document.getElementById("js").classList.remove("barra-progreso2");
        document.getElementById("angular").classList.remove("barra-progreso3");
        document.getElementById("sql").classList.remove("barra-progreso4");
        document.getElementById("ingles").classList.remove("barra-progreso5");
    }

}




