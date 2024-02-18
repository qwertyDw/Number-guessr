//for loop -> davtalt
/* for(var i=ehleh_too; i<=tugsguh_too; i++/--){
    end davtah code bicne.
}*/
/*for(var i=1; i<=10; i++){
    console.log(i+".Hello")
}*/
// i=1 --> 1<=10 -> true -> 1.hello -> 1+1=2
// i=2 --> 2<=10 -> true -> 2.hello -> 2+1=3
// i=11 -> 11<=10 -> false X stop
/*for(var i=10; i>=1; i--){
    console.log(i)
}*/
/*var sum=0
for(var i=1; i<=10; i++){
    sum=sum+i;
}
console.log(sum)
var urjver=1
for(var i=1; i<=10; i++){
    urjver=urjver*i;
}
console.log(urjver)
*/
/*var a=+prompt("Too oruulna uu: ")
for(var i=1; i<=10; i++){
    console.log(a+"*"+i+"="+(i*a))
}*/

/*var a=+prompt()
for(var i=1; i<=a; i++){
        console.log(i+".IoI")
}*/

/*var b=0;
var a=+prompt()
for(var i=1; i<=a; i++){
    b=b+i
}
console.log(b)*/

/*var b=1;
var a=+prompt()
for(var i=1; i<=a; i++){
    b=b*i
}
console.log(b)*/

/*var a=+prompt()
for(var i=1; i<=a; i++){
    if(i==a){
        console.log(i*100)
    }
}*/

/*var a=+prompt()
var b=+prompt()
for(var i=1; i<=b; i++){
    if(i==b){
        console.log(a*b)
    }
}*/

/*var a=+prompt()
for(var i=1; i<=a; i++){
    if(i=a){
        console.log(2**a)
    }
}*/

/*var a=+prompt()
var b=+prompt()
for(var i=1; i<=b; i++){
    if(i==b){
        console.log(a**b)
    }
}*/

var randomNumber = Math.floor(Math.random()*10)+1;
console.log(randomNumber);
var chance=3;
for(var i=1; i<=chance;i++){
    var myNumber=+prompt("1-10 hurtelh random toog taana uu: ");
    if(randomNumber==myNumber){
        alert(i+"udaagiin oroldlogor ta yllaa")
        break;
    }if(myNumber!=randomNumber&& i<3&& myNumber==""){
        alert("Buruu baina dahin oroldono uu.")
    }if(i==3){
        alert("Ta hojigdloo.")
        break;
    }if(myNumber>randomNumber){
        alert("Ih baina")
    }if(myNumber<randomNumber && myNumber!=""){
        alert("Baga baina")
    }
}