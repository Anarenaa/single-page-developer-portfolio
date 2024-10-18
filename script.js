(emailjs => {
    emailjs.init('PP7wDMipqRo4AZCy_59ky');
})(emailjs);

document.querySelector('.contact__form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_utzgb0p', 'template_ywslrtr', this)
        .then(function() {
            alert('Повідомлення успішно надіслано!');
        }, function(error) {
            alert('Сталася помилка: ' + error);
        });
});