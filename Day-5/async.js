// console.log('GEC start');


// function printPretty()
// {
//     console.log('PrettyStart');
//     let ans =2+3;
//     console.log(ans);
//     console.log('PrettyEnd');
// }

// setTimeout(printPretty,10000)
// {
//     console.log('GEC End')
// }
// const btn = document.getElementById('btn');
// btn.addEventListener("click",printPretty);


// console.log("start");
// const req=fetch('https://api.github.com/users/deepak3440');
// req.then(()=> console.log('fetched'));
// // console.log(data);
// console.log("end");



// console.log("start");
//  const req=fetch('https://dummyjson.com/products/1')
// const res= req.then(res => res.json());
// res.then((data)=>console.log(data));
// console.log("end");
            
const data=fetch('https://dummyjson.com/products/1').then(res => res.json()).then((data)=>console.log(data));