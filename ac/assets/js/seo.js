/**
 * SEO & Schema Engine - Mandiri Usaha Teknik (Nanda Teknik Banyuwangi)
 * Versi: 3.0 (Full Optimization)
 * Target: Google Search, Google Maps, Social Media, & Local SEO
 */

const seoData = {
    "index.html": {
        title: "Mandiri Usaha Teknik | Jasa Servis AC Profesional Banyuwangi",
        description: "Mandiri Usaha Teknik (Nanda Teknik) - Spesialis cuci AC, perbaikan, dan bongkar pasang AC di Banyuwangi. Teknisi jujur, harga transparan, dan bergaransi.",
        keywords: "servis ac banyuwangi, cuci ac banyuwangi, nanda teknik banyuwangi, tukang ac banyuwangi, pasang ac banyuwangi, servis ac rogojampi, servis ac genteng",
        url: "https://mandiriusahateknik.com", // Ganti dengan domain asli Anda
        ogImage: "https://mandiriusahateknik.com/assets/img/og-image.jpg",
        
        // --- DATA GEO & LOKASI (Local SEO Signal) ---
        geo: {
            position: "-8.2192;114.3691", // Koordinat Google Maps
            region: "ID-JI",             // Jawa Timur
            placename: "Banyuwangi",
            radius: "25km"
        },

        // --- SCHEMA JSON-LD (Rich Results & Ratings) ---
        schema: {
            "@context": "https://schema.org",
            "@graph": [
                {
                    "@type": "LocalBusiness",
                    "@id": "https://mandiriusahateknik.com/#organization",
                    "name": "Mandiri Usaha Teknik",
                    "alternateName": "Nanda Teknik Banyuwangi",
                    "image": "https://mandiriusahateknik.com/assets/img/logo.png",
                    "telephone": "+628123456789", // Sesuaikan No HP/WA
                    "priceRange": "Rp75.000 - Rp500.000",
                    "url": "https://mandiriusahateknik.com",
                    "hasMap": "https://www.google.com/maps?cid=YOUR_CID_HERE", // Masukkan link Google Maps Bisnis Anda
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Jl. Contoh No. 123", // Alamat Lengkap
                        "addressLocality": "Banyuwangi",
                        "addressRegion": "Jawa Timur",
                        "postalCode": "68411",
                        "addressCountry": "ID"
                    },
                    "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": -8.2192,
                        "longitude": 114.3691
                    },
                    "openingHoursSpecification": {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                        "opens": "08:00",
                        "closes": "17:00"
                    },
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.9",
                        "reviewCount": "128",
                        "bestRating": "5",
                        "worstRating": "1"
                    },
                    "sameAs": [
                        "https://facebook.com/nandateknik",
                        "https://instagram.com/nandateknik"
                    ]
                },
                {
                    "@type": "Service",
                    "serviceType": "Air Conditioning Service",
                    "provider": { "@id": "https://mandiriusahateknik.com/#organization" },
                    "areaServed": [
                        { "@type": "City", "name": "Banyuwangi" },
                        { "@type": "City", "name": "Rogojampi" },
                        { "@type": "City", "name": "Genteng" },
                        { "@type": "City", "name": "Kabalena" }
                    ],
                    "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "Layanan Utama",
                        "itemListElement": [
                            { 
                                "@type": "Offer", 
                                "itemOffered": { 
                                    "@type": "Service", 
                                    "name": "Cuci AC Berkala",
                                    "description": "Pembersihan unit indoor dan outdoor AC untuk menjaga udara tetap bersih dan dingin."
                                } 
                            },
                            { 
                                "@type": "Offer", 
                                "itemOffered": { 
                                    "@type": "Service", 
                                    "name": "Isi Freon R32/R410",
                                    "description": "Pengisian ulang gas freon untuk performa pendinginan maksimal."
                                } 
                            },
                            { 
                                "@type": "Offer", 
                                "itemOffered": { 
                                    "@type": "Service", 
                                    "name": "Bongkar Pasang AC",
                                    "description": "Jasa pindah lokasi AC atau instalasi unit baru dengan rapi dan aman."
                                } 
                            }
                        ]
                    }
                }
            ]
        }
    }
};

/**
 * ENGINE CORE - DO NOT MODIFY BELOW THIS LINE
 */

function applySEO() {
    const path = window.location.pathname.split("/").pop() || "index.html";
    const data = seoData[path];

    if (data) {
        // 1. Update Judul Halaman
        document.title = data.title;

        // 2. Meta Tag Standar & Search Engine Authority
        setMeta("name", "description", data.description);
        setMeta("name", "keywords", data.keywords);
        setMeta("name", "author", "Mandiri Usaha Teknik");
        setMeta("name", "robots", "index, follow");
        setMeta("name", "language", "Indonesian");
        setMeta("name", "revisit-after", "7 days");

        // 3. Facebook / Open Graph (Untuk WA/FB Share)
        setMeta("property", "og:type", "website");
        setMeta("property", "og:url", window.location.href);
        setMeta("property", "og:title", data.title);
        setMeta("property", "og:description", data.description);
        setMeta("property", "og:image", data.ogImage);

        // 4. Twitter Cards
        setMeta("name", "twitter:card", "summary_large_image");
        setMeta("name", "twitter:url", window.location.href);
        setMeta("name", "twitter:title", data.title);
        setMeta("name", "twitter:description", data.description);
        setMeta("name", "twitter:image", data.ogImage);

        // 5. Geo Tags (Bing & Maps SEO)
        if (data.geo) {
            setMeta("name", "geo.position", data.geo.position);
            setMeta("name", "geo.region", data.geo.region);
            setMeta("name", "geo.placename", data.geo.placename);
            setMeta("name", "ICBM", data.geo.position);
        }

        // 6. Canonical Link (Anti-Duplicate Content)
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', window.location.href);

        // 7. Inject Schema JSON-LD
        if (data.schema) {
            const oldScript = document.getElementById('jsonLdSchema');
            if (oldScript) oldScript.remove();

            const script = document.createElement('script');
            script.id = 'jsonLdSchema';
            script.type = 'application/ld+json';
            script.text = JSON.stringify(data.schema);
            document.head.appendChild(script);
        }
    }
}

// Helper untuk Set Meta Tag
function setMeta(attr, name, content) {
    if (!content) return;
    let meta = document.querySelector(`meta[${attr}="${name}"]`);
    if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
}

// SEO Auto-Ping Service (No-Cors Mode)
function pingSearchEngines() {
    console.log("SEO: Initiating auto-crawl signal...");
    const sitemapUrl = `${window.location.origin}/sitemap.xml`;
    
    // Ping Google
    fetch(`https://www.google.com/ping?sitemap=${sitemapUrl}`, { mode: 'no-cors' })
        .then(() => console.log("SEO: Google Ping Sent"))
        .catch(() => {});
        
    // Bing Ping
    fetch(`https://www.bing.com/ping?sitemap=${sitemapUrl}`, { mode: 'no-cors' })
        .then(() => console.log("SEO: Bing Ping Sent"))
        .catch(() => {});
}

// Inisialisasi Saat Halaman Dimuat
document.addEventListener("DOMContentLoaded", () => {
    applySEO();
    // Beri jeda 5 detik untuk ping agar tidak menghambat loading utama
    setTimeout(pingSearchEngines, 5000);
});