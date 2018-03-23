/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojcomponentcore"],function(a,g){(function(){a.ib("oj.ojToolbar",g.oj.baseComponent,{widgetEventPrefix:"oj",options:{chroming:"half"},rh:function(c,b){this._super(c,b);"disabled"in b&&a.D.warn("Caller attempted to set the 'disabled' option on Toolbar, but Toolbar does not support the 'disabled' option.  See API doc.")},qc:function(){this._super();this.element.attr(a.Components.Dq,this.widgetName).addClass("oj-toolbar oj-component").attr("role","toolbar");this.sb()},
Mi:function(a,b,d){a=this.element.find(":oj-button[tabindex\x3d0]");this.Oi(b,d,{launcher:a,position:{of:"keyboard"===d?a.ojButton("widget"):b}})},_setOption:function(c,b){"disabled"===c?a.D.warn("Caller attempted to set the 'disabled' option on Toolbar, but Toolbar does not support the 'disabled' option.  See API doc.  Ignoring the call."):(this._superApply(arguments),"chroming"===c&&this.P3())},refresh:function(){this._super();this.sb()},sb:function(){var a=this;this.hn="rtl"===this.Qc();this.al=
void 0;this.Y()?(this.Zga=function(){a.OLa()},this.element[0].addEventListener("focusin",this.Zga,!0),this.QV=this.element.find("oj-button").add(this.element.find("oj-menu-button")).add(this.element.find("oj-buttonset-one")).add(this.element.find("oj-buttonset-many")),this.P3()):(this.Ke=this.element.find(":oj-button").unbind("keydown"+this.eventNamespace).bind("keydown"+this.eventNamespace,function(b){a.hr(b,g(this))}).unbind("click"+this.eventNamespace).bind("click"+this.eventNamespace,function(){g(this).ojButton("option",
"disabled")||a.tw(g(this))}).unbind("focus"+this.eventNamespace).bind("focus"+this.eventNamespace,function(){a.xQ(g(this))}),this.H9=this.element.find(":oj-buttonset").ojButtonset("refresh"),this.Zwa=this.Ke.not(this.H9.find(":oj-button")).ojButton("refresh"))},xQ:function(a){this.Y()||null!=this.al?this.tw(a):(this.al=this.Ke.filter(function(){return!g(this).ojButton("option","disabled")}),this.TQ(null==this.Et),this.al[0].focus())},OLa:function(){var a=this;this.element[0].removeEventListener("focusin",
this.Zga,!0);var b=this.element.find("oj-button").add(this.element.find("oj-menu-button")),d=this.element.find("oj-buttonset-one").add(this.element.find("oj-buttonset-many"));this.QV=b.add(d);this.Ke=b.add(d.find(".oj-button")).unbind("keydown"+this.eventNamespace).bind("keydown"+this.eventNamespace,function(b){var d=g(this);a.hr(b,d)}).unbind("click"+this.eventNamespace).bind("click"+this.eventNamespace,function(){var b=g(this);b.hasClass("oj-disabled")||a.tw(b)}).unbind("focusin"+this.eventNamespace).bind("focusin"+
this.eventNamespace,function(){var b=g(this);a.xQ(b)});this.al=this.Ke.filter(function(){return!g(this).hasClass("oj-disabled")});this.TQ(null==this.Et);this.dI(this.al[0]).focus()},dI:function(a){return this.Y()?(a=g(a),a.hasClass("oj-button-toggle")?a.children("input")[0]:a.children("button")[0]):a},TQ:function(a){var b=g(this.Et);this.Et=void 0;if(this.Y())for(var d=0;d<this.Ke.length;d++)this.dI(this.Ke[d]).setAttribute("tabindex","-1");else this.Ke.attr("tabindex","-1");a=a||!b.is(this.al)?this.al.first():
b;this.tw(a)},tR:function(a){var b=this.al;return a.map(function(a,c){if("radio"!=c.type||c.checked||""==c.name)return c;var f=c.name;f?(f=f.replace(/'/g,"\\'"),f=b.filter(":radio[name\x3d'"+f+"']:oj-button")):f=b.filter(c).filter(":oj-button");f=f.filter(":checked");return f.length?f[0]:c})},tw:function(a){a=this.Y()?this.tR(g(this.dI(a[0]))):this.tR(a);var b=a[0],d=this.Et;b!==d&&(g(d).attr("tabindex","-1"),a.attr("tabindex","0"),this.Et=b)},hr:function(a,b){switch(a.which){case g.ui.keyCode.UP:case g.ui.keyCode.DOWN:if("radio"!=
b.attr("type"))break;case g.ui.keyCode.LEFT:case g.ui.keyCode.RIGHT:a.preventDefault();var d=this.al,e=d.length;if(2>e)break;var f=d.index(b);this.dI(d.eq((f+(a.which==g.ui.keyCode.DOWN||a.which==g.ui.keyCode.RIGHT^this.hn?1:-1)+e)%e)[0]).focus()}},_destroy:function(){this.element.removeClass("oj-toolbar oj-component").removeAttr(a.Components.Dq).removeAttr("role");this.Ke.attr("tabindex","0");this.P3()},P3:function(){if(this.Y())for(var c=0;c<this.QV.length;c++){var b=this.QV[c];"OJ-BUTTON"==b.tagName||
"OJ-MENU-BUTTON"==b.tagName?a.Components.ud(this.dI(b),"ojButton")&&b.refresh():"OJ-BUTTONSET-ONE"!=b.tagName&&"OJ-BUTTONSET-MANY"!=b.tagName||!a.Components.ud(b,"ojButtonset")||b.refresh()}else this.H9.ojButtonset("refresh"),this.Zwa.ojButton("refresh")}})})();a.Components.gq({ojToolbar:{chroming:a.Components.tf(function(){return(a.ic.Tc("oj-toolbar-option-defaults")||{}).chroming})}});a.J.$a("oj-toolbar","baseComponent",{properties:{chroming:{type:"string",enumValues:["half","full","outlined"]}},
extension:{Ya:"ojToolbar"}});a.J.register("oj-toolbar",{metadata:a.J.getMetadata("oj-toolbar")})});