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
        idsRing.innerHTML = ``;
        loading.innerHTML = ``;
        for (let i = 0; i < 1; i++) {
            headlineOne.innerHTML += `<p class="apiHeadlineOne">${data[5].description}</p>`;
        }
    } else {
        console.log("HTTP-Error: " + response.status);
    }
}
githubApi();

async function githubApi2() {
    let response = await fetch(url);
    if(response.ok) {
        let datas = await response.json();
        for (let i = 0; i < 1; i++) {
            headlineTwo.innerHTML += `<p class="apiHeadlineTwo">${datas[5].name}</p>`;
        }
    } else {
        console.log("HTTP-Error: " + response.status);
    }
}
githubApi2();

async function githubApi3() {
    let response = await fetch(url);
    if(response.ok) {
        let datas = await response.json();
        for (let i = 0; i < 1; i++) {
            headlineFour.innerHTML += `<p class="apiHeadlineFour">${datas[4].description}</p>`;
        }
    } else {
        console.log("HTTP-Error: " + response.status);
    }
}
githubApi3();

async function githubApi4() {
    let response = await fetch(url);
    if(response.ok) {
        let datas = await response.json();
        for (let i = 0; i < 1; i++) {
            headlineFive.innerHTML += `<p class="apiHeadlineFive">${datas[4].name}</p>`;
        }
    } else {
        console.log("HTTP-Error: " + response.status);
    }
}
githubApi4();