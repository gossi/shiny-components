define("shiny-components/initializers/ajax",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.get,o=function(e){var o=t(this,"fastboot.request.protocol")
if(/^\/\//.test(e.url))e.url=o+e.url
else if(!/^https?:\/\//.test(e.url))try{e.url=o+"//"+t(this,"fastboot.request.host")+e.url}catch(n){throw new Error("You are using Ember Data with no host defined in your adapter. This will attempt to use the host of the FastBoot request, which is not configured for the current host of this request. Please set the hostWhitelist property for in your environment.js. FastBoot Error: "+n.message)}if(!najax)throw new Error("najax does not seem to be defined in your app. Did you override it via `addOrOverrideSandboxGlobals` in the fastboot server?")
najax(e)},n={name:"ajax-service",initialize:function(e){e.register("ajax:node",o,{instantiate:!1}),e.inject("adapter","_ajaxRequest","ajax:node"),e.inject("adapter","fastboot","service:fastboot")}}
e.default=n}),define("shiny-components/initializers/error-handler",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t={name:"error-handler",initialize:function(e){Ember.onerror||(Ember.onerror=function(e){var t="There was an error running your app in fastboot. More info about the error: \n ".concat(e.stack||e)
Ember.Logger.error(t)})}}
e.default=t}),define("shiny-components/src/ui/components/tabs/page/styles",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={shown:"_shown_16d1j0",hidden:"_hidden_16d1j0"}}),define("shiny-components/src/ui/components/tabs/styles",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={tabbar:"_tabbar_ssx6im",active:"_active_ssx6im",tabcontainer:"_tabcontainer_ssx6im"}}),define("shiny-components/src/ui/routes/application/styles",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={github:"_github_nvb8xi"}}),define("shiny-components/src/ui/routes/patterns/component-types/high-order-components/-components/fancy-label/styles",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={fancy:"_fancy_1w5bnb"}}),define("shiny-components/src/ui/routes/patterns/component-types/high-order-components/styles",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={on:"_on_15q4kq",off:"_off_15q4kq"}}),define("shiny-components/src/ui/styles/app",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={navWidth:"225px",asideWidth:"300px"}})

//# sourceMappingURL=shiny-components-fastboot-e534441b75de83ebab1f96ed14c76ab7.map