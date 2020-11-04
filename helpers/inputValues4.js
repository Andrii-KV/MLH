const sel = require('../data/selectors.json');

function inputeValues4(name, gender, age, storyType){
    $(sel.name).setValue(name);
    $$(sel.gender)[gender].click();
    $(sel.age).setValue(age);
    $(sel.dropdownSelections).click();
    $$(sel.dropdownStory)[storyType].click();
}

module.exports = inputeValues4;