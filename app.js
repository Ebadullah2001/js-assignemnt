// //chap 21-25

// //Q1

// var a = prompt("Enter your first name")
// var b = prompt("Enter your last name")
// var c = a+b
// document.write("Asalamualikum ",c," how are you?")


// //Q2

// var a = prompt("enteryour fouvrite mobile name")
// var b = a.length
// document.write(a,"<br>")
// document.write("length of a string is ",b)

// //Q3

// var a = "Pakistani"
// var b =  a.indexOf("n")
// document.write("String :",a,"<br>")
// document.write("Index of n is :",b)


// //Q4

// var a = "Hello world"
// var b =  a.lastIndexOf("l")
// document.write("String :",a,"<br>")
// document.write("Index of n is :",b)

// //Q5

// var a = ["Pakistani"]
// var b =  a[0][3]
// document.write("String :",a,"<br>")
// document.write("Index of n is :",b)

// //Q6

// var a = prompt("Enter your first name")
// var b = prompt("Enter your last name")
// var c = a.concat(b)
// document.write("Asalamualikum ",c," how are you?")

// //Q7

// var a = "Hyderabad"
// var b =  a.replace("Hyderabad","Islamabad")
// document.write("City: ",a,"<br>")
// document.write("After Replacement: ",b)

// //Q8

// var a = "Ali and sami are best friends.They play cricket and football  together"
// var b =  a.replace(/and/g,"&")
// document.write(b)

// //Q9

// var a = "427"
// var b = Number(a)
// document.write("Value: ",a,"<br>")
// document.write("type string","<br>")
// document.write("Value: ",b,"<br>")
// document.write("type:number","<br>")

// //Q10

// var a = prompt("enter what you want")
// var b = a.toLocaleUpperCase()
// document.write("User input: ",a,"<br>")
// document.write("Upper case: ",b)

// //Q11

// var a = prompt("enter")
// var b =  a.slice(0,1).toUpperCase()+a.slice(1,10) 

// document.write("User input: ",a,"<br>")
// document.write("Upper case: ",b)

// //Q12


// var a = 35.36
// var b = a.toString()
// var c = b.slice(0,2)+b.slice(3,5)
// document.write("Number: ",a,"<br>")
// document.write("Result: ",c,"<br>")

// //Q13
// var username = prompt("enter the username")
// var format = /@,.!/
// if (username.match(format) ){
//     alert("plz enter a valid user name")
// }

// //Q14

// var a = ["cake","apple pie","cookie","chips","patties"]
// var c = prompt("Welcome to ABC bakery What do you want to order sir/ma'am")
// var b = c.toLowerCase()

// for(x=0; x<=4 ; x++){
//     if(a[x]==b){
//         document.write(a[x]," ","is available at index"," ",x," " ,"in our bakery")
//     }
   
// }
// if(a[0]==b || a[1]==b || a[2]==b || a[3]==b || a[4]==b){

// }
// else if(a[0]!=b || a[1]!=b || a[2]!=b || a[3]!=b || a[4]!=b){
//     document.write("We are Sorry" ," "+b+" ","is not available in our bakery")
// }

// //Q15

// var a = prompt("enter your password")
// if (a.slice(0, 1) <= 1000000) {
//     document.write("entered password ", a, "<br>")
//     document.write("Password cannot start with the numbers ", "<br>")
//     document.write("plz enter a valid password")
// }
// else if (a.length <= 6) {
//     document.write("entered password ", a, "<br>")
//     document.write("Password length cannot be less tha 6 character ", "<br>")
//     document.write("plz enter a valid password")
// }

// //Q16

// var a = "university of karachi "
// count = 0
// for (i=0;i<a.length;i++){
//     document.write(a.charAt(i),"<br>")
// }

// //Q17
// var a = prompt("enter any thing")
// var b = a.slice(-1)
// document.write("User input: ",a,"<br>")
// document.write("Last character of input :",b)

// //Q18

// var a = "the quick brown fox jumps over the lazy dog"
// var ar = a.split(" ")

// count = 0
// for (i=0;i<ar.length;i++){
//     if ( ar[i]==="the"){
//         count++
//     }
// }
// document.write("There are ",count," occurance of the word the")

//Chap 26-30

// //Q1


// var a = prompt("enter the positive iteger")
// if (a>0){
//     var b = Math.round(a)
//     var c = Math.floor(a)
//     var d = Math.ceil(a)
//     document.write("Number : ",a,"<br>")
//     document.write("Round of value : ",b,"<br>")
//     document.write("Floor value : ",c,"<br>")
//     document.write("Ceil value : ",d,"<br>")
// }
// else{
//     document.write("enter the positive integer")
// }



