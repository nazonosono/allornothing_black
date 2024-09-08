const STORAGE_KEYS = {
  VISITED: 'visited',
  HIRAGANA_COUNT_PREFIX: 'hira-',
  getHiraganaCountKey: (id) => STORAGE_KEYS.HIRAGANA_COUNT_PREFIX + id,
};

const HIRAGANA = [
  'あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ',
  'さ', 'し', 'す', 'せ', 'そ', 'た', 'ち', 'つ', 'て', 'と',
  'な', 'に', 'ぬ', 'ね', 'の', 'は', 'ひ', 'ふ', 'へ', 'ほ',
  'ま', 'み', 'む', 'め', 'も', 'や', 'ゆ', 'よ', 'ら', 'り',
  'る', 'れ', 'ろ', 'わ', 'を', 'ん',
];

const CLASS = {
  CARD_BADGE: 'badge',
};

const ID = {
  HIRAGANA_CARD_PREFIX: 'hira-',
  CARD_BADGE_SUFFIX: '-count',
  getCardId: (hiraId) => ID.HIRAGANA_CARD_PREFIX + hiraId,
  getCardBadgeId: (hiraCardId) => hiraCardId + ID.CARD_BADGE_SUFFIX,
};

/**
 * LocalStorageのCRUD処理のヘルパー
 */
const storageUtil = {
  /**
   * LocalStorageにデータを保存する
   * @param {string} key
   * @param {any} value - JSONに変換可能な型
   */
  set(key, value) {
    const jsonValue = JSON.stringify(value);
    localStorage.setItem(key, jsonValue);
  },

  /**
   * LocalStorageからデータを取得する
   * @param {string} key
   * @returns {any} - 変換後の型
   */
  get(key) {
    const value = localStorage.getItem(key);
    if (value === null) {
      return null;
    }
    return JSON.parse(value);
  },

  /**
   * LocalStorageからデータを削除する
   * @param {string} key
   */
  remove(key) {
    localStorage.removeItem(key);
  },
};

/**
 * DOM読み込み後の処理を登録
 * @param {function(Document, Event): any} callback
 * @returns {void}
 */
function init(callback) {
  document.addEventListener('DOMContentLoaded', callback);
}

/**
 * カードを枚数に応じて更新
 * @param {string} id - 文字のid
 * @param {number} num - 文字の枚数
 */
function updateCard(id, num) {
  const cardElm = document.getElementById(id);
  if (num === 0) {
    // 当該文字ボタンを非活性にする
    cardElm.disabled = true;
  } else if (num === 1) {
    // 当該文字ボタンを活性にする
    cardElm.disabled = false;
    // バッジクラスを削除する
    cardElm.classList.remove(CLASS.CARD_BADGE);
    // 当該文字ボタンの枚数バッジの値をクリアする
    document.getElementById(ID.getCardBadgeId(id)).value = '';
  } else {
    // 当該文字ボタンの枚数バッジにnumをセットする
    document.getElementById(ID.getCardBadgeId(id)).textContent = num;
    // バッジクラスを付与する
    cardElm.classList.add(CLASS.CARD_BADGE);
  }
}
