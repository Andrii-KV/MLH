const sel = require('../data/selectors.json');

function inputValues4(name, gender, age, storyType){
    $(sel.name).setValue(name);
    $$(sel.gender)[gender].click();
    $(sel.age).setValue(age);
    $(sel.dropdownSelections).click();
    $$(sel.dropdownStory)[storyType].click();
}
function inputValues4AndClick(name, gender, age, storyType){
    $(sel.name).setValue(name);
    $$(sel.gender)[gender].click();
    $(sel.age).setValue(age);
    $(sel.dropdownSelections).click();
    $$(sel.dropdownStory)[storyType].click();
    $(sel.submitButton).click();
}
module.exports = {inputValues4, inputValues4AndClick};