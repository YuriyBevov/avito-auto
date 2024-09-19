const expanders = document.querySelectorAll('.base-section__expand-btn');

if(expanders.length) {
  expanders.forEach(expander => {
    expander.addEventListener('click', (evt) => {
      const target = evt.currentTarget;
      target.closest('.base-section').classList.toggle('expanded');
    });
  });
}
