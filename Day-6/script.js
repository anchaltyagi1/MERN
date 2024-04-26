//create order

// function createOrder(x,fn)

// {
//     console.log(x);
//     fn('like123');
//     setTimeout(()=>fn('like123'),1000)
// }

// //makePayment

// function makePayment(orderID)
// {
//     console.log(orderID);
// }

// createOrder('soap',makePayment);

//  const pr=new Promise((resolve,reject)=>{
//     //logic
//     if(true)
//     {
//         resolve();
//     }
//     else {
//         reject();
//     }
//     //resolvdd fullied rigid function
// });
// console.log(pr);

// now we see our promise:--
// const pr=new Promise((resolve,reject)=>{
//     setTimeout(()=>{resolve("done-123");},1000);
//     });
//     console.log(pr);
//     pr.then((res)=>{
//         console.log(res);
//     });

// setTimeout(() => {console.log('first timeout...')},0);


//     //if we do reject at place of resolve
//     const pr=new Promise((resolve,reject)=>{
//         setTimeout(()=>{reject("Some items are out of stock");},5000);
//         });
//         console.log(pr);
//         pr.then((res)=>{
//             console.log(res);
//         }).catch((err)=>
//     {
//         console.log(err);
//     })


setTimeout(function abc()
{
    console.log("I'm one.");},0);

    const pr = new Promise((res,rej)=>
{
    setTimeout(()=>{res('done')},0);}
)
