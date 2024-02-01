document.addEventListener("DOMContentLoaded", function () {
    const firstName = document.getElementById("firstname");
    const lastName = document.getElementById("lastname");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const warningFn = document.getElementById("alertfn");
    const warningLn = document.getElementById("alertln");
    const warningE = document.getElementById("alerte");
    const warningP = document.getElementById("alertp");
    const button = document.getElementById("button");

    function showErrorWarning(inputElement, warningElement) {
        warningElement.classList.add("active");
        inputElement.classList.add("active");
    }

    function hideErrorWarning(inputElement, warningElement) {
        warningElement.classList.remove("active");
        inputElement.classList.remove("active");
    }

    function validateAndShowError(inputValue, inputElement, warningElement) {
        if (inputValue.trim() === "") {
            showErrorWarning(inputElement, warningElement);
            hasError = true;
        } else {
            hideErrorWarning(inputElement, warningElement);
        }
    }

    button.addEventListener("click", function (e) {
        e.preventDefault();

        // Inisialisasi variabel error
        let hasError = false;

        // Validasi dan tampilkan pesan error
        validateAndShowError(firstName.value, firstName, warningFn);
        validateAndShowError(lastName.value, lastName, warningLn);

        const emailValue = email.value.trim();
        if (emailValue === "" || !emailValue.includes("@") || !emailValue.includes(".")) {
            showErrorWarning(email, warningE);
            hasError = true;
        } else {
            hideErrorWarning(email, warningE);
        }

        validateAndShowError(password.value, password, warningP);

        // Tampilkan alert jika tidak ada kesalahan
        if (!hasError) {
            alert("Pendaftaran berhasil!");
            window.location.reload();
        }
    });
});
