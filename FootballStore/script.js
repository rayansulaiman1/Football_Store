// ---------- DATA STRUCTURE WITH PHOTOS ----------
const categories = [
    { id: 'national', name: 'National Teams', icon: '🌍' },
    { id: 'club', name: 'Club Giants', icon: '🏆' },
    { id: 'retro', name: 'Retro Legends', icon: '⏳' },
    { id: 'special', name: 'Special editions', icon: '✨' }
];

const products = [
    // national teams with photos
    { 
        id: 1, 
        name: 'Brazil 2026', 
        categoryId: 'national', 
        price: 89, 
        emoji: '🇧🇷',
        photo: 'https://th.bing.com/th/id/OIP.FZGqR3VClcXDRNhRMaDfdwHaHa?w=196&h=196&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' // Yellow jersey
    },
    { 
        id: 2, 
        name: 'Germany classic', 
        categoryId: 'national', 
        price: 79, 
        emoji: '🇩🇪',
        photo: 'https://th.bing.com/th/id/OIP.DhfzWB2FEGUmJiwZyi4wLwHaHa?w=188&h=188&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' // White/Black jersey
    },
    { 
        id: 3, 
        name: 'Argentina away', 
        categoryId: 'national', 
        price: 95, 
        emoji: '🇦🇷',
        photo: 'https://th.bing.com/th/id/OIP.WthijjyjoF48A8P_AV4LZAHaHa?w=190&h=190&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' // Blue jersey
    },
    { 
        id: 4, 
        name: 'France home', 
        categoryId: 'national', 
        price: 85, 
        emoji: '🇫🇷',
        photo: 'https://th.bing.com/th/id/OIP.WTHhlObcWnIRC6fSjx4aUwHaHa?w=162&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' // Blue jersey
    },
    
    // club giants with photos
    { 
        id: 5, 
        name: 'Real Madrid home', 
        categoryId: 'club', 
        price: 99, 
        emoji: '👑',
        photo: 'https://th.bing.com/th/id/OIP.ZNaSGoUi8ultzLm_W1_L4wHaHa?w=201&h=200&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' // White jersey
    },
    { 
        id: 6, 
        name: 'FC Bayern', 
        categoryId: 'club', 
        price: 92, 
        emoji: '🇩🇪',
        photo: 'https://th.bing.com/th/id/OIP.RAQ62hY7YQqYbKA0JOFazwHaI4?w=164&h=196&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' // Red jersey
    },
    { 
        id: 7, 
        name: 'Man City away', 
        categoryId: 'club', 
        price: 84, 
        emoji: '🏙️',
        photo: 'https://th.bing.com/th/id/OIP.taPSoSvHUaFUQIKkkV0dHQHaHa?w=175&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' // Blue jersey
    },
    { 
        id: 8, 
        name: 'PSG third', 
        categoryId: 'club', 
        price: 97, 
        emoji: '🇫🇷',
        photo: 'https://th.bing.com/th/id/OIP.VSpS22iysUQr761V3pgbIAHaHa?w=188&h=188&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' // Dark jersey
    },
    { 
        id: 9, 
        name: 'Juventus home', 
        categoryId: 'club', 
        price: 88, 
        emoji: '⚪',
        photo: 'https://th.bing.com/th/id/OIP.g93OMTn4QUUWB67FATOsVQHaJc?w=154&h=197&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' // Striped jersey
    },
    
    // retro legends with photos
    { 
        id: 10, 
        name: 'Netherlands 88', 
        categoryId: 'retro', 
        price: 115, 
        emoji: '🇳🇱',
        photo: 'https://th.bing.com/th/id/OIP.3Wa7J1GuwODWKzJ0kP_EmgHaHa?w=176&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' // Orange jersey
    },
    { 
        id: 11, 
        name: 'Brazil 70', 
        categoryId: 'retro', 
        price: 129, 
        emoji: '🏆',
        photo: 'https://th.bing.com/th/id/OIP.epwDvCzznqTmGYnRi7Zr1AHaGX?w=222&h=191&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' // Yellow retro
    },
    { 
        id: 12, 
        name: 'Mexico 86', 
        categoryId: 'retro', 
        price: 99, 
        emoji: '🇲🇽',
        photo: 'https://th.bing.com/th/id/OIP.eQ2hDDw0Kz8Q2iq19QDVNwHaJ3?w=146&h=194&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' // Green jersey
    },
    { 
        id: 13, 
        name: 'Italy 82', 
        categoryId: 'retro', 
        price: 109, 
        emoji: '🇮🇹',
        photo: 'https://th.bing.com/th?q=Best+Looking+Football+Shirt+Italy&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.3&pid=InlineBlock&rm=3&mkt=en-WW&cc=TH&setlang=en&adlt=strict&t=1&mw=247' // Blue retro
    },
    
    // special editions with photos
    { 
        id: 14, 
        name: 'Al-Ittihaad', 
        categoryId: 'special', 
        price: 120, 
        emoji: '🌟',
        photo: 'https://th.bing.com/th/id/OIP.n-mFd_38iY1lt9dif78zLwHaG8?w=210&h=197&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' // Gold jersey
    },
    { 
        id: 15, 
        name: 'Al-Nassr', 
        categoryId: 'special', 
        price: 135, 
        emoji: '🏅',
        photo: 'https://th.bing.com/th/id/OIP.jGQPy7z7bxHsSpf0KZcKBQHaJO?w=161&h=201&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' // Special edition
    },
    { 
        id: 16, 
        name: 'Al-Hilal', 
        categoryId: 'special', 
        price: 149, 
        emoji: '🐐',
        photo: 'https://th.bing.com/th/id/OIP.weGYDa8auoPVgm1JLUZTsgHaHa?w=205&h=206&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' // Legend jersey
    }
];

