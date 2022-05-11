(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-readmore-open]'),
      closeModalBtn: document.querySelector('[data-readmore-close]'),
      modal: document.querySelector('[data-readmore]'),
      submitBtn: document.querySelector('.showme-btn'),
      form: document.querySelector('.readmore__form'),
      description: document.querySelector('.readmore__description'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    document.addEventListener('keydown', event => event.key === 'Escape'?closeModal():null)
    refs.form.addEventListener("submit", formSubmit);

    function formSubmit(event) {
        event.preventDefault();
        removeReadmoreDescription();
        if (icecreams.value > 0 && icecreams.value < 37 && !Number.isNaN(icecreams.value)) {
            refs.description.insertAdjacentHTML('beforeend', `<p class="readmore__text animate__fadeInRightBig" style="animation-duration: 1000ms;">for <span class="readmore__accent">${icecreams.value}</span> ice creams  </p>`);
            setTimeout(
                () => {
                    refs.description.insertAdjacentHTML('beforeend', `<p class="readmore__text animate__fadeInLeftBig" style="animation-duration: 1000ms;">
                     we must grow <span class="readmore__accent">${icecreams.value * 9} tons</span> of grass,
                  </p>`);
                },
                1 * 1000
              );
              setTimeout(
                () => {
                    refs.description.insertAdjacentHTML('beforeend', `<p class="readmore__text animate__fadeInRightBig" style="animation-duration: 1000ms;">like meal for <span class="readmore__accent">${icecreams.value * 2} cows</span>,</p>`);
                },
                2 * 1000
              );
              setTimeout(
                () => {
                    refs.description.insertAdjacentHTML('beforeend', `<p class="readmore__text animate__fadeInLeftBig" style="animation-duration: 1000ms;">
                    who will give <span class="readmore__accent">${icecreams.value * 88} liters of milk</span>,
                  </p>`);
                },
                3 * 1000
              );
              setTimeout(
                () => {
                    refs.description.insertAdjacentHTML('beforeend', `<p class="readmore__text animate__fadeInRightBig" style="animation-duration: 1000ms;">
                    and <span class="readmore__accent">${icecreams.value * 5} employers</span> for making your ice creams,</p>`);
                },
                4 * 1000
              );
              setTimeout(
                () => {
                    refs.description.insertAdjacentHTML('beforeend', `<p class="readmore__text animate__fadeInLeftBig" style="animation-duration: 1000ms;">and <span class="readmore__accent">only ${icecreams.value < 3? icecreams.value * 6 :icecreams.value - 1} milkshakes</span> for us!
                  </p>`);
                },
                5 * 1000
              );
              setTimeout(() => {icecreams.value = null;}, 5001);
        } else if (icecreams.value > 36 && !Number.isNaN(icecreams.value)) {
            refs.description.insertAdjacentHTML('beforeend', `<p class="readmore__text animate__fadeInRightBig" style="animation-duration: 1000ms;">
  You cann't eat <span class="readmore__accent">${icecreams.value} ice creams</span> per day, its <span class="readmore__accent">so much</span>!
</p>`);
icecreams.value = null;
        } else {
            refs.description.insertAdjacentHTML('beforeend', `<p class="readmore__text animate__fadeInRightBig" style="animation-duration: 1000ms;">
            <span class="readmore__accent">${icecreams.value}</span> it's <span class="readmore__accent">NOT</span> an amount of <span class="readmore__accent">icecreams</span>!
            </p>`);
            icecreams.value = null;
        }
        
    }
    function removeReadmoreDescription() {
        if (document.querySelector('.readmore__text')) {
        document.querySelectorAll('.readmore__text').forEach(el => el.remove());
    }};

    function closeModal() {
      document.body.classList.remove('modal-open');
      refs.modal.classList.add('is-hidden');
      removeReadmoreDescription();
    }
  
    function toggleModal() {
      document.body.classList.toggle('modal-open');
      refs.modal.classList.toggle('is-hidden');
      removeReadmoreDescription();
    }
  })();
  