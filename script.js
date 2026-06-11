const questions = [
{
q:"namma pona trip la namaku romba pudicha trip ena?",
a:"madurai"
},
{
q:"Nee en life la entha movie character?",
a:"shobana"
},
{
q:"Enaku unta romba pudicha character ena?",
a:"caring"
},
{
q:"Na epa vanathula parapean nu sollirukean?",
a:"holding hands"
},
{
q:"enaku pudicha colour ena?(HINT:ASK ME)",
a:"briyani"
}
];

let current = 0;
let flowerCount = 0;

function show(id){

document
.querySelectorAll(".page")
.forEach(page=>{
page.style.display="none";
});

const page =
document.getElementById(id);

if(page){
page.style.display="block";
}

}

function startGift(){

let n =
document
.getElementById("name")
.value
.toLowerCase()
.trim();

if(n==="nan tha"){

show("welcome");

}else{

alert("Wrong name ❤️");

}

}

function showQuestion(){

show("questionPage");

loadQuestion();

}

function loadQuestion(){

document.getElementById("qText").innerHTML =
`Question ${current+1}/5<br><br>${questions[current].q}`;

}

function submitAnswer(){

let ans =
document
.getElementById("answer")
.value
.toLowerCase()
.trim();

if(ans===questions[current].a){

flowerCount++;

document.getElementById("result").innerHTML =
"🌹 Correct ❤️";

document.getElementById("flowers").innerHTML =
"🌹".repeat(flowerCount);

setTimeout(()=>{

current++;

document.getElementById("answer").value="";

document.getElementById("result").innerHTML="";

if(current < questions.length){

loadQuestion();

}else{

show("photos");

}

},1200);

}else{

document.getElementById("result").innerHTML =
"😭 Wrong Answer<br>Try Again";

document.getElementById("answer").value="";

}

}

function openLetter(){

show("letterPage");

document.getElementById("flowerCount").innerHTML =
"Your flowers:<br><br>" +
"🌹".repeat(flowerCount);

typeLetter();

}

const msg = `
Ooi en pattu Chella akshu happy birthday di en thanga pulla unaku oru kavitha eluthi tharean nu sonenla yartayum katatha enaku shy shy agum thaniya padi di

நீ வெட்கப்பட்டு பேசத் தயங்கும் வார்த்தைகளை பேசும் உன் கண்கள் எனக்கு பிடிக்கும்.

நான் திருநீர் வைத்து ஓதும் போது மூடும் அந்த இமைகளும் எனக்கு பிடிக்கும்.

நட்சத்திரத்தை வெட்டி செய்த உன் மூக்குத்தி எனக்கு பிடிக்கும்.

என் மார்போடு உரசிச் செல்லும் உன் மூச்சுக்காற்றும் எனக்கு பிடிக்கும்.

என்னை பார்க்கும் போதெல்லாம் சிரிக்கும் அந்த உதடுகள் எனக்கு பிடிக்கும்.

நான் பேசும்போதெல்லாம் சிவக்கும் அந்த கன்னங்கள் எனக்கு பிடிக்கும்.

நான் சரி செய்து விட வேண்டும் என்றே உன் முகத்தில் விழும் அந்த கூந்தல் எனக்கு பிடிக்கும்.

என் கைகளோடு சேர்ந்தே இருக்கும் உன் கைகள் எனக்கு பிடிக்கும்.

எந்த இசையும் போட்டி போட முடியாத உன் குரல் எனக்கு பிடிக்கும்.

அந்த குரலுக்கு சேர்ந்து ஆடும் உன் தோடுகள் எனக்கு பிடிக்கும்.

நீ என்னை கொஞ்சும் போது பிடிக்கும்.

நீ என்னை திட்டும் போதும் பிடிக்கும்.

உன்னையே பிடிக்கும் என்று சொல்ல மாட்டேன்…
ஏன் என்றால் எனக்கு உன்னை மட்டும் தான் பிடிக்கும் 💞

time illa di konjam mokkaya tha irukum kavitha adjust panniko aprma super a eluthi tharean 🌹

eppavumae happy ya iru happy ya tha irupa because na un kuda irupean

Happy Birthday di en chella karadi kutti ❤️
`;

function typeLetter(){

let i = 0;

const box =
document.getElementById("letter");

box.textContent="";

function print(){

if(i < msg.length){

box.textContent += msg[i];

i++;

setTimeout(

print,

msg[i-1]==="\n"

?120

:30

);

}

}

print();

}

/* Floating Hearts */

setInterval(()=>{

let h =
document.createElement("div");

h.className="heart";

h.innerHTML="❤️";

h.style.left =
Math.random()*90 + "vw";

document.body.appendChild(h);

setTimeout(()=>{

h.remove();

},5000);

},1200);

/* Music */

document.body.addEventListener(
"click",
()=>{

let music =
document.getElementById("bgmusic");

if(music){

music.play().catch(()=>{});

}

},
{
once:true
}
);

/* Background Slideshow */

window.addEventListener(
"load",
()=>{

const slides = [

document.getElementById("bg1"),
document.getElementById("bg2"),
document.getElementById("bg3")

].filter(Boolean);

if(slides.length===0){
return;
}

let currentSlide = 0;

setInterval(()=>{

slides[currentSlide]
.classList.remove("active");

currentSlide =
(currentSlide + 1) %
slides.length;

slides[currentSlide]
.classList.add("active");

},4000);

});
