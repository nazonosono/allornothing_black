initStorage();
initCard();

/**
 * ストレージの初期化を行う
 */
function initStorage() {
  // 初回訪問の場合、ストレージの初期化を行う
  const isVisited = storageUtil.get(STORAGE_KEYS.VISITED);
  if (!isVisited) {
    storageUtil.set(STORAGE_KEYS.VISITED, true);
    storageUtil.set(STORAGE_KEYS.UNLOCKED, []);
    for (let missionId = 1; missionId <= MISSION_COUNT; missionId++) {
      storageUtil.set(STORAGE_KEYS.TEMP_WORD_PREFIX + missionId, []);
      storageUtil.set(STORAGE_KEYS.CLEARED_WORD_PREFIX + missionId, []);
    }
  }
}