// Club-specific photo collection 
const clubPhotos = {
    'Real Madrid': 'https://images.unsplash.com/photo-1580086316916-1ac2f6d3f0d5?w=300&h=300&fit=crop&auto=format&white=1',
    'FC Bayern': 'https://images.unsplash.com/photo-1580086316916-1ac2f6d3f0d5?w=300&h=300&fit=crop&auto=format&red=1',
    'Man City': 'https://images.unsplash.com/photo-1580086316916-1ac2f6d3f0d5?w=300&h=300&fit=crop&auto=format&blue=3',
    'PSG': 'https://images.unsplash.com/photo-1580086316916-1ac2f6d3f0d5?w=300&h=300&fit=crop&auto=format&dark=1',
    'Juventus': 'https://images.unsplash.com/photo-1580086316916-1ac2f6d3f0d5?w=300&h=300&fit=crop&auto=format&stripes=1',
    'Brazil': 'https://images.unsplash.com/photo-1580086316916-1ac2f6d3f0d5?w=300&h=300&fit=crop&auto=format&yellow=1',
    'Germany': 'https://images.unsplash.com/photo-1580086316916-1ac2f6d3f0d5?w=300&h=300&fit=crop&auto=format&white=2',
    'Argentina': 'https://images.unsplash.com/photo-1580086316916-1ac2f6d3f0d5?w=300&h=300&fit=crop&auto=format&blue=1',
    'France': 'https://images.unsplash.com/photo-1580086316916-1ac2f6d3f0d5?w=300&h=300&fit=crop&auto=format&blue=2',
    'Netherlands': 'https://images.unsplash.com/photo-1580086316916-1ac2f6d3f0d5?w=300&h=300&fit=crop&auto=format&orange=1',
    'Mexico': 'https://images.unsplash.com/photo-1580086316916-1ac2f6d3f0d5?w=300&h=300&fit=crop&auto=format&green=1',
    'Italy': 'https://images.unsplash.com/photo-1580086316916-1ac2f6d3f0d5?w=300&h=300&fit=crop&auto=format&blue=4'
};

