

var mp=new Audio("win.mp3")
var go=new Audio("gameover.mp3")

var sum=10

function fun1(){
var i=[" ","dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"]
var a=document.getElementById("image1")
var b=document.getElementById("image2")
var c=document.getElementById("ans")
var m=Math.trunc(Math.random()*6)+1
var g=Math.trunc(Math.random()*6)+1
var ch=document.getElementById("chance")
var x=i[m]
var y=i[g]
var gif=document.getElementById("giif")
var gif2=document.getElementById("giiif")
var gif3=document.getElementById("giiiif")
var gif4=document.getElementById("giiiiif")

a.src=x
b.src=y
var t=Math.trunc(Math.random()*12)+1
console.log(t)
var j=m+g
// console.log(j)

sum-=1
ch.innerHTML="Chance left "+sum


console.log(sum)

if(sum !=0){
    if(Number(j)===t){
        gif.style.display="block"
        gif2.style.display="block"
        c.innerHTML="Win"
        document.getElementById("disabled").disabled=true
        mp.play('win.mp3')


        
    
    
    }

}
else{

    gif3.style.display="block"
    gif4.style.display="block"
    c.innerHTML=" Sorry Game Over"
    document.getElementById("disabled").disabled=true
    go.play('gameover.mp3')




}


}
