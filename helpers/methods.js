const sel = require('../data/selectors.json');
const path = require('path');

function inputValues4(name, gender, age, storyType) {
  $(sel.name).setValue(name);
  $$(sel.gender)[gender].click();
  $(sel.age).setValue(age);
  $(sel.dropdownSelections).click();
  $$(sel.storyPositionInDropdown)[storyType].click();
}

function inputValues4AndClick(name, gender, age, storyType) {
  inputValues4(name, gender, age, storyType);
  $(sel.submitButton).click();
}

function inputValues5(name, gender, age, storyType, image) {
  inputValues4(name, gender, age, storyType);
  browser.execute(function () {
    document.getElementsByTagName('input')[6].style.display = 'block';
  });
  const filePath = path.join(__dirname, image);
  const remoteFilePath = browser.uploadFile(filePath);
  $(sel.uploadImageLink).waitForDisplayed();
  $(sel.uploadImageLink).setValue(remoteFilePath);
}

function inputValues5AndClick(name, gender, age, storyType, image) {
  inputValues5(name, gender, age, storyType, image);
  $(sel.submitButton).click();
}

function clearInputBox(input){
  $(input).doubleClick();
  browser.keys("Delete");
}

function genderOnTheStoryPage(sel, gen){
  let text = $(sel).getText();
  text = text.split(" ");
  return text[48] === gen[0] && text[63] === gen[2] && text[42] === gen[1];
}

function numToText(num){
  let M =['','thousand','million','billion']
  let B ='# one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen'.split` `
  let C ='  twenty thirty forty fifty sixty seventy eighty ninety'.split` `
  let G = num => (99<num?B[num/100|0]+' hundred ':'')+(B[num%=100]||C[num/10|0]+(num%10?'-'+B[num%10]:''))
  let H = num => [].concat(...(''+num).split(/(?=(?:...)+$)/).map((V,F,num)=>[G(V),M[num.length-1-F]]).filter(V=>V[0])).join` `.replace(/ ?#/g,'').trim``
  return ''+(num<0?0:num?23-num?H(num):'birthday':9/0)
}

function nameInTheStoryHeader(sel, name){
  let text = $(sel).getText();
  text = text.split(" ");
  return text[4] === name;
}

function nameInTheStoryText(sel, name){
  let text = $(sel).getText();
  text = text.split(" ");
  return text[14] == name;
}

function ageOnTheStoryPage(sel, age){
  let text = $(sel).getText();
  text = text.split(" ");
  return text[17] === age;
}

module.exports = { inputValues4, inputValues4AndClick, inputValues5AndClick, inputValues5, clearInputBox, genderOnTheStoryPage, numToText, nameInTheStoryHeader, nameInTheStoryText};

