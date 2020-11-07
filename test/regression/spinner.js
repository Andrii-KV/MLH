const sel = require('../../data/selectors.json');
import { field, gender } from '../../data/testData';

describe('Labels exist', () => {
    before(() => {
        browser.url('');
        browser.maximizeWindow();
    });
    it('change value up in age field using spinner ', function () {
        $(sel.age).moveTo();
        $(".ant-input-number-handler-up").click()
        browser.pause(3000)
    });




});
