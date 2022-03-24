
document.addEventListener('DOMContentLoaded', () => { 

    //get the pose data from the db
    fetch("http://localhost:3000/poses")
    .then(response => response.json())
    .then(data => poseOptionDisplay(data))

    //create the english pose name options under quick search dropdown
    function poseOptionDisplay(data){
        const dropdownList = document.getElementById("nameDropDown")
        for(let objKey in data){
            const button = document.createElement("button")
            button.classList.add("dropdown-menu-item")
            button.setAttribute("type", "button")
            button.textContent = data[objKey].english_name
            dropdownList.appendChild(button)
        }
    }

    //display pose based on selection from drop down
    const dropDownButton = document.getElementById("nameDropDown")
    console.log("Drop Down Text Content: ", dropDownButton)
    dropDownButton.addEventListener("change", () => {
        console.log("event working!")
        console.log(dropDownButton.textContent)
        return dropDownButton.textContent
    })
    


})
