function getTempMissions(){const e=document.getElementById(ID.TEMP_MISSION_LIST);e.innerHTML="";for(let t=1;t<=MISSION_COUNT;t++){const o=storageUtil.get(STORAGE_KEYS.getTempWordKey(t));for(let n=0;n<o.length;n++)e.insertAdjacentHTML("beforeend",`\n        <div class="mission_card" onclick="showTempMissionMenu(${t}, ${n})">\n          <div class="mission_NO">${t}</div>\n          <div class="mission_content">${MISSION[t](o[n])}</div>\n        </div>\n        `)}}function showTempMissionMenu(e,t){document.getElementById(ID.NOW_MISSION_ID).value=e,document.getElementById(ID.NOW_TEMP_WORD_IDX).value=t,showModal()}function removeTempMission(){const e=Number(document.getElementById(ID.NOW_MISSION_ID).value),t=Number(document.getElementById(ID.NOW_TEMP_WORD_IDX).value);storageUtil.removeArrayItem(STORAGE_KEYS.getTempWordKey(e),t),getTempMissions(),showModal(ID.REMOVE_TEMP_MISSION_MODAL),closeModal()}function missionClear(){const e=Number(document.getElementById(ID.NOW_MISSION_ID).value),t=Number(document.getElementById(ID.NOW_TEMP_WORD_IDX).value),o=storageUtil.get(STORAGE_KEYS.getTempWordKey(e))[t];storageUtil.removeArrayItem(STORAGE_KEYS.getTempWordKey(e),t),storageUtil.add(STORAGE_KEYS.getClearedWordKey(e),o),getTempMissions(),showModal(ID.MISSION_CLEAR_MODAL),closeModal()}getTempMissions();
//# sourceMappingURL=temp_missions.js.map