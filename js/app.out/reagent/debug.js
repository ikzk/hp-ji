// Compiled by ClojureScript 1.10.238 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__1239__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__1239 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1240__i = 0, G__1240__a = new Array(arguments.length -  0);
while (G__1240__i < G__1240__a.length) {G__1240__a[G__1240__i] = arguments[G__1240__i + 0]; ++G__1240__i;}
  args = new cljs.core.IndexedSeq(G__1240__a,0,null);
} 
return G__1239__delegate.call(this,args);};
G__1239.cljs$lang$maxFixedArity = 0;
G__1239.cljs$lang$applyTo = (function (arglist__1241){
var args = cljs.core.seq(arglist__1241);
return G__1239__delegate(args);
});
G__1239.cljs$core$IFn$_invoke$arity$variadic = G__1239__delegate;
return G__1239;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__1242__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__1242 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1243__i = 0, G__1243__a = new Array(arguments.length -  0);
while (G__1243__i < G__1243__a.length) {G__1243__a[G__1243__i] = arguments[G__1243__i + 0]; ++G__1243__i;}
  args = new cljs.core.IndexedSeq(G__1243__a,0,null);
} 
return G__1242__delegate.call(this,args);};
G__1242.cljs$lang$maxFixedArity = 0;
G__1242.cljs$lang$applyTo = (function (arglist__1244){
var args = cljs.core.seq(arglist__1244);
return G__1242__delegate(args);
});
G__1242.cljs$core$IFn$_invoke$arity$variadic = G__1242__delegate;
return G__1242;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map
