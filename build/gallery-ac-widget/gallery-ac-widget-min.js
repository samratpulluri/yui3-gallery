YUI.add("gallery-ac-widget",function(B){function D(){D.superclass.constructor.apply(this,arguments);}var A="_bound",E="selectedIndex",I="_selectedIndex",G="_originalValue",C=B.Array.each,F="queryValue";B.ACWidget=B.extend(D,B.Widget,{initializer:function(){var J=this;J.after({queryChanged:J.syncUI,dataChanged:J.syncUI});J.hide();},renderUI:function(){var J=this.get("ac");if(!J){return;}J.get("host").insert(this.get("boundingBox"),"after");this.setSize();return;},setSize:function(){return this.set("width",this.get("ac").get("host").getComputedStyle("width"));},bindUI:function(M){var N=this,J=N.get("contentBox"),L=N.get("ac"),K=B.stamp(N)+"|";if(M&&L!==M&&N[A]){B.detach(K);N[A]=0;}M=M||L;if(M&&!N[A]){N[A]=1;J.delegate(K+"click",N.click,"li",N);B.on(K+"click",N.hide,document);M.on(K+"ac:load",function(O){N.setAttrs({query:O.query,data:O.results}).syncUI().show();});M.on(K+"ac:query",function(O){N.set("query",O.value).syncUI();});M.on(K+"ac:next",N.next,N);M.on(K+"ac:previous",N.previous,N);M.on(K+"ac:hide",N.hide,N);}return N;},syncUI:function(){var J=this,L=J.get("data"),K=J.get("query");if(!L){return J;}J[I]=-1;J[G]="";J.get("contentBox").set("content",J.getListMarkup(L));return J;},getListMarkup:function(M){var L=this,J=L.get("listTpl"),K=[];C(M,function(N){K.push(L.getItemMarkup(N));});return J.replace(/\{list\}/g,K.join(""));},getItemMarkup:function(J){return this.get("itemTpl").replace(/\{term\}/g,J).replace(/\{hilite\}/g,this.getHiliteMarkup(J));},getHiliteMarkup:function(M){var K=this,J=H(K.get("query")).split(/\s+/);out=M;var L=new RegExp("("+J.join("|")+")","g"),N=K.get("hiliteTpl").replace(/\$/g,"\\$").replace(/\{term\}/g,"$1");return out.replace(L,N);},next:function(){var J=this;return(J.get("visible")?J.selectNext():J.get("data")?J.show():J);},selectNext:function(){return this.set(E,this.get(E)+1);},selectPrevious:function(){return this.set(E,this.get(E)-1);},previous:function(){return this.get("visible")?this.selectPrevious():this;},item:function(J){return this.get("contentBox").one(this.get("itemSelector").replace(/\{n\}/g,H(J+1)));},click:function(L){var J=this,K=J.get("ac"),M=L.currentTarget.get("text");K.set(F,M);J[I]=-1;J._currentValue=M;K.get("host").focus();J.hide();}},{NAME:"ACWidget",ATTRS:{ac:{setter:function(J){if(!this[A]){return;}this.bindUI(J);},validator:function(J){return true;}},data:{validator:function(J){return J&&J.length>0;}},query:{value:""},listTpl:{value:"<ul>{list}</ul>"},itemTpl:{value:"<li>{hilite}</li>"},itemSelector:{value:"ul li:nth-child({n})"},hiliteTpl:{value:"<em>{term}</em>"}}});D.ATTRS[E]={value:-1,validator:function(J){var K=this.get("data");return K&&B.Lang.isNumber(J);},getter:function(){return this[I];},setter:function(L){var Q=this,N=Q.get(E),O=Q.get("data"),J=O&&O.length,P=Q.get("ac"),K=this.getClassName("selected");if(isNaN(N)){N=-1;}if(!O||!J){return;}while(L<-1){L+=J+1;}L=(L+1)%(J+1)-1;N=(N+1)%(J+1)-1;Q[I]=L;if(N===-1){Q[G]=P.get(F);}if(N===L){return;}var R=Q.get("contentBox").one("."+K);if(R){R.removeClass(K);}if(L===-1){P.set(F,this[G]);}else{var M=Q.item(L);if(M){M.addClass(K);}P.set(F,O[L]);}return L;}};function H(J){return(""+J).replace(/([\^\/.*+?|()[\]{}\\])/g,"\\$1");}},"@VERSION@",{requires:["widget","gallery-ac-plugin"]});