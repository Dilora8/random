"use strict";

const choiceInput = document.getElementById("choice-input");
const choicesContainer = document.getElementById("choices-container");
const addChoiceBtn = document.querySelector(".btn-add-choice");
const chooseBtn = document.querySelector(".btn-choose");
const clearBtn = document.querySelector(".btn-clear");


let choicesArr = [];
let highLightedChoiceIndex = 0;

function addChoice(){
    if(!choiceInput.value) return;
    const choiceDiv = document.createElement("div");
    choiceDiv.className = "choice";
    choiceDiv.textContent = choiceInput.value;
    choiceInput.value = "";
    choicesContainer.appendChild(choiceDiv);
    choicesArr.push(choiceDiv);
}

function highLightChoice(choiceIndex){
    choicesArr[highLightedChoiceIndex]?.classList.remove("highLighted");
    choicesArr[choiceIndex]?.classList.add("highLighted");
    highLightedChoiceIndex =choiceIndex;

}

function hightLightRandomChoice(){
    const randChoiceIndex = Math.floor(Math.random() * choicesArr.length);
    highLightChoice(randChoiceIndex);
}

function selectChoice(){
    if(choicesArr.length <= 1) return;
    const interval = setInterval(hightLightRandomChoice, 150);
    setTimeout(() => clearInterval(interval), 5000);
}

function clearChoices(){
    choicesArr.forEach(choice => choice.remove());
    choicesArr.length = 0;
}

clearBtn.addEventListener("click", clearChoices);

addChoiceBtn.addEventListener("click", addChoice);

chooseBtn.addEventListener("click", selectChoice);
