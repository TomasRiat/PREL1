const btnSwitch = document.getElementById('switch');
const button = document.getElementById('buttonContact');
const button2 = document.getElementById('buttonComment');

// DARK-MODE

btnSwitch.addEventListener("click", () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('dark-mode', 'true');
    } else {
        localStorage.setItem('dark-mode', 'false');
    }
});

    if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark');
    btnSwitch.classList.add('active');
    } else {
    document.body.classList.remove('dark');
    btnSwitch.classList.remove('active');
    }

// ALERT-CONTACT

button.addEventListener('click', () =>{
    Swal.fire({
        showConfirmButton: false,
        timer: 2500,
        width: '600px',
        html: '<h1 class="h1__sweetAlert">Message sent!</h1><p class="p__sweetAlert">Thanks for contacting me, I’ll be aswering soon.</p><br><br><a href="../index.html" class="button-sweetAlert"><i class=" arrow_sweet bi bi-arrow-left"></i>Back to Home</a><br> <br>'
    });
});

button2.addEventListener('click', () =>{
    Swal.fire({
        showConfirmButton: false,
        timer: 2500,
        width: '600px',
        html: '<h1 class="h1__sweetAlert">Comment sent!</h1><p class="p__sweetAlert">Thanks for comment, I’ll be aswering soon.</p><br><br><a href="../index.html" class="button-sweetAlert"><i class=" arrow_sweet bi bi-arrow-left"></i>Back to Home</a><br> <br>'
    });
});




