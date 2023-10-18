const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
}

const animateBannerOnScroll = () => {
    // Instead of querying only one banner, query all banners
    const banners = document.querySelectorAll('[id="banner"]');

    banners.forEach(banner => {
        if (isElementInViewport(banner)) {
            const bannerText = banner.querySelector('[id="banner-text"]');
            const h1 = bannerText.querySelector('h1');
            const p = bannerText.querySelector('p');
            const btn1 = bannerText.querySelector('[id="banner-btn-1"]');
            const btn2 = bannerText.querySelector('[id="banner-btn-2"]');
            const video = banner.querySelector('[id="banner-image"]').querySelector('video');

            h1.classList.remove('scroll-hidden');
            p.classList.remove('scroll-hidden');
            btn1.classList.remove('scroll-hidden');
            btn2.classList.remove('scroll-hidden');
            video.classList.remove('scroll-hidden');

            h1.style.animation = 'zoomFadeRotate 1.2s forwards 0.3s';
            p.style.animation = 'zoomFadeRotate 1.2s forwards 0.6s';
            btn1.style.animation = 'zoomFadeRotate 1.2s forwards 0.9s';
            btn2.style.animation = 'zoomFadeRotate 1.2s forwards 1.2s';
            video.style.animation = 'zoomFadeRotate 1.2s forwards 1.5s';
        }
    });
}

// Listen for scroll events
window.addEventListener('scroll', animateBannerOnScroll);

// Initial check in case the element is already in the viewport on load
window.addEventListener('DOMContentLoaded', animateBannerOnScroll);



