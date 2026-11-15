let formElement = document.querySelector("#formElement");

formElement.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Form Submitted")
})