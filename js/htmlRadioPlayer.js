$(document).ready(function() {
    // ################ All Variables ####################
    var radioPlayPauseBtn = $('#js-play-pause-btn');
    var mainPlayer = $('#main-but-hidden-radio-player')[0];
    var themesongPlayer = $('#theme-song-player')[0];
    var isMainPlayerRanFirstTimeAfterPageLoad = true; //1 defines true and 0 for false




    // ################ Main Code #######################
    radioPlayPauseBtn.click(function() {
        playOrPauseFunction(100);
    });




    //################# All Functions ##################### 

    // ############# Function to control play or pause functionality ###########
    function playOrPauseFunction(animationDelay = 100) {
        // ############### Scaling Animation for js-play-pause-btn ################ 
        radioPlayPauseBtn.css('transform', 'scale(.9)');
        setTimeout(function() {
            radioPlayPauseBtn.css('transform', 'scale(1)');
        }, animationDelay);
        
        // ############### changing play & pause button with scaling animation #################
        if(radioPlayPauseBtn.children('span').hasClass('fa-play')) {
            radioPlayPauseBtn.children('span').css('transform', 'scale(0)');
           
            // ########## If play button is hit for the first time sfter page load ##########
            if(isMainPlayerRanFirstTimeAfterPageLoad) {
                mainPlayer.volume = 0;
                isMainPlayerRanFirstTimeAfterPageLoad = false;
                themesongPlayer.play();
            }

            // ########## If themeplayer is paused and not ended ##########
            if(themesongPlayer.paused && !themesongPlayer.ended) {
                themesongPlayer.play();
            }

            mainPlayer.play();

            setTimeout(function() {
                radioPlayPauseBtn.children('span').removeClass('fa-play');
                radioPlayPauseBtn.children('span').addClass('fa-pause');
                radioPlayPauseBtn.children('span').css('transform', 'scale(1)');
            }, animationDelay);

        } else if(radioPlayPauseBtn.children('span').hasClass('fa-pause')) {
            radioPlayPauseBtn.children('span').css('transform', 'scale(0)');
            themesongPlayer.pause();
            mainPlayer.load();
            mainPlayer.pause();
            setTimeout(function() {
                radioPlayPauseBtn.children('span').removeClass('fa-pause');
                radioPlayPauseBtn.children('span').addClass('fa-play');
                radioPlayPauseBtn.children('span').css('transform', 'scale(1)');
            }, animationDelay);

        }
    }



    // ############# Event driven functions ###########
    themesongPlayer.addEventListener('ended', function() {
        mainPlayer.volume = 1; //raising volume to 0 - full of main player after theme song is ended
    });

    
});