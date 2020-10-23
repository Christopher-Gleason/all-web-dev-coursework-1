function main() 
{
    let favoriteMovies = [];
    let runAgain = true;
    let str = "";

  //  while(runAgain) {
        let movie1 = prompt("Enter your first favorite movie");
        let movie2 = prompt("Enter your second favorite movie");
        let movie3 = prompt("Enter your third favorite movie");
        favoriteMovies[0] = movie1;
        favoriteMovies[1] = movie2;
        favoriteMovies[2] = movie3;
        for(let lcv = 0; lcv < favoriteMovies.length; ++lcv){
            document.write(favoriteMovies[lcv] + '<br>');
        }
       // str += favoriteMovies[0] +'\n' +
        //       favoriteMovies[1] + '\n' +
    //     favoriteMovies[2];
      //  alert(str);
  //  }
}
