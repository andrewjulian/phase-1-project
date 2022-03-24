
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

    //display pose based on selection from drop down
    const dropDownButton = document.getElementById("dropdownMenuButton2")
    console.log("Drop Down Text Content: ", dropDownButton)
    dropDownButton.addEventListener("change", (e) => {
        console.log("event working!")
        console.log(e.target.value)
        return e.target.value
    })


})
