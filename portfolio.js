const url = "https://api.github.com/users/Naiso2022/repos";
const headlineOne = document.querySelector('.headline-one');
const headlineTwo = document.querySelector('.headline-two');
const headlineFour = document.querySelector('.headline-four');
const headlineFive = document.querySelector('.headline-five');
const idsRing = document.querySelector('.lds-ring');
const loading = document.querySelector('.loading');


async function githubApi() {
    let response = await fetch(url);
   

    if(response.ok) {
        let data = await response.json();
        //console.log(data)

        idsRing.innerHTML = ``;
        loading.innerHTML = ``;

        for (let i = 0; i < 1; i++) {
            console.log(data[3].description)
            headlineOne.innerHTML += `<p class="apiHeadlineOne">${data[3].description}</p>`;
        }

        /*data.Workexperience.forEach(function(element) {
        ulListOne.innerHTML +=`De
        <li class="moje">
            ${element.year}: ${element.titel}, ${element.company}, ${element.city}.
            </li>
            `;
        })*/
    } else {
        console.log("HTTP-Error: " + response.status);
    }
}
githubApi();


async function githubApi2() {
    let response = await fetch(url);
   

    if(response.ok) {
        let datas = await response.json();
       //console.log(datas)

        for (let i = 0; i < 1; i++) {
            console.log(datas[3].description)
            headlineTwo.innerHTML += `<p class="apiHeadlineTwo">${datas[3].name}</p>`;
        }

        /*data.Workexperience.forEach(function(element) {
        ulListOne.innerHTML +=`
        <li class="moje">
            ${element.year}: ${element.titel}, ${element.company}, ${element.city}.
            </li>
            `;
        })*/
    } else {
        console.log("HTTP-Error: " + response.status);
    }
}
githubApi2();


async function githubApi3() {
    let response = await fetch(url);
   

    if(response.ok) {
        let datas = await response.json();
        //console.log(datas)

        for (let i = 0; i < 1; i++) {
            console.log(datas[2].description)
            headlineFour.innerHTML += `<p class="apiHeadlineFour">${datas[2].description}</p>`;
        }

        /*data.Workexperience.forEach(function(element) {
        ulListOne.innerHTML +=`
        <li class="moje">
            ${element.year}: ${element.titel}, ${element.company}, ${element.city}.
            </li>
            `;
        })*/
    } else {
        console.log("HTTP-Error: " + response.status);
    }
}
githubApi3();


async function githubApi4() {
    let response = await fetch(url);
   

    if(response.ok) {
        let datas = await response.json();
        //console.log(datas)

        for (let i = 0; i < 1; i++) {
            console.log(datas[2].name)
            headlineFive.innerHTML += `<p class="apiHeadlineFive">${datas[2].name}</p>`;
        }

        /*data.Workexperience.forEach(function(element) {
        ulListOne.innerHTML +=`
        <li class="moje">
            ${element.year}: ${element.titel}, ${element.company}, ${element.city}.
            </li>
            `;
        })*/
    } else {
        console.log("HTTP-Error: " + response.status);
    }
}
githubApi4();


