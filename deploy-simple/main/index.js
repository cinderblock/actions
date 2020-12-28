require('./sourcemap-register.js');module.exports=function(e,t){"use strict";var n={};function __webpack_require__(t){if(n[t]){return n[t].exports}var i=n[t]={i:t,l:false,exports:{}};var r=true;try{e[t].call(i.exports,i,i.exports,__webpack_require__);r=false}finally{if(r)delete n[t]}i.l=true;return i.exports}__webpack_require__.ab=__dirname+"/";function startup(){return __webpack_require__(995)}t(__webpack_require__);return startup()}({2:function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,r){function fulfilled(e){try{step(i.next(e))}catch(e){r(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){r(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:true});t.ensureLinkIs=t.ensureFilesAre=t.ensureFileIs=t.ensureFileContains=t.exists=t.mkdir=t.copyFile=t.chmod=t.chown=t.unlink=void 0;const r=n(747);const o=n(9);function unlink(...e){return i(this,void 0,void 0,function*(){const[t]=e;o.debug("unlink:",t);yield r.promises.unlink(...e)})}t.unlink=unlink;function chown(...e){return i(this,void 0,void 0,function*(){const[t,n]=e;o.debug("chown:",t,"to",n);yield r.promises.chown(...e)})}t.chown=chown;function chmod(...e){return i(this,void 0,void 0,function*(){const[t,n]=e;o.debug("chmod:",t,"to",n);yield r.promises.chmod(...e)})}t.chmod=chmod;function copyFile(...e){return i(this,void 0,void 0,function*(){const[t,n]=e;o.debug("copyFile:",t,"to",n);yield r.promises.copyFile(...e)})}t.copyFile=copyFile;function mkdir(e,t){return i(this,void 0,void 0,function*(){if(typeof t!=="object"){t={mode:t}}t=Object.assign({recursive:true},t);o.debug("mkdir:",e);yield r.promises.mkdir(e,t)})}t.mkdir=mkdir;function exists(e){return i(this,void 0,void 0,function*(){return r.promises.access(e).then(()=>true,()=>false)})}t.exists=exists;function ensureFileContains(e,t){return i(this,void 0,void 0,function*(){const n=(yield r.promises.readFile(e).catch(()=>"")).toString();if(n.includes(t))return false;o.debug("Appending to file:",e,"bytes:",t.length);yield r.promises.writeFile(e,n+t);return true})}t.ensureFileContains=ensureFileContains;function ensureFileIs(e,t,n){return i(this,void 0,void 0,function*(){const i=(yield r.promises.readFile(e).catch(()=>"")).toString();if(i===t)return false;o.debug("Writing to file:",e,"bytes:",t.length);yield r.promises.writeFile(e,t,{mode:n});return true})}t.ensureFileIs=ensureFileIs;function ensureFilesAre(e){return i(this,void 0,void 0,function*(){yield Promise.all(e.map(({filename:e,contents:t})=>ensureFileIs(e,t)))})}t.ensureFilesAre=ensureFilesAre;function ensureLinkIs(e,t){return i(this,void 0,void 0,function*(){const n=yield r.promises.readlink(t).catch(e=>{if(e.code==="ENOENT")return undefined;throw e});if(e===n)return false;if(n!==undefined)yield unlink(t);o.debug("Updating symlink",t,"to point to",e);yield r.promises.symlink(e,t);return true})}t.ensureLinkIs=ensureLinkIs},9:function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,r){function fulfilled(e){try{step(i.next(e))}catch(e){r(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){r(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:true});t.verbosityLevel=t.log=t.debug=t.input=void 0;const r=n(470);const o=n(899);const s=n(669);function input(e){return i(this,void 0,void 0,function*(){if(!o.isGitHubAction){throw new Error("Not made to work in other environments yet!")}return r.getInput(e)})}t.input=input;function debug(...e){if(o.isGitHubAction){r.debug(s.formatWithOptions({colors:true},...e));return}if(process.env.DEBUG===undefined)return;console.log(...e)}t.debug=debug;function log(e,...t){return i(this,void 0,void 0,function*(){if((yield verbosityLevel())<e)return;debug(...t)})}t.log=log;let u;function verbosityLevel(){return i(this,void 0,void 0,function*(){if(u!==undefined)return u;const e=yield input("verbosity");const t=parseInt(e);if(!isFinite(t))throw new Error(`Invalid verbosity: ${e}.`);if(t<0)throw new RangeError(`Invalid verbosity: ${t}. 0 is minimum.`);if(t>3)throw new RangeError(`Invalid verbosity: ${t}. 3 is maximum.`);u=t;return u})}t.verbosityLevel=verbosityLevel},87:function(e){e.exports=require("os")},129:function(e){e.exports=require("child_process")},311:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.exec=t.spawn=void 0;const i=n(129);const r=n(669);const o=n(9);const s="/bin/bash";function spawn(e,t,...n){const r={stdio:"inherit"};let u;if(typeof t==="string"){n.unshift(t);u=r}else{if(t===true){u=Object.assign(Object.assign({},r),{shell:s})}else{u=Object.assign(Object.assign({},r),t)}}o.debug("Spawning",e,n);const c=i.spawn(e,n,u);const d=new Promise((e,t)=>{c.on("exit",n=>{if(n){const e=new Error(`Exit code: ${n}`);e.exitCode=n;t(e)}else{e()}})});d.child=c;return d}t.spawn=spawn;const u=r.promisify(i.exec);function exec(e,t=true){o.debug("Exec:",e);if(t===null){return u(e)}if(t===true)t=s;return u(e,{shell:t})}t.exec=exec},431:function(e,t,n){"use strict";var i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)if(Object.hasOwnProperty.call(e,n))t[n]=e[n];t["default"]=e;return t};Object.defineProperty(t,"__esModule",{value:true});const r=i(n(87));function issueCommand(e,t,n){const i=new Command(e,t,n);process.stdout.write(i.toString()+r.EOL)}t.issueCommand=issueCommand;function issue(e,t=""){issueCommand(e,{},t)}t.issue=issue;const o="::";class Command{constructor(e,t,n){if(!e){e="missing.command"}this.command=e;this.properties=t;this.message=n}toString(){let e=o+this.command;if(this.properties&&Object.keys(this.properties).length>0){e+=" ";let t=true;for(const n in this.properties){if(this.properties.hasOwnProperty(n)){const i=this.properties[n];if(i){if(t){t=false}else{e+=","}e+=`${n}=${escapeProperty(i)}`}}}}e+=`${o}${escapeData(this.message)}`;return e}}function toCommandValue(e){if(e===null||e===undefined){return""}else if(typeof e==="string"||e instanceof String){return e}return JSON.stringify(e)}t.toCommandValue=toCommandValue;function escapeData(e){return toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A")}function escapeProperty(e){return toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A").replace(/:/g,"%3A").replace(/,/g,"%2C")}},470:function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,r){function fulfilled(e){try{step(i.next(e))}catch(e){r(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){r(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,t||[])).next())})};var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)if(Object.hasOwnProperty.call(e,n))t[n]=e[n];t["default"]=e;return t};Object.defineProperty(t,"__esModule",{value:true});const o=n(431);const s=r(n(87));const u=r(n(622));var c;(function(e){e[e["Success"]=0]="Success";e[e["Failure"]=1]="Failure"})(c=t.ExitCode||(t.ExitCode={}));function exportVariable(e,t){const n=o.toCommandValue(t);process.env[e]=n;o.issueCommand("set-env",{name:e},n)}t.exportVariable=exportVariable;function setSecret(e){o.issueCommand("add-mask",{},e)}t.setSecret=setSecret;function addPath(e){o.issueCommand("add-path",{},e);process.env["PATH"]=`${e}${u.delimiter}${process.env["PATH"]}`}t.addPath=addPath;function getInput(e,t){const n=process.env[`INPUT_${e.replace(/ /g,"_").toUpperCase()}`]||"";if(t&&t.required&&!n){throw new Error(`Input required and not supplied: ${e}`)}return n.trim()}t.getInput=getInput;function setOutput(e,t){o.issueCommand("set-output",{name:e},t)}t.setOutput=setOutput;function setCommandEcho(e){o.issue("echo",e?"on":"off")}t.setCommandEcho=setCommandEcho;function setFailed(e){process.exitCode=c.Failure;error(e)}t.setFailed=setFailed;function isDebug(){return process.env["RUNNER_DEBUG"]==="1"}t.isDebug=isDebug;function debug(e){o.issueCommand("debug",{},e)}t.debug=debug;function error(e){o.issue("error",e instanceof Error?e.toString():e)}t.error=error;function warning(e){o.issue("warning",e instanceof Error?e.toString():e)}t.warning=warning;function info(e){process.stdout.write(e+s.EOL)}t.info=info;function startGroup(e){o.issue("group",e)}t.startGroup=startGroup;function endGroup(){o.issue("endgroup")}t.endGroup=endGroup;function group(e,t){return i(this,void 0,void 0,function*(){startGroup(e);let n;try{n=yield t()}finally{endGroup()}return n})}t.group=group;function saveState(e,t){o.issueCommand("save-state",{name:e},t)}t.saveState=saveState;function getState(e){return process.env[`STATE_${e}`]||""}t.getState=getState},622:function(e){e.exports=require("path")},669:function(e){e.exports=require("util")},747:function(e){e.exports=require("fs")},899:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.isGitHubAction=void 0;t.isGitHubAction=process.env.GITHUB_ACTIONS==="true"||process.argv.includes("--gh-actions")},901:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.reportError=void 0;function reportError(e){process.exitCode=1;console.log("Error in run!");console.log(e)}t.reportError=reportError},995:function(e,t,n){"use strict";e=n.nmd(e);var i=this&&this.__awaiter||function(e,t,n,i){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,r){function fulfilled(e){try{step(i.next(e))}catch(e){r(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){r(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:true});t.main=void 0;const r=n(9);const o=n(901);const s=n(311);const u=n(2);function setupShhConfig(){return i(this,void 0,void 0,function*(){yield u.mkdir(`${process.env.HOME}/.ssh`);const e=[];const t=yield r.input("deploy-key");if(!t){throw new Error("deploy-key required! It is missing or empty.")}const n=`${process.env.HOME}/.ssh/id_rsa`;e.push(u.ensureFileIs(n,t.trim()+"\n",384));const i=yield r.input("runtime-host-hostname");const o=yield r.input("runtime-host-user");const s=(yield r.input("runtime-host-port"))||"22";const c=yield r.input("runtime-host-keys");if(c){yield r.log(0,"Adding host keys:");yield r.log(0,c);e.push(u.ensureFileContains(`${process.env.HOME}/.ssh/known_hosts`,c))}const d=`Host runtime-server\n  HostName ${i}\n  Port ${s}\n  User ${o}\n  CheckHostIP no\n  StrictHostKeyChecking accept-new\n`;e.push(u.ensureFileContains(`${process.env.HOME}/.ssh/config`,d));yield Promise.all(e)})}function copySources(){return i(this,void 0,void 0,function*(){const e=yield r.input("deploy-directory");const t=yield r.input("runtime-host-directory");yield r.log(3,"spawning rsync");yield s.spawn("rsync","--compress","--recursive","--links","--executability","--delete","--ignore-errors",e,`runtime-server:${t}`).then(e=>r.log(3,"rsync success",e),e=>r.log(0,"rsync error",e))})}function serverCtl(e){return i(this,void 0,void 0,function*(){const t=yield r.input("systemd-service");if(!t)throw new Error("systemd-service unset");switch(e){case"stop":yield r.log(2,"Stopping service",t);break;case"start":yield r.log(2,"Starting service",t);break}yield s.spawn("ssh","runtime-server","sudo","systemctl",e,t);switch(e){case"stop":yield r.log(3,"Service stopped");break;case"start":yield r.log(3,"Service started");break}})}function restartService(e){return i(this,void 0,void 0,function*(){yield serverCtl("stop");if(e)yield e();yield serverCtl("start");yield r.log(3,"Service started")})}function main(){return i(this,void 0,void 0,function*(){yield setupShhConfig();yield r.log(2,"setupShhConfig() done");yield restartService(copySources)})}t.main=main;if(!e.parent)main().catch(o.reportError)}},function(e){"use strict";!function(){e.nmd=function(e){e.paths=[];if(!e.children)e.children=[];Object.defineProperty(e,"loaded",{enumerable:true,get:function(){return e.l}});Object.defineProperty(e,"id",{enumerable:true,get:function(){return e.i}});return e}}()});
//# sourceMappingURL=index.js.map