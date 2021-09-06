/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/icons/build-module/library/link.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/link.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const link = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (link);
//# sourceMappingURL=link.js.map

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/link.js");







wp.blocks.registerBlockType("mj/linking-tile", {
  title: "Linking tile",
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor",
    class: "bi bi-app",
    viewBox: "0 0 16 16"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
    d: "M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z"
  })),
  category: "common",
  attributes: {
    imageUrl: {
      type: "string"
    },
    paddingTop: {
      type: "number",
      default: 20
    },
    paddingBottom: {
      type: "number",
      default: 20
    },
    link: {
      type: "string"
    },
    target: {
      type: "string"
    },
    popoverVisible: {
      type: "boolean",
      default: false
    },
    backgroundColor: {
      type: "string"
    },
    darken: {
      type: "number",
      default: 0
    }
  },
  edit: Edit,
  save: function (props) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InnerBlocks.Content, null);
  }
});

function Edit(props) {
  const ALLOWED_BLOCKS = ["core/heading", "core/paragraph"];

  function setImage(media) {
    props.setAttributes({
      imageUrl: media.url
    });
  }

  function setPaddingTop(paddingTop) {
    props.setAttributes({
      paddingTop: parseInt(paddingTop)
    });
  }

  function setPaddingBottom(paddingBottom) {
    props.setAttributes({
      paddingBottom: parseInt(paddingBottom)
    });
  }

  function setLink(url, post) {
    post ? props.setAttributes({
      link: post.url
    }) : props.setAttributes({
      link: url
    });
  }

  function setBackgroundColor(value) {
    props.setAttributes({
      backgroundColor: value.hex
    });
  }

  function setDarken(value) {
    props.setAttributes({
      darken: value
    });
  }

  function removeImage() {
    props.setAttributes({
      imageUrl: ""
    });
  }

  const styles = {
    withImage: {
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundImage: `linear-gradient(rgba(0, 0, 0, ${props.attributes.darken}), rgba(0, 0, 0, ${props.attributes.darken})), url(${props.attributes.imageUrl})`
    },
    withColor: {
      backgroundColor: props.attributes.backgroundColor
    },
    base: {
      paddingTop: `${props.attributes.paddingTop}px`,
      paddingBottom: `${props.attributes.paddingBottom}px`
    }
  };

  function selectStyle() {
    let selectedStyles = {};

    if (props.attributes.imageUrl) {
      selectedStyles = Object.assign(selectedStyles, styles.withImage);
    }

    if (props.attributes.backgroundColor) {
      selectedStyles = Object.assign(selectedStyles, styles.withColor);
    }

    selectedStyles = Object.assign(selectedStyles, styles.base);
    return selectedStyles;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps)(), {
    style: selectStyle(),
    className: "mj-linkingtile"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InnerBlocks, {
    allowedBlocks: ALLOWED_BLOCKS
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarGroup, {
    label: "Options"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarButton, {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"],
    label: "Link",
    onClick: () => props.setAttributes({
      popoverVisible: true
    })
  }), props.attributes.popoverVisible && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.URLPopover, {
    onClose: () => props.setAttributes({
      popoverVisible: false
    }),
    renderSettings: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: "Open in new tab",
      checked: props.attributes.target == "_blank",
      onChange: () => props.attributes.target ? props.setAttributes({
        target: ""
      }) : props.setAttributes({
        target: "_blank"
      })
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.URLInput, {
    onChange: setLink,
    value: props.attributes.link
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Panel, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: "Background image"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.MediaUpload, {
    onSelect: setImage,
    allowedTypes: "image",
    value: props.attributes.imageUrl,
    render: ({
      open
    }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      className: "is-primary",
      onClick: open
    }, "Choose image")
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    onClick: removeImage
  }, "Remove image")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: "Dark overlay",
    value: props.attributes.darken,
    onChange: setDarken,
    min: 0,
    max: 1,
    step: 0.1,
    className: "fullwidth-panel"
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Panel, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: "Background color"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, {
    color: props.attributes.backgroundColor,
    onChangeComplete: setBackgroundColor,
    disableAlpha: true
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Panel, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: "Paddings"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalNumberControl, {
    label: "Padding top (px)",
    value: props.attributes.paddingTop,
    onChange: setPaddingTop
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalNumberControl, {
    label: "Padding bottom (px)",
    value: props.attributes.paddingBottom,
    onChange: setPaddingBottom
  }))))));
}
}();
/******/ })()
;
//# sourceMappingURL=index.js.map