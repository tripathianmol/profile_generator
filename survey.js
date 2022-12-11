const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answers = [];

let paragraph = (answersArray) => {
  console.log(`${answersArray[0]} likes ${answersArray[1]} while listening to ${answersArray[2]}`);
};

rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

  answers.push(answer);
  console.log(answers);

  rl.question('What\'s an activity you like doing? ', (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
  
    answers.push(answer);
    console.log(answers);

    rl.question('What do you listen to while doing that? ', (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`);
    
      answers.push(answer);
      console.log(answers);
    
      paragraph(answers);

      rl.close();
    });
  });
});