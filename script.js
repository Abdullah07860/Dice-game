
let num1=Math.floor((Math.random()*5)+1);  //to get a number b/w 1-6
let img11=num1+"no.png";
let dice_img1="diceimages/"+img11;
// console.log(dice_img1);

let imgfinal1=document.querySelectorAll("img")[0]
imgfinal1.setAttribute("src",dice_img1);


let num2=Math.floor((Math.random()*5)+1);  //to get a number b/w 1-6
let img22=num2+"no.png";
let dice_img2="diceimages/"+img22;
// console.log(dice_img2);

let imgfinal2=document.querySelectorAll("img")[1]
imgfinal2.setAttribute("src",dice_img2);

if(num1>num2){
    document.querySelector("h1").innerHTML="Player 1 is the Winner";
    document.querySelectorAll("h2")[0].style.color="orange";
    document.querySelectorAll("h2")[0].style.fontSize="3.2rem";
    document.querySelectorAll("img")[0].style.transform="scale(1.2)";
    document.querySelectorAll("h2")[0].style.boxShadow="1px 1px 30px 5px rgb(150 150 150)";
    document.querySelectorAll("h2")[0].style.backgroundColor="rgb(96 96 96)";
    document.querySelectorAll("h2")[0].style.borderRadius="12px";
}
else if(num1<num2){
    document.querySelector("h1").innerHTML="Player 2 is the Winner";
    document.querySelectorAll("h2")[1].style.color="orange";
    document.querySelectorAll("h2")[1].style.fontSize="3.2rem";
    document.querySelectorAll("img")[1].style.transform="scale(1.2)";
    document.querySelectorAll("h2")[1].style.boxShadow="1px 1px 30px 5px rgb(150 150 150)";
    document.querySelectorAll("h2")[1].style.backgroundColor="rgb(96 96 96)";
    document.querySelectorAll("h2")[1].style.borderRadius="12px";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}


// to make a refresh button
function mybtn(){
    location.reload();
    document.querySelectorAll("img")[0].style.transform="rotateY(185deg) rotateX(150deg) rotateZ(315deg)";
    document.querySelectorAll("img")[1].style.transform="rotateY(185deg) rotateX(150deg) rotateZ(315deg)";
}