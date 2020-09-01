/*function initWhatsappChat() {
    'use strict';
    var mobileDetect = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (mobileDetect) {
        $('#float-cta .whatsapp-msg-container').css('display','none');
        $('#float-cta > a').on('click', function(){
            window.location = 'https://api.whatsapp.com/send?phone=123456789';
        });
    } else {
        $('#float-cta > a').click(function(){
            $(this).toggleClass('open');
            $('#float-cta .whatsapp-msg-container').toggleClass('open');
            $('#float-cta').toggleClass('open');
        });
        $('.btn-whatsapp-send').on('click', function(event){
            event.stopPropagation();
        });
        $('.btn-whatsapp-send').click(function() {
            var baseUrl = 'https://web.whatsapp.com/send?phone=123456789&text=';
            var textEncode = encodeURIComponent($('#float-cta .whatsapp-msg-body textarea').val());
            window.open(baseUrl + textEncode, '_blank');
        });
    }
}*/
//initWhatsappChat();
import helpers from './helpers.js';
(function(){
 const room = helpers.getQString( location.href, 'room' );
  if(room){
    
    var number1=room.indexOf('_')+1;
      sessionStorage.roomId=room.substr(number1,room.length-1);

      sessionStorage.nameRoom=room.replace('_'+sessionStorage.roomId,'').replace('\%20\g',' ').toUpperCase();
     
  //alert(sessionStorage.roomId);
  }else{
    return window.location="error.html";
  }
var emojis1=document.querySelector('.emoji_01');
  var input=document.getElementById("message-to-send");
  
  var picker=new EmojiButton({
      style: 'twemoji',
      position: 'top-end',
      theme: 'light',
      autoHide : false,
      emojiVersion : 5.0, //1.0,2.0,3.0,4.0,5.0,11.0,12.0,12.1
      emojiSize : "20px"
  });
  picker.on('emoji',function(emoji){
    var valor=emoji.split('" src')[1];
    input.value+=emoji.replace('<img class="emoji" draggable="false" alt="','').replace(valor,'').replace('" src','');
  });
  emojis1.addEventListener('click',function(){
   
    picker.pickerVisible?picker.hidePicker():picker.showPicker(emojis1);
  });


// with no title

if(sessionStorage.username==""||sessionStorage.username==null||sessionStorage.username==undefined){
  window.location="main.html";
  return;
}
//alert(sessionStorage.username);

var validado=false;
var verificadorpop=false;
var generalpop;

function isMobile(){
      return (
          (navigator.userAgent.match(/Android/i)) ||
          (navigator.userAgent.match(/webOS/i)) ||
          (navigator.userAgent.match(/iPhone/i)) ||
          (navigator.userAgent.match(/iPod/i)) ||
          (navigator.userAgent.match(/iPad/i)) ||
          (navigator.userAgent.match(/BlackBerry/i))
      );
  }
  if(isMobile()){
    $('#espacio_01').css('display','none');
    $('#espacio_01').hide();
    $('#espacio_01').attr('style','display:none !important;');

    $('.fa-smile-o').css('display','none');
    $('.fa-smile-o').hide();
    $('.fa-smile-o').attr('style','display:none !important; font-size:0 !important;');
  }
  var elementcolorselected=document.querySelector('.colorceleste');
  $('.colorblue,.colorgreen,.colorpurple,.colorceleste,.colornaranja').click(function(){
    $('.colormensaje').css('border','none');
    $(this).css('border','3.5px solid rgb(10, 10, 10)');
    elementcolorselected=this;
  });
  $('.colorblue,.colorgreen,.colorpurple,.colorceleste,.colornaranja').mouseenter(function(){
    $(this).css('border','3.5px solid rgb(10, 10, 10)');
  });
  $('.colorblue,.colorgreen,.colorpurple,.colorceleste,.colornaranja').mouseout(function(){
    if(elementcolorselected!=this){
      $(this).css('border','none');
    }
    
   
  });
  sessionStorage.userconnect="connect";
  sessionStorage.userdisconnect="disconnect";
  //alert(sessionStorage.username);
  const socket=io();
//sessionStorage.roomId="Room_123";
//sessionStorage.nameRoom="Group Chat";
$('.chat-with').html(sessionStorage.nameRoom);
/*socket.emit('validarSesion',{
  sessionId:sessionStorage.roomId,
  nameSession:sessionStorage.nameRoom
});
socket.on('validarSesion',function(data){
  /*if(!data){
    alert("Sesión no válida");
    return window.location="index.html";
  }*/
//});
/*let roomLink = `${ location.origin }/chat.html?room=${ sessionStorage.nameRoom.toLowerCase().replace('\ \g','%20') }_${ sessionStorage.roomId }`;*/
let roomLink = location.href;
$('#txtlink-url').val(roomLink);
    socket.emit('validarSesion',{
        sessionId: sessionStorage.roomId,
        nameSession: sessionStorage.nameRoom
      });
      sessionStorage.permissionRoom="permiso";
      
    socket.on('validarSesion',function(data){
      if(!data){
            //alert("Sesión no válida");
        /*swal("Error!", "Sesión no válida", "error")
        .then((value) => {
          swal({
            title:"Redireccionando...",
            showConfirmButton: false
          });
          sessionStorage.roomId="";
          sessionStorage.nameRoom="";
        /*  if (top.location != location) {
top.location.href = document.location.href ="index.html";
        }*/
          /*document.location.href ="index.html";
          sessionStorage.permissionRoom="nopermiso";
        });
         return;*/
         window.location="error.html";
         return;
      }
                });
  username(socket);
  updateusers(socket);
  actualizarMessage(socket);
  disconnectUser(socket);
  selectedElements(socket);
  listarMessages(socket);
  updateMessages(socket);
  mensajeEliminado(socket);
  cancel(socket);
  escribirMessage(socket);
  exportarMessages(socket);
  var controladorquit=true;
  var controlfocusmessage=true;
  var numbermessagenew=0;
 $(window).focus(function(){
   controlfocusmessage=true;
   if(controlfocusmessage){
     document.title="Chat Grupal";
     numbermessagenew=0;
   }
setTimeout(function(){
if(controladorquit){
  socket.emit('actualizarUser',sessionStorage.username, sessionStorage.roomId);
  }
  },1000);
});
$(window).blur(function(){
  controlfocusmessage=false;
  
});
$(window).click(function(){

  setTimeout(function(){
if(controladorquit){
  socket.emit('actualizarUser',sessionStorage.username, sessionStorage.roomId);
  }
  },1000);
  
});


function copiarAlPortapapeles(id_elemento) {
  var aux = document.createElement("input");
  aux.setAttribute("value", document.getElementById(id_elemento).value);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
}

$('#copiarurl').click(function(){
   var url = document.querySelector('#txtlink-url');


  try {
    // intentar copiar el contenido seleccionado
   copiarAlPortapapeles('txtlink-url');
    $(this).html(`<strong>Copiado con exito! </strong><i class="fas fa-check"></i>`);
    console.log(resultado ? 'Url copiado' : 'No se pudo copiar el url');
  } catch(err) {
    console.log('ERROR al intentar copiar el url');
  }

  // eliminar el texto seleccionado
  // cuando los navegadores lo soporten, habría
  // que utilizar: removeRange(range)
});

$('#cerrarinvitacion').click(function(){
  setTimeout(function(){
    $('#copiarurl').html('Copiar');
  },600);
  
});

  /*window.addEventListener('focus',function(){
alert("aea");
  socket.emit('actualizarUser',sessionStorage.username);
});*/

  function username(socket){
    /*if(sessionStorage.validcantuser=="data"){
      window.location="index.html";
    }else{*/

      socket.emit('userconnect',{
        sessionId: sessionStorage.roomId,
        username: sessionStorage.username
    });
    //}
    
}
var html;
let vecsearch=[];
var contadoruserlastdis=0;
var replaceuser2="";
var preloader=document.querySelector('#preloader');
//previewDisconnect(socket);
function previewDisconnect(socket){
  socket.on('disconnect',function(user){
    if(user==sessionStorage.username){
        auth.signOut().then(() => {
      console.log("signup out");
      }); 
      }
  });
}
function disconnectUser(socket){
  socket.on('userdisconnect',function(user,usersession){
    //alert(usersession+" "+sessionStorage.roomId);
    if(usersession==sessionStorage.roomId){
      
      
      var html1;
      var nomuser=user.toUpperCase();
      
        html1=`<li class="clearfix">       
              <div class="name">${nomuser}</div>
              <div class="status">
                <i class="fa fa-circle offline"></i> offline
            
              </div>
            </li>`;
            $('.list').append(html1);
        var userlast=user;
      if(sessionStorage.userdisconnect=="disconnect"){
        if(userlast!=sessionStorage.username){
        //contadoruserlastdis++;
        if($('.toast')[0]){
          if(!$('.toast').html().includes(`<strong>${replaceuser2}</strong> ha abandonado el chat.`)){
          Command: toastr["info"](`&nbsp;<strong>${userlast.toUpperCase()}</strong> ha abandonado el chat.`);
          replaceuser2=userlast.toUpperCase();
        }
        }else{
          Command: toastr["info"](`&nbsp;<strong>${userlast.toUpperCase()}</strong> ha abandonado el chat.`);
          replaceuser2=userlast.toUpperCase();  
        }
        
      }
      }
    }
    

  
    
  });
}
$('.scrolldown').click(function(){
  
    $('.chat-history').scrollTop($(".chat-history").prop("scrollHeight"));
    $(this).hide();
    $(this).css('display','none');
    $('.mensajesnuevos').css('display','none');
    controladormessagescroll=0;
});
var moverscroll=false;
var chatarea;
$('.chat-history').on("scroll", function(){
 
      moverscroll=true;
      var confirmador=false;
        chatarea = document.querySelector(".chat-history");
        $('.popover1').popover('hide');
        //alert(chatarea.scrollHeight+1+" "+parseInt(chatarea.offsetHeight+chatarea.scrollTop));
        if((chatarea.offsetHeight+chatarea.scrollTop==chatarea.scrollHeight+2)||(chatarea.offsetHeight+chatarea.scrollTop>=chatarea.scrollHeight)){
          confirmador=true;
        }else{
          confirmador=false;
        }
        var bajarscroll=document.querySelector(".scrolldown");
        if(!confirmador){
     
          bajarscroll.style.display="block";
        }else{
          bajarscroll.style.display="none";
          $('.mensajesnuevos').css('display','none');
          controladormessagescroll=0;
        }
        
        $('.scrolldown').css('bottom','-'+parseInt($('.chat-history').scrollTop()-10)+'px');
        setTimeout(function(){
          if($('.chat-history').scrollTop()<=20){
          $('.scrolldown').css('bottom','10px');
        }
        },70);
        $('.mensajesnuevos').css('bottom','-'+parseInt($('.chat-history').scrollTop()-35)+'px');
        setTimeout(function(){
          if($('.chat-history').scrollTop()<=35){
          $('.mensajesnuevos').css('bottom','35px');
        }
        },70);
        
    });
var identcolor=true;
var identuserlistcolor=true;
$('#salir-cuenta').click(function(){
  controladorquit=false;
  sessionStorage.username="";
  sessionStorage.roomId="";
  auth.signOut().then(() => {
    console.log("signup out");
});
 /* if (top.location != location) {
top.location.href = document.location.href ="main.html";
 }*/
   // Logout
  document.location.href ="main.html";
 
  
});
$('#salir-sala').click(function(){
  sessionStorage.roomId="";
  /*if (top.location != location) {
top.location.href = document.location.href ="index.html";
  }*/
  document.location.href ="index.html";


});
$('.bi-toggle-on').click(function(){
 numcoloridentify=true;
  if(isMobile()){
if($(window).width()<=650){
if(!identcolor){
 $('.chat').attr('style',`width: 68% !important; float: left;
  background: rgb(52,61,91);
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  color: #fff;`);
  $(this).hide();
  $(this).css('display','none');
  $('.bi-toggle-off').show();
  $('.bi-toggle-off').css('display','block');
  $('#message-to-send,#txtDestinomail,#txtNommail,#txtMessagemail').css('background','#155483');
  $('#contenedorform').css('background','#155483');
  $('#send').css('background','#155483');
  $('#message-to-send,#txtDestinomail,#txtNommail,#txtMessagemail').css('color','#fff');
  $('#contenedorform').css('color','#fff');
  $('#send').css('color','#fff');
  $('#message-to-send,#txtDestinomail,#txtNommail,#txtMessagemail').addClass('cambio_place');
  $('#message-to-send').css('border','none');
  $('.fa-file-image-o,.fa-file-o,.fa-gamepad,.fa-pencil-square-o,.fa-cog,.fa-file-export,.fa-envelope,.fa-share-alt').css('color','rgb(225,225,225)');
  $('.bi-power').css('color','white');
  $('.scrolldown').css('background','#004C99');
  $('.scrolldown').css('color','white');
  
}else{
  $('.chat').attr('style',`width: 88% !important; float: left;
  background: rgb(52,61,91);
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  color: #fff;`);
  $(this).hide();
  $(this).css('display','none');
  $('.bi-toggle-off').show();
  $('.bi-toggle-off').css('display','block');
  $('#message-to-send,#txtDestinomail,#txtNommail,#txtMessagemail').css('background','#155483');
  $('#contenedorform').css('background','#155483');
  $('#send').css('background','#155483');
  $('#message-to-send,#txtDestinomail,#txtNommail,#txtMessagemail').css('color','#fff');
  $('#contenedorform').css('color','#fff');
  $('#send').css('color','#fff');
  $('#message-to-send,#txtDestinomail,#txtNommail,#txtMessagemail').addClass('cambio_place');
  $('#message-to-send').css('border','none');
   $('.fa-file-image-o,.fa-file-o,.fa-gamepad,.fa-pencil-square-o,.fa-cog,.fa-file-export,.fa-envelope,.fa-share-alt').css('color','rgb(225,225,225)');
  $('.bi-power').css('color','white');
  $('.scrolldown').css('background','#004C99');
  $('.scrolldown').css('color','white');
  }
 }else{
  
  $('.chat').css('background','rgb(52,61,91)');
  $('.chat').css('color','#fff');
  $(this).hide();
  $(this).css('display','none');
  $('.bi-toggle-off').show();
  $('.bi-toggle-off').css('display','block');
  $('#message-to-send,#txtDestinomail,#txtNommail,#txtMessagemail').css('background','#155483');
  $('#contenedorform').css('background','#155483');
  $('#send').css('background','#155483');
  $('#message-to-send,#txtDestinomail,#txtNommail,#txtMessagemail').css('color','#fff');
  $('#contenedorform').css('color','#fff');
  $('#send').css('color','#fff');
  $('#message-to-send,#txtDestinomail,#txtNommail,#txtMessagemail').addClass('cambio_place');
  $('#message-to-send').css('border','none');
  $('.fa-file-image-o,.fa-file-o,.fa-gamepad,.fa-pencil-square-o,.fa-cog,.fa-file-export,.fa-envelope,.fa-share-alt').css('color','rgb(225,225,225)');
  $('.bi-power').css('color','#F2F5F8');
 }
 $('.modal-content').css('background','rgb(52, 61, 91)');
 $('.modal-content').css('color','white');
 $('.swal2-popup,.swal2-modal,.swal2-show').css('background','rgb(52, 61, 91)');
 $('.swal2-popup,.swal2-modal,.swal2-show').css('color','white');
 $('#x').css('color','white');
 $('.close').css('color','white');
 $('.scrolldown').css('background','#004C99');
  $('.scrolldown').css('color','white');
 identuserlistcolor=false;
  }else{
if($(window).width()<=650){
if(!identcolor){
 $('.chat').attr('style',`width: 68% !important; float: left;
  background: rgb(52,61,91);
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  color: #fff;`);
  $(this).hide();
  $(this).css('display','none');
  $('.bi-toggle-off').show();
  $('.bi-toggle-off').css('display','block');
  $('#message-to-send,#txtDestinomail,#txtNommail,#txtMessagemail').css('background','#155483');
  $('#contenedorform').css('background','#155483');
  $('#send').css('background','#155483');
  $('#message-to-send,#txtDestinomail,#txtNommail,#txtMessagemail').css('color','#fff');
  $('#contenedorform').css('color','#fff');
  $('#send').css('color','#fff');
  $('#message-to-send,#txtDestinomail,#txtNommail,#txtMessagemail').addClass('cambio_place');
  $('#message-to-send').css('border','none');
  $('.fa-file-image-o,.fa-file-o,.fa-gamepad,.fa-smile-o,.fa-pencil-square-o,.fa-cog,.fa-file-export,.fa-envelope,.fa-share-alt').css('color','rgb(225,225,225)');
  $('.bi-power').css('color','white');
  $('.scrolldown').css('background','#004C99');
  $('.scrolldown').css('color','white');
}else{
  $('.chat').attr('style',`width: 88% !important; float: left;
  background: rgb(52,61,91);
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  color: #fff;`);
  $(this).hide();
  $(this).css('display','none');
  $('.bi-toggle-off').show();
  $('.bi-toggle-off').css('display','block');
  $('#message-to-send,#txtDestinomail,#txtNommail,#txtMessagemail').css('background','#155483');
  $('#contenedorform').css('background','#155483');
  $('#send').css('background','#155483');
  $('#message-to-send,#txtDestinomail,#txtNommail,#txtMessagemail').css('color','#fff');
  $('#contenedorform').css('color','#fff');
  $('#send').css('color','#fff');
  $('#message-to-send,#txtDestinomail,#txtNommail,#txtMessagemail').addClass('cambio_place');
  $('#message-to-send').css('border','none');
   $('.fa-file-image-o,.fa-file-o,.fa-gamepad,.fa-smile-o,.fa-pencil-square-o,.fa-cog,.fa-file-export,.fa-envelope,.fa-share-alt').css('color','rgb(225,225,225)');
  $('.bi-power').css('color','white');
  $('.scrolldown').css('background','#004C99');
  $('.scrolldown').css('color','white');
  }
 }else{
  
  $('.chat').css('background','rgb(52,61,91)');
  $('.chat').css('color','#fff');
  $(this).hide();
  $(this).css('display','none');
  $('.bi-toggle-off').show();
  $('.bi-toggle-off').css('display','block');
  $('#message-to-send,#txtDestinomail,#txtNommail,#txtMessagemail').css('background','#155483');
  $('#contenedorform').css('background','#155483');
  $('#send').css('background','#155483');
  $('#message-to-send,#txtDestinomail,#txtNommail,#txtMessagemail').css('color','#fff');
  $('#contenedorform').css('color','#fff');
  $('#send').css('color','#fff');
  $('#message-to-send,#txtDestinomail,#txtNommail,#txtMessagemail').addClass('cambio_place');
  $('#message-to-send').css('border','none');
  $('.fa-file-image-o,.fa-file-o,.fa-gamepad,.fa-smile-o,.fa-pencil-square-o,.fa-cog,.fa-file-export,.fa-envelope,.fa-share-alt').css('color','rgb(225,225,225)');
  $('.bi-power').css('color','white');
  $('.scrolldown').css('background','#004C99');
  $('.scrolldown').css('color','white');
 }

 $('.modal-content').css('background','rgb(52, 61, 91)');
 $('.modal-content').css('color','white');
 $('.swal2-popup,.swal2-modal,.swal2-show').css('background','rgb(52, 61, 91)');
 $('.swal2-popup,.swal2-modal,.swal2-show').css('color','white');
 $('#x').css('color','white');
 $('.close').css('color','white');
 $('.scrolldown').css('background','#004C99');
  $('.scrolldown').css('color','white');

  var picker=new EmojiButton({
      style: 'twemoji',
      position: 'top-end',
      theme: 'dark',
      autoHide : false,
      emojiVersion : 5.0, //1.0,2.0,3.0,4.0,5.0,11.0,12.0,12.1
      emojiSize : "20px"
  });
  picker.on('emoji',function(emoji){
    var valor=emoji.split('" src')[1];
    input.value+=emoji.replace('<img class="emoji" draggable="false" alt="','').replace(valor,'').replace('" src','');
  });
  emojis1.addEventListener('click',function(){
   
    picker.pickerVisible?picker.hidePicker():picker.showPicker(emojis1);
  });

 identuserlistcolor=false;
  }
 $('.titleajustenoti,.titlecolornoti').css('color','rgb(245,245,245)');
  $('.namesound').css('color','rgb(235,235,235)');
  $('hr').addClass('colorhr');
  $(elementcolorselected).css('border','3.5px solid rgb(250, 250, 250)');
  $('.colorblue,.colorgreen,.colorpurple,.colorceleste,.colornaranja').click(function(){
    $('.colormensaje').css('border','none');
    $(this).css('border','3.5px solid rgb(250, 250, 250)');
    elementcolorselected=this;
  });
  $('.colorblue,.colorgreen,.colorpurple,.colorceleste,.colornaranja').mouseenter(function(){
    $(this).css('border','3.5px solid rgb(250, 250, 250)');
  });
  $('.colorblue,.colorgreen,.colorpurple,.colorceleste,.colornaranja').mouseout(function(){
    if(elementcolorselected!=this){
      $(this).css('border','none');
    }
  });
});
 var btnludo=document.querySelector('#btnenviarludo');
  btnludo.addEventListener('click',function(){
    var url = "https://Ludo--jesusmartinmar1.repl.co";
     window.open(url+"?var1="+sessionStorage.username,"_blank");
  });
  var btntres=document.querySelector('#btnenviartres');
  btntres.addEventListener('click',function(){
    var url = "https://3enraya--jesusmartinmar1.repl.co";
     window.open(url+"?var1="+sessionStorage.username,"_blank");
  });
  var btnppt=document.querySelector('#btnenviarppt');
  btnppt.addEventListener('click',function(){
    //
    var url = "https://rock-paper-scissor-game--jesusmartinmar1.repl.co";
     window.open(url+"?var1="+sessionStorage.username,"_blank");
  });

 
  var resizeTimer;
     
       //Event to handle resizing
       $(window).resize(function () 
       {
   
           clearTimeout(resizeTimer);
           resizeTimer = setTimeout(Resized, 0);
       });

       //Actual Resizing Event
       function Resized() 
       {
         moverscroll=true;
       var confirmador=false;
        var chatarea = document.querySelector(".chat-history");
        //alert(chatarea.offsetHeight+chatarea.scrollTop);
        //alert(chatarea.scrollHeight);
       /* setTimeout(function(){
          if(verificadorpop){
            if(!$('.popover-body')[0]){

              $(`#${generalpop}`).popover('show');
              verificadorpop=false;
              contpopover=contpopover-1;
            }else{
              
            }
              
          
          
        }
        
        },150);*/
      
        if((chatarea.offsetHeight+chatarea.scrollTop+220==chatarea.scrollHeight+2)||(chatarea.offsetHeight+chatarea.scrollTop+220>=chatarea.scrollHeight)){
          confirmador=true;
        }else{
          confirmador=false;
        }
     /*  if($(window).height()<=428){
         $('.chat-history').attr('style',`padding: 7px 7px 7px;
  height: 60% !important;
  border-bottom: 2px solid white;
  overflow-y: scroll;`);
         //$('.chat').scrollTop($(".chat").prop("scrollHeight"));
          /*$('.chat').attr('style', `width: 88% !important; float: left;
          height:408px !important;
          max-height:408px !important;
  background: #F2F5F8;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  color: #434651;`);
  $('.container').attr('style', `width: 100% !important;
      padding: 0;
      margin: 0;
height: 408px !important;
max-height: 408px !important;
min-height:408px !important;`);*/

     /*  }else{
         $('.chat-history').attr('style',`padding: 7px 7px 7px;
  height: 76% !important;
  border-bottom: 2px solid white;
  overflow-y: scroll;`);
     }*/
     $('.chat-history').css('height',$(window).height()-165+'px');
        if(confirmador){
        chatarea.scrollTop=chatarea.scrollHeight;

      }
      
        confirmador=false; 
       };
       var numcoloridentify=false;
$('.bi-toggle-off').click(function(){
 numcoloridentify=false;
  if(isMobile()){
if($(window).width()<=650){
  if(!identcolor){
  $('.chat').attr('style', `width: 68% !important; float: left;
  background: #F2F5F8;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  color: #434651;`);
  $(this).hide();
  $(this).css('display','none');
  $('.bi-toggle-on').show();
  $('.bi-toggle-on').css('display','block');
  $('#message-to-send,#txtDestinomail,#txtNommail,#txtMessagemail').css('background','#fff');
  $('#contenedorform').css('background','#fff');
  $('#send').css('background','#fff');
  $('#message-to-send,#txtDestinomail,#txtNommail,#txtMessagemail').css('color','#000');
  $('#contenedorform').css('color','#000');
  $('#send').css('color','#000');
  $('#message-to-send,#txtDestinomail,#txtNommail,#txtMessagemail').removeClass('cambio_place');
  $('.fa-file-image-o,.fa-file-o,.fa-gamepad,.fa-pencil-square-o,.fa-cog,.fa-file-export,.fa-envelope,.fa-share-alt').css('color','gray');
  $('.bi-power').css('color','black');
  $('.scrolldown').css('background','white');
  $('.scrolldown').css('color','#004C99');
  }else{
$('.chat').attr('style', `width: 88% !important; float: left;
  background: #F2F5F8;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  color: #434651;`);
  $(this).hide();
  $(this).css('display','none');
  $('.bi-toggle-on').show();
  $('.bi-toggle-on').css('display','block');
  $('#message-to-send,#txtDestinomail,#txtNommail,#txtMessagemail').css('background','#fff');
  $('#contenedorform').css('background','#fff');
  $('#send').css('background','#fff');
  $('#message-to-send,#txtDestinomail,#txtNommail,#txtMessagemail').css('color','#000');
  $('#contenedorform').css('color','#000');
  $('#send').css('color','#000');
  $('#message-to-send,#txtDestinomail,#txtNommail,#txtMessagemail').removeClass('cambio_place');
  $('.fa-file-image-o,.fa-file-o,.fa-gamepad,.fa-pencil-square-o,.fa-cog,.fa-file-export,.fa-envelope,.fa-share-alt').css('color','gray');
  $('.bi-power').css('color','black');
  $('.scrolldown').css('background','white');
  $('.scrolldown').css('color','#004C99');
  }
  }else{    
  $('.chat').css('background','#F2F5F8');
  $('.chat').css('color','#434651');
  $(this).hide();
  $(this).css('display','none');
  $('.bi-toggle-on').show();
  $('.bi-toggle-on').css('display','block');
  $('#message-to-send,#txtDestinomail,#txtNommail,#txtMessagemail').css('background','#fff');
  $('#contenedorform').css('background','#fff');
  $('#send').css('background','#fff');
  $('#message-to-send,#txtDestinomail,#txtNommail,#txtMessagemail').css('color','#000');
  $('#contenedorform').css('color','#000');
  $('#send').css('color','#000');
  $('#message-to-send,#txtDestinomail,#txtNommail,#txtMessagemail').removeClass('cambio_place');
    $('.fa-file-image-o,.fa-file-o,.fa-gamepad,.fa-pencil-square-o,.fa-cog,.fa-file-export,.fa-envelope,.fa-share-alt').css('color','gray');
  $('.bi-power').css('color','black');
  $('.scrolldown').css('background','white');
  $('.scrolldown').css('color','#004C99');
  }
  $('.modal-content').css('background','white');
 $('.modal-content').css('color','black');
 $('.swal2-popup,.swal2-modal,.swal2-show').css('background','white');
 $('.swal2-popup,.swal2-modal,.swal2-show').css('color','black');
 $('#x').css('color','black');
  $('.close').css('color','black');
  $('.scrolldown').css('background','white');
  $('.scrolldown').css('color','#004C99');

  identuserlistcolor=true;
  }else{
if($(window).width()<=650){
  if(!identcolor){
  $('.chat').attr('style', `width: 68% !important; float: left;
  background: #F2F5F8;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  color: #434651;`);
  $(this).hide();
  $(this).css('display','none');
  $('.bi-toggle-on').show();
  $('.bi-toggle-on').css('display','block');
  $('#message-to-send,#txtDestinomail,#txtNommail,#txtMessagemail').css('background','#fff');
  $('#contenedorform').css('background','#fff');
  $('#send').css('background','#fff');
  $('#message-to-send,#txtDestinomail,#txtNommail,#txtMessagemail').css('color','#000');
  $('#contenedorform').css('color','#000');
  $('#send').css('color','#000');
  $('#message-to-send,#txtDestinomail,#txtNommail,#txtMessagemail').removeClass('cambio_place');
  $('.fa-file-image-o,.fa-file-o,.fa-gamepad,.fa-smile-o,.fa-pencil-square-o,.fa-cog,.fa-file-export,.fa-envelope,.fa-share-alt').css('color','gray');
  $('.bi-power').css('color','black');
  $('.scrolldown').css('background','white');
  $('.scrolldown').css('color','#004C99');
  }else{
$('.chat').attr('style', `width: 88% !important; float: left;
  background: #F2F5F8;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  color: #434651;`);
  $(this).hide();
  $(this).css('display','none');
  $('.bi-toggle-on').show();
  $('.bi-toggle-on').css('display','block');
  $('#message-to-send,#txtDestinomail,#txtNommail,#txtMessagemail').css('background','#fff');
  $('#contenedorform').css('background','#fff');
  $('#send').css('background','#fff');
  $('#message-to-send,#txtDestinomail,#txtNommail,#txtMessagemail').css('color','#000');
  $('#contenedorform').css('color','#000');
  $('#send').css('color','#000');
  $('#message-to-send,#txtDestinomail,#txtNommail,#txtMessagemail').removeClass('cambio_place');
  $('.fa-file-image-o,.fa-file-o,.fa-gamepad,.fa-smile-o,.fa-pencil-square-o,.fa-cog,.fa-file-export,.fa-envelope,.fa-share-alt').css('color','gray');
  $('.bi-power').css('color','black');
  $('.scrolldown').css('background','white');
  $('.scrolldown').css('color','#004C99');
  }
  }else{    
  $('.chat').css('background','#F2F5F8');
  $('.chat').css('color','#434651');
  $(this).hide();
  $(this).css('display','none');
  $('.bi-toggle-on').show();
  $('.bi-toggle-on').css('display','block');
  $('#message-to-send,#txtDestinomail,#txtNommail,#txtMessagemail').css('background','#fff');
  $('#contenedorform').css('background','#fff');
  $('#send').css('background','#fff');
  $('#message-to-send,#txtDestinomail,#txtNommail,#txtMessagemail').css('color','#000');
  $('#contenedorform').css('color','#000');
  $('#send').css('color','#000');
  $('#message-to-send,#txtDestinomail,#txtNommail,#txtMessagemail').removeClass('cambio_place');
    $('.fa-file-image-o,.fa-file-o,.fa-gamepad,.fa-smile-o,.fa-pencil-square-o,.fa-cog,.fa-file-export,.fa-envelope,.fa-share-alt').css('color','gray');
  $('.bi-power').css('color','black');
  $('.scrolldown').css('background','white');
  $('.scrolldown').css('color','#004C99');
  }
  
  $('.modal-content').css('background','white');
 $('.modal-content').css('color','black');
  $('.swal2-popup,.swal2-modal,.swal2-show').css('background','white');
 $('.swal2-popup,.swal2-modal,.swal2-show').css('color','black');
 $('#x').css('color','black');
  $('.close').css('color','black');
  $('.scrolldown').css('background','white');
  $('.scrolldown').css('color','#004C99');
  var picker=new EmojiButton({
      style: 'twemoji',
      position: 'top-end',
      theme: 'light',
      autoHide : false,
      emojiVersion : 5.0, //1.0,2.0,3.0,4.0,5.0,11.0,12.0,12.1
      emojiSize : "20px"
  });
  picker.on('emoji',function(emoji){
    var valor=emoji.split('" src')[1];
    input.value+=emoji.replace('<img class="emoji" draggable="false" alt="','').replace(valor,'').replace('" src','');
  });
  emojis1.addEventListener('click',function(){
   
    picker.pickerVisible?picker.hidePicker():picker.showPicker(emojis1);
  });
  identuserlistcolor=true;
  }
  $('.titleajustenoti,.titlecolornoti').css('color','rgb(50,50,50)');
  $('.namesound').css('color','rgb(70,70,70)');
  $('hr').removeClass('colorhr');
  $(elementcolorselected).css('border','3.5px solid rgb(10, 10, 10)');
  $('.colorblue,.colorgreen,.colorpurple,.colorceleste,.colornaranja').click(function(){
    $('.colormensaje').css('border','none');
    $(this).css('border','3.5px solid rgb(10, 10, 10)');
    elementcolorselected=this;
  });
  $('.colorblue,.colorgreen,.colorpurple,.colorceleste,.colornaranja').mouseenter(function(){
    $(this).css('border','3.5px solid rgb(10, 10, 10)');
  });
  $('.colorblue,.colorgreen,.colorpurple,.colorceleste,.colornaranja').mouseout(function(){
    if(elementcolorselected!=this){
      $(this).css('border','none');
    }
  });
});
$('#enviarConfiguracion').click(function(){
  //openSwal();
   if($('#defaultCheck1').prop('checked')){
  sessionStorage.sonido="sound";
  numsonid=1;
  }else{
    sessionStorage.sonido="nosound";
  numsonid=0;
  }
  if($('#defaultCheck2').prop('checked')){
  sessionStorage.userconnect="connect";
  }else{
    sessionStorage.userconnect="noconnect";
  }
  if($('#defaultCheck3').prop('checked')){
  sessionStorage.userdisconnect="disconnect";
  }else{
    sessionStorage.userdisconnect="nodisconnect";
  }
 (async() => {
   sessionStorage.swalName="Se han guardado los cambios ";
   if(!numcoloridentify){
     $('.swal-contenedor').load('swal-light.html');
     //swal("Success!", "Se han guardado los cambios ", "success");
   }else{
    
   /*$('.swal2-modal,.swal2-success-circular-line-left,.swal2-success-circular-line-right,.swal2-success-fix').css('background','rgb(52,61,91) !important');
 $('.swal2-content').css('color','white !important');
 $('.swal2-title').css('color','white !important');*/
 $('.swal-contenedor').load('swal-dark.html');

   }
   
   
 })();

 
});
var numsonid=1;
function openSwal(){
(async () => {
 /*$('.swal2-popup,.swal2-modal,.swal2-show,.swal2-title,.swal2-content,.swal2-checkbox').attr('style','background: rgb(52, 61, 91) !important;');
 $('.swal2-popup,.swal2-modal,.swal2-show,.swal2-title,.swal2-content,.swal2-checkbox').attr('style','color: white !important;');*/
 
const { value: accept } = await Swal.fire({
  title: 'Settings',
  input: 'checkbox',
  inputValue: numsonid,
  inputPlaceholder:
    'Notification sound',
  confirmButtonText:
    'Guardar cambios',
  inputValidator: (result) => {
    sessionStorage.sonido="nosound";
    numsonid=0;
    return !result && swal("Success!", "Se han guardado los cambios ", "success");
    //return !result && 'You need to agree with T&C'
  }
})

if (accept) {
  numsonid=1;
  sessionStorage.sonido="sound";
 swal("Success!", "Se han guardado los cambios ", "success");
}

})()

 /* swal({
      title: "Setting",
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      confirmButtonText: "Guardar cambios ",
      inputValidator: function(value) { // validates your input
        return new Promise(function(resolve, reject) {
          if (value != '' && value != null) {
            // document.getElementById('closeComment').value = value; // assign this to other elements in your form
            swal("Success!", "You comment: " + value, "success");
            // call other functions or do an AJAX call or sumbit your form
          }
          else {
            reject('Please enter a valid text');
          }
        });
      }
    })*/
  }
 var identif=0;
   var identif2=0;
   var identif3=0;
   var intervalo;
   var loader=document.querySelector('#preloader');
   
  document.getElementById("imagefile").onchange = function(e) {
let reader = new FileReader();

  // Leemos el archivo subido y se lo pasamos a nuestro fileReader
  reader.readAsDataURL(e.target.files[0]);

  // Le decimos que cuando este listo ejecute el código interno
  reader.onload = function(){
    let image = document.createElement('img');
    identif=0;
    identif2=0;
    identif3=0;
    image.src = reader.result;
    if ((/\.(jpeg|jpg|png|gif)$/i).test(e.target.files[0].name)) {
      
      loader.style.display="block";
      //alert(mensajeloader.innerHTML);
      var dateTime=moment().format('hh:mm a').toUpperCase();
      socket.emit('sendMessage',{   
            sessionId: sessionStorage.roomId,      
            username: sessionStorage.username,
            message: '',
            date: dateTime,
            imagen: image.src
        });
      clearInterval(intervalo); //Al escribir, limpio el intervalo
      intervalo = setInterval(function(){ //Y vuelve a iniciar
          //alert ("Has dejado de escribir"); //Cumplido el tiempo, se muestra el mensaj
      
          if(identif2<1){
            alert("No se pudo cargar la imagen");
            
      loader.style.display="none";
          }
          clearInterval(intervalo); //Limpio el intervalo
      }, 10000);
    }
  }
  }
  document.getElementById("file").onchange = function(e) {
let reader = new FileReader();

  // Leemos el archivo subido y se lo pasamos a nuestro fileReader
  reader.readAsDataURL(e.target.files[0]);

  // Le decimos que cuando este listo ejecute el código interno
  reader.onload = function(){
    let image = document.createElement('img');
    identif=0;
    identif2=0;
    identif3=0;
    image.src = reader.result;
    loader.style.display="block";
    var dateTime=moment().format('hh:mm a').toUpperCase();
      socket.emit('sendMessage',{   
            sessionId: sessionStorage.roomId,      
            username: sessionStorage.username,
            message: `<div><a id="archivo" href="${image.src}"><img src="images/archivo2.png" width="20px" height="20px"></a>&nbsp;<a id="namearchivo" href="${image.src}">${e.target.files[0].name}</a></div>`,
            date:dateTime
        });
  }
  }
  
  /*document.getElementById("imagefile").onchange = function(e) {
  // Creamos el objeto de la clase FileReader

  let reader = new FileReader();

  // Leemos el archivo subido y se lo pasamos a nuestro fileReader
  reader.readAsDataURL(e.target.files[0]);

  // Le decimos que cuando este listo ejecute el código interno
  reader.onload = function(){
    let image = document.createElement('img');
    identif=0;
    identif2=0;
    identif3=0;
    image.src = reader.result;
    if ((/\.(jpeg|jpg|png|gif)$/i).test(e.target.files[0].name)) {
      
      loader.style.display="block";
      //alert(mensajeloader.innerHTML);
      
      socket.emit('newMessage',{         
            username: sessionStorage.username,
            genero: sessionStorage.genero,
            message: '',
            imagen: image.src
        });
      clearInterval(intervalo); //Al escribir, limpio el intervalo
      intervalo = setInterval(function(){ //Y vuelve a iniciar
          //alert ("Has dejado de escribir"); //Cumplido el tiempo, se muestra el mensaj
          
          if(identif2<1){
            alert("No se pudo cargar la imagen");
            var loader=document.querySelector('.contentloader');
      var mensajeloader=document.querySelector('.mensajeloader');
      loader.style.display="none";
          }
          clearInterval(intervalo); //Limpio el intervalo
      }, 10000);
    }else if((/\.(mp3|mp4|mp5|ogg)$/i).test(e.target.files[0].name)){
  
      loader.style.display="block";
      //alert(mensajeloader.innerHTML);
      
      socket.emit('newMessage',{         
            username: sessionStorage.username,
            genero: sessionStorage.genero,
            message: '',
            audio: image.src
        });
     clearInterval(intervalo); //Al escribir, limpio el intervalo
      intervalo = setInterval(function(){ //Y vuelve a iniciar
          //alert ("Has dejado de escribir"); //Cumplido el tiempo, se muestra el mensaj
          
          if(identif<1){
            alert("No se pudo cargar el video");
            var loader=document.querySelector('.contentloader');
      var mensajeloader=document.querySelector('.mensajeloader');
      loader.style.display="none";
          }
          clearInterval(intervalo); //Limpio el intervalo
      }, 50000);
    }
    else if((/\.(docx|dotx)$/i).test(e.target.files[0].name)){
      loader.style.display="block";
      socket.emit('newMessage',{         
            username: sessionStorage.username,
            genero: sessionStorage.genero,
            message: '',
            archivo: image.src,
            nomarchivo: e.target.files[0].name
        });
    }
    else if((/\.(xlsx|xls|xltx)$/i).test(e.target.files[0].name)){
      loader.style.display="block";
      socket.emit('newMessage',{         
            username: sessionStorage.username,
            genero: sessionStorage.genero,
            message: '',
            archivo_2: image.src,
            nomarchivo_2: e.target.files[0].name
        });
    }
    else if((/\.(pptx|potx|ppsx)$/i).test(e.target.files[0].name)){
      loader.style.display="block";
      socket.emit('newMessage',{         
            username: sessionStorage.username,
            genero: sessionStorage.genero,
            message: '',
            archivo_3: image.src,
            nomarchivo_3: e.target.files[0].name
        });
    }
    else if((/\.(txt)$/i).test(e.target.files[0].name)){
      loader.style.display="block";
      socket.emit('newMessage',{         
            username: sessionStorage.username,
            genero: sessionStorage.genero,
            message: '',
            archivo_4: image.src,
            nomarchivo_4: e.target.files[0].name
        });
    }
    else if((/\.(pdf)$/i).test(e.target.files[0].name)){
      loader.style.display="block";
      socket.emit('newMessage',{         
            username: sessionStorage.username,
            genero: sessionStorage.genero,
            message: '',
            archivo_5: image.src,
            nomarchivo_5: e.target.files[0].name
        });
    }
    else{
      loader.style.display="block";
      socket.emit('newMessage',{         
            username: sessionStorage.username,
            genero: sessionStorage.genero,
            message: '',
            archivo_6: image.src,
            nomarchivo_6: e.target.files[0].name
        });
        //alert('El archivo no se pudo adjuntar');
        clearInterval(intervalo); //Al escribir, limpio el intervalo
      intervalo = setInterval(function(){ //Y vuelve a iniciar
          //alert ("Has dejado de escribir"); //Cumplido el tiempo, se muestra el mensaj
          
          if(identif3<1){
            alert("No se pudo cargar el video");
            var loader=document.querySelector('.contentloader');
      var mensajeloader=document.querySelector('.mensajeloader');
      loader.style.display="none";
          }
          clearInterval(intervalo); //Limpio el intervalo
      }, 50000);
        }
        
    //socket.emit('user_image',image.src);

  };

  }*/
  var identreap=false;

function listarMessages(socket){
  socket.emit('updateMessages');
}

function updateMessages(socket){
  socket.on('updateMessages',function(messages,nummessage,sessions){

   var html="";
   var numbermessages=0;
 for(var i = 0; i < messages.length; i++){
   if(messages[i].sessionId==sessionStorage.roomId){
     numbermessages++;
   if(messages[i].message=='<strong><i class="fas fa-ban"></i>&nbsp;<em id="deletemess">Se ha eliminado este mensaje</em></strong>'){
 if(messages[i].dibujo!=""&&messages[i].dibujo!=undefined&&messages[i].dibujo!=null){
          if(messages[i].username==sessionStorage.username){
            var nomuser=messages[i].username;
             var nomuser2=nomuser.toUpperCase();
            //alert($.contains($(`.message-data-name:last`).html(),nomuser2));
            //alert($(`.message-data-name:last`).html()+" "+nomuser2);
      if(html==""){
        html+=`<li class="clearfix">
            <div class="message-data align-right">
              
              <span class="message-data-name" >${nomuser2}</span> <i class="fa fa-circle me"></i>
            </div>
            <div class="contenido-message">
            <svg id="my-subnube" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13">
                <path opacity=".13" d="M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z"></path>
                <path fill="currentColor" d="M5.188 0H0v11.193l6.467-8.625C7.526 1.156 6.958 0 5.188 0z"></path>
              </svg>
            <div class="message other-message float-right">
              <a id="mensaje${messages[i].id}"><img src="${messages[i].dibujo}" id="paintdibujo" width="290px" height="290px"></a>
              <span class="message-data-time float-right space-time" >${messages[i].date}</span>
            </div>
          
            </div>
          </li>`;
          
      }else{
            if(messages[i].username==messages[i-1].username){
    
html+=`<li class="clearfix">
           <div class="contenido-message">
           
            <div class="message other-message float-right">
              <a id="mensaje${messages[i].id}"><img src="${messages[i].dibujo}" id="paintdibujo" width="290px" height="290px"></a>
              <span class="message-data-time float-right space-time" >${messages[i].date}</span>
            </div>
          
            </div>
          </li>`;
            }else{
               
html+=`<li class="clearfix">
            <div class="message-data align-right">       
              <span class="message-data-name" >${nomuser2}</span> <i class="fa fa-circle me"></i>
            </div>
            <div class="contenido-message"> 
            <svg id="my-subnube" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13">
                <path opacity=".13" d="M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z"></path>
                <path fill="currentColor" d="M5.188 0H0v11.193l6.467-8.625C7.526 1.156 6.958 0 5.188 0z"></path>
              </svg>
            <div class="message other-message float-right">
              <a id="mensaje${messages[i].id}"><img src="${messages[i].dibujo}" id="paintdibujo" width="290px" height="290px"></a>
              <span class="message-data-time float-right space-time" >${messages[i].date}</span>
            </div>
           
            
            </div>
          </li>`;
            }
      }
      
          userident=true;
    }else{
      if(sessionStorage.sonido=="nosound"){
numsonid=0;
      }else{
        numsonid=1;
      
      }
      var nomuser=messages[i].username;
             var nomuser2=nomuser.toUpperCase();
      if(html==""){
        html+=`<li class="clearfix">
            <div class="message-data align-left">
              <span class="message-data-name"><i class="fa fa-circle other"></i>${nomuser2}</span>
              
            </div>
            <svg id="other-subnube" xmls="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13">
              <path opacity=".13" fill="#0000000" d="M1.533 3.568L8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"></path>
              <path fill="currentColor" d="M1.533 2.568L8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"></path>
            </svg>
            <div class="message my-message float-left">
              <a id="mensaje${messages[i].id}"><img src="${messages[i].dibujo}" id="paintdibujo" width="290px" height="290px"></a>
              <span class="message-data-time float-right space-time">${messages[i].date}</span>
            </div>
            
          </li>`;
          
      }else{
            if(messages[i].username==messages[i-1].username){
    
html+=`<li class="clearfix">
       
            <div class="message my-message float-left">
              <a id="mensaje${messages[i].id}"><img src="${messages[i].dibujo}" id="paintdibujo" width="290px" height="290px"></a>
              <span class="message-data-time float-right space-time">${messages[i].date}</span>
            </div>
            
          </li>`;
            }else{
               

      html+=`<li class="clearfix">
            <div class="message-data align-left">
              <span class="message-data-name"><i class="fa fa-circle other"></i>${nomuser2}</span>
              
            </div>
            <svg id="other-subnube" xmls="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13">
              <path opacity=".13" fill="#0000000" d="M1.533 3.568L8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"></path>
              <path fill="currentColor" d="M1.533 2.568L8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"></path>
            </svg>
            <div class="message my-message float-left">
              <a id="mensaje${messages[i].id}"><img src="${messages[i].dibujo}" id="paintdibujo" width="290px" height="290px"></a>
              <span class="message-data-time float-right space-time">${messages[i].date}</span>
            </div>
            
          </li>`;
            }
      }
      
          userident=false;
    }
        }else if(messages[i].imagen!=null&&messages[i].imagen!=undefined&&messages[i].imagen!=""){
if(messages[i].username==sessionStorage.username){
      var nomuser=messages[i].username;
             var nomuser2=nomuser.toUpperCase();
             if(html==""){
       html+=`<li class="clearfix">
            <div class="message-data align-right">
              
              <span class="message-data-name" >${nomuser2}</span> <i class="fa fa-circle me"></i>
              
            </div>
            <div class="contenido-message">
            <svg id="my-subnube" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13">
                <path opacity=".13" d="M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z"></path>
                <path fill="currentColor" d="M5.188 0H0v11.193l6.467-8.625C7.526 1.156 6.958 0 5.188 0z"></path>
              </svg>
            <div class="message other-message float-right">
              <a id="mensaje${messages[i].id}"><img src="${messages[i].imagen}" id="imagen1" width="290px" height="290px"></a>
              <span class="message-data-time float-right space-time" >${messages[i].date}</span>
            </div>
           
            </div>
          </li>`;
          
      }else{
            if(messages[i].username==messages[i-1].username){
    
html+=`<li class="clearfix">
            <div class="contenido-message">
            
         
            <div class="message other-message float-right">
              <a id="mensaje${messages[i].id}"><img src="${messages[i].imagen}" id="imagen1" width="290px" height="290px"></a>
              <span class="message-data-time float-right space-time" >${messages[i].date}</span>
            </div>
           
            </div>
          </li>`;
            }else{
               

      html+=`<li class="clearfix">
            <div class="message-data align-right">
              
              <span class="message-data-name" >${nomuser2}</span> <i class="fa fa-circle me"></i>
              
            </div>
            <div class="contenido-message">
            <svg id="my-subnube" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13">
                <path opacity=".13" d="M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z"></path>
                <path fill="currentColor" d="M5.188 0H0v11.193l6.467-8.625C7.526 1.156 6.958 0 5.188 0z"></path>
              </svg>
            <div class="message other-message float-right">
              <a id="mensaje${messages[i].id}"><img src="${messages[i].imagen}" id="imagen1" width="290px" height="290px"></a>
              <span class="message-data-time float-right space-time" >${messages[i].date}</span>
            </div>
          
            </div>
          </li>`;
            }
      }

          userident=true;
    }else{
      if(sessionStorage.sonido=="nosound"){
numsonid=0;
      }else{
        numsonid=1;
     
      }
      
      var nomuser=messages[i].username;
             var nomuser2=nomuser.toUpperCase();
             if(html==""){
       html+=`<li class="clearfix">
            <div class="message-data align-left">
              <span class="message-data-name"><i class="fa fa-circle other"></i>${nomuser2}</span>
              
            </div>
            <svg id="other-subnube" xmls="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13">
              <path opacity=".13" fill="#0000000" d="M1.533 3.568L8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"></path>
              <path fill="currentColor" d="M1.533 2.568L8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"></path>
            </svg>
            <div class="message my-message float-left">
              <a id="mensaje${messages[i].id}"><img src="${messages[i].imagen}" id="imagen1" width="290px" height="290px"></a>
              <span class="message-data-time float-right space-time">${messages[i].date}</span>
            </div>
            
          </li>`;
          
      }else{
            if(messages[i].username==messages[i-1].username){
    
html+=`<li class="clearfix">
          
            <div class="message my-message float-left">
              <a id="mensaje${messages[i].id}"><img src="${messages[i].imagen}" id="imagen1" width="290px" height="290px"></a>
              <span class="message-data-time float-right space-time">${messages[i].date}</span>
            </div>
            
          </li>`;
            }else{
               

      html+=`<li class="clearfix">
            <div class="message-data align-left">
              <span class="message-data-name"><i class="fa fa-circle other"></i>${nomuser2}</span>
              
            </div>
            <svg id="other-subnube" xmls="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13">
              <path opacity=".13" fill="#0000000" d="M1.533 3.568L8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"></path>
              <path fill="currentColor" d="M1.533 2.568L8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"></path>
            </svg>
            <div class="message my-message float-left">
              <a id="mensaje${messages[i].id}"><img src="${messages[i].imagen}" id="imagen1" width="290px" height="290px"></a>
              <span class="message-data-time float-right space-time">${messages[i].date}</span>
            </div>
            
          </li>`;
            }
      }
      
          userident=false;
    }
      identif2=1;
      var loader=document.querySelector('#preloader');
      loader.style.display="none";
        }
        else{

    if(messages[i].username==sessionStorage.username){
      var nomuser=messages[i].username;
             var nomuser2=nomuser.toUpperCase();
             if(html==""){
      html+=`<li class="clearfix">
            <div class="message-data align-right">
              
              <span class="message-data-name" >${nomuser2}</span> <i class="fa fa-circle me"></i>
              
            </div>
            <div class="contenido-message">
            <svg id="my-subnube" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13">
                <path opacity=".13" d="M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z"></path>
                <path fill="currentColor" d="M5.188 0H0v11.193l6.467-8.625C7.526 1.156 6.958 0 5.188 0z"></path>
              </svg>
            <div class="message other-message float-right">
              <a id="mensaje${messages[i].id}">${messages[i].message}</a>
              <span class="message-data-time float-right space-time">${messages[i].date}</span> 
            </div>
        
           
           </div>
          </li>`;
          
      }else{
            if(messages[i].username==messages[i-1].username){
    
html+=`<li class="clearfix">
            <div class="contenido-message">
            
            <div class="message other-message float-right">
              <a id="mensaje${messages[i].id}">${messages[i].message}</a>
              <span class="message-data-time float-right space-time">${messages[i].date}</span> 
            </div>
            
            </div>
          </li>`;
            }else{
               

      html+=`<li class="clearfix">
            <div class="message-data align-right">
              
              <span class="message-data-name" >${nomuser2}</span> <i class="fa fa-circle me"></i>
              
            </div>
            <div class="contenido-message">
            <svg id="my-subnube" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13">
                <path opacity=".13" d="M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z"></path>
                <path fill="currentColor" d="M5.188 0H0v11.193l6.467-8.625C7.526 1.156 6.958 0 5.188 0z"></path>
              </svg>
            <div class="message other-message float-right">
              <a id="mensaje${messages[i].id}">${messages[i].message}</a>
              <span class="message-data-time float-right space-time" >${messages[i].date}</span> 
            </div>
         
          </li>`;
            }
      }

          userident=true;
    }else{
      if(sessionStorage.sonido=="nosound"){

      }else{
       
      }
      var nomuser=messages[i].username;
             var nomuser2=nomuser.toUpperCase();
             //alert($(`.message-data-name:last`).html()+" "+nomuser2);
             if(html==""){
      html+=`<li class="clearfix">
            <div class="message-data align-left">
              <span class="message-data-name"><i class="fa fa-circle other"></i>${nomuser2}</span>
              
            </div>
            <svg id="other-subnube" xmls="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13">
              <path opacity=".13" fill="#0000000" d="M1.533 3.568L8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"></path>
              <path fill="currentColor" d="M1.533 2.568L8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"></path>
            </svg>
            <div class="message my-message float-left">
              <a id="mensaje${messages[i].id}">${messages[i].message}</a>
              <span class="message-data-time float-right space-time">${messages[i].date}</span>
            </div>
            
          </li>`;
          
      }else{
            if(messages[i].username==messages[i-1].username){
    
html+=`<li class="clearfix">
            
            <div class="message my-message float-left">
              <a id="mensaje${messages[i].id}">${messages[i].message}</a>
              <span class="message-data-time float-right space-time">${messages[i].date}</span>
            </div>
            
          </li>`;
            }else{
               

      html+=`<li class="clearfix">
            <div class="message-data align-left">
              <span class="message-data-name"><i class="fa fa-circle other"></i>${nomuser2}</span>
              
            </div>
            <svg id="other-subnube" xmls="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13">
              <path opacity=".13" fill="#0000000" d="M1.533 3.568L8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"></path>
              <path fill="currentColor" d="M1.533 2.568L8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"></path>
            </svg>
            <div class="message my-message float-left">
              <a id="mensaje${messages[i].id}">${messages[i].message}</a>
              <span class="message-data-time float-right space-time">${messages[i].date}</span>
            </div>
            
          </li>`;
            }
      }
      
          userident=false;
    }
  }
       
   }else{
       if(messages[i].dibujo!=""&&messages[i].dibujo!=undefined&&messages[i].dibujo!=null){
          if(messages[i].username==sessionStorage.username){
            var nomuser=messages[i].username;
             var nomuser2=nomuser.toUpperCase();
            //alert($.contains($(`.message-data-name:last`).html(),nomuser2));
            //alert($(`.message-data-name:last`).html()+" "+nomuser2);
      if(html==""){
        html+=`<li class="clearfix">
            <div class="message-data align-right">
              
              <span class="message-data-name" >${nomuser2}</span> <i class="fa fa-circle me"></i>
            </div>
            <div class="contenido-message">
            <svg id="my-subnube" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13">
                <path opacity=".13" d="M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z"></path>
                <path fill="currentColor" d="M5.188 0H0v11.193l6.467-8.625C7.526 1.156 6.958 0 5.188 0z"></path>
              </svg>
            <div class="message other-message float-right">
              <a id="mensaje${messages[i].id}"><img src="${messages[i].dibujo}" id="paintdibujo" width="290px" height="290px"></a>
              <span class="message-data-time float-right space-time" >${messages[i].date}</span>
            </div>
            <div class="align-delete ${messages[i].id}">
            <button type="button" class="popover1" id="${messages[i].id}" data-container="body" data-toggle="popover" data-placement="top" data-trigger="focus" data-content="Eliminar">   <i class="fas fa-ellipsis-h"></i> </button>
            </div>
            </div>
          </li>`;
          
      }else{
            if(messages[i].username==messages[i-1].username){
    
html+=`<li class="clearfix">
           <div class="contenido-message">
            <div class="message other-message float-right">
              <a id="mensaje${messages[i].id}"><img src="${messages[i].dibujo}" id="paintdibujo" width="290px" height="290px"></a>
              <span class="message-data-time float-right space-time" >${messages[i].date}</span>
            </div>
            <div class="align-delete ${messages[i].id}">
            <button type="button" class="popover1" id="${messages[i].id}" data-container="body" data-toggle="popover" data-placement="top" data-trigger="focus" data-content="Eliminar">   <i class="fas fa-ellipsis-h"></i> </button>
            </div>
            </div>
          </li>`;
            }else{
               
html+=`<li class="clearfix">
            <div class="message-data align-right">       
              <span class="message-data-name" >${nomuser2}</span> <i class="fa fa-circle me"></i>
            </div>
            <div class="contenido-message"> 
            <svg id="my-subnube" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13">
                <path opacity=".13" d="M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z"></path>
                <path fill="currentColor" d="M5.188 0H0v11.193l6.467-8.625C7.526 1.156 6.958 0 5.188 0z"></path>
              </svg>
            <div class="message other-message float-right">
              <a id="mensaje${messages[i].id}"><img src="${messages[i].dibujo}" id="paintdibujo" width="290px" height="290px"></a>
              <span class="message-data-time float-right space-time" >${messages[i].date}</span>
            </div>
            <div class="align-delete ${messages[i].id}">
            <button type="button" class="popover1" id="${messages[i].id}" data-container="body" data-toggle="popover" data-placement="top" data-trigger="focus" data-content="Eliminar">   <i class="fas fa-ellipsis-h"></i> </button>
            </div>
            
            </div>
          </li>`;
            }
      }
      
          userident=true;
    }else{
      if(sessionStorage.sonido=="nosound"){
numsonid=0;
      }else{
        numsonid=1;
    
      }
      var nomuser=messages[i].username;
             var nomuser2=nomuser.toUpperCase();
      if(html==""){
        html+=`<li class="clearfix">
            <div class="message-data align-left">
              <span class="message-data-name"><i class="fa fa-circle other"></i>${nomuser2}</span>
              
            </div>
            <svg id="other-subnube" xmls="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13">
              <path opacity=".13" fill="#0000000" d="M1.533 3.568L8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"></path>
              <path fill="currentColor" d="M1.533 2.568L8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"></path>
            </svg>
            <div class="message my-message float-left">
              <a id="mensaje${messages[i].id}"><img src="${messages[i].dibujo}" id="paintdibujo" width="290px" height="290px"></a>
              <span class="message-data-time float-right space-time">${messages[i].date}</span>
            </div>
            
          </li>`;
          
      }else{
            if(messages[i].username==messages[i-1].username){
    
html+=`<li class="clearfix">
       
            <div class="message my-message float-left">
              <a id="mensaje${messages[i].id}"><img src="${messages[i].dibujo}" id="paintdibujo" width="290px" height="290px"></a>
              <span class="message-data-time float-right space-time">${messages[i].date}</span>
            </div>
            
          </li>`;
            }else{
               

      html+=`<li class="clearfix">
            <div class="message-data align-left">
              <span class="message-data-name"><i class="fa fa-circle other"></i>${nomuser2}</span>
              
            </div>
            <svg id="other-subnube" xmls="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13">
              <path opacity=".13" fill="#0000000" d="M1.533 3.568L8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"></path>
              <path fill="currentColor" d="M1.533 2.568L8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"></path>
            </svg>
            <div class="message my-message float-left">
              <a id="mensaje${messages[i].id}"><img src="${messages[i].dibujo}" id="paintdibujo" width="290px" height="290px"></a>
              <span class="message-data-time float-right space-time">${messages[i].date}</span>
            </div>
            
          </li>`;
            }
      }
      
          userident=false;
    }
        }else if(messages[i].imagen!=null&&messages[i].imagen!=undefined&&messages[i].imagen!=""){
if(messages[i].username==sessionStorage.username){
      var nomuser=messages[i].username;
             var nomuser2=nomuser.toUpperCase();
             if(html==""){
       html+=`<li class="clearfix">
            <div class="message-data align-right">
              
              <span class="message-data-name" >${nomuser2}</span> <i class="fa fa-circle me"></i>
              
            </div>
            <div class="contenido-message">
            <svg id="my-subnube" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13">
                <path opacity=".13" d="M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z"></path>
                <path fill="currentColor" d="M5.188 0H0v11.193l6.467-8.625C7.526 1.156 6.958 0 5.188 0z"></path>
              </svg>
            <div class="message other-message float-right">
              <a id="mensaje${messages[i].id}"><img src="${messages[i].imagen}" id="imagen1" width="290px" height="290px"></a>
              <span class="message-data-time float-right space-time" >${messages[i].date}</span>
            </div>
            <div class="align-delete ${messages[i].id}">
            <button type="button" class="popover1" id="${messages[i].id}" data-container="body" data-toggle="popover" data-placement="top" data-trigger="focus" data-content="Eliminar">   <i class="fas fa-ellipsis-h"></i> </button>
            </div>
            </div>
          </li>`;
          
      }else{
            if(messages[i].username==messages[i-1].username){
    
html+=`<li class="clearfix">
            <div class="contenido-message">
            
            
            <div class="message other-message float-right">
              <a id="mensaje${messages[i].id}"><img src="${messages[i].imagen}" id="imagen1" width="290px" height="290px"></a>
              <span class="message-data-time float-right space-time" >${messages[i].date}</span>
            </div>
            <div class="align-delete ${messages[i].id}">
            <button type="button" class="popover1" id="${messages[i].id}" data-container="body" data-toggle="popover" data-placement="top" data-trigger="focus" data-content="Eliminar">   <i class="fas fa-ellipsis-h"></i> </button>
            </div>
            </div>
          </li>`;
            }else{
               

      html+=`<li class="clearfix">
            <div class="message-data align-right">
              
              <span class="message-data-name" >${nomuser2}</span> <i class="fa fa-circle me"></i>
              
            </div>
            <div class="contenido-message">
            <svg id="my-subnube" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13">
                <path opacity=".13" d="M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z"></path>
                <path fill="currentColor" d="M5.188 0H0v11.193l6.467-8.625C7.526 1.156 6.958 0 5.188 0z"></path>
              </svg>
            <div class="message other-message float-right">
              <a id="mensaje${messages[i].id}"><img src="${messages[i].imagen}" id="imagen1" width="290px" height="290px"></a>
              <span class="message-data-time float-right space-time" >${messages[i].date}</span>
            </div>
            <div class="align-delete ${messages[i].id}">
            <button type="button" class="popover1" id="${messages[i].id}" data-container="body" data-toggle="popover" data-placement="top" data-trigger="focus" data-content="Eliminar">   <i class="fas fa-ellipsis-h"></i> </button>
            </div>
            </div>
          </li>`;
            }
      }

          userident=true;
    }else{
      if(sessionStorage.sonido=="nosound"){
numsonid=0;
      }else{
        numsonid=1;
    
      }
      
      var nomuser=messages[i].username;
             var nomuser2=nomuser.toUpperCase();
             if(html==""){
       html+=`<li class="clearfix">
            <div class="message-data align-left">
              <span class="message-data-name"><i class="fa fa-circle other"></i>${nomuser2}</span>
              
            </div>
            <svg id="other-subnube" xmls="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13">
              <path opacity=".13" fill="#0000000" d="M1.533 3.568L8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"></path>
              <path fill="currentColor" d="M1.533 2.568L8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"></path>
            </svg>
            <div class="message my-message float-left">
              <a id="mensaje${messages[i].id}"><img src="${messages[i].imagen}" id="imagen1" width="290px" height="290px"></a>
              <span class="message-data-time float-right space-time">${messages[i].date}</span>
            </div>
            
          </li>`;
          
      }else{
            if(messages[i].username==messages[i-1].username){
    
html+=`<li class="clearfix">
          
            <div class="message my-message float-left">
              <a id="mensaje${messages[i].id}"><img src="${messages[i].imagen}" id="imagen1" width="290px" height="290px"></a>
              <span class="message-data-time float-right space-time">${messages[i].date}</span>
            </div>
            
          </li>`;
            }else{
               

      html+=`<li class="clearfix">
            <div class="message-data align-left">
              <span class="message-data-name"><i class="fa fa-circle other"></i>${nomuser2}</span>
              
            </div>
            <svg id="other-subnube" xmls="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13">
              <path opacity=".13" fill="#0000000" d="M1.533 3.568L8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"></path>
              <path fill="currentColor" d="M1.533 2.568L8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"></path>
            </svg>
            <div class="message my-message float-left">
              <a id="mensaje${messages[i].id}"><img src="${messages[i].imagen}" id="imagen1" width="290px" height="290px"></a>
              <span class="message-data-time float-right space-time">${messages[i].date}</span>
            </div>
            
          </li>`;
            }
      }
      
          userident=false;
    }
      identif2=1;
      var loader=document.querySelector('#preloader');
      loader.style.display="none";
        }
        else{

    if(messages[i].username==sessionStorage.username){
      var nomuser=messages[i].username;
             var nomuser2=nomuser.toUpperCase();
             if(html==""){
      html+=`<li class="clearfix">
            <div class="message-data align-right">
              
              <span class="message-data-name" >${nomuser2}</span> <i class="fa fa-circle me"></i>
              
            </div>
            <div class="contenido-message">
            <svg id="my-subnube" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13">
                <path opacity=".13" d="M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z"></path>
                <path fill="currentColor" d="M5.188 0H0v11.193l6.467-8.625C7.526 1.156 6.958 0 5.188 0z"></path>
              </svg>
            <div class="message other-message float-right">
              <a id="mensaje${messages[i].id}">${messages[i].message}</a>
              <span class="message-data-time float-right space-time">${messages[i].date}</span> 
            </div>
            <div class="align-delete ${messages[i].id}">
            <button type="button" class="popover1" id="${messages[i].id}" data-container="body" data-toggle="popover" data-placement="top" data-trigger="focus" data-content="Eliminar">   <i class="fas fa-ellipsis-h"></i> </button>
            </div>
           
           </div>
          </li>`;
          
      }else{
            if(messages[i].username==messages[i-1].username){
    
html+=`<li class="clearfix">
            <div class="contenido-message">
            
            <div class="message other-message float-right">
              <a id="mensaje${messages[i].id}">${messages[i].message}</a>
              <span class="message-data-time float-right space-time">${messages[i].date}</span> 
            </div>
            <div class="align-delete ${messages[i].id}">
            <button type="button" class="popover1" id="${messages[i].id}" data-container="body" data-toggle="popover" data-placement="top" data-trigger="focus" data-content="Eliminar">   <i class="fas fa-ellipsis-h"></i> </button>
            </div>
            </div>
          </li>`;
            }else{
               

      html+=`<li class="clearfix">
            <div class="message-data align-right">
              
              <span class="message-data-name" >${nomuser2}</span> <i class="fa fa-circle me"></i>
              
            </div>
            <div class="contenido-message">
            <svg id="my-subnube" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13">
                <path opacity=".13" d="M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z"></path>
                <path fill="currentColor" d="M5.188 0H0v11.193l6.467-8.625C7.526 1.156 6.958 0 5.188 0z"></path>
              </svg>
            <div class="message other-message float-right">
              <a id="mensaje${messages[i].id}">${messages[i].message}</a>
              <span class="message-data-time float-right space-time" >${messages[i].date}</span> 
            </div>
           <div class="align-delete ${messages[i].id}">
            <button type="button" class="popover1" id="${messages[i].id}" data-container="body" data-toggle="popover" data-placement="top" data-trigger="focus" data-content="Eliminar">   <i class="fas fa-ellipsis-h"></i> </button>
            </div>
            </div>
          </li>`;
            }
      }

          userident=true;
    }else{
      if(sessionStorage.sonido=="nosound"){

      }else{
   
      }
      var nomuser=messages[i].username;
             var nomuser2=nomuser.toUpperCase();
             //alert($(`.message-data-name:last`).html()+" "+nomuser2);
             if(html==""){
      html+=`<li class="clearfix">
            <div class="message-data align-left">
              <span class="message-data-name"><i class="fa fa-circle other"></i>${nomuser2}</span>
              
            </div>
            <svg id="other-subnube" xmls="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13">
              <path opacity=".13" fill="#0000000" d="M1.533 3.568L8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"></path>
              <path fill="currentColor" d="M1.533 2.568L8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"></path>
            </svg>
            <div class="message my-message float-left">
              <a id="mensaje${messages[i].id}">${messages[i].message}</a>
              <span class="message-data-time float-right space-time">${messages[i].date}</span>
            </div>
            
          </li>`;
          
      }else{
            if(messages[i].username==messages[i-1].username){
    
html+=`<li class="clearfix">
            
            <div class="message my-message float-left">
              <a id="mensaje${messages[i].id}">${messages[i].message}</a>
              <span class="message-data-time float-right space-time">${messages[i].date}</span>
            </div>
            
          </li>`;
            }else{
               

      html+=`<li class="clearfix">
            <div class="message-data align-left">
              <span class="message-data-name"><i class="fa fa-circle other"></i>${nomuser2}</span>
              
            </div>
            <svg id="other-subnube" xmls="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13">
              <path opacity=".13" fill="#0000000" d="M1.533 3.568L8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"></path>
              <path fill="currentColor" d="M1.533 2.568L8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"></path>
            </svg>
            <div class="message my-message float-left">
              <a id="mensaje${messages[i].id}">${messages[i].message}</a>
              <span class="message-data-time float-right space-time">${messages[i].date}</span>
            </div>
            
          </li>`;
            }
      }
      
          userident=false;
    }
  }
           
            
            
        }
 }
        }
        $('#listMessages').html(html);
        var i=0;
        $('.message').each(function(){
      if($(this).hasClass('other-message')&&!$(this).is(':contains("<em id="deletemess">Se ha eliminado este mensaje</em>")')){

            $(`.align-delete:eq(${i})`).css('height',parseInt($(this).height()+8)+"px");
           
        i++;
      }
      
    });
    
      //  datosporenviar=messages;
        if($('.message').length<1){
          $('.chat-num-messages').html('Hay 0 mensajes');
        }else{
          $('.chat-num-messages').html('Hay '+$('.message').length+' mensajes');
        }
        setTimeout(function(){
  preloader.style.display="none";
 // toastr.info('&nbsp;Page Loaded!');
 
 



}, 0);
$('.chat-history').scrollTop($(".chat-history").prop("scrollHeight"));
var elementpopover;

var popoverclon;
var validado=false;
/*$('.popover1').mouseenter(function(){
  if($('#message-to-send').is(":focus")){

    validado=true;
  }
});*/
var contpopover=0;
var idmess;
var popovers2=true;
  $('.contenido-message').mouseenter(function(){
   if(!$('.popover')[0]){
     $('.align-delete').css('display','none');
     $(this).find('.align-delete').css('display','flex');
     
   }
});

$('.contenido-message').mouseleave(function(){
  if(!$('.popover')[0]){
     $(this).find('.align-delete').css('display','none');
 }
});
$('.contenido-message').click(function(){
  $('.align-delete').css('display','none');
  $(this).find('.align-delete').css('display','flex');
});
$('.popover1').dblclick(function(e){
 
  e.preventDefault();
  e.stopPropagation();
});
$('.popover1').click(function(){

  /*if(validado){
    $('#message-to-send').focus();
    validado=false;
  }*/
var elementthis=this;
    if($('.popover').length<=0){
      
   $(this).popover('show');

  }else{
         $('.popover1').popover('hide');  
      
  }
   setTimeout(function(){
    
     if($('.popover').length<=0){
    $(elementthis).popover('show');
     }
  },50);

  


    verificadorpop=true;
idmess=this.id;

});
$('.popover1').on('shown.bs.popover', function () {

$('.popover-body').click(function(){
   //$('.popover-body').toArray().length
   //alert(idmess);
   socket.emit('eliminarMessage',idmess);
   $('.popover').length=0;
     //alert("eliminado");
    
 //$(this).popover('hide');
  

});
 
});
$('.popover1').on('hidden.bs.popover', function () {
 
});

$('.scrolldown').css('bottom','-'+parseInt($('.chat-history').scrollTop()-10)+'px');

  });

}

function mensajeEliminado(socket){
  socket.on('eliminarMessage',function(respuesta){
    $(`#mensaje${respuesta}`).html('<strong><i class="fas fa-ban"></i>&nbsp;<em id="deletemess">Se ha eliminado este mensaje</em></strong>');
    $(`#${respuesta}`).replaceWith("");
    $(`.${respuesta}`).replaceWith("");
    var i=0;
   /* $('.message').each(function(){
      if($(this).hasClass('other-message')){
        $(`.align-delete:eq(${i})`).css('height',parseInt($(`.message:eq(${i})`).height()+8)+"px");
        i++;
      }
    });
   */

  });
  /*socket.on('eliminarMessageOther',function(respuesta){
    $(`#mensaje${respuesta-1}`).html('<strong><i class="fas fa-ban"></i>&nbsp;<em id="deletemess">Se ha eliminado este mensaje</em></strong>');
    $(`#${respuesta-1}`).replaceWith("");
  });*/  
}
toastr.options = {
  "closeButton": true,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-top-right",
  "preventDuplicates": true,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "3000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}
var contadoruserlast=0;
var replaceuser="";
var contadorusuariosnoti=0;
var idnotify=0;
notifyMe("","");
function  notifyMe(valor,message)  {  
    if  (!("Notification"  in  window))  {   
        alert("Este navegador no soporta notificaciones de escritorio");  
    }  
    else  if  (Notification.permission  ===  "granted")  {
      idnotify++;
        var  options  =   {
            body:   valor,
            lang: 'ES',
            //tag: 'notificacionmessage'+idnotify,
            icon:   "images/chat-icon.png",
            dir :   "ltr"//or auto
        };
        if(valor!=undefined&&valor!=null&&valor!=""&&message!=undefined&&message!=null&&message!=""){
        var  notification  =  new  Notification(message, options);
        setTimeout(notification.close.bind(notification), 5000); 
        notification.onclick = function(event) {
            //event.preventDefault(); // Previene al buscador de mover el foco a la pestaña del Notification
            $(window).focus();
            this.close();
          }
        }
    }  
    else  if  (Notification.permission  !==  'denied')  {
        Notification.requestPermission(function (permission)  {
            if  (!('permission'  in  Notification))  {
                Notification.permission  =  permission;
            }
            if  (permission  ===  "granted")  {
              idnotify++;
                var  options  =   {
                    body:   valor,
                    lang: 'ES',
                    //tag: 'notificacionmessage'+idnotify,
                    icon:   "images/chat-icon.png",
                    dir :   "ltr"//or auto
                };     
                if(valor!=undefined&&valor!=null&&valor!=""&&message!=undefined&&message!=null&&message!=""){
                var  notification  =  new  Notification(message, options);
                setTimeout(notification.close.bind(notification), 5000);
                notification.onclick = function(event) {
                    //event.preventDefault(); // Previene al buscador de mover el foco a la pestaña del Notification
                    $(window).focus();
                    this.close();
                  }
                }
            }   
        });  
    }
}
var identdisconnect=false;
function updateusers(socket){
  socket.on('userconnect',function(data,sessions,userlastsession){
   var lols=false;
      //alert(sessionStorage.roomId);
      var contusers=0;
    if($('#searchElement').val()==""){
      $('.list').html('');
      /*var date=new Date().toLocaleTimeString().
              replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");*/
        for(var i = 0; i < data.users.length; i++){
          if(sessionStorage.roomId==sessions[i]){
            contusers++;
          var nomuser=data.users[i];
             var nomuser2=nomuser.toUpperCase();
             

            lols=true;
             if(data.users[i]==sessionStorage.username){
               identreap=true;
               sessionStorage.validcantuser="data";
             }
             
            html = `<li class="clearfix">
          
            <div class="name">${nomuser2}</div>
            <div class="status">
              <i class="fa fa-circle online"></i> online
       
          </div>
        </li>`;
            $('.list').append(html);
  $('#numberusers').html(
    $('.name').length);
            
          }
        }
       
        if(!identreap){
            socket.emit('actualizarUser',sessionStorage.username, sessionStorage.roomId);
          }
        
        vecsearch=data.users;
      }
      //if(sessions[sessions.length-1]==sessionStorage.roomId){
       if(userlastsession==sessionStorage.roomId){
  var userlast=data.users[data.users.length-1];
if(sessionStorage.userconnect=="connect"){
  if(userlast!=sessionStorage.username){
    //contadoruserlast++;

    if($('.toast')[0]){
    if(!$('.toast').html().includes(`<strong>${replaceuser}</strong> se ha unido al chat.`)){
      Command: toastr["info"](`&nbsp;<strong>${userlast.toUpperCase()}</strong> se ha unido al chat.`);
      
      
      replaceuser=userlast.toUpperCase();
    }
    }else{
      Command: toastr["info"](`&nbsp;<strong>${userlast.toUpperCase()}</strong> se ha unido al chat.`);
  
      replaceuser=userlast.toUpperCase();
    }
  }
}
  
  
  }
 
      if(sessionStorage.sonido=="nosound"){
        numsonid=0;
      }else{
        numsonid=1;
      }
       if(sessionStorage.sonido=="nosound"){
    $('#defaultCheck1').prop('checked', false);
  }else{
    $('#defaultCheck1').prop('checked', true);
  }
  /*if(!$('.name')[0]){
    $('.list').append(`<li class="clearfix">
          
            <div class="name">${data.users[data.users.length-1].toUpperCase()}</div>
            <div class="status">
              <i class="fa fa-circle online"></i> online
       
          </div>
        </li>`);
  }*/

  });
}
function selectedElements(socket){
  socket.on('searchElement',function(data,userslist,sessions,respsesion){
    
    if($('#searchElement').val()!=""){
      $('.list').html('');
    for(var i=0;i<data.length;i++){
      if(sessionStorage.roomId==respsesion[i]){
      var nomuser=data[i];
             var nomuser2=nomuser.toUpperCase();
            html = `<li class="clearfix">
          
            <div class="name">${nomuser2}</div>
            <div class="status">
              <i class="fa fa-circle online"></i> online
       
          </div>
        </li>`;
            $('.list').append(html);
      }
    }
    }else{
      $('.list').html('');
    for(var i=0;i<userslist.length;i++){
      if(sessionStorage.roomId==sessions[i]){
      var nomuser=userslist[i];
             var nomuser2=nomuser.toUpperCase();
            html = `<li class="clearfix">
          
            <div class="name">${nomuser2}</div>
            <div class="status">
              <i class="fa fa-circle online"></i> online
       
          </div>
        </li>`;
            $('.list').append(html);
      }
    }
    }
    

  });
}

function searchElement(socket){
  socket.emit('searchElement',$('#searchElement').val());
}
$('#searchElement').keyup(function(){
  
  if($(this).val()!=''){
    $('.fa-times').attr('style',`
  font-size: 14px;
left: -5px;
  margin-left: -6.9%;`);
  $('.fa-search').attr('style',`
  font-size: 0;

  margin-left: -7.0809%;`);
  }else{
    $('.fa-times').attr('style',`
  font-size: 0;
left: -5px;
  margin-left: -6.9%;`);
  $('.fa-search').attr('style',`
  font-size: 14px;

  margin-left: -7.0809%;`);
  }
  searchElement(socket);
});
$('.fa-times').click(function(){
  $('#searchElement').val('');
  $('.fa-times').attr('style',`
  font-size: 0;
left: -5px;
  margin-left: -6.9%;`);
  $('.fa-search').attr('style',`
  font-size: 14px;

  margin-left: -7.0809%;`);
  $('#searchElement').focus();
  searchElement(socket);
});
 var contadorpop=0;
 var ventana;
 function cerrarVentana(){
     ventana.close();
}
$('#txtDestinomail').keyup(function(){
    $(this).removeClass('is-invalid');
});
$('#txtNommail').keyup(function(){
    $(this).removeClass('is-invalid');
});
$('#txtMessagemail').keyup(function(){
    $(this).removeClass('is-invalid');
});
 $('#enviarMail').click(function(){
  if($('#txtDestinomail').val().trim()==''&&$('#txtNommail').val().trim()==''&&$('#txtMessagemail').val().trim()==''){
    $('#txtDestinomail').addClass('is-invalid');
    $('#txtNommail').addClass('is-invalid');
    $('#txtMessagemail').addClass('is-invalid');
    return;
  }
   if($('#txtNommail').val().trim()==''&&$('#txtMessagemail').val().trim()==''){
    $('#txtNommail').addClass('is-invalid');
    $('#txtMessagemail').addClass('is-invalid');
    return;
  }
  if($('#txtMessagemail').val().trim()==''){
    $('#txtMessagemail').addClass('is-invalid');
    return;
  }
setTimeout(function(){
 var url = "https://paginacoti.000webhostapp.com/Archivos%20PHP/enviarMail.php";
       var obj1;
       var obj2;
       var obj3;
       var obj4;
       n =  new Date();
      //Año
      y = n.getFullYear();
      //Mes
      m = n.getMonth() + 1;
      //Día
      d = n.getDate();
      var dateTime=moment().format('hh:mm a').toUpperCase();
       obj1=$('#txtDestinomail').val();
           obj2=$('#txtNommail').val();
         obj3=$('#txtMessagemail').val();
         obj4=d + "/" + m + "/" + y+" "+dateTime;
         
         
       
       

     ventana = window.open(url+"?destino="+obj1+"&nombre="+obj2+"&mensaje="+obj3+"&hora="+obj4);
     setTimeout(cerrarVentana,750);
     (async() => {
       sessionStorage.swalName="Se han enviado los datos exitosamente";
       if(!numcoloridentify){
     $('.swal-contenedor').load('swal-light.html');
     //swal("Success!", "Se han guardado los cambios ", "success");
   }else{
   /*$('.swal2-modal,.swal2-success-circular-line-left,.swal2-success-circular-line-right,.swal2-success-fix').css('background','rgb(52,61,91) !important');
 $('.swal2-content').css('color','white !important');
 $('.swal2-title').css('color','white !important');*/
 $('.swal-contenedor').load('swal-dark.html');
   }
   swal("Success!", "Se han enviado los datos exitosamente", "success");
 })()
$('#txtDestinomail').val('');
$('#txtNommail').val('');
$('#txtMessagemail').val('');
       },500);
       $('#dialogo4').modal('hide');
       
/*const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

Toast.fire({
  icon: 'success',
  title: 'Signed in successfully'
})*/
 (async () => {
/*if (correo&&nombre&&mensaje) {
  
  setTimeout(function(){
 var url = "https://Reportes-pdf2.jesusmartinmar1.repl.co";
       var obj1;
       var obj2;
       var obj3;
       var obj4;
       n =  new Date();
      //Año
      y = n.getFullYear();
      //Mes
      m = n.getMonth() + 1;
      //Día
      d = n.getDate();
      var dateTime=moment().format('hh:mm a').toUpperCase();
       obj1=$('#txtDestinomail').val();
           obj2=$('#txtNommail').val();
         obj3=$('#txtMessagemail').val();
         obj4=d + "/" + m + "/" + y+" "+dateTime;
         
         
       
       

     window.open(url+"?destino="+obj1+"&nombre="+obj2+"&mensaje="+obj3+"&hora="+obj4);
     Swal.fire(`Se ha enviado el mensaje exitosamente`);
       },500);

}*/

})()
   /*setTimeout(function(){
 var url = "https://Reportes-pdf2.jesusmartinmar1.repl.co";
       var obj1;
       var obj2;
       var obj3;
       var obj4;
       n =  new Date();
      //Año
      y = n.getFullYear();
      //Mes
      m = n.getMonth() + 1;
      //Día
      d = n.getDate();
      var dateTime=moment().format('hh:mm a').toUpperCase();
       obj1=$('#txtDestinomail').val();
           obj2=$('#txtNommail').val();
         obj3=$('#txtMessagemail').val();
         obj4=d + "/" + m + "/" + y+" "+dateTime;
         
         
       
       

     window.open(url+"?destino="+obj1+"&nombre="+obj2+"&mensaje="+obj3+"&hora="+obj4);
       },500);*/
       //(async () => { Swal.fire(`Your IP address is 123`)})()
 });
 var controladormessagescroll=0;
//var randomColor="#"+((1<<24)*Math.random()|0).toString(16);
//$('.selector-color').val(randomColor);
var userident=true;

function actualizarMessage(socket){
  socket.on('sendMessage',function(data,nummessage){
    var colorMessage=$('.selector-color').val();

    if(data.sessionId==sessionStorage.roomId){
    /*var date=new Date().toLocaleTimeString().
              replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");*/
              if($('#usertyping')[0]){
                $('#usertyping').remove();
                setTimeout(function(){
                  $('#usertyping').remove();
                },500);
              }
              
              
    var html;      
var confirmador=false;
        var chatarea = document.querySelector(".chat-history");
        if((chatarea.offsetHeight+chatarea.scrollTop==chatarea.scrollHeight+2)||(chatarea.offsetHeight+chatarea.scrollTop>=chatarea.scrollHeight)){
          confirmador=true;
        }else{
          confirmador=false;
        }
        if(data.dibujo!=""&&data.dibujo!=undefined&&data.dibujo!=null){
          if(data.username==sessionStorage.username){
            var nomuser=data.username;
             var nomuser2=nomuser.toUpperCase();
            //alert($.contains($(`.message-data-name:last`).html(),nomuser2));
            //alert($(`.message-data-name:last`).html()+" "+nomuser2);
      if(!$('.message-data-name')[0]){
        html=`<li class="clearfix">
            <div class="message-data align-right">
              
              <span class="message-data-name" >${nomuser2}</span> <i class="fa fa-circle me"></i>
            </div>
            <div class="contenido-message">
            <svg id="my-subnube" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13">
                <path opacity=".13" d="M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z"></path>
                <path fill="currentColor" d="M5.188 0H0v11.193l6.467-8.625C7.526 1.156 6.958 0 5.188 0z"></path>
              </svg>
            <div class="message other-message float-right">
              <a id="mensaje${data.id}"><img src="${data.dibujo}" id="paintdibujo" width="290px" height="290px"></a>
              <span class="message-data-time float-right space-time" >${data.date}</span>
            </div>
            <div class="align-delete ${data.id}">
            <button type="button" class="popover1" id="${data.id}" data-container="body" data-toggle="popover" data-placement="top" data-trigger="focus" data-content="Eliminar">   <i class="fas fa-ellipsis-h"></i> </button>

            </div>
            </div>
          </li>`;
          
      }else{
            if($(`.message-data-name:last`).html()==nomuser2){
    
html=`<li class="clearfix">
           <div class="contenido-message">
            <div class="message other-message float-right">
              <a id="mensaje${data.id}"><img src="${data.dibujo}" id="paintdibujo" width="290px" height="290px"></a>
              <span class="message-data-time float-right space-time" >${data.date}</span>
            </div>
            <div class="align-delete ${data.id}">
            <button type="button" class="popover1" id="${data.id}" data-container="body" data-toggle="popover" data-placement="top" data-trigger="focus" data-content="Eliminar">   <i class="fas fa-ellipsis-h"></i> </button>
            </div>
            </div>
          </li>`;
            }else{
               
html=`<li class="clearfix">
            <div class="message-data align-right">       
              <span class="message-data-name" >${nomuser2}</span> <i class="fa fa-circle me"></i>
            </div>
            <div class="contenido-message"> 
            <svg id="my-subnube" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13">
                <path opacity=".13" d="M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z"></path>
                <path fill="currentColor" d="M5.188 0H0v11.193l6.467-8.625C7.526 1.156 6.958 0 5.188 0z"></path>
              </svg>
            <div class="message other-message float-right">
              <a id="mensaje${data.id}"><img src="${data.dibujo}" id="paintdibujo" width="290px" height="290px"></a>
              <span class="message-data-time float-right space-time" >${data.date}</span>
            </div>
            <div class="align-delete ${data.id}">
            <button type="button" class="popover1" id="${data.id}" data-container="body" data-toggle="popover" data-placement="top" data-trigger="focus" data-content="Eliminar">   <i class="fas fa-ellipsis-h"></i> </button>
            </div>
            
            </div>
          </li>`;
            }
      }
      
          userident=true;
    }else{
      if(sessionStorage.sonido=="nosound"){
numsonid=0;
      }else{
        numsonid=1;
        var audio = document.getElementById("audio");
  audio.play();
      }
      var nomuser=data.username;
             var nomuser2=nomuser.toUpperCase();
      if(!$('.message-data-name')[0]){
        html=`<li class="clearfix">
            <div class="message-data align-left">
              <span class="message-data-name"><i class="fa fa-circle other"></i>${nomuser2}</span>
              
            </div>
            <svg id="other-subnube" xmls="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13">
              <path opacity=".13" fill="#0000000" d="M1.533 3.568L8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"></path>
              <path fill="currentColor" d="M1.533 2.568L8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"></path>
            </svg>
            <div class="message my-message float-left">
              <a id="mensaje${data.id}"><img src="${data.dibujo}" id="paintdibujo" width="290px" height="290px"></a>
              <span class="message-data-time float-right space-time">${data.date}</span>
            </div>
            
          </li>`;
          
      }else{
            if($(`.message-data-name:last`).html()=='<i class="fa fa-circle other" aria-hidden="true"></i>'+nomuser2){
    
html=`<li class="clearfix">
       
            <div class="message my-message float-left">
              <a id="mensaje${data.id}"><img src="${data.dibujo}" id="paintdibujo" width="290px" height="290px"></a>
              <span class="message-data-time float-right space-time">${data.date}</span>
            </div>
            
          </li>`;
            }else{
               

      html=`<li class="clearfix">
            <div class="message-data align-left">
              <span class="message-data-name"><i class="fa fa-circle other"></i>${nomuser2}</span>
              
            </div>
            <svg id="other-subnube" xmls="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13">
              <path opacity=".13" fill="#0000000" d="M1.533 3.568L8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"></path>
              <path fill="currentColor" d="M1.533 2.568L8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"></path>
            </svg>
            <div class="message my-message float-left">
              <a id="mensaje${data.id}"><img src="${data.dibujo}" id="paintdibujo" width="290px" height="290px"></a>
              <span class="message-data-time float-right space-time">${data.date}</span>
            </div>
            
          </li>`;
            }
      }
      
          userident=false;
    }
        }else if(data.imagen!=null&&data.imagen!=undefined&&data.imagen!=""){
if(data.username==sessionStorage.username){
      var nomuser=data.username;
             var nomuser2=nomuser.toUpperCase();
             if(!$('.message-data-name')[0]){
       html=`<li class="clearfix">
            <div class="message-data align-right">
              
              <span class="message-data-name" >${nomuser2}</span> <i class="fa fa-circle me"></i>
              
            </div>
            <div class="contenido-message">
            <svg id="my-subnube" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13">
                <path opacity=".13" d="M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z"></path>
                <path fill="currentColor" d="M5.188 0H0v11.193l6.467-8.625C7.526 1.156 6.958 0 5.188 0z"></path>
              </svg>
            <div class="message other-message float-right">
              <a id="mensaje${data.id}"><img src="${data.imagen}" id="imagen1" width="290px" height="290px"></a>
              <span class="message-data-time float-right space-time" >${data.date}</span>
            </div>
            <div class="align-delete ${data.id}">
            <button type="button" class="popover1" id="${data.id}" data-container="body" data-toggle="popover" data-placement="top" data-trigger="focus" data-content="Eliminar">   <i class="fas fa-ellipsis-h"></i> </button>
            </div>
            </div>
          </li>`;
          
      }else{
            if($(`.message-data-name:last`).html()==nomuser2){
    
html=`<li class="clearfix">
            <div class="contenido-message">
            
            
            <div class="message other-message float-right">
              <a id="mensaje${data.id}"><img src="${data.imagen}" id="imagen1" width="290px" height="290px"></a>
              <span class="message-data-time float-right space-time" >${data.date}</span>
            </div>
            <div class="align-delete ${data.id}">
            <button type="button" class="popover1" id="${data.id}" data-container="body" data-toggle="popover" data-placement="top" data-trigger="focus" data-content="Eliminar">   <i class="fas fa-ellipsis-h"></i> </button>
            </div>
            </div>
          </li>`;
            }else{
               

      html=`<li class="clearfix">
            <div class="message-data align-right">
              
              <span class="message-data-name" >${nomuser2}</span> <i class="fa fa-circle me"></i>
              
            </div>
            <div class="contenido-message">
            <svg id="my-subnube" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13">
                <path opacity=".13" d="M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z"></path>
                <path fill="currentColor" d="M5.188 0H0v11.193l6.467-8.625C7.526 1.156 6.958 0 5.188 0z"></path>
              </svg>
            <div class="message other-message float-right">
              <a id="mensaje${data.id}"><img src="${data.imagen}" id="imagen1" width="290px" height="290px"></a>
              <span class="message-data-time float-right space-time" >${data.date}</span>
            </div>
            <div class="align-delete ${data.id}">
            <button type="button" class="popover1" id="${data.id}" data-container="body" data-toggle="popover" data-placement="top" data-trigger="focus" data-content="Eliminar">   <i class="fas fa-ellipsis-h"></i> </button>
            </div>
            </div>
          </li>`;
            }
      }

          userident=true;
    }else{
      if(sessionStorage.sonido=="nosound"){
numsonid=0;
      }else{
        numsonid=1;
        var audio = document.getElementById("audio");
  audio.play();
      }
      
      var nomuser=data.username;
             var nomuser2=nomuser.toUpperCase();
             if(!$('.message-data-name')[0]){
       html=`<li class="clearfix">
            <div class="message-data align-left">
              <span class="message-data-name"><i class="fa fa-circle other"></i>${nomuser2}</span>
              
            </div>
            <svg id="other-subnube" xmls="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13">
              <path opacity=".13" fill="#0000000" d="M1.533 3.568L8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"></path>
              <path fill="currentColor" d="M1.533 2.568L8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"></path>
            </svg>
            <div class="message my-message float-left">
              <a id="mensaje${data.id}"><img src="${data.imagen}" id="imagen1" width="290px" height="290px"></a>
              <span class="message-data-time float-right space-time">${data.date}</span>
            </div>
            
          </li>`;
          
      }else{
            if($(`.message-data-name:last`).html()=='<i class="fa fa-circle other" aria-hidden="true"></i>'+nomuser2){
    
html=`<li class="clearfix">
          
            <div class="message my-message float-left">
              <a id="mensaje${data.id}"><img src="${data.imagen}" id="imagen1" width="290px" height="290px"></a>
              <span class="message-data-time float-right space-time">${data.date}</span>
            </div>
            
          </li>`;
            }else{
               

      html=`<li class="clearfix">
            <div class="message-data align-left">
              <span class="message-data-name"><i class="fa fa-circle other"></i>${nomuser2}</span>
              
            </div>
            <svg id="other-subnube" xmls="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13">
              <path opacity=".13" fill="#0000000" d="M1.533 3.568L8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"></path>
              <path fill="currentColor" d="M1.533 2.568L8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"></path>
            </svg>
            <div class="message my-message float-left">
              <a id="mensaje${data.id}"><img src="${data.imagen}" id="imagen1" width="290px" height="290px"></a>
              <span class="message-data-time float-right space-time">${data.date}</span>
            </div>
            
          </li>`;
            }
      }
      
          userident=false;
    }
      identif2=1;
      var loader=document.querySelector('#preloader');
      loader.style.display="none";
        }
        else{

    if(data.username==sessionStorage.username){
      var nomuser=data.username;
             var nomuser2=nomuser.toUpperCase();
             if(!$('.message-data-name')[0]){
      html=`<li class="clearfix">
            <div class="message-data align-right">
              
              <span class="message-data-name" >${nomuser2}</span> <i class="fa fa-circle me"></i>
              
            </div>
            <div class="contenido-message">
              <svg id="my-subnube" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13">
                <path opacity=".13" d="M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z"></path>
                <path fill="currentColor" d="M5.188 0H0v11.193l6.467-8.625C7.526 1.156 6.958 0 5.188 0z"></path>
              </svg>
            <div class="message other-message float-right">
              <a id="mensaje${data.id}">${data.message}</a>
              <span class="message-data-time float-right space-time">${data.date}</span> 
            </div>
            <div class="align-delete ${data.id}">
            <button type="button" class="popover1" id="${data.id}" data-container="body" data-toggle="popover" data-placement="top" data-trigger="focus" data-content="Eliminar">   <i class="fas fa-ellipsis-h"></i> </button>
            <!--<button type="button" class="popover2" id="emojis" data-container="body" data-toggle="popover" data-placement="top" data-html="true" data-trigger="focus"> <i class="far fa-laugh"></i></button>-->
            </div>
           
           </div>
          </li>`;
          
      }else{
            if($(`.message-data-name:last`).html()==nomuser2){
    
html=`<li class="clearfix">
            <div class="contenido-message">
            
            <div class="message other-message float-right">
              <a id="mensaje${data.id}">${data.message}</a>
              <span class="message-data-time float-right space-time">${data.date}</span> 
            </div>
            <div class="align-delete ${data.id}">
            <button type="button" class="popover1" id="${data.id}" data-container="body" data-toggle="popover" data-placement="top" data-trigger="focus" data-content="Eliminar">   <i class="fas fa-ellipsis-h"></i> </button>
            </div>
            </div>
          </li>`;
            }else{
               

      html=`<li class="clearfix">
            <div class="message-data align-right">
              
              <span class="message-data-name" >${nomuser2}</span> <i class="fa fa-circle me"></i>
              
            </div>
            <div class="contenido-message">
            <svg id="my-subnube" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13">
                <path opacity=".13" d="M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z"></path>
                <path fill="currentColor" d="M5.188 0H0v11.193l6.467-8.625C7.526 1.156 6.958 0 5.188 0z"></path>
              </svg>
            <div class="message other-message float-right">
              <a id="mensaje${data.id}">${data.message}</a>
              <span class="message-data-time float-right space-time" >${data.date}</span> 
            </div>
           <div class="align-delete ${data.id}">
            <button type="button" class="popover1" id="${data.id}" data-container="body" data-toggle="popover" data-placement="top" data-trigger="focus" data-content="Eliminar">   <i class="fas fa-ellipsis-h"></i> </button>
            </div>
            </div>
          </li>`;
            }
      }

          userident=true;
    }else{
      if(sessionStorage.sonido=="nosound"){

      }else{
        var audio = document.getElementById("audio");
  audio.play();
      }
      var nomuser=data.username;
             var nomuser2=nomuser.toUpperCase();
             //alert($(`.message-data-name:last`).html()+" "+nomuser2);
             if(!$('.message-data-name')[0]){
      html=`<li class="clearfix">
            <div class="message-data align-left">
              <span class="message-data-name"><i class="fa fa-circle other"></i>${nomuser2}</span>
              
            </div>
            <svg id="other-subnube" xmls="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13">
              <path opacity=".13" fill="#0000000" d="M1.533 3.568L8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"></path>
              <path fill="currentColor" d="M1.533 2.568L8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"></path>
            </svg>
            <div class="message my-message float-left">
              <a id="mensaje${data.id}">${data.message}</a>
              <span class="message-data-time float-right space-time">${data.date}</span>
            </div>
            
          </li>`;
          
      }else{
            if($(`.message-data-name:last`).html()=='<i class="fa fa-circle other" aria-hidden="true"></i>'+nomuser2){
    
html=`<li class="clearfix">
            
            <div class="message my-message float-left">
              <a id="mensaje${data.id}">${data.message}</a>
              <span class="message-data-time float-right space-time">${data.date}</span>
            </div>
            
          </li>`;
            }else{
               

      html=`<li class="clearfix">
            <div class="message-data align-left">
              <span class="message-data-name"><i class="fa fa-circle other"></i>${nomuser2}</span>
              
            </div>
            <svg id="other-subnube" xmls="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13">
              <path opacity=".13" fill="#0000000" d="M1.533 3.568L8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"></path>
              <path fill="currentColor" d="M1.533 2.568L8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"></path>
            </svg>
            <div class="message my-message float-left">
              <a id="mensaje${data.id}">${data.message}</a>
              <span class="message-data-time float-right space-time">${data.date}</span>
            </div>
            
          </li>`;
            }
      }
      
          userident=false;
    }
  }


$('#listMessages').append(html); 
if($('.message:last').hasClass('other-message')){
  $('.align-delete:last').css('height',parseInt($('.message:last').height()+8)+"px");
}

    if($('.message').length<1){
          $('.chat-num-messages').html('Hay 0 mensajes');
        }else{
          $('.chat-num-messages').html('Hay '+$('.message').length+' mensajes');
        }
        if(confirmador){
        chatarea.scrollTop=chatarea.scrollHeight;
        controladormessagescroll=0;
      }else{
        controladormessagescroll++;
        $('.mensajesnuevos').css('bottom','-'+parseInt($('.chat-history').scrollTop()-35)+'px');
        setTimeout(function(){
          if($('.chat-history').scrollTop()<=70){
          $('.mensajesnuevos').css('bottom','35px');
        }
        },70);
        $('.mensajesnuevos').css('display','block');
        $('.mensajesnuevos').html(controladormessagescroll);
      }
      if(controladormessagescroll>=1){
        $('.mensajesnuevos').css('display','block');
        $('.mensajesnuevos').html(controladormessagescroll);
      }else{
        $('.mensajesnuevos').css('display','none');
      }
      var loader=document.querySelector('#preloader');
      loader.style.display="none";
        confirmador=false;
  if(!controlfocusmessage){
    numbermessagenew++;
  }else{
    numbermessagenew=0;
  }
  if(numbermessagenew>=1){
    document.title="("+numbermessagenew+") Chat Grupal";
    notifyMe("Tienes 1 mensaje nuevo.",data.message);
  }else{
    document.title="Chat Grupal";
  }
var elementpopover;
var validado=false;
/*$('.popover1').mouseenter(function(){
  if($('#message-to-send').is(":focus")){

    validado=true;
  }
});*/
 var idmess;
var contpopover=0;
/*$('.popover1').dblclick(function(e){
 
  e.preventDefault();
  e.stopPropagation();
});

$('.popover1').click(function(){
  if(elementpopover!=this.id||moverscroll){
  contpopover=0;
  moverscroll=false;
}
contpopover++;
elementpopover=this.id;
generalpop=this.id;
  /*if(validado){
    $('#message-to-send').focus();
    validado=false;
  }*/
  /*if(contpopover%2==0){

      $(this).popover('hide');    
  }else{

      $(this).popover('show');  
    verificadorpop=true;
  }
idmess=this.id;
});*/
var selectelementspopover=document.querySelector('.popover1');
$('.popover1:last').dblclick(function(e){
 
  e.preventDefault();
  e.stopPropagation();
});


/*$('.popover2:last').click(function(){
  $(".popover2:last").popover({
    html: true, 
  content: function() {
          return $('#popover-content-emojis').html();
        }
});
});*/
$('.popover1:last').click(function(){

  /*if(validado){
    $('#message-to-send').focus();
    validado=false;
  }*/
var elementthis=this;
    if($('.popover').length<=0){
   $(this).popover('show');
  }else{
         $(this).popover('hide');  
      
  }
   setTimeout(function(){
    
     if($('.popover').length<=0){
    $(elementthis).popover('show');
     }
  },50);

    verificadorpop=true;
idmess=this.id;

});
/*$('.popover1').on('hidden.bs.popover', function () {
 $('.popover-body').click(function(){
   //$('.popover-body').toArray().length
   //alert(idmess);
   socket.emit('eliminarMessage',idmess);
     //alert("eliminado");
    
 //$(this).popover('hide');
  

});
 
});*/
$('.popover1:last').on('shown.bs.popover', function () {
$('.popover-body').click(function(){
   //$('.popover-body').toArray().length
   //alert(idmess);
   socket.emit('eliminarMessage',idmess);
     //alert("eliminado");
    $('.popover').length=0;
 //$(this).popover('hide');
  

});
 
});

/*if(userident){
  $('.other-message').css('background',colorMessage);
          $('.me').css('color',colorMessage);
}else{
  $('.my-message').css('background',colorMessage);
          $('.other').css('color',colorMessage);
}*/
  $('.contenido-message').mouseenter(function(){
   if(!$('.popover')[0]){
     $('.align-delete').css('display','none');
     $(this).find('.align-delete').css('display','flex');
     
   }
});

$('.contenido-message').mouseleave(function(){
  if(!$('.popover')[0]){
     $(this).find('.align-delete').css('display','none');
 }
});
$('.contenido-message').click(function(){
  $('.align-delete').css('display','none');
  $(this).find('.align-delete').css('display','flex');
});
var intervalo;
/*$('.contenido-message').mousedown(function() {
   //Al escribir, limpio el intervalo
   var ss=this;
  clearInterval(intervalo);
  intervalo = setInterval(function(){ //Y vuelve a iniciar
          //alert ("Has dejado de escribir"); //Cumplido el tiempo, se muestra el mensaje
          $(`${ss}`).css('background','#C4CDF9');
          clearInterval(intervalo); //Limpio el intervalo
      }, 1500);
     
});

/*Cuando se deje de hacer clic*/
/*$('.contenido-message').mouseup(function() {
  clearInterval(intervalo);

});*/

  }
  });
  
}
function exportarMessages(socket){
  socket.on('exportMessages',function(messages){
setTimeout(function(){
 var url = "https://Reportes-pdf2.jesusmartinmar1.repl.co";
       var obj1=[];
       var obj2=[];
       var obj3=[];
       for(var i=0;i<messages.length;i++){
         if(messages[i].message!=''&&!messages[i].message.includes('<strong><i class="fas fa-ban"></i>')){
           obj1.push(messages[i].username);
         obj2.push(messages[i].message);
         obj3.push(messages[i].date);
         }
         
       }
      // alert(obj2[1]);

     window.open(url+"?variable="+obj1+"&variable2="+obj2+"&variable3="+obj3);
       },1000);
  });
}
let datosporenviar=[];
$('#exportar').on('click', (e) => {
  socket.emit('exportMessages');
       //socket.emit('updateMessages');
       
      
     // e.preventDefault();
        
   //socket.emit("listar",datosporenviar);
   /*let infor;
   for(var a=0;a<datosporenviar.length;a++){
      infor+=`<table id="tablaprueba" class="table table-striped"><tr>
              <th>ID</th>
              <th>TITLE</th>
              <th>NEWS</th>
              <th>ACT</th>
            </tr><tr><td>${datosporenviar[a].id}</td><td>${datosporenviar[a].title}</td><td>${datosporenviar[a].content}</td><td><button id="${datosporenviar[a].id}" type="button" class="btn btn-warning mitad">Editar</button><button id="${datosporenviar[a].id}" type="button" class="btn btn-danger mitad">Eliminar</button></td></tr></table>`;
   }
   console.log(infor);
   $('#info').val(infor);
    alert($('#info').val());*/
  });
//$('.chat-num-messages');

function enviarMessage(socket){
  var dateTime=moment().format('hh:mm a').toUpperCase();
  socket.emit('sendMessage',{
    sessionId: sessionStorage.roomId,
    username: sessionStorage.username,
    message: $('#message-to-send').val(),
    date: dateTime
  });
  
}
  
  
    $('#send').html('<i class="fa fa-paper-plane">');
    
  $('#listauser').on('click',function(){
    if($(window).width()<=650){
    if(identuserlistcolor){
      $('.people-list').attr('style', `width: 100% !important; max-height: 100%;
    word-wrap: break-word;
    overflow-y:auto !important; 
    overflow-x:hidden !important; 
    height: 100% !important;`);
    $('.chat').attr('style', `width: 68% !important; float: left;
  background: #F2F5F8;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  color: #434651;`);
    $('.chat-message').attr('style',`width: 90% !important;
  bottom: 0;
    padding: 0 !important;
    width: 90% !important;
    margin-top: 15px !important;
    margin-right: 15px !important;
    margin-left: 15px !important;
    margin-bottom: 15px !important;`);
    $(this).hide();
    $('#quitarlistauser').css('display', 'block');
    $('#contenidouser').css('display','block');
    $('#quitarlistauser').show();
    $('#numberusers').hide();
    $('.chat').css('display','none');
    }else{
      $('.people-list').attr('style', `width: 100% !important; max-height: 100%;
    word-wrap: break-word;
    overflow-y:auto !important; 
    overflow-x:hidden !important; 
    height: 100% !important;`);
    $('.chat').attr('style', `width: 68% !important; float: left;
  background: rgb(52,61,91);
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  color: #fff;`);
    $('.chat-message').attr('style',`width: 90% !important;
  bottom: 0;
    padding: 0 !important;
    width: 90% !important;
    margin-top: 15px !important;
    margin-right: 15px !important;
    margin-left: 15px !important;
    margin-bottom: 15px !important;`);
    $(this).hide();
    $('#quitarlistauser').css('display', 'block');
    $('#contenidouser').css('display','block');
    $('#quitarlistauser').show();
    $('#numberusers').hide();
    $('.chat').css('display','none');
    }
    }
    identcolor=false;
  }); 
  $('#quitarlistauser').on('click',function(){
    if($(window).width()<=650){
    if(identuserlistcolor){
      $(this).hide();
    $('#listauser').show();
    $('.people-list').attr('style', `width: 12% !important; max-height: 100%;
    word-wrap: break-word;
    overflow-y:auto !important; 
    overflow-x:hidden !important; 
    height: 100% !important;`);
    $('.chat').attr('style', `width: 88% !important; float: left;
  background: #F2F5F8;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  color: #434651;`);
 $('.chat-message').attr('style',`width: 90% !important;
  bottom: 0;
    padding: 0 !important;
    width: 90% !important;
    margin-top: 15px !important;
    margin-right: 15px !important;
    margin-left: 15px !important;
    margin-bottom: 15px !important;`);
    $('#contenidouser').css('display','none');
    $('#numberusers').show();
      $('.chat').css('display','block');
    }else{
      $(this).hide();
    $('#listauser').show();
    $('.people-list').attr('style', `width: 12% !important; max-height: 100%;
    word-wrap: break-word;
    overflow-y:auto !important; 
    overflow-x:hidden !important; 
    height: 100% !important;`);
    $('.chat').attr('style', `width: 88% !important; float: left;
  background: rgb(52,61,91);
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  color: #fff;`);
 $('.chat-message').attr('style',`width: 90% !important ;
  bottom: 0;
    padding: 0 !important;
    width: 90% !important;
    margin-top: 15px !important;
    margin-right: 15px !important;
    margin-left: 15px !important;
    margin-bottom: 15px !important;`);
    $('#contenidouser').css('display','none');
    $('#numberusers').show();
    $('.chat').css('display','block');
    }
    }
    identcolor=true;
  });
  var cont=0;
  $('.fa-star').on('click',function(){
    if(cont%2==0){
      $(this).attr('style','color: rgb(230,230,0) !important;');
    }else{
      $(this).attr('style','color: rgb(220,220,220) !important;');
    }
    cont++;
    
  });
  var contlimit=0;
  function escribirMessage(socket){
    socket.on('escribiendoMessage',function(data){
      if(sessionStorage.roomId==data.sessionId){
      var confirmador=false;
        var chatarea = document.querySelector(".chat-history");
        if((chatarea.offsetHeight+chatarea.scrollTop==chatarea.scrollHeight+2)||(chatarea.offsetHeight+chatarea.scrollTop>=chatarea.scrollHeight)){
          confirmador=true;
        }else{
          confirmador=false;
        }
     if(data.username!=undefined&&data.username!=""&&data.username!=null){
        if(!$('#usertyping')[0]){
          if(!$('.message-data-name')[0]){
            $('#listMessages').append(`<li id="usertyping" class="clearfix">
            <div class="message-data align-left">
              <span class="message-data-name"><i class="fa fa-circle other"></i>${data.username.toUpperCase()}</span>
              
            </div>
            <svg id="other-subnube" xmls="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13">
              <path opacity=".13" fill="#0000000" d="M1.533 3.568L8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"></path>
              <path fill="currentColor" d="M1.533 2.568L8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"></path>
            </svg>
            <div class="message my-message float-left">
              <!-- <i id="b1" class="fa fa-circle online"></i>
              <i id="b2" class="fa fa-circle online" style="color: #AED2A6"></i>
              <i id="b3" class="fa fa-circle online" style="color:#DAE9DA"></i> -->
              <div class="typing typing-1"></div>
              <div class="typing typing-2"></div>
              <div class="typing typing-3"></div>
              <span class="message-data-time float-right space-time">${data.date}</span>
            </div>
            
          </li>`);
          
      }else{
            if($(`.message-data-name:last`).html()=='<i class="fa fa-circle other" aria-hidden="true"></i>'+data.username.toUpperCase()){
    
          $('#listMessages').append(`<li id="usertyping" class="clearfix">
            
            <div class="message my-message float-left">
             <!-- <i id="b1" class="fa fa-circle online"></i>
              <i id="b2" class="fa fa-circle online" style="color: #AED2A6"></i>
              <i id="b3" class="fa fa-circle online" style="color:#DAE9DA"></i> -->
              <div class="typing typing-1"></div>
              <div class="typing typing-2"></div>
              <div class="typing typing-3"></div>
              <span class="message-data-time float-right space-time">${data.date}</span>
            </div>
            
          </li>`);
            }else{
               

      $('#listMessages').append(`<li id="usertyping" class="clearfix">
            <div class="message-data align-left">
              <span class="message-data-name"><i class="fa fa-circle other"></i>${data.username.toUpperCase()}</span>
              
            </div>
            <svg id="other-subnube" xmls="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13">
              <path opacity=".13" fill="#0000000" d="M1.533 3.568L8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"></path>
              <path fill="currentColor" d="M1.533 2.568L8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"></path>
            </svg>
            <div class="message my-message float-left">
              <!-- <i id="b1" class="fa fa-circle online"></i>
              <i id="b2" class="fa fa-circle online" style="color: #AED2A6"></i>
              <i id="b3" class="fa fa-circle online" style="color:#DAE9DA"></i> -->
              <div class="typing typing-1"></div>
              <div class="typing typing-2"></div>
              <div class="typing typing-3"></div>
              <span class="message-data-time float-right space-time">${data.date}</span>
            </div>
            
          </li>`);
            }
      }
      /* $('#listMessages').append(`<li id="usertyping">    
         <div class="message-data">
              <span class="message-data-name"><i class="fa fa-circle other"></i> ${data.username.toUpperCase()}</span>
              
            </div>
            <div class="message my-message float-left">
              <i id="b1" class="fa fa-circle online"></i>
            <i id="b2" class="fa fa-circle online" style="color: #AED2A6"></i>
            <i id="b3" class="fa fa-circle online" style="color:#DAE9DA"></i> 
            <span class="message-data-time">${data.date}</span>
            </div></li>`);*/
            
     }

     }
    

       
if(data.message==''){
$('#usertyping').remove();
}
  if(confirmador){
        chatarea.scrollTop=chatarea.scrollHeight;

      }
      }
            
    });
  }
  $('#message-to-send').focus(function(){
      $('#contenedorform').attr('style',`border-color: rgb(51,51,255) !important;
box-shadow: 0 0 0 0.2rem rgba(51, 51, 255, 0.25) !important;
outline: 0 none;`);
  });
   $('#txtMessagemail').focus(function(){
      $('#contenedorform').attr('style',`border:none !important;
outline: 0 none;`);
  });
 
    $('#message-to-send').keydown(function(){
var dateTime=moment().format('hh:mm a').toUpperCase();
    socket.emit('escribiendoMessage',{
      sessionId: sessionStorage.roomId,
      username: sessionStorage.username,
      message: $(this).val(),
      date: dateTime

    });
  });
 var intervalo;
  $('#message-to-send').keyup(function(){
    var dateTime=moment().format('hh:mm a').toUpperCase();
      clearInterval(intervalo); //Al escribir, limpio el intervalo
      intervalo = setInterval(function(){ //Y vuelve a iniciar
          //alert ("Has dejado de escribir"); //Cumplido el tiempo, se muestra el mensaje
          
         socket.emit('escribiendoMessage',{
           sessionId: sessionStorage.roomId,
      username: sessionStorage.username,
      message: '',
      date: dateTime,


    });
          clearInterval(intervalo); //Limpio el intervalo
      }, 500);
  });
 

  $('#message-to-send').blur(function(){
      $('#contenedorform').attr('style',`border: none;
  outline: none;`);
  });
  $('button').click(function(){
    
if($('#message-to-send').val().trim()!==""){
    enviarMessage(socket);
$('#message-to-send').val('');
$('#message-to-send').focus();
$('.chat-history').scrollTop($(".chat-history").prop("scrollHeight"));
setTimeout(function(){
$('.chat-history').scrollTop($(".chat-history").prop("scrollHeight"));
},300);
}
  });
  $('#message-to-send').keypress(function(e){
    if(e.keyCode==13){
      e.preventDefault();
      if($('#message-to-send').val().trim()!=""){
    enviarMessage(socket);
$(this).val('');
$(this).focus();
$('.chat-history').scrollTop($(".chat-history").prop("scrollHeight"));
setTimeout(function(){
$('.chat-history').scrollTop($(".chat-history").prop("scrollHeight"));
},300);
      }
  
    }
  });
  function cancel(socket){
     socket.on('messageMail',function(){
$('#usertyping').remove();
  });
  }
 
$('#txtMessagemail').keydown(function(e){
var dateTime=moment().format('hh:mm a').toUpperCase();
      
  });
  $('#txtMessagemail').keyup(function(e){
   var dateTime=moment().format('hh:mm a').toUpperCase();
  
  });
  $('#txtMessagemail').keypress(function(e){
   var dateTime=moment().format('hh:mm a').toUpperCase();
       
  });

/*$("#contenedorform")

  // make sure br is always the lastChild of contenteditable
  .live("keyup mouseup", function(){
    if (!this.lastChild || this.lastChild.nodeName.toLowerCase() != "br") {
      this.appendChild(document.createChild("br"));
     }
  })

  // use br instead of div div
  .live("keypress", function(e){
    if (e.which == 13) {
      if (window.getSelection) {
        var selection = window.getSelection(),
          range = selection.getRangeAt(0),
          br = document.createElement("br");
        range.deleteContents();
        range.insertNode(br);
        range.setStartAfter(br);
        range.setEndAfter(br);
        range.collapse(false);
        selection.removeAllRanges();
        selection.addRange(range);
        return false;
      }
    }
  });*/
 var textarea = document.querySelector('#message-to-send');
var contenedorform=document.querySelector('#contenedorform');
  //textarea.addEventListener('keyup', autosize);
  //textarea.addEventListener('focus', autosize);            
  var rows = document.querySelector('#message-to-send').value.split("\n").length;
  var saltolinea;
  function autosize(){
    var el = this;
    setTimeout(function(){
    el.style.cssText = 'height:auto; padding:0';
    el.style.cssText = 'height:' + el.height + 'px';
      el.style.cssText = 'height:' + el.scrollHeight + 'px';

      
     // $('#contenedorform').attr('style','height: '+el.height+' px !important;')
 
      //alert(contenedorform.style.height);
    },0);
    
    if(el.scrollHeight<=84&&el.scrollHeight>42){
    
      $('.chat-history').attr('style','max-height: 73% !important;');
     // $('#contenedorform').attr('style','height: 90px !important;');
    }
    if(el.scrollHeight>=86){
  
      $('.chat-history').attr('style','max-height: 70% !important;');
      //$('#contenedorform').attr('style','height: 120px !important;');
      
    }else{
     // $('#contenedorform').attr('style','height: 42px !important;');
    }
    if(el.innerHTML==""){
      $('.chat-history').attr('style','max-height: 76% !important;');

    setTimeout(function(){
    
    },300);
    }
    
  }

  var chat = {
    messageToSend: '',
    messageResponses: [
      'Why did the web developer leave the restaurant? Because of the table layout.',
      'How do you comfort a JavaScript bug? You console it.',
      'An SQL query enters a bar, approaches two tables and asks: "May I join you?"',
      'What is the most used language in programming? Profanity.',
      'What is the object-oriented way to become wealthy? Inheritance.',
      'An SEO expert walks into a bar, bars, pub, tavern, public house, Irish pub, drinks, beer, alcohol'
    ],
    init: function() {
      this.cacheDOM();
      this.bindEvents();
      this.render();
    },
    cacheDOM: function() {
      this.$chatHistory = $('.chat-history');
      this.$button = $('button');
      this.$textarea = $('#message-to-send');
      this.$chatHistoryList =  this.$chatHistory.find('ul');
    },
    bindEvents: function() {
      //this.$button.on('click', this.addMessage.bind(this));
      //this.$textarea.on('keyup', this.addMessageEnter.bind(this));
    },
    render: function() {
      this.scrollToBottom();
      if (this.messageToSend.trim() !== '') {
        var template = Handlebars.compile( $("#message-template").html());
        var context = { 
          messageOutput: this.messageToSend,
          time: this.getCurrentTime()
        };

        this.$chatHistoryList.append(template(context));
        this.scrollToBottom();
        this.$textarea.val('');
        
        // responses
        var templateResponse = Handlebars.compile( $("#message-response-template").html());
        var contextResponse = { 
          response: this.getRandomItem(this.messageResponses),
          time: this.getCurrentTime()
        };
        
        setTimeout(function() {
          this.$chatHistoryList.append(templateResponse(contextResponse));
          this.scrollToBottom();
        }.bind(this), 1500);
        
      }
      
    },
    
    addMessage: function() {


      /*$('#message-to-send').attr('style','height: 42px !important;');
      $('.chat-history').attr('style','max-height: 76% !important;');
      $('#contenedorform').attr('style','height: 42px !important;');*/
      this.messageToSend = this.$textarea.val();
      
      this.render();         
      
    },
    addMessageEnter: function(event) {
        // enter was pressed
        if (event.keyCode === 13) {
          this.addMessage();
          /*$('.chat-history').attr('style','max-height: 76% !important;');
          $('#contenedorform').attr('style','height: 42px !important;');*/
        }
    },
    scrollToBottom: function() {
       this.$chatHistory.scrollTop(this.$chatHistory[0].scrollHeight);
    },
    getCurrentTime: function() {
      return new Date().toLocaleTimeString().
              replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
    },
    getRandomItem: function(arr) {
      return arr[Math.floor(Math.random()*arr.length)];
    }
    
  };
  
  chat.init();
  
  var searchFilter = {
    options: { valueNames: ['name'] },
    init: function() {
      var userList = new List('list', this.options);
      var noItems = $('<li id="no-items-found">No items found</li>');
      
      userList.on('updated', function(list) {
        if (list.matchingItems.length === 0) {
          $(list.list).append(noItems);
        } else {
          noItems.detach();
        }
      });
    }
  };

  searchFilter.init();

$('.chat-history').css('height',$(window).height()-165+'px');

})();
