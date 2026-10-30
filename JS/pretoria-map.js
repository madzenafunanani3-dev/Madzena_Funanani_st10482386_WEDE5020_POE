L.TileLayer.prototype.options.referrerPolicy =
    "strict-origin-when-cross-origin";
const map = L.map("pretoriaMap").setView(
    [-25.7576, 28.1370],
    14
);

// Load the map tiles
L.tileLayer(
    "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
    }
).addTo(map);

// Add a marker for central Pretoria
const marker = L.marker([-25.7569, 28.1370]).addTo(map);

// Show information when the marker is clicked
marker.bindPopup(
    "<b>76 Osler street</b><br>Danville, Pretoria<br>Digital Cashflow S.A."
);
