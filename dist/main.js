/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/
(() => { // webpackBootstrap
    /******/
    var __webpack_modules__ = ({

        /***/ "./src/index.js":
        /*!**********************!*\
          !*** ./src/index.js ***!
          \**********************/
        /***/ (() => {

            eval("const userlist = document.querySelector('.user-list')\r\n\r\nasync function getUsers(){\r\n    let response = await fetch('http://localhost:3000/users');\r\n    userlist.innerHTML += `<tr></tr><td>name</td>  <td>age</td><td>phone</td></tr>`;\r\n    userlist.style.borderStyle = 'solid'\r\n    if (response.ok) {\r\n        let data = await response.json();\r\n        for (let user of data) {\r\n            userlist.innerHTML +=`<tr></tr><td>${user.name}</td>  <td>${user.age}</td>  <td>+${user.phone}</td></tr>`;\r\n        }\r\n    } else {\r\n        alert('Ошибка' + response.status);\r\n    }\r\n}\r\ngetUsers()\r\n\n\n//# sourceURL=webpack://webpack/./src/index.js?");

            /***/
        })

        /******/
    });
    /************************************************************************/
    /******/
    /******/ 	// startup
    /******/ 	// Load entry module and return exports
    /******/ 	// This entry module can't be inlined because the eval devtool is used.
    /******/
    var __webpack_exports__ = {};
    /******/
    __webpack_modules__["./src/index.js"]();
    /******/
    /******/
})()
;