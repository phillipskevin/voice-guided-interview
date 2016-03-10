'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var debug = require('debug')('VGI:services/voice');

module.exports = function () {
  function QuestionsService() {
    // train NaturalBrain with voice actions

    _classCallCheck(this, QuestionsService);
  }

  _createClass(QuestionsService, [{
    key: 'find',
    value: function find(params) {
      var results = undefined;

      debug('FIND', params);

      if (!results) {
        results = [{
          action: 'answer',
          subaction: 'set',
          value: params.query.transcript
        }];
      }

      return Promise.resolve(results);
    }
  }]);

  return QuestionsService;
}();