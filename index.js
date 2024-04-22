const jsonServer=require('json-server');


//Create server using create method in the above library
const mediaPlayerServer=jsonServer.create();

//Create Path For db.json File
const router=jsonServer.router('db.json');

//Create a middleware to convert json to js
const middlware=jsonServer.defaults();

mediaPlayerServer.use(middlware);

mediaPlayerServer.use(router);

// Set a port for the server
const PORT = 4000 || process.env

mediaPlayerServer.listen(PORT,()=>{
    console.log(`server runing sucessfully at port ${PORT}`);
})

