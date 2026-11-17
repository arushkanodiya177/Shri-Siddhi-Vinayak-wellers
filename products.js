const products = [
  { id: 1, name: 'Kundan Polki Necklace', category: 'Gold', description: 'An exquisite 22k gold necklace featuring uncut Polki diamonds and traditional Kundan work.', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop' },
  { id: 2, name: 'Diamond Solitaire Ring', category: 'Diamond', description: 'A stunning brilliant-cut solitaire diamond ring set in a classic white gold band.', image: 'https://images.unsplash.com/photo-1598560917505-59a3ad559071?q=80&w=800&auto=format&fit=crop' },
  { id: 3, name: 'Royal Bridal Choker Set', category: 'Bridal', description: 'A majestic bridal choker set adorned with rubies, emeralds, and cascading pearls.', image: 'https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?q=80&w=800&auto=format&fit=crop' },
  { id: 4, name: 'Diamond Drop Earrings', category: 'Diamond', description: 'Elegant diamond drop earrings crafted to catch the light from every angle.', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop' },
  { id: 5, name: 'Traditional Gold Bangles', category: 'Gold', description: 'A set of intricately carved 22k gold bangles, perfect for festive occasions.', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop' },
  { id: 6, name: 'Emerald Statement Ring', category: 'Diamond', description: 'A bold statement ring featuring a central emerald surrounded by diamond halos.', image: 'https://images.unsplash.com/photo-1605100804763-247f67b2548e?q=80&w=800&auto=format&fit=crop' },
  { id: 7, name: 'Temple Jewellery Set', category: 'Bridal', description: 'A divine temple jewellery set inspired by South Indian heritage and architecture.', image: 'https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?q=80&w=800&auto=format&fit=crop' },
  { id: 8, name: 'Classic Gold Chain', category: 'Gold', description: 'A versatile and elegantly designed gold chain for everyday luxury.', image: 'https://images.unsplash.com/photo-1599643478514-4a4e6a4a9c4c?q=80&w=800&auto=format&fit=crop' }
];

const galleryItems = [
  { id: 1, image: 'https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?q=80&w=800&auto=format&fit=crop' },
  { id: 2, image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop' },
  { id: 3, image: 'https://images.unsplash.com/photo-1598560917505-59a3ad559071?q=80&w=800&auto=format&fit=crop' },
  { id: 4, image: 'https://images.unsplash.com/photo-1605100804763-247f67b2548e?q=80&w=800&auto=format&fit=crop' },
  { id: 5, image: 'https://images.unsplash.com/photo-1599643478514-4a4e6a4a9c4c?q=80&w=800&auto=format&fit=crop' },
  { id: 6, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop' }
];

const whatsappBase = 'https://wa.me/918085512712?text=';

document.addEventListener('DOMContentLoaded', () => {
  const productGrid = document.getElementById('product-grid');
  const noResults = document.getElementById('no-results');
  const searchInput = document.getElementById('search-input');
  const filterButtons = document.querySelectorAll('#filter-buttons .filter-btn');

  if (productGrid) {
    let currentCategory = 'all';
    let currentSearch = '';

    const urlParams = new URLSearchParams(window.location.search);
    const urlCategory = urlParams.get('category');
    if (urlCategory) {
      currentCategory = urlCategory;
      filterButtons.forEach(btn => {
        if (btn.dataset.category === urlCategory) btn.classList.add('active');
        else btn.classList.remove('active');
      });
    }

    const renderProducts = () => {
      let filtered = products;
      if (currentCategory !== 'all') filtered = filtered.filter(p => p.category === currentCategory);
      if (currentSearch) {
        const searchLower = currentSearch.toLowerCase();
        filtered = filtered.filter(p => p.name.toLowerCase().includes(searchLower) || p.category.toLowerCase().includes(searchLower));
      }

      productGrid.innerHTML = '';
      if (filtered.length === 0) {
        noResults.classList.remove('hidden');
      } else {
        noResults.classList.add('hidden');
        filtered.forEach((product, index) => {
          const card = document.createElement('div');
          card.classList.add('product-card', 'reveal');
          card.style.transitionDelay = `${index * 0.1}s`;
          card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <div class="product-info">
              <p class="product-category">${product.category}</p>
              <h3>${product.name}</h3>
              <p class="product-desc">${product.description}</p>
              <div class="product-actions">
                <button class="btn btn-small btn-primary view-design-btn" data-id="${product.id}">View Design</button>
                <a href="${whatsappBase}${encodeURIComponent(`Hello, I am interested in the ${product.name}.`)}" class="btn btn-small btn-outline" target="_blank">Enquire</a>
              </div>
            </div>
          `;
          productGrid.appendChild(card);
        });

        document.querySelectorAll('.reveal').forEach(el => {
          if (!el.classList.contains('visible')) {
            const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
            }, { threshold: 0.1 });
            observer.observe(el);
          }
        });

        document.querySelectorAll('.view-design-btn').forEach(btn => {
          btn.addEventListener('click', () => window.openModal(parseInt(btn.dataset.id)));
        });
      }
    };

    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.dataset.category;
        renderProducts();
      });
    });

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value;
        renderProducts();
      });
    }

    renderProducts();

    const modal = document.getElementById('product-modal');
    const closeModal = document.getElementById('close-modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalCategory = document.getElementById('modal-category');
    const modalDesc = document.getElementById('modal-desc');
    const modalWhatsapp = document.getElementById('modal-whatsapp');
    const modalEnquiry = document.getElementById('modal-enquiry');

    window.openModal = (id) => {
      const product = products.find(p => p.id === id);
      if (!product) return;
      modalImg.src = product.image;
      modalTitle.textContent = product.name;
      modalCategory.textContent = product.category;
      modalDesc.textContent = product.description;
      modalWhatsapp.href = whatsappBase + encodeURIComponent(`Hello, I am interested in the ${product.name}.`);
      modalEnquiry.href = `enquiry.html?design=${encodeURIComponent(product.name)}&category=${encodeURIComponent(product.category)}`;
      modal.classList.add('open');
    };

    if (closeModal) closeModal.addEventListener('click', () => modal.classList.remove('open'));
    if (modal) modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('open'); });
  }

  const newDesignsGrid = document.getElementById('new-designs-grid');
  if (newDesignsGrid) {
    products.slice(0, 3).forEach(product => {
      const card = document.createElement('div');
      card.classList.add('product-card');
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <div class="product-info">
          <p class="product-category">${product.category}</p>
          <h3>${product.name}</h3>
          <p class="product-desc">${product.description}</p>
          <a href="collections.html" class="btn btn-small btn-primary">View Details</a>
        </div>
      `;
      newDesignsGrid.appendChild(card);
    });
  }

  const galleryGrid = document.getElementById('gallery-grid');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeLightbox = document.getElementById('close-lightbox');

  if (galleryGrid) {
    galleryItems.forEach(item => {
      const div = document.createElement('div');
      div.classList.add('gallery-item', 'reveal');
      div.innerHTML = `<img src="${item.image}" alt="Gallery Image" loading="lazy">`;
      div.addEventListener('click', () => {
        lightboxImg.src = item.image;
        lightbox.classList.add('open');
      });
      galleryGrid.appendChild(div);
    });

    if (closeLightbox) closeLightbox.addEventListener('click', () => lightbox.classList.remove('open'));
    if (lightbox) lightbox.addEventListener('click', (e) => { if (e.target === lightbox) lightbox.classList.remove('open'); });
  }
});
