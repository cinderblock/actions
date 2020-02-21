require('./sourcemap-register.js');module.exports=function(e,t){"use strict";var n={};function __webpack_require__(t){if(n[t]){return n[t].exports}var r=n[t]={i:t,l:false,exports:{}};e[t].call(r.exports,r,r.exports,__webpack_require__);r.l=true;return r.exports}__webpack_require__.ab=__dirname+"/";function startup(){return __webpack_require__(403)}t(__webpack_require__);return startup()}({2:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,i){function fulfilled(e){try{step(r.next(e))}catch(e){i(e)}}function rejected(e){try{step(r["throw"](e))}catch(e){i(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((r=r.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:true});const i=n(747);const o=n(9);function unlink(...e){return r(this,void 0,void 0,function*(){const[t]=e;o.debug("unlink:",t);yield i.promises.unlink(...e)})}t.unlink=unlink;function chmod(...e){return r(this,void 0,void 0,function*(){const[t,n]=e;o.debug("chmod:",t,"to",n);yield i.promises.chmod(...e)})}t.chmod=chmod;function copyFile(...e){return r(this,void 0,void 0,function*(){const[t,n]=e;o.debug("copyFile:",t,"to",n);yield i.promises.copyFile(...e)})}t.copyFile=copyFile;function mkdir(e,t){return r(this,void 0,void 0,function*(){if(typeof t!=="object"){t={mode:t}}t=Object.assign({recursive:true},t);o.debug("mkdir:",e);yield i.promises.mkdir(e,t)})}t.mkdir=mkdir;function exists(e){return r(this,void 0,void 0,function*(){return i.promises.access(e).then(()=>true,()=>false)})}t.exists=exists;function ensureFileContains(e,t){return r(this,void 0,void 0,function*(){const n=(yield i.promises.readFile(e).catch(()=>"")).toString();if(n.includes(t))return false;o.debug("Appending to file:",e,"bytes:",t.length);yield i.promises.writeFile(e,n+t);return true})}t.ensureFileContains=ensureFileContains;function ensureFileIs(e,t,n){return r(this,void 0,void 0,function*(){const r=(yield i.promises.readFile(e).catch(()=>"")).toString();if(r===t)return false;o.debug("Writing to file:",e,"bytes:",t.length);yield i.promises.writeFile(e,t,{mode:n});return true})}t.ensureFileIs=ensureFileIs;function ensureFilesAre(e){return r(this,void 0,void 0,function*(){yield Promise.all(e.map(({filename:e,contents:t})=>ensureFileIs(e,t)))})}t.ensureFilesAre=ensureFilesAre;function ensureLinkIs(e,t){return r(this,void 0,void 0,function*(){const n=yield i.promises.readlink(t).catch(e=>{if(e.code==="ENOENT")return undefined;throw e});if(e===n)return false;if(n!==undefined)yield unlink(t);o.debug("Updating symlink",t,"to point to",e);yield i.promises.symlink(e,t);return true})}t.ensureLinkIs=ensureLinkIs},9:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,i){function fulfilled(e){try{step(r.next(e))}catch(e){i(e)}}function rejected(e){try{step(r["throw"](e))}catch(e){i(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((r=r.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:true});const i=n(470);const o=n(899);const s=n(669);function input(e){return r(this,void 0,void 0,function*(){if(!o.isGitHubAction){throw new Error("Not made to work in other environments yet!")}return i.getInput(e)})}t.input=input;function debug(...e){if(o.isGitHubAction){i.debug(s.formatWithOptions({colors:true},...e));return}if(process.env.DEBUG===undefined)return;console.log(...e)}t.debug=debug;function verbosityLevel(){return r(this,void 0,void 0,function*(){const e=yield input("verbosity");const t=parseInt(e);if(!isFinite(t))throw new Error(`Invalid verbosity: ${e}.`);if(t<0)throw new RangeError(`Invalid verbosity: ${t}. 0 is minimum.`);if(t>3)throw new RangeError(`Invalid verbosity: ${t}. 3 is maximum.`);return t})}t.verbosityLevel=verbosityLevel},87:function(e){e.exports=require("os")},129:function(e){e.exports=require("child_process")},311:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});const r=n(129);const i=n(669);const o=n(9);const s="/bin/bash";function spawn(e,t,...n){const i={stdio:"inherit"};let u;if(typeof t==="string"){n.unshift(t);u=i}else{if(t===true){u=Object.assign(Object.assign({},i),{shell:s})}else{u=Object.assign(Object.assign({},i),t)}}o.debug("Spawning",e,n);const c=r.spawn(e,n,u);const a=new Promise((e,t)=>{c.on("exit",n=>{if(n){const e=new Error(`Exit code: ${n}`);e.exitCode=n;t(e)}else{e()}})});a.child=c;return a}t.spawn=spawn;const u=i.promisify(r.exec);function exec(e,t=true){o.debug("Exec:",e);if(t===null){return u(e)}if(t===true)t=s;return u(e,{shell:t})}t.exec=exec},394:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,i){function fulfilled(e){try{step(r.next(e))}catch(e){i(e)}}function rejected(e){try{step(r["throw"](e))}catch(e){i(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((r=r.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:true});const i=n(311);const o=n(9);function prepareRemoteServer(){return r(this,void 0,void 0,function*(){const e=[];const t=[];const n=yield o.verbosityLevel();if(n>2)e.push("-v");yield i.spawn("ssh",...e,"runtime-server","uptime","-p");if(n>1)t.push("--verbose");yield i.spawn("rsync",...t,"--recursive","--compress","--links","--executability",`${__dirname}/../../prepare/remote/`,"aven.json","runtime-server:");yield i.spawn("ssh",...e,"runtime-server","bash","setup.sh","--gh-actions")})}t.prepareRemoteServer=prepareRemoteServer},403:function(e,t,n){"use strict";e=n.nmd(e);var r=this&&this.__awaiter||function(e,t,n,r){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,i){function fulfilled(e){try{step(r.next(e))}catch(e){i(e)}}function rejected(e){try{step(r["throw"](e))}catch(e){i(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((r=r.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:true});const i=n(9);const o=n(394);const s=n(901);const u=n(311);const c=n(2);const a=n(684);function setupShhConfig(){return r(this,void 0,void 0,function*(){yield c.mkdir(`${process.env.HOME}/.ssh`);const e=[];const t=yield i.input("deploy-key");if(!t){throw new Error("deploy-key required! It is missing or empty.")}const n=`${process.env.HOME}/.ssh/id_rsa`;e.push(c.ensureFileIs(n,t,384));const r=(yield a.readAvenConfig()).domains[0];const o=(yield u.exec(`ssh-keyscan ${r}`)).stdout;console.log("Using host keys:");console.log(o);e.push(c.ensureFileContains(`${process.env.HOME}/.ssh/known_hosts`,o));const s=`\nHost runtime-server\n  HostName ${r}\n  Port 22\n  User root\n  CheckHostIP no\n`;e.push(c.ensureFileContains(`${process.env.HOME}/.ssh/config`,s));yield Promise.all(e)})}function copySources(){var e;return r(this,void 0,void 0,function*(){const t=yield i.input("deploy-directory");const n=yield a.readAvenConfig();const r=(e=n.serviceName,e!==null&&e!==void 0?e:n.domains[0]);yield u.spawn("rsync","--compress","--recursive","--links","--executability","--delete","--ignore-errors",t,`runtime-server:/opt/aven/${r}`)})}function copyServiceConfigs(){var e;return r(this,void 0,void 0,function*(){const t=(yield i.input("service-configs")).split(" ");const n=yield a.readAvenConfig();const r=(e=n.serviceName,e!==null&&e!==void 0?e:n.domains[0]);yield u.spawn("rsync","--recursive","--delete","--ignore-errors",...t,`runtime-server:/etc/systemd/system/${r}.service.d/`);yield u.spawn("ssh","runtime-server","systemctl","daemon-reload")})}function restartApplication(){var e;return r(this,void 0,void 0,function*(){const t=yield a.readAvenConfig();const n=(e=t.serviceName,e!==null&&e!==void 0?e:t.domains[0]);yield u.spawn("ssh","runtime-server","systemctl","stop",n);if(yield c.exists("/var/run/reboot-required")){yield u.spawn("ssh","runtime-server","reboot").catch(e=>{console.log("Error doing remote server reboot. Probably ok.");console.log(e)})}else{yield u.spawn("ssh","runtime-server","systemctl","start",n)}})}function main(){return r(this,void 0,void 0,function*(){yield setupShhConfig();yield o.prepareRemoteServer();yield copyServiceConfigs();yield copySources();yield restartApplication()})}t.main=main;if(!e.parent)main().catch(s.reportError)},431:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)if(Object.hasOwnProperty.call(e,n))t[n]=e[n];t["default"]=e;return t};Object.defineProperty(t,"__esModule",{value:true});const i=r(n(87));function issueCommand(e,t,n){const r=new Command(e,t,n);process.stdout.write(r.toString()+i.EOL)}t.issueCommand=issueCommand;function issue(e,t=""){issueCommand(e,{},t)}t.issue=issue;const o="::";class Command{constructor(e,t,n){if(!e){e="missing.command"}this.command=e;this.properties=t;this.message=n}toString(){let e=o+this.command;if(this.properties&&Object.keys(this.properties).length>0){e+=" ";let t=true;for(const n in this.properties){if(this.properties.hasOwnProperty(n)){const r=this.properties[n];if(r){if(t){t=false}else{e+=","}e+=`${n}=${escapeProperty(r)}`}}}}e+=`${o}${escapeData(this.message)}`;return e}}function escapeData(e){return(e||"").replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A")}function escapeProperty(e){return(e||"").replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A").replace(/:/g,"%3A").replace(/,/g,"%2C")}},470:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,i){function fulfilled(e){try{step(r.next(e))}catch(e){i(e)}}function rejected(e){try{step(r["throw"](e))}catch(e){i(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((r=r.apply(e,t||[])).next())})};var i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)if(Object.hasOwnProperty.call(e,n))t[n]=e[n];t["default"]=e;return t};Object.defineProperty(t,"__esModule",{value:true});const o=n(431);const s=i(n(87));const u=i(n(622));var c;(function(e){e[e["Success"]=0]="Success";e[e["Failure"]=1]="Failure"})(c=t.ExitCode||(t.ExitCode={}));function exportVariable(e,t){process.env[e]=t;o.issueCommand("set-env",{name:e},t)}t.exportVariable=exportVariable;function setSecret(e){o.issueCommand("add-mask",{},e)}t.setSecret=setSecret;function addPath(e){o.issueCommand("add-path",{},e);process.env["PATH"]=`${e}${u.delimiter}${process.env["PATH"]}`}t.addPath=addPath;function getInput(e,t){const n=process.env[`INPUT_${e.replace(/ /g,"_").toUpperCase()}`]||"";if(t&&t.required&&!n){throw new Error(`Input required and not supplied: ${e}`)}return n.trim()}t.getInput=getInput;function setOutput(e,t){o.issueCommand("set-output",{name:e},t)}t.setOutput=setOutput;function setFailed(e){process.exitCode=c.Failure;error(e)}t.setFailed=setFailed;function debug(e){o.issueCommand("debug",{},e)}t.debug=debug;function error(e){o.issue("error",e)}t.error=error;function warning(e){o.issue("warning",e)}t.warning=warning;function info(e){process.stdout.write(e+s.EOL)}t.info=info;function startGroup(e){o.issue("group",e)}t.startGroup=startGroup;function endGroup(){o.issue("endgroup")}t.endGroup=endGroup;function group(e,t){return r(this,void 0,void 0,function*(){startGroup(e);let n;try{n=yield t()}finally{endGroup()}return n})}t.group=group;function saveState(e,t){o.issueCommand("save-state",{name:e},t)}t.saveState=saveState;function getState(e){return process.env[`STATE_${e}`]||""}t.getState=getState},622:function(e){e.exports=require("path")},669:function(e){e.exports=require("util")},684:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,i){function fulfilled(e){try{step(r.next(e))}catch(e){i(e)}}function rejected(e){try{step(r["throw"](e))}catch(e){i(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((r=r.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:true});const i=n(747);const o=n(9);const{readFile:s}=i.promises;let u;function readAvenConfig(){return r(this,void 0,void 0,function*(){if(u===undefined){const e=yield s("aven.json");u=JSON.parse(e.toString());if(!u.domains){throw new Error("`domains` not defined in `aven.json`.")}if(!Array.isArray(u.domains)){throw new Error("`domains` in `aven.json` is not an Array.")}if(u.domains.length<1){throw new Error("Need at least one domain defined")}o.debug("Using aven config:",u)}return u})}t.readAvenConfig=readAvenConfig},747:function(e){e.exports=require("fs")},899:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.isGitHubAction=process.env.GITHUB_ACTIONS==="true"||process.argv.includes("--gh-actions")},901:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:true});function reportError(e){process.exitCode=1;console.log("Error in run!");console.log(e)}t.reportError=reportError}},function(e){"use strict";!function(){e.nmd=function(e){e.paths=[];if(!e.children)e.children=[];Object.defineProperty(e,"loaded",{enumerable:true,get:function(){return e.l}});Object.defineProperty(e,"id",{enumerable:true,get:function(){return e.i}});return e}}()});
//# sourceMappingURL=index.js.map