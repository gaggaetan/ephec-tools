function changeLogo (){
    logoActuel = document.querySelector(".logo-ephec-eperso").src
    if (logoActuel == "chrome-extension://jbjigfmokfgbgjomijbbacfjnhljcdfb/IMG/old-logo-ephec-eperso.png"){
        libChangeLogo('IMG/logo-ephec-eperso.png');
        chrome.storage.sync.set({ 'logochoisi': 'new' })
    }else{
        libChangeLogo('IMG/old-logo-ephec-eperso.png');
        chrome.storage.sync.set({ 'logochoisi': 'old' })
    }
}
function libChangeLogo (IMGpath){
    document.querySelector(".logo-ephec-eperso").src = chrome.runtime.getURL(IMGpath)
}


chrome.storage.sync.get(['logochoisi'], function(result) {
    var choixUtilisateur = result.logochoisi;
    if(choixUtilisateur == "new"){
        libChangeLogo('IMG/logo-ephec-eperso.png');
    }else{
        libChangeLogo('IMG/old-logo-ephec-eperso.png');
    }
});

document.querySelector(".logo-ephec-eperso").onclick = changeLogo

