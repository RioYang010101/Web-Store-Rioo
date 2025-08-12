const productList = document.getElementById("product-list");
const WA_NUMBER = "6282116656234"; // Nomor WA kamu

fetch("products.json")
    .then(res => res.json())
    .then(products => {
        products.forEach(product => {
            const card = document.createElement("div");
            card.classList.add("product");
            card.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="price">Rp ${product.price.toLocaleString()}</p>
                <p>${product.desc}</p>
                <a class="btn-order" href="https://wa.me/${WA_NUMBER}?text=Halo%20saya%20mau%20beli%20${encodeURIComponent(product.name)}" target="_blank">Pesan via WhatsApp</a>
            `;
            productList.appendChild(card);
        });
    })
    .catch(err => {
        productList.innerHTML = "<p>Gagal memuat produk.</p>";
        console.error(err);
    });