// Milestone 1
// Sfruttando gli screen e gli asset in allegato riproduciamo la grafica
//  proposta in maniera statica: utilizzando soltanto HTML e CSS e
// riproducendo una singola fotografia
// (usiamo una qualunque immagine a piacimento)


// Milestone 2
// Utilizzando Postman, testiamo una chiamata a questo endpoint:
// https://lanciweb.github.io/demo/api/pictures/
// Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare
// a come poterli sfruttare.


// Milestone 3
// Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX
// all’API, sfruttando la risposta per generare dinamicamente in pagina
// una serie di foto!


// Font utilizzati:
// titoli: ‘Edu Tas Beginner’, sans-serif;
// date: ‘Sometype Mono’, ‘monospace’;
// (Dovreste sapere a questo punto cosa e come prendere da Google // Fonts


// Bonus
// rendi la pagina responsive, in modo che su mobile e tablet le foto
// si dispongano man mano una sotto l’altra ed il titolo abbia una
// dimensione adeguata

const container = document.getElementById("container")


fetch('https://lanciweb.github.io/demo/api/pictures/')
    .then(response => response.json())
    .then(data => {

        let arrayCards = [];

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


            arrayCards = document.querySelectorAll(".cards")
            // const modal = document.getElementById("modal")

            // element.addEventListener("click", function (){

            // })


        });

        arrayCards.forEach(element => {
            element.addEventListener("click", function () {
                modal.classList.remove("none");
                


            })
        });


        console.log(arrayCards)


    });




