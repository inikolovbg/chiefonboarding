(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{661:function(t,e,n){"use strict";var o=n(60),r=n(2);e.a=r.a.extend({name:"rippleable",directives:{ripple:o.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(data.staticClass="v-input--selection-controls__ripple",data.directives=data.directives||[],data.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",data)):null}}})},663:function(t,e,n){var content=n(669);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("2e2bc7da",content,!0,{sourceMap:!1})},664:function(t,e,n){"use strict";n.d(e,"b",(function(){return d}));n(10),n(43),n(44),n(7);var o=n(76),r=n(661),l=n(223),c=n(8);function d(t){t.preventDefault()}e.a=Object(c.a)(o.a,r.a,l.a).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,input=this.internalValue;return this.isMultiple?!!Array.isArray(input)&&input.some((function(n){return t.valueComparator(n,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,input):Boolean(input):this.valueComparator(input,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var label=o.a.options.methods.genLabel.call(this);return label?(label.data.on={click:d},label):label},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:d},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,input=this.internalValue;if(this.isMultiple){Array.isArray(input)||(input=[]);var n=input.length;(input=input.filter((function(n){return!t.valueComparator(n,e)}))).length===n&&input.push(e)}else input=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(input,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(input,e)?null:e:!input;this.validate(!0,input),this.internalValue=input,this.hasColor=input}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}})},669:function(t,e,n){var o=n(16)(!1);o.push([t.i,'.theme--light.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:rgba(0,0,0,.26)!important}.theme--dark.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:hsla(0,0%,100%,.3)!important}.v-input--selection-controls{margin-top:16px;padding-top:4px}.v-input--selection-controls>.v-input__append-outer,.v-input--selection-controls>.v-input__prepend-outer{margin-top:0;margin-bottom:0}.v-input--selection-controls:not(.v-input--hide-details)>.v-input__slot{margin-bottom:12px}.v-input--selection-controls .v-input__slot,.v-input--selection-controls .v-radio{cursor:pointer}.v-input--selection-controls .v-input__slot>.v-label,.v-input--selection-controls .v-radio>.v-label{align-items:center;display:inline-flex;flex:1 1 auto;height:auto}.v-input--selection-controls__input{color:inherit;display:inline-flex;flex:0 0 auto;height:24px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);transition-property:transform;width:24px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input .v-icon{width:100%}.v-application--is-ltr .v-input--selection-controls__input{margin-right:8px}.v-application--is-rtl .v-input--selection-controls__input{margin-left:8px}.v-input--selection-controls__input input[role=checkbox],.v-input--selection-controls__input input[role=radio],.v-input--selection-controls__input input[role=switch]{position:absolute;opacity:0;width:100%;height:100%;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input+.v-label{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__ripple{border-radius:50%;cursor:pointer;height:34px;position:absolute;transition:inherit;width:34px;left:-12px;top:calc(50% - 24px);margin:7px}.v-input--selection-controls__ripple:before{border-radius:inherit;bottom:0;content:"";position:absolute;opacity:.2;left:0;right:0;top:0;transform-origin:center center;transform:scale(.2);transition:inherit}.v-input--selection-controls__ripple>.v-ripple__container{transform:scale(1.2)}.v-input--selection-controls.v-input--dense .v-input--selection-controls__ripple{width:28px;height:28px;left:-9px}.v-input--selection-controls.v-input--dense:not(.v-input--switch) .v-input--selection-controls__ripple{top:calc(50% - 21px)}.v-input--selection-controls.v-input{flex:0 1 auto}.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before,.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2)}.v-input--selection-controls .v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2);transition:none}',""]),t.exports=o},681:function(t,e,n){var content=n(682);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("5e62c9d0",content,!0,{sourceMap:!1})},682:function(t,e,n){var o=n(16)(!1);o.push([t.i,".theme--light.v-radio--is-disabled label{color:rgba(0,0,0,.38)}.theme--light.v-radio--is-disabled .v-icon{color:rgba(0,0,0,.26)!important}.theme--dark.v-radio--is-disabled label{color:hsla(0,0%,100%,.5)}.theme--dark.v-radio--is-disabled .v-icon{color:hsla(0,0%,100%,.3)!important}.v-radio{align-items:center;display:flex;height:auto;outline:none}.v-radio--is-disabled{pointer-events:none;cursor:default}.v-input--radio-group.v-input--radio-group--row .v-radio{margin-right:16px}",""]),t.exports=o},683:function(t,e,n){var content=n(684);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("999cb8a8",content,!0,{sourceMap:!1})},684:function(t,e,n){var o=n(16)(!1);o.push([t.i,".v-input--radio-group legend.v-label{cursor:text;font-size:14px;height:auto}.v-input--radio-group__input{border:none;cursor:default;display:flex;width:100%}.v-input--radio-group--column .v-input--radio-group__input>.v-label{padding-bottom:8px}.v-input--radio-group--row .v-input--radio-group__input>.v-label{padding-right:8px}.v-input--radio-group--row legend{align-self:center;display:inline-block}.v-input--radio-group--row .v-input--radio-group__input{flex-direction:row;flex-wrap:wrap}.v-input--radio-group--column legend{padding-bottom:8px}.v-input--radio-group--column .v-radio:not(:last-child):not(:only-child){margin-bottom:8px}.v-input--radio-group--column .v-input--radio-group__input{flex-direction:column}",""]),t.exports=o},707:function(t,e,n){"use strict";n(15),n(10),n(11),n(9),n(7),n(12),n(26);var o=n(1),r=(n(681),n(155)),l=n(33),c=n(76),d=n(93),h=n(20),v=n(80),f=n(661),m=n(18),_=n(664),y=n(0),w=n(8),x=n(40);function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function V(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var $=Object(w.a)(d.a,h.a,f.a,Object(v.a)("radioGroup"),m.a);e.a=$.extend().extend({name:"v-radio",inheritAttrs:!1,props:{disabled:Boolean,id:String,label:String,name:String,offIcon:{type:String,default:"$radioOff"},onIcon:{type:String,default:"$radioOn"},readonly:Boolean,value:{default:null}},data:function(){return{isFocused:!1}},computed:{classes:function(){return V(V({"v-radio--is-disabled":this.isDisabled,"v-radio--is-focused":this.isFocused},this.themeClasses),this.groupClasses)},computedColor:function(){return _.a.options.computed.computedColor.call(this)},computedIcon:function(){return this.isActive?this.onIcon:this.offIcon},computedId:function(){return c.a.options.computed.computedId.call(this)},hasLabel:c.a.options.computed.hasLabel,hasState:function(){return(this.radioGroup||{}).hasState},isDisabled:function(){return this.disabled||!!this.radioGroup&&this.radioGroup.isDisabled},isReadonly:function(){return this.readonly||!!this.radioGroup&&this.radioGroup.isReadonly},computedName:function(){return this.name||!this.radioGroup?this.name:this.radioGroup.name||"radio-".concat(this.radioGroup._uid)},rippleState:function(){return _.a.options.computed.rippleState.call(this)},validationState:function(){return(this.radioGroup||{}).validationState||this.computedColor}},methods:{genInput:function(t){return _.a.options.methods.genInput.call(this,"radio",t)},genLabel:function(){return this.hasLabel?this.$createElement(r.a,{on:{click:_.b},attrs:{for:this.computedId},props:{color:this.validationState,focused:this.hasState}},Object(y.t)(this,"label")||this.label):null},genRadio:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(l.a,this.setTextColor(this.validationState,{props:{dense:this.radioGroup&&this.radioGroup.dense}}),this.computedIcon),this.genInput(V({name:this.computedName,value:this.value},this.attrs$)),this.genRipple(this.setTextColor(this.rippleState))])},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onChange:function(){this.isDisabled||this.isReadonly||this.isActive||this.toggle()},onKeydown:function(){}},render:function(t){return t("div",{staticClass:"v-radio",class:this.classes,on:Object(x.c)({click:this.onChange},this.listeners$)},[this.genRadio(),this.genLabel()])}})},708:function(t,e,n){"use strict";n(15),n(10),n(11),n(9),n(7),n(12);var o=n(1),r=(n(23),n(663),n(683),n(76)),l=n(63),c=n(223),d=n(8);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=Object(d.a)(c.a,l.a,r.a);e.a=f.extend({name:"v-radio-group",provide:function(){return{radioGroup:this}},props:{column:{type:Boolean,default:!0},height:{type:[Number,String],default:"auto"},name:String,row:Boolean,value:null},computed:{classes:function(){return v(v({},r.a.options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--radio-group":!0,"v-input--radio-group--column":this.column&&!this.row,"v-input--radio-group--row":this.row})}},methods:{genDefaultSlot:function(){return this.$createElement("div",{staticClass:"v-input--radio-group__input",attrs:{id:this.id,role:"radiogroup","aria-labelledby":this.computedId}},r.a.options.methods.genDefaultSlot.call(this))},genInputSlot:function(){var t=r.a.options.methods.genInputSlot.call(this);return delete t.data.on.click,t},genLabel:function(){var label=r.a.options.methods.genLabel.call(this);return label?(label.data.attrs.id=this.computedId,delete label.data.attrs.for,label.tag="legend",label):null},onClick:l.a.options.methods.onClick}})},709:function(t,e,n){"use strict";n(15),n(11),n(12);var o=n(1),r=(n(53),n(10),n(9),n(7),n(154),n(35),n(45),n(8)),l=n(93),c=n(117);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(r.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(o){o&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:h({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},833:function(t,e,n){"use strict";n.r(e);n(7),n(23);var o={name:"AdminDialog",props:{id:{type:Number,required:!0}},data:function(){return{dialog:!1,loading:!1}},methods:{remove:function(){var t=this;this.loading=!0,this.$org.removeAdmin(this.id).then((function(data){t.loading=!1,t.$store.dispatch("showSnackbar",t.$t("settings.adminHasBeenRemoved")),t.$org.getAdmins().then((function(e){t.loading=!1}))})).finally((function(){t.dialog=!1}))}}},r=n(22),l=n(25),c=n.n(l),d=n(144),h=n(208),v=n(47),f=n(643),m=n(211),_=n(646),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{width:"600"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({staticClass:"error",staticStyle:{float:"right"}},o),[t._v("\n      "+t._s(t.$t("buttons.remove"))+"\n    ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v("\n      "+t._s(t.$t("settings.adminModalHeader"))+"\n    ")]),t._v(" "),n("v-card-text",[t._v(t._s(t.$t("settings.adminModalDescr")))]),t._v(" "),n("v-divider"),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"dark",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n        "+t._s(t.$t("buttons.cancel"))+"\n      ")]),t._v(" "),n("v-btn",{attrs:{loading:t.loading,color:"error"},on:{click:function(e){return t.remove()}}},[t._v("\n        "+t._s(t.$t("buttons.remove"))+"\n      ")])],1)],1)],1)}),[],!1,null,null,null),y=component.exports;c()(component,{VBtn:d.a,VCard:h.a,VCardActions:v.a,VCardText:v.b,VCardTitle:v.c,VDialog:f.a,VDivider:m.a,VSpacer:_.a});n(26);var w={name:"AdminDialog",data:function(){return{valid:!0,dialog:!1,loading:!1,isAdmin:!1,newAdmin:{first_name:"",last_name:"",email:"",role:1}}},watch:{dialog:function(){this.newAdmin={first_name:"",last_name:"",email:"",role:1}}},methods:{add:function(){var t=this;this.loading=!0,this.$org.addAdmin(this.newAdmin).then((function(data){t.$store.dispatch("showSnackbar",t.$t("settings.adminHasBeenAdded")),t.email="",t.name="",t.$org.getAdmins().then((function(e){t.loading=!1})),t.dialog=!1}))}}},x=n(649),O=(n(229),n(397)),V=Object(O.a)("flex"),$=n(709),C=n(707),j=n(708),A=n(645),k=n(68),S=Object(r.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{width:"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({staticClass:"success",staticStyle:{"margin-right":"0px"}},o),[t._v("\n      "+t._s(t.$t("buttons.add"))+"\n    ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v("\n      "+t._s(t.$t("settings.addAnAdmin"))+"\n    ")]),t._v(" "),n("v-card-text",[n("v-form",{staticClass:"mt-3"},[n("v-container",[n("v-row",[n("v-flex",{attrs:{cols:"6"}},[n("v-text-field",{staticClass:"py-0 pr-1",attrs:{label:t.$t("forms.firstName"),required:""},model:{value:t.newAdmin.first_name,callback:function(e){t.$set(t.newAdmin,"first_name",e)},expression:"newAdmin.first_name"}})],1),t._v(" "),n("v-flex",{attrs:{cols:"6"}},[n("v-text-field",{staticClass:"py-0 pl-1",attrs:{label:t.$t("forms.lastName"),required:""},model:{value:t.newAdmin.last_name,callback:function(e){t.$set(t.newAdmin,"last_name",e)},expression:"newAdmin.last_name"}})],1)],1),t._v(" "),n("v-row",[n("v-text-field",{staticClass:"mt-2 py-0 mb-0",attrs:{label:t.$t("forms.email"),required:""},model:{value:t.newAdmin.email,callback:function(e){t.$set(t.newAdmin,"email",e)},expression:"newAdmin.email"}})],1)],1),t._v(" "),n("v-radio-group",{attrs:{label:"Pick the scope of their rights:",color:"primary"},model:{value:t.newAdmin.role,callback:function(e){t.$set(t.newAdmin,"role",e)},expression:"newAdmin.role"}},[n("v-radio",{attrs:{label:t.$t("settings.thisPersonHasFull"),value:1,color:"primary"}}),t._v(" "),n("v-radio",{attrs:{label:t.$t("settings.thisPersonHasOnly"),value:2,color:"primary"}})],1)],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"dark",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n        "+t._s(t.$t("buttons.cancel"))+"\n      ")]),t._v(" "),n("v-btn",{attrs:{loading:t.loading,color:"primary"},on:{click:function(e){return t.add()}}},[t._v("\n        "+t._s(t.$t("buttons.add"))+"\n      ")])],1)],1)],1)}),[],!1,null,null,null),D=S.exports;c()(S,{VBtn:d.a,VCard:h.a,VCardActions:v.a,VCardText:v.b,VCardTitle:v.c,VContainer:x.a,VDialog:f.a,VDivider:m.a,VFlex:V,VForm:$.a,VRadio:C.a,VRadioGroup:j.a,VRow:A.a,VSpacer:_.a,VTextField:k.a});var P={layout:"admin",components:{AdminDialog:y,AdminAddDialog:D},data:function(){return{dialog:!1,loading:!1}},mounted:function(){var t=this;this.loading=!0,this.$org.getAdmins().then((function(e){t.loading=!1}))}},B=n(641),I=n(653),E=Object(r.a)(P,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",[n("v-col",{attrs:{sm:"12",mb:"6","offset-mb":"3",md:"6","offset-sm":"3"}},[n("v-row",{staticClass:"mb-4"},[n("v-col",{attrs:{sm:"6"}},[n("h1",{staticClass:"heading",staticStyle:{"margin-top":"5px"}},[t._v("\n          "+t._s(t.$t("settings.admin"))+"\n        ")])]),t._v(" "),n("v-col",{staticClass:"text-right",attrs:{sm:"6"}},[n("AdminAddDialog")],1)],1),t._v(" "),n("v-card",{staticClass:"mb-4"},[[n("v-data-table",{staticClass:"elevation-1",attrs:{headers:[{text:"Name",value:"full_name"},{value:"email"}],items:t.$store.state.admins,loading:t.loading,"footer-props":{"items-per-page-options":[50,100,-1]}},scopedSlots:t._u([{key:"item.full_name",fn:function(e){var o=e.item;return[t._v("\n            "+t._s(o.full_name)+" ("),1===o.role?n("span",[t._v(t._s(t.$t("settings.fullAccess")))]):n("span",[t._v(t._s(t.$t("settings.limitedAccess")))]),t._v(")\n          ")]}},{key:"item.email",fn:function(e){var o=e.item;return[t.$store.state.admin.id!==o.id?n("AdminDialog",{attrs:{id:o.id}}):t._e()]}},{key:"no-data",fn:function(){return[t._v("\n            "+t._s(t.$t("settings.onlyYou"))+"\n          ")]},proxy:!0}])})]],2)],1)],1)}),[],!1,null,null,null);e.default=E.exports;c()(E,{VCard:h.a,VCol:B.a,VDataTable:I.a,VRow:A.a})}}]);