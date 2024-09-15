const STORAGE_KEYS = {
  UNLOCKED: 'unlocked',
};

const HIRAGANA = [
  'あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ',
  'さ', 'し', 'す', 'せ', 'そ', 'た', 'ち', 'つ', 'て', 'と',
  'な', 'に', 'ぬ', 'ね', 'の', 'は', 'ひ', 'ふ', 'へ', 'ほ',
  'ま', 'み', 'む', 'め', 'も', 'や', 'ゆ', 'よ', 'ら', 'り',
  'る', 'れ', 'ろ', 'わ', 'を', 'ん',
];

const HIRAGANA_VOICED_TARGET = [
  'か', 'き', 'く', 'け', 'こ', 'さ', 'し', 'す', 'せ', 'そ',
  'た', 'ち', 'つ', 'て', 'と', 'は', 'ひ', 'ふ', 'へ', 'ほ',
]
const HIRAGANA_VOICED = [
  'が', 'ぎ', 'ぐ', 'げ', 'ご', 'ざ', 'じ', 'ず', 'ぜ', 'ぞ',
  'だ', 'ぢ', 'づ', 'で', 'ど', 'ば', 'び', 'ぶ', 'べ', 'ぼ',
];

const HIRAGANA_SEMI_VOICED_TARGET = [
  'は', 'ひ', 'ふ', 'へ', 'ほ',
]

const HIRAGANA_SEMI_VOICED = [
  'ぱ', 'ぴ', 'ぷ', 'ぺ', 'ぽ',
]

const HIRAGANA_SMALL_TARGET = [
  'あ', 'い', 'う', 'え', 'お', 'つ', 'や', 'ゆ', 'よ',
]

const HIRAGANA_SMALL = [
  'ぁ', 'ぃ', 'ぅ', 'ぇ', 'ぉ', 'っ', 'ゃ', 'ゅ', 'ょ',
]

const CLASS = {
};

const ID = {
  HIRAGANA_CARD_PREFIX: 'hira-',
  getCardId: (hiraIdx) => ID.HIRAGANA_CARD_PREFIX + hiraIdx,
  MODAL: 'modal',
  MODAL_HIRAGANA: 'modal_contents_1',
  INPUT_TEXT: 'input-text',
  ERROR_MESSAGE: 'error-message',
  VOICED_MARK: 'voiced-mark',
  SEMI_VOICED_MARK: 'semi-voiced-mark',
  TO_SMALL: 'to-small-hiragana',
  DELETE_CHAR: 'delete-char',
};
