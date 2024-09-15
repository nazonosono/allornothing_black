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

const CLASS = {
};

const ID = {
  HIRAGANA_CARD_PREFIX: 'hira-',
  getCardId: (hiraIdx) => ID.HIRAGANA_CARD_PREFIX + hiraIdx,
  MODAL: 'modal',
  MODAL_HIRAGANA: 'modal_contents_1',
  INPUT_TEXT: 'input-text',
  ERROR_MESSAGE: 'error-message',
};
