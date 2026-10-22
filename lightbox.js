/* Clipping lightbox: native <dialog id="lightbox"> opened by any button.cov-media with data-full and data-outlet. */
(function(){
  const dlg = document.getElementById('lightbox');
  if (!dlg || typeof dlg.showModal !== 'function') return;
  const img = document.getElementById('lbImg');
  const title = document.getElementById('lb-title');
  const scroller = dlg.querySelector('.lb-scroll');
  let trigger = null;
  document.querySelectorAll('.cov-media').forEach(btn => {
    btn.addEventListener('click', () => {
      trigger = btn;
      img.src = btn.dataset.full;
      img.alt = btn.querySelector('img').alt;
      title.textContent = btn.dataset.outlet;
      scroller.scrollTop = 0;
      document.body.style.overflow = 'hidden';
      dlg.showModal();
      dlg.querySelector('.lb-close').focus();
    });
  });
  dlg.querySelector('.lb-close').addEventListener('click', () => dlg.close());
  dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });
  dlg.addEventListener('close', () => {
    document.body.style.overflow = '';
    img.removeAttribute('src');
    if (trigger) { trigger.focus(); trigger = null; }
  });
})();
