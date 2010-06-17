YUI.add("gallery-video",function(C){function A(E,D){return parseFloat(E);}C._VideoBase=C.Base.create("video-base",C.Widget,[C.WidgetParent,C.WidgetChild],{_videoNode:null,_validatePercentage:function(D){if(C.Lang.isNumber(D)===false){return false;}if(D>100||D<0){return false;}return true;},initializer:function(){},destructor:function(){},renderUI:function(){this._renderPlayer();},bindUI:function(){this._bindPlayer();},syncUI:function(){if(this.get("autoplay")===true){this.set("playing",true,{source:"self"});}},_renderPlayer:function(){},_bindPlayer:function(){this.on("volumeChange",C.bind(this._handleVolumeChange,this));this.on("currentTimeChange",C.bind(this._handleCurrentTimeChange,this));this.on("playingChange",C.bind(this._handlePlayingChange,this));},_handleCurrentTimeChange:function(){},_handleVolumeChange:function(){},_handlePlayingChange:function(){},getControlsHeight:function(){}},{ATTRS:{src:{value:"",validator:C.Lang.isString},autoplay:{value:true,validator:C.Lang.isBoolean},mimeType:{value:"",validator:C.Lang.isString},codecs:{validator:C.Lang.isString},controls:{value:false,validator:C.Lang.isBoolean},volume:{value:100,validator:function(D){return this._validatePercentage(D);},setter:A,broadcast:1},totalTime:{writeOnce:true,validator:C.Lang.isNumber,setter:A,broadcast:1},currentTime:{value:0,validator:C.Lang.isNumber,setter:A,broadcast:1},totalBytes:{writeOnce:true,validator:C.Lang.isNumber,setter:A},currentBytes:{value:0,validator:C.Lang.isNumber,setter:A},percentLoaded:{value:0,validator:function(D){return this._validatePercentage(D);},setter:A,broadcast:1},playing:{value:false,validator:C.Lang.isBoolean,broadcast:1}}});C.ObjectTag=(function(){function D(E,F){var G='<param name="'+E+'" value="'+F+'">';return G;}return{create:function(H,G,F,J,E){var I='<object height="100%" width="100%" ';if(C.UA.ie){I+='classid="'+F+'" codebase="'+J+'"';}else{I+='data="'+H+'" type="'+G+'"';}I+=">";C.Object.each(E,function(M,K){var L=D(K,M);I+=L;});I+="</object>";return I;}};})();C.mix(C.Node.DOM_EVENTS,{abort:1,canplay:1,canplaythrough:1,durationchange:1,emptied:1,ended:1,error:1,loadeddata:1,loadedmetadata:1,loadstart:1,pause:1,play:1,playing:1,progress:1,ratechang:1,readystatechange:1,seeked:1,seeking:1,stalled:1,suspend:1,timeupdate:1,volumechange:1,waiting:1});C.VideoHTML5=C.Base.create("video-html5",C._VideoBase,[C.WidgetChild],{_renderPlayer:function(){C.VideoHTML5.superclass._renderPlayer.apply(this,arguments);var F=document.createElement("video"),G=document.createElement("source"),D=this.get("contentBox"),I=this.get("src"),H=this.get("mimeType"),E=this.get("codecs");F.width=this.get("width");F.height=this.get("height");G.src=I;G.type=H+"; "+(E?'codecs="'+E:'"');if(this.get("autoplay")===true){F.autoplay="autoplay";}F.appendChild(G);D.appendChild(F);this._videoNode=D.one("video");},_bindPlayer:function(){C.VideoHTML5.superclass._bindPlayer.apply(this,arguments);var D=this._videoNode,F=C.Node.getDOMNode(D),G,E=0;this.after("percentLoadedChange",C.bind(function(H){if(H.newVal==H.prevVal){E++;}else{E=0;}if((H.newVal>=100&&G)||E>10){E=0;G.cancel();G=null;}},this));if(F.buffered){G=C.later(500,this,function(){var H=(F.buffered.end()*100)/F.duration;this.set("percentLoaded",H);},null,true);}D.after("progress",C.bind(function(I){var H=(I._event.loaded*100)/I._event.total;this.set("currentBytes",I._event.loaded);this.set("totalBytes",I._event.total);this.set("percentLoaded",H);},this));D.after("timeupdate",C.bind(function(){this.set("currentTime",F.currentTime,{source:"self"});},this));D.after("loadedmetadata",C.bind(function(H){this.set("totalTime",F.duration);},this));D.after("play",C.bind(function(){this.set("playing",true,{source:"self"});},this));D.after("pause",C.bind(function(){this.set("playing",false,{source:"self"});},this));D.after("ended",C.bind(function(){this.set("playing",false,{source:"self"});},this));D.after("volumechange",C.bind(function(){var I=F.volume,H=Math.floor(I*100);this.set("volume",H,{source:"self"});},this));},_handleCurrentTimeChange:function(D){if(D.source&&D.source=="self"){return;}C.Node.getDOMNode(this._videoNode).currentTime=D.newVal;},_handleVolumeChange:function(D){if(D.source&&D.source=="self"){return;}var E=D.newVal/100;C.Node.getDOMNode(this._videoNode).volume=E;},_handlePlayingChange:function(D){if(D.source&&D.source=="self"){return;}if(D.newVal===true){C.Node.getDOMNode(this._videoNode).play();}else{C.Node.getDOMNode(this._videoNode).pause();}},getControlsHeight:function(){return 0;}},{checkCompatibility:function(H,D){try{var G=document.createElement("video"),E=G.canPlayType(H+(D?'; codecs="'+D:'"'));if(E=="maybe"||E=="probably"){return true;}}catch(F){}return false;}});var B=new C.EventTarget();B.publish("flashEvent");C.VideoFlash=C.Base.create("video-quicktime",C._VideoBase,[C.WidgetChild],{_renderPlayer:function(){C.VideoFlash.superclass._renderPlayer.apply(this,arguments);var H=this.get("src"),G=C.Video.SWF_PLAYER_SRC,F={loop:"true",menu:"true",quality:"best",scale:"showall",salign:"tl",wmode:"opaque",bgcolor:"#000000",allowScriptAccess:"always",allowNetworking:"all",allowFullScreen:"true",flashVars:C.QueryString.stringify({file:H,playerId:this.get("id"),jsCallback:"YUI.galleryVideoListener",yuiId:C.id})},D=this.get("contentBox"),E;if(C.UA.ie){F.movie=G;}E=C.ObjectTag.create(G,"application/x-shockwave-flash",C.VideoFlash.CID,C.VideoFlash.CODEBASE,F);D.set("innerHTML",E);this._videoNode=D.one("object");},_bindPlayer:function(){C.VideoFlash.superclass._bindPlayer.apply(this,arguments);var G=this.get("id"),D=this._videoNode,E=C.Node.getDOMNode(D),F={};F.stateChange=function(J){var H=E.getTotalTime(),I=E.getTotalBytes();if(C.Lang.isNumber(H)&&C.Lang.isNumber(I)){delete F.stateChange;}this.set("totalTime",H);this.set("totalBytes",I);};F.currentTimeChange=function(H){this.set("currentTime",E.getCurrentTime(),{source:"self"});};F.bytesLoadedChange=function(H){this.set("currentBytes",E.getCurrentBytes());this.set("percentLoaded",(E.getCurrentBytes()*100)/this.get("totalBytes"));
};F.play=function(H){this.set("playing",true,{source:"self"});};F.pause=function(H){this.set("playing",false,{source:"self"});};C.VideoFlash.flashEventTarget.on("flashEvent",C.bind(function(H){if(H.id==G){F[H.event].apply(this,arguments);}},this));},_handleCurrentTimeChange:function(D){if(D.source&&D.source=="self"){return;}C.Node.getDOMNode(this._videoNode).setCurrentTime(D.newVal);},_handleVolumeChange:function(D){if(D.source&&D.source=="self"){return;}var E=D.newVal/100;C.Node.getDOMNode(this._videoNode).setVolume(E);},_handlePlayingChange:function(D){if(D.source&&D.source=="self"){D.halt();return;}if(D.newVal===true){C.Node.getDOMNode(this._videoNode).playMedia();}else{C.Node.getDOMNode(this._videoNode).pauseMedia();}},getControlsHeight:function(){return 0;}},{ATTRS:{playing:{value:true}},MIME_TYPES:["video/x-flv","video/mp4","video/quicktime","video/x-m4v"],CID:"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000",CODEBASE:"http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,115",flashEventTarget:B,checkCompatibility:function(E,D){if(C.Array.indexOf(C.VideoFlash.MIME_TYPES,E)>-1){if(D&&/avc/.test(D)===false&&E!="video/x-flv"){return false;}}else{return false;}if(!C.UA.flashMajor||C.UA.flashMajor<9){return false;}return true;}});YUI.galleryVideoListener=function(E,D){C.VideoFlash.flashEventTarget.fire("flashEvent",{id:E,event:D});};C.mix(C.Node.DOM_EVENTS,{"qt_begin":1,"qt_loadedmetadata":1,"qt_loadedfirstframe":1,"qt_canplay":1,"qt_canplaythrough":1,"qt_durationchange":1,"qt_load":1,"qt_ended":1,"qt_error":1,"qt_pause":1,"qt_play":1,"qt_progress":1,"qt_waiting":1,"qt_stalled":1,"qt_timechanged":1,"qt_volumechange":1});C.VideoQuicktime=C.Base.create("video-quicktime",C._VideoBase,[C.WidgetChild],{_useQTDOMEvents:false,_pluginStatusInterval:null,_playheadInterval:null,initializer:function(){this._useQTDOMEvents=(C.UA.ie===0&&C.UA.quicktime>7.2);if(this.get("controls")===true){var D=this.get("height");this.set("height",D+16);}},_renderPlayer:function(){var H=this.get("src"),G=this.get("mimeType"),F={showlogo:false,autoplay:this.get("autoplay"),enablejavascript:true,postdomevents:true,kioskmode:false,scale:"aspect",cache:true,controller:this.get("controls")},D=this.get("contentBox"),E;if(C.UA.ie){F.src=H;}E=C.ObjectTag.create(H,G,C.VideoQuicktime.CID,C.VideoQuicktime.CODEBASE,F);D.set("innerHTML",E);this._videoNode=D.one("object");},_bindPlayer:function(){C.VideoQuicktime.superclass._bindPlayer.apply(this,arguments);var D=this._videoNode,F=C.Node.getDOMNode(D);function E(){var I=F.GetMaxBytesLoaded(),H=this.get("totalBytes"),G=(I*100)/H;this.set("currentBytes",I);this.set("percentLoaded",G);}D.after("dblclick",C.bind(function(G){if(F.GetRate()>0){this.set("playing",true,{source:"self"});}else{this.set("playing",false,{source:"self"});}},this));if(this._useQTDOMEvents===true){if(C.Lang.isFunction(F.GetPluginStatus)&&F.GetPluginStatus()=="Complete"){this._setConstants();this.set("currentBytes",F.GetMovieSize());this.set("percentLoaded",100);}else{D.on("qt_loadedmetadata",C.bind(function(){this._setConstants();},this));D.on("qt_progress",C.bind(E,this));D.on("qt_load",C.bind(E,this));}D.on("qt_volumechange",C.bind(function(){var I=F.GetVolume(),G=256,H=Math.floor((I/G)*100);this.set("volume",H,{source:"self"});},this));}else{this._startPluginStatusInterval();}},_startPluginStatusInterval:function(){if(!this._pluginStatusInterval){var D=C.Node.getDOMNode(this._videoNode);this._pluginStatusInterval=C.later(100,this,function(){try{var E=D.GetPluginStatus(),H=D.GetMaxBytesLoaded(),G=this.get("totalBytes");this.set("currentBytes",H);this.set("percentLoaded",(H*100)/G);if(E=="Loading"){}else{if(E=="Playable"||E=="Complete"){this._clearPluginStatusInterval();this._setConstants();}}}catch(F){}},null,true);}},_clearPluginStatusInterval:function(){this._pluginStatusInterval.cancel();this._pluginStatusInterval=null;},_startPlayheadInterval:function(){if(!this._playheadInterval){var D=C.Node.getDOMNode(this._videoNode);this._playheadInterval=C.later(300,this,function(){var G=this.get("timeScale"),H,F,E;if(!G){return;}H=D.GetTime();F=D.GetRate();E=this.get("playing");if(E===true&&F===0&&H>0){this.set("playing",false,{source:"self"});}else{if(E===false&&F!==0){this.set("playing",true,{source:"self"});}}this.set("currentTime",H/G,{source:"self"});},null,true);}},_clearPlayheadInterval:function(){this._playheadInterval.cancel();this._playheadInterval=null;},_setConstants:function(){var F=C.Node.getDOMNode(this._videoNode),E=F.GetTimeScale(),G=F.GetDuration()/E,D=F.GetMovieSize();this.set("timeScale",E);this.set("totalTime",G);this.set("totalBytes",D);},_handleCurrentTimeChange:function(E){if(E.source&&E.source=="self"){return;}var D=this.get("timeScale");C.Node.getDOMNode(this._videoNode).SetTime(Math.ceil(E.newVal*D));},_handleVolumeChange:function(F){if(F.source&&F.source=="self"){return;}var D=256,E=F.newVal/100,G=Math.floor(D*E);C.Node.getDOMNode(this._videoNode).SetVolume(G);},_handlePlayingChange:function(E){var D=E.newVal;if(D===E.prevVal){E.stopPropagation();return;}if(D===true){this._startPlayheadInterval();}else{this._clearPlayheadInterval();}if(E.source&&E.source=="self"){return;}if(D===true){C.Node.getDOMNode(this._videoNode).Play();}else{C.Node.getDOMNode(this._videoNode).Stop();}},getControlsHeight:function(){return 16;}},{ATTRS:{timeScale:{validator:C.Lang.isNumber,writeOnce:true,readOnly:true}},MIME_TYPES:["video/quicktime","video/x-msvideo","video/msvideo","video/avi","video/flc","video/x-mpeg","video/mpeg","video/3gpp","video/3gpp2","video/sd-video","video/mp4","video/x-m4v"],CID:"clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B",CODEBASE:"http://www.apple.com/qtactivex/qtplugin.cab",checkCompatibility:function(I){if(C.Array.indexOf(C.VideoQuicktime.MIME_TYPES,I)<0){return false;}var G,F,D,H;if(!C.UA.quicktime){try{if(navigator.mimeTypes){G=navigator.mimeTypes["video/quicktime"];if(G&&G.enabledPlugin){G=G.enabledPlugin;}}if(G){D=G.version||G.name.match(/[^\w\d][\d][\d\.\_,\-]*/gi)[0];
}else{if(window.ActiveXObject){H=new window.ActiveXObject("QuickTime.QuickTime");D=H.GetQuickTimeVersion();}}if(D){F=D.split(/[\.\_,\-]/g);D=F[0]+"."+F[1]+F[2];C.UA.quicktime=parseFloat(D);}}catch(E){}}if(!C.UA.quicktime||C.UA.quicktime<7){return false;}return true;}});C.VideoControls=C.Base.create("video-controls",C.Widget,[C.WidgetParent,C.WidgetChild],{_totalTime:null,_progressSlider:null,_volumeSlider:null,_seeking:false,initializer:function(){},destructor:function(){},renderUI:function(){this.renderControls();},bindUI:function(){this.bindControls();},syncUI:function(){this.syncControls();},_toggleVolume:function(){var D=this.get("contentBox"),F=this._volumeSlider.get("boundingBox"),E=new C.Anim({node:F,duration:0.3,easing:C.Easing.easeOut});if(D.hasClass("video-volume-showing")===true){E.set("to",{height:0});}else{E.set("to",{height:106});}E.after("end",function(){D.toggleClass("video-volume-showing");});E.run();},renderControls:function(){var D=this.get("contentBox"),F=this.get("width"),E,H,G;D.set("innerHTML",'<button class="yui3-video-controls-button yui3-video-controls-button-play">&nbsp;</button>'+'<button class="yui3-video-controls-button yui3-video-controls-button-pause">&nbsp;</button>'+'<button class="yui3-video-controls-button yui3-video-controls-button-stop">&nbsp;</button>'+'<span class="yui3-video-controls-current-time">00:00:00</span>'+'<span class="yui3-video-controls-total"><span class="yui3-video-controls-loaded"></span></span>'+'<span class="yui3-video-controls-remaining-time">00:00:00</span>'+'<button class="yui3-video-controls-button yui3-video-controls-button-volume">&nbsp;</button>'+'<span class="yui3-video-controls-volume-slider"></span>');E=D.one(".yui3-video-controls-current-time");H=D.one(".yui3-video-controls-remaining-time");G=Math.floor(F-parseInt(E.getStyle("left"),10)-parseInt(E.getComputedStyle("width"),10)-parseInt(H.getStyle("right"),10)-parseInt(H.getComputedStyle("width"),10)-24);this._progressSlider=new C.Slider({min:0,max:G,length:G,thumbUrl:C.VideoControls.PLAYHEAD_IMG});this._progressSlider.render(D.one(".yui3-video-controls-total"));this._volumeSlider=new C.Slider({min:100,max:0,length:100,value:100,thumbUrl:C.VideoControls.VOLUME_IMG,axis:"y",boundingBox:D.one(".yui3-video-controls-volume-slider")});this._volumeSlider.render();},bindControls:function(){var H=this.get("parent"),F=H.getPlayer(),D=this.get("contentBox"),G=D.one(".yui3-video-controls-loaded"),I=D.one(".yui3-video-controls-current-time"),E=D.one(".yui3-video-controls-remaining-time"),J="";if(F){J=F.name+":";}H.after(J+"totalTimeChange",C.bind(function(K){this._totalTime=K.newVal;},this));H.after(J+"currentTimeChange",C.bind(function(L){var K=this._totalTime-L.newVal;I.set("innerHTML",C.VideoControls.secondsToTimestamp(L.newVal));E.set("innerHTML",C.VideoControls.secondsToTimestamp(K));if(this._seeking===false){this._progressSlider.set("value",Math.ceil((L.newVal*this._progressSlider.get("max"))/this._totalTime));}},this));H.after(J+"percentLoadedChange",C.bind(function(K){G.setStyle("width",Math.ceil((K.newVal/100)*this._progressSlider.get("max"))+"px");},this));D.one(".yui3-video-controls-button-play").after("click",function(K){F.set("playing",true);});D.one(".yui3-video-controls-button-pause").after("click",function(K){F.set("playing",false);});D.one(".yui3-video-controls-button-stop").after("click",function(K){F.set("playing",false);F.set("currentTime",0);});D.one(".yui3-video-controls-button-volume").after("click",C.bind(function(K){this._toggleVolume();},this));this._progressSlider.rail.on("mousedown",C.bind(function(K){this._seeking=true;},this));this._progressSlider.rail.on("mouseup",C.bind(function(L){var K=(this._progressSlider.get("value")*this._totalTime)/this._progressSlider.get("max");F.set("currentTime",K);this._seeking=false;},this));this._volumeSlider.after("valueChange",function(K){F.set("volume",K.newVal);});},syncControls:function(){}},{ATTRS:{height:{value:32}},PLAYHEAD_IMG:"assets/playhead_slider.png",VOLUME_IMG:"assets/volume_slider.png",BUTTON_WIDTH:32,secondsToTimestamp:function(I){var G=Math.floor(I),F=G/3600,D=G/60,E=I-(Math.floor(D)*60),H="";H+=(F>=10?Math.floor(F):"0"+Math.floor(F))+":";H+=(D>=10?Math.floor(D):"0"+Math.floor(D))+":";H+=(E>=10?Math.floor(E):"0"+Math.floor(E));return H;}});C.Video=C.Base.create("video",C.Widget,[C.WidgetParent],{_validateMedia:function(D){if(C.Lang.isArray(D)===true){return true;}return false;},_validateCustomControls:function(D){if(D===false){return true;}if(D instanceof C.VideoControls){return true;}return false;},initializer:function(){if(this.get("autoCreate")===true){this._findPlayer();this._setControls();}},_findPlayer:function(){var I=this.get("media"),J={html5:C.VideoHTML5,flash:C.VideoFlash,quicktime:C.VideoQuicktime},H=[],F,D,G,E;C.Array.each(I,C.bind(function(K,L){C.Array.some(C.Video.RENDER_ORDER,function(N,O){var M=J[N],P=M.checkCompatibility(K.mimeType,K.codecs);H[L]=(P===true)?O:false;return P;});},this));C.Array.each(H,C.bind(function(L,K){if(C.Lang.isNumber(L)&&(F===undefined||L<F)){F=L;D=K;}else{if(L===0&&!C.Lang.isNumber(D)){D=K;}}},this));if(C.Lang.isNumber(D)){E=J[C.Video.RENDER_ORDER[F]];G=I[D];G.width=this.get("width");G.height=this.get("height");G.controls=(this.get("customControls")===false);this.add((new E(G)));return true;}return false;},_setControls:function(){var E=this.get("customControls"),F=this.getPlayer(),D=this.get("height");if(!F){return;}if(E===false){this.set("height",D+F.getControlsHeight());return;}if(!E){E=new C.VideoControls({width:this.get("width")});this.set("customControls",E);}this.add(E);this.set("height",D+E.get("height"));},_syncPlaying:function(E){var D=this.get("contentBox");if(E===true){D.addClass("video-playing");D.removeClass("video-paused");}else{D.removeClass("video-playing");D.addClass("video-paused");}},bindUI:function(){var D=this.getPlayer();if(D){D.after("playingChange",C.bind(function(E){this._syncPlaying(E.newVal);},this));}},syncUI:function(){var D=this.getPlayer();
if(D){this._syncPlaying(D.get("playing"));}},getPlayer:function(){var D=null;this.some(function(F,E){if(F instanceof C._VideoBase){D=F;return true;}},this);return D;}},{SWF_PLAYER_SRC:"assets/player.swf",RENDER_ORDER:["html5","quicktime","flash"],ATTRS:{media:{validator:function(D){return this._validateMedia(D);}},autoCreate:{value:true,validator:C.Lang.isBoolean},customControls:{value:null,writeOnce:true,validator:function(D){return this._validateCustomControls(D);}}}});},"@VERSION@",{requires:["node","node-event-html5","widget","widget-parent","widget-child","swfdetect","querystring-stringify","plugin","anim"]});