$(document).ready(function() {





  // events
  // list for auth state changes
  auth.onAuthStateChanged((user) => {
    if (user) {
      console.log("signin");
      /*    fs.collection("posts")
            .get()
            .then((snapshot) => {
              
            });*/
            if(sessionStorage.username==undefined||sessionStorage.username==null||sessionStorage.username==""){
      sessionStorage.username = user.displayName;
            }
      if (sessionStorage.username != "" && sessionStorage.username != null && sessionStorage.username != undefined) {
    if (sessionStorage.roomId != "" && sessionStorage.roomId != null && sessionStorage.roomId != undefined) {
      let url = `${location.origin}/chat.html?room=${sessionStorage.nameRoom}_${sessionStorage.roomId}`;
      window.location = url;
      return;
    }
    window.location = "index.html";
    return;
  }
    } else {
      console.log("signout");
       if(sessionStorage.username==undefined||sessionStorage.username==null||sessionStorage.username==""){
      sessionStorage.username = "";
       }
    }
  });

  const signInForm = document.querySelector("#irchat");

  signInForm.addEventListener("click", (e) => {
    const email = $('#usuario').val();
    const password = $('#password').val();
    socket.emit('validaruser');
    // Authenticate the User
    auth.signInWithEmailAndPassword(email, password).then((userCredential) => {
    
      console.log("Login exitoso");
window.location = "index.html";
    return;
      // clear the form
      //signInForm.reset();
      // close the modal
      //$("#signinModal").modal("hide");
    });
  });

  // Login with Google
  const googleButton = document.querySelector(".btn-google");

  googleButton.addEventListener("click", (e) => {

    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).then((result) => {
      //console.log(result);
      console.log("google sign in");
      sessionStorage.username = result.user.displayName;
      location.reload();
    })
      .catch(err => {
        console.log(err);
      })
  });

  // Login with Facebook
  const facebookButton = document.querySelector('.btn-facebook');

  facebookButton.addEventListener('click', e => {

    const provider = new firebase.auth.FacebookAuthProvider();
    auth.signInWithPopup(provider).then((result) => {
      //console.log(result);
      console.log("facebook sign in");
      sessionStorage.username = result.user.displayName;
      location.reload();
    })
      .catch(err => {
        console.log(err);
      })

  });
  if (sessionStorage.username != "" && sessionStorage.username != null && sessionStorage.username != undefined) {
    if (sessionStorage.roomId != "" && sessionStorage.roomId != null && sessionStorage.roomId != undefined) {
      let url = `${location.origin}/chat.html?room=${sessionStorage.nameRoom}_${sessionStorage.roomId}`;
      window.location = url;
      return;
    }
    window.location = "index.html";
    return;
  }
  const inputs = document.querySelectorAll(".input");
  function notifyMe(valor) {
    if (!("Notification" in window)) {
      alert("Este navegador no soporta notificaciones de escritorio");
    }
    else if (Notification.permission === "granted") {
      var options = {
        title: "hola",
        body: "Descripción o cuerpo de la notificación",
        icon: "images/chat-icon.png",
        dir: "ltr"
      };
      var notification = new Notification(valor, options);

    }
    else if (Notification.permission !== 'denied') {
      Notification.requestPermission(function(permission) {
        if (!('permission' in Notification)) {
          Notification.permission = permission;
        }
        if (permission === "granted") {
          var options = {
            body: "Descripción o cuerpo de la notificación",
            icon: "images/chat-icon.png",
            dir: "ltr"
          };
          var notification = new Notification(valor, options);
        }
      });
    }
  }



  var mensaje = "xd";
  //notifyMe(mensaje);
  function addcl() {
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
  }

  function remcl() {
    let parent = this.parentNode.parentNode;
    if (this.value == "") {
      parent.classList.remove("focus");
    }
  }


  inputs.forEach(input => {
    input.addEventListener("focus", addcl);
    input.addEventListener("blur", remcl);
  });
  $('form').submit(function(e) {
    e.preventDefault();
  })
  const socket = io();
  sessionStorage.validcantuser = "nodata";
  var validaruser = false;
  var validarpass = false;
  var nomuser;
  document.getElementById("imguserprofile").onchange = function(e) {
    let reader = new FileReader();

    // Leemos el archivo subido y se lo pasamos a nuestro fileReader
    reader.readAsDataURL(e.target.files[0]);

    // Le decimos que cuando este listo ejecute el código interno
    reader.onload = function() {
      let image = document.createElement('img');
      image.src = reader.result;
      if ((/\.(jpeg|jpg|png|gif)$/i).test(e.target.files[0].name)) {
        $('#imagenperson').attr('src', image.src);

      } else {
        alert("El archivo ingresado no es una imagen");
      }
    }
  }
  socket.on('validaruser', function(obj) {
    if ($('#usuario').val() == "" && $('#password').val() == "") {
      //$('#password').focus();
      // $('#usuario').focus();
      $('#usuario').blur();
      $('#password').blur();
      $('.input-div').css('border-bottom', '2px solid red');
      return;
    } else if ($('#usuario').val() == "") {
      //$('#usuario').focus();
      $('#usuario').blur();
      $('.one').css('border-bottom', '2px solid red');
      return;
    } else if ($('#password').val() == "") {
      //$('#password').focus();
      $('#password').blur();
      $('.pass').css('border-bottom', '2px solid red');
      return;
    }
    for (var i = 0; i < obj.length; i++) {

      if (obj[i].user.toUpperCase() == $('#usuario').val().toUpperCase() && obj[i].password.toUpperCase() == $('#password').val().toUpperCase()) {
        validaruser = true;
        nomuser = obj[i].nombres + " " + obj[i].apellidos;
      }
    }
    if (validaruser) {
      sessionStorage.validrefresh = true;
      sessionStorage.username = nomuser;
      //sessionStorage.password = $('#password').val();
      //alert('username : '+sessionStorage.username+" password : "+sessionStorage.password);
      if (sessionStorage.roomId != "" && sessionStorage.roomId != null && sessionStorage.roomId != undefined) {
        let url = `${location.origin}/chat.html?room=${sessionStorage.nameRoom.toLowerCase()}_${sessionStorage.roomId}`;
        window.location = url;
        return;
      }
      window.location = "index.html";
    } else {
      /*$('#usuario').val('');
      $('#password').val('');*/
      //border-bottom: 2px solid #d9d9d9;
      $('#usuario').val('');
      $('#password').val('');
      $('#password').focus();
      $('#usuario').focus();
      $('#usuario').blur();
      $('#password').blur();
      $('.input-div').css('border-bottom', '2px solid red');

      return;
    }

  });
  $('#irchat').click(function() {
    
  });
  $('#password').keypress(function(e) {
    if (e.keyCode == 13) {
      socket.emit('validaruser');
    }
  });

  $('#usuario').focus(function() {
    $('.one').css('border-bottom', '2px solid #d9d9d9');
  });
  $('#usuario').keyup(function() {
    $('.one').css('border-bottom', '2px solid #d9d9d9');
  });
  $('#password').focus(function() {
    $('.pass').css('border-bottom', '2px solid #d9d9d9');
  });
  $('#password').keyup(function() {
    $('.pass').css('border-bottom', '2px solid #d9d9d9');
  });
  $('#preloader').css('display', 'none');
});

