(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{196:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default='\x3c!-- Hello --\x3e\n\x3c!-- <button data-its-button> --\x3e\n<div class="its-button__content">\n  <ng-content></ng-content>\n\n</div>\n\x3c!-- </button> --\x3e\n'},197:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default=':root {\n  --its-color-primary-start: #f69823;\n  --its-color-primary-end: #eb584d;\n}\n\n.its-button {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  margin: 0;\n  border: none;\n  outline: 0;\n  background: silver;\n  font-family: inherit;\n  font-size: inherit;\n  text-align: center;\n  line-height: 1.5em;\n  padding: 0.5em 1.5em;\n  border: 0;\n  cursor: pointer;\n  border-radius: 1em;\n  font-weight: 600;\n  box-shadow: 0px 2px 4px -3px rgba(0, 0, 0, 1);\n}\n\n.its-button.its-button--disabled {\n  opacity: 0.25;\n  cursor: not-allowed;\n}\n\n.its-button.its-button--outline {\n  background: transparent;\n  color: silver;\n  border-color: currentColor;\n}\n\n/* Primary */\n\n.its-button--color-primary {\n  background: -webkit-gradient(linear, left top, right top, from(var(--its-color-primary-start)), to(var(--its-color-primary-end)));\n  background: linear-gradient(90deg, var(--its-color-primary-start), var(--its-color-primary-end));\n  color: white;\n}\n\n.its-button--color-primary.its-button--outline {\n  --b: 0.2em;  /* border width*/\n  --r: 1em; /* the radius */\n  --g: transparent calc(100% - var(--b)), #fff calc(100% - var(--b) + 1px) 100%;\n  position: relative;\n  z-index: 0;\n}\n\n.its-button--color-primary.its-button--outline:before {\n  content: "";\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  border: var(--b) solid transparent;\n  border-radius: var(--r);\n  background: var(--c, linear-gradient(to right, var(--its-color-primary-start), var(--its-color-primary-end))) border-box;\n  -webkit-mask:\n    radial-gradient(farthest-side at bottom left, var(--g)) top right/var(--r) var(--r),\n    radial-gradient(farthest-side at top right, var(--g)) bottom left /var(--r) var(--r),\n    radial-gradient(farthest-side at top left, var(--g)) bottom right/var(--r) var(--r),\n    radial-gradient(farthest-side at bottom right, var(--g)) top left /var(--r) var(--r),\n    -webkit-gradient(linear, left top, left bottom, from(#fff), to(#fff)) top /100% var(--b),\n    -webkit-gradient(linear, left top, left bottom, from(#fff), to(#fff)) bottom/100% var(--b),\n    -webkit-gradient(linear, left top, left bottom, from(#fff), to(#fff)) left /var(--b) 100%,\n    -webkit-gradient(linear, left top, left bottom, from(#fff), to(#fff)) right /var(--b) 100%;\n  -webkit-mask:\n    radial-gradient(farthest-side at bottom left, var(--g)) top right/var(--r) var(--r),\n    radial-gradient(farthest-side at top right, var(--g)) bottom left /var(--r) var(--r),\n    radial-gradient(farthest-side at top left, var(--g)) bottom right/var(--r) var(--r),\n    radial-gradient(farthest-side at bottom right, var(--g)) top left /var(--r) var(--r),\n    linear-gradient(#fff, #fff) top /100% var(--b),\n    linear-gradient(#fff, #fff) bottom/100% var(--b),\n    linear-gradient(#fff, #fff) left /var(--b) 100%,\n    linear-gradient(#fff, #fff) right /var(--b) 100%;\n          mask:\n    radial-gradient(farthest-side at bottom left, var(--g)) top right/var(--r) var(--r),\n    radial-gradient(farthest-side at top right, var(--g)) bottom left /var(--r) var(--r),\n    radial-gradient(farthest-side at top left, var(--g)) bottom right/var(--r) var(--r),\n    radial-gradient(farthest-side at bottom right, var(--g)) top left /var(--r) var(--r),\n    -webkit-gradient(linear, left top, left bottom, from(#fff), to(#fff)) top /100% var(--b),\n    -webkit-gradient(linear, left top, left bottom, from(#fff), to(#fff)) bottom/100% var(--b),\n    -webkit-gradient(linear, left top, left bottom, from(#fff), to(#fff)) left /var(--b) 100%,\n    -webkit-gradient(linear, left top, left bottom, from(#fff), to(#fff)) right /var(--b) 100%;\n          mask:\n    radial-gradient(farthest-side at bottom left, var(--g)) top right/var(--r) var(--r),\n    radial-gradient(farthest-side at top right, var(--g)) bottom left /var(--r) var(--r),\n    radial-gradient(farthest-side at top left, var(--g)) bottom right/var(--r) var(--r),\n    radial-gradient(farthest-side at bottom right, var(--g)) top left /var(--r) var(--r),\n    linear-gradient(#fff, #fff) top /100% var(--b),\n    linear-gradient(#fff, #fff) bottom/100% var(--b),\n    linear-gradient(#fff, #fff) left /var(--b) 100%,\n    linear-gradient(#fff, #fff) right /var(--b) 100%;\n  -webkit-mask-repeat: no-repeat;\n          mask-repeat: no-repeat;\n}\n\n.its-button--color-primary.its-button--outline .its-button__content {\n  background: -webkit-gradient(linear, left top, right top, from(var(--its-color-primary-start)), to(var(--its-color-primary-end)));\n  background: linear-gradient(to right, var(--its-color-primary-start), var(--its-color-primary-end));\n  -webkit-background-clip: text;\n          background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n/* Secondary */\n\n.its-button--color-secondary {\n  background: var(--color-secondary, hotpink);\n  color: white;\n}\n\n.its-button--color-secondary.its-button--outline {\n  color: var(--color-secondary, hotpink);\n  border-color: currentColor;\n}\n'},198:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default='<ng-content id="dropdown-content"></ng-content>\n'},199:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default=""},201:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default='<input type="checkbox"\n  class="visually-hidden"\n  [(ngModel)]="value"\n  [checked]="value"\n  [name]="name"\n  [id]="id">\n<label class="its-toggle__control"\n  [for]="id">\n  <div class="its-toggle__control__track"></div>\n  <div class="its-toggle__control__button"></div>\n</label>\n'},202:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default="/*\n  Helper -- Move to global CSS/Directive/something\n*/\n.visually-hidden {\n  position: absolute !important;\n  clip: rect(1px 1px 1px 1px); /* IE6, IE7 */\n  clip: rect(1px, 1px, 1px, 1px);\n  padding: 0 !important;\n  border: 0 !important;\n  height: 1px !important;\n  width: 1px !important;\n  overflow: hidden;\n}\n.its-toggle {\n  display: inline-block;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.its-toggle__control {\n  position: relative;\n  display: inline-block;\n  min-width: 36px;\n  cursor: pointer;\n  font-weight: 500;\n  text-align: left;\n  padding: 16px 0;\n}\n.its-toggle__control__track,\n.its-toggle__control__button {\n  position: absolute;\n  margin: 0;\n  outline: 0;\n  top: 50%;\n  -webkit-transform: translate(0, -50%);\n  transform: translate(0, -50%);\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n.its-toggle__control__track {\n  left: 1px;\n  width: 34px;\n  height: 14px;\n  background-color: #c6c5c5;\n  border-radius: 8px;\n}\n.its-toggle__control__button {\n  left: 0;\n  width: 20px;\n  height: 20px;\n  background-color: #f1f1f1;\n  border-radius: 50%;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.14), 0 2px 2px 0 rgba(0, 0, 0, 0.098), 0 1px 5px 0 rgba(0, 0, 0, 0.084);\n}\n.its-toggle > input:checked + .its-toggle__control .its-toggle__control__track {\n  background-color: #b7f0d3;\n}\n.its-toggle > input:checked + .its-toggle__control .its-toggle__control__button {\n  background-color: #4ad991;\n  -webkit-transform: translate(80%, -50%);\n  transform: translate(80%, -50%);\n}\n.its-toggle > input:focus + .its-toggle__control,\n.its-toggle > input:hover + .its-toggle__control {\n  border-radius: 50%;\n  background: #eaecee;\n  border: 2px solid #eaecee;\n}\n.its-toggle > input:focus:checked + .its-toggle__control,\n.its-toggle > input:hover:checked + .its-toggle__control {\n  border-radius: 50%;\n  background: #d1ffed;\n  border: 2px solid #d1ffed;\n}\n"},387:function(module,exports){function webpackEmptyAsyncContext(req){return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}))}webpackEmptyAsyncContext.keys=function(){return[]},webpackEmptyAsyncContext.resolve=webpackEmptyAsyncContext,module.exports=webpackEmptyAsyncContext,webpackEmptyAsyncContext.id=387},395:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return ButtonComponent}));var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1);const SUPPORTED_COLORS=["primary","secondary"];let ButtonComponent=class ButtonComponent{set disabled(val){this.$disabled=val}get disabled(){return this.$disabled}get classes(){const classes=["its-button"];return SUPPORTED_COLORS.includes(this.color)&&classes.push(`its-button--color-${this.color}`),null!=this.outline&&!1!==this.outline&&classes.push("its-button--outline"),null!=this.disabled&&!1!==this.disabled&&classes.push("its-button--disabled"),classes.join(" ")}};Object(tslib__WEBPACK_IMPORTED_MODULE_0__.b)([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)(),Object(tslib__WEBPACK_IMPORTED_MODULE_0__.d)("design:type",String)],ButtonComponent.prototype,"color",void 0),Object(tslib__WEBPACK_IMPORTED_MODULE_0__.b)([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)(),Object(tslib__WEBPACK_IMPORTED_MODULE_0__.d)("design:type",Boolean)],ButtonComponent.prototype,"outline",void 0),Object(tslib__WEBPACK_IMPORTED_MODULE_0__.b)([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)(),Object(tslib__WEBPACK_IMPORTED_MODULE_0__.d)("design:type",Boolean),Object(tslib__WEBPACK_IMPORTED_MODULE_0__.d)("design:paramtypes",[Boolean])],ButtonComponent.prototype,"disabled",null),Object(tslib__WEBPACK_IMPORTED_MODULE_0__.b)([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding)("class"),Object(tslib__WEBPACK_IMPORTED_MODULE_0__.d)("design:type",Object),Object(tslib__WEBPACK_IMPORTED_MODULE_0__.d)("design:paramtypes",[])],ButtonComponent.prototype,"classes",null),ButtonComponent=Object(tslib__WEBPACK_IMPORTED_MODULE_0__.b)([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({selector:"button[its-button], a[its-button], its-button",template:(__webpack_require__(196).default||__webpack_require__(196)).length?__webpack_require__(196).default||__webpack_require__(196):"",styles:[(__webpack_require__(197).default||__webpack_require__(197)).length?__webpack_require__(197).default||__webpack_require__(197):""],encapsulation:_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None})],ButtonComponent)},396:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return ToggleComponent}));var ToggleComponent_1,tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),_angular_forms__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(163),shortid__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(286),rxjs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(33);let ToggleComponent=ToggleComponent_1=class ToggleComponent{constructor(){this.onChange=rxjs__WEBPACK_IMPORTED_MODULE_4__.a,this.onTouch=rxjs__WEBPACK_IMPORTED_MODULE_4__.a,this.classes="its-toggle",this.$value=!1}set name(val){this.$name=val}get name(){return this.$name}set id(val){this.$id=val}get id(){return this.$id}set value(val){void 0!==val&&this.$value!==val&&(this.$value=val,this.onChange(val),this.onTouch(val))}get value(){return this.$value}writeValue(value){this.value=value}registerOnChange(fn){this.onChange=fn}registerOnTouched(fn){this.onTouch=fn}ngOnInit(){this.$id||(this.$id=Object(shortid__WEBPACK_IMPORTED_MODULE_3__.generate)()),this.$name||(this.$name=Object(shortid__WEBPACK_IMPORTED_MODULE_3__.generate)())}};Object(tslib__WEBPACK_IMPORTED_MODULE_0__.b)([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding)("class"),Object(tslib__WEBPACK_IMPORTED_MODULE_0__.d)("design:type",Object)],ToggleComponent.prototype,"classes",void 0),Object(tslib__WEBPACK_IMPORTED_MODULE_0__.b)([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)(),Object(tslib__WEBPACK_IMPORTED_MODULE_0__.d)("design:type",String),Object(tslib__WEBPACK_IMPORTED_MODULE_0__.d)("design:paramtypes",[String])],ToggleComponent.prototype,"name",null),Object(tslib__WEBPACK_IMPORTED_MODULE_0__.b)([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)(),Object(tslib__WEBPACK_IMPORTED_MODULE_0__.d)("design:type",String),Object(tslib__WEBPACK_IMPORTED_MODULE_0__.d)("design:paramtypes",[String])],ToggleComponent.prototype,"id",null),Object(tslib__WEBPACK_IMPORTED_MODULE_0__.b)([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)(),Object(tslib__WEBPACK_IMPORTED_MODULE_0__.d)("design:type",Boolean),Object(tslib__WEBPACK_IMPORTED_MODULE_0__.d)("design:paramtypes",[Boolean])],ToggleComponent.prototype,"value",null),ToggleComponent=ToggleComponent_1=Object(tslib__WEBPACK_IMPORTED_MODULE_0__.b)([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({selector:"its-toggle",template:(__webpack_require__(201).default||__webpack_require__(201)).length?__webpack_require__(201).default||__webpack_require__(201):"",styles:[(__webpack_require__(202).default||__webpack_require__(202)).length?__webpack_require__(202).default||__webpack_require__(202):""],encapsulation:_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,providers:[{provide:_angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALUE_ACCESSOR,useExisting:Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(()=>ToggleComponent_1),multi:!0}]})],ToggleComponent)},397:function(module,__webpack_exports__,__webpack_require__){"use strict";var tslib_es6=__webpack_require__(0),core=__webpack_require__(1);let dropdown_item_component_DropdownItemComponent=class DropdownItemComponent{constructor(){this.selectedted=new core.EventEmitter}get classes(){const classes=["its-select-option"];return void 0!==this.selected&&classes.push("its-select-option--selected"),classes.join(" ")}onClick(){this.selectedted.emit(!0)}};Object(tslib_es6.b)([Object(core.Input)(),Object(tslib_es6.d)("design:type",Object)],dropdown_item_component_DropdownItemComponent.prototype,"value",void 0),Object(tslib_es6.b)([Object(core.Input)(),Object(tslib_es6.d)("design:type",Object)],dropdown_item_component_DropdownItemComponent.prototype,"selected",void 0),Object(tslib_es6.b)([Object(core.Output)(),Object(tslib_es6.d)("design:type",Object)],dropdown_item_component_DropdownItemComponent.prototype,"selectedted",void 0),Object(tslib_es6.b)([Object(core.HostBinding)("class"),Object(tslib_es6.d)("design:type",Object),Object(tslib_es6.d)("design:paramtypes",[])],dropdown_item_component_DropdownItemComponent.prototype,"classes",null),Object(tslib_es6.b)([Object(core.HostListener)("click"),Object(tslib_es6.d)("design:type",Function),Object(tslib_es6.d)("design:paramtypes",[]),Object(tslib_es6.d)("design:returntype",void 0)],dropdown_item_component_DropdownItemComponent.prototype,"onClick",null),dropdown_item_component_DropdownItemComponent=Object(tslib_es6.b)([Object(core.Component)({encapsulation:core.ViewEncapsulation.None,selector:"its-dropdown-item",template:"\n    <ng-content></ng-content>\n  ",styles:["\n      .its-select-option {\n        display: block;\n        padding: 0.125em 0.5em;\n        cursor: pointer;\n      }\n    ","\n      .its-select-option--selected {\n        background: silver;\n      }\n    "]})],dropdown_item_component_DropdownItemComponent);var DropdownComponent_1,_a,fesm5_forms=__webpack_require__(163);let dropdown_component_DropdownComponent=DropdownComponent_1=class DropdownComponent{constructor(){this.onChange=()=>{},this.onTouch=()=>{},this.options=[]}writeValue(value){this.selected=value}registerOnChange(fn){this.onChange=fn}registerOnTouched(fn){this.onTouch=fn}get selected(){return this.$selected}set selected(val){this.$selected=val,this.setSelected(),this.onChange(this.$selected),this.onTouch(this.$selected)}get elements(){return this.dropdownItems&&this.dropdownItems.length?this.dropdownItems:new core.QueryList}ngAfterViewInit(){!1===this.hasSelected()&&null!=this.selected&&this.setSelected(),this.dropdownItems.changes.subscribe(change=>{this.getSelected()}),this.getSelected(),this.elements.map(el=>{el.selectedted.subscribe(_=>{this.elements.map($el=>{$el.value===el.value?($el.selected=!0,this.selected=$el.value):$el.selected=void 0})})})}hasSelected(){return!!this.elements.find(o=>void 0!==o.selected)}setSelected(){const selected=this.elements.find(({value:value})=>value===this.selected);selected&&(selected.selected=!0)}getSelected(){this.elements.map(option=>{void 0!==option.selected&&(this.selected=option.value)})}};Object(tslib_es6.b)([Object(core.ContentChildren)(dropdown_item_component_DropdownItemComponent),Object(tslib_es6.d)("design:type","function"==typeof(_a=void 0!==core.QueryList&&core.QueryList)?_a:Object)],dropdown_component_DropdownComponent.prototype,"dropdownItems",void 0),Object(tslib_es6.b)([Object(core.Input)(),Object(tslib_es6.d)("design:type",Object),Object(tslib_es6.d)("design:paramtypes",[Object])],dropdown_component_DropdownComponent.prototype,"selected",null),Object(tslib_es6.b)([Object(core.Input)(),Object(tslib_es6.d)("design:type",Array)],dropdown_component_DropdownComponent.prototype,"options",void 0),dropdown_component_DropdownComponent=DropdownComponent_1=Object(tslib_es6.b)([Object(core.Component)({selector:"div[its-dropdown], its-dropdown",template:(__webpack_require__(198).default||__webpack_require__(198)).length?__webpack_require__(198).default||__webpack_require__(198):"",styles:[(__webpack_require__(199).default||__webpack_require__(199)).length?__webpack_require__(199).default||__webpack_require__(199):""],encapsulation:core.ViewEncapsulation.None,providers:[{provide:fesm5_forms.NG_VALUE_ACCESSOR,useExisting:Object(core.forwardRef)(()=>DropdownComponent_1),multi:!0}]})],dropdown_component_DropdownComponent),__webpack_require__.d(__webpack_exports__,"a",(function(){return DropdownModule}));let DropdownModule=class DropdownModule{};DropdownModule=Object(tslib_es6.b)([Object(core.NgModule)({declarations:[dropdown_component_DropdownComponent,dropdown_item_component_DropdownItemComponent],exports:[dropdown_component_DropdownComponent,dropdown_item_component_DropdownItemComponent]})],DropdownModule)},398:function(module,exports,__webpack_require__){__webpack_require__(399),__webpack_require__(544),module.exports=__webpack_require__(545)},463:function(module,exports){},545:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(68);module._StorybookPreserveDecorators=!0,Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(742)],module)}.call(this,__webpack_require__(176)(module))},742:function(module,exports,__webpack_require__){var map={"./ui/src/lib/button/button.stories.ts":743,"./ui/src/lib/dropdown/dropdown.stories.ts":780,"./ui/src/lib/ripple-animation/ripple-animation.stories.ts":781,"./ui/src/lib/toggle/toggle.stories.ts":782};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=742},743:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(68),_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(102),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(139),_storybook_addon_a11y__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(135),_button_component__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(395);Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Button",module).addDecorator(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__.withKnobs).addDecorator(_storybook_addon_a11y__WEBPACK_IMPORTED_MODULE_3__.withA11y).addDecorator(Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({declarations:[_button_component__WEBPACK_IMPORTED_MODULE_4__.a]})).add("<its-button>",()=>({template:'\n      <its-button\n        [disabled]="disabled"\n        [outline]="outline"\n        [color]="color"\n        (click)="onClick($event)"\n      >Inloggen</its-button>\n    ',props:{disabled:Object(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__.boolean)("Disabled",!1),outline:Object(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__.boolean)("Outline",!1),color:Object(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__.select)("Color",{Primary:"primary",Secondary:"secondary",None:""},""),onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("Button Clicked!")}})).add("<button its-button>",()=>({template:"\n      <button its-button>hello</button>\n    "})).add("<a its-button>",()=>({template:"\n    <a its-button>hello</a>\n    "})).add("Variants",()=>({template:'\n      <h2>Solid button variants</h2>\n      <table [attr.cellpadding]=cellpadding>\n        <thead>\n          <tr>\n            <th></th>\n            <th>Default</th>\n            <th>Disabled</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <th>Default</th>\n            <td><button its-button>{{ text }}</button></td>\n            <td><button its-button disabled>{{ text }}</button></td>\n          </tr>\n          <tr>\n            <th>Primary</th>\n            <td><button its-button color="primary">{{ text }}</button></td>\n            <td><button its-button color="primary" disabled>{{ text }}</button></td>\n          </tr>\n          <tr>\n            <th>Secondary</th>\n            <td><button its-button color="secondary">{{ text }}</button></td>\n            <td><button its-button color="secondary" disabled>{{ text }}</button></td>\n          </tr>\n        </tbody>\n      </table>\n\n      <br>\n      <br>\n      <h2>Outline button variants</h2>\n      <table [attr.cellpadding]=cellpadding>\n        <thead>\n          <tr>\n            <th></th>\n            <th>Default</th>\n            <th>Disabled</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <th>Default</th>\n            <td><button its-button outline>{{ text }}</button></td>\n            <td><button its-button outline disabled>{{ text }}</button></td>\n          </tr>\n          <tr>\n            <th>Primary</th>\n            <td><button its-button color="primary" outline>{{ text }}</button></td>\n            <td><button its-button color="primary" outline disabled>{{ text }}</button></td>\n          </tr>\n          <tr>\n            <th>Secondary</th>\n            <td><button its-button color="secondary" outline>{{ text }}</button></td>\n            <td><button its-button color="secondary" outline disabled>{{ text }}</button></td>\n          </tr>\n        </tbody>\n      </table>\n    ',props:{cellpadding:10,text:Object(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__.text)("Text","Button Text")}}))}.call(this,__webpack_require__(176)(module))},780:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(68),_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(102),_storybook_addon_a11y__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(135),_dropdown_module__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(397);Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Dropdown",module).addDecorator(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__.withKnobs).addDecorator(_storybook_addon_a11y__WEBPACK_IMPORTED_MODULE_2__.withA11y).addDecorator(Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[_dropdown_module__WEBPACK_IMPORTED_MODULE_3__.a]})).add("<its-dropdown>",()=>({template:"\n      <its-dropdown>\n        <its-dropdown-item>Test Item 1</its-dropdown-item>\n        <its-dropdown-item>Test Item 2</its-dropdown-item>\n        <its-dropdown-item>Test Item 3</its-dropdown-item>\n      </its-dropdown>\n    "}))}.call(this,__webpack_require__(176)(module))},781:function(module,exports){},782:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(68),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(138),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(139),_storybook_addon_a11y__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(135),_toggle_component__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(396);Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Toggle",module).addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs).addDecorator(_storybook_addon_a11y__WEBPACK_IMPORTED_MODULE_3__.withA11y).addDecorator(Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({declarations:[_toggle_component__WEBPACK_IMPORTED_MODULE_4__.a]})).add("basic",()=>({template:'\n      <its-toggle\n        [(ngModel)]="toggled"\n        (ngModelChange)="onToggled($event)"\n      ></its-toggle>\n      <pre><code>toggled: {{ toggled | json }}</code></pre>\n    ',props:{toggled:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Toggled",!1),onToggled:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("Toggled")}})).add("wrapped with label",()=>({template:'\n      <label>\n        <its-toggle\n          [(ngModel)]="toggled"\n          (ngModelChange)="onToggled($event)"\n        ></its-toggle>\n        This is a label for a toggle.\n      </label>\n      <pre><code>toggled: {{ toggled | json }}</code></pre>\n    ',props:{toggled:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Toggled",!0),onToggled:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("Toggled")}})).add("with label id/for",()=>({template:'\n      <its-toggle\n        [(ngModel)]="toggled"\n        (ngModelChange)="onToggled($event)"\n        [id]="\'abc-123\'"\n      ></its-toggle>\n      <label for="abc-123">This is a label for a toggle.</label>\n      <pre><code>toggled: {{ toggled | json }}</code></pre>\n    ',props:{toggled:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Toggled",!0),onToggled:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("Toggled")}}))}.call(this,__webpack_require__(176)(module))}},[[398,1,2]]]);
//# sourceMappingURL=main.26b5a25c392f2db2d434.bundle.js.map