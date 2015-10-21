$( document ).ready(function() {

  $('.clef').click(function() {
    
    var $this = $(this),
        audio = $this.siblings('audio')[0];
    
    
    if (audio.paused === false) {
      audio.pause();
      audio.currentTime = 0;
      $this.removeClass('play');
    }
    
    else {
      audio.play();
    }
    
  });

});