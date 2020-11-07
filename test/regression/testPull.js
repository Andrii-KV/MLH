const sel = require('../data/selectors.json');
const path = require('path');

function inputValues4(name, gender, age, storyType) {
    $(sel.name).setValue(name);
    $$(sel.gender)[gender].click();
    $(sel.age).setValue(age);
    $(sel.dropdownSelections).click();
    $$(sel.storyPositionInDropdown)[storyType].click();
}