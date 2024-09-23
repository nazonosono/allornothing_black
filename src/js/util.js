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
   * LocalStorageの配列データに要素を追加する（重複なし）
   * @param {string} key
   * @param {any} value - JSONに変換可能な型
   */
  add(key, value) {
    const array = storageUtil.get(key);
    if (array.includes(value)) {
      return;
    }
    array.push(value);
    storageUtil.set(key, array);
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

  /**
   * LocalStorageの配列データから要素を削除する
   * @param {string} key
   * @param {any} index - 削除したい要素のインデックス
   */
  removeArrayItem(key, index) {
    const array = storageUtil.get(key);
    array.splice(index, 1);
    storageUtil.set(key, array);
  },
};
