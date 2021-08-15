"use strict";const path=require("path"),url=require("url"),fs=require("fs"),{promisify:promisify}=require("util"),color=require("tinycolor2"),colors=require("colors"),jsonxml=require("jsontoxml"),sizeOf=require("image-size"),Jimp=require("jimp"),sharp=require("sharp"),xml2js=require("xml2js"),PLATFORM_OPTIONS=require("./config/platform-options.json");module.exports=function(e){function r(r,i=!1){return url.resolve(!i&&e.path&&function(e){return"/"===e.substr(-1)?e:`${e}/`}(e.path)||"",r)}function i(r,i){if(e.logging){const{magenta:e,green:r,yellow:t}=colors;i=(i=i.replace(/ \d+(x\d+)?/g,(r=>e(r)))).replace(/#([0-9a-f]{3}){1,2}/g,(r=>e(r)))}}const t={ensureSize(e,r,t){let o=e.size.width,n=e.size.height;return o>=r&&n>=t?Promise.resolve(e.file):(r>t?(n=Math.round(n*(r/o)),o=r):(o=Math.round(o*(t/n)),n=t),i(0,`Resizing SVG to ${o}x${n}`),this.resize(e.file,o,n))},resize:(e,r,i)=>new Promise(((t,o)=>{xml2js.parseString(e,((e,n)=>{if(e)return o(e);n.svg.$.width=r,n.svg.$.height=i;const s=(new xml2js.Builder).buildObject(n);t(Buffer.from(s))}))}))};return{General:{source(e){if(i(0,"Source type is "+typeof e),!Buffer.isBuffer(e))return"string"==typeof e?promisify(fs.readFile)(e).then(this.source.bind(this)):Array.isArray(e)&&!e.some(Array.isArray)?e.length?Promise.all(e.map(this.source.bind(this))).then((e=>[].concat(...e))):Promise.reject(new Error("No source provided")):Promise.reject(new Error("Invalid source type provided"));try{return Promise.resolve([{size:sizeOf(e),file:e}])}catch(e){return Promise.reject(new Error("Invalid image buffer"))}},preparePlatformOptions(r){const i=e.icons[r],t="object"!=typeof i||Array.isArray(i)?{}:i;for(const e of Object.keys(t))if(!(e in PLATFORM_OPTIONS)||!PLATFORM_OPTIONS[e].platforms.includes(r))throw new Error(`Unsupported option '${e}' on platform '${r}'`);for(const e of Object.keys(PLATFORM_OPTIONS)){const i=PLATFORM_OPTIONS[e],{platforms:o,defaultTo:n}=i;!(e in t)&&o.includes(r)&&(t[e]=r in i?i[r]:n)}return!0===t.background&&(t.background=e.background),t}},HTML:{render:i=>i(Object.assign({},e,{relative:r}))},Files:{create(t,o){if(i(0,`Creating file: ${o}`),"manifest.json"===o)t.name=e.appName,t.short_name=e.appShortName||e.appName,t.description=e.appDescription,t.dir=e.dir,t.lang=e.lang,t.display=e.display,t.orientation=e.orientation,t.scope=e.scope,t.start_url=e.start_url,t.background_color=e.background,t.theme_color=e.theme_color,t.icons.forEach((i=>i.src=r(i.src,e.manifestRelativePaths))),t=JSON.stringify(t,null,2);else if("manifest.webapp"===o)t.version=e.version,t.name=e.appName,t.description=e.appDescription,t.developer.name=e.developerName,t.developer.url=e.developerURL,t.icons=Object.keys(t.icons).reduce(((i,o)=>Object.assign(i,{[o]:r(t.icons[o],e.manifestRelativePaths)})),{}),t=JSON.stringify(t,null,2);else if("browserconfig.xml"===o)t[0].children[0].children[0].children.map((i=>{"TileColor"===i.name?i.text=e.background:i.attrs.src=r(i.attrs.src,e.manifestRelativePaths)})),t=jsonxml(t,{prettyPrint:!0,xmlHeader:!0,indent:"  "});else{if("yandex-browser-manifest.json"!==o)return Promise.reject(`Unknown format of file ${o}.`);t.version=e.version,t.api_version=1,t.layout.logo=r(t.layout.logo,e.manifestRelativePaths),t.layout.color=e.background,t=JSON.stringify(t,null,2)}return Promise.resolve({name:o,contents:t})}},Images:{create:e=>(i(0,`Creating empty ${e.width}x${e.height} canvas with ${e.transparent?"transparent":e.background} background`),Jimp.create(e.width,e.height,e.transparent?0:function(e){const{r:r,g:i,b:t,a:o}=color(e).toRgb();return Jimp.rgbaToInt(r,i,t,255*o)}(e.background))),render(r,o,n){i(0,`Find nearest icon to ${o.width}x${o.height} with offset ${n}`);const s=o.width-2*n,a=o.height-2*n,l=r.find((e=>"svg"===e.size.type));let c=null;if(l){const e={r:0,g:0,b:0,alpha:0};i(0,`Rendering SVG to ${s}x${a}`),c=t.ensureSize(l,s,a).then((r=>sharp(r).resize({background:e,width:s,height:a,fit:sharp.fit.contain}).toBuffer())).then(Jimp.read)}else{const t=Math.max(s,a);let o=r[0],n=Math.max(o.size.width,o.size.height);for(const e of r){const r=Math.max(e.size.width,e.size.height);(n>r||n<t)&&r>=t&&(o=e,n=r)}i(0,`Resizing PNG to ${s}x${a}`),c=Jimp.read(o.file).then((r=>r.contain(s,a,Jimp.HORIZONTAL_ALIGN_CENTER|Jimp.VERTICAL_ALIGN_MIDDLE,e.pixel_art&&s>=r.bitmap.width&&a>=r.bitmap.height?Jimp.RESIZE_NEAREST_NEIGHBOR:null)))}return c.then((e=>e))},mask:Jimp.read(path.join(__dirname,"mask.png")),overlayGlow:Jimp.read(path.join(__dirname,"overlay-glow.png")),overlayShadow:Jimp.read(path.join(__dirname,"overlay-shadow.png")),composite(e,r,t,o,n){if(t.mask)return i(0,"Masking composite image on circle"),Promise.all([this.mask,this.overlayGlow,this.overlayShadow]).then((([i,s,a])=>(e.mask(i.clone().resize(n,Jimp.AUTO),0,0),t.overlayGlow&&e.composite(s.clone().resize(n,Jimp.AUTO),0,0),t.overlayShadow&&e.composite(a.clone().resize(n,Jimp.AUTO),0,0),t=Object.assign({},t,{mask:!1}),this.composite(e,r,t,o,n))));if(i(0,`Compositing favicon on ${t.width}x${t.height} canvas with offset ${o}`),e.composite(r,o,o),t.rotate){const r=90;i(0,`Rotating image by ${r}`),e.rotate(r,!1)}return e.getBufferAsync(Jimp.MIME_PNG)}}}};