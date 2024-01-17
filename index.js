let container=document.querySelector(".container")
console.log(container);
let  rbtn=document.getElementById("right");
let lbtn=document.getElementById("left")
let marginleft=0;
let dots=document.querySelectorAll(".dot");
rbtn.addEventListener("click",()=>{

    if(container&&marginleft==200){
        marginleft=0;
        container.style.marginLeft="-"+marginleft+"vw";
    
    }
    else{
        marginleft=marginleft+100;
        container.style.marginLeft="-"+marginleft+"vw";
    }



   
})
lbtn.addEventListener("click",()=>{
    if(marginleft==0){
        marginleft=200;
        container.style.marginLeft="-"+marginleft+"vw";
    }
    else{
        marginleft=marginleft-100;
        container.style.marginLeft="-"+marginleft+"vw";

    }

})
function currentSlide(n){
    marginleft=n
    container.style.marginLeft="-"+marginleft+"vw";
}

// function slide(){

//     if(container&&marginleft==200){
//         marginleft=0;
//         container.style.marginLeft="-"+marginleft+"vw";
//     }
//     else{
//         marginleft=marginleft+100;
//         container.style.marginLeft="-"+marginleft+"vw"
//     }
//     console.log(marginleft);
 
// }
// setInterval(slide,2000)

