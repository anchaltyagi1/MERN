 function fetchAPI()
 {
    const url="https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London%2CUK?unitGroup=us&key=Y736T2TCB8JH5EWDRS4YRG4XG"

    
    fetch(url)
    .then ((res)=>res.json())
    .then(renderUI);
    fetch
 }

 fetchAPI()

 function renderUI(data)
 {
    // console.log(data.days);
    const root= document.getElementById("root");
   


    //creating
    const row= document.createElement("tr");
    const cell= document.createElement("th");
    cell.innerText='Date';
  
    row.appendChild(cell);

    const cell1= document.createElement("th");
    cell1.innerText='Maximum Temperature';
    row.appendChild(cell1);

    const cell2= document.createElement("th");
    cell2.innerText='Minimum Temperature';
     row.appendChild(cell2);

     root.appendChild(row);


    // child row

     const childrow=document.createElement("tr");
     const childcell= document.createElement("td");
     childcell.innerText='08/04/2024';
   
    childrow.appendChild(childcell);
 
     const childcell1= document.createElement("td");
     childcell1.innerText='120 F';
     childrow.appendChild(childcell1);
 
     const childcell2= document.createElement("td");
     childcell2.innerText='90 F';
      childrow.appendChild(childcell2);


     root.appendChild(childrow);
     
     root.style.border="2px solid black"

 }
