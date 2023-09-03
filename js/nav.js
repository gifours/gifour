// Fungsi untuk memuat konten halaman tanpa perlu me-refresh
function loadPage(page) {
    const contentDiv = document.getElementById("content");
    console.log(contentDiv)

    // Hapus konten dari halaman sebelumnya
    contentDiv.innerHTML = '';

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            contentDiv.innerHTML = xhr.responseText;
        }
    };
    xhr.open("GET", page + ".html", true);
    xhr.send();
}

// Tangani perubahan hash URL (navigasi)
window.addEventListener("hashchange", function() {
    const hash = window.location.hash.slice(1); // Menghilangkan karakter "#" dari hash
    loadPage(hash); // Muat halaman yang sesuai
});

// Inisialisasi: Muat halaman awal saat dokumen siap
window.addEventListener("DOMContentLoaded", function() {
    // Manually trigger hashchange event to load initial content based on URL hash
    window.dispatchEvent(new Event("hashchange"));
});