function main()
{
    let songNum = prompt("Enter a number from one to three:");
        if (isNaN(songNum)) {
            alert("Please enter a number, not a word");
        } 
        else if (songNum = "1") {
            alert("One is the loneliest number that you'll ever do");
        } 
        else if (songNum = "2") {
            alert("Two can be as bad as one, It's the loneliest number since the number one");
        } 
        else if (songNum = "3") {
            alert("There is no three");
        } 
        else {
            alert("You didn't enter a valid number");
        }
}