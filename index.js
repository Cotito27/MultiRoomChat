var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server);
//const path = require('path');
//const router = express.Router();

//specify the html we will use
app.use('/', express.static(__dirname + '/public'));
app.get('*', function(req,res){
  res.status(404).redirect('error.html');

});
app.set('port',process.env.PORT || 5000);
//bind the server to the 80 port
//server.listen(3000);//for local test
server.listen(app.get('port'), () => {
    console.log('Server on port '+app.get('port'));
});//publish to heroku
//server.listen(process.env.OPENSHIFT_NODEJS_PORT || 3000);//publish to openshift
//console.log('server started on port'+process.env.PORT || 3000);
//handle the socket
let passwords=[];
let users=[];
let messages=[];
let sessions=[];
let validsala=[];
let comparador=[];
var contlimit=0;
var idmessage=0;
var contobj=0;
var jsonfile = require('jsonfile');
let userexist = require('./db.json');
let sesionsexist=require('./salas.json');

var obj={
     'listusers':[]
    };

    for(var i=0;i<userexist.listusers.length;i++){
      obj.listusers.push(userexist.listusers[i]);
    }
 //console.log(obj.listusers[0]);
contobj=obj.listusers.length;

var objsesions={
      'listsessions':[]
};

    for(var i=0;i<sesionsexist.listsessions.length;i++){
      objsesions.listsessions.push(sesionsexist.listsessions[i]);
    }


