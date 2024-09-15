// @prepros-prepend constant.js
// @prepros-prepend util.js

/**
 * DOM読み込み後の処理を登録
 * @param {function(Document, Event): any} callback
 * @returns {void}
 */
function init(callback) {
  document.addEventListener('DOMContentLoaded', callback);
}
