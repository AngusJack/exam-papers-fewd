$(document).ready(function(){
	$('i').on('click', function() {
		$('.burger-hide').toggleClass('active'); 
console.log ('hi');
// it works! 
		}
	)
$('.department').on('click', function() {
  $(this).next('.paper-year').slideToggle();
  $(this).toggleClass('is-active');
});
})