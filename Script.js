const button = document.querySelector("#button1")

button.addEventListener("click", function() {
    // need to say function() followed by parenthesis
    // so that alert is condition controlled
    alert("button works!")
})  

const MyInput = document.querySelector("#text1")

const SubmitButton = document.querySelector("#submit-button")

SubmitButton.addEventListener("click", function(){
    alert(MyInput.value)
})

// In the event listener, click responds when the button is pressed, however "change" is just when the input changes

// I FIGURED IT OUT!!!
// THe first issue is that I had to change the event listener from "change" to "click".
// Then however, it would only work when i interacted with the text box, I didn't know why until I realised the constant
// I was using was the same as what I was telling the program to listen for (in this case the textbox)
// So then I just changed what I wanted the js to listen for (whenever someone clicked the submit button)