$(document).ready(function() {
    
//Để làm scrollTop

    $(window).scroll(function() {
        if($(this).scrollTop() > 100){
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

//Để làm slider teacher mobile

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

//Để làm slider comment

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

//Để làm thay đổi của thiết kế web

    //Thay đổi nav tổng
    $('#web > div:nth-child(1)').click(function () {

        $('#web > div:nth-child(1)').addClass('edu_border');
        $('#web > div:nth-child(2)').removeClass('edu_border');
        $('#web > div:nth-child(3)').removeClass('edu_border');

        $('#chuong_trinh_dai_han').addClass('edu-active');
        $('#chuong_trinh_ngan_han').removeClass('edu-active');
        $('#chuyen_vien_do_hoa_va_web').removeClass('edu-active');

    })

    $('#web > div:nth-child(2)').click(function () {

        $('#web > div:nth-child(1)').removeClass('edu_border');
        $('#web > div:nth-child(2)').addClass('edu_border');
        $('#web > div:nth-child(3)').removeClass('edu_border');

        $('#chuong_trinh_dai_han').removeClass('edu-active');
        $('#chuong_trinh_ngan_han').addClass('edu-active');
        $('#chuyen_vien_do_hoa_va_web').removeClass('edu-active');
        
    })

    $('#web > div:nth-child(3)').click(function () {

        $('#web > div:nth-child(1)').removeClass('edu_border');
        $('#web > div:nth-child(2)').removeClass('edu_border');
        $('#web > div:nth-child(3)').addClass('edu_border');

        $('#chuong_trinh_dai_han').removeClass('edu-active');
        $('#chuong_trinh_ngan_han').removeClass('edu-active');
        $('#chuyen_vien_do_hoa_va_web').addClass('edu-active');
        
    })

    //Thay đổi các nav con
    $('#chuong_trinh_dai_han  .courses > div:nth-child(1)').click(function () {
        $('#chuyen_de_11 > div:nth-child(1)').addClass('edu-active');
    })

    $('#chuong_trinh_ngan_han .courses > div:nth-child(1)').click(function () {
        $('#chuyen_de_21 > div:nth-child(1)').addClass('edu-active');
        $('#chuyen_de_21 > div:nth-child(2)').removeClass('edu-active');
        $('#chuyen_de_21 > div:nth-child(3)').removeClass('edu-active');
    })

    $('#chuong_trinh_ngan_han .courses > div:nth-child(2)').click(function () {
        $('#chuyen_de_21 > div:nth-child(1)').removeClass('edu-active');
        $('#chuyen_de_21 > div:nth-child(2)').addClass('edu-active');
        $('#chuyen_de_21 > div:nth-child(3)').removeClass('edu-active');
    })

    $('#chuong_trinh_ngan_han .courses > div:nth-child(3)').click(function () {
        $('#chuyen_de_21 > div:nth-child(1)').removeClass('edu-active');
        $('#chuyen_de_21 > div:nth-child(2)').removeClass('edu-active');
        $('#chuyen_de_21 > div:nth-child(3)').addClass('edu-active');
    })

    $('#chuyen_vien_do_hoa_va_web .courses > div:nth-child(1)').click(function () {
        $('#chuyen_de_31 > div:nth-child(1)').addClass('edu-active');
    })


//Để làm thay đổi của lập trình di động

    $('#mobile_p > div:nth-child(1)').click(function () {

        $('#mobile_p > div:nth-child(1)').addClass('edu_border');
        $('#mobile_p > div:nth-child(2)').removeClass('edu_border');

        $('#cac_lop_lap_trinh_vien_mobile').addClass('edu-active');
        $('#cac_chuyen_de_khac').removeClass('edu-active');

    })

    $('#mobile_p > div:nth-child(2)').click(function () {

        $('#mobile_p > div:nth-child(1)').removeClass('edu_border');
        $('#mobile_p > div:nth-child(2)').addClass('edu_border');

        $('#cac_lop_lap_trinh_vien_mobile').removeClass('edu-active');
        $('#cac_chuyen_de_khac').addClass('edu-active');

    })

//Để làm thay đổi của tin học văn phòng

    $('#itOffice > div:nth-child(1)').click(function () {

        $('#itOffice > div:nth-child(1)').addClass('edu_border');
        $('#itOffice > div:nth-child(2)').removeClass('edu_border');
        $('#itOffice > div:nth-child(3)').removeClass('edu_border');

        $('#tin_hoc_vp').addClass('edu-active');
        $('#chuyen_de_excel').removeClass('edu-active');
        $('#chuyen_de_powerbi').removeClass('edu-active');

    })

    $('#itOffice > div:nth-child(2)').click(function () {

        $('#itOffice > div:nth-child(1)').removeClass('edu_border');
        $('#itOffice > div:nth-child(2)').addClass('edu_border');
        $('#itOffice > div:nth-child(3)').removeClass('edu_border');

        $('#tin_hoc_vp').removeClass('edu-active');
        $('#chuyen_de_excel').addClass('edu-active');
        $('#chuyen_de_powerbi').removeClass('edu-active');
        
    })

    $('#itOffice > div:nth-child(3)').click(function () {

        $('#itOffice > div:nth-child(1)').removeClass('edu_border');
        $('#itOffice > div:nth-child(2)').removeClass('edu_border');
        $('#itOffice > div:nth-child(3)').addClass('edu_border');

        $('#tin_hoc_vp').removeClass('edu-active');
        $('#chuyen_de_excel').removeClass('edu-active');
        $('#chuyen_de_powerbi').addClass('edu-active');
        
    })

//Để làm thay đổi của MOS

    $('#itOfficeMOS > div:nth-child(1)').click(function () {

        $('#itOfficeMOS > div:nth-child(1)').addClass('edu_border');

        $('#thvp_mos').addClass('edu-active');

    })

//Để làm thay đổi của mạng máy tính

    $('#comNetwork > div:nth-child(1)').click(function () {

        $('#comNetwork > div:nth-child(1)').addClass('edu_border');

        $('#mang_may_tinh').addClass('edu-active');

    })

})
