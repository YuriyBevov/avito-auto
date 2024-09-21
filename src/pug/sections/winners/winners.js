const openers = document.querySelectorAll('.winners__item-title');

if(openers.length) {
  const modal = document.querySelector('.winners-modal .modal-content');

  openers.forEach(opener => {
    opener.addEventListener('click', (evt) => {
      const target = evt.currentTarget;
      const clone = target.nextElementSibling.cloneNode(true);
      modal.innerHTML = clone.outerHTML;
    });
  });
}
