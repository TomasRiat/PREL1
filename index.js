
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






