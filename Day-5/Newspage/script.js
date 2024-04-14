
console.log("....APP STARTED....");

// function callAPI()
// {
//     fetch("https://newsapi.org/v2/top-headlines?country=in &apiKey=addc2c62cb4e495882e2eab5caccbc0d").then((res)=>
// {
//     console.log(res);
// })
// }
// callAPI();


function callAPI()
{
    fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=addc2c62cb4e495882e2eab5caccbc0d").then((res)=>

   res.json())
   .then((data)=>renderUI(data)
   
)
  
}

callAPI();

function renderUI(data)
{

    //got the articles from data
    const articles= data.articles;
    console.log(articles);
const root = document.getElementById("root");

//single article from the article 
for(let i =0;i<15;i++){
 
  
    const ar = articles[i];
    // const arr =para[i];
    //  console.log(ar);



//created parent div
// const div= document.createElement('div');
const div= document.createElement('div');
const h3= document.createElement('h3');
const img= document.createElement('img');
const  para= document.createElement("p");




//styling
div.setAttribute="id news";
h3.innerText=ar.title;
div.style.backgroundColor="black";

root.style.display="grid";
root.style.gridTemplateColumns="1fr 1fr "
root.style.rowGap="50px"
root.style.columnGap="50px"
div.style.color="white"
img.style.height="50vh";
img.style.width="50vw";

//urltoImage
img.src=ar.urlToImage;



//appending

root.appendChild(div);
div.appendChild(h3);
div.appendChild(img)
}
}



// renderUI();



