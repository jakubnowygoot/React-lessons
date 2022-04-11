/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */
let getBody = document.querySelector("body")
let firstLi = document.querySelector("li:first-child");
let secondLi = document.querySelector("li:nth-child(2)");
let thirdLi = document.querySelector("li:nth-child(3)");
let fourthLi = document.querySelector("li:nth-child(4)");
let fifthLi = document.querySelector("li:nth-child(5)");
let sixthLi = document.querySelector("li:last-child");
let arr = [firstLi,secondLi,thirdLi,fourthLi,fifthLi,sixthLi];

arr[0].addEventListener("click",function (event){
    let newImg = document.createElement("img");
    let newButton = document.createElement("button");
    let newDiv = document.createElement("div");
    getBody.appendChild(newDiv);
    newDiv.classList.add("fullScreen");
    newDiv.appendChild(newImg);
    newDiv.appendChild(newButton);
    newImg.src = this.firstElementChild.src;
    newButton.classList.add("close");
    newButton.innerText = "Close";
    let deleteButton = document.querySelector(".close");
    let deleteDiv = document.querySelector(".fullScreen");
    deleteButton.addEventListener("click",function (eve){
        deleteDiv.remove()
    });
});
arr[1].addEventListener("click",function (event){
    let newImg = document.createElement("img");
    let newButton = document.createElement("button");
    let newDiv = document.createElement("div");
    getBody.appendChild(newDiv);
    newDiv.classList.add("fullScreen");
    newDiv.appendChild(newImg);
    newDiv.appendChild(newButton);
    newImg.src = this.firstElementChild.src;
    newButton.classList.add("close");
    newButton.innerText = "Close";
    let deleteButton = document.querySelector(".close");
    let deleteDiv = document.querySelector(".fullScreen");
    deleteButton.addEventListener("click",function (eve){
        deleteDiv.remove()
    });
});
arr[2].addEventListener("click",function (event){
    let newImg = document.createElement("img");
    let newButton = document.createElement("button");
    let newDiv = document.createElement("div");
    getBody.appendChild(newDiv);
    newDiv.classList.add("fullScreen");
    newDiv.appendChild(newImg);
    newDiv.appendChild(newButton);
    newImg.src = this.firstElementChild.src;
    newButton.classList.add("close");
    newButton.innerText = "Close";
    let deleteButton = document.querySelector(".close");
    let deleteDiv = document.querySelector(".fullScreen");
    deleteButton.addEventListener("click",function (eve){
        deleteDiv.remove()
    });
});
arr[3].addEventListener("click",function (event){
    let newImg = document.createElement("img");
    let newButton = document.createElement("button");
    let newDiv = document.createElement("div");
    getBody.appendChild(newDiv);
    newDiv.classList.add("fullScreen");
    newDiv.appendChild(newImg);
    newDiv.appendChild(newButton);
    newImg.src = this.firstElementChild.src;
    newButton.classList.add("close");
    newButton.innerText = "Close";
    let deleteButton = document.querySelector(".close");
    let deleteDiv = document.querySelector(".fullScreen");
    deleteButton.addEventListener("click",function (eve){
        deleteDiv.remove()
    });
});
arr[4].addEventListener("click",function (event){
    let newImg = document.createElement("img");
    let newButton = document.createElement("button");
    let newDiv = document.createElement("div");
    getBody.appendChild(newDiv);
    newDiv.classList.add("fullScreen");
    newDiv.appendChild(newImg);
    newDiv.appendChild(newButton);
    newImg.src = this.firstElementChild.src;
    newButton.classList.add("close");
    newButton.innerText = "Close";
    let deleteButton = document.querySelector(".close");
    let deleteDiv = document.querySelector(".fullScreen");
    deleteButton.addEventListener("click",function (eve){
        deleteDiv.remove()
    });
});
arr[5].addEventListener("click",function (event){
    let newImg = document.createElement("img");
    let newButton = document.createElement("button");
    let newDiv = document.createElement("div");
    getBody.appendChild(newDiv);
    newDiv.classList.add("fullScreen");
    newDiv.appendChild(newImg);
    newDiv.appendChild(newButton);
    newImg.src = this.firstElementChild.src;
    newButton.classList.add("close");
    newButton.innerText = "Close";
    let deleteButton = document.querySelector(".close");
    let deleteDiv = document.querySelector(".fullScreen");
    deleteButton.addEventListener("click",function (eve){
        deleteDiv.remove()
    });
});