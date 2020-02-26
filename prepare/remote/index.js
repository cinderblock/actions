require('./sourcemap-register.js');module.exports=function(e,n){"use strict";var t={};function __webpack_require__(n){if(t[n]){return t[n].exports}var i=t[n]={i:n,l:false,exports:{}};e[n].call(i.exports,i,i.exports,__webpack_require__);i.l=true;return i.exports}__webpack_require__.ab=__dirname+"/";function startup(){return __webpack_require__(96)}n(__webpack_require__);return startup()}({2:function(e,n,t){"use strict";var i=this&&this.__awaiter||function(e,n,t,i){function adopt(e){return e instanceof t?e:new t(function(n){n(e)})}return new(t||(t=Promise))(function(t,r){function fulfilled(e){try{step(i.next(e))}catch(e){r(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){r(e)}}function step(e){e.done?t(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,n||[])).next())})};Object.defineProperty(n,"__esModule",{value:true});const r=t(747);const o=t(9);function unlink(...e){return i(this,void 0,void 0,function*(){const[n]=e;o.debug("unlink:",n);yield r.promises.unlink(...e)})}n.unlink=unlink;function chmod(...e){return i(this,void 0,void 0,function*(){const[n,t]=e;o.debug("chmod:",n,"to",t);yield r.promises.chmod(...e)})}n.chmod=chmod;function copyFile(...e){return i(this,void 0,void 0,function*(){const[n,t]=e;o.debug("copyFile:",n,"to",t);yield r.promises.copyFile(...e)})}n.copyFile=copyFile;function mkdir(e,n){return i(this,void 0,void 0,function*(){if(typeof n!=="object"){n={mode:n}}n=Object.assign({recursive:true},n);o.debug("mkdir:",e);yield r.promises.mkdir(e,n)})}n.mkdir=mkdir;function exists(e){return i(this,void 0,void 0,function*(){return r.promises.access(e).then(()=>true,()=>false)})}n.exists=exists;function ensureFileContains(e,n){return i(this,void 0,void 0,function*(){const t=(yield r.promises.readFile(e).catch(()=>"")).toString();if(t.includes(n))return false;o.debug("Appending to file:",e,"bytes:",n.length);yield r.promises.writeFile(e,t+n);return true})}n.ensureFileContains=ensureFileContains;function ensureFileIs(e,n,t){return i(this,void 0,void 0,function*(){const i=(yield r.promises.readFile(e).catch(()=>"")).toString();if(i===n)return false;o.debug("Writing to file:",e,"bytes:",n.length);yield r.promises.writeFile(e,n,{mode:t});return true})}n.ensureFileIs=ensureFileIs;function ensureFilesAre(e){return i(this,void 0,void 0,function*(){yield Promise.all(e.map(({filename:e,contents:n})=>ensureFileIs(e,n)))})}n.ensureFilesAre=ensureFilesAre;function ensureLinkIs(e,n){return i(this,void 0,void 0,function*(){const t=yield r.promises.readlink(n).catch(e=>{if(e.code==="ENOENT")return undefined;throw e});if(e===t)return false;if(t!==undefined)yield unlink(n);o.debug("Updating symlink",n,"to point to",e);yield r.promises.symlink(e,n);return true})}n.ensureLinkIs=ensureLinkIs},9:function(e,n,t){"use strict";var i=this&&this.__awaiter||function(e,n,t,i){function adopt(e){return e instanceof t?e:new t(function(n){n(e)})}return new(t||(t=Promise))(function(t,r){function fulfilled(e){try{step(i.next(e))}catch(e){r(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){r(e)}}function step(e){e.done?t(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,n||[])).next())})};Object.defineProperty(n,"__esModule",{value:true});const r=t(470);const o=t(899);const s=t(669);function input(e){return i(this,void 0,void 0,function*(){if(!o.isGitHubAction){throw new Error("Not made to work in other environments yet!")}return r.getInput(e)})}n.input=input;function debug(...e){if(o.isGitHubAction){r.debug(s.formatWithOptions({colors:true},...e));return}if(process.env.DEBUG===undefined)return;console.log(...e)}n.debug=debug;function verbosityLevel(){return i(this,void 0,void 0,function*(){const e=yield input("verbosity");const n=parseInt(e);if(!isFinite(n))throw new Error(`Invalid verbosity: ${e}.`);if(n<0)throw new RangeError(`Invalid verbosity: ${n}. 0 is minimum.`);if(n>3)throw new RangeError(`Invalid verbosity: ${n}. 3 is maximum.`);return n})}n.verbosityLevel=verbosityLevel},16:function(e,n,t){"use strict";var i=this&&this.__awaiter||function(e,n,t,i){function adopt(e){return e instanceof t?e:new t(function(n){n(e)})}return new(t||(t=Promise))(function(t,r){function fulfilled(e){try{step(i.next(e))}catch(e){r(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){r(e)}}function step(e){e.done?t(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,n||[])).next())})};Object.defineProperty(n,"__esModule",{value:true});const r=t(311);function setupNetdata(){return i(this,void 0,void 0,function*(){const e="https://my-netdata.io/kickstart-static64.sh";yield r.exec(`bash <(curl -Ss "${e}") --dont-wait`)})}n.setupNetdata=setupNetdata},37:function(e,n,t){"use strict";var i=this&&this.__awaiter||function(e,n,t,i){function adopt(e){return e instanceof t?e:new t(function(n){n(e)})}return new(t||(t=Promise))(function(t,r){function fulfilled(e){try{step(i.next(e))}catch(e){r(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){r(e)}}function step(e){e.done?t(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,n||[])).next())})};Object.defineProperty(n,"__esModule",{value:true});const r=t(2);const o=t(469);function setupTimezone(){return i(this,void 0,void 0,function*(){const{timezone:e}=yield o.readAvenConfig();if(!e)return;const n="/etc/localtime";const t=`/etc/share/zoneinfo/${e}`;r.ensureLinkIs(t,n)})}n.setupTimezone=setupTimezone},42:function(e,n,t){"use strict";var i=this&&this.__awaiter||function(e,n,t,i){function adopt(e){return e instanceof t?e:new t(function(n){n(e)})}return new(t||(t=Promise))(function(t,r){function fulfilled(e){try{step(i.next(e))}catch(e){r(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){r(e)}}function step(e){e.done?t(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,n||[])).next())})};Object.defineProperty(n,"__esModule",{value:true});const r=t(2);const o=t(311);const s=t(285);const c=t(469);const u=t(9);s.addAptDependencies("nginx","certbot","ssl-cert");const a="/var/lib/letsencrypt/webroot";const l="/etc/letsencrypt/live";const d=`user www-data;\nworker_processes auto;\npid /run/nginx.pid;\n\ninclude modules-enabled/*.conf;\n\nevents {\n    worker_connections 768;\n    # multi_accept on;\n}\n\nhttp {\n    include conf.d/*.conf;\n}\n`;function setupNginxSnips(){return i(this,void 0,void 0,function*(){const e="/etc/nginx/snips";yield r.mkdir(e);const n={};n["force-main-https"]=`location / {\n    return 301 https://$server_name$request_uri;\n    #rewrite ^ https://$server_name$request_uri? permanent;\n}\n`;n.letsencrypt=`location ^~ /.well-known/acme-challenge/ {\n    default_type "text/plain";\n    root ${a};\n}\n\nlocation = /.well-known/acme-challenge/ {\n    return 404;\n}\n`;n["proxy-forwarded-headers"]=`proxy_set_header Host $host;\nproxy_set_header Forwarded $proxy_add_forwarded;\n`;n["proxy-headers"]=`proxy_set_header Host $host;\n#proxy_set_header Port $server_port;\n#proxy_set_header X-Forwarded-Port $server_port;\nproxy_set_header X-Real-IP $remote_addr;\nproxy_set_header X-Forwarded-Proto $scheme;\n#proxy_set_header X-Forwarded-Ssl $https;\nproxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n#proxy_set_header X-Frame-Options SAMEORIGIN;\n`;n["trust-cloudflare-ip"]=`set_real_ip_from 103.21.244.0/22;\nset_real_ip_from 103.22.200.0/22;\nset_real_ip_from 103.31.4.0/22;\nset_real_ip_from 104.16.0.0/12;\nset_real_ip_from 108.162.192.0/18;\nset_real_ip_from 131.0.72.0/22;\nset_real_ip_from 141.101.64.0/18;\nset_real_ip_from 162.158.0.0/15;\nset_real_ip_from 172.64.0.0/13;\nset_real_ip_from 173.245.48.0/20;\nset_real_ip_from 188.114.96.0/20;\nset_real_ip_from 190.93.240.0/20;\nset_real_ip_from 197.234.240.0/22;\nset_real_ip_from 198.41.128.0/17;\nset_real_ip_from 2400:cb00::/32;\nset_real_ip_from 2606:4700::/32;\nset_real_ip_from 2803:f800::/32;\nset_real_ip_from 2405:b500::/32;\nset_real_ip_from 2405:8100::/32;\nset_real_ip_from 2c0f:f248::/32;\nset_real_ip_from 2a06:98c0::/29;\n\n# use any of the following two\nreal_ip_header CF-Connecting-IP;\n#real_ip_header X-Forwarded-For;\n`;n["websockets-proxy-headers"]=`proxy_http_version 1.1;\nproxy_set_header Upgrade $http_upgrade;\nproxy_set_header Connection $connection_upgrade;\n`;yield Promise.all([r.ensureLinkIs("../snippets/fastcgi-php.conf",`${e}/fastcgi-php.conf`),r.ensureFilesAre(Object.entries(n).map(([n,t])=>({filename:`${e}/${n}.conf`,contents:t})))])})}function setupNginxConfigs(){return i(this,void 0,void 0,function*(){const e="/etc/nginx/conf.d";const{domains:n}=yield c.readAvenConfig();const t={public:"/etc/ssl/certs/ssl-cert-snakeoil.pem",private:"/etc/ssl/private/ssl-cert-snakeoil.key"};yield r.exists(`${l}/${n[0]}/fullchain.pem`).then(e=>{if(e){t.public=`${l}/${n[0]}/fullchain.pem`;t.private=`${l}/${n[0]}/privkey.pem`}});const i={};i.basic=`sendfile on;\ntcp_nopush on;\ntcp_nodelay on;\nkeepalive_timeout 65;\ntypes_hash_max_size 2048;\n# server_tokens off;\n\n# server_names_hash_bucket_size 64;\n# server_name_in_redirect off;\n\ninclude /etc/nginx/mime.types;\ndefault_type application/octet-stream;\n`;i.gzip=`gzip on;\ngzip_disable "msie6";\n\n# gzip_vary on;\n# gzip_proxied any;\n# gzip_comp_level 6;\n# gzip_buffers 16 8k;\n# gzip_http_version 1.1;\n# gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;\n`;i["http-upgrade"]=`map $http_upgrade $connection_upgrade {\n    default upgrade;\n    ''      close;\n}\n`;i.logging=`access_log /var/log/nginx/access.log;\nerror_log /var/log/nginx/error.log;\n`;const o='"~^(,[ \\\\t]*)*([!#$%&\'*+.^_`|~0-9A-Za-z-]+=([!#$%&\'*+.^_`|~0-9A-Za-z-]+|\\"([\\\\t \\\\x21\\\\x23-\\\\x5B\\\\x5D-\\\\x7E\\\\x80-\\\\xFF]|\\\\\\\\[\\\\t \\\\x21-\\\\x7E\\\\x80-\\\\xFF])*\\"))?(;([!#$%&\'*+.^_`|~0-9A-Za-z-]+=([!#$%&\'*+.^_`|~0-9A-Za-z-]+|\\"([\\\\t \\\\x21\\\\x23-\\\\x5B\\\\x5D-\\\\x7E\\\\x80-\\\\xFF]|\\\\\\\\[\\\\t \\\\x21-\\\\x7E\\\\x80-\\\\xFF])*\\"))?)*([ \\\\t]*,([ \\\\t]*([!#$%&\'*+.^_`|~0-9A-Za-z-]+=([!#$%&\'*+.^_`|~0-9A-Za-z-]+|\\"([\\\\t \\\\x21\\\\x23-\\\\x5B\\\\x5D-\\\\x7E\\\\x80-\\\\xFF]|\\\\\\\\[\\\\t \\\\x21-\\\\x7E\\\\x80-\\\\xFF])*\\"))?(;([!#$%&\'*+.^_`|~0-9A-Za-z-]+=([!#$%&\'*+.^_`|~0-9A-Za-z-]+|\\"([\\\\t \\\\x21\\\\x23-\\\\x5B\\\\x5D-\\\\x7E\\\\x80-\\\\xFF]|\\\\\\\\[\\\\t \\\\x21-\\\\x7E\\\\x80-\\\\xFF])*\\"))?)*)?)*$"\n';i["proxy-add-forwarded"]=`map $remote_addr $proxy_forwarded_elem {\n    # IPv4 addresses can be sent as-is\n    ~^[0-9.]+$          "for=$remote_addr";\n\n    # IPv6 addresses need to be bracketed and quoted\n    ~^[0-9A-Fa-f:.]+$   "for=\\"[$remote_addr]\\"";\n\n    # Unix domain socket names cannot be represented in RFC 7239 syntax\n    default             "for=unknown";\n}\n\nmap $http_forwarded $proxy_add_forwarded {\n    # If the incoming Forwarded header is syntactically valid, append to it\n    ${o} "$http_forwarded, $proxy_forwarded_elem";\n\n    # Otherwise, replace it\n    default "$proxy_forwarded_elem";\n}\n`;i.servers=`include servers/*.conf;\n`;i.ssl=`##\n# SSL Settings\n##\n\n# Default keys. Overridden in server configs.\nssl_certificate     ${t.public};\nssl_certificate_key ${t.private};\n\n\nssl_protocols TLSv1 TLSv1.1 TLSv1.2; # Dropping SSLv3, ref: POODLE\nssl_prefer_server_ciphers on;\n`;yield r.mkdir(e).then(()=>r.ensureFilesAre(Object.entries(i).map(([n,t])=>({filename:`${e}/${n}.conf`,contents:t}))))})}function setupNginxBasicServers(){return i(this,void 0,void 0,function*(){const e="/etc/nginx/servers";yield r.mkdir(e);const n=`server {\n      listen 80;\n      listen [::]:80;\n      listen 443 ssl;\n      listen [::]:443 ssl;\n  \n      include snips/letsencrypt.conf;\n  \n      location / {\n          default_type text/plain;\n          return 200 'Nothing to see here...';\n      }\n  }\n  `;yield r.ensureFileIs(`${e}/00_default.conf`,n)})}function setupNginxServersFull(){return i(this,void 0,void 0,function*(){const{webRootPath:e,domains:n,serviceName:t}=yield c.readAvenConfig();if(e)yield r.mkdir(e);const i=n[0].replace(".","_");const o="sock";const s=`/run/${t}`;const u=`unix:${s}/${o}`;const a=`server {\n    server_name ${n.join(" ")};\n    listen 80 default_server;\n    listen [::]:80 default_server;\n\n    include snips/letsencrypt.conf;\n    include snips/force-main-https.conf;\n}\n\nserver {\n    server_name ${n.join(" ")};\n    listen 443 ssl default_server;\n    listen [::]:443 ssl default_server;\n\n    ssl_certificate     ${l}/${n[0]}/fullchain.pem;\n    ssl_certificate_key ${l}/${n[0]}/privkey.pem;\n\n    include snips/trust-cloudflare-ip.conf;\n\n    location / ${!e?"":`{\n      root ${e};\n      # If files exist in root, serve them. Otherwise fallback to proxy.\n      try_files $uri $uri/index.html @proxyHandler;\n    }\n    \n    location @proxyHandler `}{\n        include snips/websockets-proxy-headers.conf;\n        include snips/proxy-headers.conf;\n        proxy_pass http://${i};\n    }\n}\n\nupstream ${i} {\n    server ${u} fail_timeout=0;\n}\n`;yield r.ensureFileIs(`/etc/nginx/servers/${n[0]}.conf`,a)})}const p="/etc/nginx/nginx.conf";function setupNginxBasic(){return i(this,void 0,void 0,function*(){yield Promise.all([r.ensureFileIs(p,d),setupNginxSnips(),setupNginxConfigs(),setupNginxBasicServers()])})}const f=`authenticator = webroot\nwebroot-path = ${a}\n\n# Because we are using logrotate for greater flexibility, disable the\n# internal certbot logrotation.\nmax-log-backups = 0\n`;const h=`#!/bin/bash\nsystemctl reload nginx\n`;function setupCertbot(){return i(this,void 0,void 0,function*(){const{domains:e}=yield c.readAvenConfig();yield Promise.all([r.ensureFileIs("/etc/letsencrypt/cli.ini",f),r.mkdir(a)]);const n="/var/lib/znc/znc.pem";const t=`#!/bin/bash\nYOURDOMAIN="${e[0]}"\n\n[[ $RENEWED_LINEAGE != "${l}/$YOURDOMAIN" ]] && exit 0\n\n# Combine certs into single file for some applications that don't support separation\ncat ${l}/$YOURDOMAIN/{privkey,fullchain}.pem > ${n}\n`;yield o.spawn("certbot","certonly","--expand","--noninteractive","--agree-tos","-m",`admin@${e[0]}`,...e.reduce((e,n)=>e.concat("--domain",n),[]));const i="/etc/letsencrypt/renewal-hooks/deploy/reload-nginx";yield r.ensureFileIs(i,h);yield r.chmod(i,493)})}function checkNginxConfig(){return i(this,void 0,void 0,function*(){yield o.spawn("nginx","-tc",p)})}function setupNginx(){return i(this,void 0,void 0,function*(){yield setupNginxBasic();const{domains:e}=yield c.readAvenConfig();yield checkNginxConfig().catch(()=>i(this,void 0,void 0,function*(){u.debug("Something went wrong. Clearing possibly broken configs and trying again.");yield Promise.all(e.map(e=>r.unlink(`/etc/nginx/servers/${e}.conf`).catch(()=>{})));yield checkNginxConfig()}));yield o.exec(`systemctl reload nginx.service`);yield setupCertbot();yield setupNginxServersFull();yield checkNginxConfig();yield o.exec(`systemctl reload nginx.service`)})}n.setupNginx=setupNginx},56:function(e,n,t){"use strict";var i=this&&this.__awaiter||function(e,n,t,i){function adopt(e){return e instanceof t?e:new t(function(n){n(e)})}return new(t||(t=Promise))(function(t,r){function fulfilled(e){try{step(i.next(e))}catch(e){r(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){r(e)}}function step(e){e.done?t(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,n||[])).next())})};Object.defineProperty(n,"__esModule",{value:true});const r=t(2);const o=t(311);const s=t(469);function setupJournalbeat(){return i(this,void 0,void 0,function*(){const{journalbeat:e}=yield s.readAvenConfig();if(!e)return;yield o.exec("wget -qO - https://artifacts.elastic.co/GPG-KEY-elasticsearch | apt-key add -");yield r.ensureFileIs("/etc/apt/sources.list.d/elastic-7.x.list","deb https://artifacts.elastic.co/packages/7.x/apt stable main\n");yield o.exec("apt-get update");yield o.exec("apt-get install -y journalbeat");yield o.exec("systemctl enable journalbeat");let n=`journalbeat.inputs:\n  - paths: []\n    #backoff: 1s\n    #max_backoff: 20s\n    seek: cursor\n    #cursor_seek_fallback: head\n    #include_matches: []\n    #fields:\n\n  #journalbeat:\n    #registry_file: registry\n\n  setup.template.settings:\n    index.number_of_shards: 1\n    #index.codec: best_compression\n    #_source.enabled: false\n\n  #name:\n  #tags: ["service-X", "web-tier"]\n  #fields:\n\n  #setup.dashboards.enabled: false\n  #setup.dashboards.url:\n\n  processors:\n    - add_host_metadata: ~\n    - add_cloud_metadata: ~  \n    - decode_json_fields:\n        fields: ["message"]\n        process_array: true\n        max_depth: 8\n        target: ""\n\n  #logging.level: debug\n  #logging.selectors: ["*"]\n\n  #monitoring.enabled: false\n  #monitoring.cluster_uuid:\n  #monitoring.elasticsearch:\n\n  #migration.6_to_7.enabled: true\n\n`;if(e.kibanaHost){n+=`setup.kibana:\n  host: "${e.kibanaHost}"\n\n`}if(e.elastic){n+=`output.elasticsearch:\n  hosts: ${JSON.stringify(e.elastic.hosts)}\n  #protocol: "https"\n  username: ${JSON.stringify(e.elastic.username)}\n  password: ${JSON.stringify(e.elastic.password)}\n\n`}if(e.logstashHosts){n+=`output.logstash:\n  hosts: ${JSON.stringify(e.logstashHosts)}\n  #ssl.certificate_authorities: ["/etc/pki/root/ca.pem"]\n  #ssl.certificate: "/etc/pki/client/cert.pem"\n  #ssl.key: "/etc/pki/client/cert.key"\n\n`}const t=yield r.ensureFileIs("/etc/journalbeat/journalbeat.yml",n);yield o.exec(`systemctl ${t?"restart":"start"} journalbeat`)})}n.setupJournalbeat=setupJournalbeat},87:function(e){e.exports=require("os")},96:function(e,n,t){"use strict";e=t.nmd(e);var i=this&&this.__awaiter||function(e,n,t,i){function adopt(e){return e instanceof t?e:new t(function(n){n(e)})}return new(t||(t=Promise))(function(t,r){function fulfilled(e){try{step(i.next(e))}catch(e){r(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){r(e)}}function step(e){e.done?t(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,n||[])).next())})};Object.defineProperty(n,"__esModule",{value:true});const r=t(42);const o=t(438);const s=t(263);const c=t(425);const u=t(305);function prepare(){return i(this,void 0,void 0,function*(){yield u.printOSInfo();yield c.basicServerSetup();yield Promise.all([s.setupMonitoringTools(),r.setupNginx(),o.setupMainServiceFiles()]);console.log("Server configured!")})}n.prepare=prepare;if(!e.parent){prepare().catch(e=>{console.log("Error running!");console.log(e);process.exitCode=1})}},129:function(e){e.exports=require("child_process")},263:function(e,n,t){"use strict";var i=this&&this.__awaiter||function(e,n,t,i){function adopt(e){return e instanceof t?e:new t(function(n){n(e)})}return new(t||(t=Promise))(function(t,r){function fulfilled(e){try{step(i.next(e))}catch(e){r(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){r(e)}}function step(e){e.done?t(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,n||[])).next())})};Object.defineProperty(n,"__esModule",{value:true});const r=t(56);const o=t(16);const s=t(947);const c=t(274);const u=t(291);function setupMonitoringTools(){return i(this,void 0,void 0,function*(){yield Promise.all([r.setupJournalbeat(),o.setupNetdata(),s.setupCockpit(),c.setupFailureNotificationService(),u.setupPersistentJournal()])})}n.setupMonitoringTools=setupMonitoringTools},274:function(e,n){"use strict";var t=this&&this.__awaiter||function(e,n,t,i){function adopt(e){return e instanceof t?e:new t(function(n){n(e)})}return new(t||(t=Promise))(function(t,r){function fulfilled(e){try{step(i.next(e))}catch(e){r(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){r(e)}}function step(e){e.done?t(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,n||[])).next())})};Object.defineProperty(n,"__esModule",{value:true});function setupFailureNotificationService(){return t(this,void 0,void 0,function*(){})}n.setupFailureNotificationService=setupFailureNotificationService},285:function(e,n,t){"use strict";var i=this&&this.__awaiter||function(e,n,t,i){function adopt(e){return e instanceof t?e:new t(function(n){n(e)})}return new(t||(t=Promise))(function(t,r){function fulfilled(e){try{step(i.next(e))}catch(e){r(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){r(e)}}function step(e){e.done?t(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,n||[])).next())})};Object.defineProperty(n,"__esModule",{value:true});const r=t(2);const o=t(311);const s=t(469);const c=[];function addAptDependencies(...e){c.push(...e)}n.addAptDependencies=addAptDependencies;function setupAptDependencies(){var e,n;return i(this,void 0,void 0,function*(){yield o.exec("curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -");yield r.ensureFileIs("/etc/apt/sources.list.d/yarn.list","deb https://dl.yarnpkg.com/debian/ stable main");addAptDependencies("yarn");yield o.spawn("apt-get","update");yield o.spawn("apt-get","upgrade","-y");const t=yield s.readAvenConfig();addAptDependencies(...(e=t.aptDependencies,e!==null&&e!==void 0?e:[]));addAptDependencies(...(n=t.runtimeAptDependencies,n!==null&&n!==void 0?n:[]));const i=true;const u=i?"force-confnew":"force-confdef\nforce-confold";yield r.ensureFileIs("/etc/dpkg/dpkg.cfg.d/force-conf.cfg",`${u}\n`);yield o.spawn("apt-get",{stdio:"inherit",env:Object.assign(Object.assign({},process.env),{DEBIAN_FRONTEND:"noninteractive"})},"install","-yq",...new Set(c));yield o.spawn("apt-get","autoremove","-y")})}n.setupAptDependencies=setupAptDependencies},291:function(e,n,t){"use strict";var i=this&&this.__awaiter||function(e,n,t,i){function adopt(e){return e instanceof t?e:new t(function(n){n(e)})}return new(t||(t=Promise))(function(t,r){function fulfilled(e){try{step(i.next(e))}catch(e){r(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){r(e)}}function step(e){e.done?t(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,n||[])).next())})};Object.defineProperty(n,"__esModule",{value:true});const r=t(2);function setupPersistentJournal(){return i(this,void 0,void 0,function*(){yield r.mkdir("/var/log/journal")})}n.setupPersistentJournal=setupPersistentJournal},305:function(e,n,t){"use strict";var i=this&&this.__awaiter||function(e,n,t,i){function adopt(e){return e instanceof t?e:new t(function(n){n(e)})}return new(t||(t=Promise))(function(t,r){function fulfilled(e){try{step(i.next(e))}catch(e){r(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){r(e)}}function step(e){e.done?t(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,n||[])).next())})};Object.defineProperty(n,"__esModule",{value:true});const r=t(747);const{readFile:o}=r.promises;function printOSInfo(){return i(this,void 0,void 0,function*(){const e=(yield o("/etc/lsb-release")).toString();const n=e.split("\n")[3].split("=")[1].split('"')[1];console.log("OS Version",n)})}n.printOSInfo=printOSInfo},311:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:true});const i=t(129);const r=t(669);const o=t(9);const s="/bin/bash";function spawn(e,n,...t){const r={stdio:"inherit"};let c;if(typeof n==="string"){t.unshift(n);c=r}else{if(n===true){c=Object.assign(Object.assign({},r),{shell:s})}else{c=Object.assign(Object.assign({},r),n)}}o.debug("Spawning",e,t);const u=i.spawn(e,t,c);const a=new Promise((e,n)=>{u.on("exit",t=>{if(t){const e=new Error(`Exit code: ${t}`);e.exitCode=t;n(e)}else{e()}})});a.child=u;return a}n.spawn=spawn;const c=r.promisify(i.exec);function exec(e,n=true){o.debug("Exec:",e);if(n===null){return c(e)}if(n===true)n=s;return c(e,{shell:n})}n.exec=exec},411:function(e,n,t){"use strict";var i=this&&this.__awaiter||function(e,n,t,i){function adopt(e){return e instanceof t?e:new t(function(n){n(e)})}return new(t||(t=Promise))(function(t,r){function fulfilled(e){try{step(i.next(e))}catch(e){r(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){r(e)}}function step(e){e.done?t(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,n||[])).next())})};Object.defineProperty(n,"__esModule",{value:true});const r=t(2);const o=t(311);function setupSecurity(){return i(this,void 0,void 0,function*(){const e=yield r.ensureFileContains("/etc/ssh/sshd_config","\nPasswordAuthentication no\n");if(e){yield o.exec("systemctl reload sshd")}})}n.setupSecurity=setupSecurity},425:function(e,n,t){"use strict";var i=this&&this.__awaiter||function(e,n,t,i){function adopt(e){return e instanceof t?e:new t(function(n){n(e)})}return new(t||(t=Promise))(function(t,r){function fulfilled(e){try{step(i.next(e))}catch(e){r(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){r(e)}}function step(e){e.done?t(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,n||[])).next())})};Object.defineProperty(n,"__esModule",{value:true});const r=t(37);const o=t(285);const s=t(411);const c=t(469);const u=t(708);function basicServerSetup(){return i(this,void 0,void 0,function*(){yield Promise.all([s.setupSecurity(),c.readAvenConfig().then(e=>e.authorizedKeys).then(e=>i(this,void 0,void 0,function*(){if(e.length)return u.setAuthorizedKeys("root",e)})),r.setupTimezone()]);yield o.setupAptDependencies()})}n.basicServerSetup=basicServerSetup},431:function(e,n,t){"use strict";var i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(e!=null)for(var t in e)if(Object.hasOwnProperty.call(e,t))n[t]=e[t];n["default"]=e;return n};Object.defineProperty(n,"__esModule",{value:true});const r=i(t(87));function issueCommand(e,n,t){const i=new Command(e,n,t);process.stdout.write(i.toString()+r.EOL)}n.issueCommand=issueCommand;function issue(e,n=""){issueCommand(e,{},n)}n.issue=issue;const o="::";class Command{constructor(e,n,t){if(!e){e="missing.command"}this.command=e;this.properties=n;this.message=t}toString(){let e=o+this.command;if(this.properties&&Object.keys(this.properties).length>0){e+=" ";let n=true;for(const t in this.properties){if(this.properties.hasOwnProperty(t)){const i=this.properties[t];if(i){if(n){n=false}else{e+=","}e+=`${t}=${escapeProperty(i)}`}}}}e+=`${o}${escapeData(this.message)}`;return e}}function escapeData(e){return(e||"").replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A")}function escapeProperty(e){return(e||"").replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A").replace(/:/g,"%3A").replace(/,/g,"%2C")}},438:function(e,n,t){"use strict";var i=this&&this.__awaiter||function(e,n,t,i){function adopt(e){return e instanceof t?e:new t(function(n){n(e)})}return new(t||(t=Promise))(function(t,r){function fulfilled(e){try{step(i.next(e))}catch(e){r(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){r(e)}}function step(e){e.done?t(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,n||[])).next())})};Object.defineProperty(n,"__esModule",{value:true});const r=t(311);const o=t(2);const s=t(469);function setupMainServiceFiles(){var e,n,t;return i(this,void 0,void 0,function*(){const i=yield s.readAvenConfig();const c=(e=i.serviceName,e!==null&&e!==void 0?e:i.domains[0]);const u=(n=i.serviceDescription,n!==null&&n!==void 0?n:"Runtime server");const a=(t=i.startServerCommand,t!==null&&t!==void 0?t:"/usr/bin/npm start");const l=`/etc/systemd/system/${c}.service`;const d=`/var/lib/${c}`;const p=o.mkdir(`${l}.d`);const f=o.mkdir(`/opt/aven`);const h=o.mkdir(d).then(()=>o.chmod(d,448));const _=`[Unit]\nDescription=${u}\nAfter=network.target\n\n[Service]\nType=simple\nEnvironment=LISTEN_PATH="/run/${c}/sock"\nRuntimeDirectory=${c}\nWorkingDirectory=/opt/aven/${c}\nExecStart=${a}\nEnvironment=HOME="${d}"\nUser=www-data\n\n[Install]\nWantedBy=default.target\n  `;yield o.ensureFileIs(l,_);yield r.exec(`systemctl daemon-reload`);yield r.exec(`systemctl enable ${c}.service`);yield Promise.all([p,f,h])})}n.setupMainServiceFiles=setupMainServiceFiles},469:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:true});const i=t(9);let r;const o=new Promise(e=>{r=e});let s="";process.stdin.on("data",e=>{s+=e});process.stdin.on("end",()=>{const e=JSON.parse(s);if(!e.domains){throw new Error("`domains` not defined in `aven.json`.")}if(!Array.isArray(e.domains)){throw new Error("`domains` in `aven.json` is not an Array.")}if(e.domains.length<1){throw new Error("Need at least one domain defined")}i.debug("Using aven config:",e);r(e)});function readAvenConfig(){return o}n.readAvenConfig=readAvenConfig},470:function(e,n,t){"use strict";var i=this&&this.__awaiter||function(e,n,t,i){function adopt(e){return e instanceof t?e:new t(function(n){n(e)})}return new(t||(t=Promise))(function(t,r){function fulfilled(e){try{step(i.next(e))}catch(e){r(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){r(e)}}function step(e){e.done?t(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,n||[])).next())})};var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(e!=null)for(var t in e)if(Object.hasOwnProperty.call(e,t))n[t]=e[t];n["default"]=e;return n};Object.defineProperty(n,"__esModule",{value:true});const o=t(431);const s=r(t(87));const c=r(t(622));var u;(function(e){e[e["Success"]=0]="Success";e[e["Failure"]=1]="Failure"})(u=n.ExitCode||(n.ExitCode={}));function exportVariable(e,n){process.env[e]=n;o.issueCommand("set-env",{name:e},n)}n.exportVariable=exportVariable;function setSecret(e){o.issueCommand("add-mask",{},e)}n.setSecret=setSecret;function addPath(e){o.issueCommand("add-path",{},e);process.env["PATH"]=`${e}${c.delimiter}${process.env["PATH"]}`}n.addPath=addPath;function getInput(e,n){const t=process.env[`INPUT_${e.replace(/ /g,"_").toUpperCase()}`]||"";if(n&&n.required&&!t){throw new Error(`Input required and not supplied: ${e}`)}return t.trim()}n.getInput=getInput;function setOutput(e,n){o.issueCommand("set-output",{name:e},n)}n.setOutput=setOutput;function setFailed(e){process.exitCode=u.Failure;error(e)}n.setFailed=setFailed;function debug(e){o.issueCommand("debug",{},e)}n.debug=debug;function error(e){o.issue("error",e)}n.error=error;function warning(e){o.issue("warning",e)}n.warning=warning;function info(e){process.stdout.write(e+s.EOL)}n.info=info;function startGroup(e){o.issue("group",e)}n.startGroup=startGroup;function endGroup(){o.issue("endgroup")}n.endGroup=endGroup;function group(e,n){return i(this,void 0,void 0,function*(){startGroup(e);let t;try{t=yield n()}finally{endGroup()}return t})}n.group=group;function saveState(e,n){o.issueCommand("save-state",{name:e},n)}n.saveState=saveState;function getState(e){return process.env[`STATE_${e}`]||""}n.getState=getState},622:function(e){e.exports=require("path")},669:function(e){e.exports=require("util")},708:function(e,n,t){"use strict";var i=this&&this.__awaiter||function(e,n,t,i){function adopt(e){return e instanceof t?e:new t(function(n){n(e)})}return new(t||(t=Promise))(function(t,r){function fulfilled(e){try{step(i.next(e))}catch(e){r(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){r(e)}}function step(e){e.done?t(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,n||[])).next())})};Object.defineProperty(n,"__esModule",{value:true});const r=t(2);const o=t(872);const s=t(622);function setAuthorizedKeys(e,n){return i(this,void 0,void 0,function*(){const t=yield o.userHome(e);const i=s.join(t,".ssh");yield r.mkdir(i);r.ensureFileIs(s.join(i,"authorized_keys"),n.join("\n"))})}n.setAuthorizedKeys=setAuthorizedKeys;function setupRoot(e){return i(this,void 0,void 0,function*(){const n=yield o.userHome("root");const t=s.join(n,".ssh");yield r.mkdir(t);if(!e)e=[];yield Promise.all([o.fixKnownHosts(n),setAuthorizedKeys("root",e!==null&&e!==void 0?e:[])])})}n.setupRoot=setupRoot},747:function(e){e.exports=require("fs")},872:function(e,n,t){"use strict";var i=this&&this.__awaiter||function(e,n,t,i){function adopt(e){return e instanceof t?e:new t(function(n){n(e)})}return new(t||(t=Promise))(function(t,r){function fulfilled(e){try{step(i.next(e))}catch(e){r(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){r(e)}}function step(e){e.done?t(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,n||[])).next())})};Object.defineProperty(n,"__esModule",{value:true});const r=t(622);const o=t(2);const s=t(311);const c=["sudo","adm","systemd-journal"];const u=9;function userHome(e){return i(this,void 0,void 0,function*(){return e==="root"?"/root":`/home/${e}`})}n.userHome=userHome;function createAndConfigureUser(e){return i(this,void 0,void 0,function*(){const n=[];n.push("useradd");n.push("--no-user-group");n.push("--gid","users");n.push("--shell","/bin/bash");n.push("--create-home");n.push("--groups",c.join(","));n.push(e);yield s.exec(n.join(" ")).catch(n=>{if(n.code!==u)throw n;console.log(`User ${e} exists`)});const t=yield userHome(e);yield o.mkdir(`${t}/.ssh`);yield fixKnownHosts(t)})}n.createAndConfigureUser=createAndConfigureUser;function ensureKey(e,n){return i(this,void 0,void 0,function*(){yield o.ensureFileContains(`${yield userHome(e)}/.ssh/authorized_keys`,n)})}n.ensureKey=ensureKey;const a="github.com ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAq2A7hRGmdnm9tUDbO9IDSwBK6TbQa+PXYPCPy6rbTrTtw7PHkccKrpp0yVhp5HdEIcKr6pLlVDBfOLX9QUsyCOV0wzfjIJNlGEYsdlLJizHhbn2mUjvSAHQqZETYP81eFzLQNnPHt4EVVUh7VfDESU84KezmD5QlWpXLmvU31/yMf+Se8xhHTvKSCZIFImWwoG6mbUoWf9nzpIoaSjB+weqqUUmpaaasXVal72J+UX2B+2RPW3RcT0eOzQgqlJL3RKrTJvdsjE3JEAvGq3lGHSZXy28G3skua2SmVi/w4yCE6gbODqnTWlg7+wC604ydGXA8VJiS5ap43JXiUFFAaQ==";function fixKnownHosts(e){return i(this,void 0,void 0,function*(){return o.ensureFileContains(r.join(e,".ssh","known_hosts"),a)})}n.fixKnownHosts=fixKnownHosts},899:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:true});n.isGitHubAction=process.env.GITHUB_ACTIONS==="true"||process.argv.includes("--gh-actions")},947:function(e,n,t){"use strict";var i=this&&this.__awaiter||function(e,n,t,i){function adopt(e){return e instanceof t?e:new t(function(n){n(e)})}return new(t||(t=Promise))(function(t,r){function fulfilled(e){try{step(i.next(e))}catch(e){r(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){r(e)}}function step(e){e.done?t(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,n||[])).next())})};Object.defineProperty(n,"__esModule",{value:true});const r=t(285);r.addAptDependencies("cockpit");function setupCockpit(){return i(this,void 0,void 0,function*(){})}n.setupCockpit=setupCockpit}},function(e){"use strict";!function(){e.nmd=function(e){e.paths=[];if(!e.children)e.children=[];Object.defineProperty(e,"loaded",{enumerable:true,get:function(){return e.l}});Object.defineProperty(e,"id",{enumerable:true,get:function(){return e.i}});return e}}()});
//# sourceMappingURL=index.js.map