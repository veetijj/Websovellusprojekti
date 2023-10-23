
document.getElementById("myButton").addEventListener("click", function() {
    console.log("napista klikattu");
    const dropdown = document.getElementById("myDropdown");
    dropdown.style.display = "block";
}, {capture: true});

document.addEventListener("click", function(event) {
    console.log("dokumentista klikattu");
    const dropdown = document.getElementById("myDropdown");
    const button = document.getElementById("myButton");

    if (event.target !== button && !dropdown.contains(event.target)) {
        dropdown.style.display = "none";
    }
}, {capture: true});