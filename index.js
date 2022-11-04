const ulListOne = document.querySelector(".ulListOne") 
const ulListTwo = document.querySelector(".ulListTwo") 
const ulListThree = document.querySelector(".ulListThree") 
const ulListFour = document.querySelector(".ulListFour") 
const ulListFive = document.querySelector(".ulListFive") 



async function jump() {
    const url = "index.json";
    let response = await fetch(url);
   

    if(response.ok) {
        let data = await response.json();
        
        data.Workexperience.forEach(function(element) {
            
            let liStyle;
            if(element.year) {
                liStyle = "done"; 
            } else {
                liStyle = "undone"
            }

        


            ulListOne.innerHTML +=`
        <li class="moje">
            ${element.year}:  <span class="${liStyle}">${element.titel}, </span>${element.company}, ${element.city}.
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
            
            let liStyle;
            if(element.year) {
                liStyle = "done"; 
            } else {
                liStyle = "undone"
            }

        


            ulListTwo.innerHTML +=`
        <li class="moje">
            ${element.year}:  <span class="${liStyle}">${element.education}, </span>${element.school}, ${element.city}.
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
        
        data.Education.forEach(function(element) {
            
            let liStyle;
            if(element.year) {
                liStyle = "done"; 
            } else {
                liStyle = "undone"
            }

        


            ulListThree.innerHTML +=`
        <li class="moje">
            ${element.year}:  <span class="${liStyle}">${element.education}, </span>${element.school}, ${element.city}.
            </li>
            `;
        })
}
}

jumpan();







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



workexperience.addEventListener('click', etta);
education.addEventListener('click', tvåa);
specialCertificate.addEventListener('click', Trea);
voluntaryWork.addEventListener('click', fyra);
otherMerits.addEventListener('click', fem);



function etta(){
    //workexperienceDisplay.classList.add("workexperience-display")
    educationDisplay.classList.remove("education-display")
    specialCertificateDisplay.classList.remove("special-certificate-display")
    voluntaryWorkDisplay.classList.remove("voluntary-work-display")
    otherMeritsDisplay.classList.remove("other-merits-display")
}


function tvåa(){
    workexperienceDisplay.classList.toggle("workexperience-display")
    //educationDisplay.classList.add("education-display")
    specialCertificateDisplay.classList.remove("special-certificate-display")
    voluntaryWorkDisplay.classList.remove("voluntary-work-display")
    otherMeritsDisplay.classList.remove("other-merits-display")
}

function trea(){
    workexperienceDisplay.classList.remove("workexperience-display")
    educationDisplay.classList.remove("education-display")
    //specialCertificateDisplay.classList.remove("special-certificate-display")
    voluntaryWorkDisplay.classList.remove("voluntary-work-display")
    otherMeritsDisplay.classList.remove("other-merits-display")
}

function fyra(){
        workexperienceDisplay.classList.remove("workexperience-display")
        educationDisplay.classList.remove("education-display")
        specialCertificateDisplay.classList.remove("special-certificate-display")
        //voluntaryWorkDisplay.classList.remove("voluntary-work-display")
        otherMeritsDisplay.classList.remove("other-merits-display")
}

function fem(){
        workexperienceDisplay.classList.remove("workexperience-display")
        educationDisplay.classList.remove("education-display")
        specialCertificateDisplay.classList.remove("special-certificate-display")
        voluntaryWorkDisplay.classList.remove("voluntary-work-display")
        //otherMeritsDisplay.classList.remove("other-merits-display")
}





function stonechoice(){

let computerchoice = computerturn();

if (computerchoice === 2 ) {
    humananswer.textContent = 'Din gissning är sten.';
    computeranswer.textContent = 'Datorns gissning är sax.';
    winner.textContent = 'Du vann!';
    winner.style.backgroundColor = 'lightgreen';
    humancounter++;
    humanscore.textContent = humancounter;
    
}

else if (computerchoice === 3){
    humananswer.textContent = 'Din gissning är sten.';
    computeranswer.textContent = 'Datorns gissning är påse.';
    winner.textContent = 'Datorn vann!';
    winner.style.backgroundColor = 'red';
    computercounter++;
    computerscore.textContent = computercounter;

}

else if (computerchoice === 1){
    humananswer.textContent = 'Din gissning är sten.';
    computeranswer.textContent = 'Datorns gissning är sten.';
    winner.textContent = 'Oavgjort!';
    winner.style.border = 'solid black';
    winner.style.backgroundColor = 'white';
    
}

}
