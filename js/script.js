function check_phone(obj) {
 
	var val = obj.val();
	var rv_phone = /^[0-9+)(_-]+$/;

	if(val.length > 5  && val != 'Телефон*' && rv_phone.test(val)) {
		obj.removeClass('error');
		obj.addClass('not_error');
		return true;
	} else {
		obj.removeClass('not_error');
		obj.addClass('error');
	}

};

$(function(){
	$(window).load(function(){
		
		$('.str3').liMarquee({
			direction: 'left',	
			loop:-1,			
			scrolldelay: 0,		
			scrollamount:20,	
			circular: true,		
			drag: true			
		});

	})
});

$(document).ready(function () {
	cc_city_load();
        $('.close a').hide();
	$('.subscribe').css({'display' : 'none'});
		$('.open a').click(function(){
			$('.subscribe').slideToggle('fast');
			$('.close a').show();
		});
		$('.close a').click(function(){
			$('.subscribe').slideToggle('fast');
			$('.close a').hide();
		});

// Всплывающие окна
$('.call').bind('click', function(e) { 
	e.preventDefault();
	$('#pop_up1').bPopup({});
});
$('.call1').bind('click', function(e) { 
	e.preventDefault();
	$('#pop_up2').bPopup({});
});
$('.call2').bind('click', function(e) { 
	e.preventDefault();
	$('#pop_up3').bPopup({});
});

// Заказ обратного звонка

$('#order1').on('click', function () {
	$('#order1').attr('disabled', true);
	if ( check_phone($('#phone1')) ) {
		$.post("sender.php",
			{order1:1, name1:$('#name1').val(), phone1:$('#phone1').val()},
			function (data) {
				$('#sends-response1').html(data);
				if (data == 'Укажите номер телефона!') {
					$('#order1').attr('disabled', false);
				} else {
					function dnone() {
						$('#pop_up1').bPopup().close();
					}
					setTimeout(dnone, 1000);
					yaCounter22766809.reachGoal('callback');
					_gaq.push('_trackEvent', 'callback', 'zakaz');
				}
			}
		);
	} else {
		$('#sends-response1').html('Укажите номер телефона!');
		$('#order1').attr('disabled', false);
		return false;
	}
});

//Узнать подробнее

$('#order5').on('click', function () {
	$('#order5').attr('disabled', true);
	if ( check_phone($('#phone5')) ) {
		$.post("sender.php",
			{order5:1, name5:$('#name5').val(), phone5:$('#phone5').val()},
			function (data) {
				$('#sends-response5').html(data);
				if (data == 'Укажите номер телефона!') {
					$('#order5').attr('disabled', false);
				} else {
					function dnone() {
						$('#pop_up2').bPopup().close();
					}
					setTimeout(dnone, 1000);
					yaCounter22766809.reachGoal('callback');
					_gaq.push('_trackEvent', 'forma_p', 'zakaz');
				}
			}
		);
	} else {
		$('#sends-response1').html('Укажите номер телефона!');
		$('#order1').attr('disabled', false);
		return false;
	}
});

//Узнать подробнее о заказе лэндинга

$('#order7').on('click', function () {
	$('#order7').attr('disabled', true);
	if ( check_phone($('#phone7')) ) {
		$.post("sender.php",
			{order7:1, name7:$('#name7').val(), phone7:$('#phone7').val()},
			function (data) {
				$('#sends-response7').html(data);
				if (data == 'Укажите номер телефона!') {
					$('#order7').attr('disabled', false);
				} else {
					function dnone() {
						$('#pop_up3').bPopup().close();
					}
					setTimeout(dnone, 1000);
					yaCounter22766809.reachGoal('callback');
					_gaq.push('_trackEvent', 'forma_p', 'zakaz');
				}
			}
		);
	} else {
		$('#sends-response7').html('Укажите номер телефона!');
		$('#order7').attr('disabled', false);
		return false;
	}
});



// Заказ главная форма

$('#order2').on('click', function () {
	$('#order2').attr('disabled', true);
	if ( check_phone($('#phone2')) ) {
		$.post("sender.php",
			{order2:1, name2:$('#name2').val(), phone2:$('#phone2').val()},
			function (data) {
				$('#sends-response2').html(data);
				if (data == 'Укажите номер телефона!') {
					$('#order2').attr('disabled', false);
				} else {
					yaCounter22766809.reachGoal('form2');
					_gaq.push('_trackEvent', 'gl_forma', 'zakaz');
				}
			}
		);
	} else {
		$('#sends-response2').html('Укажите номер телефона!');
		$('#order2').attr('disabled', false);
		return false;
	}
});

// Заказ форма под клиентами

$('#order3').on('click', function () {
	$('#order3').attr('disabled', true);
	if ( check_phone($('#phone3')) ) {
		$.post("sender.php",
			{order3:1, name3:$('#name3').val(), phone3:$('#phone3').val()},
			function (data) {
				$('#sends-response3').html(data);
				if (data == 'Укажите номер телефона!') {
					$('#order3').attr('disabled', false);
				} else {
					yaCounter22766809.reachGoal('form3');
					_gaq.push('_trackEvent', 'kontext', 'zakaz');
				}
			}
		);
	} else {
		$('#sends-response3').html('Укажите номер телефона!');
		$('#order3').attr('disabled', false);
		return false;
	}
});
/*$('#order5').on('click', function () {
	$('#order5').attr('disabled', true);
	if ( check_phone($('#phone5')) ) {
		$.post("sender.php",
			{order5:1, name5:$('#name5').val(), phone5:$('#phone5').val()},
			function (data) {
				$('#sends-response5').html(data);
				if (data == 'Укажите номер телефона!') {
					$('#order5').attr('disabled', false);
				} else {
					yaCounter22766809.reachGoal('form3');
					_gaq.push('_trackEvent', 'forma_p', 'zakaz');
				}
			}
		);
	} else {
		$('#sends-response5').html('Укажите номер телефона!');
		$('#order5').attr('disabled', false);
		return false;
	}
});*/

// форма со страницы создание сайтов
$('#order6').on('click', function () {
	$('#order6').attr('disabled', true);
	if ( check_phone($('#phone6')) ) {
		$.post("sender.php",
			{order6:1, name6:$('#name6').val(), phone6:$('#phone6').val()},
			function (data) {
				$('#sends-response6').html(data);
				if (data == 'Укажите номер телефона!') {
					$('#order6').attr('disabled', false);
				} else {
					yaCounter22766809.reachGoal('form3');
					_gaq.push('_trackEvent', 'raschet', 'zakaz');
				}
			}
		);
	} else {
		$('#sends-response6').html('Укажите номер телефона!');
		$('#order6').attr('disabled', false);
		return false;
	}
});


}); // end $(document).ready