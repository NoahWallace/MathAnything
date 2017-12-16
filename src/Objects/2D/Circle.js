"use strict";
var Circle = (function () {
    function Circle(v, type) {
        var _this = this;
        this.setDimensions = {
            fromArea: function (a) {
                _this.area = a;
                _this.radius = Circle.getRadius.fromArea(a);
                _this.diameter = Circle.getDiameter.fromArea(a);
                _this.circumference = Circle.getCircumference.fromArea(a);
                return _this;
            },
            fromCircumference: function (c) {
                _this.circumference = c;
                _this.radius = Circle.getRadius.fromCircumference(c);
                _this.diameter = Circle.getDiameter.fromCircumference(c);
                _this.area = Circle.getArea.fromCircumference(c);
                return _this;
            },
            fromDiameter: function (d) {
                _this.diameter = d;
                _this.radius = Circle.getRadius.fromDiameter(d);
                _this.area = Circle.getArea.fromDiameter(d);
                _this.circumference = Circle.getCircumference.fromDiameter(d);
                return _this;
            },
            fromRadius: function (r) {
                _this.radius = r;
                _this.circumference = Circle.getCircumference.fromRadius(r);
                _this.diameter = Circle.getDiameter.fromRadius(r);
                _this.area = Circle.getArea.fromRadius(r);
                return _this;
            },
        };
        if (v && type) {
            switch (type) {
                case 'rad':
                    return this.setDimensions.fromRadius(v);
                case 'circ':
                    return this.setDimensions.fromCircumference(v);
                case 'area':
                    return this.setDimensions.fromArea(v);
                case 'diam':
                    return this.setDimensions.fromDiameter(v);
            }
        }
        return this;
    }
    return Circle;
}());
Circle.getDiameter = {
    fromArea: function (a) { return Circle.getRadius.fromArea(a) * 2; },
    fromCircumference: function (c) { return c / Math.PI; },
    fromRadius: function (r) { return r * 2; },
};
Circle.getRadius = {
    fromArea: function (a) { return Math.sqrt((a / Math.PI)); },
    fromCircumference: function (c) { return (c / Math.PI) / 2; },
    fromDiameter: function (d) { return d / 2; },
};
Circle.getArea = {
    fromCircumference: function (c) { return Math.pow(c, 2) / (4 * Math.PI); },
    fromDiameter: function (d) { return Math.PI * Math.pow((d / 2), 2); },
    fromRadius: function (r) { return Math.PI * Math.pow(r, 2); },
};
Circle.getCircumference = {
    fromArea: function (a) { return (Circle.getRadius.fromArea(a) * 2) * Math.PI; },
    fromDiameter: function (d) { return d * Math.PI; },
    fromRadius: function (r) { return r * 2 * Math.PI; },
};
exports.Circle = Circle;
