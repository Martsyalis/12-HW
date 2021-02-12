const inquirer = require("inquirer");
const qs = require('./view/questions');
const controller = require('./controller');

async function runApp(){
  const {choice} = await inquirer.prompt(qs);
  handleAnswers(choice);
}

async function handleAnswers(choice) {
  try {
    if (choice === 'quit') return console.log("thanks for using software 2.0, Bye!");
    await controller[choice]();
    runApp();
  } catch(err) {
    console.log('Sorry!!! something went wrong. please try another operation (this is one, all be it annoying, way to handle an error)');
  //  console.log(err); uncoment to see the error
    runApp();
  }
}

runApp();