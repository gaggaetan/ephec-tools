let choixUtilisateur
let NewLogoPath = document.querySelector('#logo').src

function changeLogo (){

    if (choixUtilisateur == "old"){
        libChangeLogo(NewLogoPath);
        browser.storage.sync.set({ 'logochoisi': 'new' })
        choixUtilisateur = "new"
    }else{
        libChangeLogo(browser.runtime.getURL('IMG/old-logo-ephec.png'));
        browser.storage.sync.set({ 'logochoisi': 'old' })
        choixUtilisateur = "old"
    }

}
function libChangeLogo (IMGpath){
    document.querySelector('#logo').src = browser.runtime.getURL(IMGpath)
}

browser.storage.sync.get(['logochoisi'], function(result) {
    choixUtilisateur = result.logochoisi;
    if(choixUtilisateur == "old"){
        libChangeLogo('IMG/old-logo-ephec.png');
    }
});


console.log(document.querySelector('#logo'))
document.querySelector('#logo').onclick = changeLogo




