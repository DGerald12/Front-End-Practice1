var age = 10;
//create var age; let it equal to 15;

function allowedIntoMovie(){       // create function allowedIntoMovie;
  if(age <= 10){
    //condition statement;
      return "Sorry. You are not permitted!";
      //if age is equal to or less than 10, output
      //returns 'Sorrty. You are not permitted';
  }
  
  else {
    if(age <= 15){
      //condition statement;
      return "Permitted with parent";
      //if age is equal to or less than 15, output
      //returns 'Not permitted';
    }
    else {
      if(age <= 18){
        //condition statement;
        return "Permitted with anyone over 18";
        //if age is equal to or less than 18, output
        //returns 'Not permitted';
        }
    else {
      if(age > 18){
        //condition statement;
        return "Permitted to attend alone";
        //if age is greater than 18, output
        //returns 'Not permitted';
      }    
    }
    
    }
    
  }

}
console.log(allowedIntoMovie());
//returns the correct output when the function is called
//which in this case is 'Permitted with parent';