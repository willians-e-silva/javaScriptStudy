function alertMe(){
   let getNum = prompt("Tell me a number")

   let sum = getNum * 2
   let half =  getNum / 2
   

   document.getElementById("math").innerHTML = `The double of ${getNum} is ${sum} and the half is ${half} `
}