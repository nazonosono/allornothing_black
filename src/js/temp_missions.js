getTempMissions();

/**
 * 仮作成一覧取得
 */
function getTempMissions() {
  // TODO:リセット
  // 仮作成一覧を表示する親要素
  const tempMissionListElm = document.getElementById(ID.TEMP_MISSION_LIST);
  for (let missionId = 1; missionId <= MISSION_COUNT; missionId++) {
    // 仮作成一覧取得
    const tempWords = storageUtil.get(STORAGE_KEYS.getTempWordKey(missionId));
    for (let idx = 0; idx < tempWords.length; idx++) {
      // 親要素の内側の末尾に追加
      tempMissionListElm.insertAdjacentHTML('beforeend', `
        <div class="mission_card" onclick="showModal()">
          <div class="mission_NO">${missionId}</div>
          <div class="mission_content">${MISSION[missionId](tempWords[idx])}</div>
        </div>
        `);
    }
  }
}
