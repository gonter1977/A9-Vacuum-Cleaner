// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
    const progressBar = event.target.querySelector('.progress-bar');
    const updatingBar = event.target.querySelector('.update-bar');
    updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
    if (event.detail.totalProgress === 1) {
      progressBar.classList.add('hide');
      event.target.removeEventListener('progress', onProgress);
    } else {
      progressBar.classList.remove('hide');
    }
  };
  document.querySelector('model-viewer').addEventListener('progress', onProgress);

  // AR 버튼의 텍스트를 "증강현실 보기"로 변경
  const arButton = document.querySelector('#ar-button');
  arButton.textContent = '증강현실 보기'; // 'View in your space'를 '증강현실 보기'로 변경