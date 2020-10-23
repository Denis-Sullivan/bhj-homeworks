const linksHasTooltip = Array.from(document.getElementsByClassName('has-tooltip'));
let linkRect;
let linkHeight;

linksHasTooltip.forEach((el) => {
    el.addEventListener('click', showTooltip);
});

function showTooltip() {
  event.preventDefault();
  const hintToDelete = document.querySelector('.tooltip');
    if (hintToDelete) {
        if (this.getAttribute('title') === hintToDelete.textContent) {
            hintToDelete.remove();
            return
        }
        hintToDelete.remove();
    }

    const hint = document.createElement('div');
    hint.classList.add('tooltip');

    linkRect = this.getBoundingClientRect();
    linkHeight = this.getBoundingClientRect().bottom - this.getBoundingClientRect().top;
    hint.style.top = linkRect.top + linkHeight + 'px';
    hint.style.left = linkRect.left + 'px';
    hint.style.display = 'block';
    hint.textContent = this.getAttribute('title');

    document.body.append(hint);
};