// //Q2

// var a = prompt("enter the negative iteger")
// if (a<0){
//     var b = Math.round(a)
//     var c = Math.floor(a)
//     var d = Math.ceil(a)
//     document.write("Number : ",a,"<br>")
//     document.write("Round of value : ",b,"<br>")
//     document.write("Floor value : ",c,"<br>")
//     document.write("Ceil value : ",d,"<br>")
// }
// else{
//     document.write("enter the negative integer")
// }



// //Q3

// var a = prompt("enter the value")
// var b = Math.abs(a)
// document.write("The absolute value of ",a," is ",b)


// //Q4


// t = Math.random() *6
// f = Math.ceil(t)

// document.write("The random value of dice is : ",f)


// //Q5

// a = prompt("enter your choice")
// b = prompt("enter your choice")
// t = Math.random() *2
// f = Math.floor(t)


// if (f === 1){
//     document.write("Random coin value : ",a)
// }else{
//     document.write("Random coin value : ",b)
// }


// //Q6

// var a = Math.random()*100
// var b = Math.ceil(a)
// document.write("Random number between 1 and 100 : ",b)


// //Q7


// var a = prompt('enter weight : '); // enter space after number
// if (a.substr(3) == "" || a.substr(3) == "kg" || a.substr(5) == "kgs" || a.substr(5) == "kilograms"){
//     document.write("The weight of user is : " + a + '<br>');
// }



// //Q8

// var c = prompt("enter the your guess")
// var a = Math.random()*10
// var b = Math.ceil(a)
 
// if (c===b){
//     alert("Conratulation you won the game")
// }
// else{
//     alert("OOPSS!! Try again...")
// }

// //Chap 31-34

// //Q1

// var a = new Date()
// document.write(a)


// //Q2

// var b = new Date()
// var c = b.toString()
// var a = c.slice(4,8)
// document.write("Current Month : ",a)



// //Q3

// var b = new Date()
// var c = b.toString()
// var a = c.slice(0,3)
// document.write("Current Day : ",a)


// //Q4

// var b = new Date()
// var c = b.toString()
// var a = c.slice(0,3)
// if (a==="Sat" || a==="Sun"){
//     document.write("It is a Fun Day  ")

// }


// //Q5

// var b = new Date()
// var c = b.toString()
// var a = c.slice(8,10)
// if (a>16){
//     document.write("Last days of the month")
// }
// else{
//     document.write("First Fifteen days of the month")
// }



// //Q6

// var b = new Date()
// var a = b.getTime()
// var c = b/3600
// document.write("Current Date : ",b,"<br>")
// document.write("Elapsed millisecond since January 1,1970 : ",a,"<br>")
// document.write("Elapsed minutes since January 1,1970 : ",c)


// //Q7

// var b = new Date()
// var a = b.getHours()
// if (a<12){
//     document.write("It is AM")
// }
// else{
//     document.write("It is PM")
// }

// //Q8
// var b = new Date("Dec 31,2020")
// var a = b.getTime()
// document.write("Last Date : ",b,"<br>")



// //Q9

// var a = new Date("Jun 18,2015")
// var b = a.getTime()
// var c = new Date()
// var d = c.getTime()
// var e = d - b
// var f = Math.floor(e/(1000*60*60*24))
// document.write(f," days have passed away since1st Ramadan , 2015")



// //Q10


// var a = new Date(prompt("enter the refrence date"))
// var b = a.getTime()
// var c = new Date("Jan 1,2015")
// var d = c.getTime()
// var e = b - d
// var f = Math.floor(e/(1000*60))
// document.write("On refrence Date ",a,"<br>")
// document.write(f," secondes had passed since begining of 2015 ")

// //Q11

// var a = new Date()
// var d = a.getHours()
// var f = d+1
// var c = new Date()
// var b = c.setHours(f)

// document.write("Current Date : ",a,"<br>")
// document.write("1 hour ago it will be  ",c)


// //Q12

// var a = new Date()
// var d = a.getFullYear()
// var f = d-100
// var c = new Date()
// var b = c.setFullYear(f)

// document.write("Current Date : ",a,"<br>")
// document.write("100 years back,it was : ",c)





// //Q13

// var a = new Date(prompt("enter date of birth"))
// var k = a.toString()
// var l = k.slice(11,15)
// var b = a.getTime()
// var c = new Date()
// var d = c.getTime()
// var e = d - b
// var f = Math.floor(e/(1000*60*60*12*24*30))
// document.write("Your age is : ",f,"<br>")
// document.write("your birth year is : ",l)

// //Q14

