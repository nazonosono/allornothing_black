const MISSION_COUNT=3,STORAGE_KEYS={VISITED:"visited",UNLOCKED:"unlocked",TEMP_WORD_PREFIX:"temp-",getTempWordKey:e=>STORAGE_KEYS.TEMP_WORD_PREFIX+e,CLEARED_WORD_PREFIX:"cleared-",getClearedWordKey:e=>STORAGE_KEYS.CLEARED_WORD_PREFIX+e},ID={HIRAGANA_CARD_PREFIX:"hira-",getCardId:e=>ID.HIRAGANA_CARD_PREFIX+e,MODAL:"modal",MODAL_HIRAGANA:"modal_contents_1",MASK:"mask",INPUT_TEXT:"input-text",ERROR_MESSAGE:"error-message",VOICED_MARK:"voiced-mark",SEMI_VOICED_MARK:"semi-voiced-mark",TO_SMALL:"to-small-hiragana",DELETE_CHAR:"delete-char"},CLASS={},HIRAGANA=["あ","い","う","え","お","か","き","く","け","こ","さ","し","す","せ","そ","た","ち","つ","て","と","な","に","ぬ","ね","の","は","ひ","ふ","へ","ほ","ま","み","む","め","も","や","ゆ","よ","ら","り","る","れ","ろ","わ","を","ん"],HIRAGANA_VOICED_TARGET=["か","き","く","け","こ","さ","し","す","せ","そ","た","ち","つ","て","と","は","ひ","ふ","へ","ほ"],HIRAGANA_VOICED=["が","ぎ","ぐ","げ","ご","ざ","じ","ず","ぜ","ぞ","だ","ぢ","づ","で","ど","ば","び","ぶ","べ","ぼ"],HIRAGANA_SEMI_VOICED_TARGET=["は","ひ","ふ","へ","ほ"],HIRAGANA_SEMI_VOICED=["ぱ","ぴ","ぷ","ぺ","ぽ"],HIRAGANA_SMALL_TARGET=["あ","い","う","え","お","つ","や","ゆ","よ"],HIRAGANA_SMALL=["ぁ","ぃ","ぅ","ぇ","ぉ","っ","ゃ","ゅ","ょ"],storageUtil={set(e,t){const A=JSON.stringify(t);localStorage.setItem(e,A)},add(e,t){const A=storageUtil.get(e);A.includes(t)||(A.push(t),storageUtil.set(e,A))},get(e){const t=localStorage.getItem(e);return null===t?null:JSON.parse(t)},remove(e){localStorage.removeItem(e)}};function initCard(){const e=storageUtil.get(STORAGE_KEYS.UNLOCKED);if(e)for(const t of e){document.getElementById(ID.getCardId(t)).disabled=!1}}function showModal(){document.getElementById(ID.MODAL).hidden=!1,document.getElementById(ID.MASK).hidden=!1}function closeModal(){document.getElementById(ID.MODAL).hidden=!0,document.getElementById(ID.MASK).hidden=!0}
//# sourceMappingURL=script.js.map