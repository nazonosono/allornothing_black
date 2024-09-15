const videoElm = document.createElement("video");
const canvasElm = document.getElementById("canvas");
const canvas = canvasElm.getContext("2d");
const loadingMsgElm = document.getElementById("loadingMessage");

// バックカメラを使用
navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } }).then(function (stream) {
  videoElm.srcObject = stream;
  videoElm.setAttribute("playsinline", true); // required to tell iOS safari we don't want fullscreen
  videoElm.play();
  requestAnimationFrame(tick);
});

/**
 * カメラの映像をcanvasに描画し、QRコードを検出する
 * requestAnimationFrameで繰り返し呼び出される
 */
function tick() {
  loadingMsgElm.innerText = "⌛ Loading camera..."
  if (videoElm.readyState === videoElm.HAVE_ENOUGH_DATA) {
    loadingMsgElm.hidden = true;
    canvasElm.hidden = false;

    canvasElm.height = videoElm.videoHeight;
    canvasElm.width = videoElm.videoWidth;
    canvas.drawImage(videoElm, 0, 0, canvasElm.width, canvasElm.height);
    const imageData = canvas.getImageData(0, 0, canvasElm.width, canvasElm.height);
    const code = jsQR(imageData.data, imageData.width, imageData.height, {
      inversionAttempts: "dontInvert",
    });

    // コード検出時
    if (code && code.data) {
      // 枠を付ける
      const borderColor = "#FF3B58";
      drawLine(code.location.topLeftCorner, code.location.topRightCorner, borderColor);
      drawLine(code.location.topRightCorner, code.location.bottomRightCorner, borderColor);
      drawLine(code.location.bottomRightCorner, code.location.bottomLeftCorner, borderColor);
      drawLine(code.location.bottomLeftCorner, code.location.topLeftCorner, borderColor);

      // ひらがな検出時はモーダル表示
      const hiraIdx = Number(code.data);
      const hira = HIRAGANA[hiraIdx];
      if (hira) {
        const modalHiraElm = document.getElementById(ID.MODAL_HIRAGANA);
        modalHiraElm.textContent = hira
        const modalElm = document.getElementById(ID.MODAL);
        modalElm.hidden = false;

        // 検出された文字をアンロック済みとしてストレージに保存
        addToUnlocked(hiraIdx);
      }
    }
  }
  requestAnimationFrame(tick);
}

/**
 * 線を描画する
 * @param {{x: number, y: number}} begin - 線の始点
 * @param {{x: number, y: number}} end - 線の終点
 * @param {string} color - 線の色
 */
function drawLine(begin, end, color) {
  canvas.beginPath();
  canvas.moveTo(begin.x, begin.y);
  canvas.lineTo(end.x, end.y);
  canvas.lineWidth = 4;
  canvas.strokeStyle = color;
  canvas.stroke();
}
