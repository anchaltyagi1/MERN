// const firstNameChange =(e)=>
// {
//     const val =e.target.value
//     if(val.length>3)
//     console.log('correct');
// }

// event delegation??????????????????

function submitForm(e)
{
    e.preventDefault();
   const t=e.target
   const res={ hobbies:[],};
   for(let i=0;i<t.length;i++)
   {
    
    // console.dir(t[i].value);
    // console.dir(t[i].type);
    if((t[i].type)!='submit')
    {
        console.dir(t[i].value);
      console.dir(t[i].type);

      if((t[i].type)=="checkbox" &&t[i].checked){
      res.hobbies.push(t[i].value);

      }
      
    

    }


  


   }
   console.log(res);
}