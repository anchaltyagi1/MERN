// let a= new String("hello");
// let b="hello";
// if(a==b)
// {
//     console.log("Yes")

// }
// else{
// console.log("No");
// }

//  const obj={
//     "nam" : "Dhaani",
//     "last-name" :"Tyagi"
// };
// obj.age=1.5;
// obj.nam=1

// we can change single keys and values but can no change complete object in case of const.
// const str = JSON.stringify(obj);
// document.write(str);




// ARRAY

// const obj={
//         "nam" : "Dhaani",
//         "last-name" :"Tyagi"
//     };
//     let arr=[1,2,3,4];
//     document.write(Array.isArray(obj) +"<br>");
//     document.write(Array.isArray(arr) +"<br>");
    


//  arr=[4,5];
//  arr[1]="ayushi";
//  arr[10]="ritika";
//  arr.push(0);
//  arr.unshift(8);
//  arr.pop();
//  arr.shift();
//  arr.m
//  let a= arr.indexOf("ayushi");

//  document.write(a +"<br>")
//  document.write(typeof(arr) +"<br>")

//  document.write(arr +"<br>")
// document.write(arr.length);

// function check( s)
// {
//     if(Array.isArray(s))
//     document.write(" No,it is not object");
//  else if(typeof(s)=="object")
//  document.write(" <br>  yes,it is object");
// else
// document.write("No ,it is not object");

// }

// check([1,2,3,4]);
// check({nam:"dhaani"});

// // loops
// const arr=[1,2,34];

// const obj={
//         "nam" : "Dhaani",
//         "last-name" :"Tyagi"
//     };

// // function outputArray(arr)
// // {
// //     for(let i=0;i<4;i++)
// //     {
// //      document.write(arr[i]);
// //     }
  
// // }
// // outputArray(arr);


// for (let i in arr)
// {
//     document.write( "<br>"+i);
// }

// for(let i=0;i<4;i++)
// {
//     console.log(obj.i)
// }





//  window.console.log(window);
// window.console.log(window.innerHeight);
// console.log(window.document);
// // console.dir(console);
// console.dir(window.document);

//  const s=document.getElementsByTagName('h3');
//  console.log(s);
// const s= document.getElementById('p')
// console.log(s);

// const s= document.getElementById('p')
// console.log(s);
// const s= document.getElementsByClassName('h3')
// console.log(s);

// const s= document.querySelector('p')
// console.log(s);

// const s= document.querySelectorAll('div>h3')
// console.log(s);
// const s= document.getElementById('h1')
// console.log(s);
// // s.innerText=" heyy guyssssssssssssssssssssssss
// s.setAttribute('class','c1');


// s.innerHTML=" <h1> hey guyssssssssssssssssssssssss </h1>"

const ne=document.createElement("h3");
ne.innerHTML="Dynamic Text";
console.log(ne);
// document.body.appendChild(ne)

const div= document.getElementById('div');
div.appendChild(ne);

const e= document.getElementById('h1');
e.remove();

// deepcopy and shallown copy