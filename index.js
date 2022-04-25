
document.addEventListener('DOMContentLoaded', () => { 

    let poses = []

    function fetchPoses(){
        //get the pose data from the db
        fetch("http://localhost:3000/poses")
        .then(response => response.json())
        .then(data => {
            poses = data
            poseOptionDisplay(poses)
        })
    }   

    fetchPoses();


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

    let poseNumber = -1
    let poseFav = ""

    //search and return of objects when searched pose name
    const dropDownButton = document.getElementById("dropdownMenuButton1")
    dropDownButton.addEventListener("change", (e) => {
        console.log("pose button event listener")
        fetchPoses()
        for(let objKey in poses){
            if(poses[objKey].english_name == e.target.value){
                poseFav = poses[objKey].favorite
                poseNumber = poses[objKey].id
                document.getElementById("englishNameText").textContent = `English Name: ${poses[objKey].english_name}`
                document.getElementById("sanskritNameText").textContent = `Sanskrit Name: ${poses[objKey].sanskrit_name}`
                document.getElementById("movementTypeText").textContent = `Movement Type: ${poses[objKey].movement_type}`
                document.getElementById("sequenceText").textContent = `Sequence: ${poses[objKey].sequence}`
                document.getElementById("poseImage").src = poses[objKey].img_url
            }
        }
    })

    //changes favorite status of pose with Save Pose to Favorites Button
    document.getElementById("savePoseBtn").addEventListener("click", () => {

        console.log("save pose to favorites button event listener")

        if(poseFav == "no") {
            fetch(`http://localhost:3000/poses/${poseNumber}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                }, 
                body: JSON.stringify(
                    {
                        "favorite": "yes"
                    }
                )
            })
            .then(response => response.json())
            .then(data => console.log(data))

        } else if (poseFav == "yes") {
            fetch(`http://localhost:3000/poses/${poseNumber}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                }, 
                body: JSON.stringify(
                    {
                        "favorite": "no"
                    }
                )
            })
            .then(response => response.json())
            .then(data => console.log(data))
        }
    })

    //display of items based on Movement Type
    const dropDownButton2 = document.getElementById("dropdownMenuButton2")
    dropDownButton2.addEventListener("change", (e) => {

        console.log("movement type button event listener")
        fetchPoses();
        
        document.getElementById("outputCardTitle").textContent = `Poses with the Movement Type:  ${e.target.value}`
        
        const items = document.querySelectorAll(".sequenceItem")
        items.forEach(element => element.remove()) 

        const movementType = []
        
        for(let objKey in poses){
            if(poses[objKey].movement_type == e.target.value){
                movementType.push(poses[objKey].english_name)
            }
        }

        movementType.forEach(element => {
            const li = document.createElement("li")
            li.textContent = element
            li.classList.add("sequenceItem")
            sequenceCard.appendChild(li)
        })
    })

    //display of items based on Sequence Name
    const dropDownButton3 = document.getElementById("dropdownMenuButton3")
    dropDownButton3.addEventListener("change", (e) => {

        console.log("sequence button event listener")
        //fetchPoses()

        document.getElementById("outputCardTitle").textContent = `Poses within the Sequence:  ${e.target.value}`
        
        const items = document.querySelectorAll(".sequenceItem")
        items.forEach(element => element.remove()) 

        const poseSequence = []
        
        for(let objKey in poses){
            if(poses[objKey].sequence == e.target.value){
                poseSequence.push(poses[objKey].english_name)
            }
        }

        poseSequence.forEach(element => {
            const li = document.createElement("li")
            li.textContent = element
            li.classList.add("sequenceItem")
            sequenceCard.appendChild(li)
        })
    })

    //display of times that are selected as favorites
    const dropDownButton4 = document.getElementById("dropdownMenuButton4")
    dropDownButton4.addEventListener("change", (e) => {

        console.log("favorite button event listener")
        fetchPoses()

        document.getElementById("outputCardTitle").textContent = `Favorited Poses`
        
        const items = document.querySelectorAll(".sequenceItem")
        items.forEach(element => element.remove()) 

        const poseSequence = []
        
        for(let objKey in poses){
            if(poses[objKey].favorite == "yes"){
                poseSequence.push(poses[objKey].english_name)
            }
        }

        poseSequence.forEach(element => {
            const li = document.createElement("li")
            li.textContent = element
            li.classList.add("sequenceItem")
            sequenceCard.appendChild(li)
        })
    })

})
