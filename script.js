document.addEventListener('DOMContentLoaded', () => {
   const products = [
    { 
        name: "Vela aroma Vainilla", 
        img: "https://i.imgur.com/Pz46v7y.jpeg", 
        images: ["https://i.imgur.com/Pz46v7y.jpeg"], 
        price: { "7oz": 190, "12oz": 310 }, 
        includes: "Vela de VAINILLA, dulce como el aroma a pastel o pan, antidepresiva y potenciadora de energía."
    },
    { 
        name: "Vela aroma Lavanda", 
        img: "https://i.imgur.com/VZMHnRR.jpeg", 
        images: ["https://i.imgur.com/VZMHnRR.jpeg"], 
        price: { "7oz": 190, "12oz": 310 }, 
        includes: "Vela de LAVANDA, elimina la ansiedad, perfecta para conciliar el sueño y fortalecer tu sistema nervioso."
    },
    { 
        name: "Vela aroma Romero", 
        img: "https://i.imgur.com/0RrrjuK.jpeg", 
        images: ["https://i.imgur.com/0RrrjuK.jpeg"], 
        price: { "7oz": 190, "12oz": 310 }, 
        includes: "Vela de ROMERO, limpia y purifica tu ambiente, excelente para aumentar nuestra concentración."
    },
    { 
        name: "Vela aroma Canela", 
        img: "https://i.imgur.com/s0zg9IM.jpeg", 
        images: ["https://i.imgur.com/s0zg9IM.jpeg"], 
        price: { "7oz": 190, "12oz": 310 }, 
        includes: "Vela de CANELA, afrodisíaca, estimulante mental, perfecta para un despeje mental."
    },
    { 
        name: "Vela aroma Café", 
        img: "https://i.imgur.com/AIQ7Y4e.jpeg", 
        images: ["https://i.imgur.com/AIQ7Y4e.jpeg"], 
        price: { "7oz": 190, "12oz": 310 }, 
        includes: "Vela de CAFÉ, aroma intenso e ideal para despertar y empezar tu día."
    },
    { 
        name: "Vela aroma Citronela", 
        img: "https://i.imgur.com/WKckBXW.jpeg", 
        images: ["https://i.imgur.com/WKckBXW.jpeg"], 
        price: { "7oz": 190, "12oz": 310 }, 
        includes: "Vela de CITRONELA, cítrica, ideal para evitar mosquitos y refrescar tu ambiente."
    },
    { 
        name: "Vela aroma Frutos Rojos", 
        img: "https://i.imgur.com/pzaRmEZ.jpeg", 
        images: ["https://i.imgur.com/pzaRmEZ.jpeg"], 
        price: { "7oz": 190, "12oz": 310 }, 
        includes: "Vela de FRUTOS ROJOS, aroma fresco y dulce, ideal para equilibrar el ambiente."
    },
    { 
        name: "Vela Mictlán - Incluye separador de libros", 
        img: "https://i.imgur.com/CHWiCdl.jpeg", 
        images: ["https://i.imgur.com/CHWiCdl.jpeg"], 
        price: { "7oz": 199 }, 
        includes: "Inspirada en el Mictlán mexica, representa la conexión con almas que ya no están en este plano."
    },
    { 
        name: "Vela Coatlicue - Incluye separador de libros", 
        img: "https://i.imgur.com/XU29wEV.jpeg", 
        images: ["https://i.imgur.com/XU29wEV.jpeg"], 
        price: { "7oz": 199 }, 
        includes: "Inspirada en la diosa Coatlicue, dualidad de vida y muerte, generadora de vida en la tierra."
    },
    { 
        name: "Vela Feliz Vuelta al Sol", 
        img: "https://i.imgur.com/7k0x9aU.jpeg", 
        images: ["https://i.imgur.com/7k0x9aU.jpeg"], 
        price: { "6oz": 220, "12oz": 310 }, 
        includes: "Inspirada en el mito griego, esta vela celebra la vida y protege contra malas energías."
    },
    { 
        name: "Vela SOMOS PLANTAS", 
        img: "https://i.imgur.com/uQLAofE.jpeg", 
        images: ["https://i.imgur.com/uQLAofE.jpeg"], 
        price: { "8oz": 230 }, 
        includes: "Combinación de CEREZA y COCO, invita a florecer y cuidarnos como plantas."
    },
    { 
        name: "Vela CONFÍA", 
        img: "https://i.imgur.com/O2mMqod.jpeg", 
        images: ["https://i.imgur.com/O2mMqod.jpeg"], 
        price: { "8oz": 230 }, 
        includes: "Cítrica combinación de TORONJA y BERGAMOTA para descubrir la confianza interior."
    },
    { 
        name: "Vela TE ABRAZO", 
        img: "https://i.imgur.com/1P5jZ7E.jpeg", 
        images: ["https://i.imgur.com/1P5jZ7E.jpeg"], 
        price: { "8oz": 230 }, 
        includes: "Dulce combinación de UVA y MIEL, como un abrazo necesario."
    },
    { 
        name: "Vela VAS A SANAR", 
        img: "https://i.imgur.com/KjiO2cA.jpeg", 
        images: ["https://i.imgur.com/KjiO2cA.jpeg"], 
        price: { "8oz": 230 }, 
        includes: "Suave combinación de INCIENSO y JENGIBRE para recordar que la sanación llega."
    },
    { 
        name: "Vela TODO PASA", 
        img: "https://i.imgur.com/ovWRBve.jpeg", 
        images: ["https://i.imgur.com/ovWRBve.jpeg"], 
        price: { "8oz": 230 }, 
        includes: "Aroma de SÁNDALO y NARANJA para aprender de los procesos."
    },
    { 
        name: "Vela Agua", 
        img: "https://i.imgur.com/4tW2k2F.jpeg", 
        images: ["https://i.imgur.com/4tW2k2F.jpeg"], 
        price: { "8oz": 270 }, 
        includes: "Combinación de COCO y BERGAMOTA, ayuda a fluir y aceptarse."
    },
    { 
        name: "Vela Fuego", 
        img: "https://i.imgur.com/uZhhLoN.jpeg", 
        images: ["https://i.imgur.com/uZhhLoN.jpeg"], 
        price: { "8oz": 270 }, 
        includes: "FRUTOS ROJOS y CANELA, para recordar el fuego interior y la pasión."
    },
    { 
        name: "Vela Aire", 
        img: "https://i.imgur.com/mC54fXw.jpeg", 
        images: ["https://i.imgur.com/mC54fXw.jpeg"], 
        price: { "8oz": 270 }, 
        includes: "LAVANDA y EUCALIPTO, unión de razón y emoción para creatividad."
    },
    { 
        name: "Vela Tierra", 
        img: "https://i.imgur.com/JXXCGh5.jpeg", 
        images: ["https://i.imgur.com/JXXCGh5.jpeg"], 
        price: { "8oz": 270 }, 
        includes: "Vainilla y Cedro, equilibrio con el entorno y fuerza para florecer."
    },
    { 
        name: "Vela PLIS CUÍDAME DE LOS CULEROS", 
        img: "https://i.imgur.com/VHSr7dM.jpeg", 
        images: ["https://i.imgur.com/VHSr7dM.jpeg"], 
        price: { "12oz": 310 }, 
        includes: "Naranja y Romero, para mantenernos activas e intuitivas."
    }
];

    const cart = [];
    let total = 0;
    let currentSlide = 0;
    let selectedProduct = null;

    // Render products
    function displayProducts() {
        const menu = document.getElementById('menu');
        menu.innerHTML = '';
        products.forEach((product, index) => {
            const productItem = document.createElement('div');
            productItem.classList.add('product-item');
            productItem.innerHTML = `
                <img src="${product.img}" alt="${product.name}" onclick="showProductModal(${index})">
                <h3>${product.name} 🌸</h3>
                <p>${Object.keys(product.price).map(size => `${size}: $${product.price[size].toLocaleString("es-MX")} MXN`).join(" / ")}</p>
                <p>${product.includes}</p>
            `;
            menu.appendChild(productItem);
        });
    }

    // Show product modal
    window.showProductModal = function (index) {
        selectedProduct = products[index];
        const carouselImages = document.getElementById('carousel-images');
        const productDetails = document.getElementById('product-details');
        
        const priceOptions = Object.keys(selectedProduct.price).map(size => `
            <div>
                <label>
                    ${size} - $${selectedProduct.price[size].toLocaleString("es-MX")} MXN
                    <input type="number" id="quantity-${size}" placeholder="Cantidad" min="1">
                </label>
            </div>
        `).join('');

        carouselImages.innerHTML = selectedProduct.images.map(img => `<img src="${img}" alt="${selectedProduct.name}" onclick="showZoomedImage('${img}')">`).join('');
        productDetails.innerHTML = `
            <h3>${selectedProduct.name} 🌟</h3>
            <div>${priceOptions}</div>
            <p>${selectedProduct.includes} ✨</p>
            <button id="add-to-cart-btn">Agregar al carrito</button>
        `;
        currentSlide = 0;
        updateCarousel();
        toggleProductModal();

        document.getElementById('add-to-cart-btn').addEventListener('click', addToCart);
    };

    // Add product to cart
    function addToCart() {
        const quantities = Object.keys(selectedProduct.price).map(size => {
            const quantity = parseInt(document.getElementById(`quantity-${size}`).value) || 0;
            return { size, quantity, price: selectedProduct.price[size] };
        }).filter(item => item.quantity > 0);

        quantities.forEach(({ size, quantity, price }) => {
            const existingProduct = cart.find(item => item.name === selectedProduct.name && item.size === size);
            if (existingProduct) {
                existingProduct.quantity += quantity;
            } else {
                cart.push({ name: selectedProduct.name, price, size, quantity });
            }
        });

        updateCart();
        toggleProductModal();
        alert(`Producto agregado al carrito: ${selectedProduct.name}`);
    }

    // Remove product from cart
    window.removeFromCart = function (productName, size) {
        const productIndex = cart.findIndex(item => item.name === productName && item.size === size);
        if (productIndex !== -1) {
            cart.splice(productIndex, 1);
        }
        updateCart();
    };

    // Update cart
    function updateCart() {
        const cartItemsSection = document.getElementById('cart-items');
        const cartTotal = document.getElementById('cart-total');
        cartItemsSection.innerHTML = '';
        total = 0;

        cart.forEach(item => {
            cartItemsSection.innerHTML += `<p>${item.name} (${item.size}) - $${item.price.toLocaleString("es-MX")} MXN x ${item.quantity} = $${(item.price * item.quantity).toLocaleString("es-MX")} MXN <button class="eliminar-btn" onclick="removeFromCart('${item.name}', '${item.size}')">Eliminar</button></p>`;
            total += item.price * item.quantity;
        });

        cartTotal.textContent = `Total: $${total.toLocaleString("es-MX")} MXN`;
        updatePayPalForm(total);
    }

    // Update PayPal form
    function updatePayPalForm(totalAmount) {
        const paypalForm = document.getElementById('paypal-form');
        paypalForm.innerHTML = `
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                <input type="hidden" name="cmd" value="_xclick" />
                <input type="hidden" name="business" value="gascagtz@gmail.com" />
                <input type="hidden" name="currency_code" value="MXN" />
                <input type="hidden" name="amount" value="${totalAmount}" />
                <input type="hidden" name="item_name" value="${cart.map(item => `${item.name} (${item.size}, ${item.quantity})`).join(', ')}" />
                <input type="image" src="https://www.paypalobjects.com/webstatic/en_US/i/btn/png/silver-pill-paypal-44px.png" border="0" name="submit" title="Pay with PayPal" alt="PayPal - The safer, easier way to pay online!" />
            </form>
        `;
    }

    // Confirm order via WhatsApp
    window.confirmByWhatsApp = function () {
        const deliveryAddress = document.getElementById('delivery-address').value;
        const notes = document.getElementById('notes').value;
        const whatsappMessage = cart.map(item => `${item.quantity} x ${item.name} (${item.size}) - $${item.price.toLocaleString("es-MX")} MXN`).join('\n');
        const finalMessage = `Pedido:\n${whatsappMessage}\nTotal: $${total.toLocaleString("es-MX")} MXN\nDirección de entrega: ${deliveryAddress}\nNotas: ${notes}`;
        const whatsappUrl = `https://wa.me/525540694702?text=${encodeURIComponent(finalMessage)}`;
        window.open(whatsappUrl, '_blank');
    };

    // Update carousel position
    function updateCarousel() {
        const carouselImages = document.getElementById('carousel-images');
        carouselImages.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    window.nextSlide = function () {
        const totalSlides = selectedProduct.images.length;
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    };

    window.prevSlide = function () {
        const totalSlides = selectedProduct.images.length;
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel();
    };

    displayProducts(); // Initial product render
});

// Toggle Cart Visibility
function toggleCart() {
    const cart = document.getElementById('cart');
    cart.style.display = cart.style.display === 'none' || cart.style.display === '' ? 'block' : 'none';
}

// Toggle Product Modal Visibility
function toggleProductModal() {
    const modal = document.getElementById('product-modal');
    modal.style.display = modal.style.display === 'none' || modal.style.display === '' ? 'block' : 'none';
}

// Close Modal or Zoomed Image when clicking outside
window.onclick = function (event) {
    const productModal = document.getElementById('product-modal');
    const zoomedImage = document.getElementById('zoomed-image');
    if (event.target === productModal) {
        productModal.style.display = 'none';
    }
    if (event.target === zoomedImage) {
        zoomedImage.classList.remove('show');
    }
};
