
document.addEventListener('DOMContentLoaded', () => { 

    //get the pose data from the db
    let poses = []
    fetch("http://localhost:3000/poses")
    .then(response => response.json())
    .then(data => {
        poses = data
        poseOptionDisplay(poses)
    })

    //create the english pose name options under quick search dropdown
    function poseOptionDisplay(data){
        const dropdownList = document.getElementById("dropdownMenuButton1")
        for(let objKey in data){
            const option = document.createElement("option")
            option.classList.add("dropdown-menu-item")
            option.textContent = data[objKey].english_name
            option.setAttribute("value", data[objKey].english_name)
            dropdownList.appendChild(option)
        }
    }

    //search and return of objects when searched by Movement Type
    const dropDownButton = document.getElementById("dropdownMenuButton1")
    console.log("Drop Down Text Content: ", dropDownButton)
    dropDownButton.addEventListener("change", (e) => {
        for(let objKey in poses){
            if(poses[objKey].english_name == e.target.value){
                document.getElementById("englishNameText").textContent = `English Name: ${poses[objKey].english_name}`
                document.getElementById("sanskritNameText").textContent = `Sanskrit Name: ${poses[objKey].sanskrit_name}`
                document.getElementById("movementTypeText").textContent = `Movement Type: ${poses[objKey].movement_type}`
                document.getElementById("sequenceText").textContent = `Sequence: ${poses[objKey].sequence}`
                document.getElementById("poseImage").src = poses[objKey].img_url
            }
        }
    })




})
