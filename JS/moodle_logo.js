let choixUtilisateur
let NewLogoPath = document.querySelector('#logo').src

function changeLogo (){

    if (choixUtilisateur == "old"){
        libChangeLogo(NewLogoPath);
        chrome.storage.sync.set({ 'logochoisi': 'new' })
        choixUtilisateur = "new"
    }else{
        libChangeLogo(chrome.runtime.getURL('IMG/old-logo-ephec.png'));
        chrome.storage.sync.set({ 'logochoisi': 'old' })
        choixUtilisateur = "old"
    }

}
function libChangeLogo (IMGpath){
    document.querySelector('#logo').src = IMGpath
}

chrome.storage.sync.get(['logochoisi'], function(result) {
    choixUtilisateur = result.logochoisi;
    if(choixUtilisateur == "old"){
        libChangeLogo(chrome.runtime.getURL('IMG/old-logo-ephec.png'));
    }
});


console.log(document.querySelector('#logo'))
document.querySelector('#logo').onclick = changeLogo




