const userAge = prompt("How old are you?");

if (userAge == null) {
    console.log("It's a pity that you did'nt want to enter your age.");
} else {
    console.log("You are " + userAge + " years old.");
}

const userCity = prompt("What city do you live in?");

if (userCity == "Kyiv" || userCity == "kyiv" || userCity == "KYIV") {
    console.log("You live in the capital of Ukraine!");
} else if (userCity == "Washington" || userCity == "washington" || userCity == "WASHINGTON") {
    console.log("You live in the capital of America!");
} else if (userCity == "London" || userCity == "london" || userCity == "LONDON") {
    console.log("You live in the capital of Englang!");
} else if (userCity == null) {
    console.log("It's a pity that you did'nt want to enter your city.");
} else {
    console.log("You live in the city of " + userCity);
}



const userHobby = prompt("What is your favorite sport?");

if (userHobby == "Soccer" || userHobby == "soccer" || userHobby == "SOCCER") {
    console.log("Cool! Do you want to be Cristiano Ronaldo?");
} else if (userHobby == "Basketball" || userHobby == "basketball" || userHobby == "BASKETBALL") {
    console.log("Cool! Do you want to be Michael Jordan?");
} else if (userHobby == "Hockey" || userHobby == "hockey" || userHobby == "HOCKEY") {
    console.log("Cool! Do you want to be Tiger Woods?");
} else if (userHobby == null) {
    console.log("It's a pity that you did'nt want to enter your favorite sport.");
} else {
    console.log("Your favorite sport is " + userHobby);
}

