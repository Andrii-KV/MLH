import {inputValues4AndClick} from "../../helpers/methods";
import {age, gender, name, story} from "../../data/testData";
const sel = require('../../data/selectors.json');
const ageValue = age.number1;
const exp = require('../../data/expected.json');

describe('AGE REGRESSION', () => {
    before(() => {
        browser.url('');
        browser.maximizeWindow();

    });
    beforeEach(() => {
        browser.refresh();
    });

    describe('AGE POSITIVE', () => {
        it('Check that we able to change the value +1 by clicking spinner up', function () {
            $(sel.age).setValue(ageValue);
            $(sel.spinnerAgeUp).click();
            expect($(sel.age).getValue()).toEqual((ageValue + 1) + '');
        });

        it('Check that we able to change the value -1 by clicking spinner down', function () {
            $(sel.age).setValue(ageValue);
            $(sel.spinnerAgeDown).click();
            expect($(sel.age).getValue()).toEqual((ageValue - 1) + '');
        });

        it('Check that get the value: 1 by clicking spinner up', function () {
            $(sel.spinnerAgeUp).click();
            expect($(sel.age).getValue()).toEqual(exp.one);
        });
    });
});
