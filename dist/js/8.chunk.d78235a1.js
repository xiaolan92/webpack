(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "8tky":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var download = createCommonjsModule(function (module, exports) {
//download.js v4.2, by dandavis; 2008-2016. [MIT] see http://danml.com/download.html for tests/usage
// v1 landed a FF+Chrome compat way of downloading strings to local un-named files, upgraded to use a hidden frame and optional mime
// v2 added named files via a[download], msSaveBlob, IE (10+) support, and window.URL support for larger+faster saves than dataURLs
// v3 added dataURL and Blob Input, bind-toggle arity, and legacy dataURL fallback was improved with force-download mime and base64 support. 3.1 improved safari handling.
// v4 adds AMD/UMD, commonJS, and plain browser support
// v4.1 adds url download capability via solo URL argument (same domain/CORS only)
// v4.2 adds semantic variable names, long (over 2MB) dataURL support, and hidden by default temp anchors
// https://github.com/rndme/download

(function (root, factory) {
	{
		// Node. Does not work with strict CommonJS, but
		// only CommonJS-like environments that support module.exports,
		// like Node.
		module.exports = factory();
	}
}(commonjsGlobal, function () {

	return function download(data, strFileName, strMimeType) {

		var self = window, // this script is only for browsers anyway...
			defaultMime = "application/octet-stream", // this default mime also triggers iframe downloads
			mimeType = strMimeType || defaultMime,
			payload = data,
			url = !strFileName && !strMimeType && payload,
			anchor = document.createElement("a"),
			toString = function(a){return String(a);},
			myBlob = (self.Blob || self.MozBlob || self.WebKitBlob || toString),
			fileName = strFileName || "download",
			blob,
			reader;
			myBlob= myBlob.call ? myBlob.bind(self) : Blob ;
	  
		if(String(this)==="true"){ //reverse arguments, allowing download.bind(true, "text/xml", "export.xml") to act as a callback
			payload=[payload, mimeType];
			mimeType=payload[0];
			payload=payload[1];
		}


		if(url && url.length< 2048){ // if no filename and no mime, assume a url was passed as the only argument
			fileName = url.split("/").pop().split("?")[0];
			anchor.href = url; // assign href prop to temp anchor
		  	if(anchor.href.indexOf(url) !== -1){ // if the browser determines that it's a potentially valid url path:
        		var ajax=new XMLHttpRequest();
        		ajax.open( "GET", url, true);
        		ajax.responseType = 'blob';
        		ajax.onload= function(e){ 
				  download(e.target.response, fileName, defaultMime);
				};
        		setTimeout(function(){ ajax.send();}, 0); // allows setting custom ajax headers using the return:
			    return ajax;
			} // end if valid url?
		} // end if url?


		//go ahead and download dataURLs right away
		if(/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(payload)){
		
			if(payload.length > (1024*1024*1.999) && myBlob !== toString ){
				payload=dataUrlToBlob(payload);
				mimeType=payload.type || defaultMime;
			}else {			
				return navigator.msSaveBlob ?  // IE10 can't do a[download], only Blobs:
					navigator.msSaveBlob(dataUrlToBlob(payload), fileName) :
					saver(payload) ; // everyone else can save dataURLs un-processed
			}
			
		}else {//not data url, is it a string with special needs?
			if(/([\x80-\xff])/.test(payload)){			  
				var i=0, tempUiArr= new Uint8Array(payload.length), mx=tempUiArr.length;
				for(i;i<mx;++i) tempUiArr[i]= payload.charCodeAt(i);
			 	payload=new myBlob([tempUiArr], {type: mimeType});
			}		  
		}
		blob = payload instanceof myBlob ?
			payload :
			new myBlob([payload], {type: mimeType}) ;


		function dataUrlToBlob(strUrl) {
			var parts= strUrl.split(/[:;,]/),
			type= parts[1],
			decoder= parts[2] == "base64" ? atob : decodeURIComponent,
			binData= decoder( parts.pop() ),
			mx= binData.length,
			i= 0,
			uiArr= new Uint8Array(mx);

			for(i;i<mx;++i) uiArr[i]= binData.charCodeAt(i);

			return new myBlob([uiArr], {type: type});
		 }

		function saver(url, winMode){

			if ('download' in anchor) { //html5 A[download]
				anchor.href = url;
				anchor.setAttribute("download", fileName);
				anchor.className = "download-js-link";
				anchor.innerHTML = "downloading...";
				anchor.style.display = "none";
				document.body.appendChild(anchor);
				setTimeout(function() {
					anchor.click();
					document.body.removeChild(anchor);
					if(winMode===true){setTimeout(function(){ self.URL.revokeObjectURL(anchor.href);}, 250 );}
				}, 66);
				return true;
			}

			// handle non-a[download] safari as best we can:
			if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent)) {
				if(/^data:/.test(url))	url="data:"+url.replace(/^data:([\w\/\-\+]+)/, defaultMime);
				if(!window.open(url)){ // popup blocked, offer direct download:
					if(confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.")){ location.href=url; }
				}
				return true;
			}

			//do iframe dataURL download (old ch+FF):
			var f = document.createElement("iframe");
			document.body.appendChild(f);

			if(!winMode && /^data:/.test(url)){ // force a mime that will download:
				url="data:"+url.replace(/^data:([\w\/\-\+]+)/, defaultMime);
			}
			f.src=url;
			setTimeout(function(){ document.body.removeChild(f); }, 333);

		}//end saver




		if (navigator.msSaveBlob) { // IE10+ : (has Blob, but not a[download] or URL)
			return navigator.msSaveBlob(blob, fileName);
		}

		if(self.URL){ // simple fast and modern way using Blob and URL:
			saver(self.URL.createObjectURL(blob), true);
		}else {
			// handle non-Blob()+non-URL browsers:
			if(typeof blob === "string" || blob.constructor===toString ){
				try{
					return saver( "data:" +  mimeType   + ";base64,"  +  self.btoa(blob)  );
				}catch(y){
					return saver( "data:" +  mimeType   + "," + encodeURIComponent(blob)  );
				}
			}

			// Blob but not URL support:
			reader=new FileReader();
			reader.onload=function(e){
				saver(this.result);
			};
			reader.readAsDataURL(blob);
		}
		return true;
	}; /* end download() */
}));
});

