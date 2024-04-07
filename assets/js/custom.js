$(document).ready(function(){
    $('.customer-text').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 1
            }
        }]
    });
    $('#consultationForm').submit(function(e){
        e.preventDefault(); // Prevent form submission
        
        // Get form data
        var formData = $(this).serialize();
        console.log(formData);
        // Send form data via AJAX
        $.ajax({
            type: 'POST',
            url: 'https://formspree.io/f/mleqogvy', // Replace 'send_email.php' with your server-side script to handle email sending
            data: formData,
            success: function(response){
                // Display success message or handle response accordingly
                alert('Form submitted successfully!');
            },
            error: function(xhr, status, error){
                // Handle errors
                console.error(xhr.responseText);
                if (!xhr.responseText){
                    alert('Thank you for reaching out to us!');
                }
            }
        });
    });
});