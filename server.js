 const express=require('express');
 const app=express();
 const path=require('path');
 const http=require('http').createServer(app)
 const getPath=path.join(__dirname,'./public');
 app.use(express.static(getPath));
 app.get('/about',(req,res)=>{
    res.send()
 });
 http.listen(8000,()=>{
    console.log('server is running on 8000')
 })

 //socket.io

const io=require('socket.io')(http);
io.on('connection',(socket)=>{
   console.log('connected...');
   socket.on('messages',(bio)=>{
      socket.broadcast.emit('messages',bio);
   })
})























