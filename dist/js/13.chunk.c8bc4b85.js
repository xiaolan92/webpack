(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "H/vC":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".roleContent[data-v-14505c45]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.roleContent .addRole[data-v-14505c45]{-ms-flex-item-align:end;align-self:flex-end;border:1px solid #f7961c;padding:7px 20px;border-radius:4px;margin:15px 0;cursor:pointer}.roleContent .sort-content[data-v-14505c45]{height:900px;margin-top:10px}.roleContent .sort-content .pagination[data-v-14505c45]{margin-top:15px}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "HDAX":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("H/vC");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("SZ7m").default
var update = add("16d3fe58", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "HuZL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_roleList_vue_vue_type_style_index_0_id_14505c45_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HDAX");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_roleList_vue_vue_type_style_index_0_id_14505c45_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_roleList_vue_vue_type_style_index_0_id_14505c45_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_roleList_vue_vue_type_style_index_0_id_14505c45_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "xP+0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/systemManage/roleList.vue?vue&type=template&id=14505c45&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "roleContent" },
    [
      _c(
        "el-dialog",
        {
          attrs: {
            title: "添加角色",
            visible: _vm.dialogVisible,
            width: "600px",
            "before-close": _vm.close
          }
        },
        [
          _c(
            "el-form",
            [
              _c(
                "el-form-item",
                { attrs: { label: "角色名称" } },
                [
                  _c("el-input", {
                    staticStyle: { width: "300px" },
                    model: {
                      value: _vm.form.name,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "name", $$v)
                      },
                      expression: "form.name"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("el-form-item", { attrs: { label: "角色权限" } }, [
                _c(
                  "div",
                  { staticStyle: { "margin-top": "10px" } },
                  [
                    _c("el-tree", {
                      ref: "tree",
                      staticStyle: { "margin-left": "80px" },
                      attrs: {
                        data: _vm.permisssionMenu,
                        "show-checkbox": "",
                        "node-key": "id",
                        props: _vm.defaultProps
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
      ),
      _vm._v(" "),
      _c(
        "el-dialog",
        {
          attrs: {
            title: "修改角色",
            visible: _vm.modifyStatus,
            width: "600px",
            "before-close": _vm.close
          }
        },
        [
          _c(
            "el-form",
            [
              _c(
                "el-form-item",
                { attrs: { label: "角色名称" } },
                [
                  _c("el-input", {
                    staticStyle: { width: "300px" },
                    model: {
                      value: _vm.form.roleName,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "roleName", $$v)
                      },
                      expression: "form.roleName"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("el-form-item", { attrs: { label: "角色权限" } }, [
                _c(
                  "div",
                  { staticStyle: { "margin-top": "10px" } },
                  [
                    _c("el-tree", {
                      ref: "tree",
                      staticStyle: { "margin-left": "80px" },
                      attrs: {
                        data: _vm.permisssionMenu,
                        "show-checkbox": "",
                        "node-key": "id",
                        props: _vm.defaultProps
                      },
                      on: { "check-change": _vm.onChange }
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
                {
                  attrs: { type: "primary" },
                  on: { click: _vm.confirmModify }
                },
                [_vm._v("确 定")]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "addRole", on: { click: _vm.addRole } }, [
        _vm._v("\n    添加角色\n  ")
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "sort-content" },
        [
          _c(
            "el-table",
            {
              staticStyle: {},
              attrs: {
                data: _vm.userData.list,
                border: "",
                "header-cell-style": { "text-align": "center", color: "black" },
                "cell-style": { "text-align": "center" }
              }
            },
            [
              _c("el-table-column", { attrs: { prop: "id", label: "序号" } }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { prop: "name", label: "角色账户名称" }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { label: "状态", prop: "desStatus" }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { prop: "created_at", label: "创建时间" }
              }),
              _vm._v(" "),
              _c(
                "el-table-column",
                {
                  attrs: { width: "250px" },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function(scope) {
                        return [
                          _c(
                            "el-button",
                            {
                              attrs: { size: "mini" },
                              on: {
                                click: function($event) {
                                  return _vm.modify(scope.row.id)
                                }
                              }
                            },
                            [_vm._v("\n            修改\n          ")]
                          ),
                          _vm._v(" "),
                          _c("el-switch", {
                            staticStyle: { "margin-left": "30px" },
                            attrs: {
                              "active-text": "启用",
                              "inactive-text": "禁用"
                            },
                            model: {
                              value: scope.row.status,
                              callback: function($$v) {
                                _vm.$set(scope.row, "status", $$v)
                              },
                              expression: "scope.row.status"
                            }
                          })
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
              total: _vm.userData.total
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


// CONCATENATED MODULE: ./src/views/systemManage/roleList.vue?vue&type=template&id=14505c45&scoped=true&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("o0o1");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("yXPU");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// CONCATENATED MODULE: ./node_modules/happypack/loader.js?id=babel!./node_modules/vue-loader/lib??vue-loader-options!./src/views/systemManage/roleList.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var roleListvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      scope: "scope",
      dialogVisible: false,
      modifyStatus: false,
      userData: [],
      limit: 10,
      pages: 1,
      defaultProps: {
        children: "_child",
        label: "name"
      },
      //  权限菜单
      permisssionMenu: [],
      // 角色权限列表
      permissionList: [],
      form: {},
      // 角色id
      roleId: ""
    };
  },
  created: function created() {
    this.getUserList();
  },
  mounted: function mounted() {
    this.getPermissionMenu();
  },
  methods: {
    // 获取角色列表
    getUserList: function getUserList() {
      var _this = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var res;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _this.axios.get("/admin/getRoleList", {
                  params: {
                    limit: _this.limit,
                    pages: _this.pages
                  }
                });

              case 3:
                res = _context.sent;
                _this.userData = Object.assign(res.data, {
                  list: res.data.list.map(function (item) {
                    return Object.assign(item, {
                      status: item.status === 1 ? true : false,
                      desStatus: item.status === 1 ? "启用" : "禁用"
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
    addRole: function addRole() {
      this.dialogVisible = true;
    },
    // 上一页
    prev: function prev() {
      this.pages--;
      this.getUserList();
    },
    // 获取权限菜单
    getPermissionMenu: function getPermissionMenu() {
      var _this2 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
        var res;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _this2.axios.get("/admin/menu", {
                  params: {
                    // 获取节点
                    type: 2
                  }
                });

              case 3:
                res = _context2.sent;
                _this2.permisssionMenu = res.data;
                _context2.next = 10;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                console.log(_context2.t0);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }))();
    },
    // 添加角色
    confirm: function confirm() {
      var _this3 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee3() {
        var selectedNodes, res;
        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                selectedNodes = _this3.$refs.tree.getCheckedKeys().concat(_this3.$refs.tree.getHalfCheckedKeys());
                _context3.prev = 1;
                _context3.next = 4;
                return _this3.axios.post("/admin/addrole", {
                  name: _this3.form.name,
                  path: selectedNodes.join(",")
                });

              case 4:
                res = _context3.sent;

                _this3.close();

                _this3.$message.success({
                  message: res.msg
                });

                _this3.pages = 1;

                _this3.getUserList();

                _context3.next = 14;
                break;

              case 11:
                _context3.prev = 11;
                _context3.t0 = _context3["catch"](1);
                console.log(_context3.t0);

              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[1, 11]]);
      }))();
    },
    // 修改
    modify: function modify(id) {
      this.getRolePermission(id);
      this.roleId = id;
      this.modifyStatus = true;
    },
    // 获取角色权限
    getRolePermission: function getRolePermission(id) {
      var _this4 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee4() {
        var res;
        return regenerator_default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _this4.axios.get("/admin/getrole", {
                  params: {
                    "role_id": id
                  }
                });

              case 3:
                res = _context4.sent;

                _this4.$nextTick(function () {
                  // 数据回显,解决数据半选问题
                  res.data.path.forEach(function (item) {
                    var node = _this4.$refs.tree.getNode(item);

                    if (node.isLeaf) {
                      _this4.$refs.tree.setChecked(node, true);
                    } else {
                      node.indeterminate = true;
                      node.checked = true;
                    }
                  });
                });

                _context4.next = 10;
                break;

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](0);
                console.log(_context4.t0);

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 7]]);
      }))();
    },
    onChange: function onChange(a) {
      var anode = this.$refs.tree.getNode(a);
      !anode.checked ? this.findchildren(anode.parent) : "";
    },
    findchildren: function findchildren(current) {
      var fnode = this.$refs.tree.getNode(current);

      if (!fnode.isLeaf) {
        fnode.indeterminate = true;
        fnode.checked = true;
      }
    },
    // 修改角色权限
    confirmModify: function confirmModify() {
      var _this5 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee5() {
        var selectedNodes, res;
        return regenerator_default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                selectedNodes = _this5.$refs.tree.getCheckedKeys().concat(_this5.$refs.tree.getHalfCheckedKeys());
                _context5.prev = 1;
                _context5.next = 4;
                return _this5.axios.post("/admin/uprole", {
                  "role_id": _this5.roleId,
                  name: _this5.form.roleName,
                  path: selectedNodes.join(",")
                });

              case 4:
                res = _context5.sent;

                _this5.$message.success({
                  message: res.msg
                });

                _this5.form = {};

                _this5.close();

                _this5.getUserList();

                _context5.next = 14;
                break;

              case 11:
                _context5.prev = 11;
                _context5.t0 = _context5["catch"](1);
                console.log(_context5.t0);

              case 14:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[1, 11]]);
      }))();
    },
    close: function close() {
      this.dialogVisible = false;
      this.modifyStatus = false;
      this.form = {};
      this.$refs.tree.setCheckedKeys([]);
    },
    // 翻页
    changePage: function changePage(page) {
      this.pages = page;
      this.getUserList();
    },
    // 下一页
    next: function next() {
      this.pages++;
      this.getUserList();
    }
  },
  components: {}
});
// CONCATENATED MODULE: ./src/views/systemManage/roleList.vue?vue&type=script&lang=js&
 /* harmony default export */ var systemManage_roleListvue_type_script_lang_js_ = (roleListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/systemManage/roleList.vue?vue&type=style&index=0&id=14505c45&lang=scss&scoped=true&
var roleListvue_type_style_index_0_id_14505c45_lang_scss_scoped_true_ = __webpack_require__("HuZL");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("KHd+");

// CONCATENATED MODULE: ./src/views/systemManage/roleList.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  systemManage_roleListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "14505c45",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/systemManage/roleList.vue"
/* harmony default export */ var roleList = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);