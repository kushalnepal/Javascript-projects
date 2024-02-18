const itemsArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) :
    [];

console.log(itemsArray);

document.querySelector("#enter").addEventListener("click", () => {
    const items = document.querySelector("#item");
    createItems(items);
})
// Now lets access that array and display function
function displayArray() {
    let items = "";
    for (i = 0; i < itemsArray.length; i++) {
        //template literals or carate operator
        items += ` 
    <div class="item">

        <div class="input-controller">
            <textarea disabled>${itemsArray[i]}</textarea>
            <div class="edit-controller">
                <i class="fa-solid fa-check deleteBtn"></i>
                <i class="fa-solid fa-pen-to-square editBtn"></i>
            </div>
        </div>

        <div class="update-controller">
            <button class="saveBtn">Save</button>
            <button class="cancelBtn">Cancel</button>
        </div>
    </div>  `
    }

    document.querySelector(".todo-list").innerHTML = items;
    activateDeleteListners();
    activateEditListners();
    activateSaveListners();
    activateCancelListeners();



    function activateCancelListeners(){
        let cancelBtn= document.querySelectorAll(".cancelBtn");
        let updatecontroller=document.querySelectorAll(".update-controller");
        let inputs=document.querySelectorAll(".input-controller textarea")

        cancelBtn.forEach((cn,i)=>{
            cn.addEventListener("click",()=>{
                updatecontroller[i].style.display="none";
                inputs[i].disabled=true;
            })
        })
        // console.log("activate CancelListeners")
    }
    function activateEditListners() {
        let editBtn = document.querySelectorAll('.editBtn')
        let updatecontroller = document.querySelectorAll(".update-controller")
        let inputs = document.querySelectorAll(".input-controller textarea")
        editBtn.forEach((ed, i) => {
            ed.addEventListener("click", () => {
                updatecontroller[i].style.display = "block";
                inputs[i].disabled = false;
            })
        })

    }
    function activateSaveListners(){
     const saveBtn =document.querySelectorAll(".saveBtn");
     const inputs =document.querySelectorAll(".input-controller textarea");
      
     saveBtn.forEach((sv,i)=>{
        sv.addEventListener("click",()=>{
            updateitems(inputs[i].value,i)
        })
     })
    }
     function updateitems(text,i){
        itemsArray[i]=text;
        localStorage.setItem("items",JSON.stringify(itemsArray));
        location.reload();
     }


    function activateDeleteListners() {
        let deleteBtn = document.querySelectorAll('.deleteBtn');
        deleteBtn.forEach((db, i) => {
            db.addEventListener("click", () => {
                deleteitems(i)
            })
        });
        function deleteitems(i) {
            itemsArray.splice(i, 1);
            localStorage.setItem("items", JSON.stringify(itemsArray))
            location.reload();
        }
    }
}
function createItems(items) {
    itemsArray.push(items.value);
    localStorage.setItem("items", JSON.stringify(itemsArray));
    location.reload();
    //Bar Bar push garna reload gari raknu parxa so in order to prevent 
    //that we use location.reload();

}

function displayDate() {
    let date = new Date();
    date = date.toString().split(" ")
    //date lai string ma convert gareko space le separate gareko laii
    //Actually they are an array
    document.querySelector("#date").innerHTML = date[1] + " " + date[2] + " " + date[3] + " "
    console.log(date);
}
window.onload = function () {
    displayDate();
    displayArray();
}