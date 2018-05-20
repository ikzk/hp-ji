// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
reagent.dom.global$module$react_dom = goog.global.ReactDOM;
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.global$module$react_dom.unmountComponentAtNode.cljs$core$IFn$_invoke$arity$1 ? reagent.dom.global$module$react_dom.unmountComponentAtNode.cljs$core$IFn$_invoke$arity$1(container) : reagent.dom.global$module$react_dom.unmountComponentAtNode.call(null,container));
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_10238 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{var G__10239 = (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
var G__10240 = container;
var G__10241 = ((function (G__10239,G__10240,_STAR_always_update_STAR_10238){
return (function (){
var _STAR_always_update_STAR_10242 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render();

if(!((callback == null))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_10242;
}});})(G__10239,G__10240,_STAR_always_update_STAR_10238))
;
return (reagent.dom.global$module$react_dom.render.cljs$core$IFn$_invoke$arity$3 ? reagent.dom.global$module$react_dom.render.cljs$core$IFn$_invoke$arity$3(G__10239,G__10240,G__10241) : reagent.dom.global$module$react_dom.render.call(null,G__10239,G__10240,G__10241));
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_10238;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__10244 = arguments.length;
switch (G__10244) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_();

var f = (function (){
return reagent.impl.template.as_element(((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.global$module$react_dom.findDOMNode.cljs$core$IFn$_invoke$arity$1 ? reagent.dom.global$module$react_dom.findDOMNode.cljs$core$IFn$_invoke$arity$1(this$) : reagent.dom.global$module$react_dom.findDOMNode.call(null,this$));
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__10246_10250 = cljs.core.seq(cljs.core.vals(cljs.core.deref(reagent.dom.roots)));
var chunk__10247_10251 = null;
var count__10248_10252 = (0);
var i__10249_10253 = (0);
while(true){
if((i__10249_10253 < count__10248_10252)){
var v_10254 = chunk__10247_10251.cljs$core$IIndexed$_nth$arity$2(null,i__10249_10253);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_10254);


var G__10255 = seq__10246_10250;
var G__10256 = chunk__10247_10251;
var G__10257 = count__10248_10252;
var G__10258 = (i__10249_10253 + (1));
seq__10246_10250 = G__10255;
chunk__10247_10251 = G__10256;
count__10248_10252 = G__10257;
i__10249_10253 = G__10258;
continue;
} else {
var temp__5457__auto___10259 = cljs.core.seq(seq__10246_10250);
if(temp__5457__auto___10259){
var seq__10246_10260__$1 = temp__5457__auto___10259;
if(cljs.core.chunked_seq_QMARK_(seq__10246_10260__$1)){
var c__4319__auto___10261 = cljs.core.chunk_first(seq__10246_10260__$1);
var G__10262 = cljs.core.chunk_rest(seq__10246_10260__$1);
var G__10263 = c__4319__auto___10261;
var G__10264 = cljs.core.count(c__4319__auto___10261);
var G__10265 = (0);
seq__10246_10250 = G__10262;
chunk__10247_10251 = G__10263;
count__10248_10252 = G__10264;
i__10249_10253 = G__10265;
continue;
} else {
var v_10266 = cljs.core.first(seq__10246_10260__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_10266);


var G__10267 = cljs.core.next(seq__10246_10260__$1);
var G__10268 = null;
var G__10269 = (0);
var G__10270 = (0);
seq__10246_10250 = G__10267;
chunk__10247_10251 = G__10268;
count__10248_10252 = G__10269;
i__10249_10253 = G__10270;
continue;
}
} else {
}
}
break;
}

return "Updated";
});
