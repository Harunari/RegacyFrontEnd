const regacyLibrary = {
    _property: null,
    init: function (orderNumber) {
        this._property = orderNumber;
    },
    showProperty: function () {
        console.log(`This private property is ${this._property}.`);
    }
};

const globalAge = 24;

console.log("load regacy JS code");