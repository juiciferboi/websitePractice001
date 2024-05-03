// Select val and but

const val = document.querySelector("#value");
const buts = document.querySelectorAll(".btn");

buts.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            count--;
        } else if (styles.contains("increase")) {
            count++;
        } else {
            count = 0;
        }
        val.textContent = count;
    })
})