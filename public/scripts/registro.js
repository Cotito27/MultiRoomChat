$(document).ready(function(){
  const socket=io();
  $('#registrarse').click(function(){
    /*if($('#nombres').val()==""&&$('#apellidos').val()==""
    &&$('#telefono').val()==""&&$('#usuario').val()==""
    &&$('#password').val()==""){
      // $('#password').focus();
       $('#password').blur();
       //$('#usuario').focus();
       $('#usuario').blur();
       //$('#telefono').focus();
       $('#telefono').blur();
       //$('#apellidos').focus();
       $('#apellidos').blur();
       //$('#nombres').focus();
      $('#nombres').blur();
      $('.input-div').css('border-bottom','2px solid red');
      return;
    }
    else if($('#apellidos').val()==""
    &&$('#telefono').val()==""&&$('#usuario').val()==""&&$('#password').val()==""
    ){
      // $('#password').focus();
      $('#password').blur();
       //$('#usuario').focus();
       $('#usuario').blur();
       //$('#telefono').focus();
       $('#telefono').blur();
       //$('#apellidos').focus();
       $('#apellidos').blur();
       //$('#nombres').focus();
      $('.pass').css('border-bottom','2px solid red');
      $('.ape').css('border-bottom','2px solid red');
      $('.tel').css('border-bottom','2px solid red');
      $('.user').css('border-bottom','2px solid red');
      return;
    }else if(
    $('#telefono').val()==""&&$('#usuario').val()==""&&$('#password').val()==""
    ){
      // $('#password').focus();
      $('#password').blur();
       //$('#usuario').focus();
       $('#usuario').blur();
       //$('#telefono').focus();
       $('#telefono').blur();
       //$('#apellidos').focus();
    
       //$('#nombres').focus();
      $('.pass').css('border-bottom','2px solid red');
   
      $('.tel').css('border-bottom','2px solid red');
      $('.user').css('border-bottom','2px solid red');
      return;
    }else if(
    $('#usuario').val()==""&&$('#password').val()==""
    ){
      // $('#password').focus();
      $('#password').blur();
       //$('#usuario').focus();
       $('#usuario').blur();
       //$('#telefono').focus();

       //$('#apellidos').focus();
    
       //$('#nombres').focus();
      $('.pass').css('border-bottom','2px solid red');
   

      $('.user').css('border-bottom','2px solid red');
      return;
    }else if(
    $('#password').val()==""
    ){
      // $('#password').focus();
      $('#password').blur();
       //$('#usuario').focus();
 
       //$('#telefono').focus();

       //$('#apellidos').focus();
    
       //$('#nombres').focus();
      $('.pass').css('border-bottom','2px solid red');

      return;
    }*/
    if($('#nombres').val()==""){
      $('#nombres').blur();
      $('.nom').css('border-bottom','2px solid red');
      
    }
    if($('#apellidos').val()==""){
      $('#apellidos').blur();
      $('.ape').css('border-bottom','2px solid red');
      
    }
    if($('#telefono').val()==""){
      $('#telefono').blur();
      $('.tel').css('border-bottom','2px solid red');
      
    }
    if($('#usuario').val()==""){
      $('#usuario').blur();
      $('.user').css('border-bottom','2px solid red');
      
    }
    if($('#password').val()==""){
      $('#password').blur();
      $('.pass').css('border-bottom','2px solid red');
      
    }
     if($('#nombres').val()==""||$('#apellidos').val()==""||$('#telefono').val()==""||$('#usuario').val()==""||$('#password').val()==""){
    return;
     }
    if($('#nombres').val()!=""&&$('#apellidos').val()!=""&&$('#telefono').val()!=""&&$('#usuario').val()!=""&&$('#password').val()!=""){
      if($('#password').val().length>=6){

        // Authenticate the User
        auth
          .createUserWithEmailAndPassword($('#usuario').val(), $('#password').val())
          .then((userCredential) => {

            // clear the form
            //signUpForm.reset();
            // close the modal
          });

      socket.emit('registeruser',{
        user: $('#usuario').val(),
        password: $('#password').val(),
        nombres: $('#nombres').val(),
        apellidos: $('#apellidos').val()      
      });
      setTimeout(function(){
          window.location="index.html";
      },600);
      }else{
        alert("La contraseña debe tener almenos 6 caracteres");
      }
    }
  });
    $('#nombres').focus(function(){
    $('.nom').css('border-bottom','2px solid #d9d9d9');
  });
  $('#nombres').keyup(function(){
    $('.nom').css('border-bottom','2px solid #d9d9d9');
  });
  $('#apellidos').focus(function(){
    $('.ape').css('border-bottom','2px solid #d9d9d9');
  });
  $('#apellidos').keyup(function(){
    $('.ape').css('border-bottom','2px solid #d9d9d9');
  });
   $('#telefono').focus(function(){
    $('.tel').css('border-bottom','2px solid #d9d9d9');
  });
  $('#telefono').keyup(function(){
    $('.tel').css('border-bottom','2px solid #d9d9d9');
  });
  $('#usuario').focus(function(){
    $('.user').css('border-bottom','2px solid #d9d9d9');
  });
  $('#usuario').keyup(function(){
    $('.user').css('border-bottom','2px solid #d9d9d9');
  });
   $('#password').focus(function(){
    $('.pass').css('border-bottom','2px solid #d9d9d9');
  });
  $('#password').keyup(function(){
    $('.pass').css('border-bottom','2px solid #d9d9d9');
  });
  $('form').submit(function(e){
    e.preventDefault();
  });
});