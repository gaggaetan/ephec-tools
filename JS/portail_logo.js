let choixUtilisateur
let newLogoPath = document.querySelector('.img-logo').src

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
    document.querySelector('.img-logo').src = IMGpath
}

chrome.storage.sync.get(['logochoisi'], function(result) {
    choixUtilisateur = result.logochoisi;

    if(choixUtilisateur === "old"){
        changeTheme('old')
    }
});


document.querySelector('.img-logo').onclick = changeLogo

function changeTheme(theme){
    libChangeLogo((theme === 'old' ? chrome.runtime.getURL('IMG/old-logo-ephec-portail.png') : newLogoPath));
    document.querySelectorAll('.profil[b-p2i6fi6whn], div .bg-primary[b-p2i6fi6whn]').forEach(el => {
        el.setAttribute('style', `background-color: ${(theme === 'old' ? '#F47A20' : '#1F2A37')} !important;`);
    })
}


