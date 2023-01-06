//your code here
let images = [
    `<img src="" alt="" class="img1">`,
    `<img src="" alt="" class="img2">`,
    `<img src="" alt="" class="img3">`,
    `<img src="" alt="" class="img4">`,
    `<img src="" alt="" class="img5">`,
    
]
// select elements
const main = document.querySelector("main");
const imgContaner = document.querySelector(".image-container");

// create h3
const heading = document.createElement("h3");
heading.setAttribute("id", "h");
heading.innerText = "Please click on the identicl tiles to verify that you are not a robot";
main.appendChild(heading);

// create reset and verify buttons
const verify = document.createElement("button");
const reset = document.createElement("button");
verify.innerHTML = "Verify";
reset.innerHTML = "Reset";
verify.setAttribute("id", "verify");
reset.setAttribute("id", "reset");
main.appendChild(verify);
main.appendChild(reset);

// create answer paragraph
const answer = document.createElement("p");
answer.setAttribute("id", "para");

let selected = 0;

// render images
renderImages();
// select images after rendering them
const imgs = document.querySelectorAll("img");

// adding even listener to all the images
imgs.forEach((item)=> {
     item.addEventListener("click", (e) => {
        item = e.currentTarget;
        item.classList.toggle("selected");
        console.log(checkSelectCount());
        // buttons state according to selected images
        if(checkSelectCount() == 0) {
            reset.classList.remove("show-btn");
            verify.classList.remove("show-btn");
        }
         else if(checkSelectCount() == 1) {
            reset.classList.add("show-btn");
            verify.classList.remove("show-btn");
        } else if(checkSelectCount() == 2) {
            reset.classList.add("show-btn");
            verify.classList.add("show-btn");
        }
         else {
            reset.classList.add("show-btn");
            verify.classList.remove("show-btn");
        }
    })
})

// program reset button
reset.addEventListener("click", ()=> {
    imgs.forEach((img)=> {
        img.classList.remove("selected");
    })
    reset.classList.remove("show-btn");
    verify.classList.remove("show-btn");
    answer.remove();
})

// program verify button
verify.addEventListener("click", ()=> {
    const selectedImages = document.querySelectorAll(".selected");
    // answer.innerHTML = "selectedImages";
    let firstClass = selectedImages[0].classList[0];
    let secondClass = selectedImages[1].classList[0];
    if(firstClass === secondClass) {
        answer.innerText = "You are a human. Congratulations!";
    } else {
        answer.innerText = "We can't verify you as a human. You selected the non-identical tiles";

    }
    verify.classList.remove("show-btn");
    main.appendChild(answer);
})

function renderImages() {
    // render first 5 images
    imgContaner.innerHTML = images.join("");
    // render random image
    const randomImg = document.createElement("img");
    randomImg.src = "";
    randomImg.alt = "";
    randomImg.classList.add(`img${genrateRandomNumber(6)}`);
    // console.log(randomImg);
    imgContaner.append(randomImg);

}

function genrateRandomNumber(n) {
    n = n + 1;
    return Math.floor(Math.random() * (n - 1) + 1);
}

// check how many images selected
function checkSelectCount() {
    let count = 0;
    imgs.forEach((img) => {
        if(img.classList.contains("selected")) {
            count++;
        }
    })
    return count;
    // console.log(count);
}