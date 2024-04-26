//npm init
// const figlet=require("figlet");
// figlet("DHAANI!",(err,data)=>
// {
//     console.log(data);
// })

// fetch("https://api.github.com/users/deepak3440").then(res)=>{
//     console.log(data)
// }






// //async await
// console.log("Start");
//  async function getApi()
// {console.log("api Calling .");
//     const pr = await fetch('https://api.github.com/users/deepak3440');
//     console.log("making js ....");
//     const data= await pr.json();
//     console.log()
//     // console.log(pr);
//     console.log("fetched data")

// }
// getApi();
// console.log('end');


console.log("start");
async function callAPI()
{
    const pr= new Promise((res,rej) =>
    {
console.log('promise 1....');
setTimeout(()=>
{
    console.log("timeout...");
},10000);
    })
    
    console.log("promoise is completed");
}
callAPI();
console.log("end");

