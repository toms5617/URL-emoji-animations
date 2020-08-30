// Some emoji lists to consider for fun :) 

// const emoji1 = ['😺','😸','😹','😻','😼','😽','🙀','😿','😾'];
// const emoji2 = ['👌','🤏','✌','🤞','🤟','🤘','🤙'];
// const emoji3 = ['🐳','🐋','🐟','🐠','🐡','🦈','🐙','🐚'];
// const emoji4 = ['☁','⛅','⛈','🌤','🌦','🌧','🌩','🌈'];
// const emoji6 = ['🕐','🕑','🕒','🕓','🕔','🕕','🕖','🕗','🕘','🕙','🕚','🕛']

const emoji =['⚽','⚾','🥎','🏀','🏐','🏈'];

function runAnimaiton() {
    for(let i = 0; i < emoji.length; i++) {
        setTimeout(() => {
            location.hash = emoji[i]
       }, i*1000);
      }
}

runAnimaiton();



// let emoji = ['☁','⛅','⛈','🌤','🌦','🌧','🌩','🌈'];
// let emojiString = emoji.toString().replace(/,/g, '');

// function runAnimaiton() {
//     for(let i = 0; i < 100; i++) {
//         setTimeout(() => {
//             emoji.unshift(emoji[emoji.length-1])
//             emoji.pop()
//             emojiString = emoji.toString().replace(/,/g, '');

//             location.hash = emojiString
//        }, i*300);
//       }
// }

// runAnimaiton();