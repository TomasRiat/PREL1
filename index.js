const toggle = document.getElementById('toggleDark');
const button = document.getElementById('buttonContact');

toggle.addEventListener('click', function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        toggle.src = "../assets/img/sun.png"
    }else{
        toggle.src = "../assets/img/moon.png"
    }
});



button.onclick('click', () =>{
    Swal.fire({
        showConfirmButton: false,
        width: '600px',
        html: '<h1 class="h1__sweetAlert">Message sent!</h1><p class="p__sweetAlert">Thanks for contacting me, I’ll be aswering soon.</p><br><br><a href="../index.html" class="button-sweetAlert"><i class=" arrow_sweet bi bi-arrow-left"></i>Back to Home</a><br> <br>'
    });
});





