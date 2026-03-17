document.addEventListener("DOMContentLoaded", function() {
    // Fungsi untuk load komponen
    function loadComponent(id, path) {
        fetch(path)
            .then(response => response.text())
            .then(data => {
                document.getElementById(id).innerHTML = data;
            })
            .catch(err => console.error('Error loading component:', err));
    }

    // Eksekusi Load
    loadComponent('main-header', 'components/header.html');
    loadComponent('main-footer', 'components/footer.html');
});