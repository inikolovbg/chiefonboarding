(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{660:function(e,t,n){var content=n(668);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(17).default)("19b267cc",content,!0,{sourceMap:!1})},665:function(e,t,n){"use strict";n(132);var r=n(659),o=n.n(r),l={name:"ContentDisplay",props:{content:{default:function(){return[]},type:Array},disableMustache:{default:!1,type:Boolean}},methods:{getYoutubeLink:function(e){var t=/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;return null!==e.trim().match(t)&&2===e.trim().match(t).length?"https://youtube.com/embed/"+e.trim().match(t)[1]:""},mustaching:function(content){return this.disableMustache?content:void 0===content?"":o.a.render(content,this.$store.state.baseInfo.new_hire||this.$store.state.admins[0])},downloadFile:function(e){this.$newhirepart.getFileURL(e.id,e.uuid).then((function(e){window.open(e,"_blank")}))}}},d=(n(667),n(22)),c=n(25),m=n.n(c),v=n(215),f=n(176),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.content,(function(i,t){return n("div",{key:t},["p"===i.type?n("p",[n("span",{domProps:{innerHTML:e._s(e.mustaching(i.content))}})]):e._e(),e._v(" "),"h1"===i.type?n("h1",[n("span",{domProps:{innerHTML:e._s(e.mustaching(i.content))}})]):e._e(),e._v(" "),"h2"===i.type?n("h2",[n("span",{domProps:{innerHTML:e._s(e.mustaching(i.content))}})]):e._e(),e._v(" "),"h3"===i.type?n("h3",[n("span",{domProps:{innerHTML:e._s(e.mustaching(i.content))}})]):e._e(),e._v(" "),"ul"===i.type?n("ul",{staticClass:"mb-3"},e._l(i.items,(function(t){return n("li",[n("span",{domProps:{innerHTML:e._s(e.mustaching(t.content))}})])})),0):e._e(),e._v(" "),"file"===i.type?n("h3",[n("label",[e._v("Files")]),n("br"),e._v(" "),e._l(i.files,(function(t,r){return n("v-chip",{key:r,on:{click:function(n){return e.downloadFile(t)}}},[e._v("\n        "+e._s(t.name)+"\n      ")])}))],2):e._e(),e._v(" "),"image"===i.type&&i.files.length?n("h3",[n("v-img",{attrs:{src:i.files[0].file_url}})],1):e._e(),e._v(" "),"youtube"===i.type?n("div",[""!==e.getYoutubeLink(i.content)?n("iframe",{attrs:{src:e.getYoutubeLink(i.content),width:"560",height:"315",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}):e._e()]):e._e(),e._v(" "),"quote"===i.type?n("blockquote",{style:"border-left-color: "+e.$store.state.baseInfo.org.base_color},[e._v("\n      "+e._s(i.content)+"\n    ")]):e._e()])})),0)}),[],!1,null,null,null);t.a=component.exports;m()(component,{VChip:v.a,VImg:f.a})},666:function(e,t,n){var content=n(671);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(17).default)("87b00410",content,!0,{sourceMap:!1})},667:function(e,t,n){"use strict";n(660)},668:function(e,t,n){var r=n(16)(!1);r.push([e.i,"blockquote,h1,h2,h3{margin-bottom:10px}blockquote{margin-top:10px;padding:20px 30px;background:#f9f9f9;border-left:2px solid #ffbb42}p{margin-bottom:20px!important}",""]),e.exports=r},670:function(e,t,n){"use strict";n(666)},671:function(e,t,n){var r=n(16)(!1);r.push([e.i,".v-file input[type=file][data-v-62316f79]{display:none}",""]),e.exports=r},672:function(e,t,n){"use strict";n(23),n(26);var r={name:"UploadNewHireFile",props:{value:{type:Array,default:function(){return[]}},label:{type:String,default:"File input"},color:{required:!0,type:String}},data:function(e){return{uploadingFile:!1}},watch:{value:{handler:function(e){this.$emit("input",e)},deep:!0}},methods:{upload:function(e){var t=this;this.uploadingFile=!0,this.$org.getPreSignedURL({name:e.name}).then((function(data){t.$org.uploadToAWS(data.url,e).then((function(){t.$org.confirmUploaded(data.id).then((function(e){t.value=e}))}))}))}}},o=(n(670),n(22)),l=n(25),d=n.n(l),c=n(828),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("v-file-input",{staticClass:"mt-2",attrs:{color:e.color,label:e.label,placeholder:"Select your file","prepend-icon":"mdi-paperclip",outlined:""},on:{change:e.upload},model:{value:e.files,callback:function(t){e.files=t},expression:"files"}})}),[],!1,null,"62316f79",null),m=component.exports;d()(component,{VFileInput:c.a});var v={name:"CustomForm",components:{UploadForm:m},props:{value:{type:Array,required:!0},org:{type:Object,required:!0},id:{type:Number,required:!0},external:{type:Boolean,default:!1}},data:function(){return{formPart:[]}},watch:{formPart:{handler:function(e){this.$emit("input",e)},deep:!0}},mounted:function(){var e=this;setTimeout((function(){e.formPart=JSON.parse(JSON.stringify(e.value))}),200)}},f=n(706),h=n(707),_=n(708),y=n(68),x=n(652),w=Object(o.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mt-3 formpart"},e._l(e.value,(function(i,t){return n("div",{key:t},["input"===i.type?n("div",[n("v-text-field",{staticClass:"my-0",attrs:{color:e.org.base_color,label:i.text,outline:""},model:{value:i.value,callback:function(t){e.$set(i,"value",t)},expression:"i.value"}})],1):e._e(),e._v(" "),"upload"===i.type?n("div",[n("UploadForm",{attrs:{id:e.id,label:i.text,color:e.org.base_color},model:{value:i.value,callback:function(t){e.$set(i,"value",t)},expression:"i.value"}})],1):e._e(),e._v(" "),"text"===i.type?n("div",[n("v-textarea",{staticClass:"my-0",attrs:{color:e.org.base_color,label:i.text,outline:""},model:{value:i.value,callback:function(t){e.$set(i,"value",t)},expression:"i.value"}})],1):e._e(),e._v(" "),"check"===i.type?n("div",[n("p",{staticStyle:{color:"rgba(0,0,0,.54)"}},[e._v("\n        "+e._s(i.text)+"\n      ")]),e._v(" "),e._l(i.items,(function(t){return n("v-checkbox",{key:t.name,staticClass:"my-0",attrs:{color:e.org.base_color,label:t.name},model:{value:t.value,callback:function(n){e.$set(t,"value",n)},expression:"n.value"}})}))],2):e._e(),e._v(" "),"select"===i.type?n("div",[n("v-radio-group",{attrs:{label:i.text,color:e.org.base_color},model:{value:i.value,callback:function(t){e.$set(i,"value",t)},expression:"i.value"}},e._l(i.options,(function(t){return n("v-radio",{key:t.name,attrs:{color:e.org.base_color,label:t.name,value:t.name}})})),1)],1):e._e()])})),0)}),[],!1,null,null,null);t.a=w.exports;d()(w,{VCheckbox:f.a,VRadio:h.a,VRadioGroup:_.a,VTextField:y.a,VTextarea:x.a})},675:function(e,t,n){var content=n(692);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(17).default)("b6e4e76a",content,!0,{sourceMap:!1})},677:function(e,t,n){"use strict";n(7);var r=n(659),o=n.n(r),l=n(665),d=n(672),c={name:"PreboardingPage",components:{ContentDisplay:l.a,CustomForm:d.a},props:{pages:{type:Array,required:!0},newHire:{type:Object,required:!0},org:{type:Object,required:!0},completedTodos:{type:Array,default:function(){return[]}},disableMustache:{type:Boolean,default:!1}},data:function(){return{form:[],dialogForm:[],index:0,showModal:!1,sendingForm:!1,submittingForm:!1}},computed:{page:function(){return this.pages[this.index]}},methods:{Mustaching:function(content){return this.disableMustache?content:o.a.render(content,this.newHire)},clickNext:function(){this.index++,this.index>this.pages.length-1&&(this.index=0),this.form=[]},sendFormBack:function(){var e=this;this.sendingForm=!0,this.$newhirepreboarding.sendFormBack({id:this.pages[this.index].page_id,form:this.form}).then((function(data){e.pages[e.index].completed=!0})).finally((function(){e.sendingForm=!1}))}}},m=n(22),v=n(25),f=n.n(v),h=n(144),_=n(208),y=n(47),x=n(71),component=Object(m.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-toolbar",{attrs:{color:"org.base_color",dark:"",extended:"",flat:""}}),e._v(" "),e.page?n("v-card",{staticClass:"mx-auto mb-4",staticStyle:{"margin-top":"-64px"},attrs:{"max-width":"590"}},[n("v-card-title",[n("h2",[e._v("\n        "+e._s(e.Mustaching(e.page.name))+"\n      ")])]),e._v(" "),n("v-card-text",[null!==e.page.content&&e.page.content.length?n("ContentDisplay",{attrs:{content:e.page.content,"disable-mustache":e.disableMustache}}):n("div",e._l(e.page.content,(function(t){return n("div",{key:t.id},[n("blockquote",{staticClass:"blockquote"},[e._v("\n            "+e._s(t.message)+"\n          ")])])})),0),e._v(" "),e.page.completed?e._e():n("CustomForm",{attrs:{id:e.page.id,org:e.org},on:{input:function(t){e.form=arguments[0]}},model:{value:e.page.form,callback:function(t){e.$set(e.page,"form",t)},expression:"page.form"}}),e._v(" "),e.page.form.length>0&&!e.page.completed?n("v-btn",{staticStyle:{"margin-left":"0px"},attrs:{color:e.org.base_color,loading:e.sendingForm,dark:""},on:{click:e.sendFormBack}},[e._v("\n        "+e._s(e.$t("buttons.submit"))+"\n      ")]):e._e(),e._v(" "),e.page.completed?n("div",[n("p",[e._v(e._s(e.$t("preboarding.completedForm")))])]):e._e(),e._v(" "),e.pages.length>1?n("div",{staticClass:"text-center mt-2"},[n("v-btn",{staticStyle:{color:"white"},attrs:{color:e.org.base_color},on:{click:e.clickNext}},[e._v("\n          "+e._s(e.$t("buttons.next"))+" ->\n        ")])],1):e._e()],1)],1):e._e()],1)}),[],!1,null,null,null);t.a=component.exports;f()(component,{VBtn:h.a,VCard:_.a,VCardText:y.b,VCardTitle:y.c,VToolbar:x.a})},678:function(e,t,n){"use strict";n(7),n(26),n(53),n(23);var r={props:{index:{type:Number,required:!0},type:{type:String,required:!0},items:{type:Array,required:!0},removable:{default:!0,type:Boolean},remind:{default:!1,type:Boolean}},data:function(){return{icons:[{name:"slack_messages",icon:"fab fa-slack-hash"},{name:"to_do",icon:"far fa-check-square"},{name:"resources",icon:"far fa-folder"},{name:"introductions",icon:"far fa-user-circle"},{name:"badges",icon:"far fa-arrow-alt-circle-right"},{name:"text_messages",icon:"far fa-comment"},{name:"emails",icon:"far fa-envelope"},{name:"admin_tasks",icon:"fas fa-tasks"},{name:"appointments",icon:"far fa-calendar-alt"},{name:"preboarding",icon:"fas fa-align-left"},{name:"introductions",icon:"far fa-user-circle"}]}},computed:{icon:function(){var e=this;return this.icons.find((function(a){return a.name===e.type}))}},methods:{remove:function(e){-1!==this.index?this.$store.commit("sequences/removeItem",{block:this.index,id:e,type:this.type}):this.$emit("removeUnconditionedItem",{id:e,type:this.type})},sendToParent:function(e,t){this.$emit("openItem",{index:this.index,_index:e,type:this.type,id:t})},remindNewHire:function(e){var t=this;e.loading=!0,this.$newhires.remindToDo(e.task_id).then((function(){e.reminded=new Date,t.$store.dispatch("showSnackbar",t.$t("sequence.reminderSent"))})).finally((function(){e.loading=!1}))}}},o=(n(691),n(22)),l=n(25),d=n.n(l),c=n(144),m=n(641),v=n(645),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.items,(function(t,r){return n("v-row",{key:r},[n("v-col",{staticClass:"py-0",class:{pointer:e.removable},attrs:{sm:"11"},on:{click:function(n){return e.sendToParent(r,t.id)}}},[n("i",{class:e.icon.icon+" mar7"}),e._v(" "),"task"===e.type?n("span",[e._v(e._s(t.todo))]):n("span",[e._v(e._s(t.name))]),e._v(" "),e.remind&&!t.completed?n("v-btn",{staticStyle:{margin:"0px 10px"},attrs:{disabled:!("task_id"in t),loading:t.loading,small:""},on:{click:function(n){return e.remindNewHire(t)}}},[e._v("\n        "+e._s(e.$t("sequence.remindNewHire"))+"\n      ")]):e._e()],1),e._v(" "),e.removable?n("v-col",{staticClass:"red-remove py-0",attrs:{sm:"1"},on:{click:function(n){return e.remove(t.id)}}},[n("i",{staticClass:"far fa-times-circle",class:{pointer:e.removable},staticStyle:{top:"2px",position:"relative"}})]):e._e()],1)})),1)}),[],!1,null,"5e17a5e6",null);t.a=component.exports;d()(component,{VBtn:c.a,VCol:m.a,VRow:v.a})},688:function(e,t,n){"use strict";var r={components:{PreboardingPage:n(677).a},props:{value:{type:Object,required:!0},errors:{type:Object,required:!0},inline:{type:Boolean,default:!1}},data:function(){return{dialog:!1,search:""}},computed:{errorMessages:function(){return JSON.parse(JSON.stringify(this.errors))}},watch:{value:{handler:function(e){this.$emit("input",e)},deep:!0},errors:function(e){"content"in e&&this.$store.dispatch("showSnackbar","Content: "+e.content[0])}}},o=n(22),l=n(25),d=n.n(l),c=n(144),m=n(208),v=n(641),f=n(649),h=n(643),_=n(124),y=n(645),x=n(646),w=n(71),k=n(116),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"py-2 px-0"},[n("v-row",[n("v-col",{attrs:{sm:"4"}},[n("v-col",{staticClass:"py-0",attrs:{sm:"12"}},[n("VTextFieldEmoji",{attrs:{label:e.$t("forms.title"),errors:e.errorMessages.name},on:{removeError:function(t){e.errorMessages.name=""}},model:{value:e.value.name,callback:function(t){e.$set(e.value,"name",t)},expression:"value.name"}})],1),e._v(" "),n("v-col",{staticClass:"py-0",attrs:{sm:"12"}},[n("TagsSelector",{staticClass:"pt-2",model:{value:e.value.tags,callback:function(t){e.$set(e.value,"tags",t)},expression:"value.tags"}})],1),e._v(" "),n("v-dialog",{staticClass:"mt-3",attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[n("v-col",{attrs:{sm:"12"}},[n("v-btn",e._g({attrs:{color:"dark",dark:""}},r),[e._v("\n              "+e._s(e.$t("preboarding.previewPage"))+"\n            ")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),n("v-card",[n("v-toolbar",{attrs:{dark:"",color:"dark"}},[n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(t){e.dialog=!1}}},[n("v-icon",[e._v("close")])],1),e._v(" "),n("v-toolbar-title",[e._v(e._s(e.$t("newhires.preview")))]),e._v(" "),n("v-spacer"),e._v(" "),n("v-toolbar-items",[n("v-btn",{attrs:{dark:"",text:""},on:{click:function(t){e.dialog=!1}}},[e._v("\n                Close\n              ")])],1)],1),e._v(" "),n("PreboardingPage",{attrs:{pages:[e.value],"new-hire":e.$store.state.newhires.all[0],org:e.$store.state.org,"disable-mustache":""}})],1)],1)],1),e._v(" "),n("v-col",{attrs:{sm:"8"}},[n("Editor",{ref:"editor",model:{value:e.value.content,callback:function(t){e.$set(e.value,"content",t)},expression:"value.content"}}),e._v(" "),n("CustomForm",{model:{value:e.value.form,callback:function(t){e.$set(e.value,"form",t)},expression:"value.form"}})],1)],1)],1)}),[],!1,null,null,null);t.a=component.exports;d()(component,{VBtn:c.a,VCard:m.a,VCol:v.a,VContainer:f.a,VDialog:h.a,VIcon:_.a,VRow:y.a,VSpacer:x.a,VToolbar:w.a,VToolbarItems:k.a,VToolbarTitle:k.b})},691:function(e,t,n){"use strict";n(675)},692:function(e,t,n){var r=n(16)(!1);r.push([e.i,".mar7[data-v-5e17a5e6]{margin-right:7px;width:12.25px}.pointer[data-v-5e17a5e6]{cursor:pointer}.red-remove[data-v-5e17a5e6]{margin-top:-2px}",""]),e.exports=r},703:function(e,t,n){"use strict";n(26),n(9),n(7),n(222);var r={name:"PreboardingModal",components:{PreboardingForm:n(688).a},props:{preboarding:{type:Object,default:function(){return{}}},value:Boolean},data:function(){return{loading:!1,nameError:[],errors:{},tempPreboarding:{name:"",data:[],when:"",content:"",tags:[],early_files:[]}}},watch:{value:function(e){0===Object.entries(this.preboarding).length?this.tempPreboarding={name:"",data:[],when:"",content:"",tags:[],early_files:[]}:this.tempPreboarding=JSON.parse(JSON.stringify(this.preboarding)),this.$store.commit("refreshEditor")}},methods:{addTodo:function(){var e=this;if(""===this.tempPreboarding.name||""===this.tempPreboarding.message)return""===this.tempPreboarding.name&&(this.nameError=[this.$t("forms.errors.fieldRequired")]),void(""===this.tempPreboarding.message&&this.$store.dispatch("showSnackbar",this.$t("forms.errors.content")));var t=-1;JSON.stringify(this.tempPreboarding)!==JSON.stringify(this.preboarding)?("id"in this.tempPreboarding&&(t=this.tempPreboarding.id,delete this.tempPreboarding.id),this.tempPreboarding.template=!1,this.loading=!0,this.$preboarding.create(this.tempPreboarding).then((function(data){data.type="todo",e.$emit("change",{add:data,remove:t}),e.$emit("input",!1)})).catch((function(t){t&&e.$store.dispatch("showSnackbar",e.$t("preboarding.couldNotSave"))})).finally((function(){e.loading=!1}))):this.$emit("input",!1)}}},o=n(22),l=n(25),d=n.n(l),c=n(144),m=n(208),v=n(47),f=n(643),h=n(646),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{persistent:!0,"max-width":"900"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[e._v("\n      "+e._s(e.$t("preboarding.item"))+"\n    ")]),e._v(" "),n("v-card-text",[n("PreboardingForm",{ref:"form",attrs:{errors:e.errors,inline:!0},model:{value:e.tempPreboarding,callback:function(t){e.tempPreboarding=t},expression:"tempPreboarding"}})],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{text:""},on:{click:function(t){return e.$emit("input",!1)}}},[e._v("\n        "+e._s(e.$t("buttons.cancel"))+"\n      ")]),e._v(" "),n("v-btn",{attrs:{loading:e.loading},on:{click:e.addTodo}},[e._v("\n        "+e._s(e.$t("buttons.add"))+"\n      ")])],1)],1)],1)}),[],!1,null,null,null);t.a=component.exports;d()(component,{VBtn:c.a,VCard:m.a,VCardActions:v.a,VCardText:v.b,VCardTitle:v.c,VDialog:f.a,VSpacer:h.a})},714:function(e,t,n){"use strict";n(92);var r=n(226),o=n.n(r),l=n(703),d={name:"PreboardingPart",components:{draggable:o.a,PreboardingModal:l.a},props:{value:{required:!0,type:Array},onNewHirePage:{default:!1,type:Boolean}},data:function(){return{showPreboardingModal:!1,showPreboardingItemsModal:!1,item:{}}},methods:{addItem:function(e){var t=this;this.onNewHirePage?this.$newhires.addTask(this.$route.params.id,{type:"preboarding",item:e}).then((function(data){t.value.push(data)})):this.value.push(e)},updateOrder:function(e){this.onNewHirePage?(this.value.forEach((function(e,t){e.order=t})),this.$newhires.changePreboardingOrder(this.$route.params.id,this.value)):this.$emit("input",this.value)},changedItem:function(e){this.removeItem(e.remove),this.addItem(e.add)},editItem:function(e){this.item=e,this.showPreboardingModal=!0},removeItem:function(e){var t=this;if(this.onNewHirePage)this.$newhires.deleteTask(this.$route.params.id,{type:"preboarding",item:{id:e}}).then((function(data){var n=t.value.findIndex((function(a){return a.id===e}));t.value.splice(n,1)})).catch((function(){t.$store.dispatch("showSnackbar",t.$t("newhires.notRemoved"))}));else{var n=this.value.findIndex((function(a){return a.id===e}));this.value.splice(n,1)}}}},c=n(22),m=n(25),v=n.n(m),f=n(144),h=n(208),_=n(47),y=n(641),x=n(645),w=n(734),component=Object(c.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-timeline-item",{attrs:{color:"dark",icon:"fas fa-star"}},[n("v-card",{attrs:{color:"dark",dark:""}},[n("v-card-title",{staticClass:"title",staticStyle:{"padding-bottom":"5px","padding-top":"5px"}},[n("v-row",[n("v-col",[e._v("Pre-boarding")]),e._v(" "),n("v-col",[n("v-btn",{staticClass:"ma-0",staticStyle:{float:"right"},attrs:{color:"secondary",small:""},on:{click:function(t){return e.$emit("openPreview")}}},[e._v("\n            "+e._s(e.$t("newhires.preview"))+"\n          ")]),e._v(" "),e.onNewHirePage?n("v-btn",{staticClass:"ma-0",staticStyle:{float:"right","margin-right":"11px !important"},attrs:{color:"secondary",small:""},on:{click:function(t){return e.$emit("openAccessModal")}}},[e._v("\n            "+e._s(e.$t("newhires.giveAccess"))+"\n          ")]):e._e(),e._v(" "),n("v-btn",{staticClass:"ma-0",staticStyle:{float:"right","margin-right":"11px !important"},attrs:{color:"primary",small:""},on:{click:function(t){e.showPreboardingItemsModal=!0}}},[e._v("\n            "+e._s(e.$t("buttons.add"))+"\n          ")])],1)],1)],1),e._v(" "),n("v-card-text",{staticClass:"white text--primary pt-3"},[n("draggable",{attrs:{disabled:!e.onNewHirePage},on:{change:e.updateOrder},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.value,(function(i,t){return n("v-row",{key:t,staticStyle:{cursor:"pointer"},on:{click:function(t){return e.editItem(i)}}},[n("v-col",{staticClass:"py-0",attrs:{sm:"11"}},[n("i",{staticClass:"fas fa-align-left mr-3"}),e._v(e._s(i.name)+"\n          ")]),e._v(" "),n("v-col",{staticClass:"red-remove py-0",attrs:{sm:"1"},on:{click:function(t){return t.stopPropagation(),e.removeItem(i.id)}}},[n("i",{staticClass:"far fa-times-circle pointer"})])],1)})),1),e._v(" "),0===e.value.length?n("p",[e._v("\n        "+e._s(e.$t("newhires.noItemsYet"))+"\n      ")]):e._e()],1)],1),e._v(" "),n("PreboardingModal",{attrs:{preboarding:e.item},on:{change:e.changedItem},model:{value:e.showPreboardingModal,callback:function(t){e.showPreboardingModal=t},expression:"showPreboardingModal"}}),e._v(" "),n("SelectTemplates",{attrs:{items:e.$store.state.preboarding.all},on:{clickedItem:e.addItem},model:{value:e.showPreboardingItemsModal,callback:function(t){e.showPreboardingItemsModal=t},expression:"showPreboardingItemsModal"}})],1)}),[],!1,null,null,null);t.a=component.exports;v()(component,{VBtn:f.a,VCard:h.a,VCardText:_.b,VCardTitle:_.c,VCol:y.a,VRow:x.a,VTimelineItem:w.a})},725:function(e,t,n){"use strict";n(7);var r={props:{newHire:{type:Object,default:function(){return{}}},value:{type:Boolean,required:!0}},data:function(e){return{sendingPreboardingDetails:!1,phone:"",medium:1,email:e.newHire.email}},methods:{sendPreboardingDetails:function(){var e=this;this.sendingPreboardingDetails=!0;var t={};t.type=1===this.medium?"email":"phone",t.value=1===this.medium?this.email:this.phone,this.$newhires.sendPreboardingDetails(this.$route.params.id,t).then((function(){e.$emit("detailsSend",!0),e.$emit("input",!1),e.$store.dispatch("showSnackbar",e.$t("newhires.hasBeenNotified"))})).catch((function(t){e.$store.dispatch("showSnackbar",e.$t("newhires.couldNotSendMessage"))})).finally((function(){e.sendingPreboardingDetails=!1}))}}},o=n(22),l=n(25),d=n.n(l),c=n(144),m=n(208),v=n(47),f=n(643),h=n(707),_=n(708),y=n(646),x=n(68),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{persistent:!0,"max-width":"650"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[e._v("\n      "+e._s(e.$t("newhires.sendPreEmailHeader"))+"\n    ")]),e._v(" "),n("v-card-text",[n("p",[e._v("\n        "+e._s(e.$t("newhires.sendPreEmailDescr"))+"\n      ")]),e._v(" "),n("v-radio-group",{attrs:{color:"primary"},model:{value:e.medium,callback:function(t){e.medium=t},expression:"medium"}},[n("v-radio",{attrs:{label:e.$t("newhires.email"),value:1,color:"primary"}}),e._v(" "),n("v-radio",{attrs:{label:e.$t("newhires.textMessage"),value:2,color:"primary"}})],1),e._v(" "),1===e.medium?n("div",[n("v-text-field",{attrs:{label:e.$t("forms.sendEmailMessageTo")},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1):n("div",[n("v-text-field",{attrs:{label:e.$t("forms.sendTextMessageTo")},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}})],1),e._v(" "),e.newHire.send_preboarding_details?n("div",[n("b",[e._v(e._s(e.$t("newhires.alreadySendNotification")))])]):e._e()],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){return e.$emit("input",!1)}}},[e._v("\n        "+e._s(e.$t("buttons.cancel"))+"\n      ")]),e._v(" "),n("v-btn",{attrs:{loading:e.sendingPreboardingDetails,color:"primary",dark:""},on:{click:e.sendPreboardingDetails}},[e._v("\n        "+e._s(e.$t("buttons.send"))+"\n      ")])],1)],1)],1)}),[],!1,null,null,null);t.a=component.exports;d()(component,{VBtn:c.a,VCard:m.a,VCardActions:v.a,VCardText:v.b,VCardTitle:v.c,VDialog:f.a,VRadio:h.a,VRadioGroup:_.a,VSpacer:y.a,VTextField:x.a})},747:function(e,t,n){var content=n(820);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(17).default)("50f06f18",content,!0,{sourceMap:!1})},819:function(e,t,n){"use strict";n(747)},820:function(e,t,n){var r=n(16)(!1);r.push([e.i,".mar7[data-v-29d22f87]{margin-right:7px;width:12.25px}",""]),e.exports=r},839:function(e,t,n){"use strict";n.r(t);n(9),n(7),n(222),n(35),n(45),n(38),n(10),n(53);var r=n(4),o=n.n(r),l=n(112),d=n.n(l),c=n(678),m={name:"TimelineItem",components:{CardLine:c.a},filters:{toDate:function(e){return o()(e).format("dddd, MMMM D")}},props:{i:{type:Object,required:!0},hideDot:{type:Boolean,default:!1}},data:function(){return{amountOfDays:1,childIndex:0,openTimeModal:!1,openTaskModal:!1,openEmailModal:!1,openTextModal:!1,openResourceModal:!1,openTodoModal:!1,openSlackModal:!1,openBadgeModal:!1,newText:!1,newTime:!1,newEmail:!1,newTodo:!1,errors:{},index:0}},computed:{hasNewHireItems:function(){return this.i.to_do.length||this.i.resources.length||this.i.badges.length||this.i.external_messages.filter((function(a){return 0===a.person_type})).length},hasAdminItems:function(){return this.i.admin_tasks.length||this.i.external_messages.filter((function(a){return 0!==a.person_type})).length}},methods:{getAdminItems:function(e){return this.i.external_messages.filter((function(a){return 0!==a.person_type&&a.send_via===e}))},getNewHireItems:function(e){return this.i.external_messages.filter((function(a){return 0===a.person_type&&a.send_via===e}))}}},v=n(22),f=n(25),h=n.n(f),_=n(208),y=n(47),x=n(215),w=n(642),k=n(734),component=Object(v.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-timeline-item",{staticClass:"mb-1",attrs:{"hide-dot":e.hideDot,right:""}},[n("v-card",{attrs:{color:"#f5f5f5"}},[n("v-card-title",{staticClass:"title",staticStyle:{"padding-bottom":"0px","padding-top":"5px","max-height":"70px"}},[1===e.i.condition_type?n("div",{staticStyle:{width:"90%"}},[n("v-combobox",{attrs:{value:e.i.condition_to_do,items:e.$store.state.todos.all,label:e.$t("sequence.waitFor"),"item-text":"name","item-value":"id",multiple:"",chips:"",disabled:""}})],1):e._e(),e._v(" "),0===e.i.condition_type?n("div",[n("span",{staticStyle:{"font-size":"15px"}},[e._v(e._s(e._f("toDate")(e.i.date)))])]):e._e(),e._v(" "),2===e.i.condition_type?n("div",[n("span",{staticStyle:{"font-size":"15px"}},[e._v("\n          "+e._s(e._f("toDate")(e.i.date))+"\n        ")])]):e._e()]),e._v(" "),n("v-card-text",{staticClass:"white text--primary"},[e.hasNewHireItems?n("v-chip",{staticStyle:{margin:"5px 0px"},attrs:{label:"",small:""}},[e._v("\n        "+e._s(e.$t("sequence.addToNewHire"))+"\n      ")]):e._e(),e._v(" "),n("CardLine",{attrs:{index:e.index,removable:!1,items:e.i.to_do,type:"to_do"}}),e._v(" "),n("CardLine",{attrs:{index:e.index,removable:!1,items:e.i.resources,type:"resources"}}),e._v(" "),n("CardLine",{attrs:{index:e.index,removable:!1,items:e.i.badges,type:"badges"}}),e._v(" "),n("CardLine",{attrs:{index:e.index,removable:!1,items:e.getNewHireItems(1),type:"slack_messages"}}),e._v(" "),n("CardLine",{attrs:{index:e.index,removable:!1,items:e.getNewHireItems(2),type:"text_messages"}}),e._v(" "),n("CardLine",{attrs:{index:e.index,removable:!1,items:e.getNewHireItems(0),type:"emails"}}),e._v(" "),e.hasAdminItems?n("v-chip",{staticStyle:{margin:"5px 0px"},attrs:{label:"",small:""}},[e._v("\n        "+e._s(e.$t("sequence.addToAdmin"))+"\n      ")]):e._e(),e._v(" "),n("CardLine",{attrs:{index:e.index,removable:!1,items:e.i.admin_tasks,type:"admin_tasks"}}),e._v(" "),n("CardLine",{attrs:{index:e.index,removable:!1,items:e.getAdminItems(2),type:"text_messages"}}),e._v(" "),n("CardLine",{attrs:{index:e.index,removable:!1,items:e.getAdminItems(0),type:"emails"}}),e._v(" "),n("CardLine",{attrs:{index:e.index,removable:!1,items:e.getAdminItems(1),type:"slack_messages"}}),e._v(" "),e.i.to_do_due.length?n("v-chip",{staticStyle:{margin:"7px 0px"},attrs:{label:"",small:""}},[e._v("\n        "+e._s(e.$t("newhires.due"))+"\n      ")]):e._e(),e._v(" "),n("CardLine",{attrs:{index:e.index,removable:!1,items:e.i.to_do_due,remind:"",type:"to_do"}})],1)],1)],1)}),[],!1,null,"5c8012c2",null),$=component.exports;h()(component,{VCard:_.a,VCardText:y.b,VCardTitle:y.c,VChip:x.a,VCombobox:w.a,VTimelineItem:k.a});var C=n(725),P=n(677),V=n(714),T={name:"NewHireDetailOverview",components:{PreboardingPage:P.a,PreboardingPart:V.a,NewHireTimeLine:$,CardLine:c.a,SendPreboardingModal:C.a},data:function(){return{newHire:{},dialog:!1,loading:!0,noItems:!1,preboardingDialog:!1,items:[],tempNoDate:[],preboardingItems:[],timeline:[],itemsOverdue:[]}},computed:{beforeStartingDate:function(){return o()(this.newHire.start_day)>o()()}},watch:{"$store.state.refreshSequence":function(){this.loadNewHire()}},mounted:function(){this.loadNewHire()},methods:{loadNewHire:function(){var e=this;this.loading=!0,this.getNewHire().then((function(data){e.getTasksTimeLine()}))},getTasksTimeLine:function(){var e=this;this.$newhires.getTasks(this.$route.params.id).then((function(t){if(e.loading=!1,0!==t.to_do.length||0!==t.conditions.length){e.preboardingItems=t.preboarding,e.items=t,t.conditions.forEach((function(t){t.follow_up_condition=[],0===t.condition_type&&(t.date=e.addWeekdays(o()(e.newHire.start_day),t.days-1).format("YYYY-MM-DD")),2===t.condition_type&&(t.date=o()(e.newHire.start_day).subtract(t.days,"days").format("YYYY-MM-DD")),t.to_do_due=[]}));var n=o()();t.to_do.forEach((function(r){n=e.addWeekdays(o()(e.newHire.start_day),r.due_on_day-1).format("YYYY-MM-DD"),void 0!==t.conditions.find((function(a){return a.date===n}))?t.conditions.find((function(a){return a.date===n})).to_do_due.push(r):t.conditions.push({admin_tasks:[],badges:[],condition_to_do:[],condition_type:0,date:n,external_messages:[],resources:[],follow_up_condition:[],to_do:[],to_do_due:[r]})}));var r=t.conditions.filter((function(a){return 1!==a.condition_type})),l=t.conditions.filter((function(a){return 1===a.condition_type}));e.itemsOverdue=[].concat.apply([],r.filter((function(a){return o()().subtract(1,"days")>o()(a.date)})).map((function(a){return a.to_do_due}))).filter((function(a){return!a.completed}));var c=r.filter((function(a){return o()().subtract(1,"days")<=o()(a.date)}));l.forEach((function(e){var t=0,n=e.condition_to_do.length,r=e.condition_to_do.map((function(i){return i.id}));c.forEach((function(o){o.to_do.forEach((function(e){r.includes(e.id)&&t++})),o.to_do_due.forEach((function(e){r.includes(e.id)&&t++})),t===n&&(o.follow_up_condition.push(e),n=0)}))})),e.timeline=d.a.groupBy(c,"date"),e.timeline=Object.fromEntries(Object.entries(e.timeline).sort())}else e.noItems=!0})).catch((function(t){e.$store.dispatch("showSnackbar",e.$t("newhires.noTasks"))}))},getNewHire:function(){var e=this;return this.$newhires.get(this.$route.params.id).then((function(t){e.newHire=t})).catch((function(t){e.$store.dispatch("showSnackbar",e.$t("newhires.noNewHire"))}))},addWeekdays:function(e,t){if(t<=0)return e;for(var n=e.isoWeekday(),r=0;0!==t;)r+=1,6!==(n+=1)&&7!==n&&(t-=1),8===n&&(n=1);return e.add(r,"days")}}},S=(n(819),n(144)),M=n(649),I=n(643),H=n(124),N=n(646),O=n(735),D=n(71),F=n(116),E=Object(v.a)(T,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("LoadingIcon",{attrs:{"is-loading":e.loading}}),e._v(" "),e.loading?e._e():n("v-timeline",{staticStyle:{"padding-top":"0px"},attrs:{"align-top":"",dense:""}},[e.preboardingItems.length?n("PreboardingPart",{attrs:{"on-new-hire-page":""},on:{openPreview:function(t){e.dialog=!0},openAccessModal:function(t){e.preboardingDialog=!0}},model:{value:e.preboardingItems,callback:function(t){e.preboardingItems=t},expression:"preboardingItems"}}):e._e(),e._v(" "),e.itemsOverdue.length?n("v-timeline-item",{staticClass:"mb-1",attrs:{small:"",right:"",color:"red"}},[n("v-card",{attrs:{color:"#f5f5f5"}},[n("v-card-title",{staticClass:"title",staticStyle:{"padding-bottom":"5px"}},[e._v("\n          "+e._s(e.$t("newhires.overdue"))+"\n        ")]),e._v(" "),n("v-card-text",{staticClass:"white text--primary pt-3"},[n("CardLine",{attrs:{items:e.itemsOverdue,index:0,removable:!1,type:"to_do",remind:""}})],1)],1)],1):e._e(),e._v(" "),e._l(e.timeline,(function(i,t){return n("div",{key:t},[n("NewHireTimeLine",{attrs:{i:i[0]}}),e._v(" "),e._l(i[0].follow_up_condition,(function(e){return n("div",[n("NewHireTimeLine",{staticStyle:{"margin-left":"20px"},attrs:{i:e,"hide-dot":""}})],1)}))],2)}))],2),e._v(" "),n("v-dialog",{staticClass:"mt-3",attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-toolbar",{attrs:{dark:"",color:"dark"}},[n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(t){e.dialog=!1}}},[n("v-icon",[e._v("close")])],1),e._v(" "),n("v-toolbar-title",[e._v(e._s(e.$t("newhires.preview")))]),e._v(" "),n("v-spacer"),e._v(" "),n("v-toolbar-items",[n("v-btn",{attrs:{dark:"",text:""},on:{click:function(t){e.dialog=!1}}},[e._v("\n            "+e._s(e.$t("buttons.close"))+"\n          ")])],1)],1),e._v(" "),n("PreboardingPage",{attrs:{pages:e.preboardingItems,"auth-code":e.$store.state.admin.authToken,"new-hire":e.$store.state.newhires.all[0],org:e.$store.state.org}})],1)],1),e._v(" "),e.noItems?n("div",[n("p",[e._v(" "+e._s(e.$t("newhires.noOverviewTasks")))])]):e._e(),e._v(" "),n("SendPreboardingModal",{attrs:{"new-hire":e.newHire},on:{changeNewHire:function(t){e.newHire=arguments[0]}},model:{value:e.preboardingDialog,callback:function(t){e.preboardingDialog=t},expression:"preboardingDialog"}})],1)}),[],!1,null,"29d22f87",null);t.default=E.exports;h()(E,{VBtn:S.a,VCard:_.a,VCardText:y.b,VCardTitle:y.c,VContainer:M.a,VDialog:I.a,VIcon:H.a,VSpacer:N.a,VTimeline:O.a,VTimelineItem:k.a,VToolbar:D.a,VToolbarItems:F.a,VToolbarTitle:F.b})}}]);