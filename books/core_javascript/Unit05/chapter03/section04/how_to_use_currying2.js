const getInformation = baseUrl => path => id =>  fetch(baseUrl + path + '/' + id);

const imageUrl = 'http://imageAddress.com/';
const productUrl = 'http://productAddress.com/';

const getImage = getInformation(imageUrl);
const getEmoticon = getImage('emoticon');
const getIcon = getImage('icon');

const getProduct = getInformation(productUrl);
const getFruit = getProduct('fruit');
const getVegetable = getProduct('vegetable');

const emoticon1 = getEmoticon(100);
const emoticon2 = getEmoticon(102);
const icon1 = getIcon(205);
const icon2 = getIcon(234);
const fruit1 = getFruit(300);
const fruit2 = getFruit(400);
const vegetable1 = getVegetable(456);
const vegetable2 = getVegetable(789);

