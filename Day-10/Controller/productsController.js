const fsPromises=require("fs/promises");

const getAllProducts = async(req,res)=>
{
    // const data=fs.readFileSync('./data.json',"utf8")
    
     const data= await fsPromises.readFile('./data.json',"utf8")
    const arr=JSON.parse(data);
    res.json({
        status:'succes',
        results:arr.length,

        data:{
            products:arr,
        }
    }
    )
}

const addProduct=async(req,res)=>
{
   const data=req.body;
//    data.id=121;
//     res.send(data);

    const db= await fsPromises.readFile("./data.json","utf8");
    const arr=JSON.parse(db);
    const len=arr.length;
    const newData=data;
    if(len==0)
    {
        newData.id=1
    }  
    else{
   
        newData.id=(arr[len-1].id)+1;
    }
    arr.push(newData);
    fsPromises.writeFile("./data.json",JSON.stringify(arr));
    res.json({
        status:"success",
        results:1,
        data:{
            newData:newData
        }
    })
}

const replaceProduct=async(req,res)=>{
    // console.log(req);
    // res.send("work in progress"); //can't send response two times 
   const arr=JSON.parse(await fsPromises.readFile("./data.json","utf8"));
    const data=req.body;
  
    const reqId=parseInt(req.params.id);
    data.id=reqId;
  const newArr=arr.map(elem=>
  {
    if(elem.id==reqId)
    {
        return data;
    }
    else return elem;
  });
  await fsPromises.writeFile("./data.json",JSON.stringify(newArr));
    // console.log(data);
    res.json({
        status:"success",
        results:1,
        data:{
            newArr:data
        }
    });
}

const deleteProduct=async(req,res)=>
{
    const reqId=parseInt(req.params.id);
    const arr=JSON.parse(await fsPromises.readFile("./data.json","utf8"));
    const newArr=arr.filter((elem)=>{
        if(elem.id===reqId)
        return false;
    else
    return true;

    });
    fsPromises.writeFile("./data.json",JSON.stringify(newArr));
    res.status(204);
    res.json({
        status:'succes',
        data:{
            newData:null
        }
    

    });
    

}

module.exports={
    getAllProducts,
    addProduct,
    replaceProduct,
    deleteProduct
}