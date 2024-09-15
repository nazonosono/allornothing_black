// @prepros-prepend constant.js
// @prepros-prepend util.js

/**
 * カード初期処理
 */
function initCard() {
  // ストレージからアンロック済みの文字を取得
  const unlockedArray = storageUtil.get(STORAGE_KEYS.UNLOCKED);
  if (unlockedArray) {
    // アンロック済みの文字カードを活性にする
    for (const hiraIdx of unlockedArray) {
      const cardElm = document.getElementById(ID.getCardId(hiraIdx));
      cardElm.disabled = false;
    }
  } else {
    // ストレージに存在しない場合は空の配列をセット
    storageUtil.set(STORAGE_KEYS.UNLOCKED, []);
  }
}

/**
 * モーダルを閉じる
 */
function closeModal() {
  const modalElm = document.getElementById(ID.MODAL);
  modalElm.hidden = true;
}

/**
 * アンロック済みの文字を追加する
 * @param {number} hiraIdx
 */
function addToUnlocked(hiraIdx) {
  const unlockedArray = storageUtil.get(STORAGE_KEYS.UNLOCKED);
  if (unlockedArray.includes(hiraIdx)) {
    return;
  }
  unlockedArray.push(hiraIdx);
  storageUtil.set(STORAGE_KEYS.UNLOCKED, unlockedArray);
}

/**
 * 入力された文字を表示する
 * @param {number} hiraIdx
 */
function typeChar(inputChar) {
  const inputTextElm = document.getElementById(ID.INPUT_TEXT);
  inputTextElm.textContent += inputChar;
}
