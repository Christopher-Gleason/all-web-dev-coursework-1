function main()
{
    const MINAGE = 21;
    const MAXAGE = 200;

        let userAge = prompt("Please enter your age");
        if (isNaN(userAge)) {
            alert("Please enter your age!")
        } else if(userAge < MINAGE) {
            alert("You're not old enough!")
        } else if(userAge > MAXAGE) {
            alert("Age out of range!")
        } else {
            alert("Welcome to the venue!")
        }
}