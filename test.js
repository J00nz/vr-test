(function() {
    //VR.floor(); //make a floor
    
    var playing = true;
    var isDotter = false;
    
    var video = VR.video({
        //stereo: 'horizontal',
        sphere: true,
        src:['viking-montage.mp4']});
    
    video.play();
    
    function changeVideo(){
        if(isDotter){
            video.element.src = "viking-montage.mp4";
        } else{
            video.element.src = "kungadottern.mp4";
        }

        isDotter = !isDotter;
    }
    
    
    document.addEventListener('keyup', function(e){
        if(e.keyCode == 32){
            if(playing){
                playing = false;
                video.pause();
            } else {
                playing = true;
                video.play();
            }
        } else if(e.keyCode == 90) {
            changeVideo();
        }
    });
    
    
    var box = VR.box()
          .setMaterial('brick-tiles')
          .moveTo(-2, 1, 0.5);
    
    
    VR.on('lookat', function(){
        changeVideo();
    }, box);
})();