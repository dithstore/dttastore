// script.js - MAIN LOGIC FOR DTTASTORE
document.addEventListener('DOMContentLoaded', function() {
  generateProductCards();
  setupEventListeners();
  console.log('✅ dttastore loaded successfully!');
});

// ===== GENERATE PRODUCT CARDS =====
function generateProductCards() {
  const grid = document.getElementById('productGrid');
  if (!grid) {
    console.error('❌ #productGrid not found!');
    return;
  }
  
  grid.innerHTML = '';
  
  dttastoreData.products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'card';
    card.id = product.id;
    
    card.innerHTML = `
      <div class="icon">${product.icon}</div>
      <h3>${product.title}</h3>
      <p>${product.desc}</p>
    `;
    
    // Border color berdasarkan product color
    card.style.borderLeft = `5px solid ${product.color}`;
    
    // Click event untuk buka modal
    card.addEventListener('click', () => openModal(product.modal));
    
    grid.appendChild(card);
  });
  
  console.log(`✅ Generated ${dttastoreData.products.length} product cards`);
}

// ===== MODAL FUNCTIONS =====
function openModal(modalId) {
  console.log('🔄 Opening modal:', modalId);
  
  // Cek jika modal sudah ada
  let modal = document.getElementById(modalId);
  
  if (!modal) {
    // Generate modal baru
    console.log(`📦 Generating new modal: ${modalId}`);
    modal = generateModal(modalId);
    
    if (!modal) {
      alert('⚠️ Data untuk produk ini belum tersedia');
      return;
    }
  }
  
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  
  // ===== TAMBAHKAN: Setup sticky note setelah modal terbuka =====
  setTimeout(() => {
    setupStickyNote(modalId);
  }, 50);
  
  console.log(`✅ Modal ${modalId} displayed`);
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    console.log(`✅ Modal ${modalId} closed`);
  }
}

function generateModal(modalId) {
  const modalData = dttastoreData.modals[modalId];
  if (!modalData) {
    console.warn(`⚠️ Modal data not found: ${modalId}`);
    return null;
  }
  
  const modalContainer = document.getElementById('modalContainer');
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.id = modalId;
  
  // Generate content berdasarkan modal type
  if (modalData.type === 'tabs') {
    modal.innerHTML = generateTabbedModal(modalData, modalId);
  } else if (modalData.type === 'sections') {
    modal.innerHTML = generateSectionedModal(modalData, modalId);
  } else {
    modal.innerHTML = generateSimpleModal(modalData, modalId);
  }
  
  modalContainer.appendChild(modal);
  console.log(`✅ Generated modal: ${modalId}`);
  return modal;
}
// ===== MODAL CONTENT GENERATORS =====
function generateTabbedModal(data, modalId) {
  return `
    <div class="modal-wrapper">
      <div class="modal-content">
        <span class="close-btn" onclick="closeModal('${modalId}')">&times;</span>
        
        <div class="modal-header">
          <h2>${data.title}</h2>
          <p>${data.subtitle}</p>
        </div>
        
        <!-- TABS -->
        <div class="tabs">
          ${data.tabs.map((tab, index) => `
            <button class="tab-button ${index === 0 ? 'active' : ''}" 
                    onclick="switchTab('${modalId}', ${index})">
              ${tab.name}
            </button>
          `).join('')}
        </div>
        
        <!-- TAB CONTENT -->
        <div class="tab-content-wrapper">
          ${data.tabs.map((tab, index) => `
                <div class="tab-content ${index === 0 ? 'active' : ''}" id="${modalId}Tab${index}">
                  ${tab.subtitle ? `<div class="tab-subtitle">${tab.subtitle}</div>` : ''}
                  <div class="price-list">
                    ${tab.items.map(item => `
                      <div class="price-item">
                        <div class="plan-details">
                          <div class="plan-name">${item.name}</div>
                          ${item.desc ? `<div class="plan-desc">${item.desc}</div>` : ''}
                        </div>
                        <div class="price">${item.price}</div>
                      </div>
                    `).join('')}
                  </div>
                </div>
          `).join('')}
        </div>
        
        <!-- NOTE (Di luar modal-content) -->
        ${data.note ? `
          <div class="note-sticky-container">
            <div class="note-sticky">
              <p><strong>📌 ${data.note}</strong></p>
            </div>
          </div>
        ` : ''}
      </div>
    </div>
  `;
}

