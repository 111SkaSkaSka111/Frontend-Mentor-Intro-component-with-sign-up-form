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

    button.addEventListener("click", function (e) {
        e.preventDefault();

        // Inisialisasi variabel error
        let hasError = false;

        // Cek apakah firstName kosong
        if (firstName.value.trim() === "") {
            warningFn.classList.add("active");
            firstName.classList.add("active");
            hasError = true;
        } else {
            warningFn.classList.remove("active");
            firstName.classList.remove("active");
        }

        // Cek apakah lastName kosong
        if (lastName.value.trim() === "") {
            warningLn.classList.add("active");
            lastName.classList.add("active");
            hasError = true;
        } else {
            warningLn.classList.remove("active");
            lastName.classList.remove("active");
        }

        // Cek apakah email kosong atau tidak mengandung @ dan .
        if (email.value.trim() === "" || !email.value.includes("@") || !email.value.includes(".")) {
            warningE.classList.add("active");
            email.classList.add("active");
            hasError = true;
        } else {
            warningE.classList.remove("active");
            email.classList.remove("active");
        }

        // Cek apakah password kosong
        if (password.value.trim() === "") {
            warningP.classList.add("active");
            password.classList.add("active");
            hasError = true;
        } else {
            warningP.classList.remove("active");
            password.classList.remove("active");
        }

        // Tampilkan alert jika tidak ada kesalahan
        if (!hasError) {
            alert("Pendaftaran berhasil!");
            window.location.reload();
        }
    });
});
