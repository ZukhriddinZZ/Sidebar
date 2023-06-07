const btn = document.querySelector(".i_c")
const sidebar = document.querySelector(".aside")
const closeBtn = document.querySelector(".fa-times");

btn.addEventListener("click", function(){
sidebar.classList.toggle("sidebar")
})

closeBtn.addEventListener("click", function(){
    sidebar.classList.toggle("sidebar")
})

