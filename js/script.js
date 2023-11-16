// Animation

const subtitleElement = document.querySelector(".subtitle span");
const animationDuration = 5000; // 5 saniye

subtitleElement.addEventListener("animationiteration", () => {
  setTimeout(() => {
    subtitleElement.style.animation = "none";
    void subtitleElement.offsetWidth; // Yeniden boyutlandırmak için gereklidir.
    subtitleElement.style.animation = `moveSubtitle ${animationDuration / 1000}s infinite linear`;
  }, 100);
});


// pouches ve boundles buton durumları

document.addEventListener("DOMContentLoaded", function () {
    // Sayfa yüklendiğinde "POUCHES" kartlarını göster
    showPouches();
});

function showPouches() {
    document.getElementById('pouchesSection').style.display = 'flex';
    document.getElementById('bundlesSection').style.display = 'none';

    // "POUCHES" butonuna aktif sınıf ekle
    document.querySelector('.btn-card.active').classList.remove('active');
    document.querySelector('.btn-card:contains("POUCHES")').classList.add('active');
}

function showBundles() {
    document.getElementById('pouchesSection').style.display = 'none';
    document.getElementById('bundlesSection').style.display = 'flex';

    // "BUNDLES" butonuna aktif sınıf ekle
    document.querySelector('.btn-card.active').classList.remove('active');
    document.querySelector('.btn-card:contains("BUNDLES")').classList.add('active');
}





