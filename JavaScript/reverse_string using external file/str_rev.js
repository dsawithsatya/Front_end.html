var x="satya"
var y=""
document.write("<br>")
document.write("<h1>Before operation string is </h1s>")
document.write("<center><hr><h1>"+x+"</h1><hr></center>")
document.write("<br>")


for(var i=x.length-1;i>=0;i--){
  y+=x[i]
}
document.write("<br>")
document.write("<h1>After operation the reverse of a string <h1>")
document.write("<hr>")
document.write("The reversed string after the loop ")
document.write("<center><hr><h1>"+y+"</h1><hr></center>")
document.write("<br>")
document.write("<br>")
// var x=numbers(window.prompt("Please enter Array elements"))
var v=numbers(prompt("Enter the number : "))
function f(x){
      if(x%2==0){
        document.write("The number is even "+x)
    }
}
