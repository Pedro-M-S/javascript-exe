document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
    showAlert(this);
});

function generateEmail(form) {
    form.elements["email"].value =
        form.elements["first"].value +
        "." +
        form.elements["last"].value +
        Math.floor(Math.random() * 10) +
        "@example.com";
}

function showAlert(form) {
    const weapons = [];
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach(checkbox => {
        weapons.push(checkbox.value);
    });

    let message = "First Name: " + form.elements["first"].value + "\n";
    message += "Last Name: " + form.elements["last"].value + "\n";
    message += "Email: " + form.elements["email"].value + "\n";
    message += "Gender: " + form.elements["gender"].value + "\n";
    message += "Planet: " + form.elements["planet"].value + "\n";
    message += "Weapons: " + weapons.join(", ");

    alert(message);
}