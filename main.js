// Modifico dinamicamente le foto in pagina con fetch e manipolazione del dom
const container = document.getElementById("container")

fetch('https://lanciweb.github.io/demo/api/pictures/')
    .then(response => response.json())
    .then(data => {


        // Con il metodo forEach aggiungo in pagina tante "cards" quante sono presenti nel server esterno
        data.forEach(element => {

            container.innerHTML +=
                `<div class="card cards" id="click" number=${element.id}>
                    <div class="svg">
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_11_3)">
                        <circle cx="17" cy="16" r="16" fill="url(#paint0_linear_11_3)"/>
                        <circle cx="17" cy="16" r="15" stroke="url(#paint1_linear_11_3)" stroke-width="2"/>
                        </g>
                        <defs>
                        <filter id="filter0_d_11_3" x="0.6" y="0" width="34.8" height="35.4" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dx="1" dy="2"/>
                        <feGaussianBlur stdDeviation="0.7"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_11_3"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_11_3" result="shape"/>
                        </filter>
                        <linearGradient id="paint0_linear_11_3" x1="17" y1="0" x2="17" y2="32" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#5D0B03"/>
                        <stop offset="1" stop-color="#F66659"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_11_3" x1="10.1429" y1="7.76563e-07" x2="30.2571" y2="24.6857" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FFF3EB"/>
                        <stop offset="1" stop-color="#512312"/>
                        </linearGradient>
                        </defs>
                        </svg>
                    </div>
                    <figure class="image">
                        <img width="100%" height="100%" src="${element.url}"alt="">
                    </figure>
                    <div class="title">
                        <h3>${element.title}</h3>
                    </div>
                    <div class="date">
                        <h4>${element.date}</h4>
                    </div>
                </div>`





        });

// Creo variabile per togliere e mettere la classe "none" del modal
        const divModal = document.getElementById("modal");

// Creo array per inserire le "cards"
        // let arrayCards = [];
        arrayCards = document.querySelectorAll(".cards")

// Con il metodo forEach "estraggo" ciascuna card dall'array
        arrayCards.forEach(element => {

// Creo una variabile che mi restituisca il numero (id) di ciascuna foto
            let number = element.getAttribute("number")

// Click event con cui inserisco una foto dinamica in html
            element.addEventListener("click", (myFunction));

            function myFunction() {

                divModal.classList.remove("none");
                divModal.innerHTML =
                    `
                    <button id="btn-modal">
                        Close
                    </button>
                    <img class="img-modal" src="https://marcolanci.it/boolean/assets/pictures/${number}.png" alt="">
                    `
// Click event bottone per chiudere la foto
                const btnModal = document.getElementById("btn-modal");
                btnModal.addEventListener("click", (myFunction));
                function myFunction() {
                    divModal.classList.add("none");
                }
            }
        });
    });




