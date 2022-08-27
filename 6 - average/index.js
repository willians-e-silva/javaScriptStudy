let name = prompt("Tell me your name")
let grade1 = prompt("Tell me your first grade")
let grade2 = prompt("Tell me your second grade")

averageGrade = (parseInt(grade1, 10) + parseInt(grade2, 10)) / 2

document.getElementById("name").innerHTML = `Your name is ${name}`
document.getElementById("grade1").innerHTML = `Your first grade is ${grade1}`
document.getElementById("grade2").innerHTML = `Your second grade is ${grade2}`
document.getElementById("averageGrade").innerHTML = `Your average grade is ${averageGrade}`