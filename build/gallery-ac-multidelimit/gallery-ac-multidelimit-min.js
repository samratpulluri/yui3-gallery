<<<<<<< HEAD
YUI.add("gallery-ac-multidelimit",function(h){var c="host",g="queryDelimiter",f="value",b="valueChange",a="_parseValue",d="_updateValue",e="_onInputBlur";h.ACMultiQueryDelim=h.Base.create("ac-multidelim",h.Plugin.Base,[],{_beforeParseValue:function(i){return new h.Do.Prevent();},_findLastDelimiter:function(l,k){if(!h.Lang.isArray(k)){return k;}var i=0,j;h.Array.each(k,function(n){var m=l.lastIndexOf(n);if(m>i){i=m;j=n;}});return j;},_newParseValue:function(i){var j=this.get(c).get(g);i=i||"";j=this._findLastDelimiter(i,j);if(h.Lang.isString(j)){i=i.split(j);i=i[i.length-1];}return new h.Do.AlterReturn("",h.Lang.trimLeft(i));},_newUpdateValue:function(j){var l=this.get(c),m=l.get(g),k,i,n;j=h.Lang.trimLeft(j);if(m){if(h.Lang.isString(m)){k=h.Lang.trim(m);n=h.Array.map(h.Lang.trim(l.get(f)).split(m),h.Lang.trim);i=n.length;if(i>1){n[i-1]=j;j=n.join(k+" ");}j=j+k+" ";}else{if(h.Lang.isArray(m)){}}}l.set(f,j);return new h.Do.Prevent();},_newOnInputBlur:function(n){var p=this.get(c),j=p.get(g),l,m,k,o;function q(s,r){while((s=h.Lang.trimRight(s))&&(m=s.length-r.length)&&s.lastIndexOf(r)===m){s=s.substring(0,m);}return s;}function i(t,r){var s=q(k,h.Lang.trimRight(t));if(s==k){l[r]=true;}else{l[r]=false;}k=s;}if(j&&!p.get("allowTrailingDelimiter")){o=k=p._inputNode.get(f);if(j){if(h.Lang.isString(j)){j=h.Lang.trimRight(j);k=q(k,j);}else{if(h.Lang.isArray(j)){l=h.Array.map(j,function(){return false;});while(h.Array.indexOf(l,false)>-1){h.Array.each(j,i);}}}}else{k=h.Lang.trimRight(k);}if(k!==o){p.set(f,k);}}return new h.Do.Prevent();},_onValueChange:function(k){if(!k.newVal||(k.src&&k.src=="ui")){return;}var l=k.newVal,j=this.get(c),i;i=this.getCompletedStr(k.prevVal,l,j.get(g));if(i){k.newVal=i;}else{k.newVal=l;}},getCompletedStr:function(l,j,m){var k=this._findLastDelimiter(l,m),i;if(k){i=l.split(k);i.pop();i.push(j);return i.join(k);}},initializer:function(){this.doBefore(a,this._beforeParseValue);this.doAfter(a,this._newParseValue);this.doBefore(d,this._newUpdateValue);this.doBefore(e,this._newOnInputBlur);this.doBefore(b,this._onValueChange);}},{NS:"multiQueryDelim"});},"@VERSION@",{requires:["autocomplete-list","plugin","base-build"]});
=======
YUI.add("gallery-ac-multidelimit",function(h){var c="host",g="queryDelimiter",f="value",b="valueChange",a="_parseValue",d="_updateValue",e="_onInputBlur";h.ACMultiQueryDelim=h.Base.create("ac-multidelim",h.Plugin.Base,[],{_beforeParseValue:function(i){return new h.Do.Prevent();},_findLastDelimiter:function(l,k){if(!h.Lang.isArray(k)){return k;}var i=0,j;h.Array.each(k,function(n){var m=l.lastIndexOf(n);if(m>i){i=m;j=n;}});return j;},_newParseValue:function(i){var j=this.get(c).get(g);i=i||"";j=this._findLastDelimiter(i,j);if(h.Lang.isString(j)){i=i.split(j);i=i[i.length-1];}return new h.Do.AlterReturn("",h.Lang.trimLeft(i));},_newUpdateValue:function(j){var l=this.get(c),m=l.get(g),k,i,n;j=h.Lang.trimLeft(j);if(m){if(h.Lang.isString(m)){k=h.Lang.trim(m);n=h.Array.map(h.Lang.trim(l.get(f)).split(m),h.Lang.trim);i=n.length;if(i>1){n[i-1]=j;j=n.join(k+" ");}j=j+k+" ";}else{if(h.Lang.isArray(m)){}}}l.set(f,j);return new h.Do.Prevent();},_newOnInputBlur:function(n){var p=this.get(c),j=p.get(g),l,m,k,o;function q(s,r){while((s=h.Lang.trimRight(s))&&(m=s.length-r.length)&&s.lastIndexOf(r)===m){s=s.substring(0,m);}return s;}function i(t,r){var s=q(k,h.Lang.trimRight(t));if(s==k){l[r]=true;}else{l[r]=false;}k=s;}if(j&&!p.get("allowTrailingDelimiter")){o=k=p._inputNode.get(f);if(j){if(h.Lang.isString(j)){j=h.Lang.trimRight(j);k=q(k,j);}else{if(h.Lang.isArray(j)){l=h.Array.map(j,function(){return false;});while(h.Array.indexOf(l,false)>-1){h.Array.each(j,i);}}}}else{k=h.Lang.trimRight(k);}if(k!==o){p.set(f,k);}}return new h.Do.Prevent();},_onValueChange:function(k){if(!k.newVal||(k.src&&k.src=="ui")){return;}var l=k.newVal,j=this.get(c),i;i=this.getCompletedStr(k.prevVal,l,j.get(g));if(i){k.newVal=i;}else{k.newVal=l;}},getCompletedStr:function(l,j,m){var k=this._findLastDelimiter(l,m),i;if(k){i=l.split(k);i.pop();i.push(j);return i.join(k);}},initializer:function(){this.doBefore(a,this._beforeParseValue);this.doAfter(a,this._newParseValue);this.doBefore(d,this._newUpdateValue);this.doBefore(e,this._newOnInputBlur);this.doBefore(b,this._onValueChange);}},{NS:"multiQueryDelim"});},"gallery-2011.02.02-21-07",{requires:["autocomplete-list","plugin","base-build"]});
>>>>>>> 2aa48a435037fdc52cf6a95da12b5d2739188817
