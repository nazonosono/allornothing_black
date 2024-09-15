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
 * 押下された文字を入力する
 * @param {String} inputChar
 */
function typeChar(inputChar) {
  const inputTextElm = document.getElementById(ID.INPUT_TEXT);
  inputTextElm.textContent += inputChar;
  toggleButtonState(inputChar);
}

/**
 * 濁点を付ける
 */
function addVoicedMark() {
  const inputTextElm = document.getElementById(ID.INPUT_TEXT);
  const inputText = inputTextElm.textContent;
  const lastChar = inputText.slice(-1);
  const voicedHiraIdx = HIRAGANA_VOICED_TARGET.indexOf(lastChar);
  const voicedHira = HIRAGANA_VOICED[voicedHiraIdx];
  inputTextElm.textContent = inputText.slice(0, -1) + voicedHira;
  toggleButtonState(voicedHira);
}

/**
 * 半濁点を付ける
 */
function addSemiVoicedMark() {
  const inputTextElm = document.getElementById(ID.INPUT_TEXT);
  const inputText = inputTextElm.textContent;
  const lastChar = inputText.slice(-1);
  const semiVoicedHiraIdx = HIRAGANA_SEMI_VOICED_TARGET.indexOf(lastChar);
  const semiVoicedHira = HIRAGANA_SEMI_VOICED[semiVoicedHiraIdx];
  inputTextElm.textContent = inputText.slice(0, -1) + semiVoicedHira;
  toggleButtonState(semiVoicedHira);
}

/**
 * 小文字にする
 */
function toSmallHiragana() {
  const inputTextElm = document.getElementById(ID.INPUT_TEXT);
  const inputText = inputTextElm.textContent;
  const lastChar = inputText.slice(-1);
  const smallHiraIdx = HIRAGANA_SMALL_TARGET.indexOf(lastChar);
  const smallHira = HIRAGANA_SMALL[smallHiraIdx];
  inputTextElm.textContent = inputText.slice(0, -1) + smallHira;
  toggleButtonState(smallHira);
}

/**
 * 1文字取り消す
 */
function deleteChar() {
  const inputTextElm = document.getElementById(ID.INPUT_TEXT);
  const inputText = inputTextElm.textContent;
  const deletedText = inputText.slice(0, -1);
  inputTextElm.textContent = deletedText;
  const lastChar = deletedText.slice(-1);
  toggleButtonState(lastChar);
}

/**
 * 入力された文字によってボタンの活性・非活性を切り替える
 * @param {String} inputChar
 */
function toggleButtonState(inputChar) {
  // 入力文字があれば取消ボタンを活性に、そうでなければ非活性に
  document.getElementById(ID.DELETE_CHAR).disabled = inputChar ? false : true;
  // 濁音付与対象であれば濁音ボタンを活性に、そうでなければ非活性に
  document.getElementById(ID.VOICED_MARK).disabled = HIRAGANA_VOICED_TARGET.includes(inputChar) ? false : true;
  // 半濁音付与対象であれば半濁音ボタンを活性に、そうでなければ非活性に
  document.getElementById(ID.SEMI_VOICED_MARK).disabled = HIRAGANA_SEMI_VOICED_TARGET.includes(inputChar) ? false : true;
  // 小文字変換対象であれば小文字ボタンを活性に、そうでなければ非活性に
  document.getElementById(ID.TO_SMALL).disabled = HIRAGANA_SMALL_TARGET.includes(inputChar) ? false : true;
}
