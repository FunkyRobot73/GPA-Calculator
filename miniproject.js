window.addEventListener("load", () => {
  document.getElementById("calculateButton").addEventListener("click", function(){
    
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let sum = num1 + num2;

    console.log(`The sum is ${sum}`);
    console.log(document.getElementsByTagName("h1")[1])
  })
});

    