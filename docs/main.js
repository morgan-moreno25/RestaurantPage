/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Contact.js":
/*!************************!*\
  !*** ./src/Contact.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Contact(){\n    this.content = document.getElementById('content');\n\n    const self = this;\n\n    const FIELDS = [ 'name', 'email', 'message' ];\n\n    function capitalize(str){\n        let strArr = str.split('');\n        strArr.splice(0, 1, strArr[0].toUpperCase());\n        return strArr.join('');\n    };\n    function createHeader(){\n        const header = document.createElement('h1');\n        header.classList.add('section-header');\n        header.innerHTML = 'Contact';\n\n        return header;\n    };\n    function createFormGroup(field){\n        const group = document.createElement('div');\n        group.classList.add('form-group');\n\n        const label = document.createElement('label');\n        label.htmlFor = field;\n        label.innerHTML = capitalize(field);\n        group.appendChild(label);\n\n        let input;\n        if(field === 'name' || field === 'email'){\n            input = document.createElement('input');\n        };\n        if(field === 'message'){\n            input = document.createElement('textarea');\n            input.rows = 5;\n            input.cols = 100;\n        };\n        input.type = 'text';\n        input.id = field;\n        input.name = field;\n        group.appendChild(input);\n\n\n        return group;\n    };\n    function createContactForm(){\n        const form = document.createElement('form');\n        form.classList.add('form');\n\n        for(let i = 0; i < FIELDS.length; i++){\n            form.appendChild(createFormGroup(FIELDS[i]));\n        };\n\n        const submitBtn = document.createElement('button');\n        submitBtn.classList.add('btn-submit');\n        submitBtn.type = 'button';\n        submitBtn.innerHTML = 'Submit';\n        submitBtn.addEventListener('click', function(e){\n            e.preventDefault();\n            handleFormSubmit();\n        });\n        form.appendChild(submitBtn);\n\n        return form;\n    };\n    function handleFormSubmit(){\n        let name = document.getElementById('name').value;\n        let email = document.getElementById('email').value;\n        let message = document.getElementById('message').value;\n\n        alert(`\n        MESSAGE SENT: \\n\n        NAME: ${name} \\n\n        EMAIL: ${email} \\n\n        MESSAGE: ${message}\n        `)\n    };\n\n\n    return {\n        render: function(){\n            let h = createHeader();\n            let f = createContactForm();\n\n            self.content.classList.add('contact');\n            self.content.append(h, f);\n        },\n    };\n};\n\nmodule.exports = new Contact();\n\n//# sourceURL=webpack:///./src/Contact.js?");

/***/ }),

/***/ "./src/Home.js":
/*!*********************!*\
  !*** ./src/Home.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Home(){\n    this.content = document.getElementById('content');\n\n    let self = this;\n\n    function createHeader(){\n        const header = document.createElement('h1');\n        header.innerHTML = \"Papi's Restaurant\";\n        header.classList.add('section-header');\n\n        return header;\n    };\n    function createContent(){\n        const content = document.createElement('p');\n        content.innerHTML = `\n            Here at Papi's, we specialize in bringing you top shelf cuisines at affordable prices. We were founded in 1920 by Papi himself and have evolved throughout the years to\n            be able to serve you as best as we can! Here you will be able to find whatever food suits your fancy as our everything is our specialty!\n          `\n\n        return content;\n    };\n\n    return {\n        render: function(){\n            let h = createHeader();\n            let c = createContent();\n\n            self.content.classList.add('home');\n            self.content.append(h, c);\n        },\n    };\n};\n\nmodule.exports = new Home();\n\n//# sourceURL=webpack:///./src/Home.js?");

/***/ }),

