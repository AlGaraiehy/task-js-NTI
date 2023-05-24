// function helloWorld(){
//     document.write("Hello World")
// }
// helloWorld()

 
/* ------------------          Task one          --------------- */



// let x = +prompt("Enter year to check")
// function checkLeapYear(){
//     if(x % 4 == 0 && x % 100 !=0 || x % 400 == 0 ) document.write("This is Leap Year")
//     else document.write("This is Not a Leap Year")
//     return
// }checkLeapYear()

// for ex: (2010) not leap year, (2024) is a leap year




/* ------------------          Task two          --------------- */




let count = +prompt("Enter Number")

function multiplyFive(){
    let divid = count / 5
    if(count % 5 ==0){
      document.write("The number after divided it by 5 is: " + divid)  
    }
    else if (count % 5 > 0) {
        document.write("It is not divisible by 5: ")
     }
    return
}
multiplyFive()



/* ------------------          Task two          --------------- */