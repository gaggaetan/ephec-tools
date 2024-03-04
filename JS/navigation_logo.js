let choixUtilisateur

function changeLogo (){

    if (choixUtilisateur == "old"){
        libChangeLogo('IMG/logo-ephec.png');
        chrome.storage.sync.set({ 'logochoisi': 'new' })
        choixUtilisateur = "new"
    }else{
        libChangeLogo('IMG/old-logo-ephec.png');
        chrome.storage.sync.set({ 'logochoisi': 'old' })
        choixUtilisateur = "old"
    }

}
function libChangeLogo (IMGpath){
    document.querySelector('.link_container  img').src = chrome.runtime.getURL(IMGpath)
}

chrome.storage.sync.get(['logochoisi'], function(result) {
    choixUtilisateur = result.logochoisi;
    if(choixUtilisateur == "new"){
        libChangeLogo('IMG/logo-ephec.png');
    }else{
        libChangeLogo('IMG/old-logo-ephec.png');
    }
});

document.querySelector('.link_container  img').onclick = changeLogo



