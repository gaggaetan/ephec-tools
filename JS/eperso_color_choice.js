


/* not available yet because it flash when loading the background color not fast pas enough


//the checkbox
let checkboxHTML


//default collor on start
chrome.storage.sync.get(['colorChoice'], function(result) {
    choixUtilisateur = result.colorChoice;
    if(choixUtilisateur == "new"){
        document.head.innerHTML += "<style>.bgcolor-orange-ephec { background-color: #1d1d1b !important; }\n body #heinscriptionsub li a,body #hehorairesub li a, body #hejuabs li a, body #hesarsub li a, body #hecososub li a { background-color: #1d1d1b; }\n #sidebar a, body #sidebar{ background-color: #1d1d1b; }</style>"
        checkboxHTML = "<div class='checkbox-wrapper-6'><input class='tgl tgl-light' id='cb1-6' type='checkbox'/><label class='tgl-btn' for='cb1-6'></div>"
    }else{
        document.head.innerHTML += "<style>.bgcolor-orange-ephec { background-color: #ed7520 !important; }\n body #heinscriptionsub li a,body #hehorairesub li a, body #hejuabs li a, body #hesarsub li a, body #hecososub li a { background-color: #1d5263; }\n #sidebar a, body #sidebar{ background-color: #013647; }</style>"
        checkboxHTML = "<div class='checkbox-wrapper-6'><input class='tgl tgl-light' id='cb1-6' type='checkbox' checked/><label class='tgl-btn' for='cb1-6'></div>"

    }

    //the checkbox
    document.querySelector(".divwelcom").outerHTML = "<div id='colorChangeContenair'>"+ document.querySelector(".divwelcom").outerHTML + checkboxHTML + "</div>"

    //when click
    checkbox = document.getElementById("cb1-6")
    checkbox.addEventListener("change", changeColor)

});



function changeColor (){
    if (checkbox.checked){
        document.head.innerHTML += "<style>.bgcolor-orange-ephec { background-color: #ed7520 !important; }\n body #heinscriptionsub li a,body #hehorairesub li a, body #hejuabs li a, body #hesarsub li a, body #hecososub li a { background-color: #1d5263; }\n #sidebar a, body #sidebar{ background-color: #013647; }</style>"
        chrome.storage.sync.set({ 'colorChoice': 'old' })
    }else{
        document.head.innerHTML += "<style>.bgcolor-orange-ephec { background-color: #1d1d1b !important; }\n body #heinscriptionsub li a,body #hehorairesub li a, body #hejuabs li a, body #hesarsub li a, body #hecososub li a { background-color: #1d1d1b; }\n #sidebar a, body #sidebar{ background-color: #1d1d1b; }</style>"
        chrome.storage.sync.set({ 'colorChoice': 'new' })
    }
}

*/
