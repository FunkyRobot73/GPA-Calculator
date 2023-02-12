const calculateGPA = function(){
  window.addEventListener("load", () => {
    document.getElementById("calculateButton").addEventListener("click", function(){
      let grades = ["A", "B", "C", "D", "E", "F"];
      let gpaGrade;
      let fName = "";
      fName = (document.getElementById("fName").value);
      let num1 = parseInt(document.getElementById("num1").value);
      
      if (num1 <= 50) {
        gpaGrade = grades[5];
        alert(`Hello ${fName} you Graded an ${gpaGrade}`)
        console.log(`Your Grade is ${grades[5]}`);
        return(gpaGrade);
      } if (num1 <= 60) {
        alert(`Hello ${fName} you Graded an ${grades[4]}`)
        console.log(`Your Grade is ${grades[4]}`);
        return(`Your Grade is ${grades[4]}`);
      } if (num1 <= 70) {
        alert(`Hello ${fName} you Graded an ${grades[3]}`)
        console.log(`Your Grade is ${grades[3]}`);     
        return(`Your Grade is ${grades[3]}`);
      } if (num1 <= 80) {
        alert(`Hello ${fName} you Graded an ${grades[2]}`)
        console.log(`Your Grade is ${grades[2]}`);
        return(`Your Grade is ${grades[2]}`);
      } if (num1 <= 90) {
        alert(`Hello ${fName} you Graded an ${grades[1]}`)
        console.log(`Your Grade is ${grades[1]}`);
        return(`Your Grade is ${grades[1]}`);
      } else {
        alert(`Hello ${fName} you Graded an ${grades[0]}`)
        console.log(`Your Grade is ${grades[0]}`);
        return(`Your Grade is ${grades[0]}`);
      }
  
      
    })
  });
}

calculateGPA();


    