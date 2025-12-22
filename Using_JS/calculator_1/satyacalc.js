<script>
let display = document.getElementById('b');

/* -------- CLEAR -------- */
document.getElementById('ac').addEventListener('click', function () {
    display.innerHTML = "";
});

/* -------- NUMBERS -------- */
document.getElementById('0').addEventListener('click', () => display.innerHTML += "0");
document.getElementById('1').addEventListener('click', () => display.innerHTML += "1");
document.getElementById('2').addEventListener('click', () => display.innerHTML += "2");
document.getElementById('3').addEventListener('click', () => display.innerHTML += "3");
document.getElementById('4').addEventListener('click', () => display.innerHTML += "4");
document.getElementById('5').addEventListener('click', () => display.innerHTML += "5");
document.getElementById('6').addEventListener('click', () => display.innerHTML += "6");
document.getElementById('7').addEventListener('click', () => display.innerHTML += "7");
document.getElementById('8').addEventListener('click', () => display.innerHTML += "8");
document.getElementById('9').addEventListener('click', () => display.innerHTML += "9");

/* -------- OPERATORS -------- */
document.getElementById('+').addEventListener('click', () => display.innerHTML += "+");
document.getElementById('-').addEventListener('click', () => display.innerHTML += "-");
document.getElementById('*').addEventListener('click', () => display.innerHTML += "*");
document.getElementById('/').addEventListener('click', () => display.innerHTML += "/");
document.getElementById('.').addEventListener('click', () => display.innerHTML += ".");

/* -------- DELETE -------- */
document.getElementById('del').addEventListener('click', function () {
    display.innerHTML = display.innerHTML.slice(0, -1);
});

/* -------- EQUAL -------- */
document.getElementById('=').addEventListener('click', function () {
    try {
        display.innerHTML = eval(display.innerHTML);
    } catch {
        display.innerHTML = "Error";
    }
});
</script>
