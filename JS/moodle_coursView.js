var divParent = document.getElementById('coc-courselist');
var divEnfants = divParent.children;
var ids = [];
let displayCheckboxes = "none"

//get all child id from the courses that appear on your screen (not the old one that are already hidden)
for (var i = 0; i < divEnfants.length; i++) {
    let sousDiv = document.getElementById(divEnfants[i].id).querySelector('.toplevelcategorydiv');
    if (!(sousDiv.classList.contains('coc-hidden'))) {
        ids.push(divEnfants[i].id);
    }
}




//check if informations is already into the navigator
for (let el of ids) {
    chrome.storage.sync.get([el], function (result) {
        if (result[el] === true) {
            document.getElementById(el).outerHTML = "<div class='checkBoxDiplay' id='" + el + "Father'><label class='checkbocks'>\n <input type=\"checkbox\" checked>\n <span class=\"slider\"></span>\n </label>" + document.getElementById(el).outerHTML + "</div>"
        } else if (result[el] === false) {
            document.getElementById(el).outerHTML = "<div class='checkBoxDiplay DoNotDisplay' id='" + el + "Father'><label class='checkbocks'>\n <input type=\"checkbox\" >\n <span class=\"slider\"></span>\n </label>" + document.getElementById(el).outerHTML + "</div>"
        }else{
            document.getElementById(el).outerHTML = "<div class='checkBoxDiplay' id='" + el + "Father'><label class='checkbocks'>\n <input type=\"checkbox\" checked>\n <span class=\"slider\"></span>\n </label>" + document.getElementById(el).outerHTML + "</div>"
            chrome.storage.sync.set({ [el]: true })
        }

    })
}





document.getElementById("inst10549").innerHTML =  document.getElementById("inst10549").outerHTML + "<div id='DiplayCoursesButton'>show/hide some courses</div>"

document.getElementById("DiplayCoursesButton").onclick = showCheckbox


function showCheckbox (){

    if (displayCheckboxes == "none"){


        //display the checkbox
        var elements = document.querySelectorAll('.checkbocks');
        elements.forEach(function(element) {
            element.style.display = "inline-block";
        });
        displayCheckboxes = "inline-block"


        showAllCourses()

    }else{
        // hide all the boxes
        var elements = document.querySelectorAll('.checkbocks');
        elements.forEach(function(element) {
            element.style.display = "none";
        });

        hideCoursesNeeded()

        displayCheckboxes = "none"
    }
}

function hideCoursesNeeded(){

    for (let el of ids) {
        if (!(document.querySelector('#' + el + "Father input").checked)) {
            document.querySelector('#' + el + "Father").classList.add("DoNotDisplay")
            chrome.storage.sync.set({ [el]: false })
        }else{
            chrome.storage.sync.set({ [el]: true })
        }
    }
}

function showAllCourses (){
    for (let el of ids){
        document.querySelector('#' + el + "Father").classList.remove("DoNotDisplay")
    }
}