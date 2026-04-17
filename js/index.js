lucide.createIcons();

const updateCopyrightYear = () => {
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
};

updateCopyrightYear();

const setupModal = (imgSelector, modalId, modalImgId) => {
    const imgElement = document.querySelector(imgSelector);
    const modal = document.getElementById(modalId);
    const modalImg = document.getElementById(modalImgId); // Pega a tag img dentro do modal
    
    if (!imgElement || !modal || !modalImg) return;

    const flipCard = modal.querySelector('.flip-card');
    const closeBtn = modal.querySelector('.close-btn');

    imgElement.addEventListener('click', (e) => {
        e.stopPropagation();
        
        //Pega o src da imagem pequena e coloca na imagem do modal
        modalImg.src = imgElement.src;
        
        flipCard.style.transform = "rotateY(0deg)";
        modal.classList.remove('opacity-0', 'pointer-events-none');
        modal.classList.add('opacity-100');
        flipCard.classList.remove('scale-90');
        flipCard.classList.add('scale-100');
    });

    const closeModal = () => {
        modal.classList.remove('opacity-100');
        modal.classList.add('opacity-0', 'pointer-events-none');
        flipCard.classList.remove('scale-100');
        flipCard.classList.add('scale-90');
    };

    flipCard.addEventListener('click', (e) => {
        e.stopPropagation();
        const isFlipped = flipCard.style.transform === "rotateY(180deg)";
        flipCard.style.transform = isFlipped ? "rotateY(0deg)" : "rotateY(180deg)";
    });

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', closeModal);
};

// Chamadas passando o Seletor, o ID do Modal e o ID da Imagem interna
setupModal('.aspect-square:nth-child(1) img', 'modal1', 'modalImg1');
setupModal('.aspect-square:nth-child(2) img', 'modal2', 'modalImg2');