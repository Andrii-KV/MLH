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


module.exports = { inputValues4, inputValues4AndClick, inputValues5AndClick, inputValues5, clearInputBox,genderOnTheStoryPage};
