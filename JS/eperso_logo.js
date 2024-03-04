let choixUtilisateur

function changeLogo (){

    if (choixUtilisateur == "old"){
        libChangeLogo('IMG/logo-ephec-eperso.png');
        chrome.storage.sync.set({ 'logochoisi': 'new' })
        choixUtilisateur = "new"
    }else{
        libChangeLogo('IMG/old-logo-ephec-eperso.png');
        chrome.storage.sync.set({ 'logochoisi': 'old' })
        choixUtilisateur = "old"
    }
}

function libChangeLogo (IMGpath){
    document.querySelector(".logo-ephec-eperso").src = chrome.runtime.getURL(IMGpath)
}



chrome.storage.sync.get(['logochoisi'], function(result) {
    choixUtilisateur = result.logochoisi;
    if(choixUtilisateur == "new"){
        libChangeLogo('IMG/logo-ephec-eperso.png');
    }else{
        libChangeLogo('IMG/old-logo-ephec-eperso.png');
    }
});


document.querySelector(".logo-ephec-eperso").onclick = changeLogo