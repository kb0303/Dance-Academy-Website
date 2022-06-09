
console.log('krishnam')



$(function (){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll > 200){
            $('#navbar').css('background', 'white')
            $('.navItems').css('color', '#fe0000')
            $('.navItems').css('font-weight', 'bold')
            $('.name').css('color', 'black')
            $('.name').css('font-weight', 'bold')
            $('.img').css('filter', 'invert(0)')
        }
        else{
            $('#navbar').css('background', 'black')
            $('.navItems').css('color', 'white')
            $('.navItems').css('font-weight', 'normal')
            $('.name').css('color', 'white')
            $('.name').css('font-weight', 'normal')
            $('.img').css('filter', 'invert(1)')
        }
    })
})


