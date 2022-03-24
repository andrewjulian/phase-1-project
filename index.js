
document.addEventListener('DOMContentLoaded', () => { 

    document.querySelector("#nameSearch").addEventListener("change", findPose)

    function findPose(){
        fetch("http://localhost:3000/poses")
        .then(response => response.json())
        .then(data => console.log(data))   //display pose function instead of console.log
    }

    function displayPose(data){
        
    }


})
