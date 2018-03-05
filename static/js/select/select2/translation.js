import Utils from "./utils";
import $ from "jquery";
import EN from "./i18n/en";

  function Translation (dict) {
    this.dict = dict || {};
  }

  Translation.prototype.all = function () {
    return this.dict;
  };

  Translation.prototype.get = function (key) {
    return this.dict[key];
  };

  Translation.prototype.extend = function (translation) {
    this.dict = $.extend({}, translation.all(), this.dict);
  };

  // Static functions

  Translation._cache = {};

  Translation.loadPath = function (path) {
    if (path !== "./i18n/en") {return false;}
    if (!(path in Translation._cache)) {
        var translations = EN;
        Translation._cache[path] = translations;
    }

    return new Translation(Translation._cache[path]);
  };

  export default Translation;

