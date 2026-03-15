// ==========================================
// LAYOUT COMPONENTS
// ==========================================

const HeaderComponent = () => `
    <header class="bg-white sticky top-0 z-50 nav-shadow">
        <div class="container mx-auto px-6 py-4 flex justify-between items-center">
            <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-blue-600 rounded-md flex items-center justify-center text-white text-xl">
                    <i class="fas fa-snowflake"></i>
                </div>
                <div>
                    <h1 class="font-bold text-lg leading-tight text-blue-900 uppercase">NANDA TEKNIK</h1>
                    <p class="text-xs text-blue-600 font-semibold uppercase tracking-wider">Banyuwangi</p>
                </div>
            </div>

            <nav class="hidden md:flex space-x-8 font-medium" id="navMenu">
                <a href="#home" class="hover:text-blue-600 transition">Beranda</a>
                <a href="#about" class="hover:text-blue-600 transition">Tentang</a>
                <a href="#services" class="hover:text-blue-600 transition">Layanan</a>
                <a href="#pricing" class="hover:text-blue-600 transition">Harga</a>
                <a href="estimasi.html" class="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition shadow-md">Estimasi Biaya</a>
            </nav>

            <button class="md:hidden text-2xl" id="menuBtn">
                <i class="fas fa-bars"></i>
            </button>
        </div>
    </header>
`;

const FooterComponent = () => `
    <footer class="bg-gray-900 text-gray-400 py-16">
        <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
                <div class="flex items-center space-x-3 mb-6">
                    <div class="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white">
                        <i class="fas fa-snowflake"></i>
                    </div>
                    <span class="text-white font-bold text-xl uppercase">Nanda Teknik</span>
                </div>
                <p class="mb-6">Jalan Gajah Mada, Banyuwangi, Jawa Timur. Ahli servis AC terpercaya Anda.</p>
                <div class="flex space-x-4">
                    <a href="#" class="hover:text-blue-500 text-2xl"><i class="fab fa-facebook"></i></a>
                    <a href="#" class="hover:text-pink-500 text-2xl"><i class="fab fa-instagram"></i></a>
                    <a href="https://wa.me/628123456789" class="hover:text-green-500 text-2xl"><i class="fab fa-whatsapp"></i></a>
                </div>
            </div>

            <div class="md:pl-10">
                <h4 class="text-white font-bold mb-6 uppercase">Navigasi</h4>
                <ul class="space-y-4">
                    <li><a href="#home" class="hover:text-white transition">Beranda</a></li>
                    <li><a href="#about" class="hover:text-white transition">Tentang Kami</a></li>
                    <li><a href="#services" class="hover:text-white transition">Layanan</a></li>
                    <li><a href="estimasi.html" class="hover:text-white transition">Estimasi Biaya</a></li>
                </ul>
            </div>

            <div>
                <h4 class="text-white font-bold mb-6 uppercase">Lokasi Workshop</h4>
                <div class="rounded-xl overflow-hidden h-48 bg-gray-800">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126354.27641243179!2d114.30155695!3d-8.2263435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd1453396d19129%3A0x4030bf41d017630!2sBanyuwangi%2C%20Kabupaten%20Banyuwangi%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1700000000000" 
                        width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy">
                    </iframe>
                </div>
            </div>
        </div>
        <div class="container mx-auto px-6 mt-16 pt-8 border-t border-gray-800 text-center text-sm">
            <p>© 2026 Mandiri Usaha Teknik (Nanda Teknik Banyuwangi). All rights reserved.</p>
        </div>
    </footer>
`;

// ==========================================
// INITIALIZATION LOGIC
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Render Layout
    const headerElement = document.getElementById('main-header');
    const footerElement = document.getElementById('main-footer');
    
    if (headerElement) headerElement.innerHTML = HeaderComponent();
    if (footerElement) footerElement.innerHTML = FooterComponent();

    // 2. Initialize AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-in-out'
        });
    }

    // 3. Slider Logic (Z-Index fix agar teks tidak tertutup)
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    if (slides.length > 0) {
        setInterval(() => {
            slides[currentSlide].classList.replace('opacity-100', 'opacity-0');
            slides[currentSlide].style.zIndex = "0";
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.replace('opacity-0', 'opacity-100');
            slides[currentSlide].style.zIndex = "10";
        }, 5000);
    }

    // 4. Mobile Menu Logic (Event Delegation agar lebih aman)
    document.addEventListener('click', (e) => {
        const menuBtn = document.getElementById('menuBtn');
        const nav = document.getElementById('navMenu');

        if (menuBtn && menuBtn.contains(e.target)) {
            nav.classList.toggle('hidden');
            nav.classList.toggle('flex');
            nav.classList.toggle('flex-col');
            nav.classList.toggle('absolute');
            nav.classList.toggle('top-full');
            nav.classList.toggle('left-0');
            nav.classList.toggle('w-full');
            nav.classList.toggle('bg-white');
            nav.classList.toggle('p-6');
            nav.classList.toggle('shadow-lg');
            nav.classList.toggle('z-50');
        }
    });
});