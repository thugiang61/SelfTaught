$(document).ready(
    function(){
        // sticky nav
        $('.about-section').waypoint(
            function(direction){
                if(direction =='down'){
                    $('nav').addClass('sticky');
                }
                else {
                    $('nav').removeClass('sticky');
                }
            }, {
                offset: '400px'
            }
        );

        // toggle main-nav and nav icon in small device screen 
        $('.mobile-nav-icon').click(
            function(){                    
                $('.main-nav').slideToggle(200);                    
                if($('.check').hasClass('fa-bars')){
                    $('.check').addClass('fa-times');
                    $('.check').removeClass('fa-bars')
                }
                else{
                    $('.check').addClass('fa-bars');
                    $('.check').removeClass('fa-times')
                }
            }
        )
    }
)