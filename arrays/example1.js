const superhroes = [
    '아이언맨',
    '캡틴 아메리카',
    '토르',
    '닥터 스트레인지',
    '블랙 위도우'
]

// 1
// for(let i = 0; i < superhroes.length; i++){
//     console.log(superhroes[i]);
// }


// 2
// function print(hero) {
//     console.log(hero);
// }
// superhroes.forEach(print);


// 3
// superhroes.forEach(function(hero) {
//    console.log(hero);
// });


// 4 forEach
console.log(superhroes);

superhroes.forEach((hero) => {
    superhroes.push('헐크', '비전');
    console.log(hero);
 });