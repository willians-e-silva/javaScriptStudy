function alertMe(){
   let age = prompt("How old are you?")
   

//    alert(`You are ${age} old`)

   document.getElementById("ageDisplay").innerHTML = `you are ${age}` 
}