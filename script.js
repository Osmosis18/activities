document.getElementById("btn").onclick = function () {
    let text = document.getElementById("text").value
    let date = document.getElementById("date").value
    let time = document.getElementById("time").value
    // alert(text)
    // alert(date)
    // alert(time)
    if (text == "" || date == "" || time == "") {
        alert("field cannot be empty");
    } else {
        let data = {
            thetext: text,
            thedate: date,
            thetime: time
        }
        // console.log(data);
        // let converted = JSON.stringify(data)//
        // localStorage.setItem("tasks", converted )
        let check = localStorage.getItem("tasks")


        if (check == null) {
            localStorage.setItem("tasks", JSON.stringify([data]));
            location.reload()

        } else {
            // console.log(check);
            let originalForm = JSON.parse(check)
            originalForm.unshift(data)

            localStorage.setItem("tasks", JSON.stringify(originalForm))
            location.reload()
        }
    }
}


let storeData = localStorage.getItem("tasks")
let convertedData = JSON.parse(storeData)



for (each of convertedData) {
    let div = document.createElement("div") //<div></div>
    div.setAttribute("class", "task") //<div class="task"></div>

    let p = document.createElement("p") //<p></p>
    p.innerText = each.thetext //<p> hhhhhtff </p>

    let small = document.createElement("small") //<small></small>
    small.innerText = each.thedate + "  " + each.thetime //<small> hdhgsa </small>

    div.appendChild(p)  //<div class="task"> <p> hhgddgfg </p> <small></small> </div>
    div.appendChild(small)

    document.querySelector(".tasks").append(div)

    div.onclick = function(){
        let ask = confirm("Are you sure you want to delete?")

        if (ask == true){

        // alert(p.innerText)
        let newTasks = convertedData.filter(function(each){return each.thetext != p.innerText})
        localStorage.setItem("tasks", JSON.stringify(newTasks))
        location.reload()
    }
} 
}