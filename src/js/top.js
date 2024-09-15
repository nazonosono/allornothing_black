// ストレージからアンロック済みの文字を取得
const unlockedArray = storageUtil.get(STORAGE_KEYS.UNLOCKED);
if (unlockedArray) {
  // アンロック済みの文字カードを活性にする
  for (const hiraIdx of unlockedArray) {
    const cardElm = document.getElementById(ID.getCardId(hiraIdx + 1));
    cardElm.disabled = false;
  }
} else {
  // ストレージに存在しない場合は空の配列をセット
  storageUtil.set(STORAGE_KEYS.UNLOCKED, []);
}
