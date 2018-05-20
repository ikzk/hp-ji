// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__5294__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__5294 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5295__i = 0, G__5295__a = new Array(arguments.length -  0);
while (G__5295__i < G__5295__a.length) {G__5295__a[G__5295__i] = arguments[G__5295__i + 0]; ++G__5295__i;}
  args = new cljs.core.IndexedSeq(G__5295__a,0,null);
} 
return G__5294__delegate.call(this,args);};
G__5294.cljs$lang$maxFixedArity = 0;
G__5294.cljs$lang$applyTo = (function (arglist__5296){
var args = cljs.core.seq(arglist__5296);
return G__5294__delegate(args);
});
G__5294.cljs$core$IFn$_invoke$arity$variadic = G__5294__delegate;
return G__5294;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__5297__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__5297 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5298__i = 0, G__5298__a = new Array(arguments.length -  0);
while (G__5298__i < G__5298__a.length) {G__5298__a[G__5298__i] = arguments[G__5298__i + 0]; ++G__5298__i;}
  args = new cljs.core.IndexedSeq(G__5298__a,0,null);
} 
return G__5297__delegate.call(this,args);};
G__5297.cljs$lang$maxFixedArity = 0;
G__5297.cljs$lang$applyTo = (function (arglist__5299){
var args = cljs.core.seq(arglist__5299);
return G__5297__delegate(args);
});
G__5297.cljs$core$IFn$_invoke$arity$variadic = G__5297__delegate;
return G__5297;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
