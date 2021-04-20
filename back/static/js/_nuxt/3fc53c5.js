(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{661:function(t,e,n){"use strict";var o=n(60),r=n(2);e.a=r.a.extend({name:"rippleable",directives:{ripple:o.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(data.staticClass="v-input--selection-controls__ripple",data.directives=data.directives||[],data.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",data)):null}}})},663:function(t,e,n){var content=n(669);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("2e2bc7da",content,!0,{sourceMap:!1})},664:function(t,e,n){"use strict";n.d(e,"b",(function(){return d}));n(10),n(43),n(44),n(7);var o=n(76),r=n(661),l=n(223),c=n(8);function d(t){t.preventDefault()}e.a=Object(c.a)(o.a,r.a,l.a).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,input=this.internalValue;return this.isMultiple?!!Array.isArray(input)&&input.some((function(n){return t.valueComparator(n,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,input):Boolean(input):this.valueComparator(input,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var label=o.a.options.methods.genLabel.call(this);return label?(label.data.on={click:d},label):label},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:d},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,input=this.internalValue;if(this.isMultiple){Array.isArray(input)||(input=[]);var n=input.length;(input=input.filter((function(n){return!t.valueComparator(n,e)}))).length===n&&input.push(e)}else input=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(input,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(input,e)?null:e:!input;this.validate(!0,input),this.internalValue=input,this.hasColor=input}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}})},669:function(t,e,n){var o=n(16)(!1);o.push([t.i,'.theme--light.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:rgba(0,0,0,.26)!important}.theme--dark.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:hsla(0,0%,100%,.3)!important}.v-input--selection-controls{margin-top:16px;padding-top:4px}.v-input--selection-controls>.v-input__append-outer,.v-input--selection-controls>.v-input__prepend-outer{margin-top:0;margin-bottom:0}.v-input--selection-controls:not(.v-input--hide-details)>.v-input__slot{margin-bottom:12px}.v-input--selection-controls .v-input__slot,.v-input--selection-controls .v-radio{cursor:pointer}.v-input--selection-controls .v-input__slot>.v-label,.v-input--selection-controls .v-radio>.v-label{align-items:center;display:inline-flex;flex:1 1 auto;height:auto}.v-input--selection-controls__input{color:inherit;display:inline-flex;flex:0 0 auto;height:24px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);transition-property:transform;width:24px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input .v-icon{width:100%}.v-application--is-ltr .v-input--selection-controls__input{margin-right:8px}.v-application--is-rtl .v-input--selection-controls__input{margin-left:8px}.v-input--selection-controls__input input[role=checkbox],.v-input--selection-controls__input input[role=radio],.v-input--selection-controls__input input[role=switch]{position:absolute;opacity:0;width:100%;height:100%;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input+.v-label{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__ripple{border-radius:50%;cursor:pointer;height:34px;position:absolute;transition:inherit;width:34px;left:-12px;top:calc(50% - 24px);margin:7px}.v-input--selection-controls__ripple:before{border-radius:inherit;bottom:0;content:"";position:absolute;opacity:.2;left:0;right:0;top:0;transform-origin:center center;transform:scale(.2);transition:inherit}.v-input--selection-controls__ripple>.v-ripple__container{transform:scale(1.2)}.v-input--selection-controls.v-input--dense .v-input--selection-controls__ripple{width:28px;height:28px;left:-9px}.v-input--selection-controls.v-input--dense:not(.v-input--switch) .v-input--selection-controls__ripple{top:calc(50% - 21px)}.v-input--selection-controls.v-input{flex:0 1 auto}.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before,.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2)}.v-input--selection-controls .v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2);transition:none}',""]),t.exports=o},679:function(t,e,n){var content=n(680);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("12a190a6",content,!0,{sourceMap:!1})},680:function(t,e,n){var o=n(16)(!1);o.push([t.i,".v-input--checkbox.v-input--indeterminate.v-input--is-disabled{opacity:.6}",""]),t.exports=o},697:function(t,e,n){"use strict";var o={props:{value:{type:Object,required:!0},errors:{type:Object,required:!0},inline:{type:Boolean,default:!1}},data:function(){return{search:""}},computed:{errorMessages:function(){return JSON.parse(JSON.stringify(this.errors))}},watch:{value:{handler:function(t){this.$emit("input",t)},deep:!0},errors:function(t){"content"in t&&this.$store.dispatch("showSnackbar","Content: "+t.content[0])}}},r=n(22),l=n(25),c=n.n(l),d=n(706),h=n(641),v=n(642),m=n(649),f=n(645),_=n(68),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"py-2 px-0"},[n("v-row",[n("v-col",{attrs:{sm:"4"}},[n("v-col",{staticClass:"py-0",attrs:{sm:"12"}},[n("VTextFieldEmoji",{attrs:{label:t.$t("forms.title"),errors:t.errorMessages.name},on:{removeError:function(e){t.errorMessages.name=""}},model:{value:t.value.name,callback:function(e){t.$set(t.value,"name",e)},expression:"value.name"}})],1),t._v(" "),n("v-col",{staticClass:"py-0",attrs:{sm:"12"}},[n("v-text-field",{attrs:{label:t.$t("resource.dueOnWorkday"),"error-messages":t.errorMessages.due_on_day,type:"number"},on:{keyup:function(e){t.errorMessages.due_on_day=""}},model:{value:t.value.due_on_day,callback:function(e){t.$set(t.value,"due_on_day",e)},expression:"value.due_on_day"}})],1),t._v(" "),n("v-col",{staticClass:"py-0",attrs:{sm:"12"}},[n("TagsSelector",{staticClass:"pt-2",model:{value:t.value.tags,callback:function(e){t.$set(t.value,"tags",e)},expression:"value.tags"}})],1)],1),t._v(" "),n("v-col",{staticClass:"pl-4",attrs:{sm:"8"}},[n("Editor",{ref:"editor",model:{value:t.value.content,callback:function(e){t.$set(t.value,"content",e)},expression:"value.content"}}),t._v(" "),"form"in t.value?n("CustomForm",{model:{value:t.value.form,callback:function(e){t.$set(t.value,"form",e)},expression:"value.form"}}):t._e(),t._v(" "),t.$store.state.org.slack_key&&"form"in t.value&&t.value.form.length?n("v-col",{attrs:{sm:"12"}},[n("v-checkbox",{attrs:{label:t.$t("todo.sendFormBack")},model:{value:t.value.send_back,callback:function(e){t.$set(t.value,"send_back",e)},expression:"value.send_back"}}),t._v(" "),t.value.send_back?n("div",[n("v-combobox",{attrs:{items:t.$store.state.slackChannels,label:t.$t("todo.selectSlackChannel"),hint:t.$t("todo.botInvited"),"persistent-hint":!0},model:{value:t.value.channel,callback:function(e){t.$set(t.value,"channel",e)},expression:"value.channel"}})],1):t._e()],1):t._e()],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VCheckbox:d.a,VCol:h.a,VCombobox:v.a,VContainer:m.a,VRow:f.a,VTextField:_.a})},706:function(t,e,n){"use strict";n(15),n(10),n(11),n(9),n(12),n(43),n(44),n(7);var o=n(1),r=(n(679),n(663),n(33)),l=n(76),c=n(664);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=c.a.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return h(h({},l.a.options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(r.a,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",h(h({},this.attrs$),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})},743:function(t,e,n){var content=n(812);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("58449228",content,!0,{sourceMap:!1})},811:function(t,e,n){"use strict";n(743)},812:function(t,e,n){var o=n(16)(!1);o.push([t.i,".border-bottom[data-v-d0635594]{border-bottom:1px solid #e4e4e4}.second[data-v-d0635594]{margin-left:10px}.first[data-v-d0635594]{margin-right:10px}",""]),t.exports=o},879:function(t,e,n){"use strict";n.r(e);n(7);var o={layout:"admin",components:{TodoForm:n(697).a},data:function(){return{loading:!0,saving:!1,duplicating:!1,removing:!1,submittingForm:!1,errors:{},employee:{},todo:{}}},watch:{$route:function(t,e){this.getTodo()}},mounted:function(){this.getTodo()},methods:{getTodo:function(){var t=this;return this.$todos.get(this.$route.params.id).then((function(data){t.todo=data})).catch((function(e){t.$store.dispatch("showSnackbar",t.$t("todo.couldNotGet"))})).finally((function(){t.loading=!1}))},saveTodo:function(){var t=this;this.saving=!0,this.$todos.update(this.$route.params.id,this.todo).then((function(data){t.$router.push({name:"admin-templates-todos"}),t.$store.dispatch("showSnackbar",t.$t("todo.updated"))})).catch((function(e){t.errors=e})).finally((function(){t.saving=!1}))},removeTodo:function(){var t=this;this.removing=!0,this.$todos.remove(this.$route.params.id).then((function(data){t.$router.push({name:"admin-templates-todos"}),t.$store.dispatch("showSnackbar",t.$t("todo.removed"))})).catch((function(e){t.errors=e})).finally((function(){t.removing=!1}))},duplicateTodo:function(){var t=this;this.duplicating=!0,this.$todos.update(this.$route.params.id,this.todo).then((function(data){t.$todos.duplicate(t.$route.params.id).then((function(data){t.$router.push({name:"admin-templates-todos"}),t.$store.dispatch("showSnackbar",t.$t("todo.savedAndDuplicated"))})).catch((function(e){t.errors=e})).finally((function(){t.duplicating=!1}))}))}}},r=(n(811),n(22)),l=n(25),c=n.n(l),d=n(144),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("TemplateCompInner",[n("template",{slot:"header"},[n("h1",{staticClass:"heading",staticStyle:{"margin-top":"10px"}},[t._v("\n      "+t._s(t.$t("todo.changeHeader"))+"\n    ")])]),t._v(" "),n("template",{slot:"header-right"},[n("v-btn",{attrs:{loading:t.duplicating,color:"secondary"},on:{click:t.duplicateTodo}},[t._v("\n      "+t._s(t.$t("buttons.duplicate"))+"\n    ")]),t._v(" "),n("v-btn",{staticStyle:{"margin-right":"0px"},attrs:{loading:t.removing,color:"error"},on:{click:t.removeTodo}},[t._v("\n      "+t._s(t.$t("buttons.remove"))+"\n    ")])],1),t._v(" "),n("template",{slot:"formpart"},[n("LoadingIcon",{attrs:{"is-loading":t.loading}}),t._v(" "),t.loading?t._e():n("TodoForm",{ref:"form",attrs:{errors:t.errors},model:{value:t.todo,callback:function(e){t.todo=e},expression:"todo"}})],1),t._v(" "),n("template",{slot:"footer"},[n("v-btn",{staticStyle:{float:"right"},attrs:{loading:t.saving,color:"primary"},on:{click:t.saveTodo}},[t._v("\n      "+t._s(t.$t("buttons.save"))+"\n    ")])],1)],2)}),[],!1,null,"d0635594",null);e.default=component.exports;c()(component,{VBtn:d.a})}}]);