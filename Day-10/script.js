const express=require('express');
// const fs=require('fs');
const app=express();

const fsPromises=require("fs/promises");
//middleware
const productsController=require('./Controller/productsController.js');

const userController=require('./Controller/userController.js');

const productRouter=require('./Controller/productRouter.js')
const userRouter=require('./Controller/userRouter.js')




app.use(express.json());

app.use((req,res,next)=>{
    //console.log('Request,Received...');
    const time= new Date().toLocaleString();
    fsPromises.writeFile('./log.txt',req.url+'\t'+time+'\n');
    next();
});



app.use('/api/products',productRouter)
app.use('/api/products',userRouter)


// productRouter.route('/')
// .get(productController.getAllProducts)
//  .post(productController.addProduct)

//  productRouter.route('/:id')
//  .put(productController.replaceProduct)
//  .delete(productController.deleteProduct)

// app.route('/api/products')
// .get(productController.getAllProducts)
// .post(productController.addProduct)

// app.route('/api/products/:id')
// .put(productController.replaceProduct)
// .delete(productController.deleteProduct)

// app.route('/api/users')
// .get(userController.getUser)
// .post(userController.addUser)
// .put(userController.replaceUser)
// .delete(userController.deleteUser)


// app.get(/api/products',productController.getAllProducts);

// app.post('/api/products',productController.addProduct);

// app.put('/api/products/:id',productController.replaceProduct);
//  app.delete('/api/products/:id',productController.deleteProduct);

// app.get('/api/users',userController.getUser);
// app.post('/api/users',userController.addUser);
// app.put('/api/users',userController.replaceUser);
// app.delete('/api/users',userController.deleteUser);



app.listen(1400);