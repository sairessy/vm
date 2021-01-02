$(document).ready(()=> {

    $('#recharge').submit((e)=> {
        e.preventDefault()
        const rechargeTxt = $('#recharge-txt').val()
        console.log(rechargeTxt)
    })

    $(window).scroll(()=> {
        if(scrollY > 20) {
            $('#gotop').css({"transform": 'scale(1)'})
        } else {
            $('#gotop').css({"transform": 'scale(0)'})
        }
    })

    $('#gotop').click((e)=> {
        e.preventDefault()
        $('body, html').animate({scrollTop: 0})
    })

})
