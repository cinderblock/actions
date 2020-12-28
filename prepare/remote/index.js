require('./sourcemap-register.js');module.exports=function(e,t){"use strict";var n={};function __webpack_require__(t){if(n[t]){return n[t].exports}var i=n[t]={i:t,l:false,exports:{}};var o=true;try{e[t].call(i.exports,i,i.exports,__webpack_require__);o=false}finally{if(o)delete n[t]}i.l=true;return i.exports}__webpack_require__.ab=__dirname+"/";function startup(){return __webpack_require__(96)}t(__webpack_require__);return startup()}({0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.readConfig=void 0;const i=n(9);let o;let r;const s=new Promise((e,t)=>{o=e;r=t});let c="";process.stdin.on("data",e=>{c+=e});const u=setTimeout(()=>{r(new Error("Timeout reading json input"))},1e3);process.stdin.on("end",()=>{clearTimeout(u);const e=JSON.parse(c);i.debug("Using config:",e);o(e)});function readConfig(){return s}t.readConfig=readConfig},2:function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,o){function fulfilled(e){try{step(i.next(e))}catch(e){o(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){o(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:true});t.ensureLinkIs=t.ensureFilesAre=t.ensureFileIs=t.ensureFileContains=t.exists=t.mkdir=t.copyFile=t.chmod=t.chown=t.unlink=void 0;const o=n(747);const r=n(9);function unlink(...e){return i(this,void 0,void 0,function*(){const[t]=e;r.debug("unlink:",t);yield o.promises.unlink(...e)})}t.unlink=unlink;function chown(...e){return i(this,void 0,void 0,function*(){const[t,n]=e;r.debug("chown:",t,"to",n);yield o.promises.chown(...e)})}t.chown=chown;function chmod(...e){return i(this,void 0,void 0,function*(){const[t,n]=e;r.debug("chmod:",t,"to",n);yield o.promises.chmod(...e)})}t.chmod=chmod;function copyFile(...e){return i(this,void 0,void 0,function*(){const[t,n]=e;r.debug("copyFile:",t,"to",n);yield o.promises.copyFile(...e)})}t.copyFile=copyFile;function mkdir(e,t){return i(this,void 0,void 0,function*(){if(typeof t!=="object"){t={mode:t}}t=Object.assign({recursive:true},t);r.debug("mkdir:",e);yield o.promises.mkdir(e,t)})}t.mkdir=mkdir;function exists(e){return i(this,void 0,void 0,function*(){return o.promises.access(e).then(()=>true,()=>false)})}t.exists=exists;function ensureFileContains(e,t){return i(this,void 0,void 0,function*(){const n=(yield o.promises.readFile(e).catch(()=>"")).toString();if(n.includes(t))return false;r.debug("Appending to file:",e,"bytes:",t.length);yield o.promises.writeFile(e,n+t);return true})}t.ensureFileContains=ensureFileContains;function ensureFileIs(e,t,n){return i(this,void 0,void 0,function*(){const i=(yield o.promises.readFile(e).catch(()=>"")).toString();if(i===t)return false;r.debug("Writing to file:",e,"bytes:",t.length);yield o.promises.writeFile(e,t,{mode:n});return true})}t.ensureFileIs=ensureFileIs;function ensureFilesAre(e){return i(this,void 0,void 0,function*(){yield Promise.all(e.map(({filename:e,contents:t})=>ensureFileIs(e,t)))})}t.ensureFilesAre=ensureFilesAre;function ensureLinkIs(e,t){return i(this,void 0,void 0,function*(){const n=yield o.promises.readlink(t).catch(e=>{if(e.code==="ENOENT")return undefined;throw e});if(e===n)return false;if(n!==undefined)yield unlink(t);r.debug("Updating symlink",t,"to point to",e);yield o.promises.symlink(e,t);return true})}t.ensureLinkIs=ensureLinkIs},9:function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,o){function fulfilled(e){try{step(i.next(e))}catch(e){o(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){o(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:true});t.verbosityLevel=t.log=t.debug=t.input=void 0;const o=n(470);const r=n(899);const s=n(669);function input(e){return i(this,void 0,void 0,function*(){if(!r.isGitHubAction){throw new Error("Not made to work in other environments yet!")}return o.getInput(e)})}t.input=input;function debug(...e){if(r.isGitHubAction){o.debug(s.formatWithOptions({colors:true},...e));return}if(process.env.DEBUG===undefined)return;console.log(...e)}t.debug=debug;function log(e,...t){return i(this,void 0,void 0,function*(){if((yield verbosityLevel())<e)return;debug(...t)})}t.log=log;let c;function verbosityLevel(){return i(this,void 0,void 0,function*(){if(c!==undefined)return c;const e=yield input("verbosity");const t=parseInt(e);if(!isFinite(t))throw new Error(`Invalid verbosity: ${e}.`);if(t<0)throw new RangeError(`Invalid verbosity: ${t}. 0 is minimum.`);if(t>3)throw new RangeError(`Invalid verbosity: ${t}. 3 is maximum.`);c=t;return c})}t.verbosityLevel=verbosityLevel},16:function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,o){function fulfilled(e){try{step(i.next(e))}catch(e){o(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){o(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:true});t.setupNetdata=void 0;const o=n(311);function setupNetdata(){return i(this,void 0,void 0,function*(){const e="https://my-netdata.io/kickstart-static64.sh";yield o.exec(`bash <(curl -Ss "${e}") --dont-wait`)})}t.setupNetdata=setupNetdata},37:function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,o){function fulfilled(e){try{step(i.next(e))}catch(e){o(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){o(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:true});t.setupTimezone=void 0;const o=n(2);const r=n(0);function setupTimezone(){return i(this,void 0,void 0,function*(){const{runtimeServerTimezone:e}=yield r.readConfig();if(!e)return;console.log("Setting timezone to:",e);const t="/etc/localtime";const n=`/usr/share/zoneinfo/${e}`;yield o.ensureLinkIs(n,t)})}t.setupTimezone=setupTimezone},42:function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,o){function fulfilled(e){try{step(i.next(e))}catch(e){o(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){o(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:true});t.setupNginx=void 0;const o=n(2);const r=n(311);const s=n(285);const c=n(0);const u=n(9);s.addAptDependencies("nginx","certbot","ssl-cert");const a="/var/lib/letsencrypt/webroot";const l="/etc/letsencrypt/live";const d=`user www-data;\nworker_processes auto;\npid /run/nginx.pid;\n\ninclude modules-enabled/*.conf;\n\nevents {\n    worker_connections 768;\n    # multi_accept on;\n}\n\nhttp {\n    include conf.d/*.conf;\n}\n`;function setupNginxSnips(){return i(this,void 0,void 0,function*(){const e="/etc/nginx/snips";yield o.mkdir(e);const t={};t["force-main-https"]=`location / {\n    return 301 https://$server_name$request_uri;\n    #rewrite ^ https://$server_name$request_uri? permanent;\n}\n`;t.letsencrypt=`location ^~ /.well-known/acme-challenge/ {\n    default_type "text/plain";\n    root ${a};\n}\n\nlocation = /.well-known/acme-challenge/ {\n    return 404;\n}\n`;t["proxy-forwarded-headers"]=`proxy_set_header Host $host;\nproxy_set_header Forwarded $proxy_add_forwarded;\n`;t["proxy-headers"]=`proxy_set_header Host $host;\n#proxy_set_header Port $server_port;\n#proxy_set_header X-Forwarded-Port $server_port;\nproxy_set_header X-Real-IP $remote_addr;\nproxy_set_header X-Forwarded-Proto $scheme;\n#proxy_set_header X-Forwarded-Ssl $https;\nproxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n#proxy_set_header X-Frame-Options SAMEORIGIN;\n`;t["trust-cloudflare-ip"]=`set_real_ip_from 103.21.244.0/22;\nset_real_ip_from 103.22.200.0/22;\nset_real_ip_from 103.31.4.0/22;\nset_real_ip_from 104.16.0.0/12;\nset_real_ip_from 108.162.192.0/18;\nset_real_ip_from 131.0.72.0/22;\nset_real_ip_from 141.101.64.0/18;\nset_real_ip_from 162.158.0.0/15;\nset_real_ip_from 172.64.0.0/13;\nset_real_ip_from 173.245.48.0/20;\nset_real_ip_from 188.114.96.0/20;\nset_real_ip_from 190.93.240.0/20;\nset_real_ip_from 197.234.240.0/22;\nset_real_ip_from 198.41.128.0/17;\nset_real_ip_from 2400:cb00::/32;\nset_real_ip_from 2606:4700::/32;\nset_real_ip_from 2803:f800::/32;\nset_real_ip_from 2405:b500::/32;\nset_real_ip_from 2405:8100::/32;\nset_real_ip_from 2c0f:f248::/32;\nset_real_ip_from 2a06:98c0::/29;\n\n# use any of the following two\nreal_ip_header CF-Connecting-IP;\n#real_ip_header X-Forwarded-For;\n`;t["websockets-proxy-headers"]=`proxy_http_version 1.1;\nproxy_set_header Upgrade $http_upgrade;\nproxy_set_header Connection $connection_upgrade;\n`;yield Promise.all([o.ensureLinkIs("../snippets/fastcgi-php.conf",`${e}/fastcgi-php.conf`),o.ensureFilesAre(Object.entries(t).map(([t,n])=>({filename:`${e}/${t}.conf`,contents:n})))])})}function setupNginxConfigs(){return i(this,void 0,void 0,function*(){const e="/etc/nginx/conf.d";const{domains:t}=yield c.readConfig();if(!t)throw new Error("Domains unset!");const n={public:"/etc/ssl/certs/ssl-cert-snakeoil.pem",private:"/etc/ssl/private/ssl-cert-snakeoil.key"};yield o.exists(`${l}/${t[0]}/fullchain.pem`).then(e=>{if(e){n.public=`${l}/${t[0]}/fullchain.pem`;n.private=`${l}/${t[0]}/privkey.pem`}});const i={};i.basic=`sendfile on;\ntcp_nopush on;\ntcp_nodelay on;\nkeepalive_timeout 65;\ntypes_hash_max_size 2048;\n# server_tokens off;\n\n# server_names_hash_bucket_size 64;\n# server_name_in_redirect off;\n\ninclude /etc/nginx/mime.types;\ndefault_type application/octet-stream;\n`;i.gzip=`gzip on;\ngzip_disable "msie6";\n\n# gzip_vary on;\n# gzip_proxied any;\n# gzip_comp_level 6;\n# gzip_buffers 16 8k;\n# gzip_http_version 1.1;\n# gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;\n`;i["http-upgrade"]=`map $http_upgrade $connection_upgrade {\n    default upgrade;\n    ''      close;\n}\n`;i.logging=`access_log /var/log/nginx/access.log;\nerror_log /var/log/nginx/error.log;\n`;const r='"~^(,[ \\\\t]*)*([!#$%&\'*+.^_`|~0-9A-Za-z-]+=([!#$%&\'*+.^_`|~0-9A-Za-z-]+|\\"([\\\\t \\\\x21\\\\x23-\\\\x5B\\\\x5D-\\\\x7E\\\\x80-\\\\xFF]|\\\\\\\\[\\\\t \\\\x21-\\\\x7E\\\\x80-\\\\xFF])*\\"))?(;([!#$%&\'*+.^_`|~0-9A-Za-z-]+=([!#$%&\'*+.^_`|~0-9A-Za-z-]+|\\"([\\\\t \\\\x21\\\\x23-\\\\x5B\\\\x5D-\\\\x7E\\\\x80-\\\\xFF]|\\\\\\\\[\\\\t \\\\x21-\\\\x7E\\\\x80-\\\\xFF])*\\"))?)*([ \\\\t]*,([ \\\\t]*([!#$%&\'*+.^_`|~0-9A-Za-z-]+=([!#$%&\'*+.^_`|~0-9A-Za-z-]+|\\"([\\\\t \\\\x21\\\\x23-\\\\x5B\\\\x5D-\\\\x7E\\\\x80-\\\\xFF]|\\\\\\\\[\\\\t \\\\x21-\\\\x7E\\\\x80-\\\\xFF])*\\"))?(;([!#$%&\'*+.^_`|~0-9A-Za-z-]+=([!#$%&\'*+.^_`|~0-9A-Za-z-]+|\\"([\\\\t \\\\x21\\\\x23-\\\\x5B\\\\x5D-\\\\x7E\\\\x80-\\\\xFF]|\\\\\\\\[\\\\t \\\\x21-\\\\x7E\\\\x80-\\\\xFF])*\\"))?)*)?)*$"\n';i["proxy-add-forwarded"]=`map $remote_addr $proxy_forwarded_elem {\n    # IPv4 addresses can be sent as-is\n    ~^[0-9.]+$          "for=$remote_addr";\n\n    # IPv6 addresses need to be bracketed and quoted\n    ~^[0-9A-Fa-f:.]+$   "for=\\"[$remote_addr]\\"";\n\n    # Unix domain socket names cannot be represented in RFC 7239 syntax\n    default             "for=unknown";\n}\n\nmap $http_forwarded $proxy_add_forwarded {\n    # If the incoming Forwarded header is syntactically valid, append to it\n    ${r} "$http_forwarded, $proxy_forwarded_elem";\n\n    # Otherwise, replace it\n    default "$proxy_forwarded_elem";\n}\n`;i.servers=`include servers/*.conf;\n`;i.ssl=`##\n# SSL Settings\n##\n\n# Default keys. Overridden in server configs.\nssl_certificate     ${n.public};\nssl_certificate_key ${n.private};\n\n\nssl_protocols TLSv1 TLSv1.1 TLSv1.2; # Dropping SSLv3, ref: POODLE\nssl_prefer_server_ciphers on;\n`;yield o.mkdir(e).then(()=>o.ensureFilesAre(Object.entries(i).map(([t,n])=>({filename:`${e}/${t}.conf`,contents:n}))))})}function setupNginxBasicServers(){return i(this,void 0,void 0,function*(){const e="/etc/nginx/servers";yield o.mkdir(e);const t=`server {\n      listen 80;\n      listen [::]:80;\n      listen 443 ssl;\n      listen [::]:443 ssl;\n  \n      include snips/letsencrypt.conf;\n  \n      location / {\n          default_type text/plain;\n          return 200 'Nothing to see here...';\n      }\n  }\n  `;yield o.ensureFileIs(`${e}/00_default.conf`,t)})}function setupNginxServersFull(){return i(this,void 0,void 0,function*(){const{webRootPath:e,domains:t,service:{name:n}}=yield c.readConfig();if(!t)throw new Error("Domains unset!");if(e)yield o.mkdir(e);const i=t[0].replace(".","_");const r="sock";const s=`/run/${n}`;const u=`unix:${s}/${r}`;const a=`server {\n    server_name ${t.join(" ")};\n    listen 80 default_server;\n    listen [::]:80 default_server;\n\n    include snips/letsencrypt.conf;\n    include snips/force-main-https.conf;\n}\n\nserver {\n    server_name ${t.join(" ")};\n    listen 443 ssl default_server;\n    listen [::]:443 ssl default_server;\n\n    ssl_certificate     ${l}/${t[0]}/fullchain.pem;\n    ssl_certificate_key ${l}/${t[0]}/privkey.pem;\n\n    include snips/trust-cloudflare-ip.conf;\n\n    location / ${!e?"":`{\n      root ${e};\n      # If files exist in root, serve them. Otherwise fallback to proxy.\n      try_files $uri $uri/index.html @proxyHandler;\n    }\n    \n    location @proxyHandler `}{\n        include snips/websockets-proxy-headers.conf;\n        include snips/proxy-headers.conf;\n        proxy_pass http://${i};\n    }\n}\n\nupstream ${i} {\n    server ${u} fail_timeout=0;\n}\n`;yield o.ensureFileIs(`/etc/nginx/servers/${t[0]}.conf`,a)})}const p="/etc/nginx/nginx.conf";function setupNginxBasic(){return i(this,void 0,void 0,function*(){yield Promise.all([o.ensureFileIs(p,d),setupNginxSnips(),setupNginxConfigs(),setupNginxBasicServers()])})}const f=`authenticator = webroot\nwebroot-path = ${a}\n\n# Because we are using logrotate for greater flexibility, disable the\n# internal certbot logrotation.\nmax-log-backups = 0\n`;const h=`#!/bin/bash\nsystemctl reload nginx\n`;function setupCertbot(){return i(this,void 0,void 0,function*(){const{domains:e}=yield c.readConfig();if(!e)throw new Error("Domains unset!");yield Promise.all([o.ensureFileIs("/etc/letsencrypt/cli.ini",f),o.mkdir(a)]);const t="/var/lib/znc/znc.pem";const n=`#!/bin/bash\nYOURDOMAIN="${e[0]}"\n\n[[ $RENEWED_LINEAGE != "${l}/$YOURDOMAIN" ]] && exit 0\n\n# Combine certs into single file for some applications that don't support separation\ncat ${l}/$YOURDOMAIN/{privkey,fullchain}.pem > ${t}\n`;function doCertbot(){return i(this,void 0,void 0,function*(){if(!e)throw new Error("Domains unset!");yield r.spawn("certbot","certonly","--expand","--noninteractive","--agree-tos","-m",`admin@${e[0]}`,...e.reduce((e,t)=>e.concat("--domain",t),[]))})}yield doCertbot().catch(()=>i(this,void 0,void 0,function*(){yield new Promise(e=>setTimeout(e,15e3));return doCertbot()}));const s="/etc/letsencrypt/renewal-hooks/deploy/reload-nginx";yield o.ensureFileIs(s,h);yield o.chmod(s,493)})}function checkNginxConfig(){return i(this,void 0,void 0,function*(){yield r.spawn("nginx","-tc",p)})}function setupNginx(){return i(this,void 0,void 0,function*(){const{domains:e}=yield c.readConfig();if(!e)return;yield setupNginxBasic();yield checkNginxConfig().catch(()=>i(this,void 0,void 0,function*(){u.debug("Something went wrong. Clearing possibly broken configs and trying again.");yield Promise.all(e.map(e=>o.unlink(`/etc/nginx/servers/${e}.conf`).catch(()=>{})));yield checkNginxConfig()}));yield r.exec(`systemctl reload nginx.service`);yield setupCertbot();yield setupNginxServersFull();yield checkNginxConfig();yield r.exec(`systemctl reload nginx.service`)})}t.setupNginx=setupNginx},56:function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,o){function fulfilled(e){try{step(i.next(e))}catch(e){o(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){o(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:true});t.setupJournalbeat=void 0;const o=n(2);const r=n(311);const s=n(0);function setupJournalbeat(){return i(this,void 0,void 0,function*(){const{journalbeat:e}=yield s.readConfig();if(!e)return;yield r.exec("wget -qO - https://artifacts.elastic.co/GPG-KEY-elasticsearch | apt-key add -");yield o.ensureFileIs("/etc/apt/sources.list.d/elastic-7.x.list","deb https://artifacts.elastic.co/packages/7.x/apt stable main\n");yield r.exec("apt-get update");yield r.exec("apt-get install -y journalbeat");yield r.exec("systemctl enable journalbeat");const t=`\n[Service]\nEnvironment="BEAT_LOG_OPTS= "\n`;const n=o.mkdir("/lib/systemd/system/journalbeat.service.d").then(()=>o.ensureFileIs("/lib/systemd/system/journalbeat.service.d/disable-logging.conf",t)).then(()=>r.exec("systemctl daemon-reload"));let i=`journalbeat.inputs:\n- paths: []\n  #backoff: 1s\n  #max_backoff: 20s\n  seek: cursor\n  #cursor_seek_fallback: head\n  #include_matches: []\n  #fields:\n\n#journalbeat:\n  #registry_file: registry\n\nsetup.template.settings:\n  index.number_of_shards: 1\n  #index.codec: best_compression\n  #_source.enabled: false\n\n#name:\n#tags: ["service-X", "web-tier"]\n#fields:\n\n#setup.dashboards.enabled: false\n#setup.dashboards.url:\n\nprocessors:\n  - add_host_metadata: ~\n  - add_cloud_metadata: ~  \n  - decode_json_fields:\n      fields: ["message"]\n      process_array: true\n      max_depth: 8\n      target: ""\n\n#logging.level: debug\n#logging.selectors: ["*"]\n\n#monitoring.enabled: false\n#monitoring.cluster_uuid:\n#monitoring.elasticsearch:\n\n#migration.6_to_7.enabled: true\n`;if(e.kibanaHost){i+=`\nsetup.kibana:\n  host: "${e.kibanaHost}"\n`}let c=0;if(e.elastic.hosts.length){c++;i+=`\noutput.elasticsearch:\n  hosts: ${JSON.stringify(e.elastic.hosts)}\n  #protocol: "https"\n  username: ${JSON.stringify(e.elastic.username)}\n  password: ${JSON.stringify(e.elastic.password)}\n`}if(e.logstashHosts.length){if(c){console.log("Skipping logstash config in favor of elasticsearch")}else{c++;i+=`\noutput.logstash:\n  hosts: ${JSON.stringify(e.logstashHosts)}\n  #ssl.certificate_authorities: ["/etc/pki/root/ca.pem"]\n  #ssl.certificate: "/etc/pki/client/cert.pem"\n  #ssl.key: "/etc/pki/client/cert.key"\n`}}if(!c)console.log("Warning: No journalbeat outputs configured");const u=yield o.ensureFileIs("/etc/journalbeat/journalbeat.yml",i);yield n;yield r.exec(`systemctl ${u?"restart":"start"} journalbeat`)})}t.setupJournalbeat=setupJournalbeat},87:function(e){e.exports=require("os")},96:function(e,t,n){"use strict";e=n.nmd(e);var i=this&&this.__awaiter||function(e,t,n,i){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,o){function fulfilled(e){try{step(i.next(e))}catch(e){o(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){o(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:true});t.prepare=void 0;const o=n(42);const r=n(438);const s=n(263);const c=n(425);const u=n(305);function prepare(){return i(this,void 0,void 0,function*(){yield u.printOSInfo();yield c.basicServerSetup();yield Promise.all([s.setupMonitoringTools(),o.setupNginx(),r.setupMainServiceFiles()]);console.log("Server configured!")})}t.prepare=prepare;if(!e.parent){prepare().catch(e=>{console.log("Error running!");console.log(e);process.exitCode=1})}},129:function(e){e.exports=require("child_process")},263:function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,o){function fulfilled(e){try{step(i.next(e))}catch(e){o(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){o(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:true});t.setupMonitoringTools=void 0;const o=n(56);const r=n(16);const s=n(947);const c=n(274);const u=n(291);function setupMonitoringTools(){return i(this,void 0,void 0,function*(){yield Promise.all([o.setupJournalbeat(),r.setupNetdata(),s.setupCockpit(),c.setupFailureNotificationService(),u.setupPersistentJournal()])})}t.setupMonitoringTools=setupMonitoringTools},274:function(e,t){"use strict";var n=this&&this.__awaiter||function(e,t,n,i){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,o){function fulfilled(e){try{step(i.next(e))}catch(e){o(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){o(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:true});t.setupFailureNotificationService=void 0;function setupFailureNotificationService(){return n(this,void 0,void 0,function*(){})}t.setupFailureNotificationService=setupFailureNotificationService},285:function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,o){function fulfilled(e){try{step(i.next(e))}catch(e){o(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){o(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:true});t.setupAptDependencies=t.addAptDependencies=void 0;const o=n(2);const r=n(311);const s=n(0);const c=[];function addAptDependencies(...e){c.push(...e)}t.addAptDependencies=addAptDependencies;function setupAptDependencies(){var e,t;return i(this,void 0,void 0,function*(){yield r.exec("curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -");yield o.ensureFileIs("/etc/apt/sources.list.d/yarn.list","deb https://dl.yarnpkg.com/debian/ stable main");addAptDependencies("yarn");yield r.spawn("apt-get","update");yield r.spawn("apt-get","upgrade","-y");const n=yield s.readConfig();addAptDependencies(...(e=n.aptDependencies)!==null&&e!==void 0?e:[]);addAptDependencies(...(t=n.runtimeAptDependencies)!==null&&t!==void 0?t:[]);const i=true;const u=i?"force-confnew":"force-confdef\nforce-confold";yield o.ensureFileIs("/etc/dpkg/dpkg.cfg.d/force-conf.cfg",`${u}\n`);yield r.spawn("apt-get",{stdio:"inherit",env:Object.assign(Object.assign({},process.env),{DEBIAN_FRONTEND:"noninteractive"})},"install","-yq",...new Set(c));yield r.spawn("apt-get","autoremove","-y")})}t.setupAptDependencies=setupAptDependencies},291:function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,o){function fulfilled(e){try{step(i.next(e))}catch(e){o(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){o(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:true});t.setupPersistentJournal=void 0;const o=n(2);function setupPersistentJournal(){return i(this,void 0,void 0,function*(){yield o.mkdir("/var/log/journal")})}t.setupPersistentJournal=setupPersistentJournal},305:function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,o){function fulfilled(e){try{step(i.next(e))}catch(e){o(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){o(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:true});t.printOSInfo=void 0;const o=n(747);const{readFile:r}=o.promises;function printOSInfo(){return i(this,void 0,void 0,function*(){const e=(yield r("/etc/lsb-release")).toString();const t=e.split("\n")[3].split("=")[1].split('"')[1];console.log("OS Version",t)})}t.printOSInfo=printOSInfo},311:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.exec=t.spawn=void 0;const i=n(129);const o=n(669);const r=n(9);const s="/bin/bash";function spawn(e,t,...n){const o={stdio:"inherit"};let c;if(typeof t==="string"){n.unshift(t);c=o}else{if(t===true){c=Object.assign(Object.assign({},o),{shell:s})}else{c=Object.assign(Object.assign({},o),t)}}r.debug("Spawning",e,n);const u=i.spawn(e,n,c);const a=new Promise((e,t)=>{u.on("exit",n=>{if(n){const e=new Error(`Exit code: ${n}`);e.exitCode=n;t(e)}else{e()}})});a.child=u;return a}t.spawn=spawn;const c=o.promisify(i.exec);function exec(e,t=true){r.debug("Exec:",e);if(t===null){return c(e)}if(t===true)t=s;return c(e,{shell:t})}t.exec=exec},411:function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,o){function fulfilled(e){try{step(i.next(e))}catch(e){o(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){o(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:true});t.setupSecurity=void 0;const o=n(2);const r=n(311);function setupSecurity(){return i(this,void 0,void 0,function*(){const e=yield o.ensureFileContains("/etc/ssh/sshd_config","\nPasswordAuthentication no\n");if(e){yield r.exec("systemctl reload sshd")}})}t.setupSecurity=setupSecurity},425:function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,o){function fulfilled(e){try{step(i.next(e))}catch(e){o(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){o(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:true});t.basicServerSetup=void 0;const o=n(37);const r=n(285);const s=n(411);const c=n(0);const u=n(708);function basicServerSetup(){return i(this,void 0,void 0,function*(){yield Promise.all([s.setupSecurity(),c.readConfig().then(e=>e.authorizedKeys).then(e=>i(this,void 0,void 0,function*(){if(e.length)return u.setAuthorizedKeys("root",e)})),o.setupTimezone()]);yield r.setupAptDependencies()})}t.basicServerSetup=basicServerSetup},431:function(e,t,n){"use strict";var i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)if(Object.hasOwnProperty.call(e,n))t[n]=e[n];t["default"]=e;return t};Object.defineProperty(t,"__esModule",{value:true});const o=i(n(87));function issueCommand(e,t,n){const i=new Command(e,t,n);process.stdout.write(i.toString()+o.EOL)}t.issueCommand=issueCommand;function issue(e,t=""){issueCommand(e,{},t)}t.issue=issue;const r="::";class Command{constructor(e,t,n){if(!e){e="missing.command"}this.command=e;this.properties=t;this.message=n}toString(){let e=r+this.command;if(this.properties&&Object.keys(this.properties).length>0){e+=" ";let t=true;for(const n in this.properties){if(this.properties.hasOwnProperty(n)){const i=this.properties[n];if(i){if(t){t=false}else{e+=","}e+=`${n}=${escapeProperty(i)}`}}}}e+=`${r}${escapeData(this.message)}`;return e}}function toCommandValue(e){if(e===null||e===undefined){return""}else if(typeof e==="string"||e instanceof String){return e}return JSON.stringify(e)}t.toCommandValue=toCommandValue;function escapeData(e){return toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A")}function escapeProperty(e){return toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A").replace(/:/g,"%3A").replace(/,/g,"%2C")}},438:function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,o){function fulfilled(e){try{step(i.next(e))}catch(e){o(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){o(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:true});t.setupMainServiceFiles=void 0;const o=n(311);const r=n(2);const s=n(0);function setupMainServiceFiles(){var e;return i(this,void 0,void 0,function*(){const{service:t}=yield s.readConfig();const n=t.name;const c=(e=t.description)!==null&&e!==void 0?e:"Runtime server";const u=t.startServerCommand;const a=t.extraConfigs;const l=`/etc/systemd/system/${n}.service`;const d=`/var/lib/${n}`;const p="www-data";const f=o.exec(`id -u ${p}`);const h=o.exec(`id -g ${p}`);const v=r.mkdir(`${l}.d`);const y=r.mkdir(`/opt`);const _=r.mkdir(d).then(()=>i(this,void 0,void 0,function*(){return yield Promise.all([r.chmod(d,448),r.chown(d,Number((yield f).stdout),Number((yield h).stdout))])}));const m=`[Unit]\nDescription=${c}\nAfter=network.target\n\n[Service]\nType=simple\nRestart=always\nEnvironment=LISTEN_PATH="/run/${n}/sock"\nRuntimeDirectory=${n}\nWorkingDirectory=/opt/${n}\nExecStart=${u}\nEnvironment=HOME="${d}"\nUser=${p}\n${a?`\n# Extra configs\n${a}\n`:"\n"}\n[Install]\nWantedBy=default.target\n`;yield r.ensureFileIs(l,m);yield o.exec(`systemctl daemon-reload`);if(t.enable)yield o.exec(`systemctl enable ${n}.service`);yield Promise.all([v,y,_])})}t.setupMainServiceFiles=setupMainServiceFiles},470:function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,o){function fulfilled(e){try{step(i.next(e))}catch(e){o(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){o(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,t||[])).next())})};var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)if(Object.hasOwnProperty.call(e,n))t[n]=e[n];t["default"]=e;return t};Object.defineProperty(t,"__esModule",{value:true});const r=n(431);const s=o(n(87));const c=o(n(622));var u;(function(e){e[e["Success"]=0]="Success";e[e["Failure"]=1]="Failure"})(u=t.ExitCode||(t.ExitCode={}));function exportVariable(e,t){const n=r.toCommandValue(t);process.env[e]=n;r.issueCommand("set-env",{name:e},n)}t.exportVariable=exportVariable;function setSecret(e){r.issueCommand("add-mask",{},e)}t.setSecret=setSecret;function addPath(e){r.issueCommand("add-path",{},e);process.env["PATH"]=`${e}${c.delimiter}${process.env["PATH"]}`}t.addPath=addPath;function getInput(e,t){const n=process.env[`INPUT_${e.replace(/ /g,"_").toUpperCase()}`]||"";if(t&&t.required&&!n){throw new Error(`Input required and not supplied: ${e}`)}return n.trim()}t.getInput=getInput;function setOutput(e,t){r.issueCommand("set-output",{name:e},t)}t.setOutput=setOutput;function setCommandEcho(e){r.issue("echo",e?"on":"off")}t.setCommandEcho=setCommandEcho;function setFailed(e){process.exitCode=u.Failure;error(e)}t.setFailed=setFailed;function isDebug(){return process.env["RUNNER_DEBUG"]==="1"}t.isDebug=isDebug;function debug(e){r.issueCommand("debug",{},e)}t.debug=debug;function error(e){r.issue("error",e instanceof Error?e.toString():e)}t.error=error;function warning(e){r.issue("warning",e instanceof Error?e.toString():e)}t.warning=warning;function info(e){process.stdout.write(e+s.EOL)}t.info=info;function startGroup(e){r.issue("group",e)}t.startGroup=startGroup;function endGroup(){r.issue("endgroup")}t.endGroup=endGroup;function group(e,t){return i(this,void 0,void 0,function*(){startGroup(e);let n;try{n=yield t()}finally{endGroup()}return n})}t.group=group;function saveState(e,t){r.issueCommand("save-state",{name:e},t)}t.saveState=saveState;function getState(e){return process.env[`STATE_${e}`]||""}t.getState=getState},622:function(e){e.exports=require("path")},669:function(e){e.exports=require("util")},708:function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,o){function fulfilled(e){try{step(i.next(e))}catch(e){o(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){o(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:true});t.setupRoot=t.setAuthorizedKeys=void 0;const o=n(2);const r=n(872);const s=n(622);function setAuthorizedKeys(e,t){return i(this,void 0,void 0,function*(){const n=yield r.userHome(e);const i=s.join(n,".ssh");yield o.mkdir(i);yield o.ensureFileIs(s.join(i,"authorized_keys"),[...t,""].join("\n"))})}t.setAuthorizedKeys=setAuthorizedKeys;function setupRoot(e){return i(this,void 0,void 0,function*(){const t=yield r.userHome("root");const n=s.join(t,".ssh");yield o.mkdir(n);if(!e)e=[];yield Promise.all([r.fixKnownHosts(t),setAuthorizedKeys("root",e!==null&&e!==void 0?e:[])])})}t.setupRoot=setupRoot},747:function(e){e.exports=require("fs")},872:function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,o){function fulfilled(e){try{step(i.next(e))}catch(e){o(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){o(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:true});t.fixKnownHosts=t.ensureKey=t.createAndConfigureUser=t.userHome=void 0;const o=n(622);const r=n(2);const s=n(311);const c=["sudo","adm","systemd-journal"];const u=9;function userHome(e){return i(this,void 0,void 0,function*(){return e==="root"?"/root":`/home/${e}`})}t.userHome=userHome;function createAndConfigureUser(e){return i(this,void 0,void 0,function*(){const t=[];t.push("useradd");t.push("--no-user-group");t.push("--gid","users");t.push("--shell","/bin/bash");t.push("--create-home");t.push("--groups",c.join(","));t.push(e);yield s.exec(t.join(" ")).catch(t=>{if(t.code!==u)throw t;console.log(`User ${e} exists`)});const n=yield userHome(e);yield r.mkdir(`${n}/.ssh`);yield fixKnownHosts(n)})}t.createAndConfigureUser=createAndConfigureUser;function ensureKey(e,t){return i(this,void 0,void 0,function*(){yield r.ensureFileContains(`${yield userHome(e)}/.ssh/authorized_keys`,t)})}t.ensureKey=ensureKey;const a="github.com ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAq2A7hRGmdnm9tUDbO9IDSwBK6TbQa+PXYPCPy6rbTrTtw7PHkccKrpp0yVhp5HdEIcKr6pLlVDBfOLX9QUsyCOV0wzfjIJNlGEYsdlLJizHhbn2mUjvSAHQqZETYP81eFzLQNnPHt4EVVUh7VfDESU84KezmD5QlWpXLmvU31/yMf+Se8xhHTvKSCZIFImWwoG6mbUoWf9nzpIoaSjB+weqqUUmpaaasXVal72J+UX2B+2RPW3RcT0eOzQgqlJL3RKrTJvdsjE3JEAvGq3lGHSZXy28G3skua2SmVi/w4yCE6gbODqnTWlg7+wC604ydGXA8VJiS5ap43JXiUFFAaQ==";function fixKnownHosts(e){return i(this,void 0,void 0,function*(){return r.ensureFileContains(o.join(e,".ssh","known_hosts"),a)})}t.fixKnownHosts=fixKnownHosts},899:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.isGitHubAction=void 0;t.isGitHubAction=process.env.GITHUB_ACTIONS==="true"||process.argv.includes("--gh-actions")},947:function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,o){function fulfilled(e){try{step(i.next(e))}catch(e){o(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){o(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:true});t.setupCockpit=void 0;const o=n(285);o.addAptDependencies("cockpit");function setupCockpit(){return i(this,void 0,void 0,function*(){})}t.setupCockpit=setupCockpit}},function(e){"use strict";!function(){e.nmd=function(e){e.paths=[];if(!e.children)e.children=[];Object.defineProperty(e,"loaded",{enumerable:true,get:function(){return e.l}});Object.defineProperty(e,"id",{enumerable:true,get:function(){return e.i}});return e}}()});
//# sourceMappingURL=index.js.map