// var b = new Date()
// var c = b.toString()
// var a = c.slice(4,8)
// var n = prompt("ente ryour name")
// var u = +prompt("enter number of units")
// var f = u*16
// document.write("K-Electric Bill","<br>","<br>")
// document.write("Customer Name : ",n,"<br>")
// document.write("Current Month : ",a,"<br>")
// document.write("Number of units charge : ",u,"<br>")
// document.write("Charge per unit : 16","<br>","<br>")
// document.write("Net Amount Payable (with due date) : ",f,"<br>")
// document.write("Last Payable surcharge : 350","<br>")
// document.write("Gross Amount Payable(After due date) : ",f+350,"<br>")


//Chap 35-38

// //Q1

// function a(){
//     b = new Date()
//     return b
// }
// c = a()
// document.write(c)

// //Q2

// function name(){
// var a = prompt("Enter your first name")
// var b = prompt("Enter your last name")
// var c = a+b
// return c
// }
// d = name()
// document.write("Asalamualikum ",d," how are you?")

// //Q3

// function calc(a,b){
//     return a+b
// }

// var a = +prompt("enter first digit")
// var b = +prompt("enter the second digit")
// var result = calc(a,b)
// document.write(result)
    

// //Q4

// function calc(a,op,b){
//     if(op === "+"){
//         return a+b
//     }
//     else if (op === "-"){
//         return a-b
//     }
//     else if (op==="*"){
//         return a*b
//     }
//     else if (op==="/"){
//         return a/b
//     }
//     else if (op==="%"){
//         return a%b
//     }
// }

// var a = +prompt("enter first digit")
// var b = +prompt("enter the second digit")
// var op = prompt("enter the symbol")
// var result = calc(a,op,b)
// document.write(result)
    

// //Q5

// var b = prompt("enter the number")
// function sq(){
//     return b ** 2
// }

// var a = sq()
// alert("The square is"+a) 

// //Q6


// function fac(){
//     if (num<0){
//         alert("sorry the factorial of negative number doesnot exist")
//     }
//     else if( num==0 || num==1){
//         alert("The factorial is 1")
//     }
//     else{
//         for(i =1;i<=num;i++){
//             f=f*i
//         }
        
//     }
    
// }

// var f = 1
// var num = prompt("enter the number")
// fac()
// document.write("the factorial is : ",f)  

// //Q7

// var b = prompt("enter the first number")
// var d = prompt("enter the last number")
// function s(){
//     for(i=b;i<=d;i++){
//         console.log(i) 
//     }
    
// }

// s()



// //Q8

// var b = prompt("enter the base value")
// var p = prompt("enter the perpendiclar value")
// function calculatehypotnuse(){
//     f=calculatesquae()**0.5
//     return f
//     function calculatesquae(){
//         a = b**2
//         c = p**2
//         d=a+c
//         return d
//     }
//     calculatesquae()
// }
// m=calculatehypotnuse()
// document.write("The value of hypotonouse : ",m)


// //Q9


// function area(h,w){
//     document.write("The area is : ",h*w)
    
// }

// var h = prompt("enter height")
// var w = prompt("enter width")
// area(h,w)

// //Q10

// function f(a){
//     var b = a.split("").reverse().join("")
//     if (a===b){
//         alert("it is a plaindrome")
//     }
//     else{
//         alert("it is not a palidrome")
//     }
// }
// var a = prompt("enter the string")
// f(a)


// //Q11

// function ff(a){


// var s = str=> str[0].toUpperCase()+str.slice(1).toLowerCase()
// var b = a.split(" ")
// var c = a.split(" ").map(s).join(" ")
// console.log(c)

// }
// var a = prompt("enter the sentence")
// ff(a)

// //Q12

// function long (a){
//     var arr = a.split(" ")
//     var c ;
//     var d = 0
//     for (i=0;i<arr.length;i++){
//         if(arr[i].length>d){
//             d = arr[i].length
//             c= arr[i]
//         }

//     }
//     document.write("Sentence : ",a,"<br>")
//     document.write("The longest word in sentence : ",c)

// }


// var a = prompt("enter the sentence")
// f = long(a)


// //Q13

// var a = "the quick brown fox jumps over the lazy dog"

// count = 0
// function h(){
//     for (i=0;i<a.length;i++){
//         if ( a[i]==="o"){
//             count++
//         }
//     }
//     document.write("There are ",count," occurance of the word o")
// }

// h()

// //Q14

// var r = prompt("enter the radius")
// function calcCircumference(r){
//     document.write("The circumference is : ",2*3.42*r,"<br>")
    
// }

// calcCircumference(r)

// function calcarea(r){
//     document.write("The area is : ",3.142*(r)**2)
    
// }


// calcarea(r)