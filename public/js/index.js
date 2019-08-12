(function(){
    var siteSlider = new Swiper(
        '.site-slider',
        {
            direction:'vertical',
            pagination:{
                el:'.bg .pagination'
            }
        }        
    );
    document.body.addEventListener('mousewheel',function(e){
        if(e.deltaY > 10){
            siteSlider.slideNext();
        }else if(e.deltaY < -10){
            siteSlider.slidePrev();
        }
    })

    // video
    var isPlaying = false;
    var videoWrapper = document.querySelector('.video-wrapper');
    var mask = document.querySelector('.video-wrapper .mask');
    var video = document.querySelector('.video-wrapper .video');
    mask.addEventListener('click',()=>{
      if(!isPlaying){
        isPlaying = true;
        videoWrapper.classList.add('playing');
        video.play();
      }      
    });
    video.addEventListener('click',()=>{
      if(isPlaying){
        isPlaying = false;
        videoWrapper.classList.remove('playing');
        video.pause();
      }
    });
})();

