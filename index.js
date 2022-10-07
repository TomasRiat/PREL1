
const button__contact1 = document.getElementById('button__contact1')


const colorSwitch = document.querySelector('#switch input[type="checkbox"]');
function changetheme(ev){
    if(ev.target.checked){
        document.documentElement.setAttribute('theme', 'light');
    } else {
        document.documentElement.setAttribute('theme', 'dark');
    }
}
colorSwitch.addEventListener('change', changetheme);


localStorage.setItem('change', changetheme);


button__contact1.addEventListener('click',() =>{
    Swal.fire({
        
        showConfirmButton: false,
        width: '600px',
        html: '<h1 class="h1__sweetAlert">Message sent!</h1><p class="p__sweetAlert">Thanks for contacting me, I’ll be aswering soon.</p><br><br><a href="../index.html" class="button-sweetAlert"><i class=" arrow_sweet bi bi-arrow-left"></i>Back to Home</a><br> <br>'

    })
})





