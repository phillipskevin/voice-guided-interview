'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
  function CategoryService() {
    _classCallCheck(this, CategoryService);

    this.questions = [{
      type: 'select',
      question: 'What do you want for lunch today?',
      variable: 'category',
      options: ['Burger', 'Pizza', 'Sandwich']
    }];
  }

  _createClass(CategoryService, [{
    key: 'find',
    value: function find(params) {
      return Promise.resolve(this.questions);
    }
  }]);

  return CategoryService;
}();