/*  const socket=io();
  sessionStorage.validcantuser="nodata";
  var validaruser=true;
  var validarpass=true;
  socket.on('validaruser',function(user,pass){

    for(var i=0;i<user.length;i++){

      if(user[i]==$('#usuario').val()){
        validaruser=false;
      }
    }
    for(var i=0;i<pass.length;i++){
      if(pass[i]==$('#password').val()){
        validarpass=false;
      }
    }
    if(!validaruser&&!validarpass){
    $('#uservalid').html('<small class="lighter">Este usuario ya existe :(</small>');
      $('#passvalid').html('<small class="lighter">Este password ya existe :(</small>');
      $('#usuario').addClass('is-invalid');
      $('#password').addClass('is-invalid');
      validaruser=true,validarpass=true;
      /*setTimeout(function(){
        $('#usuario').removeClass('is-invalid');
        $('#password').removeClass('is-invalid');
      },5000);*/
/*    return;
  }
  else if(!validaruser){
    $('#usuario').addClass('is-invalid');
    validaruser=true;
    /*setTimeout(function(){
      $('#usuario').removeClass('is-invalid');
    },5000);*/
/*   return;
 }

 if($('#usuario').val()!=''&&$('#password').val()!=''){
   sessionStorage.validrefresh=true;
 sessionStorage.username=$('#usuario').val();
 sessionStorage.password=$('#password').val();
 //alert('username : '+sessionStorage.username+" password : "+sessionStorage.password);
 window.location="chat.html";
 }else if($('#usuario').val()==''&&$('#password').val()==''){
   $('#uservalid').html('<small class="lighter">Falta ingresar usuario</small>');
   $('#passvalid').html('<small class="lighter">Falta ingresar password</small>');
   $('#usuario').addClass('is-invalid');
   $('#password').addClass('is-invalid');
   /*setTimeout(function(){
     $('#usuario').removeClass('is-invalid');
     $('#password').removeClass('is-invalid');
   },5000);*/
/*   return;
 }else if($('#usuario').val()==''){
   $('#uservalid').html('<small class="lighter">Falta ingresar usuario</small>');
   $('#usuario').addClass('is-invalid');
   /*setTimeout(function(){
     $('#usuario').removeClass('is-invalid');
   },5000);*/
/*  return;
}
else if($('#password').val()==''){
  $('#passvalid').html('<small class="lighter">Falta ingresar password</small>');
  $('#password').addClass('is-invalid');
  /*setTimeout(function(){
    $('#password').removeClass('is-invalid');
  },5000);*/
/* return;
}
validaruser=true,validarpass=true;
});
$('#usuario').keyup(function(){
$(this).removeClass('is-invalid');
});
$('#password').keyup(function(){
$(this).removeClass('is-invalid');
});
$('#usuario').focus(function(){
$(this).removeClass('is-invalid');
});
$('#password').focus(function(){
$(this).removeClass('is-invalid');
});
$('button').click(function(){
socket.emit('validaruser');
});
$('#password').keypress(function(e){
if(e.keyCode==13){
    socket.emit('validaruser');
}
});
});*/