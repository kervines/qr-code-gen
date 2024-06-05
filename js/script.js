const qrcodeEl = document.getElementById('qrcode');
const formEl = document.querySelector('form');
const inputURL = document.getElementById('url');
const btnSubmit = document.querySelector('input[type="submit"]');

// inputs - size & colors
const sizeEl = document.getElementById('size');
const bgEl = document.getElementById('bg');
const fillEl = document.getElementById('fill');

const mensagemErro = (text, color) => {
  const p = document.createElement('p');
  p.innerText = text;
  p.style.color = color;
  formEl.appendChild(p);
  btnSubmit.style.pointerEvents = 'none';
  setTimeout(() => {
    formEl.removeChild(p);
    btnSubmit.style.pointerEvents = 'visible';
  }, 2000);
};

let stateQRCode = true;
formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  const url = `https://${inputURL.value}`;

  if (!inputURL.value) {
    mensagemErro('URL inválida', '#d52742');
  } else {
    qrcodeEl.innerHTML = '';
    const qrcode = new QRCode(qrcodeEl, {
      width: +sizeEl.value,
      height: +sizeEl.value,
      colorDark: fillEl.value,
      colorLight: bgEl.value,
      correctLevel: QRCode.CorrectLevel.H,
    });

    /*const p = document.createElement('p');
    p.innerText = `https://${inputURL.value}`;
    qrcodeEl.appendChild(p);*/

    qrcode.makeCode(url);
  }
});
