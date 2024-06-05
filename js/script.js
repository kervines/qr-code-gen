const qrcodeEl = document.getElementById('qrcode');
const formEl = document.querySelector('form');
const inputURL = document.getElementById('url');

let stateQRCode = true;
formEl.addEventListener('submit', (e) => {
  e.preventDefault();

  const url = `https://${inputURL.value}`;

  if (!inputURL.value) {
    const p = document.createElement('p');
    p.innerText = 'Digite sua URL';
    p.style.color = '#d52742';
    formEl.appendChild(p);
    setTimeout(() => {
      formEl.removeChild(p);
    }, 2000);
  } else {
    qrcodeEl.innerHTML = '';
    const qrcode = new QRCode(qrcodeEl, {
      width: 200,
      height: 200,
      colorDark: '#000',
      colorLight: '#fff',
      correctLevel: QRCode.CorrectLevel.H,
    });
    qrcode.makeCode(url);
  }
});
