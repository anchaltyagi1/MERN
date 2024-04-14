// console.log("Hello");
//  let a=prompt("Enter your name:");
//  console.log(a);
//  document.write(a);
 
// let a="anchal";
// let a=2;
// let b=3;
// let c= parseInt("4");
// document.write(a+c);

// document.write(a+20);

//  let nam="Anchal";
//  let nick_nam= "Riya";
//  document.write(` ${nam} and ${nick_nam}`);

//  let a=10;
// let a ={
//     name:"Anchal",
//     course:"MCA"

// };
// document.write();

//  let a=20;


// function print(str="Nothing is here")
// {
//     document.write(str);
// }
// print();

// // print("Hello");
// document.write("<br>")

// function pattern(n)
// {
//     for(let i=0;i<n;i++)
//     {
//         for(let j=0;j<i;j++ )
//         {
//             document.write("*");
//         }
//         document.write("<br>")
//     }
// }



// pattern(5);


// function sum(a,b)
// {
//     document.write(a+b);
// }
// sum();
// document.write("<br>");

// function sum1(a,b)
// {
//     if(a&&b)
//     document.write(a+b);
// else if(a)
//   document.write(a);
// else
// document.write(0);
// }
// sum1();
// document.write("<br>");
// sum1(2);
// document.write("<br>");
// sum1(2,3);

// // flasey values are null,0,undefined,empty string,false.



// // function declaration 
// function print()
// {
//   document.write('--');

// }

// // function assignment (named)
// const a =function print()
// {
//     document.write("--")
// }

// // function assignment (anonymous)
// const b =function ()
// {
//     document.write("--")
// }
// document.write("<br>");
// print();
// document.write("<br>");
// a();
// document.write("<br>");
// b();
// document.write("<br>");

// arrow functions
// let c = ()=>
// {
//     document.write("--" +"<br>")
// }
// c();

// ??????return value from arrow function
// let a=1;
// switch(a)
// {
//     case 1: document.write("Ayushi " + "<br>");
//             // break;
//     case 2: document.write("Anchal"+"<br>");
//             // break;
//     case 3: document.write("Aakrti"+"<br>");
//             // break;
//     case 4: document.write("Ritika"+"<br>");
//             // break;
//     default: document.write("Bye!!!!")

// }

// object
const obj =new Object();
obj[1]='one';
obj['name']='Anchal';
console.log(obj);
document.write( JSON.stringify(obj));

const obj1=
{
    name: "Dhaani",
    sur_name:"Tyagi",
    course:"Nursery",
    age: 1.5
};
document.write( JSON.stringify(obj1));

const full= `${obj1.name}  ${obj1.sur_name} `
console.log(full);
const x= prompt("Enter ");
document.write(obj1[x]);

