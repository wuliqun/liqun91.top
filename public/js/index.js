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
})();

