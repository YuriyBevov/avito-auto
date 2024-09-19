const openers = document.querySelectorAll('.review-card__btn');

if(openers.length) {
  const reviewModalBody = document.querySelector('.review-modal .modal-content');

  openers.forEach(opener => {
    opener.addEventListener('click', (evt) => {
      const target = evt.currentTarget;
      const clone = target.closest('.review-card').cloneNode(true);
      clone.querySelector('.review-card__btn').remove();
      reviewModalBody.innerHTML = clone.outerHTML;
    });
  });
}
