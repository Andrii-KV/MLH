const field = {
  name: 0,
  gender: 1,
  age: 2,
  story: 3,
  image: 4,
};
const gender = {
  HE: 0,
  SHE: 1,
  IT: 2,
};
const story = {
  overcomingTheMonster: 0,
  rebirth: 1,
  quest: 2,
  journeyAndReturn: 3,
  ragsAndRiches: 4,
  tragedy: 5,
  comedy: 6,
};
const image = {
  testImageJpg: '../data/image/2.jpg',
  testImagePng: '../data/image/2.png',
  testImagePdf: '../data/image/2.pdf',
  testImageJpg41: '../data/image/2(4,1 mb).jpg',
};
const name = {
  userHe: 'Nick',
  userShe: 'LadyBug',
  userIt: 'Rock',
  user71Symbols: 'Adolph Blaine Charles David Earl Frederick Gerald Hubert Irvin John Ken',
  user70Symbols: 'Adolph Blaine Charles David Earl Frederick Gerald Hubert Irvin John Ke',
  userOneSymbol: '!',
  userOneLetter: 'N',
  userOneNumber: '0',
  userNameLetters: 'Name Hero',
  userNameNumbers: '1234',
  userNameSymbols: "(',&%-=.#Æ!@$",
  userNameLetNumSym: "Name1234(',&%-=.#Æ!@$",
  userNameUpperCase: 'A B C D E F G H I K L M N O P Q R S T V X Y Z',
  userNameLowerCase: 'a b c d e f g h i j k l m n o p q r s t u x y z',
};
const age = {
  number1: 50,
  number2: -10,
  number3: 123456789012,
  number4: 5,
  number5: 1234567890123,
};

const ageErrors = {
  required: 1,
};

const genderStoryPage = {
  He: ['He', 'his', 'unequal.\nHe'],
  She: ['She', 'her', 'unequal.\nShe'],
  It: ['It', 'its', 'unequal.\nIt'],
};

const nameStoryPage = {
  He: 'it.\nNick,',
};

module.exports = { field, gender, story, image, name, age, ageErrors, genderStoryPage, nameStoryPage };
