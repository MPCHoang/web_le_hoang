$(document).ready(function() {
    
    $(window).scroll(function() {
        if($(this).scrollTop() > 80){
            $('#back-home').fadeIn();
        } else{
            $('#back-home').fadeOut();
        }
    })


    $('#back-home').click(function() {
        $("html, body").animate( {
            scrollTop: 0
        }, 1000)
    })

    $('.teacher_next').on('click', function() {
        let currentATeacher = $('.teacher_active');
        let nextATeacher = currentATeacher.next();

        if(nextATeacher.length) {
            currentATeacher.removeClass('teacher_active');
            nextATeacher.addClass('teacher_active');
        }
    })

    $('.teacher_prev').on('click', function() {
        let currentATeacher = $('.teacher_active');
        let prevATeacher = currentATeacher.prev();

        if(prevATeacher.length) {
            currentATeacher.removeClass('teacher_active');
            prevATeacher.addClass('teacher_active');
        }
    })

    $('.next').on('click', function() {
        let currentA = $('.active');
        let nextA = currentA.next();

        if(nextA.length) {
            currentA.removeClass('active');
            nextA.addClass('active');
        }
    });

    $('.prev').on('click', function() {
        let currentA = $('.active');
        let prevA = currentA.prev();

        if(prevA.length) {
            currentA.removeClass('active');
            prevA.addClass('active');
        }
    });

})
