// apply this modal for your lightboxes
// append a link to lightbox css in page <link rel="stylesheet" href="css/lightbox.css">

console.log('lightboxModal integrated')

$(document).ready(function(){

	$('.dropButton').hide();

	$('#sign-in').click(function(){
		$('#logInPopup').modal('show')
	});

	$('#sign-up').click(function(){
		$('#signUpPopup').modal('show')
	});

		// there will be more to this when ajax call introduced

	$('.logIn').click(function(e){
		e.preventDefault();
		$('#logInPopup').modal('hide');
		$('#sign-in').hide();
		$('.dropButton').show();
		window.location.href='donationHistory.html';
	});

	$('#signUp').click(function(e){
		e.preventDefault();
		$('#signUpPopup').modal('hide');
		$('#sign-in').hide();
		$('.dropButton').show();
		window.location.href='profileEdit.html';
	});

	$('.close').click(function(e){
		e.preventDefault();
		$('#signUpPopup').modal('hide');
		$('#logInPopup').modal('hide');
	});



});