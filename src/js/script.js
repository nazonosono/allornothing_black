// @prepros-prepend constant.js
// @prepros-prepend util.js

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
