const MISSION_COUNT=20,STORAGE_KEYS={VISITED:"visited",UNLOCKED:"unlocked",TEMP_WORD_PREFIX:"temp-",getTempWordKey:e=>STORAGE_KEYS.TEMP_WORD_PREFIX+e,CLEARED_WORD_PREFIX:"cleared-",getClearedWordKey:e=>STORAGE_KEYS.CLEARED_WORD_PREFIX+e},ID={HIRAGANA_CARD_PREFIX:"hira-",getCardId:e=>ID.HIRAGANA_CARD_PREFIX+e,MODAL:"modal",INPUT_TEXT:"input-text",ERROR_MESSAGE:"error-message",VOICED_MARK:"voiced-mark",SEMI_VOICED_MARK:"semi-voiced-mark",TO_SMALL:"to-small-hiragana",DELETE_CHAR:"delete-char",CREATE_MISSION_COMPLETED_MODAL:"create_mission_completed_modal",CREATE_TEMP_MISSION:"make_contents",CLEARED_WORDS:"cleared_words",MISSION_ID:"mission_id",TEMP_MISSION_LIST:"created_content_list",NOW_MISSION_ID:"now-mission-id",NOW_TEMP_WORD_IDX:"now-temp-word-idx",REMOVE_TEMP_MISSION_MODAL:"remove_temp_mission_modal",MISSION_CLEAR_MODAL:"mission_clear_modal",CONFIRM_CLEAR_MODAL:"confirm_clear_modal",OBTAINED_HIRAGANA:"obtained_hiragana"},CLASS={},HIRAGANA=["あ","い","う","え","お","か","き","く","け","こ","さ","し","す","せ","そ","た","ち","つ","て","と","な","に","ぬ","ね","の","は","ひ","ふ","へ","ほ","ま","み","む","め","も","や","ゆ","よ","ら","り","る","れ","ろ","わ","を","ん"],HIRAGANA_VOICED_TARGET=["か","き","く","け","こ","さ","し","す","せ","そ","た","ち","つ","て","と","は","ひ","ふ","へ","ほ"],HIRAGANA_VOICED=["が","ぎ","ぐ","げ","ご","ざ","じ","ず","ぜ","ぞ","だ","ぢ","づ","で","ど","ば","び","ぶ","べ","ぼ"],HIRAGANA_SEMI_VOICED_TARGET=["は","ひ","ふ","へ","ほ"],HIRAGANA_SEMI_VOICED=["ぱ","ぴ","ぷ","ぺ","ぽ"],HIRAGANA_SMALL_TARGET=["あ","い","う","え","お","つ","や","ゆ","よ"],HIRAGANA_SMALL=["ぁ","ぃ","ぅ","ぇ","ぉ","っ","ゃ","ゅ","ょ"],MISSION={1:e=>`実物の黒い${e}が写った写真を撮る`,2:e=>`自分と${e}が同じ人を見つける`,3:e=>`今日${e}を自分が食べた`,4:e=>`今日${e}に行ってきた`,5:e=>`今日プレイした"${e}"のクリア画面を見せる`,6:e=>`死ぬ気で${e}する`,7:e=>`${e}みたいに「ぶらっく」と言う`,8:e=>`${e}に対する愛をアピールする`,9:e=>`${e}についての上手いウソ雑学を言う`,10:e=>`公演"${e}"にまつわるグッズを受付に持ってくる`,11:e=>`公演"${e}"のキービジュアルを再現した写真を撮る`,12:e=>`謎の園会場にあるものを使って、答えが${e}になるような謎を作る`,13:e=>`受付で、"謎解き"と"${e}"でなぞかけをする`,14:e=>`謎の園の${e}について語った長文をXでポストする`,15:e=>`${e}を謎の園にいるスタッフにあげる`,16:e=>`10人以上で${e}する`,17:e=>`受付横で、${e}を100回する`,18:e=>`受付横で、1分間${e}する`,19:e=>`会場の入り口に貼ってある、${e}が答えの小謎を解き明かす`,20:e=>`${e}のアイテムミッションに挑戦して、クリアする`},storageUtil={set(e,_){const t=JSON.stringify(_);localStorage.setItem(e,t)},add(e,_){const t=storageUtil.get(e);t.includes(_)||(t.push(_),storageUtil.set(e,t))},get(e){const _=localStorage.getItem(e);return null===_?null:JSON.parse(_)},remove(e){localStorage.removeItem(e)},removeArrayItem(e,_){const t=storageUtil.get(e);t.splice(_,1),storageUtil.set(e,t)}};function initCard(){const e=storageUtil.get(STORAGE_KEYS.UNLOCKED);if(e)for(const _ of e){document.getElementById(ID.getCardId(_)).disabled=!1}}function showModal(e=ID.MODAL){document.getElementById(e).hidden=!1}function closeModal(e=ID.MODAL){document.getElementById(e).hidden=!0}
//# sourceMappingURL=script.js.map