const MISSION_COUNT = 20;

const IMG_PATH = 'img';

const STORAGE_KEYS = {
  VISITED: 'visited',
  UNLOCKED: 'unlocked',
  TEMP_WORD_PREFIX: 'temp-',
  getTempWordKey: (missionId) => STORAGE_KEYS.TEMP_WORD_PREFIX + missionId,
  CLEARED_WORD_PREFIX: 'cleared-',
  getClearedWordKey: (missionId) => STORAGE_KEYS.CLEARED_WORD_PREFIX + missionId,
};

const ID = {
  // 五十音
  HIRAGANA_CARD_PREFIX: 'hira-',
  getCardId: (hiraIdx) => ID.HIRAGANA_CARD_PREFIX + hiraIdx,

  // モーダル
  MODAL: 'modal',

  // ミッション作成画面
  INPUT_TEXT: 'input-text',
  ERROR_MESSAGE: 'error-message',
  VOICED_MARK: 'voiced-mark',
  SEMI_VOICED_MARK: 'semi-voiced-mark',
  TO_SMALL: 'to-small-hiragana',
  DELETE_CHAR: 'delete-char',
  CREATE_MISSION_COMPLETED_MODAL: 'create_mission_completed_modal',
  CREATE_TEMP_MISSION: 'make_contents',
  CLEARED_WORDS: 'cleared_words',
  MISSION_ID: 'mission_id',

  // 仮作成一覧画面
  TEMP_MISSION_LIST: 'created_content_list',
  NOW_MISSION_ID: 'now-mission-id',
  NOW_TEMP_WORD_IDX: 'now-temp-word-idx',
  REMOVE_TEMP_MISSION_MODAL: 'remove_temp_mission_modal',
  MISSION_CLEAR_MODAL: 'mission_clear_modal',
  CONFIRM_CLEAR_MODAL: 'confirm_clear_modal',

  // カメラ画面
  OBTAINED_HIRAGANA: 'obtained_hiragana'
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

const MISSION_ICON = Object.freeze({
  CAMERA: 'camera',
  CHECK: 'check',
  CHECK_CAMERA: 'check&camera',
});

const MISSION = {
  1: {
    text: (word) => `実物の黒い${word}が写った写真を撮る`,
    icon: MISSION_ICON.CAMERA,
  },
  2: {
    text: (word) => `自分と${word}が同じ人を見つける`,
    icon: MISSION_ICON.CAMERA,
  },
  3: {
    text: (word) => `今日${word}を自分が食べた`,
    icon: MISSION_ICON.CAMERA,
  },
  4: {
    text: (word) => `今日${word}に行ってきた`,
    icon: MISSION_ICON.CAMERA,
  },
  5: {
    text: (word) => `今日プレイした"${word}"のクリア画面を見せる`,
    icon: MISSION_ICON.CHECK_CAMERA,
  },
  6: {
    text: (word) => `死ぬ気で${word}する`,
    icon: MISSION_ICON.CHECK_CAMERA,
  },
  7: {
    text: (word) => `${word}みたいに「ぶらっく」と言う`,
    icon: MISSION_ICON.CHECK_CAMERA,
  },
  8: {
    text: (word) => `${word}に対する愛をアピールする`,
    icon: MISSION_ICON.CHECK_CAMERA,
  },
  9: {
    text: (word) => `${word}についての上手いウソ雑学を言う`,
    icon: MISSION_ICON.CHECK,
  },
  10: {
    text: (word) => `公演"${word}"にまつわるグッズを受付に持ってくる`,
    icon: MISSION_ICON.CHECK,
  },
  11: {
    text: (word) => `公演"${word}"のキービジュアルを再現した写真を撮る`,
    icon: MISSION_ICON.CAMERA,
  },
  12: {
    text: (word) => `謎の園会場にあるものを使って、答えが${word}になるような謎を作る`,
    icon: MISSION_ICON.CAMERA,
  },
  13: {
    text: (word) => `受付で、"謎解き"と"${word}"でなぞかけをする`,
    icon: MISSION_ICON.CHECK,
  },
  14: {
    text: (word) => `謎の園の${word}について語った長文をXでポストする`,
    icon: MISSION_ICON.CHECK_CAMERA,
  },
  15: {
    text: (word) => `${word}を謎の園にいるスタッフにあげる`,
    icon: MISSION_ICON.CHECK_CAMERA,
  },
  16: {
    text: (word) => `10人以上で${word}する`,
    icon: MISSION_ICON.CHECK_CAMERA,
  },
  17: {
    text: (word) => `受付横で、${word}を100回する`,
    icon: MISSION_ICON.CHECK,
  },
  18: {
    text: (word) => `受付横で、1分間${word}する`,
    icon: MISSION_ICON.CHECK,
  },
  19: {
    text: (word) => `会場の入り口に貼ってある、${word}が答えの小謎を解き明かす`,
    icon: MISSION_ICON.CHECK,
  },
  20: {
    text: (word) => `${word}のアイテムミッションに挑戦して、クリアする`,
    icon: MISSION_ICON.CHECK,
  },
}
