document.addEventListener("DOMContentLoaded", function() {
    console.log("Website Warung Kopi Mimiw siap digunakan!");

    let menuLinks = document.querySelectorAll("nav ul li a");
    let menuTersedia = ["kopi hitam", "teh manis", "bawang krispy", "sosis bakar"]; // List menu yang tersedia

    menuLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            let targetSection = document.querySelector(this.getAttribute("href"));
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Fitur Pemesanan
    document.getElementById("pesanBtn").addEventListener("click", function() {
        let pesanan = prompt("Silakan masukkan menu yang ingin Anda pesan:");
        if (pesanan) {
            pesanan = pesanan.toLowerCase().trim();
            if (menuTersedia.includes(pesanan)) {
                alert("Pesanan Anda untuk " + pesanan + " telah diterima!");
            } else {
                alert("Maaf, menu tersebut tidak ada dalam list kami.");
            }
        }
    });
});