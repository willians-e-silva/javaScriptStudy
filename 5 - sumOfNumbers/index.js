function alertMe(){
   let getNum1 = prompt("Tell me the first number")
   let getNum2 =prompt("Tell me the second number")

   let num1 = parseInt(getNum1, 10)
   let num2 = parseInt(getNum2, 10)

   let sum = num1 + num2    
   

   document.getElementById("math").innerHTML = `The sum of ${num1} and ${num2} is equal to ${sum}`
}