YUI.add("gallery-grouped-table",function(c){var h=c.ClassNameManager.getClassName,f=h("grouped","datatable","group"),e=h("grouped","datatable","data"),g=h("grouped","datatable","group","toggle"),i=h("grouped","datatable","group","hidden"),b='<thead class="'+f+'"></thead>',l='<tbody class="'+e+'"></tbody>',d="<tr></tr>",k="<th></th>",j='<div class="yui3-datatable-liner" />',a='<a href="#" class="'+g+'"></a>';c.namespace("Plugin").GroupedDataTable=c.Base.create("grouped-datatable",c.Plugin.Base,[],{_getGroups:function(){return this._groups;},_defaultRenderGroupLabel:function(o,n,m){return o.setContent(n);},_handleGroupToggleClick:function(p){p.preventDefault();var o=p.target.ancestor("thead",false),n=o.getData("key"),m=this._groups[n].body;o.toggleClass(i);if(o.hasClass(i)){m.hide();}else{m.show();}},_addGroupThead:function(t,u){var n=c.Node.create(k),r=c.Node.create(d),m=c.Node.create(j),s=c.Node.create(a),p=c.Node.create(b),v=this.get("host"),o=v.get("columnset"),q=this.get("groupLabelRenderer");r.append(n);n.append(m);m.append(s);n.setAttribute("colspan",o.keys.length);p.append(r);q(s,u,t);return p;},_addGroupTbody:function(o,n){var m=c.Node.create(l);return m;},_renderUIGroups:function(m){var n=this.get("host"),o;c.Object.each(m,function(v,s){if(!v.records.length){v.head.remove();v.body.remove();delete m[s];return;}if(!o){o=n._theadNode;}if(!v.head){v.head=this._addGroupThead(v,s);v.head.setData("key",s);v.head.setData("firstChildId",v.records[0].get("data.id"));}if(o){o.insert(v.head,"after");}else{n._tableNode.append(v.head);}o=v.head;if(!v.body){v.body=this._addGroupTbody(v,s);}v.body.empty();var p={},t=n.get("tdValueTemplate"),r=n.get("columnset").keys,u,w,q,x;p.tbody=v.body;p.rowTemplate=n.get("trTemplate");p.columns=[];for(u=r.length-1;u>=0;--u){q=r[u];p.columns[u]={column:q,fields:q.get("field"),classes:q.get("classnames")};x=q.get("formatter");if(!c.Lang.isFunction(x)){if(!c.Lang.isString(x)){x=t;}x=c.bind(c.Lang.sub,n,x);}p.columns[u].formatter=x;}for(u=0,w=v.records.length;u<w;++u){p.record=v.records[u];p.data=p.record.get("data");p.rowindex=u;n._addTbodyTrNode(p);}o.insert(v.body,"after");o=v.body;},this);},_beforeUISetRecordset:function(r){var p=this.get("host"),o=r.get("records"),n=this.get("groupBy"),q=this._groups||{},m={};c.Object.each(m,function(s){s.records=[];});c.Array.each(o,function(u){var s,t;if(c.Lang.isFunction(n)){s=n(u);}else{s=u.getValue(n);}if(!c.Lang.isString(s)&&!c.Lang.isNumber(s)){return;}t=q[s]||{records:[]};t.records.push(u);m[s]=t;});this._groups=m;this._renderUIGroups(m);return new c.Do.Halt();},_bindUI:function(){var m=this.get("host").get("contentBox");m.delegate("click",this._handleGroupToggleClick,"."+g,this);},initializer:function(){this.doBefore("_uiSetRecordset",this._beforeUISetRecordset);this.doAfter("bindUI",this._bindUI);}},{NS:"group",ATTRS:{groups:{readOnly:true,getter:"_getGroups"},groupLabelRenderer:{valueFn:function(){return this._defaultRenderGroupLabel;}},groupBy:{}}});},"@VERSION@",{requires:["datatable-base","plugin","base-build"]});