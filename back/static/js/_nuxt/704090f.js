(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{723:function(e,t,r){"use strict";r(35),r(45);var o=r(4),n=r.n(o),l={props:{value:{type:Object,default:function(){return{}}},errors:{type:Object,default:function(){return{}}},disabled:{type:Boolean,default:!1}},data:function(){return{start:"",search:"",showPicker:!1}},computed:{errorMessages:function(){return"start"in this.errors&&this.$store.commit("setSnackbar",this.errors.start_day),JSON.parse(JSON.stringify(this.errors))},computedDateFormattedMomentjs:function(){var e=n()();return this.value.start_day&&(e=n()(this.value.start_day)),"nl"===this.$store.state.admin.language?e.format("dddd, D MMMM YYYY"):e.format("dddd, MMMM Do YYYY")}},watch:{value:{handler:function(e){this.$emit("input",e)},deep:!0}},mounted:function(){this.$employees.getAll()},methods:{allowedDates:function(e){return![0,6].includes(n.a.utc(e).day())}}},c=r(22),m=r(25),d=r.n(m),v=r(131),f=r(641),h=r(649),y=r(835),w=r(216),_=r(645),$=r(68),k=r(652),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticStyle:{width:"100%"}},[r("v-container",{staticClass:"pa-0"},[r("v-row",[r("v-col",{staticClass:"py-0",attrs:{cols:"6"}},[r("v-text-field",{ref:"firstName",attrs:{label:e.$t("forms.firstName"),"error-messages":e.errorMessages.first_name},on:{keyup:function(t){e.errorMessages.first_name=""}},model:{value:e.value.first_name,callback:function(t){e.$set(e.value,"first_name",t)},expression:"value.first_name"}})],1),e._v(" "),r("v-col",{staticClass:"py-0",attrs:{cols:"6"}},[r("v-text-field",{attrs:{label:e.$t("forms.lastName"),"error-messages":e.errorMessages.last_name},on:{keyup:function(t){e.errorMessages.last_name=""}},model:{value:e.value.last_name,callback:function(t){e.$set(e.value,"last_name",t)},expression:"value.last_name"}})],1),e._v(" "),r("v-col",{staticClass:"py-0",attrs:{cols:"6"}},[r("v-text-field",{attrs:{label:e.$t("forms.email"),"error-messages":e.errorMessages.email,hint:"Business email address"},on:{keyup:function(t){e.errorMessages.email=""}},model:{value:e.value.email,callback:function(t){e.$set(e.value,"email",t)},expression:"value.email"}})],1),e._v(" "),r("v-col",{staticClass:"py-0",attrs:{cols:"6"}},[r("v-text-field",{attrs:{label:e.$t("forms.phone"),"error-messages":e.errorMessages.phone},on:{keyup:function(t){e.errorMessages.phone=""}},model:{value:e.value.phone,callback:function(t){e.$set(e.value,"phone",t)},expression:"value.phone"}})],1),e._v(" "),r("v-col",{staticClass:"py-0",attrs:{cols:"6"}},[r("v-text-field",{attrs:{label:e.$t("forms.position"),"error-messages":e.errorMessages.position},on:{keyup:function(t){e.errorMessages.position=""}},model:{value:e.value.position,callback:function(t){e.$set(e.value,"position",t)},expression:"value.position"}})],1),e._v(" "),r("v-col",{staticClass:"py-0",attrs:{cols:"6"}},[e.disabled?e._e():r("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on;return[r("v-text-field",e._g({attrs:{label:e.$t("forms.startDate"),"prepend-icon":"event",readonly:""},model:{value:e.computedDateFormattedMomentjs,callback:function(t){e.computedDateFormattedMomentjs=t},expression:"computedDateFormattedMomentjs"}},o))]}}],null,!1,637612121),model:{value:e.showPicker,callback:function(t){e.showPicker=t},expression:"showPicker"}},[e._v(" "),r("v-date-picker",{attrs:{"first-day-of-week":1,"error-messages":e.errorMessages.start_day,locale:e.$store.state.org.locale,"allowed-dates":e.allowedDates},on:{input:function(t){e.showPicker=!1},change:function(t){e.errorMessages.start_day=""}},model:{value:e.value.start_day,callback:function(t){e.$set(e.value,"start_day",t)},expression:"value.start_day"}})],1)],1),e._v(" "),e.$store.state.org.slack_key?r("v-col",{staticClass:"py-0",attrs:{cols:"12"}},[r("v-textarea",{attrs:{label:e.$t("forms.shareNewHire"),hint:e.$t("forms.shareNewHireHint"),"error-messages":e.errorMessages.message},on:{keyup:function(t){e.errorMessages.message=""}},model:{value:e.value.message,callback:function(t){e.$set(e.value,"message",t)},expression:"value.message"}})],1):e._e(),e._v(" "),r("v-col",{staticClass:"py-0",attrs:{cols:"6"}},[r("v-autocomplete",{attrs:{items:e.$store.state.timezones,"search-input":e.search,label:e.$t("forms.newHireTimezone"),"error-messages":e.errorMessages.timezone},on:{"update:searchInput":function(t){e.search=t},"update:search-input":function(t){e.search=t},keyup:function(t){e.errorMessages.timezone=""}},model:{value:e.value.timezone,callback:function(t){e.$set(e.value,"timezone",t)},expression:"value.timezone"}})],1),e._v(" "),r("v-col",{staticClass:"py-0",attrs:{cols:"6"}},[r("v-autocomplete",{attrs:{items:e.$store.state.languages,label:e.$t("forms.newHireLanguage"),"error-messages":e.errorMessages.language,"item-text":"language","item-value":"id"},on:{keyup:function(t){e.errorMessages.language=""}},model:{value:e.value.language,callback:function(t){e.$set(e.value,"language",t)},expression:"value.language"}})],1),e._v(" "),r("v-col",{staticClass:"py-0",attrs:{cols:"6"}},[r("v-autocomplete",{attrs:{items:e.$store.state.employees.all,label:e.$t("forms.newHiresBuddy"),"item-text":"full_name","item-value":"id"},model:{value:e.value.buddy,callback:function(t){e.$set(e.value,"buddy",t)},expression:"value.buddy"}})],1),e._v(" "),r("v-col",{staticClass:"py-0",attrs:{cols:"6"}},[r("v-autocomplete",{attrs:{items:e.$store.state.employees.all,label:e.$t("forms.newHiresManager"),"item-text":"full_name","item-value":"id"},model:{value:e.value.manager,callback:function(t){e.$set(e.value,"manager",t)},expression:"value.manager"}})],1)],1)],1)],1)}),[],!1,null,null,null);t.a=component.exports;d()(component,{VAutocomplete:v.a,VCol:f.a,VContainer:h.a,VDatePicker:y.a,VMenu:w.a,VRow:_.a,VTextField:$.a,VTextarea:k.a})},884:function(e,t,r){"use strict";r.r(t);r(7);var o={layout:"admin",components:{NewHireForm:r(723).a},data:function(){return{updatingAccount:!1,loading:!1,dialog:!1,errors:{details:{}},newHire:{details:{}}}},mounted:function(){this.getNewHire()},methods:{getNewHire:function(){var e=this;this.$newhires.get(this.$route.params.id).then((function(t){e.newHire=t})).catch((function(t){e.$store.dispatch("showSnackbar",e.$t("newhires.noNewHire"))})).finally((function(){e.loading=!1}))},updateNewHire:function(){var e=this;this.updatingAccount=!0,this.$newhires.update(this.$route.params.id,this.newHire).then((function(t){e.$store.dispatch("showSnackbar",e.$t("newhires.newHireUpdated"))})).catch((function(t){e.errors=t})).finally((function(){e.updatingAccount=!1}))}}},n=r(22),l=r(25),c=r.n(l),m=r(144),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("LoadingIcon",{attrs:{"is-loading":e.loading}}),e._v(" "),e.loading?e._e():r("div",{staticClass:"container grid-list-md fluid wrap"},[r("NewHireForm",{attrs:{errors:e.errors},model:{value:e.newHire,callback:function(t){e.newHire=t},expression:"newHire"}}),e._v(" "),r("v-btn",{staticClass:"success",on:{click:e.updateNewHire}},[e._v("\n      Save\n    ")])],1)],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VBtn:m.a})}}]);