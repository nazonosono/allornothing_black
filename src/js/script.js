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
  }
}

/**
 * モーダルを表示する
 */
function showModal(id = ID.MODAL) {
  document.getElementById(id).hidden = false;
}

/**
 * モーダルを閉じる
 */
function closeModal(id = ID.MODAL) {
  document.getElementById(id).hidden = true;
}
