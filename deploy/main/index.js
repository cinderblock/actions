require('./sourcemap-register.js');module.exports=function(e,t){"use strict";var n={};function __webpack_require__(t){if(n[t]){return n[t].exports}var i=n[t]={i:t,l:false,exports:{}};e[t].call(i.exports,i,i.exports,__webpack_require__);i.l=true;return i.exports}__webpack_require__.ab=__dirname+"/";function startup(){return __webpack_require__(403)}t(__webpack_require__);return startup()}({2:function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,r){function fulfilled(e){try{step(i.next(e))}catch(e){r(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){r(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:true});const r=n(747);const o=n(9);function unlink(...e){return i(this,void 0,void 0,function*(){const[t]=e;o.debug("unlink:",t);yield r.promises.unlink(...e)})}t.unlink=unlink;function chown(...e){return i(this,void 0,void 0,function*(){const[t,n]=e;o.debug("chown:",t,"to",n);yield r.promises.chown(...e)})}t.chown=chown;function chmod(...e){return i(this,void 0,void 0,function*(){const[t,n]=e;o.debug("chmod:",t,"to",n);yield r.promises.chmod(...e)})}t.chmod=chmod;function copyFile(...e){return i(this,void 0,void 0,function*(){const[t,n]=e;o.debug("copyFile:",t,"to",n);yield r.promises.copyFile(...e)})}t.copyFile=copyFile;function mkdir(e,t){return i(this,void 0,void 0,function*(){if(typeof t!=="object"){t={mode:t}}t=Object.assign({recursive:true},t);o.debug("mkdir:",e);yield r.promises.mkdir(e,t)})}t.mkdir=mkdir;function exists(e){return i(this,void 0,void 0,function*(){return r.promises.access(e).then(()=>true,()=>false)})}t.exists=exists;function ensureFileContains(e,t){return i(this,void 0,void 0,function*(){const n=(yield r.promises.readFile(e).catch(()=>"")).toString();if(n.includes(t))return false;o.debug("Appending to file:",e,"bytes:",t.length);yield r.promises.writeFile(e,n+t);return true})}t.ensureFileContains=ensureFileContains;function ensureFileIs(e,t,n){return i(this,void 0,void 0,function*(){const i=(yield r.promises.readFile(e).catch(()=>"")).toString();if(i===t)return false;o.debug("Writing to file:",e,"bytes:",t.length);yield r.promises.writeFile(e,t,{mode:n});return true})}t.ensureFileIs=ensureFileIs;function ensureFilesAre(e){return i(this,void 0,void 0,function*(){yield Promise.all(e.map(({filename:e,contents:t})=>ensureFileIs(e,t)))})}t.ensureFilesAre=ensureFilesAre;function ensureLinkIs(e,t){return i(this,void 0,void 0,function*(){const n=yield r.promises.readlink(t).catch(e=>{if(e.code==="ENOENT")return undefined;throw e});if(e===n)return false;if(n!==undefined)yield unlink(t);o.debug("Updating symlink",t,"to point to",e);yield r.promises.symlink(e,t);return true})}t.ensureLinkIs=ensureLinkIs},9:function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,r){function fulfilled(e){try{step(i.next(e))}catch(e){r(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){r(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:true});const r=n(470);const o=n(899);const s=n(669);function input(e){return i(this,void 0,void 0,function*(){if(!o.isGitHubAction){throw new Error("Not made to work in other environments yet!")}return r.getInput(e)})}t.input=input;function debug(...e){if(o.isGitHubAction){r.debug(s.formatWithOptions({colors:true},...e));return}if(process.env.DEBUG===undefined)return;console.log(...e)}t.debug=debug;function verbosityLevel(){return i(this,void 0,void 0,function*(){const e=yield input("verbosity");const t=parseInt(e);if(!isFinite(t))throw new Error(`Invalid verbosity: ${e}.`);if(t<0)throw new RangeError(`Invalid verbosity: ${t}. 0 is minimum.`);if(t>3)throw new RangeError(`Invalid verbosity: ${t}. 3 is maximum.`);return t})}t.verbosityLevel=verbosityLevel},27:function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,r){function fulfilled(e){try{step(i.next(e))}catch(e){r(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){r(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:true});const r=n(9);function getDomains(){return i(this,void 0,void 0,function*(){const e=yield r.input("domains");if(!e)return;const t=e.split(/\s/).filter(e=>e);if(!t.length){throw new Error("`domains` not defined.")}return t})}t.getDomains=getDomains},87:function(e){e.exports=require("os")},129:function(e){e.exports=require("child_process")},137:function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,r){function fulfilled(e){try{step(i.next(e))}catch(e){r(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){r(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:true});const r=n(9);const o=n(27);function getRuntimeHost(){return i(this,void 0,void 0,function*(){const e=yield r.input("runtime-host-hostname");if(e)return e;const t=yield o.getDomains();if(!t||!t[0])throw new Error("Domains needed if runtime-host-hostname is unset!");return t[0]})}t.getRuntimeHost=getRuntimeHost},211:function(e){e.exports=require("https")},311:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});const i=n(129);const r=n(669);const o=n(9);const s="/bin/bash";function spawn(e,t,...n){const r={stdio:"inherit"};let u;if(typeof t==="string"){n.unshift(t);u=r}else{if(t===true){u=Object.assign(Object.assign({},r),{shell:s})}else{u=Object.assign(Object.assign({},r),t)}}o.debug("Spawning",e,n);const c=i.spawn(e,n,u);const d=new Promise((e,t)=>{c.on("exit",n=>{if(n){const e=new Error(`Exit code: ${n}`);e.exitCode=n;t(e)}else{e()}})});d.child=c;return d}t.spawn=spawn;const u=r.promisify(i.exec);function exec(e,t=true){o.debug("Exec:",e);if(t===null){return u(e)}if(t===true)t=s;return u(e,{shell:t})}t.exec=exec},394:function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,r){function fulfilled(e){try{step(i.next(e))}catch(e){r(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){r(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,t||[])).next())})};var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:true});const o=n(311);const s=n(9);const u=n(27);const c=n(471);const d=n(444);const a=r(n(551));const l=n(2);function getAuthorizedDeployKey(){return i(this,void 0,void 0,function*(){const e=`${process.env.HOME}/.ssh/id_rsa`;return(yield o.exec(`ssh-keygen -y -f ${e}`)).stdout.trim()})}function getAuthorizedDeployKeyNew(){return i(this,void 0,void 0,function*(){const e=`${process.env.HOME}/.ssh/id_rsa.2`;if(!(yield l.exists(e)))return;return(yield o.exec(`ssh-keygen -y -f ${e}`)).stdout.trim()})}function getConfig(){return i(this,void 0,void 0,function*(){const e={};e.domains=yield u.getDomains();e.authorizedKeys=[yield getAuthorizedDeployKey()];const t=yield getAuthorizedDeployKeyNew();if(t)e.authorizedKeys.push(t);const n=(yield s.input("extra-keys")).split("\n").map(e=>i(this,void 0,void 0,function*(){if(e.match(a.default))e=`https://github.com/${e}.keys`;if(e.match(/^https:\/\//))return(yield d.request(e)).split("\n");return[e]}));for(const t of yield Promise.all(n)){e.authorizedKeys.push(...t.filter(e=>e))}e.service={name:yield c.getServiceName(),enable:(yield s.input("disable-service"))!=="yes",description:yield s.input("service-description"),startServerCommand:yield s.input("start-server-command"),extraConfigs:yield s.input("service-configs")};e.webRootPath=yield s.input("static-web-root");e.runtimeServerTimezone=yield s.input("runtime-server-timezone");e.aptDependencies=(yield s.input("apt-dependencies")).split(/\s/).filter(e=>e);e.runtimeAptDependencies=(yield s.input("runtime-apt-dependencies")).split(/\s/).filter(e=>e);const r={kibanaHost:yield s.input("kibana-host"),elastic:{hosts:(yield s.input("elastic-hosts")).split(/\s/).filter(e=>e),username:yield s.input("elastic-username"),password:yield s.input("elastic-password")},logstashHosts:(yield s.input("logstash-hosts")).split(/\s/).filter(e=>e)};if(r.kibanaHost||r.elastic.hosts.length||r.logstashHosts.length){e.journalbeat=r}yield s.input("verbosity");return e})}function prepareRemoteServer(){return i(this,void 0,void 0,function*(){const e=[];const t=[];const n=yield s.verbosityLevel();if(n>2)e.push("-v");if(n>1)t.push("--verbose");yield o.spawn("ssh",...e,"runtime-server","uptime","-p");yield o.spawn("rsync",...t,"--recursive","--compress","--links","--executability",`${__dirname}/../../prepare/remote/`,"runtime-server:");const i=o.spawn("ssh",{stdio:["pipe","inherit","inherit"]},...e,"runtime-server","bash","setup.sh","--gh-actions");if(!i.child.stdin)throw new Error("missing stdin???");i.child.stdin.end(JSON.stringify(yield getConfig()));yield i})}t.prepareRemoteServer=prepareRemoteServer},403:function(e,t,n){"use strict";e=n.nmd(e);var i=this&&this.__awaiter||function(e,t,n,i){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,r){function fulfilled(e){try{step(i.next(e))}catch(e){r(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){r(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:true});const r=n(9);const o=n(394);const s=n(901);const u=n(311);const c=n(2);const d=n(137);const a=n(471);function setupShhConfig(){return i(this,void 0,void 0,function*(){yield c.mkdir(`${process.env.HOME}/.ssh`);const e=[];const t=yield r.input("deploy-key");const n=yield r.input("deploy-key-new");const i=t||n;if(!i){throw new Error("deploy-key required! It is missing or empty.")}const o=`${process.env.HOME}/.ssh/id_rsa`;const s=`${process.env.HOME}/.ssh/id_rsa.2`;e.push(c.ensureFileIs(o,i,384));if(t&&n){e.push(c.ensureFileIs(s,n,384))}const u=yield d.getRuntimeHost();const a=(yield r.input("runtime-host-port"))||"22";const l=yield r.input("runtime-host-keys");if(l){console.log("Adding host keys:");console.log(l);e.push(c.ensureFileContains(`${process.env.HOME}/.ssh/known_hosts`,l))}const f=`\nHost runtime-server\n  HostName ${u}\n  Port ${a}\n  User root\n  CheckHostIP no\n  StrictHostKeyChecking no\n`;e.push(c.ensureFileContains(`${process.env.HOME}/.ssh/config`,f));yield Promise.all(e)})}function copySources(){return i(this,void 0,void 0,function*(){const e=yield r.input("deploy-directory");yield u.spawn("rsync","--compress","--recursive","--links","--executability","--delete","--ignore-errors",e,`runtime-server:/opt/aven/${yield a.getServiceName()}`)})}function copyServiceConfigs(){return i(this,void 0,void 0,function*(){const e=yield r.input("service-config-files");if(!e)return;const t=e.split(" ");yield u.spawn("rsync","--recursive","--delete","--ignore-errors",...t,`runtime-server:/etc/systemd/system/${yield a.getServiceName()}.service.d/`);yield u.spawn("ssh","runtime-server","systemctl","daemon-reload")})}function restartApplication(){return i(this,void 0,void 0,function*(){const e=yield a.getServiceName();if((yield r.input("disable-service"))!=="yes")yield u.spawn("ssh","runtime-server","systemctl","stop",e);if(yield u.exec("ssh ls /var/run/reboot-required").then(()=>true,()=>false)){yield u.spawn("ssh","runtime-server","reboot").catch(e=>{console.log("Error doing remote server reboot. Probably ok.");console.log(e)})}else{if((yield r.input("disable-service"))!=="yes")yield u.spawn("ssh","runtime-server","systemctl","start",e)}})}function main(){return i(this,void 0,void 0,function*(){yield setupShhConfig();yield o.prepareRemoteServer();yield copyServiceConfigs();yield copySources();yield restartApplication()})}t.main=main;if(!e.parent)main().catch(s.reportError)},431:function(e,t,n){"use strict";var i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)if(Object.hasOwnProperty.call(e,n))t[n]=e[n];t["default"]=e;return t};Object.defineProperty(t,"__esModule",{value:true});const r=i(n(87));function issueCommand(e,t,n){const i=new Command(e,t,n);process.stdout.write(i.toString()+r.EOL)}t.issueCommand=issueCommand;function issue(e,t=""){issueCommand(e,{},t)}t.issue=issue;const o="::";class Command{constructor(e,t,n){if(!e){e="missing.command"}this.command=e;this.properties=t;this.message=n}toString(){let e=o+this.command;if(this.properties&&Object.keys(this.properties).length>0){e+=" ";let t=true;for(const n in this.properties){if(this.properties.hasOwnProperty(n)){const i=this.properties[n];if(i){if(t){t=false}else{e+=","}e+=`${n}=${escapeProperty(i)}`}}}}e+=`${o}${escapeData(this.message)}`;return e}}function escapeData(e){return(e||"").replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A")}function escapeProperty(e){return(e||"").replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A").replace(/:/g,"%3A").replace(/,/g,"%2C")}},444:function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,r){function fulfilled(e){try{step(i.next(e))}catch(e){r(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){r(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:true});const r=n(211);const o=n(9);function request(e){return i(this,void 0,void 0,function*(){o.debug("Request:",e);return new Promise((t,n)=>i(this,void 0,void 0,function*(){let i="";const o=r.get(e,e=>{e.on("data",e=>{i+=e});e.on("end",()=>{t(i);o.end()})});o.on("error",n)}))})}t.request=request},470:function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,r){function fulfilled(e){try{step(i.next(e))}catch(e){r(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){r(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,t||[])).next())})};var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)if(Object.hasOwnProperty.call(e,n))t[n]=e[n];t["default"]=e;return t};Object.defineProperty(t,"__esModule",{value:true});const o=n(431);const s=r(n(87));const u=r(n(622));var c;(function(e){e[e["Success"]=0]="Success";e[e["Failure"]=1]="Failure"})(c=t.ExitCode||(t.ExitCode={}));function exportVariable(e,t){process.env[e]=t;o.issueCommand("set-env",{name:e},t)}t.exportVariable=exportVariable;function setSecret(e){o.issueCommand("add-mask",{},e)}t.setSecret=setSecret;function addPath(e){o.issueCommand("add-path",{},e);process.env["PATH"]=`${e}${u.delimiter}${process.env["PATH"]}`}t.addPath=addPath;function getInput(e,t){const n=process.env[`INPUT_${e.replace(/ /g,"_").toUpperCase()}`]||"";if(t&&t.required&&!n){throw new Error(`Input required and not supplied: ${e}`)}return n.trim()}t.getInput=getInput;function setOutput(e,t){o.issueCommand("set-output",{name:e},t)}t.setOutput=setOutput;function setFailed(e){process.exitCode=c.Failure;error(e)}t.setFailed=setFailed;function debug(e){o.issueCommand("debug",{},e)}t.debug=debug;function error(e){o.issue("error",e)}t.error=error;function warning(e){o.issue("warning",e)}t.warning=warning;function info(e){process.stdout.write(e+s.EOL)}t.info=info;function startGroup(e){o.issue("group",e)}t.startGroup=startGroup;function endGroup(){o.issue("endgroup")}t.endGroup=endGroup;function group(e,t){return i(this,void 0,void 0,function*(){startGroup(e);let n;try{n=yield t()}finally{endGroup()}return n})}t.group=group;function saveState(e,t){o.issueCommand("save-state",{name:e},t)}t.saveState=saveState;function getState(e){return process.env[`STATE_${e}`]||""}t.getState=getState},471:function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,r){function fulfilled(e){try{step(i.next(e))}catch(e){r(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){r(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:true});const r=n(9);const o=n(27);function getServiceName(){return i(this,void 0,void 0,function*(){const e=yield r.input("service-name");if(e)return e;const t=yield o.getDomains();if(!t||!t[0])throw new Error("Domains needed if service-name is unset!");return t[0]})}t.getServiceName=getServiceName},551:function(e){var t=/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;e.exports=t},622:function(e){e.exports=require("path")},669:function(e){e.exports=require("util")},747:function(e){e.exports=require("fs")},899:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.isGitHubAction=process.env.GITHUB_ACTIONS==="true"||process.argv.includes("--gh-actions")},901:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:true});function reportError(e){process.exitCode=1;console.log("Error in run!");console.log(e)}t.reportError=reportError}},function(e){"use strict";!function(){e.nmd=function(e){e.paths=[];if(!e.children)e.children=[];Object.defineProperty(e,"loaded",{enumerable:true,get:function(){return e.l}});Object.defineProperty(e,"id",{enumerable:true,get:function(){return e.i}});return e}}()});
//# sourceMappingURL=index.js.map