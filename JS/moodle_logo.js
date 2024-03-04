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
    document.querySelector('#logo').src = chrome.runtime.getURL(IMGpath)
}

chrome.storage.sync.get(['logochoisi'], function(result) {
    choixUtilisateur = result.logochoisi;
    if(choixUtilisateur == "new"){
        libChangeLogo('IMG/logo-ephec.png');
    }else{
        libChangeLogo('IMG/old-logo-ephec.png');
    }
});


console.log(document.querySelector('#logo'))
document.querySelector('#logo').onclick = changeLogo




