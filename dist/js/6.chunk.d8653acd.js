(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "Gzxi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return client; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setImgName; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ali_oss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("mxV5");
/* harmony import */ var ali_oss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ali_oss__WEBPACK_IMPORTED_MODULE_2__);



/* eslint-disable consistent-return */

/* eslint-disable one-var */
 // 阿里云图片oss配置

var client = function client() {
  return new ali_oss__WEBPACK_IMPORTED_MODULE_2___default.a({
    region: "oss-cn-beijing",
    accessKeyId: "LTAI4G4GvvKZwgrgCVguwAHz",
    accessKeySecret: "mDZSsy2WAXNjZfCVJkAs2T0RtJOzNF",
    bucket: "suixinsuiyi"
  });
}; // 阿里云上传图片命名

var setImgName = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(clientOss, file, folder) {
    var suffixArr, suffix, date, day, fileName, res;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // 上传文件类型
            suffixArr = file.file.name.split("."), suffix = suffixArr[suffixArr.length - 1], date = new Date(), day = String(date.getFullYear()) + (date.getMonth() + 1) + date.getDate(), fileName = String(date.getFullYear()) + (date.getMonth() + 1) + date.getDate() + date.getMilliseconds();
            _context.prev = 1;
            _context.next = 4;
            return clientOss.put("backstage/".concat(day, "/").concat(folder, "/").concat(fileName, ".").concat(suffix), file.file, {
              headers: {
                "Content-Disposition": "inline",
                "Content-Type": suffix
              }
            });

          case 4:
            res = _context.sent;
            console.log(res);
            return _context.abrupt("return", res.url);

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 9]]);
  }));

  return function setImgName(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "JBhL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/bannerlist/bannerlist.vue?vue&type=template&id=604aea05&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "qucklyGoods" },
    [
      _c("Add", { on: { getData: _vm.bannerlist } }),
      _vm._v(" "),
      _c("Register", {
        attrs: {
          "register-visible": _vm.registerVisible,
          "row-data": _vm.rowData
        },
        on: {
          getData: _vm.bannerlist,
          "update:registerVisible": function($event) {
            _vm.registerVisible = $event
          },
          "update:register-visible": function($event) {
            _vm.registerVisible = $event
          }
        }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "table" },
        [
          _c(
            "el-table",
            {
              staticStyle: {},
              attrs: {
                data: _vm.tableData.list,
                border: "",
                "header-cell-style": { "text-align": "center", color: "black" },
                "cell-style": { "text-align": "center" }
              }
            },
            [
              _c("el-table-column", { attrs: { prop: "id", label: "序号" } }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { label: "轮播图" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(scope) {
                      return [
                        _c("img", {
                          staticStyle: { width: "50px", height: "50px" },
                          attrs: { src: scope.row.image_url }
                        })
                      ]
                    }
                  }
                ])
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { prop: "type", label: "轮播图类型" }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { prop: "position", label: "轮播图位置" }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { prop: "url", label: "跳转地址" }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { prop: "status", label: "显示状态" }
              }),
              _vm._v(" "),
              _c("el-table-column", { attrs: { prop: "sort", label: "排序" } }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { prop: "created_at", label: "创建时间" }
              }),
              _vm._v(" "),
              _c(
                "el-table-column",
                {
                  attrs: { width: "200px" },
                  scopedSlots: _vm._u([
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
                                  return _vm.update(scope.row)
                                }
                              }
                            },
                            [_vm._v("\n            修改轮播图\n          ")]
                          )
                        ]
                      }
                    }
                  ])
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
              total: _vm.tableData.total
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
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/views/bannerlist/bannerlist.vue?vue&type=template&id=604aea05&scoped=true&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("o0o1");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("yXPU");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/bannerlist/add.vue?vue&type=template&id=35e1e176&scoped=true&
var addvue_type_template_id_35e1e176_scoped_true_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "goods-container" },
    [
      _c(
        "el-button",
        {
          on: {
            click: function($event) {
              _vm.dialogVisible = true
            }
          }
        },
        [_vm._v("\n    添加广告/轮播\n  ")]
      ),
      _vm._v(" "),
      _c(
        "el-dialog",
        {
          attrs: {
            visible: _vm.dialogVisible,
            width: "460px",
            center: "",
            "before-close": _vm.close
          },
          on: {
            "update:visible": function($event) {
              _vm.dialogVisible = $event
            }
          }
        },
        [
          _c(
            "el-form",
            { attrs: { "label-width": "80px" } },
            [
              _c(
                "el-form-item",
                { attrs: { label: "轮播地址" } },
                [
                  _c(
                    "el-upload",
                    {
                      ref: "uploadTwo",
                      staticStyle: { display: "inline" },
                      attrs: {
                        action: "",
                        limit: 1,
                        "http-request": _vm.detailImgsUpload,
                        "on-remove": _vm.removeFile,
                        "list-type": "picture-card"
                      }
                    },
                    [
                      _c("i", {
                        staticClass: "el-icon-plus",
                        attrs: { slot: "default" },
                        slot: "default"
                      })
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("el-form-item", { attrs: { label: "跳转地址" } }, [
                _c(
                  "div",
                  { staticStyle: { width: "300px" } },
                  [
                    _c("el-input", {
                      model: {
                        value: _vm.url,
                        callback: function($$v) {
                          _vm.url = $$v
                        },
                        expression: "url"
                      }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "显示状态" } },
                [
                  _c(
                    "el-select",
                    {
                      staticStyle: { width: "300px" },
                      attrs: { clearable: "", placeholder: "请选择" },
                      model: {
                        value: _vm.status,
                        callback: function($$v) {
                          _vm.status = $$v
                        },
                        expression: "status"
                      }
                    },
                    _vm._l(_vm.statusList, function(item, index) {
                      return _c("el-option", {
                        key: index,
                        attrs: { label: item.name, value: item.id }
                      })
                    }),
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "轮播类型" } },
                [
                  _c(
                    "el-select",
                    {
                      staticStyle: { width: "300px" },
                      attrs: { clearable: "", placeholder: "请选择" },
                      model: {
                        value: _vm.type,
                        callback: function($$v) {
                          _vm.type = $$v
                        },
                        expression: "type"
                      }
                    },
                    _vm._l(_vm.typeList, function(item, index) {
                      return _c("el-option", {
                        key: index,
                        attrs: { label: item.name, value: item.id }
                      })
                    }),
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "轮播位置" } },
                [
                  _c(
                    "el-select",
                    {
                      staticStyle: { width: "300px" },
                      attrs: { clearable: "", placeholder: "请选择" },
                      model: {
                        value: _vm.position,
                        callback: function($$v) {
                          _vm.position = $$v
                        },
                        expression: "position"
                      }
                    },
                    _vm._l(_vm.positionList, function(item, index) {
                      return _c("el-option", {
                        key: index,
                        attrs: { label: item.name, value: item.id }
                      })
                    }),
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("el-form-item", { attrs: { label: "排序" } }, [
                _c(
                  "div",
                  { staticStyle: { width: "300px" } },
                  [
                    _c("el-input", {
                      model: {
                        value: _vm.sort,
                        callback: function($$v) {
                          _vm.sort = $$v
                        },
                        expression: "sort"
                      }
                    })
                  ],
                  1
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "dialog-footer",
              attrs: { slot: "footer" },
              slot: "footer"
            },
            [
              _c("el-button", { on: { click: _vm.close } }, [_vm._v("取 消")]),
              _vm._v(" "),
              _c(
                "el-button",
                { attrs: { type: "primary" }, on: { click: _vm.confirm } },
                [_vm._v("确 定")]
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var addvue_type_template_id_35e1e176_scoped_true_staticRenderFns = []
addvue_type_template_id_35e1e176_scoped_true_render._withStripped = true


// CONCATENATED MODULE: ./src/views/bannerlist/add.vue?vue&type=template&id=35e1e176&scoped=true&

// EXTERNAL MODULE: ./src/config/oss.js
var oss = __webpack_require__("Gzxi");

// CONCATENATED MODULE: ./node_modules/happypack/loader.js?id=babel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/bannerlist/add.vue?vue&type=script&lang=js&


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

/* harmony default export */ var addvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      dialogVisible: false,
      // 广告/轮播地址
      imageUrl: "",
      // 跳转地址
      url: "",
      // 可用 禁用
      statusList: [{
        "id": 1,
        "name": "可用"
      }, {
        "id": 0,
        "name": "禁用"
      }],
      status: "",
      // 轮播图类型
      typeList: [{
        "id": 1,
        "name": "轮播"
      }, {
        "id": 2,
        "name": "商品广告"
      }, {
        "id": 3,
        "name": "视频广告"
      }],
      type: "",
      // 轮播图位置
      positionList: [{
        "id": 1,
        "name": "首页"
      }, {
        "id": 2,
        "name": "抢单"
      }],
      position: "",
      // 排序
      sort: ""
    };
  },
  // computed: {
  //   // 判断选择了几张，一张时隐藏选择
  //   uploadDisabled:function() {
  //       return this.image_url.length >0
  //   },
  // },
  methods: {
    // 详情图片上传
    detailImgsUpload: function detailImgsUpload(file) {
      var _this = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var url;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(oss["b" /* setImgName */])(Object(oss["a" /* client */])(), file);

              case 2:
                url = _context.sent;
                _this.imageUrl = url;

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    // 删除图片时 清空存在的值
    removeFile: function removeFile() {
      this.imageUrl = "";
    },
    // 添加账号
    confirm: function confirm() {
      var _this2 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
        var res;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(_this2.image_url === "")) {
                  _context2.next = 3;
                  break;
                }

                _this2.$message({
                  message: "请选择广告/轮播地址",
                  type: "warning"
                });

                return _context2.abrupt("return");

              case 3:
                if (!(_this2.status === "")) {
                  _context2.next = 6;
                  break;
                }

                _this2.$message({
                  message: "请填写显示状态",
                  type: "warning"
                });

                return _context2.abrupt("return");

              case 6:
                if (!(_this2.type === "")) {
                  _context2.next = 9;
                  break;
                }

                _this2.$message({
                  message: "请填写轮播图类型",
                  type: "warning"
                });

                return _context2.abrupt("return");

              case 9:
                if (!(_this2.position === "")) {
                  _context2.next = 12;
                  break;
                }

                _this2.$message({
                  message: "请填写轮播图位置",
                  type: "warning"
                });

                return _context2.abrupt("return");

              case 12:
                if (!(_this2.sort === "")) {
                  _context2.next = 15;
                  break;
                }

                _this2.$message({
                  message: "请填写排序",
                  type: "warning"
                });

                return _context2.abrupt("return");

              case 15:
                _context2.prev = 15;
                _context2.next = 18;
                return _this2.axios.post("admin/addbanner", {
                  "image_url": _this2.imageUrl,
                  // 广告/轮播地址
                  "url": _this2.url,
                  // 跳转地址
                  "status": _this2.status,
                  // 可用 禁用
                  "type": _this2.type,
                  // 轮播图类型
                  "position": _this2.position,
                  // 轮播图位置
                  "sort": _this2.sort // 排序

                });

              case 18:
                res = _context2.sent;

                _this2.close();

                _this2.$emit("getData");

                _this2.$message({
                  message: res.msg,
                  type: "success"
                });

                _context2.next = 27;
                break;

              case 24:
                _context2.prev = 24;
                _context2.t0 = _context2["catch"](15);
                console.log(_context2.t0);

              case 27:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[15, 24]]);
      }))();
    },
    close: function close() {
      // 添加成功后，情况表单的内容
      this.imageUrl = "";
      this.url = "";
      this.status = "";
      this.type = "";
      this.position = "";
      this.sort = "";
      this.dialogVisible = false;
      this.$refs["uploadTwo"].clearFiles();
    }
  },
  components: {}
});
// CONCATENATED MODULE: ./src/views/bannerlist/add.vue?vue&type=script&lang=js&
 /* harmony default export */ var bannerlist_addvue_type_script_lang_js_ = (addvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/bannerlist/add.vue?vue&type=style&index=0&id=35e1e176&lang=scss&scoped=true&
var addvue_type_style_index_0_id_35e1e176_lang_scss_scoped_true_ = __webpack_require__("Wr1K");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("KHd+");

// CONCATENATED MODULE: ./src/views/bannerlist/add.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  bannerlist_addvue_type_script_lang_js_,
  addvue_type_template_id_35e1e176_scoped_true_render,
  addvue_type_template_id_35e1e176_scoped_true_staticRenderFns,
  false,
  null,
  "35e1e176",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/bannerlist/add.vue"
/* harmony default export */ var add = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/bannerlist/register.vue?vue&type=template&id=76b6d1c4&scoped=true&
var registervue_type_template_id_76b6d1c4_scoped_true_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "goods-container" },
    [
      _c(
        "el-dialog",
        {
          attrs: {
            visible: _vm.registerVisible,
            width: "460px",
            center: "",
            "before-close": _vm.close
          },
          on: {
            "update:visible": function($event) {
              _vm.registerVisible = $event
            }
          }
        },
        [
          _c(
            "el-form",
            { attrs: { "label-width": "80px" } },
            [
              _c(
                "el-form-item",
                {
                  staticStyle: { height: "148px", overflow: "hidden" },
                  attrs: { label: "轮播地址" }
                },
                [
                  _c(
                    "el-upload",
                    {
                      ref: "uploadTwo",
                      staticStyle: { display: "inline" },
                      attrs: {
                        action: "",
                        limit: 1,
                        "http-request": _vm.detailImgsUpload,
                        "on-remove": _vm.removeFile,
                        "before-upload": _vm.beforeUpload,
                        "on-exceed": _vm.onExceed,
                        "list-type": "picture-card"
                      }
                    },
                    [
                      _c("i", {
                        staticClass: "el-icon-plus",
                        attrs: { slot: "default" },
                        slot: "default"
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c("transition", { attrs: { name: "el-fade-in-linear" } }, [
                    _c("img", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.desImgShow,
                          expression: "desImgShow"
                        }
                      ],
                      staticStyle: { height: "148px", width: "148px" },
                      attrs: { src: _vm.rowData.image_url }
                    })
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c("el-form-item", { attrs: { label: "跳转地址" } }, [
                _c(
                  "div",
                  { staticStyle: { width: "300px" } },
                  [
                    _c("el-input", {
                      model: {
                        value: _vm.rowData.url,
                        callback: function($$v) {
                          _vm.$set(_vm.rowData, "url", $$v)
                        },
                        expression: "rowData.url"
                      }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "显示状态" } },
                [
                  _c(
                    "el-select",
                    {
                      staticStyle: { width: "300px" },
                      attrs: { clearable: "", placeholder: "请选择" },
                      model: {
                        value: _vm.rowData.status,
                        callback: function($$v) {
                          _vm.$set(_vm.rowData, "status", $$v)
                        },
                        expression: "rowData.status"
                      }
                    },
                    _vm._l(_vm.statusList, function(item, index) {
                      return _c("el-option", {
                        key: index,
                        attrs: { label: item.name, value: item.id }
                      })
                    }),
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "轮播类型" } },
                [
                  _c(
                    "el-select",
                    {
                      staticStyle: { width: "300px" },
                      attrs: { clearable: "", placeholder: "请选择" },
                      model: {
                        value: _vm.rowData.type,
                        callback: function($$v) {
                          _vm.$set(_vm.rowData, "type", $$v)
                        },
                        expression: "rowData.type"
                      }
                    },
                    _vm._l(_vm.typeList, function(item, index) {
                      return _c("el-option", {
                        key: index,
                        attrs: { label: item.name, value: item.id }
                      })
                    }),
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "轮播位置" } },
                [
                  _c(
                    "el-select",
                    {
                      staticStyle: { width: "300px" },
                      attrs: { clearable: "", placeholder: "请选择" },
                      model: {
                        value: _vm.rowData.position,
                        callback: function($$v) {
                          _vm.$set(_vm.rowData, "position", $$v)
                        },
                        expression: "rowData.position"
                      }
                    },
                    _vm._l(_vm.positionList, function(item, index) {
                      return _c("el-option", {
                        key: index,
                        attrs: { label: item.name, value: item.id }
                      })
                    }),
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("el-form-item", { attrs: { label: "排序" } }, [
                _c(
                  "div",
                  { staticStyle: { width: "300px" } },
                  [
                    _c("el-input", {
                      model: {
                        value: _vm.rowData.sort,
                        callback: function($$v) {
                          _vm.$set(_vm.rowData, "sort", $$v)
                        },
                        expression: "rowData.sort"
                      }
                    })
                  ],
                  1
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "dialog-footer",
              attrs: { slot: "footer" },
              slot: "footer"
            },
            [
              _c("el-button", { on: { click: _vm.close } }, [_vm._v("取 消")]),
              _vm._v(" "),
              _c(
                "el-button",
                { attrs: { type: "primary" }, on: { click: _vm.confirm } },
                [_vm._v("确 定")]
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var registervue_type_template_id_76b6d1c4_scoped_true_staticRenderFns = []
registervue_type_template_id_76b6d1c4_scoped_true_render._withStripped = true


// CONCATENATED MODULE: ./src/views/bannerlist/register.vue?vue&type=template&id=76b6d1c4&scoped=true&

// CONCATENATED MODULE: ./node_modules/happypack/loader.js?id=babel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/bannerlist/register.vue?vue&type=script&lang=js&


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

/* harmony default export */ var registervue_type_script_lang_js_ = ({
  data: function data() {
    return {
      dialogVisible: false,
      // 默认显示的图片
      desImgShow: true,
      // 广告/轮播地址
      // image_url:"",
      // 跳转地址
      // url:"",
      // 可用 禁用
      statusList: [{
        "id": 1,
        "name": "可用"
      }, {
        "id": 0,
        "name": "禁用"
      }],
      // status:"",
      // 轮播图类型
      typeList: [{
        "id": 1,
        "name": "轮播"
      }, {
        "id": 2,
        "name": "商品广告"
      }, {
        "id": 3,
        "name": "视频广告"
      }],
      // type:"",
      // 轮播图位置
      positionList: [{
        "id": 1,
        "name": "首页"
      }, {
        "id": 2,
        "name": "抢单"
      }] // position:"",
      // 排序
      // sort:""

    };
  },
  created: function created() {// this.image_url=this.rowData.image_url;
  },
  props: {
    registerVisible: {
      type: Boolean,
      defautl: false
    },
    rowData: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  methods: {
    // 详情图片上传
    detailImgsUpload: function detailImgsUpload(file) {
      var _this = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var url;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(oss["b" /* setImgName */])(Object(oss["a" /* client */])(), file);

              case 2:
                url = _context.sent;
                _this.rowData.imageUrl = url;

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    // 删除图片时 清空存在的值
    removeFile: function removeFile() {
      this.rowData.imageUrl = "";
    },
    // 上传文件之前的隐藏 默认显示的图片
    beforeUpload: function beforeUpload() {
      this.desImgShow = false;
    },
    // 文件超出个数限制时
    onExceed: function onExceed() {
      this.$message({
        message: "只能选择一张图",
        type: "warning"
      });
    },
    // 添加账号
    confirm: function confirm() {
      var _this2 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
        var res;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (_this2.rowData.image_url) {
                  _context2.next = 3;
                  break;
                }

                _this2.$message({
                  message: "请选择广告/轮播地址",
                  type: "warning"
                });

                return _context2.abrupt("return");

              case 3:
                _context2.prev = 3;
                _context2.next = 6;
                return _this2.axios.post("admin/savebanner", {
                  "id": _this2.rowData.id,
                  // 主键ID
                  "image_url": _this2.rowData.image_url,
                  // 广告/轮播地址
                  "url": _this2.rowData.url,
                  // 跳转地址
                  "status": _this2.rowData.status,
                  // 可用 禁用
                  "type": _this2.rowData.type,
                  // 轮播图类型
                  "position": _this2.rowData.position,
                  // 轮播图位置
                  "sort": _this2.rowData.sort // 排序

                });

              case 6:
                res = _context2.sent;

                _this2.close();

                _this2.$emit("getData");

                _this2.$message({
                  message: res.msg,
                  type: "success"
                });

                _context2.next = 15;
                break;

              case 12:
                _context2.prev = 12;
                _context2.t0 = _context2["catch"](3);
                console.log(_context2.t0);

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[3, 12]]);
      }))();
    },
    close: function close() {
      // 添加成功后，情况表单的内容
      this.imageUrl = "";
      this.url = "";
      this.status = "";
      this.type = "";
      this.position = "";
      this.sort = "";
      this.dialogVisible = false;
      this.desImgShow = true;
      this.$refs["uploadTwo"].clearFiles();
      this.$emit("update:registerVisible", false);
    }
  },
  components: {}
});
// CONCATENATED MODULE: ./src/views/bannerlist/register.vue?vue&type=script&lang=js&
 /* harmony default export */ var bannerlist_registervue_type_script_lang_js_ = (registervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/bannerlist/register.vue?vue&type=style&index=0&id=76b6d1c4&lang=scss&scoped=true&
var registervue_type_style_index_0_id_76b6d1c4_lang_scss_scoped_true_ = __webpack_require__("kgUd");

// CONCATENATED MODULE: ./src/views/bannerlist/register.vue






/* normalize component */

var register_component = Object(componentNormalizer["a" /* default */])(
  bannerlist_registervue_type_script_lang_js_,
  registervue_type_template_id_76b6d1c4_scoped_true_render,
  registervue_type_template_id_76b6d1c4_scoped_true_staticRenderFns,
  false,
  null,
  "76b6d1c4",
  null
  
)

/* hot reload */
if (false) { var register_api; }
register_component.options.__file = "src/views/bannerlist/register.vue"
/* harmony default export */ var register = (register_component.exports);
// CONCATENATED MODULE: ./node_modules/happypack/loader.js?id=babel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/bannerlist/bannerlist.vue?vue&type=script&lang=js&


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


/* harmony default export */ var bannerlistvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      scope: "scope",
      // 编辑框是否显示
      registerVisible: false,
      // 每页条目数
      limit: 8,
      // 获取哪一页数据
      pages: 1,
      tableData: [],
      // 传给子组件的选中行数据
      rowData: {}
    };
  },
  created: function created() {
    this.bannerlist();
  },
  methods: {
    // 普通商品列表
    bannerlist: function bannerlist() {
      var _this = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var res;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _this.axios.get("/admin/bannerlist", {
                  params: {
                    limit: _this.limit,
                    page: _this.pages
                  }
                });

              case 3:
                res = _context.sent;
                _this.tableData = Object.assign(res.data, {
                  list: res.data.list.map(function (item) {
                    return Object.assign(item, {
                      status: item.status === 1 ? "可用" : "禁用",
                      position: item.position === 1 ? "首页" : "轮播",
                      type: item.type === 1 ? "轮播" : item.type === 2 ? "商品广告" : "视频广告"
                    });
                  })
                });
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
    // 列表行的编辑
    update: function update(row) {
      this.registerVisible = true;
      this.rowData = JSON.parse(JSON.stringify(row));
      this.rowData.status = this.rowData.status === "可用" ? 1 : 0;
      this.rowData.position = this.rowData.position === "首页" ? 1 : 2;
      this.rowData.type = this.rowData.type === "轮播" ? 1 : this.rowData.type === "商品广告" ? 2 : 3;
    },
    // 上一页
    prev: function prev() {
      this.pages--;
      this.bannerlist();
    },
    // 翻页
    changePage: function changePage(page) {
      this.pages = page;
      this.bannerlist();
    },
    // 下一页
    next: function next() {
      this.pages++;
      this.bannerlist();
    }
  },
  components: {
    Add: add,
    Register: register
  }
});
// CONCATENATED MODULE: ./src/views/bannerlist/bannerlist.vue?vue&type=script&lang=js&
 /* harmony default export */ var bannerlist_bannerlistvue_type_script_lang_js_ = (bannerlistvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/bannerlist/bannerlist.vue?vue&type=style&index=0&id=604aea05&lang=scss&scoped=true&
var bannerlistvue_type_style_index_0_id_604aea05_lang_scss_scoped_true_ = __webpack_require__("PkQc");

// CONCATENATED MODULE: ./src/views/bannerlist/bannerlist.vue






/* normalize component */

var bannerlist_component = Object(componentNormalizer["a" /* default */])(
  bannerlist_bannerlistvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "604aea05",
  null
  
)

/* hot reload */
if (false) { var bannerlist_api; }
bannerlist_component.options.__file = "src/views/bannerlist/bannerlist.vue"
/* harmony default export */ var bannerlist_bannerlist = __webpack_exports__["default"] = (bannerlist_component.exports);

/***/ }),

/***/ "PkQc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_bannerlist_vue_vue_type_style_index_0_id_604aea05_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("xIs/");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_bannerlist_vue_vue_type_style_index_0_id_604aea05_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_bannerlist_vue_vue_type_style_index_0_id_604aea05_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_bannerlist_vue_vue_type_style_index_0_id_604aea05_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "U1Sh":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("Yq4d");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("SZ7m").default
var update = add("45b343f8", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "Wr1K":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_style_index_0_id_35e1e176_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("xYAt");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_style_index_0_id_35e1e176_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_style_index_0_id_35e1e176_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_style_index_0_id_35e1e176_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "Yq4d":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".goods-container .size[data-v-76b6d1c4]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:450px;margin-bottom:10px}.goods-container .size .size-item[data-v-76b6d1c4]{width:270px}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "bH65":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".qucklyGoods .table[data-v-604aea05]{margin-top:15px;height:700px}.qucklyGoods .pagination[data-v-604aea05]{margin-top:10px}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "kgUd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_id_76b6d1c4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("U1Sh");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_id_76b6d1c4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_id_76b6d1c4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_id_76b6d1c4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "vHNM":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".goods-container .size[data-v-35e1e176]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:450px;margin-bottom:10px}.goods-container .size .size-item[data-v-35e1e176]{width:270px}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "xIs/":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("bH65");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("SZ7m").default
var update = add("58772f62", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "xYAt":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("vHNM");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("SZ7m").default
var update = add("6441bdde", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);