(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{3019:function(e,n){e.exports=function(e){var n={keyword:"if then not for in while do return else elseif break continue switch and or unless when class extends super local import export from using",literal:"true false nil",built_in:"_G _VERSION assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall coroutine debug io math os package string table"},s="[A-Za-z$_][0-9A-Za-z$_]*",a={className:"subst",begin:/#\{/,end:/}/,keywords:n},i=[e.inherit(e.C_NUMBER_MODE,{starts:{end:"(\\s*/)?",relevance:0}}),{className:"string",variants:[{begin:/'/,end:/'/,contains:[e.BACKSLASH_ESCAPE]},{begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,a]}]},{className:"built_in",begin:"@__"+e.IDENT_RE},{begin:"@"+e.IDENT_RE},{begin:e.IDENT_RE+"\\\\"+e.IDENT_RE}];a.contains=i;var t=e.inherit(e.TITLE_MODE,{begin:s}),r={className:"params",begin:"\\([^\\(]",returnBegin:!0,contains:[{begin:/\(/,end:/\)/,keywords:n,contains:["self"].concat(i)}]};return{aliases:["moon"],keywords:n,illegal:/\/\*/,contains:i.concat([e.COMMENT("--","$"),{className:"function",begin:"^\\s*"+s+"\\s*=\\s*(\\(.*\\))?\\s*\\B[-=]>",end:"[-=]>",returnBegin:!0,contains:[t,r]},{begin:/[\(,:=]\s*/,relevance:0,contains:[{className:"function",begin:"(\\(.*\\))?\\s*\\B[-=]>",end:"[-=]>",returnBegin:!0,contains:[r]}]},{className:"class",beginKeywords:"class",end:"$",illegal:/[:="\[\]]/,contains:[{beginKeywords:"extends",endsWithParent:!0,illegal:/[:="\[\]]/,contains:[t]},t]},{className:"name",begin:s+":",end:":",returnBegin:!0,returnEnd:!0,relevance:0}])}}}}]);