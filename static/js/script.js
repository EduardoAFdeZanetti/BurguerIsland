var swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  function submitForm(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var confirmationMessage = "Thank you, " + name + "! Your message has been submitted.";
    document.getElementById('confirmation').innerText = confirmationMessage;
}

document.querySelector('.menu').addEventListener('click', function() {
    document.querySelector('.nav-menu').classList.toggle('active');
});


    const urlParams = new URLSearchParams(window.location.search);
    const success = urlParams.has('success');
    console.log("Success:", success); // Check if the 'success' parameter is being detected correctly

    // If 'success' is true, display the pop-up and redirect to the home page after clicking 'OK'
    if (success) {
        alert("Login successful! Click OK to claim your 10% discount.");

        // reduce prices 10%
        document.querySelectorAll('.price').forEach((element) => {
            
            let currentPrice = parseFloat(element.innerText.replace('$', '').replace('.', '').trim());
            
            let newPrice = currentPrice * 0.9;
            
            element.innerText = '$' + newPrice.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
        });
    }



