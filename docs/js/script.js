const MISSION_COUNT=20,IMG_PATH="img",STORAGE_KEYS={VISITED:"visited",UNLOCKED:"unlocked",TEMP_WORD_PREFIX:"temp-",getTempWordKey:I=>STORAGE_KEYS.TEMP_WORD_PREFIX+I,CLEARED_WORD_PREFIX:"cleared-",getClearedWordKey:I=>STORAGE_KEYS.CLEARED_WORD_PREFIX+I},ID={HIRAGANA_CARD_PREFIX:"hira-",getCardId:I=>ID.HIRAGANA_CARD_PREFIX+I,MODAL:"modal",INPUT_TEXT:"input-text",ERROR_MESSAGE:"error-message",VOICED_MARK:"voiced-mark",SEMI_VOICED_MARK:"semi-voiced-mark",TO_SMALL:"to-small-hiragana",DELETE_CHAR:"delete-char",CREATE_MISSION_COMPLETED_MODAL:"create_mission_completed_modal",CREATE_TEMP_MISSION:"make_contents",CLEARED_WORDS:"cleared_words",MISSION_ID:"mission_id",TEMP_MISSION_LIST:"created_content_list",NOW_MISSION_ID:"now-mission-id",NOW_TEMP_WORD_IDX:"now-temp-word-idx",REMOVE_TEMP_MISSION_MODAL:"remove_temp_mission_modal",MISSION_CLEAR_MODAL:"mission_clear_modal",CONFIRM_CLEAR_MODAL:"confirm_clear_modal",OBTAINED_HIRAGANA:"obtained_hiragana"},HIRAGANA=["あ","い","う","え","お","か","き","く","け","こ","さ","し","す","せ","そ","た","ち","つ","て","と","な","に","ぬ","ね","の","は","ひ","ふ","へ","ほ","ま","み","む","め","も","や","ゆ","よ","ら","り","る","れ","ろ","わ","を","ん"],HIRAGANA_VOICED_TARGET=["か","き","く","け","こ","さ","し","す","せ","そ","た","ち","つ","て","と","は","ひ","ふ","へ","ほ"],HIRAGANA_VOICED=["が","ぎ","ぐ","げ","ご","ざ","じ","ず","ぜ","ぞ","だ","ぢ","づ","で","ど","ば","び","ぶ","べ","ぼ"],HIRAGANA_SEMI_VOICED_TARGET=["は","ひ","ふ","へ","ほ"],HIRAGANA_SEMI_VOICED=["ぱ","ぴ","ぷ","ぺ","ぽ"],HIRAGANA_SMALL_TARGET=["あ","い","う","え","お","つ","や","ゆ","よ"],HIRAGANA_SMALL=["ぁ","ぃ","ぅ","ぇ","ぉ","っ","ゃ","ゅ","ょ"],MISSION_ICON=Object.freeze({CAMERA:"camera",CHECK:"check",CHECK_CAMERA:"check&camera"}),MISSION={1:{text:I=>`実物の黒い${I}が写った写真を撮る`,icon:MISSION_ICON.CAMERA},2:{text:I=>`自分と${I}が同じ人を見つける`,icon:MISSION_ICON.CAMERA},3:{text:I=>`今日${I}を自分が食べた`,icon:MISSION_ICON.CAMERA},4:{text:I=>`今日${I}に行ってきた`,icon:MISSION_ICON.CAMERA},5:{text:I=>`今日プレイした"${I}"のクリア画面を見せる`,icon:MISSION_ICON.CHECK_CAMERA},6:{text:I=>`死ぬ気で${I}する`,icon:MISSION_ICON.CHECK_CAMERA},7:{text:I=>`${I}みたいに「ぶらっく」と言う`,icon:MISSION_ICON.CHECK_CAMERA},8:{text:I=>`${I}に対する愛をアピールする`,icon:MISSION_ICON.CHECK_CAMERA},9:{text:I=>`${I}についての上手いウソ雑学を言う`,icon:MISSION_ICON.CHECK},10:{text:I=>`公演"${I}"にまつわるグッズを受付に持ってくる`,icon:MISSION_ICON.CHECK},11:{text:I=>`公演"${I}"のキービジュアルを再現した写真を撮る`,icon:MISSION_ICON.CAMERA},12:{text:I=>`謎の園会場にあるものを使って、答えが${I}になるような謎を作る`,icon:MISSION_ICON.CAMERA},13:{text:I=>`受付で、"謎解き"と"${I}"でなぞかけをする`,icon:MISSION_ICON.CHECK},14:{text:I=>`謎の園の${I}について語った長文をXでポストする`,icon:MISSION_ICON.CHECK_CAMERA},15:{text:I=>`${I}を謎の園にいるスタッフにあげる`,icon:MISSION_ICON.CHECK_CAMERA},16:{text:I=>`10人以上で${I}する`,icon:MISSION_ICON.CHECK_CAMERA},17:{text:I=>`受付横で、${I}を100回する`,icon:MISSION_ICON.CHECK},18:{text:I=>`受付横で、1分間${I}する`,icon:MISSION_ICON.CHECK},19:{text:I=>`会場の入り口に貼ってある、${I}が答えの小謎を解き明かす`,icon:MISSION_ICON.CHECK},20:{text:I=>`${I}のアイテムミッションに挑戦して、クリアする`,icon:MISSION_ICON.CHECK}},storageUtil={set(I,e){const t=JSON.stringify(e);localStorage.setItem(I,t)},add(I,e){const t=storageUtil.get(I);t.includes(e)||(t.push(e),storageUtil.set(I,t))},get(I){const e=localStorage.getItem(I);return null===e?null:JSON.parse(e)},remove(I){localStorage.removeItem(I)},removeArrayItem(I,e){const t=storageUtil.get(I);t.splice(e,1),storageUtil.set(I,t)}};function initCard(){const I=storageUtil.get(STORAGE_KEYS.UNLOCKED);if(I)for(const e of I){document.getElementById(ID.getCardId(e)).disabled=!1}}function showModal(I=ID.MODAL){document.getElementById(I).hidden=!1}function closeModal(I=ID.MODAL){document.getElementById(I).hidden=!0}
//# sourceMappingURL=script.js.map