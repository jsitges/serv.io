
//menu
    $(document).ready(function() {
		$(".link-inicio").click(function() {
	    $('html, body').animate({
	        scrollTop: $("section.inicio").offset().top
	    }, 2000);
	});
		$(".link-servicios").click(function() {
	    $('html, body').animate({
	        scrollTop: $("section.servicios").offset().top
	    }, 2000);
	});
		$(".link-quienes").click(function() {
	    $('html, body').animate({
	        scrollTop: $("section.quienes-somos").offset().top
	    }, 2000);
	});
		$(".link-beneficios").click(function() {
	    $('html, body').animate({
	        scrollTop: $("section.beneficios").offset().top
	    }, 2000);
	});
		$(".link-cotiza").click(function() {
	    $('html, body').animate({
	        scrollTop: $("section.cotiza").offset().top
	    }, 2000);
	});
	$(".cotiza").click(function() {
	    $('html, body').animate({
	        scrollTop: $("section.cotiza").offset().top
	    }, 2000);
	});

	$(".footer-link-inicio").click(function() {
	    $('html, body').animate({
	        scrollTop: $("section.inicio").offset().top
	    }, 2000);
	});

	$(".footer-link-servicios").click(function() {
	    $('html, body').animate({
	        scrollTop: $("section.servicios").offset().top
	    }, 2000);
	});

	$(".footer-link-quienes").click(function() {
	    $('html, body').animate({
	        scrollTop: $("section.quienes-somos").offset().top
	    }, 2000);
	});

	$(".footer-link-beneficios").click(function() {
	    $('html, body').animate({
	        scrollTop: $("section.beneficios").offset().top
	    }, 2000);
	});

});//cierre del menu


/*same height*/
$(document).ready(function() {
	$('.col-same-4').matchHeight({ property: 'min-height' });

	//$('.col-same-requisito').matchHeight({ property: 'min-height' });
	

});
// ANALYTICS
   $(document).ready(function () {

   	$('a[href^=tel]').addClass("link-goal-phone");
   	$('a[href^=mailto]').addClass("link-goal-email").attr("target", "_blank");
   	$('a[href*="wa"]').addClass("link-goal-whatsapp").attr("target", "_blank");
   	$('a[href*="api.whatsapp.com"]').addClass("link-goal-whatsapp").attr("target", "_blank");
   	$('a[href*="whatsapp"]').addClass("link-goal-whatsapp").attr("target", "_blank");

       // Manejo de Eventos
       $('.link-goal-phone').click(function () {
           if (typeof gtag == 'function') {
               gtag('event', 'click', { 'event_category': 'telefono', 'event_label': 'llamada' });
               fbq('track', 'Contact', {content_name:'llamada'});
           };
           if (typeof ga == 'function') {
               ga('send','event', 'telefono', 'click', 'llamada');
               fbq('track', 'Contact', {content_name:'llamada'});
           };
       });
       $('.link-goal-whatsapp').click(function () {
           if (typeof gtag == 'function') {
               gtag('event', 'click', { 'event_category': 'telefono', 'event_label': 'whatsaap' });
               fbq('track', 'Contact', {content_name:'whatsaap'});
           };
           if (typeof ga == 'function') {
               ga('send','event', 'telefono', 'click', 'whatsaap');
               fbq('track', 'Contact', {content_name:'whatsaap'});
           };
       });

       $('.link-goal-email').click(function () {
           if (typeof gtag == 'function') {
               gtag('event', 'click', { 'event_category': 'correo', 'event_label': 'email' });
               fbq('track', 'Contact', {content_name:'email'});
           }
           if (typeof ga == 'function') {
               ga('send', 'event', 'correo', 'click', 'email');
               fbq('track', 'Contact', {content_name:'email'});
           };
       });

   });


/*MAIL*/
$(function() {

	// Get the form.
	var form = $('#ajax-contact');

	// Get the messages div.
	var formMessages = $('#form-messages');

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		var formData = $(form).serialize();

		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');

			// Set the message text.
			$(formMessages).text(response);

			// Clear the form.
			$('#name').val('');
			$('#telefono').val('');
			$('#email').val('');
			$('#servicio').val('');
			$('#mensaje').val('');
			$('#ciudad').val('');

		})
		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');

			// Set the message text.
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Ocurrio un error con su mensaje, por favor intente nuevamente');
			}
		});

	});

});
// AOS
/*	$(document).ready(function() {
    	AOS.init();  

	});
*/