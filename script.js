// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    // Örnek haberler - bu bölüm gerçek bir veri kaynağından dinamik olarak çekilebilir
    const newsList = document.querySelector('#news-list');
    const newsItems = [
        'Demon Slayer Sezon 3 Çıkış Tarihi Açıklandı!',
        'Yeni Demon Slayer Film Fragmanı Yayınlandı!',
        'Demon Slayer Manga Serisi Final Bölümü Hakkında Detaylar!'
    ];

    newsItems.forEach(news => {
        const li = document.createElement('li');
        li.textContent = news;
        newsList.appendChild(li);
    });
});
