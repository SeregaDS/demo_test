(() => {
  const refs = {
    openModal2Btn: document.querySelector('[data-modal2-open]'),
    closeModal2Btn: document.querySelector('[data-modal2-close]'),
    modal2: document.querySelector('[data-modal2]'),
  };

  refs.openModal2Btn.addEventListener('click', toggleModal2);
  refs.closeModal2Btn.addEventListener('click', toggleModal2);
  document.addEventListener('keydown', event => event.key === 'Escape'?closeModal():null)
  
  function closeModal() {
    document.body.classList.remove('modal2-open');
    refs.modal2.classList.add('is-hidden');
  }

  function toggleModal2() {
    document.body.classList.toggle('modal2-open');
    refs.modal2.classList.toggle('is-hidden');
  }
})();