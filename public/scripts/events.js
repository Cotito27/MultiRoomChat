import helpers from './helpers.js';

window.addEventListener( 'load', () => {
 
auth.onAuthStateChanged((user) => {
    if (user) {
      console.log("signin");
      /*    fs.collection("posts")
            .get()
            .then((snapshot) => {
              
            });*/

              sessionStorage.username = user.displayName;
              if(sessionStorage.username==""||sessionStorage.username==null||sessionStorage.username==undefined){
   /* swal("Error!", "Debe ingresar su cuenta", "error")
    .then((value) => {*/
     (async() => {
       let timerInterval
Swal.fire({
  
  title: 'Redireccionando...',
  html: 'Cargando en <b></b> milisegundos.',
  allowOutsideClick:false,
  allowEscapeKey: false,
  timer: 1500,
  timerProgressBar: true,
  onBeforeOpen: () => {
    Swal.showLoading()
    timerInterval = setInterval(() => {
      const content = Swal.getContent()
      if (content) {
        const b = content.querySelector('b')
        if (b) {
          b.textContent = Swal.getTimerLeft()
        }
      }
    }, 100)
  },
  onClose: () => {
    clearInterval(timerInterval);
    Swal.fire({
        title:"Redireccionando...",
        allowOutsideClick:false,
        allowEscapeKey: false,
        showConfirmButton: false
      });
    window.location="main.html";
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  Swal.fire({
        title:"Redireccionando...",
        allowOutsideClick:false,
        allowEscapeKey: false,
        showConfirmButton: false
      });
  window.location="main.html";
  if (result.dismiss === Swal.DismissReason.timer) {
    window.location="main.html";
  }
  
})
    })();
      /*swal({
        title:"Redireccionando...",
        showConfirmButton: false
      });*/
      
      
   // });
    
    return;
  }
      
   
    } else {
      console.log("signout");
  if(sessionStorage.username==""||sessionStorage.username==null||sessionStorage.username==undefined){
        sessionStorage.username =
        "";
  }
   if(sessionStorage.username==""||sessionStorage.username==null||sessionStorage.username==undefined){
   /* swal("Error!", "Debe ingresar su cuenta", "error")
    .then((value) => {*/
     (async() => {
       let timerInterval
Swal.fire({
  
  title: 'Redireccionando...',
  html: 'Cargando en <b></b> milisegundos.',
  allowOutsideClick:false,
  allowEscapeKey: false,
  timer: 1500,
  timerProgressBar: true,
  onBeforeOpen: () => {
    Swal.showLoading()
    timerInterval = setInterval(() => {
      const content = Swal.getContent()
      if (content) {
        const b = content.querySelector('b')
        if (b) {
          b.textContent = Swal.getTimerLeft()
        }
      }
    }, 100)
  },
  onClose: () => {
    clearInterval(timerInterval);
    Swal.fire({
        title:"Redireccionando...",
        allowOutsideClick:false,
        allowEscapeKey: false,
        showConfirmButton: false
      });
    window.location="main.html";
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  Swal.fire({
        title:"Redireccionando...",
        allowOutsideClick:false,
        allowEscapeKey: false,
        showConfirmButton: false
      });
  window.location="main.html";
  if (result.dismiss === Swal.DismissReason.timer) {
    window.location="main.html";
  }
  
})
    })();
      /*swal({
        title:"Redireccionando...",
        showConfirmButton: false
      });*/
      
      
   // });
    
    return;
  }
      
    }
  });


 /* if(sessionStorage.nameRoom!=""&&sessionStorage.nameRoom!=null&&sessionStorage.nameRoom!=undefined){
    return window.location="chat.html";
  }*/
  
   $('#exitCuenta').click(function(){
     sessionStorage.username="";
     sessionStorage.roomId="";
      auth.signOut().then(() => {
    console.log("signup out");
});
   });
   $('#user-name').focus();
   $('#user-name').val(sessionStorage.username.toUpperCase());
   setTimeout(function(){
     $('#preloader').css('display','none');
   },500);
   
document.getElementById( 'create-room' ).addEventListener( 'click', ( e ) => {
        e.preventDefault();
       
        let roomName = document.querySelector( '#room-name' ).value;
        let yourName = sessionStorage.username;

        if ( roomName && yourName ) {
            //remove error message, if any
            document.querySelector( '#err-msg' ).innerHTML = "";

            //save the user's name in sessionStorage
            

            //create room link
            var randomvalor=helpers.generateRandomString();
            let roomLink = `${ location.origin }/chat.html?room=${ roomName }_${ randomvalor }`;
            sessionStorage.roomId=randomvalor;
            sessionStorage.nameRoom=roomName.toUpperCase();
            sessionStorage.roomLink=roomLink;
            //show message with link to room
            document.querySelector( '#room-created' ).innerHTML = `Sala creada correctamente. Haga click <a id="irLink" href='${ roomLink }'>aquí</a> para ingresar a la sala. 
                Comparta el enlace de la sala con sus amigos.`;
           
            //empty the values
            document.querySelector( '#room-name' ).value = '';
            //document.querySelector( '#your-name' ).value = '';
            const socket=io();
            var idsala=sessionStorage.roomId;

            var namesala=sessionStorage.nameRoom;

            socket.emit('registrarSesion',{
                sessionId: idsala,
                nameSession: namesala
              });
             $('a').click(function(){   
                /*if (top.location != location) {
                top.location.href = document.location.href ;
                } */                    
            });
            $('#room-name').focus();
            $('#room-name').blur();
        }

        else {
            document.querySelector( '#err-msg' ).innerHTML = "Debe llenar el campo";
        }
    } );


    //When the 'Enter room' button is clicked.
    document.getElementById( 'enter-room' ).addEventListener( 'click', ( e ) => {
        e.preventDefault();

        let name = document.querySelector( '#username' ).value;

        if ( name ) {
            //remove error message, if any
            document.querySelector( '#err-msg-username' ).innerHTML = "";

            //save the user's name in sessionStorage
            sessionStorage.setItem( 'username', name );

            //reload room
            location.reload();
        }

        else {
            document.querySelector( '#err-msg-username' ).innerHTML = "Please input your name";
        }
    } );
});