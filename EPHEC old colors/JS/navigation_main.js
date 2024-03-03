
function changeLogo (){
    logoActuel = document.querySelector('.link_container  img').src
    if (logoActuel == "chrome-extension://jbjigfmokfgbgjomijbbacfjnhljcdfb/IMG/old-logo-ephec.png"){
        libChangeLogo('IMG/logo-ephec.png');
        chrome.storage.sync.set({ 'logochoisi': 'new' })
    }else{
        libChangeLogo('IMG/old-logo-ephec.png');
        chrome.storage.sync.set({ 'logochoisi': 'old' })
    }
}
function libChangeLogo (IMGpath){
    document.querySelector('.link_container  img').src = chrome.runtime.getURL(IMGpath)
}


chrome.storage.sync.get(['logochoisi'], function(result) {
    var choixUtilisateur = result.logochoisi;
    if(choixUtilisateur == "new"){
        libChangeLogo('IMG/logo-ephec.png');
    }else{
        libChangeLogo('IMG/old-logo-ephec.png');
    }
});

document.querySelector('.link_container  img').onclick = changeLogo



