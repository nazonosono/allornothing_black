const MAX_INPUT_TEXT_LENGTH = 30;
const createErrorMessage = (wordState) => `すでに${wordState}の単語です`;

initCard();
getClearedWords();

/**
 * 押下された文字を入力する
 * @param {String} inputChar
 */
function typeChar(inputChar) {
  const inputTextElm = document.getElementById(ID.INPUT_TEXT);
  // 最大入力文字数に達していたら何もしない
  if (inputTextElm.textContent.length === MAX_INPUT_TEXT_LENGTH) {
    return;
  }
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
  // 入力文字があれば文章仮作成ボタンを活性に、そうでなければ非活性に
  document.getElementById(ID.CREATE_TEMP_MISSION).disabled = inputChar ? false : true;
  // 濁音付与対象であれば濁音ボタンを活性に、そうでなければ非活性に
  document.getElementById(ID.VOICED_MARK).disabled = HIRAGANA_VOICED_TARGET.includes(inputChar) ? false : true;
  // 半濁音付与対象であれば半濁音ボタンを活性に、そうでなければ非活性に
  document.getElementById(ID.SEMI_VOICED_MARK).disabled = HIRAGANA_SEMI_VOICED_TARGET.includes(inputChar) ? false : true;
  // 小文字変換対象であれば小文字ボタンを活性に、そうでなければ非活性に
  document.getElementById(ID.TO_SMALL).disabled = HIRAGANA_SMALL_TARGET.includes(inputChar) ? false : true;
}

/**
 * 文章仮作成
 * @param {number} missionId
 */
function createMission(missionId) {
  // 入力テキストを取得する
  const inputTextElm = document.getElementById(ID.INPUT_TEXT);
  const inputText = inputTextElm.textContent;
  // ストレージから当該ミッションの仮作成単語を取得
  const tempWordArray = storageUtil.get(STORAGE_KEYS.getTempWordKey(missionId));
  // ストレージから当該ミッションのクリア済単語を取得
  const clearedWordArray = storageUtil.get(STORAGE_KEYS.getClearedWordKey(missionId));
  let errorMessage = '';
  if (tempWordArray.includes(inputText)) {
    errorMessage = createErrorMessage('作成済');
  } else if (clearedWordArray.includes(inputText)) {
    errorMessage = createErrorMessage('クリア済');
  }
  // エラーメッセージ表示またはクリア
  const errorMessageElm = document.getElementById(ID.ERROR_MESSAGE);
  errorMessageElm.textContent = errorMessage;
  // エラーがあった場合は処理を終了
  if (errorMessage) {
    return;
  }
  // ストレージに当該ミッションの仮作成単語を追加する
  storageUtil.add(STORAGE_KEYS.getTempWordKey(missionId), inputText);

  // クリアメッセージをダイアログ表示する
  showModal(ID.CREATE_MISSION_COMPLETED_MODAL);
  // 入力欄クリア
  inputTextElm.textContent = '';
}

/**
 * クリア済み単語一覧を取得する
 */
function getClearedWords() {
  // クリア済み単語一覧を表示する親要素
  const clearedWordsElm = document.getElementById(ID.CLEARED_WORDS);
  // 当該ミッションID
  const missionId = Number(document.getElementById(ID.MISSION_ID).value);
  // ストレージから当該ミッションのクリア済単語を取得
  const clearedWordArray = storageUtil.get(STORAGE_KEYS.getClearedWordKey(missionId));
  for (const clearedWord of clearedWordArray) {
    // 親要素の内側の末尾に追加
    clearedWordsElm.insertAdjacentHTML('beforeend', `
      <p class="mission_content">${clearedWord}</p>
    `);
  }
}
