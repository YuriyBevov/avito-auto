const openers = document.querySelectorAll('.history__tab-opener');

if(openers.length) {
  const modal = document.querySelector('.history-modal .modal-content');

  openers.forEach(opener => {
    opener.addEventListener('click', (evt) => {
      const target = evt.currentTarget;
      const clone = target.nextElementSibling.cloneNode(true);
      modal.innerHTML = clone.outerHTML;
    });
  });
}
