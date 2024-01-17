let container=document.querySelector(".container")
console.log(container);
let  rbtn=document.getElementById("right");
let lbtn=document.getElementById("left")
let marginleft=0;
let dots=document.querySelector(".dots");
let colorchange;
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
let selectedid;
dots.addEventListener("click",(e)=>{
let target=e.target;
let dot=target.closest(".dot")
if(selectedid!=undefined){
    selectedid.classList.remove("active")
}
selectedid=dot;
dot.classList.add("active");
})


