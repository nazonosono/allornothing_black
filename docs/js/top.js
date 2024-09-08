init(() => {
  const isVisited = storageUtil.get(STORAGE_KEYS.VISITED);
  // 訪問済みの場合
  if (isVisited) {
    // ストレージからカードの枚数を取得し、枚数に応じてカードを更新
    for (let i = 0; i < HIRAGANA.length; i++) {
      const hiraCount = storageUtil.get(STORAGE_KEYS.getHiraganaCountKey(i + 1));
      updateCard(ID.getCardId(i + 1), hiraCount);
    }
  } else {
    // 初回訪問の場合、訪問を記録
    storageUtil.set(STORAGE_KEYS.VISITED, true);
    // ひらがなの枚数の初期値を保存
    for (let i = 0; i < HIRAGANA.length; i++) {
      storageUtil.set(STORAGE_KEYS.getHiraganaCountKey(i + 1), 1);
    }
  }
});
