// Function to handle modal logic (reusable)
function setupModal(cardId, modalId, closeBtnId) {
    const card = document.getElementById(cardId);
    const modal = document.getElementById(modalId);
    const closeBtn = document.getElementById(closeBtnId);

    // Debugging
    console.log('Setting up:', cardId, modalId, closeBtnId);
    console.log('Found:', card, modal, closeBtn);

    if (card && modal && closeBtn) {
        card.addEventListener('click', () => {
            console.log('Opening modal:', modalId);
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Prevent background scroll
        });

        closeBtn.addEventListener('click', () => {
            console.log('Closing modal:', modalId);
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scroll
        });

        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                console.log('Closing modal by clicking outside');
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    } else {
        console.error('Missing elements for:', cardId, modalId, closeBtnId);
    }
}

// Setup all modals - PASTIKAN ID SESUAI DENGAN HTML
setupModal('musicCard', 'musicModal', 'closemusicModal');    
setupModal('editingCard', 'editingModal', 'closeeditingModal');
setupModal('mlCard', 'mlModal', 'closemlModal');
setupModal('pubgCard', 'pubgModal', 'closepubgModal');
setupModal('freefireCard', 'freefireModal', 'closefreefireModal');
setupModal('RobuxCard', 'RobuxModal', 'closeRobuxModal');
setupModal('imvuCard', 'imvuModal', 'closeimvuModal');

// Escape key closes all modals
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        console.log('Closing all modals with Escape key');
        document.querySelectorAll('.modal').forEach(modal => {
            modal.style.display = 'none';
        });
        document.body.style.overflow = 'auto';
    }
});

// Tab functionality - FIXED VERSION
function openTab(evt, tabName) {
    // Cari modal content parent
    const modalContent = evt.currentTarget.closest('.modal-content');
    
    if (!modalContent) return;

    // Hanya proses tab content dan buttons dalam modal yang sama
    const tabcontent = modalContent.getElementsByClassName("tab-content");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }

    const tabbuttons = modalContent.getElementsByClassName("tab-button");
    for (let i = 0; i < tabbuttons.length; i++) {
        tabbuttons[i].classList.remove("active");
    }

    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}