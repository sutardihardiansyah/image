$(document).ready(function () {

  $('#luffy, #zoro, #usopp, #sanji, #chopper2, #robin').fadeOut()


  $(document).mousemove(function (e) {

    $('#ace').css({
      'left': -e.pageX / 20,
      'top': -e.pageY / 20 + 40
    })

  })

  var nilai = 0;
  var arah = '';
  $(window).scroll(function () {
    nScroll = $(this).scrollTop();

    // Cek scroll up / down
    if (nilai < nScroll) {
      nilai = nScroll;
      arah = 'down'
    } else if (nilai > nScroll) {
      nilai = nScroll;
      arah = 'up'
    }

    if (nScroll > $('.main').offset().top - 500) {
      $('.main h1').css({
        'left': nScroll / 4
      })

      if (arah == 'down') {
        if ($('.frame').offset().left > 230) {
          $('.frame').css({
            'left': 231
          })
        } else {
          $('.frame').css({
            'left': nScroll / 3.5
          })
        }
      } else if (arah == 'up') {
        $('.frame').css({
          'left': nScroll / 3.5
        })
      }
    }

    // Bagian Char
    if (nScroll > $('.karakter').offset().top - 80 && arah == 'down') {
      $('.char').first().fadeIn(500, function tampil() {
        $(this).next().fadeIn(500, tampil)
      });
    }
    // else if (nScroll > $('.karakter').offset().top - 80 && arah == 'up') {
    //   $('#robin').fadeOut(600, function () {
    //     $('#chopper2').fadeOut(600, function () {
    //       $('#sanji').fadeOut(600, function () {
    //         $('#usopp').fadeOut(600, function () {
    //           $('#zoro').fadeOut(600, function () {
    //             $('#luffy').fadeOut(600);
    //           })
    //         })
    //       })
    //     })
    //   });
    // }
  })

  $(window).on('load', function () {
    var wScroll = $(this).scrollTop();
    if (wScroll > $('.karakter').offset().top - 100) {
      $('.char').first().fadeIn(500, function tampil() {
        $(this).next().fadeIn(500, tampil)
      });
    }
  })

  $('.char').mouseenter(function () {
    var src = $(this).data('src');
    $('.card-body').fadeOut(300, function () {
      $('.card-body').css({
        'background-image': 'url(img/char/' + src + ')',
        'background-size': 'cover',
        'background-repeat': 'no-repeat'
      })
      $('.card-body').fadeIn(300)
    })
  })

})