io.sockets.on('connection', function(socket) {
console.log("conectado"); 
  socket.on('registeruser',function(data){
     contobj++;
     console.log('registrando...');
        obj.listusers.push({"id":contobj,"user":data.user,"password":data.password,"nombres":data.nombres,"apellidos":data.apellidos});

jsonfile.writeFile('db.json', obj, {spaces:2}, function(err){
      console.log(err);
});
  });

    socket.on('registrarSesion',function(data){
    console.log('registrando...');
        objsesions.listsessions.push({"id":data.sessionId,"name":data.nameSession});

/*jsonfile.writeFile('salas.json', objsesions, {spaces:2}, function(err){
      console.log(err);
});*/
      /*var respuesta=true;
        for(var i=0;i<validsala.length;i++){
        if(validsala[i].sessionId!=data.sessionId){
          respuesta=false;
        }
      }
      if(data.sessionId!=null&&data.sessionId!=undefined){
        validsala.push(data);
      }*/
      //socket.broadcast.emit('validarSesion',data);
    });
    socket.on('validarSesion',function(data){
      var respuesta=false;
      for(var i=0;i<objsesions.listsessions.length;i++){
        if(objsesions.listsessions[i].id==data.sessionId&&objsesions.listsessions[i].name==data.nameSession){
          respuesta=true;
        }
      }
      console.log(respuesta+" "+data.sessionId);
      socket.emit('validarSesion',respuesta);
    });
    socket.on('userconnect',function(data){
        
      var confir=false;
      var confirsession=false;
      for(var i=0; i<users.length;i++
      ){
          if(users[i]==data.username){
            
          confir=true;
          if(sessions[i]!=data.sessionId){
              confir=false;
            }
        }    
        
      }
      if(!confir){
       
        socket.username = data.username;
        socket.sessionId = data.sessionId;
        users.push(data.username);
        //passwords.push(data.password);  
        sessions.push(data.sessionId);
      }
      
      //var idsesion=data.sessionId;
      var lastusersession=sessions[sessions.indexOf(socket.sessionId)];
        socket.emit('userconnect',{users},sessions,lastusersession);
        socket.broadcast.emit('userconnect',{users},sessions,lastusersession);
        console.log(users[0]);
    });
    socket.on('disconnect',function(){
      var userdisconnect;
      var usersession;
        if(socket.username){
          userdisconnect=users[users.indexOf(socket.username)];
           usersession=sessions[sessions.indexOf(socket.sessionId)];
            socket.emit('disconnectUser',userdisconnect);
            users.splice(users.indexOf(socket.username),1);
            sessions.splice(sessions.indexOf(socket.sessionId),1);
           
        }
        var lastusersession=sessions[sessions.indexOf(socket.sessionId)];
        
        
        if(userdisconnect!=undefined&&userdisconnect!=null){
          console.log(userdisconnect);
          socket.emit('userdisconnect',userdisconnect,usersession);
        socket.broadcast.emit('userdisconnect',userdisconnect,usersession);
        }
        socket.emit('userconnect',{users},sessions,lastusersession);
        socket.broadcast.emit('userconnect',{users},sessions,lastusersession);
    });
  
    socket.on('sendMessage',function(data){

  /*var dateTime=new Date().toLocaleTimeString().
              replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
      data.date=dateTime;*/
      idmessage++;
      data.id=idmessage;
      messages.push(data);
      
      socket.emit('sendMessage',data,messages.length);
        socket.broadcast.emit('sendMessage',data,messages.length);
        if(messages.length>60){
           messages=messages.slice(messages.length-60);
       }
    });
    socket.on('searchElement',function(data){
      let respuesta=[];
      let respsesion=[];
  for(var i=0;i<users.length;i++){
var valor=""+users[i];
//console.log(valor);
//console.log(valor.includes(data));//true
    if(valor.toUpperCase().includes(data.toUpperCase())){
        respuesta.push(users[i]);
        respsesion.push(sessions[i])
    }
  }
  socket.emit('searchElement',respuesta,users,sessions,respsesion);
    });
    socket.on('validaruser',function(){
     // console.log(obj.listusers);
      socket.emit('validaruser',obj.listusers);
    });
    socket.on('enviarSonido',function(){
      socket.broadcast.emit('enviarSonido');
    });
    socket.on('escribiendoMessage',function(data){
      
        socket.broadcast.emit('escribiendoMessage',data);
          
    });
    socket.on('actualizarUser',function(user,session){
      var confir=false;
      for(var i=0; i<users.length;i++
      ){
        if(users[i]==user){
          confir=true;
          if(sessions[i]!=session){
              confir=false;
            }
        }
      }
      if(user!=""&&user!=null&&user!=undefined){
        if(!confir){
      users.push(user);
      console.log('lista actualizada');
      var lastusersession=sessions[sessions.indexOf(socket.sessionId)];
      socket.emit('userconnect',{users},sessions,lastusersession);
        socket.broadcast.emit('userconnect',{users},sessions,lastusersession);
      }
      }
      
     
        
    });
    socket.on('updateMessages',function(){
      socket.emit('updateMessages',messages,messages.length,sessions);
    });
    socket.on('messageMail',function(){
      socket.broadcast.emit('messageMail');
    });
    socket.on('exportMessages',function(){
      socket.emit('exportMessages',messages);
    });
    socket.on('eliminarMessage',function(data){
      
      var respuesta=-1;
      var username1;
      let vector;
      for(var i=0;i<messages.length;i++){
        if(messages[i].id==data){
          respuesta=i;
        }
      }
      if(messages[respuesta].message!=undefined&&messages[respuesta].message!=null&&messages[respuesta].message!=''){
        vector={
        sessionId: messages[respuesta].sessionId,
        id:data,
        username:messages[respuesta].username,
        message:'<strong><i class="fas fa-ban"></i>&nbsp;<em id="deletemess">Se ha eliminado este mensaje</em></strong>',
        date:messages[respuesta].date,
        imagen:messages[respuesta].imagen,
        dibujo:messages[respuesta].dibujo
      };
      }
      if(messages[respuesta].imagen!=undefined&&messages[respuesta].imagen!=null&&messages[respuesta].imagen!=''){
        vector={
        sessionId: messages[respuesta].sessionId,
        id:data,
        username:messages[respuesta].username,
        message:'<strong><i class="fas fa-ban"></i>&nbsp;<em id="deletemess">Se ha eliminado este mensaje</em></strong>',
        date:messages[respuesta].date,
        imagen:null,
        dibujo:messages[respuesta].dibujo
      };
      }
      if(messages[respuesta].dibujo!=undefined&&messages[respuesta].dibujo!=null&&messages[respuesta].dibujo!=''){
        vector={
        sessionId: messages[respuesta].sessionId,
        id:data,
        username:messages[respuesta].username,
        message:'<strong><i class="fas fa-ban"></i>&nbsp;<em id="deletemess">Se ha eliminado este mensaje</em></strong>',
        date:messages[respuesta].date,
        imagen:messages[respuesta].imagen,
        dibujo:null
      };
      }
      if(respuesta!=-1){
        
         messages.splice(respuesta,1,vector);
      }
     
      socket.emit('eliminarMessage',data);
      socket.broadcast.emit('eliminarMessage',data);
      /*socket.emit('updateMessages',messages,messages.length);
      socket.broadcast.emit('updateMessages',messages,messages.length);*/
      /*socket.emit("updateMessages",messages,messages.length,respuesta+1);
  socket.broadcast.emit("updateMessages",messages,messages.length,respuesta+1);*/
    });
});


       
