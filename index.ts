import inquirer from "inquirer";

async function StartFunc() {

    const systemNum = Math.floor(Math.random() * 10);
    const userNum = await inquirer.prompt([
        {
            type: 'number',
            name: 'userGuess',
            message: "Enter your Number B/w 1 - 10: "
        }
    ])

    const {userGuess}= userNum;

    console.log("our Guess: ", userGuess, "\nSystem's Guess: ", systemNum);

    if (userGuess === systemNum){
        console.log("your Guess Is correct \nYou Won! ");

        
    }
    else{
        console.log("Better luck next time....");
        
    }
}

async function StarAgain(){
    do{
        await StartFunc();
        var again = await inquirer
        .prompt({
            type: "input",
            name: 'restart',
            message: "Do you want to continue ? press Y or N"
        })
    }
    while ( again.restart === "Y"|| again.restart === "y"|| again.restart === "YES"|| again.restart === "yes" )
}
StarAgain();