document.addEventListener('DOMContentLoaded', function() {
    emailjs.init("lelG9tNKPVA8BA_bX"); // initialize EmailJS with User ID

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        emailjs.sendForm('service_8h4v9ou', 'template_tbqsrgk', this)
            .then(function(response) {
                document.getElementById('form-status').innerHTML = '<div class="alert alert-success">Message sent successfully!</div>';

                document.getElementById('contact-form').reset();
            }, function(error) {
                document.getElementById('form-status').innerHTML = '<div class="alert alert-danger">Message could not be sent. Please try again later.</div>';
            });
    });
});