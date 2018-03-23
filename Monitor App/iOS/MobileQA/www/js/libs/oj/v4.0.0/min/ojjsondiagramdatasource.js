/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","ojs/ojdatasource-common"],function(a){a.Ho=function(g,c){this.Jr=c?c.childData:null;this.hma={};a.Ho.O.constructor.call(this,g)};o_("JsonDiagramDataSource",a.Ho,a);a.f.ya(a.Ho,a.Mx,"oj.JsonDiagramDataSource");a.Ho.prototype.getData=function(a){if(a){var c=a.nodes;if(void 0===c&&this.Jr)return c=this.Jr(a),this.vqa(this.hma[a.id],c),c;this.L5({nodes:c});return Promise.resolve({nodes:c})}return this.data?(this.L5(this.data),Promise.resolve(this.data)):this.Jr?(c=this.Jr(),this.vqa(null,
c),c):Promise.resolve(null)};a.f.j("JsonDiagramDataSource.prototype.getData",{getData:a.Ho.prototype.getData});a.Ho.prototype.L5=function(a){if(this.Jr&&a.nodes){a=a.nodes;for(var c=0;c<a.length;c++)this.hma[a[c].id]=a[c]}};a.Ho.prototype.vqa=function(a,c){if(c instanceof Promise){var b=this;c.then(function(c){a||b.data||(b.data={});Array.isArray(c.nodes)&&(a?a.nodes=c.nodes:b.data.nodes=c.nodes,b.L5(c));Array.isArray(c.links)&&(b.data.links=Array.isArray(b.data.links)?b.data.links.concat(c.links):
c.links);b.handleEvent("ADD",{data:c,parentId:a?a.id:null,index:0})},function(){})}};a.Ho.prototype.getChildCount=function(a){return a?(a=a.nodes,Array.isArray(a)?a.length:void 0===a&&this.Jr?-1:0):-1};a.f.j("JsonDiagramDataSource.prototype.getChildCount",{getChildCount:a.Ho.prototype.getChildCount});a.Ho.prototype.getDescendantsConnectivity=function(){return"unknown"};a.f.j("JsonDiagramDataSource.prototype.getDescendantsConnectivity",{getDescendantsConnectivity:a.Ho.prototype.getDescendantsConnectivity})});