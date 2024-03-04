let choixUtilisateur

function changeLogo (){

    if (choixUtilisateur == "old"){
        libChangeLogo('IMG/logo-ephec.png');
        chrome.storage.sync.set({ 'logochoisi': 'new' })
        choixUtilisateur = "new"
    }else{
        libChangeLogo('IMG/old-logo-ephec-portail.png');
        chrome.storage.sync.set({ 'logochoisi': 'old' })
        choixUtilisateur = "old"
    }

}
function libChangeLogo (IMGpath){
    document.querySelector('.img-logo').src = chrome.runtime.getURL(IMGpath)
}

chrome.storage.sync.get(['logochoisi'], function(result) {
    choixUtilisateur = result.logochoisi;
    if(choixUtilisateur == "new"){
        libChangeLogo('IMG/logo-ephec.png');
    }else{
        libChangeLogo('IMG/old-logo-ephec-portail.png');
    }
});



document.querySelector('.img-logo').onclick = changeLogo