//

var script = {
  props: {
    // mime type [xls, csv]
    type: {
      type: String,
      default: "xls",
    },
    // Json to download
    data: {
      type: Array,
      required: false,
      default: null,
    },
    // fields inside the Json Object that you want to export
    // if no given, all the properties in the Json are exported
    fields: {
      type: Object,
      default: () => null,
    },
    // this prop is used to fix the problem with other components that use the
    // variable fields, like vee-validate. exportFields works exactly like fields
    exportFields: {
      type: Object,
      default: () => null,
    },
    // Use as fallback when the row has no field values
    defaultValue: {
      type: String,
      required: false,
      default: "",
    },
    // Title(s) for the data, could be a string or an array of strings (multiple titles)
    header: {
      default: null,
    },
    // Footer(s) for the data, could be a string or an array of strings (multiple footers)
    footer: {
      default: null,
    },
    // filename to export
    name: {
      type: String,
      default: "data.xls",
    },
    fetch: {
      type: Function,
    },
    meta: {
      type: Array,
      default: () => [],
    },
    worksheet: {
      type: String,
      default: "Sheet1",
    },
    //event before generate was called
    beforeGenerate: {
      type: Function,
    },
    //event before download pops up
    beforeFinish: {
      type: Function,
    },
    // Determine if CSV Data should be escaped
    escapeCsv: {
      type: Boolean,
      default: true,
    },
    // long number stringify
    stringifyLongNum: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    // unique identifier
    idName() {
      var now = new Date().getTime();
      return "export_" + now;
    },

    downloadFields() {
      if (this.fields) return this.fields;

      if (this.exportFields) return this.exportFields;
    },
  },
  methods: {
    async generate() {
      if (typeof this.beforeGenerate === "function") {
        await this.beforeGenerate();
      }
      let data = this.data;
      if (typeof this.fetch === "function" || !data) data = await this.fetch();

      if (!data || !data.length) {
        return;
      }

      let json = this.getProcessedJson(data, this.downloadFields);
      if (this.type === "html") {
        // this is mainly for testing
        return this.export(
          this.jsonToXLS(json),
          this.name.replace(".xls", ".html"),
          "text/html"
        );
      } else if (this.type === "csv") {
        return this.export(
          this.jsonToCSV(json),
          this.name.replace(".xls", ".csv"),
          "application/csv"
        );
      }
      return this.export(
        this.jsonToXLS(json),
        this.name,
        "application/vnd.ms-excel"
      );
    },
    /*
		Use downloadjs to generate the download link
		*/
    export: async function (data, filename, mime) {
      let blob = this.base64ToBlob(data, mime);
      if (typeof this.beforeFinish === "function") await this.beforeFinish();
      download(blob, filename, mime);
    },
    /*
		jsonToXLS
		---------------
		Transform json data into an xml document with MS Excel format, sadly
		it shows a prompt when it opens, that is a default behavior for
		Microsoft office and cannot be avoided. It's recommended to use CSV format instead.
		*/
    jsonToXLS(data) {
      let xlsTemp =
        '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta name=ProgId content=Excel.Sheet> <meta name=Generator content="Microsoft Excel 11"><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>${worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><style>br {mso-data-placement: same-cell;}</style></head><body><table>${table}</table></body></html>';
      let xlsData = "<thead>";
      const colspan = Object.keys(data[0]).length;
      let _self = this;

      //Header
      const header = this.header || this.$attrs.title;
      if (header) {
        xlsData += this.parseExtraData(
          header,
          '<tr><th colspan="' + colspan + '">${data}</th></tr>'
        );
      }

      //Fields
      xlsData += "<tr>";
      for (let key in data[0]) {
        xlsData += "<th>" + key + "</th>";
      }
      xlsData += "</tr>";
      xlsData += "</thead>";

      //Data
      xlsData += "<tbody>";
      data.map(function (item, index) {
        xlsData += "<tr>";
        for (let key in item) {
          xlsData +=
            "<td>" +
            _self.preprocessLongNum(
              _self.valueReformattedForMultilines(item[key])
            ) +
            "</td>";
        }
        xlsData += "</tr>";
      });
      xlsData += "</tbody>";

      //Footer
      if (this.footer != null) {
        xlsData += "<tfoot>";
        xlsData += this.parseExtraData(
          this.footer,
          '<tr><td colspan="' + colspan + '">${data}</td></tr>'
        );
        xlsData += "</tfoot>";
      }

      return xlsTemp
        .replace("${table}", xlsData)
        .replace("${worksheet}", this.worksheet);
    },
    /*
		jsonToCSV
		---------------
		Transform json data into an CSV file.
		*/
    jsonToCSV(data) {
      let _self = this;
      var csvData = [];

      //Header
      const header = this.header || this.$attrs.title;
      if (header) {
        csvData.push(this.parseExtraData(header, "${data}\r\n"));
      }

      //Fields
      for (let key in data[0]) {
        csvData.push(key);
        csvData.push(",");
      }
      csvData.pop();
      csvData.push("\r\n");
      //Data
      data.map(function (item) {
        for (let key in item) {
          let escapedCSV = item[key] + "";
          // Escaped CSV data to string to avoid problems with numbers or other types of values
          // this is controlled by the prop escapeCsv
          if (_self.escapeCsv) {
            escapedCSV = '="' + escapedCSV + '"'; // cast Numbers to string
            if (escapedCSV.match(/[,"\n]/)) {
              escapedCSV = '"' + escapedCSV.replace(/\"/g, '""') + '"';
            }
          }
          csvData.push(escapedCSV);
          csvData.push(",");
        }
        csvData.pop();
        csvData.push("\r\n");
      });
      //Footer
      if (this.footer != null) {
        csvData.push(this.parseExtraData(this.footer, "${data}\r\n"));
      }
      return csvData.join("");
    },
    /*
		getProcessedJson
		---------------
		Get only the data to export, if no fields are set return all the data
		*/
    getProcessedJson(data, header) {
      let keys = this.getKeys(data, header);
      let newData = [];
      let _self = this;
      data.map(function (item, index) {
        let newItem = {};
        for (let label in keys) {
          let property = keys[label];
          newItem[label] = _self.getValue(property, item);
        }
        newData.push(newItem);
      });

      return newData;
    },
    getKeys(data, header) {
      if (header) {
        return header;
      }

      let keys = {};
      for (let key in data[0]) {
        keys[key] = key;
      }
      return keys;
    },
    /*
		parseExtraData
		---------------
		Parse title and footer attribute to the csv format
		*/
    parseExtraData(extraData, format) {
      let parseData = "";
      if (Array.isArray(extraData)) {
        for (var i = 0; i < extraData.length; i++) {
          if (extraData[i])
            parseData += format.replace("${data}", extraData[i]);
        }
      } else {
        parseData += format.replace("${data}", extraData);
      }
      return parseData;
    },

    getValue(key, item) {
      const field = typeof key !== "object" ? key : key.field;
      let indexes = typeof field !== "string" ? [] : field.split(".");
      let value = this.defaultValue;

      if (!field) value = item;
      else if (indexes.length > 1)
        value = this.getValueFromNestedItem(item, indexes);
      else value = this.parseValue(item[field]);

      if (key.hasOwnProperty("callback"))
        value = this.getValueFromCallback(value, key.callback);

      return value;
    },

    /*
    convert values with newline \n characters into <br/>
    */
    valueReformattedForMultilines(value) {
      if (typeof value == "string") return value.replace(/\n/gi, "<br/>");
      else return value;
    },
    preprocessLongNum(value) {
      if (this.stringifyLongNum) {
        if (String(value).startsWith("0x")) {
          return value;
        }
        if (!isNaN(value) && value != "") {
          if (value > 99999999999 || value < 0.0000000000001) {
            return '="' + value + '"';
          }
        }
      }
      return value;
    },
    getValueFromNestedItem(item, indexes) {
      let nestedItem = item;
      for (let index of indexes) {
        if (nestedItem) nestedItem = nestedItem[index];
      }
      return this.parseValue(nestedItem);
    },

    getValueFromCallback(item, callback) {
      if (typeof callback !== "function") return this.defaultValue;
      const value = callback(item);
      return this.parseValue(value);
    },
    parseValue(value) {
      return value || value === 0 || typeof value === "boolean"
        ? value
        : this.defaultValue;
    },
    base64ToBlob(data, mime) {
      let base64 = window.btoa(window.unescape(encodeURIComponent(data)));
      let bstr = atob(base64);
      let n = bstr.length;
      let u8arr = new Uint8ClampedArray(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new Blob([u8arr], { type: mime });
    },
  }, // end methods
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { attrs: { id: _vm.idName }, on: { click: _vm.generate } },
    [_vm._t("default", [_vm._v(" Download " + _vm._s(_vm.name) + " ")])],
    2
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var JsonExcel = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

/* unused harmony default export */ var _unused_webpack_default_export = (JsonExcel);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("yLpj")))

/***/ }),

/***/ "H76q":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".detail .item[data-v-16727d3b]{padding:10px 0}.detail .item .label[data-v-16727d3b]{display:inline-block;width:120px}.searchContainer .commen[data-v-16727d3b]{width:170px;margin-top:10px}.searchContainer .confirm[data-v-16727d3b],.searchContainer .export[data-v-16727d3b]{margin-top:10px;display:inline-block}.searchContainer .export[data-v-16727d3b]{margin-left:30px}.ordersList[data-v-16727d3b]{height:800px;margin-top:10px}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "JOv+":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("H76q");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("SZ7m").default
var update = add("54ce95ec", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "YyeL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_orders_vue_vue_type_style_index_0_id_16727d3b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("JOv+");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_orders_vue_vue_type_style_index_0_id_16727d3b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_orders_vue_vue_type_style_index_0_id_16727d3b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_orders_vue_vue_type_style_index_0_id_16727d3b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "pM4r":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/orderManage/orders.vue?vue&type=template&id=16727d3b&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.ordersData.list && _vm.ordersData.list.order_list
    ? _c(
        "div",
        [
          _c(
            "el-dialog",
            {
              attrs: {
                visible: _vm.visible,
                title: "详情",
                center: "",
                "before-close": _vm.close
              }
            },
            [
              _c("div", { staticClass: "detail" }, [
                _c("div", { staticClass: "item" }, [
                  _c("span", { staticClass: "label" }, [_vm._v("ID:")]),
                  _vm._v(" "),
                  _c("span", [_vm._v(_vm._s(_vm.currentItem.id))])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "item" }, [
                  _c("span", { staticClass: "label" }, [_vm._v("订单编号:")]),
                  _vm._v(" "),
                  _c("span", [_vm._v(_vm._s(_vm.currentItem.order_sn))])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "item" }, [
                  _c("span", { staticClass: "label" }, [_vm._v("商家名称:")]),
                  _vm._v(" "),
                  _c("span", [_vm._v(_vm._s(_vm.currentItem.shop_name))])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "item" }, [
                  _c("span", { staticClass: "label" }, [_vm._v("用户ID:")]),
                  _vm._v(" "),
                  _c("span", [_vm._v(_vm._s(_vm.currentItem.user_id))])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "item" }, [
                  _c("span", { staticClass: "label" }, [_vm._v("商家ID:")]),
                  _vm._v(" "),
                  _c("span", [_vm._v(_vm._s(_vm.currentItem.shop_id))])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "item" }, [
                  _c("span", { staticClass: "label" }, [_vm._v("件数:")]),
                  _vm._v(" "),
                  _c("span", [_vm._v(_vm._s(_vm.currentItem.goods_num))])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "item" }, [
                  _c("span", { staticClass: "label" }, [_vm._v("商品名称:")]),
                  _vm._v(" "),
                  _c("span", [_vm._v(_vm._s(_vm.currentItem.goods_name))])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "item" }, [
                  _c("span", { staticClass: "label" }, [_vm._v("物流公司:")]),
                  _vm._v(" "),
                  _c("span", [_vm._v(_vm._s(_vm.currentItem.express_company))])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "item" }, [
                  _c("span", { staticClass: "label" }, [_vm._v("物流单号:")]),
                  _vm._v(" "),
                  _c("span", [_vm._v(_vm._s(_vm.currentItem.express_no))])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "item" }, [
                  _c("span", { staticClass: "label" }, [_vm._v("付款时间:")]),
                  _vm._v(" "),
                  _c("span", [_vm._v(_vm._s(_vm.currentItem.pay_way))])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "item" }, [
                  _c("span", [_vm._v("发货时间:")]),
                  _vm._v(" "),
                  _c("span", [_vm._v(_vm._s(_vm.currentItem.delivery_time))])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "item" }, [
                  _c("span", { staticClass: "label" }, [_vm._v("签收时间:")]),
                  _vm._v(" "),
                  _c("span", [_vm._v(_vm._s(_vm.currentItem.submission_time))])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "item" }, [
                  _c("span", { staticClass: "label" }, [_vm._v("付款方式:")]),
                  _vm._v(" "),
                  _c("span", [
                    _vm._v(_vm._s(_vm._f("payWay")(_vm.currentItem.pay_way)))
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "item" }, [
                  _c("span", { staticClass: "label" }, [_vm._v("订单状态:")]),
                  _vm._v(" "),
                  _c("span", [
                    _vm._v(
                      _vm._s(_vm._f("orderStatus")(_vm.currentItem.status))
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass: "dialog-footer",
                  attrs: { slot: "footer" },
                  slot: "footer"
                },
                [
                  _c(
                    "el-button",
                    {
                      attrs: { type: "primary" },
                      on: {
                        click: function($event) {
                          _vm.visible = false
                        }
                      }
                    },
                    [_vm._v("确 定")]
                  )
                ],
                1
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "header",
            { staticClass: "searchContainer" },
            [
              _c("el-input", {
                staticClass: "commen",
                attrs: { placeholder: "请输入订单编号" }
              }),
              _vm._v(" "),
              _c("el-input", {
                staticClass: "commen",
                attrs: { placeholder: "请输入用户ID" }
              }),
              _vm._v(" "),
              _c("el-input", {
                staticClass: "commen",
                attrs: { placeholder: "请输入昵称" }
              }),
              _vm._v(" "),
              _c("el-input", {
                staticClass: "commen",
                attrs: { placeholder: "请输入手机号码" }
              }),
              _vm._v(" "),
              _c("el-input", {
                staticClass: "commen",
                attrs: { placeholder: "请输入商品名称" }
              }),
              _vm._v(" "),
              _c("el-input", {
                staticClass: "commen",
                attrs: { placeholder: "请输入物流单号" }
              }),
              _vm._v(" "),
              _c("el-date-picker", {
                attrs: {
                  type: "date",
                  placeholder: "发货时间",
                  "picker-options": _vm.pickerOptions
                },
                model: {
                  value: _vm.time,
                  callback: function($$v) {
                    _vm.time = $$v
                  },
                  expression: "time"
                }
              }),
              _vm._v(" "),
              _c(
                "el-select",
                {
                  staticStyle: { width: "120px" },
                  attrs: { placeholder: "商品状态", clearable: "" },
                  model: {
                    value: _vm.value,
                    callback: function($$v) {
                      _vm.value = $$v
                    },
                    expression: "value"
                  }
                },
                _vm._l(_vm.options, function(item) {
                  return _c("el-option", {
                    key: item.value,
                    attrs: { label: item.label, value: item.value }
                  })
                }),
                1
              ),
              _vm._v(" "),
              _c(
                "el-button",
                { staticClass: "confirm", attrs: { type: "primary" } },
                [_vm._v("\n      确定\n    ")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "ordersList" },
            [
              _c(
                "el-table",
                {
                  staticStyle: {},
                  attrs: {
                    data: _vm.ordersData.list.order_list,
                    border: "",
                    "header-cell-style": {
                      "text-align": "center",
                      color: "black"
                    },
                    "cell-style": { "text-align": "center", padding: "5px 0" }
                  }
                },
                [
                  _c("el-table-column", {
                    attrs: { prop: "id", label: "序号" }
                  }),
                  _vm._v(" "),
                  _c("el-table-column", {
                    attrs: {
                      prop: "order_sn",
                      label: "订单编号",
                      "show-overflow-tooltip": true
                    }
                  }),
                  _vm._v(" "),
                  _c("el-table-column", {
                    attrs: {
                      label: "商家名称",
                      prop: "shop_name",
                      "show-overflow-tooltip": true
                    }
                  }),
                  _vm._v(" "),
                  _c("el-table-column", {
                    attrs: { prop: "user_id", label: "用户ID" }
                  }),
                  _vm._v(" "),
                  _c("el-table-column", {
                    attrs: { prop: "shop_id", label: "商家ID" }
                  }),
                  _vm._v(" "),
                  _c("el-table-column", {
                    attrs: { label: "件数", prop: "goods_num" }
                  }),
                  _vm._v(" "),
                  _c("el-table-column", {
                    attrs: {
                      prop: "goods_name",
                      label: "商品名称",
                      "show-overflow-tooltip": true
                    }
                  }),
                  _vm._v(" "),
                  _c("el-table-column", {
                    attrs: { prop: "express_company", label: "物流公司" }
                  }),
                  _vm._v(" "),
                  _c("el-table-column", {
                    attrs: { prop: "express_no", label: "物流单号" }
                  }),
                  _vm._v(" "),
                  _c("el-table-column", {
                    attrs: { label: "付款时间", prop: "pay_time" }
                  }),
                  _vm._v(" "),
                  _c("el-table-column", {
                    attrs: { label: "发货时间", prop: "delivery_time" }
                  }),
                  _vm._v(" "),
                  _c("el-table-column", {
                    attrs: { label: "签收时间", prop: "submission_time" }
                  }),
                  _vm._v(" "),
                  _c("el-table-column", {
                    attrs: { label: "付款方式" },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "default",
                          fn: function(scope) {
                            return [
                              _c("div", [
                                _vm._v(
                                  _vm._s(_vm._f("payWay")(scope.row.pay_way))
                                )
                              ])
                            ]
                          }
                        }
                      ],
                      null,
                      false,
                      2932665207
                    )
                  }),
                  _vm._v(" "),
                  _c("el-table-column", {
                    attrs: { label: "订单状态" },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "default",
                          fn: function(scope) {
                            return [
                              _c("div", [
                                _vm._v(
                                  _vm._s(
                                    _vm._f("orderStatus")(scope.row.status)
                                  )
                                )
                              ])
                            ]
                          }
                        }
                      ],
                      null,
                      false,
                      3624319238
                    )
                  }),
                  _vm._v(" "),
                  _c(
                    "el-table-column",
                    {
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "default",
                            fn: function(scope) {
                              return [
                                _c(
                                  "el-button",
                                  {
                                    attrs: { size: "mini", type: "primary" },
                                    on: {
                                      click: function($event) {
                                        return _vm.look(scope.row.id)
                                      }
                                    }
                                  },
                                  [_vm._v("\n            查看\n          ")]
                                )
                              ]
                            }
                          }
                        ],
                        null,
                        false,
                        1713530682
                      )
                    },
                    [
                      _c(
                        "template",
                        { attrs: { "slot-scope": _vm.scope }, slot: "header" },
                        [_vm._v("\n          操作\n        ")]
                      )
                    ],
                    2
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "pagination" },
            [
              _c("el-pagination", {
                attrs: {
                  layout: "prev,pager,next",
                  background: "",
                  "page-size": _vm.limit,
                  total: _vm.ordersData.total
                },
                on: {
                  "current-change": _vm.changePage,
                  "prev-click": _vm.prev,
                  "next-click": _vm.next
                }
              })
            ],
            1
          )
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/views/orderManage/orders.vue?vue&type=template&id=16727d3b&scoped=true&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("o0o1");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("yXPU");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/vue-json-excel/dist/vue-json-excel.esm.js
var vue_json_excel_esm = __webpack_require__("8tky");

// CONCATENATED MODULE: ./node_modules/happypack/loader.js?id=babel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/orderManage/orders.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var ordersvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      pickerOptions: {
        disabledDate: function disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      currentItem: {},
      visible: false,
      // 发货时间
      time: "",
      // 选中的商品状态
      options: [{
        value: "选项1",
        label: "黄金糕"
      }, {
        value: "选项2",
        label: "双皮奶"
      }, {
        value: "选项3",
        label: "蚵仔煎"
      }, {
        value: "选项4",
        label: "龙须面"
      }, {
        value: "选项5",
        label: "北京烤鸭"
      }],
      // 商品状态
      value: "",
      pages: 1,
      limit: 15,
      scope: "scope",
      ordersData: [],
      fields: {
        "序号": "id",
        "订单编号": "order_sn",
        "商家名称": "shop_name",
        "用户ID": "user_id",
        "商家ID": "shop_id",
        "件数": "goods_num",
        "商品名称": "goods_name",
        "物流公司": "express_company",
        "物流单号": "express_no",
        "付款时间": "pay_time",
        "发货时间": "delivery_time",
        "签收时间": "submission_time",
        "付款方式": {
          field: "pay_way",
          callback: function callback(value) {
            var word = "";
            var payWay = [{
              code: 1,
              way: "微信"
            }, {
              code: 2,
              way: "支付宝"
            }, {
              code: 3,
              way: "余额 "
            }, {
              code: 4,
              way: "消费券 "
            }, {
              code: 5,
              way: "积分"
            }, {
              code: 6,
              way: "银行卡"
            }];
            payWay.forEach(function (item) {
              if (item.code === value) {
                word = item.way;
              }
            });
            return word;
          }
        },
        "订单状态": {
          field: "status",
          callback: function callback(value) {
            var word = "";
            var status = [{
              code: 1,
              status: "待支付"
            }, {
              code: 2,
              status: "待选择"
            }, {
              code: 3,
              status: "待发货"
            }, {
              code: 4,
              status: "待收获"
            }, {
              code: 5,
              status: "已完成"
            }, {
              code: 6,
              status: "已取消"
            }, {
              code: 7,
              status: "销售中"
            }];
            status.forEach(function (item) {
              if (value === item.code) {
                word = item.status;
              }
            });
            return word;
          }
        }
      }
    };
  },
  created: function created() {
    this.getOrders();
  },
  filters: {
    payWay: function payWay(payCode) {
      var word = "";
      var payWay = [{
        code: 1,
        way: "微信"
      }, {
        code: 2,
        way: "支付宝"
      }, {
        code: 3,
        way: "余额 "
      }, {
        code: 4,
        way: "消费券 "
      }, {
        code: 5,
        way: "积分"
      }, {
        code: 6,
        way: "银行卡"
      }];
      payWay.forEach(function (item) {
        if (item.code === payCode) {
          word = item.way;
          return;
        }
      });
      return word;
    },
    orderStatus: function orderStatus(statusCode) {
      var word = "";
      var status = [{
        code: 1,
        status: "待支付"
      }, {
        code: 2,
        status: "待选择"
      }, {
        code: 3,
        status: "待发货"
      }, {
        code: 4,
        status: "待收获"
      }, {
        code: 5,
        status: "已完成"
      }, {
        code: 6,
        status: "已取消"
      }, {
        code: 7,
        status: "销售中"
      }];
      status.forEach(function (item) {
        if (statusCode === item.code) {
          word = item.status;
          return;
        }
      });
      return word;
    }
  },
  methods: {
    getOrders: function getOrders() {
      var _this = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var res;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _this.axios.get("order/list", {
                  params: {
                    limit: _this.limit,
                    pages: _this.pages,
                    // 普通订单
                    type: 1
                  }
                });

              case 3:
                res = _context.sent;
                _this.ordersData = res.data;
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }))();
    },
    // 查看
    look: function look(id) {
      var currentItem = this.ordersData.list.order_list.find(function (item) {
        return item.id === id;
      });
      this.currentItem = currentItem;
      this.visible = true;
    },
    // 翻页
    changePage: function changePage(page) {
      this.pages = page;
      this.getOrders();
    },
    // 上一页
    prev: function prev() {
      this.pages--;
      this.getOrders();
    },
    // 下一页
    next: function next() {
      this.pages++;
      this.getOrders();
    },
    close: function close() {
      this.visible = false;
    }
  },
  components: {// JsonExcel,
  }
});
// CONCATENATED MODULE: ./src/views/orderManage/orders.vue?vue&type=script&lang=js&
 /* harmony default export */ var orderManage_ordersvue_type_script_lang_js_ = (ordersvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/orderManage/orders.vue?vue&type=style&index=0&id=16727d3b&lang=scss&scoped=true&
var ordersvue_type_style_index_0_id_16727d3b_lang_scss_scoped_true_ = __webpack_require__("YyeL");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("KHd+");

// CONCATENATED MODULE: ./src/views/orderManage/orders.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  orderManage_ordersvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "16727d3b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/orderManage/orders.vue"
/* harmony default export */ var orders = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);