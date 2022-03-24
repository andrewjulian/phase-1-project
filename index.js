
document.addEventListener('DOMContentLoaded', () => { 

    fetch("http://localhost:3000/poses")
    .then(response => response.json())
    .then(data => poseOptionDisplay(data))

    function poseOptionDisplay(data){
        const dropdownList = document.getElementById("nameDropDown")
        for(let objKey in data){
            const li = document.createElement("li")
            li.classList.add("dropdown-menu-item")
            li.textContent = data[objKey].english_name
            dropdownList.appendChild(li)
        }
    }
})