// ----- STATE -----
let quantities = {};
products.forEach(p => quantities[p.id] = 0);
let activeCategory = 'national';

// ----- DOM elements -----
const categoryContainer = document.getElementById('categoryContainer');
const productGrid = document.getElementById('productGrid');
const activeTitleSpan = document.getElementById('activeCategoryTitle');
const totalSpan = document.getElementById('totalPriceDisplay');
const resetBtn = document.getElementById('resetQuantitiesBtn');

// ----- render categories -----
function renderCategories() {
    let html = '';
    categories.forEach(cat => {
        const activeClass = (cat.id === activeCategory) ? 'active' : '';
        html += `
            <button class="category-btn ${activeClass}" data-cat-id="${cat.id}">
                <i>${cat.icon}</i> ${cat.name}
            </button>
        `;
    });
    categoryContainer.innerHTML = html;

    // attach click listeners
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const catId = this.dataset.catId;
            if (catId) {
                activeCategory = catId;
                renderCategories();
                renderProductGrid();
                updateActiveTitle();
            }
        });
    });
}

// update header title
function updateActiveTitle() {
    const cat = categories.find(c => c.id === activeCategory);
    if (cat) {
        activeTitleSpan.innerText = cat.name;
    }
}

// ----- render product grid with photos -----
function renderProductGrid() {
    const filtered = products.filter(p => p.categoryId === activeCategory);
    
    if (filtered.length === 0) {
        productGrid.innerHTML = `<div class="empty-message">⚽ no products in this category yet</div>`;
        return;
    }

    let gridHtml = '';
    filtered.forEach(prod => {
        const qty = quantities[prod.id] || 0;
        gridHtml += `
            <div class="product-card" data-product-id="${prod.id}">
                <div class="product-image-container">
                    <img src="${prod.photo}" alt="${prod.name}" class="product-photo" loading="lazy">
                    <div class="product-emoji-overlay">${prod.emoji}</div>
                </div>
                <div class="product-name">${prod.name}</div>
                <div class="product-price">€${prod.price}</div>
                <div class="qty-selector">
                    <button class="qty-btn dec-btn" data-id="${prod.id}">−</button>
                    <span class="qty-number" id="qty-${prod.id}">${qty}</span>
                    <button class="qty-btn inc-btn" data-id="${prod.id}">+</button>
                </div>
            </div>
        `;
    });

    productGrid.innerHTML = gridHtml;

    // add event listeners for increment/decrement
    document.querySelectorAll('.inc-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const prodId = Number(this.dataset.id);
            quantities[prodId] = (quantities[prodId] || 0) + 1;
            updateQtyDisplay(prodId);
            updateTotalPrice();
        });
    });

    document.querySelectorAll('.dec-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const prodId = Number(this.dataset.id);
            if (quantities[prodId] > 0) {
                quantities[prodId] -= 1;
                updateQtyDisplay(prodId);
                updateTotalPrice();
            }
        });
    });
}

// update quantity display
function updateQtyDisplay(prodId) {
    const span = document.getElementById(`qty-${prodId}`);
    if (span) {
        span.innerText = quantities[prodId] || 0;
    }
}

// calculate total
function calculateTotal() {
    let total = 0;
    products.forEach(p => {
        const q = quantities[p.id] || 0;
        total += p.price * q;
    });
    return total;
}

// update total price display
function updateTotalPrice() {
    const total = calculateTotal();
    totalSpan.innerText = `€${total}`;
}

// reset all quantities
function resetAllQuantities() {
    products.forEach(p => quantities[p.id] = 0);
    renderProductGrid();
    updateTotalPrice();
}

// ----- initialize app -----
function init() {
    renderCategories();
    renderProductGrid();
    updateActiveTitle();
    updateTotalPrice();

    resetBtn.addEventListener('click', resetAllQuantities);
}

// start the application when page loads
document.addEventListener('DOMContentLoaded', init);