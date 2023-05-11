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




