let choixUtilisateur
let newLogoPath = document.querySelector(".logo-ephec-eperso").src


function changeLogo (){

    if (choixUtilisateur === "old"){
        newTheme()
        chrome.storage.sync.set({ 'logochoisi': 'new' })
        choixUtilisateur = "new"
    }else{
        oldTheme()
        chrome.storage.sync.set({ 'logochoisi': 'old' })
        choixUtilisateur = "old"
    }
}

function libChangeLogo (IMGpath){
    document.querySelector(".logo-ephec-eperso").src = IMGpath
}


chrome.storage.sync.get(['logochoisi'], function(result) {
    choixUtilisateur = result.logochoisi;
    if(choixUtilisateur === "old"){
        oldTheme()
    }
});


document.querySelector(".logo-ephec-eperso").onclick = changeLogo

function oldTheme(){
    libChangeLogo(chrome.runtime.getURL('IMG/old-logo-ephec-eperso.png'));
    document.querySelector('.navbar-dark.bgcolor-orange-ephec').style.backgroundColor = "#fd7e14"

    let sidebarElements = document.querySelectorAll('#sidebar a, body #sidebar');
    sidebarElements.forEach(function(el) {
        el.classList.remove('selected');
        el.classList.add('enable-extension')
    });

    let elements = document.querySelectorAll('body #heinscriptionsub li a, body #hehorairesub li a, body #hejuabs li a, body #hesarsub li a, body #hecososub li a, body #helaotestslangues li a');
    elements.forEach(function(el) {
        el.classList.add('enable-extension')
    });
}

function newTheme(){
    libChangeLogo(newLogoPath);
    document.querySelector('.navbar-dark.bgcolor-orange-ephec').style.backgroundColor = "#1d1d1b"

    let sidebarElements = document.querySelectorAll('#sidebar a, body #sidebar');
    sidebarElements.forEach(function(el) {
        el.classList.remove('selected');
        el.classList.remove('enable-extension')
    });

    let elements = document.querySelectorAll('body #heinscriptionsub li a, body #hehorairesub li a, body #hejuabs li a, body #hesarsub li a, body #hecososub li a, body #helaotestslangues li a');
    elements.forEach(function(el) {
        el.classList.remove('enable-extension')
    });
}