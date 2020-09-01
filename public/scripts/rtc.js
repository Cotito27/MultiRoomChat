import h from './helpers.js';

window.addEventListener( 'load', () => {


  

function removeHash () { 
    history.pushState("", document.title, window.location.pathname
                                                       + window.location.search);
}

    const room = h.getQString( location.href, 'room' );
    
    const username = sessionStorage.username;

    if ( !room ) {
        document.querySelector( '#room-create' ).attributes.removeNamedItem( 'hidden' );
    }

    else if ( !username ) {
        document.querySelector( '#username-set' ).attributes.removeNamedItem( 'hidden' );
    }

    else {
      
      
      /*var number1=room.indexOf('_')+1;
      sessionStorage.roomId=room.substr(number1,room.length-1);

      sessionStorage.nameRoom=room.replace('_'+sessionStorage.roomId,'').replace('\%20\g',' ').toUpperCase();
      
      
      
      
          
      //$('body').load('chat.html');
      var divs=document.querySelectorAll('div,nav');
      for(var i=0;i<divs.length;i++){
        divs[i].style.display="none";
      }
      var frame1=document.createElement('iframe');
      frame1.src="https://ChatNodeJS.jesusmartinmar1.repl.co/chat.html";
      /*frame1.addEventListener('click',function(){
        setTimeout(function(){
          if(this.src=="https://ChatNodeJS.jesusmartinmar1.repl.co"||this.src=="https://ChatNodeJS.jesusmartinmar1.repl.co/index.html"){
            alert("xdd");
          }   
        },800);
      });*/
      //document.body.appendChild(frame1);
      window.location="chat.html";
      }
    

});