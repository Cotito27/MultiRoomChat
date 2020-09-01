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
    /*res.status(404).send(`<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->

	<title>Error 404</title>

	<!-- Google font -->
	<link href="https://fonts.googleapis.com/css?family=Muli:400" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Passion+One" rel="stylesheet">

	<!-- Font Awesome Icon -->
	<link type="text/css" rel="stylesheet" href="css/font-awesome.min.css" />

	<!-- Custom stlylesheet -->
	<link type="text/css" rel="stylesheet" href="css/error.css" />

	<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
	<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
	<!--[if lt IE 9]>
		  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
		  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
		<![endif]-->
  <style>
    * {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

body {
  padding: 0;
  margin: 0;
}

#notfound {
  position: relative;
  height: 100vh;
}

#notfound .notfound-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url('../img/bg.jpg');
  background-size: cover;
}

#notfound .notfound-bg:after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
}

#notfound .notfound {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
}

#notfound .notfound:after {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50% , -50%);
      -ms-transform: translate(-50% , -50%);
          transform: translate(-50% , -50%);
  width: 100%;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.7);
  -webkit-box-shadow: 0px 0px 0px 30px rgba(255, 255, 255, 0.7) inset;
          box-shadow: 0px 0px 0px 30px rgba(255, 255, 255, 0.7) inset;
  z-index: -1;
}

.notfound {
  max-width: 600px;
  width: 100%;
  text-align: center;
  padding: 30px;
  line-height: 1.4;
}

.notfound .notfound-404 {
  position: relative;
  height: 200px;
}

.notfound .notfound-404 h1 {
  font-family: 'Passion One', cursive;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  font-size: 220px;
  margin: 0px;
  color: #222225;
  text-transform: uppercase;
}

.notfound h2 {
  font-family: 'Muli', sans-serif;
  font-size: 26px;
  font-weight: 400;
  text-transform: uppercase;
  color: #222225;
  margin-top: 26px;
  margin-bottom: 20px;
}

.notfound-search {
  position: relative;
  padding-right: 120px;
  max-width: 420px;
  width: 100%;
  margin: 30px auto 20px;
}

.notfound-search input {
  font-family: 'Muli', sans-serif;
  width: 100%;
  height: 40px;
  padding: 3px 15px;
  color: #fff;
  font-weight: 400;
  font-size: 18px;
  background: #222225;
  border: none;
}

.notfound-search button {
  font-family: 'Muli', sans-serif;
  position: absolute;
  right: 0px;
  top: 0px;
  width: 120px;
  height: 40px;
  text-align: center;
  border: none;
  background: #3054E4;
  cursor: pointer;
  padding: 0;
  color: #fff;
  font-weight: 400;
  font-size: 16px;
  text-transform: uppercase;
}

.notfound a {
  font-family: 'Muli', sans-serif;
  display: inline-block;
  font-weight: 400;
  text-decoration: none;
  background-color: transparent;
  color: #222225;
  text-transform: uppercase;
  font-size: 14px;
}

.notfound-social {
  margin-bottom: 15px;
}
.notfound-social>a {
  display: inline-block;
  height: 40px;
  line-height: 40px;
  width: 40px;
  font-size: 14px;
  color: #fff;
  background-color: #222225;
  margin: 3px;
  -webkit-transition: 0.2s all;
  transition: 0.2s all;
}
.notfound-social>a:hover {
  color: #fff;
  background-color: #3054E4;
}

@media only screen and (max-width: 480px) {
  .notfound .notfound-404 {
    height: 146px;
  }

  .notfound .notfound-404 h1 {
    font-size: 146px;
  }

  .notfound h2 {
    font-size: 22px;
  }
}

  </style>
</head>

<body>

	<div id="notfound">
		<div class="notfound-bg"></div>
		<div class="notfound">
			<div class="notfound-404">
				<h1>404</h1>
			</div>
			<h2>Oops! Page Not Found</h2>
			<form class="notfound-search">
				<input type="text" placeholder="Search...">
				<button type="button">Search</button>
			</form>
			<div class="notfound-social">
				<a target="_blank" href="https://www.facebook.com/"><i class="fa fa-facebook"></i></a>
				<a target="_blank" href="https://www.twitter.com"><i class="fa fa-twitter"></i></a>
				<a target="_blank" href="https://www.pinterest.com"><i class="fa fa-pinterest"></i></a>
				<a target="_blank" href="https://www.google.com"><i class="fa fa-google-plus"></i></a>
			</div>
			<a href="index.html">Back To Homepage</a>
		</div>
	</div>

</body><!-- This templates was made by Colorlib (https://colorlib.com) -->

</html>
`);
    */
});
//bind the server to the 80 port
//server.listen(3000);//for local test
server.listen(process.env.PORT || 3000);//publish to heroku
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
 console.log(obj.listusers[0]);
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
    socket.on('actualizarUser',function(data){
      var confir=false;
      for(var i=0; i<users.length;i++
      ){
        if(users[i]==data){
          confir=true;
          if(sessions[i]!=data.sessionId){
              confir=false;
            }
        }
      }
      if(data!=""&&data!=null&&data!=undefined){
        if(!confir){
      users.push(data);
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


       
