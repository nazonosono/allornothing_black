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
