const Switch_Mode = document.getElementById('switch');
const Inner_text = document.getElementById('inner-text');
Mode.onclick = function () {
    document.body.classList.toggle('dark-mode');
    Switch_Mode.classList.toggle('switch-active');
    Inner_text.classList.toggle('Inner-text-active');
    if (document.body.classList.contains('dark-mode')) {
        Inner_text.innerHTML = 'Light';
    }
    else {
        Inner_text.innerHTML = 'Dark';
    }
}