/***/ "./src/Menu.js":
/*!*********************!*\
  !*** ./src/Menu.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Menu(){\n    this.content = document.getElementById('content');\n\n    const self = this;\n\n    const menuItems = [\n        { name: 'Default Glizzy', img_path: './images/default_glizzy.jpg', description: 'Just a regular glizzy. Top as desired.', price: '5.00' },\n        { name: 'Shrimp Glizzy', img_path: './images/shrimp_glizzy.jpg', description: 'Glizzy straight from the ocean.', price: '10.25' },\n        { name: 'Banana Glizzy', img_path: './images/banana_glizzy.jpg', description: 'Glizzy for the healthy ones out there.', price: '6.75' },\n        { name: 'Bacon Wrapped Glizzy', img_path: './images/bacon_wrapped_glizzy.jpg', description: 'Glizzy wrapped in bacon. Top as desired.', price: '12.50' },\n        { name: 'Ramen Glizzy', img_path: './images/ramen_glizzy.jpg', description: 'Glizzy with an international touch.', price: '7.00' },\n        { name: 'Taco Glizzy', img_path: './images/taco_glizzy.jpg', description: 'Spanish twist on the glizzy.', price: '10.00' },\n    ];\n\n    function createHeader(){\n        const header = document.createElement('h1');\n        header.classList.add('section-header');\n        header.innerHTML = 'Menu';\n\n        return header;\n    };\n    function createMenuItem(item){\n        const card = document.createElement('div');\n        card.classList.add('card');\n\n        const img = document.createElement('img');\n        img.classList.add('card--img');\n        img.src = item.img_path;\n        img.alt = `Image of ${item.name}`;\n        card.appendChild(img);\n\n        const cardContent = document.createElement('div');\n        cardContent.classList.add('card--content');\n        card.appendChild(cardContent);\n\n        const cardTitle = document.createElement('h4');\n        cardTitle.classList.add('card--title');\n        cardTitle.innerHTML = `${item.name}`;\n        cardContent.appendChild(cardTitle);\n\n        const cardDescription = document.createElement('p');\n        cardDescription.classList.add('card--description');\n        cardDescription.innerHTML = `${item.description}`;\n        cardContent.appendChild(cardDescription);\n\n        const cardPrice = document.createElement('p');\n        cardPrice.classList.add('card--price');\n        cardPrice.innerHTML = `PRICE: $${item.price}`;\n        cardContent.appendChild(cardPrice);\n\n        return card;\n    };\n    function createMenu(items){\n        const menu = document.createElement('div');\n        menu.classList.add('menu-list');\n        \n        for(let i = 0; i < items.length; i++){\n            menu.appendChild(createMenuItem(items[i]));\n        };\n\n        return menu;\n    };\n\n    return {\n        render: function(){\n            let h = createHeader();\n            let m = createMenu(menuItems);\n\n            self.content.classList.add('menu');\n            self.content.append(h, m);\n        },\n    };\n};\n\nmodule.exports = new Menu();\n\n//# sourceURL=webpack:///./src/Menu.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Home = __webpack_require__(/*! ./Home */ \"./src/Home.js\");\nconst Menu = __webpack_require__(/*! ./Menu */ \"./src/Menu.js\");\nconst Contact = __webpack_require__(/*! ./Contact */ \"./src/Contact.js\");\n\nconst Index = (() => {\n    const content = document.getElementById('content');\n    const homeBtn = document.getElementById('home');\n    const menuBtn = document.getElementById('menu');\n    const contactBtn = document.getElementById('contact');\n\n    function addEventListeners(){\n        homeBtn.addEventListener('click', function(){\n            clearActiveClass();\n            homeBtn.classList.add('active');\n\n            clearContent();\n            Home.render();\n        });\n\n        menuBtn.addEventListener('click', function(){\n            clearActiveClass();\n            menuBtn.classList.add('active');\n\n            clearContent();\n            Menu.render();\n        });\n\n        contactBtn.addEventListener('click', function(){\n            clearActiveClass();\n            contactBtn.classList.add('active');\n\n            clearContent();\n            Contact.render();\n        })\n    };\n    function clearActiveClass(){\n        homeBtn.classList.remove('active');\n        menuBtn.classList.remove('active');\n        contactBtn.classList.remove('active');\n    };\n    function clearContent(){\n        while(content.children.length > 0){\n            content.removeChild(content.firstChild);\n        };\n    };\n\n    return {\n        init: () => {\n            addEventListeners();\n            Home.render();\n        },\n    };\n})();\n\nIndex.init();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });