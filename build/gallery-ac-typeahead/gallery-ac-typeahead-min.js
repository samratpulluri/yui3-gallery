<<<<<<< HEAD
YUI.add("gallery-ac-typeahead",function(d){var a="host",e="inputNode",b="value",c="queryDelimiter";d.ACTypeAhead=d.Base.create("ac-typeahead",d.Plugin.Base,[],{_setTypeAheadValue:function(i){if(!this._userInput){return;}var h=this.get(a),g=h.get(e),f=g.get(b);this._taNode.set("disabled",false);this._taNode.set(b,i);this._taNode.set("disabled",true);if(i.length>0){g.set(b,i.substr(0,f.length));}},_afterResults:function(i){var g=i.results[0],h=this.get(a),f="";if(i.query.length>0&&g){if(h.multiQueryDelim){f=h.multiQueryDelim.getCompletedStr(h.get(b),g.text,h.get(c))||g.text;}else{f=g.text;}}this._setTypeAheadValue(f);},_afterActiveItemChange:function(h){var g=this.get(a),f;if(h.newVal){f=h.newVal.getData("result").text;if(g.multiQueryDelim){f=g.multiQueryDelim.getCompletedStr(g.get(b),f,g.get(c));}}if(f){this._setTypeAheadValue(f);}},_afterVisChange:function(f){if(!f.newVal){this._setTypeAheadValue("");}this._userInput=false;},_afterTabKeyDown:function(j){if(!this._userInput||!this._taNode.get(b)){return;}var h=this.get(a),g,i,f;if(h.get("visible")){g=h.get("listNode");i=g.all("li.yui3-aclist-item");f=h.get("activeItem")||i.item(0);if(f){h.selectItem(f);}j.preventDefault();}h.hide();},_afterKeydown:function(f){this._userInput=true;},_initTypeAheadNode:function(){this._taNode=d.Node.create("<input disabled />");this._taContainer=d.Node.create("<div></div>");var f=this.get(a).get(e);f.get("parentNode").insert(this._taContainer,f);this._taContainer.append(this._taNode);this._tabKeyDownHandle=d.after("key",this._afterTabKeyDown,f,"down:9,13",this);this._keyDownHandle=f.after("keydown",this._afterKeydown,this);this._taContainer.setStyles({position:"absolute",zIndex:1,opacity:0.75});f.setStyles({position:"relative",zIndex:2,backgroundColor:"transparent"});},initializer:function(){this._initTypeAheadNode();this._userInput=false;this.doAfter("results",this._afterResults);this.doAfter("visibleChange",this._afterVisChange);this.doAfter("activeItemChange",this._afterActiveItemChange);},destructor:function(){this._taContainer.remove();this.get(a).get(e).setStyles({position:"",zIndex:"",backgroundColor:""});this._keyDownHandle.detach();this._tabKeyDownHandle.detach();}},{NS:"typeahead"});},"@VERSION@",{requires:["autocomplete-base","plugin","base-build"]});
=======
YUI.add("gallery-ac-typeahead",function(d){var a="host",e="inputNode",b="value",c="queryDelimiter";d.ACTypeAhead=d.Base.create("ac-typeahead",d.Plugin.Base,[],{_setTypeAheadValue:function(i){if(!this._userInput){return;}var h=this.get(a),g=h.get(e),f=g.get(b);this._taNode.set("disabled",false);this._taNode.set(b,i);this._taNode.set("disabled",true);if(i.length>0){g.set(b,i.substr(0,f.length));}},_afterResults:function(i){var g=i.results[0],h=this.get(a),f="";if(i.query.length>0&&g){if(h.multiQueryDelim){f=h.multiQueryDelim.getCompletedStr(h.get(b),g.text,h.get(c))||g.text;}else{f=g.text;}}this._setTypeAheadValue(f);},_afterActiveItemChange:function(h){var g=this.get(a),f;if(h.newVal){f=h.newVal.getData("result").text;if(g.multiQueryDelim){f=g.multiQueryDelim.getCompletedStr(g.get(b),f,g.get(c));}}if(f){this._setTypeAheadValue(f);}},_afterVisChange:function(f){if(!f.newVal){this._setTypeAheadValue("");}this._userInput=false;},_afterTabKeyDown:function(j){if(!this._userInput||!this._taNode.get(b)){return;}var h=this.get(a),g,i,f;if(h.get("visible")){g=h.get("listNode");i=g.all("li.yui3-aclist-item");f=h.get("activeItem")||i.item(0);if(f){h.selectItem(f);}j.preventDefault();}h.hide();},_afterKeydown:function(f){this._userInput=true;},_initTypeAheadNode:function(){this._taNode=d.Node.create("<input disabled />");this._taContainer=d.Node.create("<div></div>");var f=this.get(a).get(e);f.get("parentNode").insert(this._taContainer,f);this._taContainer.append(this._taNode);this._tabKeyDownHandle=d.after("key",this._afterTabKeyDown,f,"down:9,13",this);this._keyDownHandle=f.after("keydown",this._afterKeydown,this);this._taContainer.setStyles({position:"absolute",zIndex:1,opacity:0.75});f.setStyles({position:"relative",zIndex:2,backgroundColor:"transparent"});},initializer:function(){this._initTypeAheadNode();this._userInput=false;this.doAfter("results",this._afterResults);this.doAfter("visibleChange",this._afterVisChange);this.doAfter("activeItemChange",this._afterActiveItemChange);},destructor:function(){this._taContainer.remove();this.get(a).get(e).setStyles({position:"",zIndex:"",backgroundColor:""});this._keyDownHandle.detach();this._tabKeyDownHandle.detach();}},{NS:"typeahead"});},"gallery-2011.02.02-21-07",{requires:["autocomplete-base","plugin","base-build"]});
>>>>>>> 2aa48a435037fdc52cf6a95da12b5d2739188817
