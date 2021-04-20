(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{748:function(t,e,o){var content=o(822);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(17).default)("582fcb32",content,!0,{sourceMap:!1})},821:function(t,e,o){"use strict";o(748)},822:function(t,e,o){var n=o(16)(!1);n.push([t.i,".border[data-v-45713e98]{border:1px solid #fff;border-radius:4px;padding:10px}.pending[data-v-45713e98]{border:1px solid #67aaf9}.active[data-v-45713e98]{border:1px solid #ffbb42}",""]),t.exports=n},840:function(t,e,o){"use strict";o.r(e);o(7);var n={props:{newHire:{type:Object,required:!0}},data:function(){return{loading:!1,slack:{},google:{},googleEmail:"",addSlackModal:!1,slackEmail:"",schedulingSlack:!1,schedulingGoogle:!1,loadingSlack:!0,loadingGoogle:!0,creatingSlack:!1,creatingGoogle:!1,addGoogleModal:!1}},mounted:function(){this.checkAccounts()},methods:{createSlack:function(){var t=this;this.schedulingSlack=!0,this.$newhires.scheduleAccess(this.newHire.id,{integration:1,email:this.slackEmail}).then((function(data){t.slack.status="pending",t.slackEmail="",t.addSlackModal=!1})).catch((function(t){})).finally((function(){t.schedulingSlack=!1}))},removeSlack:function(){var t=this;this.loadingSlack=!0,this.$newhires.revokeAccess(this.newHire.id,{integration:1}).then((function(data){t.slack.status="not_found"})).catch((function(e){"paid"===e.error&&t.$store.dispatch("showSnackbar","This feature is only available for paying Slack teams."),"error"===e.error&&t.$store.dispatch("showSnackbar","Something went wrong, please try again.")})).finally((function(){t.loadingSlack=!1}))},createGoogle:function(){var t=this;this.creatingGoogle=!0,this.$newhires.scheduleAccess(this.newHire.id,{integration:2,email:this.googleEmail}).then((function(data){t.google.status="pending",t.googleEmail="",t.addGoogleModal=!1})).finally((function(){t.creatingGoogle=!1}))},removeGoogle:function(){var t=this;this.loadingGoogle=!0,this.$newhires.revokeAccess(this.newHire.id,{integration:2}).then((function(data){t.google.status="not_found"})).finally((function(){t.loadingGoogle=!1}))},checkAccounts:function(){var t=this;this.$store.state.org.slack_account_key&&this.$store.state.org.slack_key&&this.$newhires.getAccess(this.newHire.id,1).then((function(data){t.slack=data})).finally((function(){t.loadingSlack=!1,t.slackEmail=t.newHire.email})),this.$store.state.org.google_key&&this.$newhires.getAccess(this.newHire.id,2).then((function(data){t.google=data})).finally((function(){t.loadingGoogle=!1}))}}},l=(o(821),o(22)),c=o(25),r=o.n(c),d=o(144),v=o(208),h=o(47),_=o(641),f=o(649),k=o(643),m=o(213),w=o(145),$=o(39),y=o(216),S=o(645),x=o(646),G=o(68),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{attrs:{"grid-list-xl":"","px-6":"","py-1":"",fluid:""}},[o("LoadingIcon",{attrs:{"is-loading":t.loading}}),t._v(" "),t.loading?t._e():o("v-row",{attrs:{row:"",wrap:""}},[t.$store.state.org.slack_account_key&&t.$store.state.org.slack_key?o("v-col",{attrs:{sm:"6"}},[o("div",{staticClass:"border"},[o("div",[o("h3",[t._v("Slack")]),t._v(" "),o("p",[t._v(t._s(t.$t("newhires.slackExpl")))]),t._v(" "),"not_found"===t.slack.status?o("v-btn",{staticClass:"ma-0",attrs:{color:"secondary"},on:{click:function(e){t.addSlackModal=!0}}},[t._v("\n            "+t._s(t.$t("newhires.giveAccess"))+"\n          ")]):o("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-btn",t._g({staticClass:"ma-0",class:{primary:"pending"===t.slack.status,green:"exists"===t.slack.status},attrs:{loading:t.loadingSlack}},n),["pending"===t.slack.status?o("span",[t._v(t._s(t.$t("buttons.pending")))]):o("span",{staticStyle:{color:"white"}},[t._v(t._s(t.$t("buttons.active")))])])]}}],null,!1,2672368366)},[t._v(" "),o("v-list",[o("v-list-item",{on:{click:t.removeSlack}},[o("v-list-item-title",[t._v(t._s(t.$t("buttons.remove")))])],1)],1)],1)],1)])]):t._e(),t._v(" "),t.$store.state.org.google_key?o("v-col",{attrs:{sm:"6"}},[o("div",{staticClass:"border"},[o("div",[o("h3",[t._v("Google")]),t._v(" "),o("p",[t._v(t._s(t.$t("newhires.googleExpl")))]),t._v(" "),"not_found"===t.google.status?o("v-btn",{staticClass:"ma-0",attrs:{color:"secondary"},on:{click:function(e){t.addGoogleModal=!0}}},[t._v("\n            "+t._s(t.$t("newhires.giveAccess"))+"\n          ")]):o("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-btn",t._g({staticClass:"ma-0",class:{primary:"pending"===t.google.status,green:"exists"===t.google.status},attrs:{loading:t.loadingGoogle}},n),["pending"===t.google.status?o("span",[t._v(t._s(t.$t("buttons.pending")))]):o("span",{staticStyle:{color:"white"}},[t._v(t._s(t.$t("buttons.active")))])])]}}],null,!1,2014273358)},[t._v(" "),o("v-list",[o("v-list-item",{on:{click:t.removeGoogle}},[o("v-list-item-title",[t._v(t._s(t.$t("buttons.remove")))])],1)],1)],1)],1)])]):t._e()],1),t._v(" "),o("v-dialog",{attrs:{"max-width":"500"},model:{value:t.addSlackModal,callback:function(e){t.addSlackModal=e},expression:"addSlackModal"}},[o("v-card",[o("v-card-title",[o("h3",[t._v(t._s(t.$t("newhires.slackWhere")))])]),t._v(" "),o("v-card-text",[t._v("\n        "+t._s(t.$t("newhires.slackDefault"))+"\n\n        "),o("v-text-field",{staticClass:"mt-4",attrs:{label:t.$t("forms.email")},model:{value:t.slackEmail,callback:function(e){t.slackEmail=e},expression:"slackEmail"}})],1),t._v(" "),o("v-card-actions",[o("v-spacer"),t._v(" "),o("v-btn",{attrs:{color:"secondary"},on:{click:function(e){t.addSlackModal=!1}}},[t._v("\n          "+t._s(t.$t("buttons.cancel"))+"\n        ")]),t._v(" "),o("v-btn",{attrs:{loading:t.schedulingSlack,color:"primary"},on:{click:t.createSlack}},[t._v("\n          "+t._s(t.$t("buttons.schedule"))+"\n        ")])],1)],1)],1),t._v(" "),o("v-dialog",{attrs:{"max-width":"500"},model:{value:t.addGoogleModal,callback:function(e){t.addGoogleModal=e},expression:"addGoogleModal"}},[o("v-card",[o("v-card-title",[o("h3",[t._v(t._s(t.$t("newhires.modalGoogleTitle")))])]),t._v(" "),o("v-card-text",[o("p",{domProps:{innerHTML:t._s(t.$t("newhires.modalGoogleDescr"))}}),t._v(" "),o("v-text-field",{staticClass:"mt-4",attrs:{label:t.$t("forms.email")},model:{value:t.googleEmail,callback:function(e){t.googleEmail=e},expression:"googleEmail"}})],1),t._v(" "),o("v-card-actions",[o("v-spacer"),t._v(" "),o("v-btn",{attrs:{color:"secondary",text:""},on:{click:function(e){t.addGoogleModal=!1}}},[t._v("\n          "+t._s(t.$t("buttons.cancel"))+"\n        ")]),t._v(" "),o("v-btn",{attrs:{color:"primary"},on:{click:t.createGoogle}},[t._v("\n          "+t._s(t.$t("buttons.schedule"))+"\n        ")])],1)],1)],1)],1)}),[],!1,null,"45713e98",null),E=component.exports;r()(component,{VBtn:d.a,VCard:v.a,VCardActions:h.a,VCardText:h.b,VCardTitle:h.c,VCol:_.a,VContainer:f.a,VDialog:k.a,VList:m.a,VListItem:w.a,VListItemTitle:$.c,VMenu:y.a,VRow:S.a,VSpacer:x.a,VTextField:G.a});var M={layout:"admin",components:{NewHireAccess:E},data:function(){return{newhire:{},loading:!0}},mounted:function(){this.getNewHire()},methods:{getNewHire:function(){var t=this;this.loading=!0,this.$newhires.get(this.$route.params.id).then((function(e){t.newhire=e})).catch((function(e){t.$store.dispatch("showSnackbar",t.$t("newhires.noNewHire"))})).finally((function(){t.loading=!1}))}}},V=Object(l.a)(M,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("LoadingIcon",{attrs:{"is-loading":t.loading}}),t._v(" "),t.loading?t._e():o("NewHireAccess",{attrs:{id:t.$route.params.id,"new-hire":t.newhire}})],1)}),[],!1,null,null,null);e.default=V.exports}}]);