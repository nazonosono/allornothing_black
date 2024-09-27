getTempMissions();

/**
 * 仮作成一覧取得
 */
function getTempMissions() {
  // 仮作成一覧を表示する親要素
  const tempMissionListElm = document.getElementById(ID.TEMP_MISSION_LIST);
  // 初期化
  tempMissionListElm.innerHTML = '';
  // ミッションの数だけループ
  for (let missionId = 1; missionId <= MISSION_COUNT; missionId++) {
    // 仮作成一覧取得
    const tempWords = storageUtil.get(STORAGE_KEYS.getTempWordKey(missionId));
    for (let idx = 0; idx < tempWords.length; idx++) {
      // 親要素の内側の末尾に追加
      tempMissionListElm.insertAdjacentHTML('beforeend', `
        <div class="mission_card" onclick="showTempMissionMenu(${missionId}, ${idx})">
          <li class="mission_NO">${missionId}</li>
          ${getMissionIconHtml(missionId)}
          <li class="mission_content">${MISSION[missionId].text(tempWords[idx])}</li>
        </div>
        `);
    }
  }
}

/**
 * 仮作成文章の処理メニューを表示
 * @param {number} missionId - ミッションID
 * @param {number} tempWordIdx - 当該ミッションの仮作成単語のインデックス
 */
function showTempMissionMenu(missionId, tempWordIdx) {
  // hidden要素設定
  document.getElementById(ID.NOW_MISSION_ID).value = missionId;
  document.getElementById(ID.NOW_TEMP_WORD_IDX).value = tempWordIdx;
  // モーダル表示
  showModal();
}

/**
 * 仮作成文章削除処理
 */
function removeTempMission() {
  const nowMissionId = Number(document.getElementById(ID.NOW_MISSION_ID).value);
  const nowTempWordIdx = Number(document.getElementById(ID.NOW_TEMP_WORD_IDX).value);
  // ストレージから当該仮作成単語を削除する
  storageUtil.removeArrayItem(STORAGE_KEYS.getTempWordKey(nowMissionId), nowTempWordIdx);
  // 仮作成一覧再取得
  getTempMissions();
  // 仮作成文章削除モーダル表示
  showModal(ID.REMOVE_TEMP_MISSION_MODAL);
  // 処理メニューモーダルを閉じる
  closeModal();
}

/**
 * ミッションクリア処理
 */
function missionClear() {
  // ミッションクリア確認モーダル表示
  showModal(ID.CONFIRM_CLEAR_MODAL);
  // 処理メニューモーダルを閉じる
  closeModal();
}

/**
 * ミッションクリア実行
 */
function confirmClear() {
  const nowMissionId = Number(document.getElementById(ID.NOW_MISSION_ID).value);
  const nowTempWordIdx = Number(document.getElementById(ID.NOW_TEMP_WORD_IDX).value);
  // ストレージから当該仮作成単語を取得する
  const nowTempWord = storageUtil.get(STORAGE_KEYS.getTempWordKey(nowMissionId))[nowTempWordIdx];
  // ストレージから当該仮作成単語を削除する
  storageUtil.removeArrayItem(STORAGE_KEYS.getTempWordKey(nowMissionId), nowTempWordIdx);
  // ストレージに当該仮作成単語をクリア済み単語として保存する
  storageUtil.add(STORAGE_KEYS.getClearedWordKey(nowMissionId), nowTempWord);
  // 仮作成一覧再取得
  getTempMissions();
  // ミッションクリアモーダル表示
  showModal(ID.MISSION_CLEAR_MODAL);
  // ミッションクリア確認モーダルを閉じる
  closeModal(ID.CONFIRM_CLEAR_MODAL);
}

/**
 * ミッションクリアキャンセル
 */
function cancelClear() {
  // ミッションクリア確認モーダルを閉じる
  closeModal(ID.CONFIRM_CLEAR_MODAL);
  // 処理メニューモーダル表示
  showModal();
}

/**
 * ミッションのアイコンを表示するHTMLを取得
 * @param {number} missionId - ミッションID
 */
function getMissionIconHtml(missionId) {
  const missionIcon = MISSION[missionId].icon;
  switch (missionIcon) {
    case MISSION_ICON.CAMERA:
      return `<li class = "mission_icon">
                <img src = "${IMG_PATH}/camera.svg">
              </li>`;
    case MISSION_ICON.CHECK:
      return `<li class = "mission_icon">
                <img src = "${IMG_PATH}/check.svg">
              </li>`;
    case MISSION_ICON.CHECK_CAMERA:
      return `<li class = "mission_icon2">
                <img src = "${IMG_PATH}/check.svg">
              </li>
              <li class = "mission_icon3">
                <img src = "${IMG_PATH}/camera.svg">
              </li>`;
  }
}
