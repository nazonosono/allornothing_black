const MISSION_COUNT=3,STORAGE_KEYS={VISITED:"visited",UNLOCKED:"unlocked",TEMP_WORD_PREFIX:"temp-",getTempWordKey:e=>STORAGE_KEYS.TEMP_WORD_PREFIX+e,CLEARED_WORD_PREFIX:"cleared-",getClearedWordKey:e=>STORAGE_KEYS.CLEARED_WORD_PREFIX+e},ID={HIRAGANA_CARD_PREFIX:"hira-",getCardId:e=>ID.HIRAGANA_CARD_PREFIX+e,MODAL:"modal",INPUT_TEXT:"input-text",ERROR_MESSAGE:"error-message",VOICED_MARK:"voiced-mark",SEMI_VOICED_MARK:"semi-voiced-mark",TO_SMALL:"to-small-hiragana",DELETE_CHAR:"delete-char",CREATE_MISSION_COMPLETED_MODAL:"create_mission_completed_modal",CREATE_TEMP_MISSION:"make_contents",CLEARED_WORDS:"cleared_words",MISSION_ID:"mission_id",TEMP_MISSION_LIST:"created_content_list",NOW_MISSION_ID:"now-mission-id",NOW_TEMP_WORD_IDX:"now-temp-word-idx",REMOVE_TEMP_MISSION_MODAL:"remove_temp_mission_modal",MISSION_CLEAR_MODAL:"mission_clear_modal",OBTAINED_HIRAGANA:"obtained_hiragana"},CLASS={},HIRAGANA=["あ","い","う","え","お","か","き","く","け","こ","さ","し","す","せ","そ","た","ち","つ","て","と","な","に","ぬ","ね","の","は","ひ","ふ","へ","ほ","ま","み","む","め","も","や","ゆ","よ","ら","り","る","れ","ろ","わ","を","ん"],HIRAGANA_VOICED_TARGET=["か","き","く","け","こ","さ","し","す","せ","そ","た","ち","つ","て","と","は","ひ","ふ","へ","ほ"],HIRAGANA_VOICED=["が","ぎ","ぐ","げ","ご","ざ","じ","ず","ぜ","ぞ","だ","ぢ","づ","で","ど","ば","び","ぶ","べ","ぼ"],HIRAGANA_SEMI_VOICED_TARGET=["は","ひ","ふ","へ","ほ"],HIRAGANA_SEMI_VOICED=["ぱ","ぴ","ぷ","ぺ","ぽ"],HIRAGANA_SMALL_TARGET=["あ","い","う","え","お","つ","や","ゆ","よ"],HIRAGANA_SMALL=["ぁ","ぃ","ぅ","ぇ","ぉ","っ","ゃ","ゅ","ょ"],MISSION={1:e=>`同じ${e}を持っている人`,2:e=>`${e}色の靴を持っている人`,3:e=>`${e}色の服を着ている人`},storageUtil={set(e,t){const _=JSON.stringify(t);localStorage.setItem(e,_)},add(e,t){const _=storageUtil.get(e);_.includes(t)||(_.push(t),storageUtil.set(e,_))},get(e){const t=localStorage.getItem(e);return null===t?null:JSON.parse(t)},remove(e){localStorage.removeItem(e)},removeArrayItem(e,t){const _=storageUtil.get(e);_.splice(t,1),storageUtil.set(e,_)}};function initCard(){const e=storageUtil.get(STORAGE_KEYS.UNLOCKED);if(e)for(const t of e){document.getElementById(ID.getCardId(t)).disabled=!1}}function showModal(e=ID.MODAL){document.getElementById(e).hidden=!1}function closeModal(e=ID.MODAL){document.getElementById(e).hidden=!0}
//# sourceMappingURL=script.js.map