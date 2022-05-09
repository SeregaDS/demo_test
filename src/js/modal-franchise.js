(() => {
  const refs = {
    openModalfrBtn: document.querySelector('[data-modalfr-open2]'),
    closeModalfrBtn: document.querySelector('[data-modalfr-close]'),
    modalfr: document.querySelector('[data-modalfr]'),
  };

  refs.openModalfrBtn.addEventListener('click', toggleModalfr);
  refs.closeModalfrBtn.addEventListener('click', toggleModalfr);
  document.addEventListener('keydown', event => event.key === 'Escape'?closeModal():null)
  
  function closeModal() {
    document.body.classList.remove('modalfr-open');
    refs.modalfr.classList.add('is-hidden');
  }

  function toggleModalfr() {
    document.body.classList.toggle('modalfr-open');
    refs.modalfr.classList.toggle('is-hidden');
  }
})();