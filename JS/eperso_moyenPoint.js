if(document.querySelectorAll('tbody').length !== 5){
    console.log('no point')

}else{
    let tab = document.querySelectorAll('tbody')[3]
    let rows = tab.getElementsByTagName("tr")
    let firstRow = rows[0]
    let tabPoint = []
    let temp = []
    let point
    if(firstRow.getElementsByTagName("th").length === 7){
        for(let x = 4; x < 6; x++){
            temp = []
            for (let i = 1; i < rows.length; i++) {
                point = rows[i].getElementsByTagName("td")[x].innerText
                if(point.match(/^(\d{1,2}\.\d) \/20$/)){
                    temp.push(point.match(/^(\d{1,2}\.\d) \/20$/)[1])

                }
            }
            tabPoint.push(temp)
        }
        let moyenne = 0
        let moyenne2 = 0
        if (tabPoint[0].length > 0) {
            for (let x of tabPoint[0]) {
                moyenne += +x
            }
        }
        if (tabPoint[1].length > 0) {
            for (let x of tabPoint[1]) {
                moyenne2 += +x
            }
        }
        tab.innerHTML += `<tr style="background-color: lightblue; border: solid red 1px"><td>moyenne</td><td></td><td></td><td></td><td>${(moyenne === 0 ? ' ' : (moyenne / tabPoint[0].length).toFixed(1))}</td><td>${(moyenne2 === 0 ? ' ' : (moyenne2 / tabPoint[1].length).toFixed(1))}</td><td></td><tr>`
    }else {
        for (let x = 7; x < 9; x++) {
            temp = []
            for (let i = 1; i < rows.length; i++) {
                point = rows[i].getElementsByTagName("td")[x].innerText
                if (point.match(/^(\d{1,2}\.\d) \/20$/)) {
                    temp.push(point.match(/^(\d{1,2}\.\d) \/20$/)[1])
                }
            }
            tabPoint.push(temp)
        }
        let moyenne = 0
        let moyenne2 = 0
        if (tabPoint[0].length > 0) {
            for (let x of tabPoint[0]) {
                moyenne += +x
            }
        }
        if (tabPoint[1].length > 0) {
            for (let x of tabPoint[1]) {
                moyenne2 += +x
            }
        }
        tab.innerHTML += `<tr style="background-color: lightblue; border: solid red 1px"><td>moyenne</td><td></td><td></td><td></td><td></td><td></td><td></td><td>${(moyenne === 0 ? ' ' : (moyenne / tabPoint[0].length).toFixed(1))}</td><td>${(moyenne2 === 0 ? ' ' : (moyenne2 / tabPoint[1].length).toFixed(1))}</td><tr>`
    }
}