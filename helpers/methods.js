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

function clearInputBox(input) {
  $(input).doubleClick();
  browser.keys('Delete');
}

function nameInStorySubHeader(name) {
  let x = $(sel.subHeaderStory).getText();
  x = x.slice(15, name.length + 15);
  return x;
}

function nameInComedyStory(name) {
  let x = $(sel.storyPageComedyText).getText();
  x = x.replace(/[\n\r]/g, ' ');
  x = x.slice(71, name.length + 71);
  return x;
}

function genderInComedyStory() {
  let t = $(sel.storyPageComedyText).getText();
  t = t.replace(/[\n\r]/g, ' ').replace(/[.,]/g, '');
  t = t.split(' ');
  let arr = [];
  for (let i = t.length; i > 0; i--) {
    if (t[i] === 'years') {
      break;
    }
    arr.unshift(t[i]);
  }
  return [arr[23], arr[29], arr[45]];
}

function numToText(num) {
  let M = ['', 'thousand', 'million', 'billion'];
  let B = '# one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen'.split` `;
  let C = '  twenty thirty forty fifty sixty seventy eighty ninety'.split` `;
  let G = num => (99 < num ? B[(num / 100) | 0] + ' hundred ' : '') + (B[(num %= 100)] || C[(num / 10) | 0] + (num % 10 ? '-' + B[num % 10] : ''));
  let H = num =>
    [].concat(
      ...('' + num)
        .split(/(?=(?:...)+$)/)
        .map((V, F, num) => [G(V), M[num.length - 1 - F]])
        .filter(V => V[0]),
    ).join` `.replace(/ ?#/g, '').trim``;
  return H(num);
}

function ageInTheStoryText(name, age) {
  let text = $(sel.storyPageComedyText).getText();
  let n = 71 + name.length;
  let a = text.slice(n + 9, numToText(age).length + (n + 9));
  let temp = +text.slice(n + 9, (age + '').length + (n + 9));
  if (temp === age) {
    a = text.slice(n + 9, (age + '').length + (n + 9));
  }
  return a;
}

module.exports = {
  inputValues4,
  inputValues4AndClick,
  inputValues5AndClick,
  inputValues5,
  clearInputBox,
  genderInComedyStory,
  numToText,
  nameInStorySubHeader,
  nameInComedyStory,
  ageInTheStoryText,
};
