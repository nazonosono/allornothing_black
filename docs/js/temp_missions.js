function getTempMissions(){const e=document.getElementById(ID.TEMP_MISSION_LIST);e.innerHTML="";for(let n=1;n<=MISSION_COUNT;n++){const s=storageUtil.get(STORAGE_KEYS.getTempWordKey(n));for(let o=0;o<s.length;o++)e.insertAdjacentHTML("beforeend",`\n        <div class="mission_card" onclick="showTempMissionMenu(${n}, ${o})">\n          <li class="mission_NO">${n}</li>\n          ${getMissionIconHtml(n)}\n          <li class="mission_content">${MISSION[n].text(s[o])}</li>\n        </div>\n        `)}}function showTempMissionMenu(e,n){document.getElementById(ID.NOW_MISSION_ID).value=e,document.getElementById(ID.NOW_TEMP_WORD_IDX).value=n,showModal()}function removeTempMission(){const e=Number(document.getElementById(ID.NOW_MISSION_ID).value),n=Number(document.getElementById(ID.NOW_TEMP_WORD_IDX).value);storageUtil.removeArrayItem(STORAGE_KEYS.getTempWordKey(e),n),getTempMissions(),showModal(ID.REMOVE_TEMP_MISSION_MODAL),closeModal()}function missionClear(){showModal(ID.CONFIRM_CLEAR_MODAL),closeModal()}function confirmClear(){const e=Number(document.getElementById(ID.NOW_MISSION_ID).value),n=Number(document.getElementById(ID.NOW_TEMP_WORD_IDX).value),s=storageUtil.get(STORAGE_KEYS.getTempWordKey(e))[n];storageUtil.removeArrayItem(STORAGE_KEYS.getTempWordKey(e),n),storageUtil.add(STORAGE_KEYS.getClearedWordKey(e),s),getTempMissions(),showModal(ID.MISSION_CLEAR_MODAL),closeModal(ID.CONFIRM_CLEAR_MODAL)}function cancelClear(){closeModal(ID.CONFIRM_CLEAR_MODAL),showModal()}function getMissionIconHtml(e){switch(MISSION[e].icon){case MISSION_ICON.CAMERA:return`<li class = "mission_icon">\n                <img src = "${IMG_PATH}/camera.svg">\n              </li>`;case MISSION_ICON.CHECK:return`<li class = "mission_icon">\n                <img src = "${IMG_PATH}/check.svg">\n              </li>`;case MISSION_ICON.CHECK_CAMERA:return`<li class = "mission_icon2">\n                <img src = "${IMG_PATH}/check.svg">\n              </li>\n              <li class = "mission_icon3">\n                <img src = "${IMG_PATH}/camera.svg">\n              </li>`}}getTempMissions();
//# sourceMappingURL=temp_missions.js.map