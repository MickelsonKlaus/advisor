//select element
const selectElement = selector => {
    const element = document.querySelector(selector);
    if (element) return element;
    return `${element} does not exist or selector is incorrect`
}

//elements
const id__span = selectElement("#id");
const quote = selectElement("#quote");

//advice button
const advice__button = selectElement(".advice__dice");

//randon advice generator function
async function generateAdvice() {
    let res = await fetch("https://api.adviceslip.com/advice");

    let advice = await res.json()

    id__span.innerText = advice.slip.id;
    quote.innerText = advice.slip.advice;
}

advice__button.addEventListener("click", generateAdvice);
window.addEventListener("load", generateAdvice);

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js').then(registration => {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function (err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}