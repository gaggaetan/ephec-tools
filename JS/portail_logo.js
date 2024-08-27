let choixUtilisateur
let newLogoPath = document.querySelector('.img-logo').src

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
    document.querySelector('.img-logo').src = IMGpath
}

chrome.storage.sync.get(['logochoisi'], function(result) {
    choixUtilisateur = result.logochoisi;

    if(choixUtilisateur === "old"){
        oldTheme()
    }
});


document.querySelector('.img-logo').onclick = changeLogo

function oldTheme(){
    libChangeLogo(chrome.runtime.getURL('IMG/old-logo-ephec-portail.png'));
    document.querySelectorAll('.profil[b-p2i6fi6whn], div .bg-primary[b-p2i6fi6whn]').forEach(el => {
        el.setAttribute('style', 'background-color: #F47A20 !important;');
    })
}

function newTheme(){
    libChangeLogo(newLogoPath);
    document.querySelectorAll('.profil[b-p2i6fi6whn], div .bg-primary[b-p2i6fi6whn]').forEach(el => {
        el.setAttribute('style', 'background-color: #1F2A37 !important;');
    })
}




