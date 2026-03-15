const App = {
    config: {
        isProduction: false,
        cdn: {
            bootstrapCSS: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css",
            bootstrapJS: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js",
            fontAwesome: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        }
    },

    injectDependencies: function() {
        const paths = this.config.cdn;
        const head = document.head;
        
        const linkBS = document.createElement('link');
        linkBS.rel = 'stylesheet'; linkBS.href = paths.bootstrapCSS;
        head.appendChild(linkBS);

        const linkFA = document.createElement('link');
        linkFA.rel = 'stylesheet'; linkFA.href = paths.fontAwesome;
        head.appendChild(linkFA);

        // Custom Styling
        const style = document.createElement('style');
        style.textContent = `
            body { background-color: #f8f9fa; color: #333; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
            .navbar { background: #ffffff !important; box-shadow: 0 4px 12px rgba(0,0,0,0.08) !important; }
            .profile-img { width: 100%; max-width: 250px; border-radius: 15px; box-shadow: 0 10px 20px rgba(0,0,0,0.1); }
            .service-card { transition: all 0.3s; border: none; border-radius: 12px; background: #fff; text-align: center; padding: 20px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); text-decoration: none; color: inherit; display: block; }
            .service-card:hover { transform: translateY(-5px); box-shadow: 0 8px 15px rgba(0,0,0,0.1); background: #0d6efd; color: #fff; }
            .service-card i { font-size: 2.5rem; margin-bottom: 10px; color: #0d6efd; }
            .service-card:hover i { color: #fff; }
            .partner-logo { filter: grayscale(100%); opacity: 0.5; transition: 0.3s; width: 100px; }
            .partner-logo:hover { filter: grayscale(0%); opacity: 1; }
            footer { background: #212529; color: #ccc; }
            .map-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 10px; }
            .map-container iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; border:0; }
        `;
        head.appendChild(style);

        const scriptBS = document.createElement('script');
        scriptBS.src = paths.bootstrapJS; scriptBS.defer = true;
        document.body.appendChild(scriptBS);
    },

    initMeta: function() {
        const meta = `
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Nanda Krisbianto | Portofolio Teknik</title>
        `;
        document.head.insertAdjacentHTML('afterbegin', meta);
    },

    initHeader: function() {
        document.getElementById('main-header').innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-light sticky-top py-3">
            <div class="container">
                <a class="navbar-brand fw-bold text-primary" href="#">NANDA TEKNIK BANYUWANGI</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><a class="nav-link fw-semibold" href="#">Home</a></li>
                        <li class="nav-item"><a class="nav-link fw-semibold" href="#layanan">Jasa</a></li>
                        <li class="nav-item"><a class="nav-link fw-semibold" href="#portofolio">Portofolio</a></li>
                        <li class="nav-item ms-lg-3"><a class="btn btn-primary rounded-pill px-4" href="https://wa.me/628123456789">WhatsApp</a></li>
                    </ul>
                </div>
            </div>
        </nav>`;
    },

    initFooter: function() {
        document.getElementById('main-footer').innerHTML = `
        <footer class="pt-5 pb-3">
            <div class="container">
                <div class="row g-4">
                    <div class="col-md-4">
                        <h5 class="text-white fw-bold mb-3">Kontak & Alamat</h5>
                        <p class="small"><i class="fa-solid fa-location-dot me-2"></i>Banyuwangi, Jawa Timur, Indonesia. 68421</p>
                        <p class="small"><i class="fa-solid fa-phone me-2"></i> +6282331201148</p>
                        <p class="small"><i class="fa-solid fa-envelope me-2"></i> nandateknik02@gmail.com</p>
                    </div>
                    <div class="col-md-4">
                        <h5 class="text-white fw-bold mb-3">Layanan Jasa</h5>
                        <ul class="list-unstyled small">
                            <li><a href="#" class="text-decoration-none text-secondary">CCTV System</a></li>
                            <li><a href="#" class="text-decoration-none text-secondary">Servis AC & Pendingin</a></li>
                            <li><a href="#" class="text-decoration-none text-secondary">Software & Web Apps</a></li>
                            <li><a href="#" class="text-decoration-none text-secondary">Networking & IT</a></li>
                            <li><a href="#" class="text-decoration-none text-secondary">Electrical & Mechanical</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4">
                        <h5 class="text-white fw-bold mb-3">Lokasi Maps</h5>
                        <div class="map-container">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.88785899!2d114.375!3d-8.19!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMTEnMjQuMCJTIDExNMKwMjInMzAuMCJF!5e0!3m2!1sid!2sid!4v1640000000000" allowfullscreen="" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
                <hr class="mt-4 border-secondary">
                <p class="text-center small text-secondary">© 2026 Mandiri Usaha Teknik. Created by Nanda Krisbianto.</p>
            </div>
        </footer>`;
    },

    init: function() {
        this.initMeta();
        this.injectDependencies();
        this.initHeader();
        this.initFooter();
    }
};
document.addEventListener('DOMContentLoaded', () => App.init());