document.addEventListener("DOMContentLoaded", function () {
    const menuForm = document.getElementById("menu-form");
    const menuList = document.getElementById("menu-list");
    const totalPriceEl = document.getElementById("total-price");
    let totalPrice = 0;

    // Event listener untuk form tambah menu
    menuForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Mencegah form dari reload halaman

        // Ambil nilai dari input
        const menuName = document.getElementById("menu-name").value;
        const menuPrice = parseInt(document.getElementById("menu-price").value);

        // Validasi input
        if (menuName && menuPrice > 0) {
            // Tambah item ke daftar menu
            const newRow = document.createElement("tr");
            newRow.innerHTML = `
                <td>${menuName}</td>
                <td>Rp ${menuPrice.toLocaleString()}</td>
            `;
            menuList.appendChild(newRow);

            // Update total harga
            totalPrice += menuPrice;
            totalPriceEl.textContent = `Rp ${totalPrice.toLocaleString()}`;

            // Bersihkan input setelah menambah
            menuForm.reset();
        }
    });
});
// Fungsionalitas untuk tombol navbar pada tampilan mobile
const navbarToggle = document.getElementById("navbar-toggle");
const navbarMenu = document.querySelector("nav ul");

// Event listener untuk tombol navbar
navbarToggle.addEventListener("click", function () {
    // Toggle the 'hidden' class to show/hide the menu
    navbarMenu.classList.toggle("hidden");
});


// Menutup menu ketika link diklik
    const navbarItems = document.querySelectorAll(".navbar-links li a");
    navbarItems.forEach(item => {
        item.addEventListener("click", () => {
            navbarLinks.classList.remove("active");
        });
    });
 