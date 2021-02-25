(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "EzyP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_qucklyOrders_vue_vue_type_style_index_0_id_7972a3b4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("sXgk");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_qucklyOrders_vue_vue_type_style_index_0_id_7972a3b4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_qucklyOrders_vue_vue_type_style_index_0_id_7972a3b4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_qucklyOrders_vue_vue_type_style_index_0_id_7972a3b4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "G64e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/orderManage/qucklyOrders.vue?vue&type=template&id=7972a3b4&scoped=true&
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


// CONCATENATED MODULE: ./src/views/orderManage/qucklyOrders.vue?vue&type=template&id=7972a3b4&scoped=true&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("o0o1");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("yXPU");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// CONCATENATED MODULE: ./node_modules/happypack/loader.js?id=babel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/orderManage/qucklyOrders.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import JsonExcel from "vue-json-excel";
/* harmony default export */ var qucklyOrdersvue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./src/views/orderManage/qucklyOrders.vue?vue&type=script&lang=js&
 /* harmony default export */ var orderManage_qucklyOrdersvue_type_script_lang_js_ = (qucklyOrdersvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/orderManage/qucklyOrders.vue?vue&type=style&index=0&id=7972a3b4&lang=scss&scoped=true&
var qucklyOrdersvue_type_style_index_0_id_7972a3b4_lang_scss_scoped_true_ = __webpack_require__("EzyP");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("KHd+");

// CONCATENATED MODULE: ./src/views/orderManage/qucklyOrders.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  orderManage_qucklyOrdersvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "7972a3b4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/orderManage/qucklyOrders.vue"
/* harmony default export */ var qucklyOrders = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "sXgk":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("yAyG");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("SZ7m").default
var update = add("452bf3cf", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "yAyG":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".detail .item[data-v-7972a3b4]{padding:10px 0}.detail .item .label[data-v-7972a3b4]{display:inline-block;width:120px}.searchContainer .commen[data-v-7972a3b4]{width:170px;margin-top:10px}.searchContainer .confirm[data-v-7972a3b4],.searchContainer .export[data-v-7972a3b4]{margin-top:10px;display:inline-block}.searchContainer .export[data-v-7972a3b4]{margin-left:30px}.ordersList[data-v-7972a3b4]{height:800px;margin-top:10px}\n", ""]);
// Exports
module.exports = exports;


/***/ })

}]);