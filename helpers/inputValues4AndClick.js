const sel = require('../data/selectors.json');

function inputeValues4AndClick(name, gender, age, storyType){
    $(sel.name).setValue(name);
    $$(sel.gender)[gender].click();
    $(sel.age).setValue(age);
    $(sel.dropdownSelections).click();
    $$(sel.dropdownStory)[storyType].click();
    $(sel.submitButton).click();
}

module.exports = inputeValues4AndClick;