function generateSectionedModal(data, modalId) {
  return `
    <div class="modal-wrapper">
      <div class="modal-content">
        <span class="close-btn" onclick="closeModal('${modalId}')">&times;</span>
        
        <div class="modal-header">
          <h2>${data.title}</h2>
          ${data.subtitle ? `<p>${data.subtitle}</p>` : ''}
        </div>
        
        <div class="section-content-wrapper">
          ${data.sections.map((section, index) => `
            <div class="service-section ${index === 0 ? 'first-section' : ''}">
              <div class="section-header">
                <h3>${section.name}</h3>
                ${section.subtitle ? `<p>${section.subtitle}</p>` : ''}
              </div>
              <div class="price-list">
                ${section.items.map(item => `
                  <div class="price-item">
                    <div class="plan-details">
                      <div class="plan-name">${item.plan}</div>
                      ${item.type ? `<div class="plan-type">${item.type}</div>` : ''}
                    </div>
                    <div class="price">${item.price}</div>
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
        
        <!-- NOTE (Di luar modal-content) -->
        ${data.note ? `
          <div class="note-sticky-container">
            <div class="note-sticky">
              <p><strong>📌 ${data.note}</strong></p>
            </div>
          </div>
        ` : ''}
      </div>
    </div>
  `;
}

function generateSimpleModal(data, modalId) {
  return `
    <div class="modal-wrapper">
      <div class="modal-content">
        <span class="close-btn" onclick="closeModal('${modalId}')">&times;</span>
        
        <div class="modal-header">
          <h2>${data.title}</h2>
          ${data.subtitle ? `<p>${data.subtitle}</p>` : ''}
        </div>
        
        <div class="note">
          <p>Modal untuk produk ini sedang dalam pengembangan...</p>
        </div>
      </div>
    </div>
  `;
}

// ===== TAB FUNCTIONALITY =====
function switchTab(modalId, tabIndex) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  
  const tabs = modal.querySelectorAll('.tab-button');
  const contents = modal.querySelectorAll('.tab-content');
  
  tabs.forEach(tab => tab.classList.remove('active'));
  contents.forEach(content => content.classList.remove('active'));
  
  if (tabs[tabIndex]) tabs[tabIndex].classList.add('active');
  if (contents[tabIndex]) contents[tabIndex].classList.add('active');
  
  console.log(`✅ Switched to tab ${tabIndex} in ${modalId}`);
}

// ===== STICKY NOTE FUNCTION =====
function setupStickyNote(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  
  const noteContainer = modal.querySelector('.note-sticky-container');
  const modalContent = modal.querySelector('.modal-content');
  
  if (!noteContainer || !modalContent) return;
  
  // Fungsi untuk update posisi note
  const updateNotePosition = () => {
    const modalRect = modalContent.getBoundingClientRect();
    const noteRect = noteContainer.getBoundingClientRect();
    
    // Cek jika modal content bisa scroll
    const isScrollable = modalContent.scrollHeight > modalContent.clientHeight;
    
    if (isScrollable) {
      // Hitung posisi scroll
      const scrollTop = modalContent.scrollTop;
      const scrollHeight = modalContent.scrollHeight;
      const clientHeight = modalContent.clientHeight;
      
      // Jika sudah scroll ke bawah cukup jauh
      if (scrollTop + clientHeight >= scrollHeight - 50) {
        // Note di posisi normal (di akhir konten)
        noteContainer.style.position = 'relative';
        noteContainer.style.bottom = 'auto';
        noteContainer.style.marginTop = '20px';
      } else {
        // Note sticky di bawah
        noteContainer.style.position = 'sticky';
        noteContainer.style.bottom = '0';
        noteContainer.style.marginTop = '0';
        noteContainer.style.zIndex = '10';
        noteContainer.style.background = 'linear-gradient(135deg, #2c3e50 0%, #4a6491 100%)';
        noteContainer.style.paddingTop = '10px';
        noteContainer.style.borderTop = '1px solid rgba(255,255,255,0.1)';
      }
    }
  };
  
  // Tambah event listener untuk scroll
  modalContent.addEventListener('scroll', updateNotePosition);
  
  // Panggil fungsi pertama kali
  setTimeout(updateNotePosition, 100);
  
  console.log(`📝 Sticky note setup for ${modalId}`);
}

// ===== GLOBAL EVENT LISTENERS =====
function setupEventListeners() {
  // Close modal dengan tombol Escape
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      const openModals = document.querySelectorAll('.modal[style*="display: flex"]');
      openModals.forEach(modal => closeModal(modal.id));
      console.log('✅ Closed all modals with Escape key');
    }
  });
  
  // Close modal dengan klik di luar modal-content
  document.addEventListener('click', function(event) {
   
    const modalEl = event.target.closest('.modal');
    if (modalEl && !event.target.closest('.modal-content')) {
      closeModal(modalEl.id);
    }
  });
}

// Make functions available globally
window.closeModal = closeModal;
window.switchTab = switchTab;