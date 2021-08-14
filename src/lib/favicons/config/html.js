const appleIconSizes=[57,60,72,76,114,120,144,152,167,180,1024],appleStartupItems=[{dwidth:320,dheight:568,pixelRatio:2,orientation:"portrait",width:640,height:1136},{dwidth:375,dheight:667,pixelRatio:2,orientation:"portrait",width:750,height:1334},{dwidth:414,dheight:896,pixelRatio:2,orientation:"portrait",width:828,height:1792},{dwidth:375,dheight:812,pixelRatio:3,orientation:"portrait",width:1125,height:2436},{dwidth:414,dheight:736,pixelRatio:3,orientation:"portrait",width:1242,height:2208},{dwidth:414,dheight:896,pixelRatio:3,orientation:"portrait",width:1242,height:2688},{dwidth:768,dheight:1024,pixelRatio:2,orientation:"portrait",width:1536,height:2048},{dwidth:834,dheight:1112,pixelRatio:2,orientation:"portrait",width:1668,height:2224},{dwidth:834,dheight:1194,pixelRatio:2,orientation:"portrait",width:1668,height:2388},{dwidth:1024,dheight:1366,pixelRatio:2,orientation:"portrait",width:2048,height:2732},{dwidth:810,dheight:1080,pixelRatio:2,orientation:"portrait",width:1620,height:2160},{dwidth:320,dheight:568,pixelRatio:2,orientation:"landscape",width:1136,height:640},{dwidth:375,dheight:667,pixelRatio:2,orientation:"landscape",width:1334,height:750},{dwidth:414,dheight:896,pixelRatio:2,orientation:"landscape",width:1792,height:828},{dwidth:375,dheight:812,pixelRatio:3,orientation:"landscape",width:2436,height:1125},{dwidth:414,dheight:736,pixelRatio:3,orientation:"landscape",width:2208,height:1242},{dwidth:414,dheight:896,pixelRatio:3,orientation:"landscape",width:2688,height:1242},{dwidth:768,dheight:1024,pixelRatio:2,orientation:"landscape",width:2048,height:1536},{dwidth:834,dheight:1112,pixelRatio:2,orientation:"landscape",width:2224,height:1668},{dwidth:834,dheight:1194,pixelRatio:2,orientation:"landscape",width:2388,height:1668},{dwidth:1024,dheight:1366,pixelRatio:2,orientation:"landscape",width:2732,height:2048},{dwidth:810,dheight:1080,pixelRatio:2,orientation:"landscape",width:2160,height:1620}],coastSizes=[228],faviconSizes=[16,32,48];function hasAll(t){return function(i){return Array.isArray(i)?t.every((t=>i.includes(t))):i}}function hasAny(t){return function(i){return Array.isArray(i)?t.some((t=>i.include(t))):i}}function ctxHasIcons(t,i){return Array.isArray(t)?t.includes(i):t}const allAppleIcons=hasAll(appleIconSizes.map((t=>`apple-touch-icon-${t}x${t}.png`))),anyAppleIcon=hasAny(appleIconSizes.map((t=>`apple-touch-icon-${t}x${t}.png`)));function appleIconGen(t,{relative:i,icons:e}){const a=`apple-touch-icon-${t}x${t}.png`;return ctxHasIcons(e.appleIcon,a)?`<link rel="apple-touch-icon" sizes="${t}x${t}" href="${i(a)}">`:""}function appleStartupGen({width:t,height:i,dwidth:e,dheight:a,pixelRatio:n,orientation:o},{relative:h,icons:p}){const r=`apple-touch-startup-image-${t}x${i}.png`;return ctxHasIcons(p.appleStartup,r)?`<link rel="apple-touch-startup-image" media="(device-width: ${e}px) and (device-height: ${a}px) and (-webkit-device-pixel-ratio: ${n}) and (orientation: ${o})" href="${h(r)}">`:""}function coastGen(t,{relative:i,icons:e}){const a=`coast-${t}x${t}.png`;return ctxHasIcons(e.coast,a)?`<link rel="icon" type="image/png" sizes="${t}x${t}" href="${i(a)}">`:""}function faviconGen(t,{relative:i,icons:e}){const a=`favicon-${t}x${t}.png`;return ctxHasIcons(e.favicons,a)?`<link rel="icon" type="image/png" sizes="${t}x${t}" href="${i(a)}">`:""}module.exports={android:[({relative:t,loadManifestWithCredentials:i})=>i?`<link rel="manifest" href="${t("manifest.json")}" crossOrigin="use-credentials">`:`<link rel="manifest" href="${t("manifest.json")}">`,()=>'<meta name="mobile-web-app-capable" content="yes">',({theme_color:t,background:i})=>`<meta name="theme-color" content="${t||i}">`,({appName:t})=>t?`<meta name="application-name" content="${t}">`:'<meta name="application-name">'],appleIcon:[...appleIconSizes.map((t=>i=>appleIconGen(t,i))),()=>'<meta name="apple-mobile-web-app-capable" content="yes">',({appleStatusBarStyle:t})=>`<meta name="apple-mobile-web-app-status-bar-style" content="${t}">`,({appShortName:t,appName:i})=>t||i?`<meta name="apple-mobile-web-app-title" content="${t||i}">`:'<meta name="apple-mobile-web-app-title">'],appleStartup:appleStartupItems.map((t=>i=>appleStartupGen(t,i))),coast:coastSizes.map((t=>i=>coastGen(t,i))),favicons:[({relative:t,icons:i})=>ctxHasIcons(i.favicons,"favicon.ico")?`<link rel="shortcut icon" href="${t("favicon.ico")}">`:"",...faviconSizes.map((t=>i=>faviconGen(t,i)))],windows:[({background:t})=>`<meta name="msapplication-TileColor" content="${t}">`,({relative:t,icons:i})=>ctxHasIcons(i.windows,"mstile-144x144.png")?`<meta name="msapplication-TileImage" content="${t("mstile-144x144.png")}">`:"",({relative:t})=>`<meta name="msapplication-config" content="${t("browserconfig.xml")}">`],yandex:[({relative:t})=>`<link rel="yandex-tableau-widget" href="${t("yandex-browser-manifest.json")}">`]};
