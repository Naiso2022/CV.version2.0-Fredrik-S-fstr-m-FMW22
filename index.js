const url = "https://api.github.com/users/Naiso2022/repos"
const ulListOne = document.querySelector(".ulListOne") 
const ulListTwo = document.querySelector(".ulListTwo") 
const ulListThree = document.querySelector(".ulListThree") 
const ulListFour = document.querySelector(".ulListFour") 
const ulListFive = document.querySelector(".ulListFive") 

const workexperience = document.querySelector('.workexperience');
const education = document.querySelector('.education');
const specialCertificate = document.querySelector('.specialCertificate');
const voluntaryWork = document.querySelector('.voluntaryWork');
const otherMerits = document.querySelector('.otherMerits');

const workexperienceDisplay = document.querySelector('.workexperience-display');
const educationDisplay = document.querySelector('.education-display');
const specialCertificateDisplay = document.querySelector('.special-certificate-display');
const voluntaryWorkDisplay = document.querySelector('.voluntary-work-display');
const otherMeritsDisplay = document.querySelector('.other-merits-display');

workexperience.addEventListener('click', one);
education.addEventListener('click', two);
specialCertificate.addEventListener('click', three);
voluntaryWork.addEventListener('click', four);
otherMerits.addEventListener('click', five); 

async function jump() {
    const url = "index.json";
    let response = await fetch(url);
   

    if(response.ok) {
        let data = await response.json();
        
        data.Workexperience.forEach(function(element) {
        ulListOne.innerHTML +=`
        <li class="moje">
            ${element.year}: ${element.titel}, ${element.company}, ${element.city}.
            </li>
            `;
        })
}
}

jump();



async function jumpa() {
    const url = "index.json";
    let response = await fetch(url);
   

    if(response.ok) {
        let data = await response.json();
        
        data.Education.forEach(function(element) {

            ulListTwo.innerHTML +=`
        <li class="moje">
            ${element.year}: ${element.education}, ${element.school}, ${element.city}.
            </li>
            `;
        })
}
}

jumpa();

async function jumpan() {
    const url = "index.json";
    let response = await fetch(url);
   

    if(response.ok) {
        let data = await response.json();
        
        data.SpecialCertificate.forEach(function(element) {
            
            ulListThree.innerHTML +=`
            <li class="moje">
            ${element.drivinglicence}.
            </li>
            <li class="moje">
            ${element.coachEducation}.
            </li>
            <li class="moje">
            ${element.refereeEducation}.
            </li>
            `;
        })
}
}

jumpan();

async function jumpans() {
    const url = "index.json";
    let response = await fetch(url);
   

    if(response.ok) {
        let data = await response.json();
        
        data.VoluntaryWork.forEach(function(element) {

            ulListFour.innerHTML +=`
        <li class="moje">
            ${element.year} ${element.work}
            </li>
            `;
        })
}
}

jumpans();


async function jumpanse() {
    const url = "index.json";
    let response = await fetch(url);
   

    if(response.ok) {
        let data = await response.json();
        
        data.OtherMerits.forEach(function(element) {
            
            ulListFive.innerHTML +=`
        <li class="moje">
            ${element.year} ${element.work} 
            </li>
            `;
        })
}
}

jumpanse();

function one(){
    workexperienceDisplay.classList.remove("workexperience-display")
    educationDisplay.classList.add("education-display")
    specialCertificateDisplay.classList.add("special-certificate-display")
    voluntaryWorkDisplay.classList.add("voluntary-work-display")
    otherMeritsDisplay.classList.add("other-merits-display")
}


function two(){
    workexperienceDisplay.classList.add("workexperience-display")
    educationDisplay.classList.remove("education-display")
    specialCertificateDisplay.classList.add("special-certificate-display")
    voluntaryWorkDisplay.classList.add("voluntary-work-display")
    otherMeritsDisplay.classList.add("other-merits-display")
}

function three(){
    workexperienceDisplay.classList.add("workexperience-display")
    educationDisplay.classList.add("education-display")
    specialCertificateDisplay.classList.remove("special-certificate-display")
    voluntaryWorkDisplay.classList.add("voluntary-work-display")
    otherMeritsDisplay.classList.add("other-merits-display")
}

function four(){
    workexperienceDisplay.classList.add("workexperience-display")
    educationDisplay.classList.add("education-display")
    specialCertificateDisplay.classList.add("special-certificate-display")
    voluntaryWorkDisplay.classList.remove("voluntary-work-display")
    otherMeritsDisplay.classList.add("other-merits-display")
}

function five(){
    workexperienceDisplay.classList.add("workexperience-display")
    educationDisplay.classList.add("education-display")
    specialCertificateDisplay.classList.add("special-certificate-display")
    voluntaryWorkDisplay.classList.add("voluntary-work-display")
    otherMeritsDisplay.classList.remove("other-merits-display")
}


async function githubApi() {

    //const url = "index.json";
    let response = await fetch(url);
   

    if(response.ok) {
        let data = await response.json();
        console.log(data)
        /*data.Workexperience.forEach(function(element) {
        ulListOne.innerHTML +=`
        <li class="moje">
            ${element.year}: ${element.titel}, ${element.company}, ${element.city}.
            </li>
            `;
        })*/
}
}

githubApi();
