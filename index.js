const adviceId = document.querySelector(".advice-title-id")
const adviceQuote = document.querySelector(".advice-quote")
const renderAdviceBtn =  document.querySelector(".render-random-advice-button")

renderAdviceBtn.addEventListener("click", () => {
    fetch("https://api.adviceslip.com/advice")
        .then( response => response.json())
        .then( data => {
            adviceId.textContent = `Advice #${data.slip.id}`
            adviceQuote.textContent = data.slip.advice
        })
})