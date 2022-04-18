$(document).ready(function() {
$('.wpforms-field-container input').attr("maxlength", "32");
$('.wpforms-field-container input[type="email"]').attr("maxlength", "164");
$('.wpforms-field-container textarea').attr("maxlength", "1120");
$('.wpforms-field-container textarea:first').attr("maxlength", "50");
$('span.wpforms-required-label').text('');
$('<p>** Polityka prywatności znajduje się <a href="/polityka-prywatnosci" target="_blank" alt="polityka prywatności">tutaj</a></p>').insertBefore(".zatwierdzenie-action");
$(".main-button").on('click', function() {
document.getElementById("kontakt-to-scroll").scrollIntoView();
});
});
