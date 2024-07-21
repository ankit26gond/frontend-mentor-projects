const shareBtn = document.getElementById('share-btn');
const shareSection = document.querySelector('.share');

shareBtn.addEventListener('click', () => {
  shareSection.classList.toggle('active');

  shareBtn.classList.toggle('on');
});