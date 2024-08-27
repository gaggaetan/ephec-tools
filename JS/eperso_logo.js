let choixUtilisateur
let newLogoPath = document.querySelector(".logo-ephec-eperso").src


function changeLogo (){

    if (choixUtilisateur === "old"){
        changeTheme('new')
        chrome.storage.sync.set({ 'logochoisi': 'new' })
        choixUtilisateur = "new"
    }else{
        changeTheme('old')
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
        changeTheme('old')
    }
});


document.querySelector(".logo-ephec-eperso").onclick = changeLogo


function changeTheme(theme){
    libChangeLogo((theme === 'old' ? chrome.runtime.getURL('IMG/old-logo-ephec-eperso.png') : newLogoPath));
    document.querySelector('.navbar-dark.bgcolor-orange-ephec').style.backgroundColor = (theme === 'old' ? "#fd7e14" : "#1d1d1b")
    let sidebarElements = document.querySelectorAll('#sidebar a, body #sidebar');
    sidebarElements.forEach(function(el) {
        el.classList.remove('selected');
        if(theme === 'old'){
            el.classList.add('enable-extension')
        }else{
            el.classList.remove('enable-extension')
        }

    });

    let elements = document.querySelectorAll('body #heinscriptionsub li a, body #hehorairesub li a, body #hejuabs li a, body #hesarsub li a, body #hecososub li a, body #helaotestslangues li a');
    elements.forEach(function(el) {
        if(theme === 'old'){
            el.classList.add('enable-extension')
        }else{
            el.classList.remove('enable-extension')
        }
    });
}