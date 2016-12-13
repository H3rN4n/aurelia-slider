'use strict';

System.register(['aurelia-templating'], function (_export, _context) {
    "use strict";

    var customElement, _dec, _class, Slider;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaTemplating) {
            customElement = _aureliaTemplating.customElement;
        }],
        execute: function () {
            _export('Slider', Slider = (_dec = customElement('ai-slider'), _dec(_class = function Slider() {
                _classCallCheck(this, Slider);
            }) || _class));

            _export('Slider', Slider);
        }
    };
});