const button = document.querySelector("#button1")

button.addEventListener("click", function() {
    // need to say function() follwed by parenthesis 
    // so that alert is condition controlled
    alert("button works!")
})  

const MyInput = document.querySelector("#text1")

myInput.addEventListener("change", function(){
    alert(MyInput.value)
})

