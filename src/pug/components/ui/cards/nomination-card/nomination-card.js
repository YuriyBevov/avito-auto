const expanders = document.querySelectorAll('.nomination-card-expander');
console.log(expanders);
if(expanders.length) {
  expanders.forEach(expander => {
    expander.addEventListener('click', (evt) => {
      evt.currentTarget.closest('.nomination-card').classList.toggle('expanded');
    })
  })
}
