"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
function App() {
    var intro = "BoSo Company";
    var text1 = "Semper fidelis";
    var text2 = "Bzdura";
    var user_face = require("./img/default_user.jpg")["default"];
    var user_face2 = require("./img/default_user.jpg")["default"];
    return (react_1["default"].createElement("main", null,
        react_1["default"].createElement("div", { className: "header" },
            react_1["default"].createElement("div", { className: "intro" }, intro)),
        react_1["default"].createElement("div", { className: "personal-container" },
            react_1["default"].createElement("div", { className: "person-one" },
                react_1["default"].createElement("div", { className: "photo" },
                    react_1["default"].createElement("img", { className: "person-img", src: user_face })),
                react_1["default"].createElement("div", { className: "personal-info" }),
                react_1["default"].createElement("div", { className: "personal-bar" })),
            react_1["default"].createElement("div", { className: "person-two" },
                react_1["default"].createElement("div", { className: "photo" },
                    react_1["default"].createElement("img", { className: "person-img", src: user_face2 })),
                react_1["default"].createElement("div", { className: "personal-info" }),
                react_1["default"].createElement("div", { className: "personal-bar" })))));
}
exports["default"] = App;
