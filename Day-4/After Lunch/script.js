// const res = document.querySelector('div');

// console.log(div);
//  div.innerHTML="<p>Hello</p>";
//  div[0].innerHTML="<p>Hello</p>";
//  res.remove();
//querySelector by default select first tag,first class
// const a = document.querySelector('p:nth-of-type(2)');
// const a = document.getElementsByTagName('p');
// res.removeChild(a[1]);


// what is node and what is element??


/*EVENTS
*/
// function info(){
//     console.log("Btn Clicked");
//     // const d= document.querySelector('div');
//     // const de= document.createElement('p');
//     // de.innerText="my name is dhaani "
//     d.append(de);

    function info(e){
        console.log("e");
        // const d= document.querySelector('div');
        // const de= document.createElement('p');
        // de.innerText="my name is dhaani "
        // d.append(de);

        
        // e.target.class='abc';
        // e.target.setAttribute('style','color:red');
        // e.target.setAttribute('style','background-color:green');
       e.target.style.backgroundColor='green';
       e.target.style.color='red';
    
}
