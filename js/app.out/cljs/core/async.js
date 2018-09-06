// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__3748 = arguments.length;
switch (G__3748) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async3749 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3749 = (function (f,blockable,meta3750){
this.f = f;
this.blockable = blockable;
this.meta3750 = meta3750;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async3749.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3751,meta3750__$1){
var self__ = this;
var _3751__$1 = this;
return (new cljs.core.async.t_cljs$core$async3749(self__.f,self__.blockable,meta3750__$1));
});

cljs.core.async.t_cljs$core$async3749.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3751){
var self__ = this;
var _3751__$1 = this;
return self__.meta3750;
});

cljs.core.async.t_cljs$core$async3749.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3749.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async3749.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async3749.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async3749.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta3750","meta3750",1742810761,null)], null);
});

cljs.core.async.t_cljs$core$async3749.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async3749.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3749";

cljs.core.async.t_cljs$core$async3749.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async3749");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3749.
 */
cljs.core.async.__GT_t_cljs$core$async3749 = (function cljs$core$async$__GT_t_cljs$core$async3749(f__$1,blockable__$1,meta3750){
return (new cljs.core.async.t_cljs$core$async3749(f__$1,blockable__$1,meta3750));
});

}

return (new cljs.core.async.t_cljs$core$async3749(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__3755 = arguments.length;
switch (G__3755) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__3758 = arguments.length;
switch (G__3758) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__3761 = arguments.length;
switch (G__3761) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_3763 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_3763);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_3763,ret){
return (function (){
return fn1.call(null,val_3763);
});})(val_3763,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__3765 = arguments.length;
switch (G__3765) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4376__auto___3767 = n;
var x_3768 = (0);
while(true){
if((x_3768 < n__4376__auto___3767)){
(a[x_3768] = (0));

var G__3769 = (x_3768 + (1));
x_3768 = G__3769;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__3770 = (i + (1));
i = G__3770;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async3771 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3771 = (function (flag,meta3772){
this.flag = flag;
this.meta3772 = meta3772;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async3771.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_3773,meta3772__$1){
var self__ = this;
var _3773__$1 = this;
return (new cljs.core.async.t_cljs$core$async3771(self__.flag,meta3772__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async3771.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_3773){
var self__ = this;
var _3773__$1 = this;
return self__.meta3772;
});})(flag))
;

cljs.core.async.t_cljs$core$async3771.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3771.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async3771.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async3771.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async3771.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta3772","meta3772",-470739823,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async3771.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async3771.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3771";

cljs.core.async.t_cljs$core$async3771.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async3771");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3771.
 */
cljs.core.async.__GT_t_cljs$core$async3771 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async3771(flag__$1,meta3772){
return (new cljs.core.async.t_cljs$core$async3771(flag__$1,meta3772));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async3771(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async3774 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3774 = (function (flag,cb,meta3775){
this.flag = flag;
this.cb = cb;
this.meta3775 = meta3775;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async3774.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3776,meta3775__$1){
var self__ = this;
var _3776__$1 = this;
return (new cljs.core.async.t_cljs$core$async3774(self__.flag,self__.cb,meta3775__$1));
});

cljs.core.async.t_cljs$core$async3774.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3776){
var self__ = this;
var _3776__$1 = this;
return self__.meta3775;
});

cljs.core.async.t_cljs$core$async3774.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3774.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async3774.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async3774.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async3774.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta3775","meta3775",-1082719166,null)], null);
});

cljs.core.async.t_cljs$core$async3774.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async3774.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3774";

cljs.core.async.t_cljs$core$async3774.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async3774");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3774.
 */
cljs.core.async.__GT_t_cljs$core$async3774 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async3774(flag__$1,cb__$1,meta3775){
return (new cljs.core.async.t_cljs$core$async3774(flag__$1,cb__$1,meta3775));
});

}

return (new cljs.core.async.t_cljs$core$async3774(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__3777_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__3777_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__3778_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__3778_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__3779 = (i + (1));
i = G__3779;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3785 = arguments.length;
var i__4500__auto___3786 = (0);
while(true){
if((i__4500__auto___3786 < len__4499__auto___3785)){
args__4502__auto__.push((arguments[i__4500__auto___3786]));

var G__3787 = (i__4500__auto___3786 + (1));
i__4500__auto___3786 = G__3787;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__3782){
var map__3783 = p__3782;
var map__3783__$1 = ((((!((map__3783 == null)))?(((((map__3783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3783):map__3783);
var opts = map__3783__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq3780){
var G__3781 = cljs.core.first.call(null,seq3780);
var seq3780__$1 = cljs.core.next.call(null,seq3780);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3781,seq3780__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__3789 = arguments.length;
switch (G__3789) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__3688__auto___3835 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3688__auto___3835){
return (function (){
var f__3689__auto__ = (function (){var switch__3598__auto__ = ((function (c__3688__auto___3835){
return (function (state_3813){
var state_val_3814 = (state_3813[(1)]);
if((state_val_3814 === (7))){
var inst_3809 = (state_3813[(2)]);
var state_3813__$1 = state_3813;
var statearr_3815_3836 = state_3813__$1;
(statearr_3815_3836[(2)] = inst_3809);

(statearr_3815_3836[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3814 === (1))){
var state_3813__$1 = state_3813;
var statearr_3816_3837 = state_3813__$1;
(statearr_3816_3837[(2)] = null);

(statearr_3816_3837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3814 === (4))){
var inst_3792 = (state_3813[(7)]);
var inst_3792__$1 = (state_3813[(2)]);
var inst_3793 = (inst_3792__$1 == null);
var state_3813__$1 = (function (){var statearr_3817 = state_3813;
(statearr_3817[(7)] = inst_3792__$1);

return statearr_3817;
})();
if(cljs.core.truth_(inst_3793)){
var statearr_3818_3838 = state_3813__$1;
(statearr_3818_3838[(1)] = (5));

} else {
var statearr_3819_3839 = state_3813__$1;
(statearr_3819_3839[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3814 === (13))){
var state_3813__$1 = state_3813;
var statearr_3820_3840 = state_3813__$1;
(statearr_3820_3840[(2)] = null);

(statearr_3820_3840[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3814 === (6))){
var inst_3792 = (state_3813[(7)]);
var state_3813__$1 = state_3813;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3813__$1,(11),to,inst_3792);
} else {
if((state_val_3814 === (3))){
var inst_3811 = (state_3813[(2)]);
var state_3813__$1 = state_3813;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3813__$1,inst_3811);
} else {
if((state_val_3814 === (12))){
var state_3813__$1 = state_3813;
var statearr_3821_3841 = state_3813__$1;
(statearr_3821_3841[(2)] = null);

(statearr_3821_3841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3814 === (2))){
var state_3813__$1 = state_3813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3813__$1,(4),from);
} else {
if((state_val_3814 === (11))){
var inst_3802 = (state_3813[(2)]);
var state_3813__$1 = state_3813;
if(cljs.core.truth_(inst_3802)){
var statearr_3822_3842 = state_3813__$1;
(statearr_3822_3842[(1)] = (12));

} else {
var statearr_3823_3843 = state_3813__$1;
(statearr_3823_3843[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3814 === (9))){
var state_3813__$1 = state_3813;
var statearr_3824_3844 = state_3813__$1;
(statearr_3824_3844[(2)] = null);

(statearr_3824_3844[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3814 === (5))){
var state_3813__$1 = state_3813;
if(cljs.core.truth_(close_QMARK_)){
var statearr_3825_3845 = state_3813__$1;
(statearr_3825_3845[(1)] = (8));

} else {
var statearr_3826_3846 = state_3813__$1;
(statearr_3826_3846[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3814 === (14))){
var inst_3807 = (state_3813[(2)]);
var state_3813__$1 = state_3813;
var statearr_3827_3847 = state_3813__$1;
(statearr_3827_3847[(2)] = inst_3807);

(statearr_3827_3847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3814 === (10))){
var inst_3799 = (state_3813[(2)]);
var state_3813__$1 = state_3813;
var statearr_3828_3848 = state_3813__$1;
(statearr_3828_3848[(2)] = inst_3799);

(statearr_3828_3848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3814 === (8))){
var inst_3796 = cljs.core.async.close_BANG_.call(null,to);
var state_3813__$1 = state_3813;
var statearr_3829_3849 = state_3813__$1;
(statearr_3829_3849[(2)] = inst_3796);

(statearr_3829_3849[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__3688__auto___3835))
;
return ((function (switch__3598__auto__,c__3688__auto___3835){
return (function() {
var cljs$core$async$state_machine__3599__auto__ = null;
var cljs$core$async$state_machine__3599__auto____0 = (function (){
var statearr_3830 = [null,null,null,null,null,null,null,null];
(statearr_3830[(0)] = cljs$core$async$state_machine__3599__auto__);

(statearr_3830[(1)] = (1));

return statearr_3830;
});
var cljs$core$async$state_machine__3599__auto____1 = (function (state_3813){
while(true){
var ret_value__3600__auto__ = (function (){try{while(true){
var result__3601__auto__ = switch__3598__auto__.call(null,state_3813);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3601__auto__;
}
break;
}
}catch (e3831){if((e3831 instanceof Object)){
var ex__3602__auto__ = e3831;
var statearr_3832_3850 = state_3813;
(statearr_3832_3850[(5)] = ex__3602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3851 = state_3813;
state_3813 = G__3851;
continue;
} else {
return ret_value__3600__auto__;
}
break;
}
});
cljs$core$async$state_machine__3599__auto__ = function(state_3813){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3599__auto____1.call(this,state_3813);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3599__auto____0;
cljs$core$async$state_machine__3599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3599__auto____1;
return cljs$core$async$state_machine__3599__auto__;
})()
;})(switch__3598__auto__,c__3688__auto___3835))
})();
var state__3690__auto__ = (function (){var statearr_3833 = f__3689__auto__.call(null);
(statearr_3833[(6)] = c__3688__auto___3835);

return statearr_3833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3690__auto__);
});})(c__3688__auto___3835))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__3852){
var vec__3853 = p__3852;
var v = cljs.core.nth.call(null,vec__3853,(0),null);
var p = cljs.core.nth.call(null,vec__3853,(1),null);
var job = vec__3853;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__3688__auto___4024 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3688__auto___4024,res,vec__3853,v,p,job,jobs,results){
return (function (){
var f__3689__auto__ = (function (){var switch__3598__auto__ = ((function (c__3688__auto___4024,res,vec__3853,v,p,job,jobs,results){
return (function (state_3860){
var state_val_3861 = (state_3860[(1)]);
if((state_val_3861 === (1))){
var state_3860__$1 = state_3860;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3860__$1,(2),res,v);
} else {
if((state_val_3861 === (2))){
var inst_3857 = (state_3860[(2)]);
var inst_3858 = cljs.core.async.close_BANG_.call(null,res);
var state_3860__$1 = (function (){var statearr_3862 = state_3860;
(statearr_3862[(7)] = inst_3857);

return statearr_3862;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3860__$1,inst_3858);
} else {
return null;
}
}
});})(c__3688__auto___4024,res,vec__3853,v,p,job,jobs,results))
;
return ((function (switch__3598__auto__,c__3688__auto___4024,res,vec__3853,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__3599__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__3599__auto____0 = (function (){
var statearr_3863 = [null,null,null,null,null,null,null,null];
(statearr_3863[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__3599__auto__);

(statearr_3863[(1)] = (1));

return statearr_3863;
});
var cljs$core$async$pipeline_STAR__$_state_machine__3599__auto____1 = (function (state_3860){
while(true){
var ret_value__3600__auto__ = (function (){try{while(true){
var result__3601__auto__ = switch__3598__auto__.call(null,state_3860);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3601__auto__;
}
break;
}
}catch (e3864){if((e3864 instanceof Object)){
var ex__3602__auto__ = e3864;
var statearr_3865_4025 = state_3860;
(statearr_3865_4025[(5)] = ex__3602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3860);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4026 = state_3860;
state_3860 = G__4026;
continue;
} else {
return ret_value__3600__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__3599__auto__ = function(state_3860){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__3599__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__3599__auto____1.call(this,state_3860);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__3599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__3599__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__3599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__3599__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__3599__auto__;
})()
;})(switch__3598__auto__,c__3688__auto___4024,res,vec__3853,v,p,job,jobs,results))
})();
var state__3690__auto__ = (function (){var statearr_3866 = f__3689__auto__.call(null);
(statearr_3866[(6)] = c__3688__auto___4024);

return statearr_3866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3690__auto__);
});})(c__3688__auto___4024,res,vec__3853,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__3867){
var vec__3868 = p__3867;
var v = cljs.core.nth.call(null,vec__3868,(0),null);
var p = cljs.core.nth.call(null,vec__3868,(1),null);
var job = vec__3868;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4376__auto___4027 = n;
var __4028 = (0);
while(true){
if((__4028 < n__4376__auto___4027)){
var G__3871_4029 = type;
var G__3871_4030__$1 = (((G__3871_4029 instanceof cljs.core.Keyword))?G__3871_4029.fqn:null);
switch (G__3871_4030__$1) {
case "compute":
var c__3688__auto___4032 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__4028,c__3688__auto___4032,G__3871_4029,G__3871_4030__$1,n__4376__auto___4027,jobs,results,process,async){
return (function (){
var f__3689__auto__ = (function (){var switch__3598__auto__ = ((function (__4028,c__3688__auto___4032,G__3871_4029,G__3871_4030__$1,n__4376__auto___4027,jobs,results,process,async){
return (function (state_3884){
var state_val_3885 = (state_3884[(1)]);
if((state_val_3885 === (1))){
var state_3884__$1 = state_3884;
var statearr_3886_4033 = state_3884__$1;
(statearr_3886_4033[(2)] = null);

(statearr_3886_4033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3885 === (2))){
var state_3884__$1 = state_3884;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3884__$1,(4),jobs);
} else {
if((state_val_3885 === (3))){
var inst_3882 = (state_3884[(2)]);
var state_3884__$1 = state_3884;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3884__$1,inst_3882);
} else {
if((state_val_3885 === (4))){
var inst_3874 = (state_3884[(2)]);
var inst_3875 = process.call(null,inst_3874);
var state_3884__$1 = state_3884;
if(cljs.core.truth_(inst_3875)){
var statearr_3887_4034 = state_3884__$1;
(statearr_3887_4034[(1)] = (5));

} else {
var statearr_3888_4035 = state_3884__$1;
(statearr_3888_4035[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3885 === (5))){
var state_3884__$1 = state_3884;
var statearr_3889_4036 = state_3884__$1;
(statearr_3889_4036[(2)] = null);

(statearr_3889_4036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3885 === (6))){
var state_3884__$1 = state_3884;
var statearr_3890_4037 = state_3884__$1;
(statearr_3890_4037[(2)] = null);

(statearr_3890_4037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3885 === (7))){
var inst_3880 = (state_3884[(2)]);
var state_3884__$1 = state_3884;
var statearr_3891_4038 = state_3884__$1;
(statearr_3891_4038[(2)] = inst_3880);

(statearr_3891_4038[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__4028,c__3688__auto___4032,G__3871_4029,G__3871_4030__$1,n__4376__auto___4027,jobs,results,process,async))
;
return ((function (__4028,switch__3598__auto__,c__3688__auto___4032,G__3871_4029,G__3871_4030__$1,n__4376__auto___4027,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__3599__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__3599__auto____0 = (function (){
var statearr_3892 = [null,null,null,null,null,null,null];
(statearr_3892[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__3599__auto__);

(statearr_3892[(1)] = (1));

return statearr_3892;
});
var cljs$core$async$pipeline_STAR__$_state_machine__3599__auto____1 = (function (state_3884){
while(true){
var ret_value__3600__auto__ = (function (){try{while(true){
var result__3601__auto__ = switch__3598__auto__.call(null,state_3884);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3601__auto__;
}
break;
}
}catch (e3893){if((e3893 instanceof Object)){
var ex__3602__auto__ = e3893;
var statearr_3894_4039 = state_3884;
(statearr_3894_4039[(5)] = ex__3602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3884);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3893;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4040 = state_3884;
state_3884 = G__4040;
continue;
} else {
return ret_value__3600__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__3599__auto__ = function(state_3884){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__3599__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__3599__auto____1.call(this,state_3884);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__3599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__3599__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__3599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__3599__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__3599__auto__;
})()
;})(__4028,switch__3598__auto__,c__3688__auto___4032,G__3871_4029,G__3871_4030__$1,n__4376__auto___4027,jobs,results,process,async))
})();
var state__3690__auto__ = (function (){var statearr_3895 = f__3689__auto__.call(null);
(statearr_3895[(6)] = c__3688__auto___4032);

return statearr_3895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3690__auto__);
});})(__4028,c__3688__auto___4032,G__3871_4029,G__3871_4030__$1,n__4376__auto___4027,jobs,results,process,async))
);


break;
case "async":
var c__3688__auto___4041 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__4028,c__3688__auto___4041,G__3871_4029,G__3871_4030__$1,n__4376__auto___4027,jobs,results,process,async){
return (function (){
var f__3689__auto__ = (function (){var switch__3598__auto__ = ((function (__4028,c__3688__auto___4041,G__3871_4029,G__3871_4030__$1,n__4376__auto___4027,jobs,results,process,async){
return (function (state_3908){
var state_val_3909 = (state_3908[(1)]);
if((state_val_3909 === (1))){
var state_3908__$1 = state_3908;
var statearr_3910_4042 = state_3908__$1;
(statearr_3910_4042[(2)] = null);

(statearr_3910_4042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3909 === (2))){
var state_3908__$1 = state_3908;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3908__$1,(4),jobs);
} else {
if((state_val_3909 === (3))){
var inst_3906 = (state_3908[(2)]);
var state_3908__$1 = state_3908;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3908__$1,inst_3906);
} else {
if((state_val_3909 === (4))){
var inst_3898 = (state_3908[(2)]);
var inst_3899 = async.call(null,inst_3898);
var state_3908__$1 = state_3908;
if(cljs.core.truth_(inst_3899)){
var statearr_3911_4043 = state_3908__$1;
(statearr_3911_4043[(1)] = (5));

} else {
var statearr_3912_4044 = state_3908__$1;
(statearr_3912_4044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3909 === (5))){
var state_3908__$1 = state_3908;
var statearr_3913_4045 = state_3908__$1;
(statearr_3913_4045[(2)] = null);

(statearr_3913_4045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3909 === (6))){
var state_3908__$1 = state_3908;
var statearr_3914_4046 = state_3908__$1;
(statearr_3914_4046[(2)] = null);

(statearr_3914_4046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3909 === (7))){
var inst_3904 = (state_3908[(2)]);
var state_3908__$1 = state_3908;
var statearr_3915_4047 = state_3908__$1;
(statearr_3915_4047[(2)] = inst_3904);

(statearr_3915_4047[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__4028,c__3688__auto___4041,G__3871_4029,G__3871_4030__$1,n__4376__auto___4027,jobs,results,process,async))
;
return ((function (__4028,switch__3598__auto__,c__3688__auto___4041,G__3871_4029,G__3871_4030__$1,n__4376__auto___4027,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__3599__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__3599__auto____0 = (function (){
var statearr_3916 = [null,null,null,null,null,null,null];
(statearr_3916[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__3599__auto__);

(statearr_3916[(1)] = (1));

return statearr_3916;
});
var cljs$core$async$pipeline_STAR__$_state_machine__3599__auto____1 = (function (state_3908){
while(true){
var ret_value__3600__auto__ = (function (){try{while(true){
var result__3601__auto__ = switch__3598__auto__.call(null,state_3908);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3601__auto__;
}
break;
}
}catch (e3917){if((e3917 instanceof Object)){
var ex__3602__auto__ = e3917;
var statearr_3918_4048 = state_3908;
(statearr_3918_4048[(5)] = ex__3602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3908);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3917;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4049 = state_3908;
state_3908 = G__4049;
continue;
} else {
return ret_value__3600__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__3599__auto__ = function(state_3908){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__3599__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__3599__auto____1.call(this,state_3908);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__3599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__3599__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__3599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__3599__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__3599__auto__;
})()
;})(__4028,switch__3598__auto__,c__3688__auto___4041,G__3871_4029,G__3871_4030__$1,n__4376__auto___4027,jobs,results,process,async))
})();
var state__3690__auto__ = (function (){var statearr_3919 = f__3689__auto__.call(null);
(statearr_3919[(6)] = c__3688__auto___4041);

return statearr_3919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3690__auto__);
});})(__4028,c__3688__auto___4041,G__3871_4029,G__3871_4030__$1,n__4376__auto___4027,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__3871_4030__$1)].join('')));

}

var G__4050 = (__4028 + (1));
__4028 = G__4050;
continue;
} else {
}
break;
}

var c__3688__auto___4051 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3688__auto___4051,jobs,results,process,async){
return (function (){
var f__3689__auto__ = (function (){var switch__3598__auto__ = ((function (c__3688__auto___4051,jobs,results,process,async){
return (function (state_3941){
var state_val_3942 = (state_3941[(1)]);
if((state_val_3942 === (1))){
var state_3941__$1 = state_3941;
var statearr_3943_4052 = state_3941__$1;
(statearr_3943_4052[(2)] = null);

(statearr_3943_4052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3942 === (2))){
var state_3941__$1 = state_3941;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3941__$1,(4),from);
} else {
if((state_val_3942 === (3))){
var inst_3939 = (state_3941[(2)]);
var state_3941__$1 = state_3941;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3941__$1,inst_3939);
} else {
if((state_val_3942 === (4))){
var inst_3922 = (state_3941[(7)]);
var inst_3922__$1 = (state_3941[(2)]);
var inst_3923 = (inst_3922__$1 == null);
var state_3941__$1 = (function (){var statearr_3944 = state_3941;
(statearr_3944[(7)] = inst_3922__$1);

return statearr_3944;
})();
if(cljs.core.truth_(inst_3923)){
var statearr_3945_4053 = state_3941__$1;
(statearr_3945_4053[(1)] = (5));

} else {
var statearr_3946_4054 = state_3941__$1;
(statearr_3946_4054[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3942 === (5))){
var inst_3925 = cljs.core.async.close_BANG_.call(null,jobs);
var state_3941__$1 = state_3941;
var statearr_3947_4055 = state_3941__$1;
(statearr_3947_4055[(2)] = inst_3925);

(statearr_3947_4055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3942 === (6))){
var inst_3927 = (state_3941[(8)]);
var inst_3922 = (state_3941[(7)]);
var inst_3927__$1 = cljs.core.async.chan.call(null,(1));
var inst_3928 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_3929 = [inst_3922,inst_3927__$1];
var inst_3930 = (new cljs.core.PersistentVector(null,2,(5),inst_3928,inst_3929,null));
var state_3941__$1 = (function (){var statearr_3948 = state_3941;
(statearr_3948[(8)] = inst_3927__$1);

return statearr_3948;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3941__$1,(8),jobs,inst_3930);
} else {
if((state_val_3942 === (7))){
var inst_3937 = (state_3941[(2)]);
var state_3941__$1 = state_3941;
var statearr_3949_4056 = state_3941__$1;
(statearr_3949_4056[(2)] = inst_3937);

(statearr_3949_4056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3942 === (8))){
var inst_3927 = (state_3941[(8)]);
var inst_3932 = (state_3941[(2)]);
var state_3941__$1 = (function (){var statearr_3950 = state_3941;
(statearr_3950[(9)] = inst_3932);

return statearr_3950;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3941__$1,(9),results,inst_3927);
} else {
if((state_val_3942 === (9))){
var inst_3934 = (state_3941[(2)]);
var state_3941__$1 = (function (){var statearr_3951 = state_3941;
(statearr_3951[(10)] = inst_3934);

return statearr_3951;
})();
var statearr_3952_4057 = state_3941__$1;
(statearr_3952_4057[(2)] = null);

(statearr_3952_4057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__3688__auto___4051,jobs,results,process,async))
;
return ((function (switch__3598__auto__,c__3688__auto___4051,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__3599__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__3599__auto____0 = (function (){
var statearr_3953 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_3953[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__3599__auto__);

(statearr_3953[(1)] = (1));

return statearr_3953;
});
var cljs$core$async$pipeline_STAR__$_state_machine__3599__auto____1 = (function (state_3941){
while(true){
var ret_value__3600__auto__ = (function (){try{while(true){
var result__3601__auto__ = switch__3598__auto__.call(null,state_3941);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3601__auto__;
}
break;
}
}catch (e3954){if((e3954 instanceof Object)){
var ex__3602__auto__ = e3954;
var statearr_3955_4058 = state_3941;
(statearr_3955_4058[(5)] = ex__3602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3941);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3954;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4059 = state_3941;
state_3941 = G__4059;
continue;
} else {
return ret_value__3600__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__3599__auto__ = function(state_3941){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__3599__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__3599__auto____1.call(this,state_3941);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__3599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__3599__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__3599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__3599__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__3599__auto__;
})()
;})(switch__3598__auto__,c__3688__auto___4051,jobs,results,process,async))
})();
var state__3690__auto__ = (function (){var statearr_3956 = f__3689__auto__.call(null);
(statearr_3956[(6)] = c__3688__auto___4051);

return statearr_3956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3690__auto__);
});})(c__3688__auto___4051,jobs,results,process,async))
);


var c__3688__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3688__auto__,jobs,results,process,async){
return (function (){
var f__3689__auto__ = (function (){var switch__3598__auto__ = ((function (c__3688__auto__,jobs,results,process,async){
return (function (state_3994){
var state_val_3995 = (state_3994[(1)]);
if((state_val_3995 === (7))){
var inst_3990 = (state_3994[(2)]);
var state_3994__$1 = state_3994;
var statearr_3996_4060 = state_3994__$1;
(statearr_3996_4060[(2)] = inst_3990);

(statearr_3996_4060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3995 === (20))){
var state_3994__$1 = state_3994;
var statearr_3997_4061 = state_3994__$1;
(statearr_3997_4061[(2)] = null);

(statearr_3997_4061[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3995 === (1))){
var state_3994__$1 = state_3994;
var statearr_3998_4062 = state_3994__$1;
(statearr_3998_4062[(2)] = null);

(statearr_3998_4062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3995 === (4))){
var inst_3959 = (state_3994[(7)]);
var inst_3959__$1 = (state_3994[(2)]);
var inst_3960 = (inst_3959__$1 == null);
var state_3994__$1 = (function (){var statearr_3999 = state_3994;
(statearr_3999[(7)] = inst_3959__$1);

return statearr_3999;
})();
if(cljs.core.truth_(inst_3960)){
var statearr_4000_4063 = state_3994__$1;
(statearr_4000_4063[(1)] = (5));

} else {
var statearr_4001_4064 = state_3994__$1;
(statearr_4001_4064[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3995 === (15))){
var inst_3972 = (state_3994[(8)]);
var state_3994__$1 = state_3994;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3994__$1,(18),to,inst_3972);
} else {
if((state_val_3995 === (21))){
var inst_3985 = (state_3994[(2)]);
var state_3994__$1 = state_3994;
var statearr_4002_4065 = state_3994__$1;
(statearr_4002_4065[(2)] = inst_3985);

(statearr_4002_4065[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3995 === (13))){
var inst_3987 = (state_3994[(2)]);
var state_3994__$1 = (function (){var statearr_4003 = state_3994;
(statearr_4003[(9)] = inst_3987);

return statearr_4003;
})();
var statearr_4004_4066 = state_3994__$1;
(statearr_4004_4066[(2)] = null);

(statearr_4004_4066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3995 === (6))){
var inst_3959 = (state_3994[(7)]);
var state_3994__$1 = state_3994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3994__$1,(11),inst_3959);
} else {
if((state_val_3995 === (17))){
var inst_3980 = (state_3994[(2)]);
var state_3994__$1 = state_3994;
if(cljs.core.truth_(inst_3980)){
var statearr_4005_4067 = state_3994__$1;
(statearr_4005_4067[(1)] = (19));

} else {
var statearr_4006_4068 = state_3994__$1;
(statearr_4006_4068[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3995 === (3))){
var inst_3992 = (state_3994[(2)]);
var state_3994__$1 = state_3994;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3994__$1,inst_3992);
} else {
if((state_val_3995 === (12))){
var inst_3969 = (state_3994[(10)]);
var state_3994__$1 = state_3994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3994__$1,(14),inst_3969);
} else {
if((state_val_3995 === (2))){
var state_3994__$1 = state_3994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3994__$1,(4),results);
} else {
if((state_val_3995 === (19))){
var state_3994__$1 = state_3994;
var statearr_4007_4069 = state_3994__$1;
(statearr_4007_4069[(2)] = null);

(statearr_4007_4069[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3995 === (11))){
var inst_3969 = (state_3994[(2)]);
var state_3994__$1 = (function (){var statearr_4008 = state_3994;
(statearr_4008[(10)] = inst_3969);

return statearr_4008;
})();
var statearr_4009_4070 = state_3994__$1;
(statearr_4009_4070[(2)] = null);

(statearr_4009_4070[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3995 === (9))){
var state_3994__$1 = state_3994;
var statearr_4010_4071 = state_3994__$1;
(statearr_4010_4071[(2)] = null);

(statearr_4010_4071[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3995 === (5))){
var state_3994__$1 = state_3994;
if(cljs.core.truth_(close_QMARK_)){
var statearr_4011_4072 = state_3994__$1;
(statearr_4011_4072[(1)] = (8));

} else {
var statearr_4012_4073 = state_3994__$1;
(statearr_4012_4073[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3995 === (14))){
var inst_3972 = (state_3994[(8)]);
var inst_3974 = (state_3994[(11)]);
var inst_3972__$1 = (state_3994[(2)]);
var inst_3973 = (inst_3972__$1 == null);
var inst_3974__$1 = cljs.core.not.call(null,inst_3973);
var state_3994__$1 = (function (){var statearr_4013 = state_3994;
(statearr_4013[(8)] = inst_3972__$1);

(statearr_4013[(11)] = inst_3974__$1);

return statearr_4013;
})();
if(inst_3974__$1){
var statearr_4014_4074 = state_3994__$1;
(statearr_4014_4074[(1)] = (15));

} else {
var statearr_4015_4075 = state_3994__$1;
(statearr_4015_4075[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3995 === (16))){
var inst_3974 = (state_3994[(11)]);
var state_3994__$1 = state_3994;
var statearr_4016_4076 = state_3994__$1;
(statearr_4016_4076[(2)] = inst_3974);

(statearr_4016_4076[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3995 === (10))){
var inst_3966 = (state_3994[(2)]);
var state_3994__$1 = state_3994;
var statearr_4017_4077 = state_3994__$1;
(statearr_4017_4077[(2)] = inst_3966);

(statearr_4017_4077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3995 === (18))){
var inst_3977 = (state_3994[(2)]);
var state_3994__$1 = state_3994;
var statearr_4018_4078 = state_3994__$1;
(statearr_4018_4078[(2)] = inst_3977);

(statearr_4018_4078[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3995 === (8))){
var inst_3963 = cljs.core.async.close_BANG_.call(null,to);
var state_3994__$1 = state_3994;
var statearr_4019_4079 = state_3994__$1;
(statearr_4019_4079[(2)] = inst_3963);

(statearr_4019_4079[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__3688__auto__,jobs,results,process,async))
;
return ((function (switch__3598__auto__,c__3688__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__3599__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__3599__auto____0 = (function (){
var statearr_4020 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4020[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__3599__auto__);

(statearr_4020[(1)] = (1));

return statearr_4020;
});
var cljs$core$async$pipeline_STAR__$_state_machine__3599__auto____1 = (function (state_3994){
while(true){
var ret_value__3600__auto__ = (function (){try{while(true){
var result__3601__auto__ = switch__3598__auto__.call(null,state_3994);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3601__auto__;
}
break;
}
}catch (e4021){if((e4021 instanceof Object)){
var ex__3602__auto__ = e4021;
var statearr_4022_4080 = state_3994;
(statearr_4022_4080[(5)] = ex__3602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3994);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4021;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4081 = state_3994;
state_3994 = G__4081;
continue;
} else {
return ret_value__3600__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__3599__auto__ = function(state_3994){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__3599__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__3599__auto____1.call(this,state_3994);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__3599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__3599__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__3599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__3599__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__3599__auto__;
})()
;})(switch__3598__auto__,c__3688__auto__,jobs,results,process,async))
})();
var state__3690__auto__ = (function (){var statearr_4023 = f__3689__auto__.call(null);
(statearr_4023[(6)] = c__3688__auto__);

return statearr_4023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3690__auto__);
});})(c__3688__auto__,jobs,results,process,async))
);

return c__3688__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__4083 = arguments.length;
switch (G__4083) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__4086 = arguments.length;
switch (G__4086) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__4089 = arguments.length;
switch (G__4089) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__3688__auto___4138 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3688__auto___4138,tc,fc){
return (function (){
var f__3689__auto__ = (function (){var switch__3598__auto__ = ((function (c__3688__auto___4138,tc,fc){
return (function (state_4115){
var state_val_4116 = (state_4115[(1)]);
if((state_val_4116 === (7))){
var inst_4111 = (state_4115[(2)]);
var state_4115__$1 = state_4115;
var statearr_4117_4139 = state_4115__$1;
(statearr_4117_4139[(2)] = inst_4111);

(statearr_4117_4139[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4116 === (1))){
var state_4115__$1 = state_4115;
var statearr_4118_4140 = state_4115__$1;
(statearr_4118_4140[(2)] = null);

(statearr_4118_4140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4116 === (4))){
var inst_4092 = (state_4115[(7)]);
var inst_4092__$1 = (state_4115[(2)]);
var inst_4093 = (inst_4092__$1 == null);
var state_4115__$1 = (function (){var statearr_4119 = state_4115;
(statearr_4119[(7)] = inst_4092__$1);

return statearr_4119;
})();
if(cljs.core.truth_(inst_4093)){
var statearr_4120_4141 = state_4115__$1;
(statearr_4120_4141[(1)] = (5));

} else {
var statearr_4121_4142 = state_4115__$1;
(statearr_4121_4142[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4116 === (13))){
var state_4115__$1 = state_4115;
var statearr_4122_4143 = state_4115__$1;
(statearr_4122_4143[(2)] = null);

(statearr_4122_4143[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4116 === (6))){
var inst_4092 = (state_4115[(7)]);
var inst_4098 = p.call(null,inst_4092);
var state_4115__$1 = state_4115;
if(cljs.core.truth_(inst_4098)){
var statearr_4123_4144 = state_4115__$1;
(statearr_4123_4144[(1)] = (9));

} else {
var statearr_4124_4145 = state_4115__$1;
(statearr_4124_4145[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4116 === (3))){
var inst_4113 = (state_4115[(2)]);
var state_4115__$1 = state_4115;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4115__$1,inst_4113);
} else {
if((state_val_4116 === (12))){
var state_4115__$1 = state_4115;
var statearr_4125_4146 = state_4115__$1;
(statearr_4125_4146[(2)] = null);

(statearr_4125_4146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4116 === (2))){
var state_4115__$1 = state_4115;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4115__$1,(4),ch);
} else {
if((state_val_4116 === (11))){
var inst_4092 = (state_4115[(7)]);
var inst_4102 = (state_4115[(2)]);
var state_4115__$1 = state_4115;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4115__$1,(8),inst_4102,inst_4092);
} else {
if((state_val_4116 === (9))){
var state_4115__$1 = state_4115;
var statearr_4126_4147 = state_4115__$1;
(statearr_4126_4147[(2)] = tc);

(statearr_4126_4147[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4116 === (5))){
var inst_4095 = cljs.core.async.close_BANG_.call(null,tc);
var inst_4096 = cljs.core.async.close_BANG_.call(null,fc);
var state_4115__$1 = (function (){var statearr_4127 = state_4115;
(statearr_4127[(8)] = inst_4095);

return statearr_4127;
})();
var statearr_4128_4148 = state_4115__$1;
(statearr_4128_4148[(2)] = inst_4096);

(statearr_4128_4148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4116 === (14))){
var inst_4109 = (state_4115[(2)]);
var state_4115__$1 = state_4115;
var statearr_4129_4149 = state_4115__$1;
(statearr_4129_4149[(2)] = inst_4109);

(statearr_4129_4149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4116 === (10))){
var state_4115__$1 = state_4115;
var statearr_4130_4150 = state_4115__$1;
(statearr_4130_4150[(2)] = fc);

(statearr_4130_4150[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4116 === (8))){
var inst_4104 = (state_4115[(2)]);
var state_4115__$1 = state_4115;
if(cljs.core.truth_(inst_4104)){
var statearr_4131_4151 = state_4115__$1;
(statearr_4131_4151[(1)] = (12));

} else {
var statearr_4132_4152 = state_4115__$1;
(statearr_4132_4152[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__3688__auto___4138,tc,fc))
;
return ((function (switch__3598__auto__,c__3688__auto___4138,tc,fc){
return (function() {
var cljs$core$async$state_machine__3599__auto__ = null;
var cljs$core$async$state_machine__3599__auto____0 = (function (){
var statearr_4133 = [null,null,null,null,null,null,null,null,null];
(statearr_4133[(0)] = cljs$core$async$state_machine__3599__auto__);

(statearr_4133[(1)] = (1));

return statearr_4133;
});
var cljs$core$async$state_machine__3599__auto____1 = (function (state_4115){
while(true){
var ret_value__3600__auto__ = (function (){try{while(true){
var result__3601__auto__ = switch__3598__auto__.call(null,state_4115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3601__auto__;
}
break;
}
}catch (e4134){if((e4134 instanceof Object)){
var ex__3602__auto__ = e4134;
var statearr_4135_4153 = state_4115;
(statearr_4135_4153[(5)] = ex__3602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4134;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4154 = state_4115;
state_4115 = G__4154;
continue;
} else {
return ret_value__3600__auto__;
}
break;
}
});
cljs$core$async$state_machine__3599__auto__ = function(state_4115){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3599__auto____1.call(this,state_4115);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3599__auto____0;
cljs$core$async$state_machine__3599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3599__auto____1;
return cljs$core$async$state_machine__3599__auto__;
})()
;})(switch__3598__auto__,c__3688__auto___4138,tc,fc))
})();
var state__3690__auto__ = (function (){var statearr_4136 = f__3689__auto__.call(null);
(statearr_4136[(6)] = c__3688__auto___4138);

return statearr_4136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3690__auto__);
});})(c__3688__auto___4138,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__3688__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3688__auto__){
return (function (){
var f__3689__auto__ = (function (){var switch__3598__auto__ = ((function (c__3688__auto__){
return (function (state_4175){
var state_val_4176 = (state_4175[(1)]);
if((state_val_4176 === (7))){
var inst_4171 = (state_4175[(2)]);
var state_4175__$1 = state_4175;
var statearr_4177_4195 = state_4175__$1;
(statearr_4177_4195[(2)] = inst_4171);

(statearr_4177_4195[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4176 === (1))){
var inst_4155 = init;
var state_4175__$1 = (function (){var statearr_4178 = state_4175;
(statearr_4178[(7)] = inst_4155);

return statearr_4178;
})();
var statearr_4179_4196 = state_4175__$1;
(statearr_4179_4196[(2)] = null);

(statearr_4179_4196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4176 === (4))){
var inst_4158 = (state_4175[(8)]);
var inst_4158__$1 = (state_4175[(2)]);
var inst_4159 = (inst_4158__$1 == null);
var state_4175__$1 = (function (){var statearr_4180 = state_4175;
(statearr_4180[(8)] = inst_4158__$1);

return statearr_4180;
})();
if(cljs.core.truth_(inst_4159)){
var statearr_4181_4197 = state_4175__$1;
(statearr_4181_4197[(1)] = (5));

} else {
var statearr_4182_4198 = state_4175__$1;
(statearr_4182_4198[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4176 === (6))){
var inst_4158 = (state_4175[(8)]);
var inst_4155 = (state_4175[(7)]);
var inst_4162 = (state_4175[(9)]);
var inst_4162__$1 = f.call(null,inst_4155,inst_4158);
var inst_4163 = cljs.core.reduced_QMARK_.call(null,inst_4162__$1);
var state_4175__$1 = (function (){var statearr_4183 = state_4175;
(statearr_4183[(9)] = inst_4162__$1);

return statearr_4183;
})();
if(inst_4163){
var statearr_4184_4199 = state_4175__$1;
(statearr_4184_4199[(1)] = (8));

} else {
var statearr_4185_4200 = state_4175__$1;
(statearr_4185_4200[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4176 === (3))){
var inst_4173 = (state_4175[(2)]);
var state_4175__$1 = state_4175;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4175__$1,inst_4173);
} else {
if((state_val_4176 === (2))){
var state_4175__$1 = state_4175;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4175__$1,(4),ch);
} else {
if((state_val_4176 === (9))){
var inst_4162 = (state_4175[(9)]);
var inst_4155 = inst_4162;
var state_4175__$1 = (function (){var statearr_4186 = state_4175;
(statearr_4186[(7)] = inst_4155);

return statearr_4186;
})();
var statearr_4187_4201 = state_4175__$1;
(statearr_4187_4201[(2)] = null);

(statearr_4187_4201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4176 === (5))){
var inst_4155 = (state_4175[(7)]);
var state_4175__$1 = state_4175;
var statearr_4188_4202 = state_4175__$1;
(statearr_4188_4202[(2)] = inst_4155);

(statearr_4188_4202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4176 === (10))){
var inst_4169 = (state_4175[(2)]);
var state_4175__$1 = state_4175;
var statearr_4189_4203 = state_4175__$1;
(statearr_4189_4203[(2)] = inst_4169);

(statearr_4189_4203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4176 === (8))){
var inst_4162 = (state_4175[(9)]);
var inst_4165 = cljs.core.deref.call(null,inst_4162);
var state_4175__$1 = state_4175;
var statearr_4190_4204 = state_4175__$1;
(statearr_4190_4204[(2)] = inst_4165);

(statearr_4190_4204[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__3688__auto__))
;
return ((function (switch__3598__auto__,c__3688__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__3599__auto__ = null;
var cljs$core$async$reduce_$_state_machine__3599__auto____0 = (function (){
var statearr_4191 = [null,null,null,null,null,null,null,null,null,null];
(statearr_4191[(0)] = cljs$core$async$reduce_$_state_machine__3599__auto__);

(statearr_4191[(1)] = (1));

return statearr_4191;
});
var cljs$core$async$reduce_$_state_machine__3599__auto____1 = (function (state_4175){
while(true){
var ret_value__3600__auto__ = (function (){try{while(true){
var result__3601__auto__ = switch__3598__auto__.call(null,state_4175);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3601__auto__;
}
break;
}
}catch (e4192){if((e4192 instanceof Object)){
var ex__3602__auto__ = e4192;
var statearr_4193_4205 = state_4175;
(statearr_4193_4205[(5)] = ex__3602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4192;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4206 = state_4175;
state_4175 = G__4206;
continue;
} else {
return ret_value__3600__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__3599__auto__ = function(state_4175){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__3599__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__3599__auto____1.call(this,state_4175);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__3599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__3599__auto____0;
cljs$core$async$reduce_$_state_machine__3599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__3599__auto____1;
return cljs$core$async$reduce_$_state_machine__3599__auto__;
})()
;})(switch__3598__auto__,c__3688__auto__))
})();
var state__3690__auto__ = (function (){var statearr_4194 = f__3689__auto__.call(null);
(statearr_4194[(6)] = c__3688__auto__);

return statearr_4194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3690__auto__);
});})(c__3688__auto__))
);

return c__3688__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__3688__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3688__auto__,f__$1){
return (function (){
var f__3689__auto__ = (function (){var switch__3598__auto__ = ((function (c__3688__auto__,f__$1){
return (function (state_4212){
var state_val_4213 = (state_4212[(1)]);
if((state_val_4213 === (1))){
var inst_4207 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_4212__$1 = state_4212;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4212__$1,(2),inst_4207);
} else {
if((state_val_4213 === (2))){
var inst_4209 = (state_4212[(2)]);
var inst_4210 = f__$1.call(null,inst_4209);
var state_4212__$1 = state_4212;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4212__$1,inst_4210);
} else {
return null;
}
}
});})(c__3688__auto__,f__$1))
;
return ((function (switch__3598__auto__,c__3688__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__3599__auto__ = null;
var cljs$core$async$transduce_$_state_machine__3599__auto____0 = (function (){
var statearr_4214 = [null,null,null,null,null,null,null];
(statearr_4214[(0)] = cljs$core$async$transduce_$_state_machine__3599__auto__);

(statearr_4214[(1)] = (1));

return statearr_4214;
});
var cljs$core$async$transduce_$_state_machine__3599__auto____1 = (function (state_4212){
while(true){
var ret_value__3600__auto__ = (function (){try{while(true){
var result__3601__auto__ = switch__3598__auto__.call(null,state_4212);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3601__auto__;
}
break;
}
}catch (e4215){if((e4215 instanceof Object)){
var ex__3602__auto__ = e4215;
var statearr_4216_4218 = state_4212;
(statearr_4216_4218[(5)] = ex__3602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4212);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4215;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4219 = state_4212;
state_4212 = G__4219;
continue;
} else {
return ret_value__3600__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__3599__auto__ = function(state_4212){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__3599__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__3599__auto____1.call(this,state_4212);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__3599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__3599__auto____0;
cljs$core$async$transduce_$_state_machine__3599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__3599__auto____1;
return cljs$core$async$transduce_$_state_machine__3599__auto__;
})()
;})(switch__3598__auto__,c__3688__auto__,f__$1))
})();
var state__3690__auto__ = (function (){var statearr_4217 = f__3689__auto__.call(null);
(statearr_4217[(6)] = c__3688__auto__);

return statearr_4217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3690__auto__);
});})(c__3688__auto__,f__$1))
);

return c__3688__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__4221 = arguments.length;
switch (G__4221) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__3688__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3688__auto__){
return (function (){
var f__3689__auto__ = (function (){var switch__3598__auto__ = ((function (c__3688__auto__){
return (function (state_4246){
var state_val_4247 = (state_4246[(1)]);
if((state_val_4247 === (7))){
var inst_4228 = (state_4246[(2)]);
var state_4246__$1 = state_4246;
var statearr_4248_4269 = state_4246__$1;
(statearr_4248_4269[(2)] = inst_4228);

(statearr_4248_4269[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4247 === (1))){
var inst_4222 = cljs.core.seq.call(null,coll);
var inst_4223 = inst_4222;
var state_4246__$1 = (function (){var statearr_4249 = state_4246;
(statearr_4249[(7)] = inst_4223);

return statearr_4249;
})();
var statearr_4250_4270 = state_4246__$1;
(statearr_4250_4270[(2)] = null);

(statearr_4250_4270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4247 === (4))){
var inst_4223 = (state_4246[(7)]);
var inst_4226 = cljs.core.first.call(null,inst_4223);
var state_4246__$1 = state_4246;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4246__$1,(7),ch,inst_4226);
} else {
if((state_val_4247 === (13))){
var inst_4240 = (state_4246[(2)]);
var state_4246__$1 = state_4246;
var statearr_4251_4271 = state_4246__$1;
(statearr_4251_4271[(2)] = inst_4240);

(statearr_4251_4271[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4247 === (6))){
var inst_4231 = (state_4246[(2)]);
var state_4246__$1 = state_4246;
if(cljs.core.truth_(inst_4231)){
var statearr_4252_4272 = state_4246__$1;
(statearr_4252_4272[(1)] = (8));

} else {
var statearr_4253_4273 = state_4246__$1;
(statearr_4253_4273[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4247 === (3))){
var inst_4244 = (state_4246[(2)]);
var state_4246__$1 = state_4246;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4246__$1,inst_4244);
} else {
if((state_val_4247 === (12))){
var state_4246__$1 = state_4246;
var statearr_4254_4274 = state_4246__$1;
(statearr_4254_4274[(2)] = null);

(statearr_4254_4274[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4247 === (2))){
var inst_4223 = (state_4246[(7)]);
var state_4246__$1 = state_4246;
if(cljs.core.truth_(inst_4223)){
var statearr_4255_4275 = state_4246__$1;
(statearr_4255_4275[(1)] = (4));

} else {
var statearr_4256_4276 = state_4246__$1;
(statearr_4256_4276[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4247 === (11))){
var inst_4237 = cljs.core.async.close_BANG_.call(null,ch);
var state_4246__$1 = state_4246;
var statearr_4257_4277 = state_4246__$1;
(statearr_4257_4277[(2)] = inst_4237);

(statearr_4257_4277[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4247 === (9))){
var state_4246__$1 = state_4246;
if(cljs.core.truth_(close_QMARK_)){
var statearr_4258_4278 = state_4246__$1;
(statearr_4258_4278[(1)] = (11));

} else {
var statearr_4259_4279 = state_4246__$1;
(statearr_4259_4279[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4247 === (5))){
var inst_4223 = (state_4246[(7)]);
var state_4246__$1 = state_4246;
var statearr_4260_4280 = state_4246__$1;
(statearr_4260_4280[(2)] = inst_4223);

(statearr_4260_4280[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4247 === (10))){
var inst_4242 = (state_4246[(2)]);
var state_4246__$1 = state_4246;
var statearr_4261_4281 = state_4246__$1;
(statearr_4261_4281[(2)] = inst_4242);

(statearr_4261_4281[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4247 === (8))){
var inst_4223 = (state_4246[(7)]);
var inst_4233 = cljs.core.next.call(null,inst_4223);
var inst_4223__$1 = inst_4233;
var state_4246__$1 = (function (){var statearr_4262 = state_4246;
(statearr_4262[(7)] = inst_4223__$1);

return statearr_4262;
})();
var statearr_4263_4282 = state_4246__$1;
(statearr_4263_4282[(2)] = null);

(statearr_4263_4282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__3688__auto__))
;
return ((function (switch__3598__auto__,c__3688__auto__){
return (function() {
var cljs$core$async$state_machine__3599__auto__ = null;
var cljs$core$async$state_machine__3599__auto____0 = (function (){
var statearr_4264 = [null,null,null,null,null,null,null,null];
(statearr_4264[(0)] = cljs$core$async$state_machine__3599__auto__);

(statearr_4264[(1)] = (1));

return statearr_4264;
});
var cljs$core$async$state_machine__3599__auto____1 = (function (state_4246){
while(true){
var ret_value__3600__auto__ = (function (){try{while(true){
var result__3601__auto__ = switch__3598__auto__.call(null,state_4246);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3601__auto__;
}
break;
}
}catch (e4265){if((e4265 instanceof Object)){
var ex__3602__auto__ = e4265;
var statearr_4266_4283 = state_4246;
(statearr_4266_4283[(5)] = ex__3602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4246);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4265;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4284 = state_4246;
state_4246 = G__4284;
continue;
} else {
return ret_value__3600__auto__;
}
break;
}
});
cljs$core$async$state_machine__3599__auto__ = function(state_4246){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3599__auto____1.call(this,state_4246);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3599__auto____0;
cljs$core$async$state_machine__3599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3599__auto____1;
return cljs$core$async$state_machine__3599__auto__;
})()
;})(switch__3598__auto__,c__3688__auto__))
})();
var state__3690__auto__ = (function (){var statearr_4267 = f__3689__auto__.call(null);
(statearr_4267[(6)] = c__3688__auto__);

return statearr_4267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3690__auto__);
});})(c__3688__auto__))
);

return c__3688__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async4285 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4285 = (function (ch,cs,meta4286){
this.ch = ch;
this.cs = cs;
this.meta4286 = meta4286;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4285.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_4287,meta4286__$1){
var self__ = this;
var _4287__$1 = this;
return (new cljs.core.async.t_cljs$core$async4285(self__.ch,self__.cs,meta4286__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async4285.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_4287){
var self__ = this;
var _4287__$1 = this;
return self__.meta4286;
});})(cs))
;

cljs.core.async.t_cljs$core$async4285.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4285.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async4285.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4285.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async4285.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async4285.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async4285.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta4286","meta4286",-645632919,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async4285.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4285.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4285";

cljs.core.async.t_cljs$core$async4285.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async4285");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4285.
 */
cljs.core.async.__GT_t_cljs$core$async4285 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async4285(ch__$1,cs__$1,meta4286){
return (new cljs.core.async.t_cljs$core$async4285(ch__$1,cs__$1,meta4286));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async4285(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__3688__auto___4507 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3688__auto___4507,cs,m,dchan,dctr,done){
return (function (){
var f__3689__auto__ = (function (){var switch__3598__auto__ = ((function (c__3688__auto___4507,cs,m,dchan,dctr,done){
return (function (state_4422){
var state_val_4423 = (state_4422[(1)]);
if((state_val_4423 === (7))){
var inst_4418 = (state_4422[(2)]);
var state_4422__$1 = state_4422;
var statearr_4424_4508 = state_4422__$1;
(statearr_4424_4508[(2)] = inst_4418);

(statearr_4424_4508[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4423 === (20))){
var inst_4321 = (state_4422[(7)]);
var inst_4333 = cljs.core.first.call(null,inst_4321);
var inst_4334 = cljs.core.nth.call(null,inst_4333,(0),null);
var inst_4335 = cljs.core.nth.call(null,inst_4333,(1),null);
var state_4422__$1 = (function (){var statearr_4425 = state_4422;
(statearr_4425[(8)] = inst_4334);

return statearr_4425;
})();
if(cljs.core.truth_(inst_4335)){
var statearr_4426_4509 = state_4422__$1;
(statearr_4426_4509[(1)] = (22));

} else {
var statearr_4427_4510 = state_4422__$1;
(statearr_4427_4510[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4423 === (27))){
var inst_4365 = (state_4422[(9)]);
var inst_4290 = (state_4422[(10)]);
var inst_4370 = (state_4422[(11)]);
var inst_4363 = (state_4422[(12)]);
var inst_4370__$1 = cljs.core._nth.call(null,inst_4363,inst_4365);
var inst_4371 = cljs.core.async.put_BANG_.call(null,inst_4370__$1,inst_4290,done);
var state_4422__$1 = (function (){var statearr_4428 = state_4422;
(statearr_4428[(11)] = inst_4370__$1);

return statearr_4428;
})();
if(cljs.core.truth_(inst_4371)){
var statearr_4429_4511 = state_4422__$1;
(statearr_4429_4511[(1)] = (30));

} else {
var statearr_4430_4512 = state_4422__$1;
(statearr_4430_4512[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4423 === (1))){
var state_4422__$1 = state_4422;
var statearr_4431_4513 = state_4422__$1;
(statearr_4431_4513[(2)] = null);

(statearr_4431_4513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4423 === (24))){
var inst_4321 = (state_4422[(7)]);
var inst_4340 = (state_4422[(2)]);
var inst_4341 = cljs.core.next.call(null,inst_4321);
var inst_4299 = inst_4341;
var inst_4300 = null;
var inst_4301 = (0);
var inst_4302 = (0);
var state_4422__$1 = (function (){var statearr_4432 = state_4422;
(statearr_4432[(13)] = inst_4300);

(statearr_4432[(14)] = inst_4302);

(statearr_4432[(15)] = inst_4301);

(statearr_4432[(16)] = inst_4340);

(statearr_4432[(17)] = inst_4299);

return statearr_4432;
})();
var statearr_4433_4514 = state_4422__$1;
(statearr_4433_4514[(2)] = null);

(statearr_4433_4514[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4423 === (39))){
var state_4422__$1 = state_4422;
var statearr_4437_4515 = state_4422__$1;
(statearr_4437_4515[(2)] = null);

(statearr_4437_4515[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4423 === (4))){
var inst_4290 = (state_4422[(10)]);
var inst_4290__$1 = (state_4422[(2)]);
var inst_4291 = (inst_4290__$1 == null);
var state_4422__$1 = (function (){var statearr_4438 = state_4422;
(statearr_4438[(10)] = inst_4290__$1);

return statearr_4438;
})();
if(cljs.core.truth_(inst_4291)){
var statearr_4439_4516 = state_4422__$1;
(statearr_4439_4516[(1)] = (5));

} else {
var statearr_4440_4517 = state_4422__$1;
(statearr_4440_4517[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4423 === (15))){
var inst_4300 = (state_4422[(13)]);
var inst_4302 = (state_4422[(14)]);
var inst_4301 = (state_4422[(15)]);
var inst_4299 = (state_4422[(17)]);
var inst_4317 = (state_4422[(2)]);
var inst_4318 = (inst_4302 + (1));
var tmp4434 = inst_4300;
var tmp4435 = inst_4301;
var tmp4436 = inst_4299;
var inst_4299__$1 = tmp4436;
var inst_4300__$1 = tmp4434;
var inst_4301__$1 = tmp4435;
var inst_4302__$1 = inst_4318;
var state_4422__$1 = (function (){var statearr_4441 = state_4422;
(statearr_4441[(18)] = inst_4317);

(statearr_4441[(13)] = inst_4300__$1);

(statearr_4441[(14)] = inst_4302__$1);

(statearr_4441[(15)] = inst_4301__$1);

(statearr_4441[(17)] = inst_4299__$1);

return statearr_4441;
})();
var statearr_4442_4518 = state_4422__$1;
(statearr_4442_4518[(2)] = null);

(statearr_4442_4518[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4423 === (21))){
var inst_4344 = (state_4422[(2)]);
var state_4422__$1 = state_4422;
var statearr_4446_4519 = state_4422__$1;
(statearr_4446_4519[(2)] = inst_4344);

(statearr_4446_4519[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4423 === (31))){
var inst_4370 = (state_4422[(11)]);
var inst_4374 = done.call(null,null);
var inst_4375 = cljs.core.async.untap_STAR_.call(null,m,inst_4370);
var state_4422__$1 = (function (){var statearr_4447 = state_4422;
(statearr_4447[(19)] = inst_4374);

return statearr_4447;
})();
var statearr_4448_4520 = state_4422__$1;
(statearr_4448_4520[(2)] = inst_4375);

(statearr_4448_4520[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4423 === (32))){
var inst_4362 = (state_4422[(20)]);
var inst_4365 = (state_4422[(9)]);
var inst_4364 = (state_4422[(21)]);
var inst_4363 = (state_4422[(12)]);
var inst_4377 = (state_4422[(2)]);
var inst_4378 = (inst_4365 + (1));
var tmp4443 = inst_4362;
var tmp4444 = inst_4364;
var tmp4445 = inst_4363;
var inst_4362__$1 = tmp4443;
var inst_4363__$1 = tmp4445;
var inst_4364__$1 = tmp4444;
var inst_4365__$1 = inst_4378;
var state_4422__$1 = (function (){var statearr_4449 = state_4422;
(statearr_4449[(20)] = inst_4362__$1);

(statearr_4449[(9)] = inst_4365__$1);

(statearr_4449[(21)] = inst_4364__$1);

(statearr_4449[(22)] = inst_4377);

(statearr_4449[(12)] = inst_4363__$1);

return statearr_4449;
})();
var statearr_4450_4521 = state_4422__$1;
(statearr_4450_4521[(2)] = null);

(statearr_4450_4521[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4423 === (40))){
var inst_4390 = (state_4422[(23)]);
var inst_4394 = done.call(null,null);
var inst_4395 = cljs.core.async.untap_STAR_.call(null,m,inst_4390);
var state_4422__$1 = (function (){var statearr_4451 = state_4422;
(statearr_4451[(24)] = inst_4394);

return statearr_4451;
})();
var statearr_4452_4522 = state_4422__$1;
(statearr_4452_4522[(2)] = inst_4395);

(statearr_4452_4522[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4423 === (33))){
var inst_4381 = (state_4422[(25)]);
var inst_4383 = cljs.core.chunked_seq_QMARK_.call(null,inst_4381);
var state_4422__$1 = state_4422;
if(inst_4383){
var statearr_4453_4523 = state_4422__$1;
(statearr_4453_4523[(1)] = (36));

} else {
var statearr_4454_4524 = state_4422__$1;
(statearr_4454_4524[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4423 === (13))){
var inst_4311 = (state_4422[(26)]);
var inst_4314 = cljs.core.async.close_BANG_.call(null,inst_4311);
var state_4422__$1 = state_4422;
var statearr_4455_4525 = state_4422__$1;
(statearr_4455_4525[(2)] = inst_4314);

(statearr_4455_4525[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4423 === (22))){
var inst_4334 = (state_4422[(8)]);
var inst_4337 = cljs.core.async.close_BANG_.call(null,inst_4334);
var state_4422__$1 = state_4422;
var statearr_4456_4526 = state_4422__$1;
(statearr_4456_4526[(2)] = inst_4337);

(statearr_4456_4526[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4423 === (36))){
var inst_4381 = (state_4422[(25)]);
var inst_4385 = cljs.core.chunk_first.call(null,inst_4381);
var inst_4386 = cljs.core.chunk_rest.call(null,inst_4381);
var inst_4387 = cljs.core.count.call(null,inst_4385);
var inst_4362 = inst_4386;
var inst_4363 = inst_4385;
var inst_4364 = inst_4387;
var inst_4365 = (0);
var state_4422__$1 = (function (){var statearr_4457 = state_4422;
(statearr_4457[(20)] = inst_4362);

(statearr_4457[(9)] = inst_4365);

(statearr_4457[(21)] = inst_4364);

(statearr_4457[(12)] = inst_4363);

return statearr_4457;
})();
var statearr_4458_4527 = state_4422__$1;
(statearr_4458_4527[(2)] = null);

(statearr_4458_4527[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4423 === (41))){
var inst_4381 = (state_4422[(25)]);
var inst_4397 = (state_4422[(2)]);
var inst_4398 = cljs.core.next.call(null,inst_4381);
var inst_4362 = inst_4398;
var inst_4363 = null;
var inst_4364 = (0);
var inst_4365 = (0);
var state_4422__$1 = (function (){var statearr_4459 = state_4422;
(statearr_4459[(20)] = inst_4362);

(statearr_4459[(9)] = inst_4365);

(statearr_4459[(27)] = inst_4397);

(statearr_4459[(21)] = inst_4364);

(statearr_4459[(12)] = inst_4363);

return statearr_4459;
})();
var statearr_4460_4528 = state_4422__$1;
(statearr_4460_4528[(2)] = null);

(statearr_4460_4528[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4423 === (43))){
var state_4422__$1 = state_4422;
var statearr_4461_4529 = state_4422__$1;
(statearr_4461_4529[(2)] = null);

(statearr_4461_4529[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4423 === (29))){
var inst_4406 = (state_4422[(2)]);
var state_4422__$1 = state_4422;
var statearr_4462_4530 = state_4422__$1;
(statearr_4462_4530[(2)] = inst_4406);

(statearr_4462_4530[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4423 === (44))){
var inst_4415 = (state_4422[(2)]);
var state_4422__$1 = (function (){var statearr_4463 = state_4422;
(statearr_4463[(28)] = inst_4415);

return statearr_4463;
})();
var statearr_4464_4531 = state_4422__$1;
(statearr_4464_4531[(2)] = null);

(statearr_4464_4531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4423 === (6))){
var inst_4354 = (state_4422[(29)]);
var inst_4353 = cljs.core.deref.call(null,cs);
var inst_4354__$1 = cljs.core.keys.call(null,inst_4353);
var inst_4355 = cljs.core.count.call(null,inst_4354__$1);
var inst_4356 = cljs.core.reset_BANG_.call(null,dctr,inst_4355);
var inst_4361 = cljs.core.seq.call(null,inst_4354__$1);
var inst_4362 = inst_4361;
var inst_4363 = null;
var inst_4364 = (0);
var inst_4365 = (0);
var state_4422__$1 = (function (){var statearr_4465 = state_4422;
(statearr_4465[(20)] = inst_4362);

(statearr_4465[(9)] = inst_4365);

(statearr_4465[(30)] = inst_4356);

(statearr_4465[(21)] = inst_4364);

(statearr_4465[(29)] = inst_4354__$1);

(statearr_4465[(12)] = inst_4363);

return statearr_4465;
})();
var statearr_4466_4532 = state_4422__$1;
(statearr_4466_4532[(2)] = null);

(statearr_4466_4532[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4423 === (28))){
var inst_4362 = (state_4422[(20)]);
var inst_4381 = (state_4422[(25)]);
var inst_4381__$1 = cljs.core.seq.call(null,inst_4362);
var state_4422__$1 = (function (){var statearr_4467 = state_4422;
(statearr_4467[(25)] = inst_4381__$1);

return statearr_4467;
})();
if(inst_4381__$1){
var statearr_4468_4533 = state_4422__$1;
(statearr_4468_4533[(1)] = (33));

} else {
var statearr_4469_4534 = state_4422__$1;
(statearr_4469_4534[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4423 === (25))){
var inst_4365 = (state_4422[(9)]);
var inst_4364 = (state_4422[(21)]);
var inst_4367 = (inst_4365 < inst_4364);
var inst_4368 = inst_4367;
var state_4422__$1 = state_4422;
if(cljs.core.truth_(inst_4368)){
var statearr_4470_4535 = state_4422__$1;
(statearr_4470_4535[(1)] = (27));

} else {
var statearr_4471_4536 = state_4422__$1;
(statearr_4471_4536[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4423 === (34))){
var state_4422__$1 = state_4422;
var statearr_4472_4537 = state_4422__$1;
(statearr_4472_4537[(2)] = null);

(statearr_4472_4537[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4423 === (17))){
var state_4422__$1 = state_4422;
var statearr_4473_4538 = state_4422__$1;
(statearr_4473_4538[(2)] = null);

(statearr_4473_4538[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4423 === (3))){
var inst_4420 = (state_4422[(2)]);
var state_4422__$1 = state_4422;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4422__$1,inst_4420);
} else {
if((state_val_4423 === (12))){
var inst_4349 = (state_4422[(2)]);
var state_4422__$1 = state_4422;
var statearr_4474_4539 = state_4422__$1;
(statearr_4474_4539[(2)] = inst_4349);

(statearr_4474_4539[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4423 === (2))){
var state_4422__$1 = state_4422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4422__$1,(4),ch);
} else {
if((state_val_4423 === (23))){
var state_4422__$1 = state_4422;
var statearr_4475_4540 = state_4422__$1;
(statearr_4475_4540[(2)] = null);

(statearr_4475_4540[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4423 === (35))){
var inst_4404 = (state_4422[(2)]);
var state_4422__$1 = state_4422;
var statearr_4476_4541 = state_4422__$1;
(statearr_4476_4541[(2)] = inst_4404);

(statearr_4476_4541[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4423 === (19))){
var inst_4321 = (state_4422[(7)]);
var inst_4325 = cljs.core.chunk_first.call(null,inst_4321);
var inst_4326 = cljs.core.chunk_rest.call(null,inst_4321);
var inst_4327 = cljs.core.count.call(null,inst_4325);
var inst_4299 = inst_4326;
var inst_4300 = inst_4325;
var inst_4301 = inst_4327;
var inst_4302 = (0);
var state_4422__$1 = (function (){var statearr_4477 = state_4422;
(statearr_4477[(13)] = inst_4300);

(statearr_4477[(14)] = inst_4302);

(statearr_4477[(15)] = inst_4301);

(statearr_4477[(17)] = inst_4299);

return statearr_4477;
})();
var statearr_4478_4542 = state_4422__$1;
(statearr_4478_4542[(2)] = null);

(statearr_4478_4542[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4423 === (11))){
var inst_4321 = (state_4422[(7)]);
var inst_4299 = (state_4422[(17)]);
var inst_4321__$1 = cljs.core.seq.call(null,inst_4299);
var state_4422__$1 = (function (){var statearr_4479 = state_4422;
(statearr_4479[(7)] = inst_4321__$1);

return statearr_4479;
})();
if(inst_4321__$1){
var statearr_4480_4543 = state_4422__$1;
(statearr_4480_4543[(1)] = (16));

} else {
var statearr_4481_4544 = state_4422__$1;
(statearr_4481_4544[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4423 === (9))){
var inst_4351 = (state_4422[(2)]);
var state_4422__$1 = state_4422;
var statearr_4482_4545 = state_4422__$1;
(statearr_4482_4545[(2)] = inst_4351);

(statearr_4482_4545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4423 === (5))){
var inst_4297 = cljs.core.deref.call(null,cs);
var inst_4298 = cljs.core.seq.call(null,inst_4297);
var inst_4299 = inst_4298;
var inst_4300 = null;
var inst_4301 = (0);
var inst_4302 = (0);
var state_4422__$1 = (function (){var statearr_4483 = state_4422;
(statearr_4483[(13)] = inst_4300);

(statearr_4483[(14)] = inst_4302);

(statearr_4483[(15)] = inst_4301);

(statearr_4483[(17)] = inst_4299);

return statearr_4483;
})();
var statearr_4484_4546 = state_4422__$1;
(statearr_4484_4546[(2)] = null);

(statearr_4484_4546[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4423 === (14))){
var state_4422__$1 = state_4422;
var statearr_4485_4547 = state_4422__$1;
(statearr_4485_4547[(2)] = null);

(statearr_4485_4547[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4423 === (45))){
var inst_4412 = (state_4422[(2)]);
var state_4422__$1 = state_4422;
var statearr_4486_4548 = state_4422__$1;
(statearr_4486_4548[(2)] = inst_4412);

(statearr_4486_4548[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4423 === (26))){
var inst_4354 = (state_4422[(29)]);
var inst_4408 = (state_4422[(2)]);
var inst_4409 = cljs.core.seq.call(null,inst_4354);
var state_4422__$1 = (function (){var statearr_4487 = state_4422;
(statearr_4487[(31)] = inst_4408);

return statearr_4487;
})();
if(inst_4409){
var statearr_4488_4549 = state_4422__$1;
(statearr_4488_4549[(1)] = (42));

} else {
var statearr_4489_4550 = state_4422__$1;
(statearr_4489_4550[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4423 === (16))){
var inst_4321 = (state_4422[(7)]);
var inst_4323 = cljs.core.chunked_seq_QMARK_.call(null,inst_4321);
var state_4422__$1 = state_4422;
if(inst_4323){
var statearr_4490_4551 = state_4422__$1;
(statearr_4490_4551[(1)] = (19));

} else {
var statearr_4491_4552 = state_4422__$1;
(statearr_4491_4552[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4423 === (38))){
var inst_4401 = (state_4422[(2)]);
var state_4422__$1 = state_4422;
var statearr_4492_4553 = state_4422__$1;
(statearr_4492_4553[(2)] = inst_4401);

(statearr_4492_4553[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4423 === (30))){
var state_4422__$1 = state_4422;
var statearr_4493_4554 = state_4422__$1;
(statearr_4493_4554[(2)] = null);

(statearr_4493_4554[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4423 === (10))){
var inst_4300 = (state_4422[(13)]);
var inst_4302 = (state_4422[(14)]);
var inst_4310 = cljs.core._nth.call(null,inst_4300,inst_4302);
var inst_4311 = cljs.core.nth.call(null,inst_4310,(0),null);
var inst_4312 = cljs.core.nth.call(null,inst_4310,(1),null);
var state_4422__$1 = (function (){var statearr_4494 = state_4422;
(statearr_4494[(26)] = inst_4311);

return statearr_4494;
})();
if(cljs.core.truth_(inst_4312)){
var statearr_4495_4555 = state_4422__$1;
(statearr_4495_4555[(1)] = (13));

} else {
var statearr_4496_4556 = state_4422__$1;
(statearr_4496_4556[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4423 === (18))){
var inst_4347 = (state_4422[(2)]);
var state_4422__$1 = state_4422;
var statearr_4497_4557 = state_4422__$1;
(statearr_4497_4557[(2)] = inst_4347);

(statearr_4497_4557[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4423 === (42))){
var state_4422__$1 = state_4422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4422__$1,(45),dchan);
} else {
if((state_val_4423 === (37))){
var inst_4390 = (state_4422[(23)]);
var inst_4381 = (state_4422[(25)]);
var inst_4290 = (state_4422[(10)]);
var inst_4390__$1 = cljs.core.first.call(null,inst_4381);
var inst_4391 = cljs.core.async.put_BANG_.call(null,inst_4390__$1,inst_4290,done);
var state_4422__$1 = (function (){var statearr_4498 = state_4422;
(statearr_4498[(23)] = inst_4390__$1);

return statearr_4498;
})();
if(cljs.core.truth_(inst_4391)){
var statearr_4499_4558 = state_4422__$1;
(statearr_4499_4558[(1)] = (39));

} else {
var statearr_4500_4559 = state_4422__$1;
(statearr_4500_4559[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4423 === (8))){
var inst_4302 = (state_4422[(14)]);
var inst_4301 = (state_4422[(15)]);
var inst_4304 = (inst_4302 < inst_4301);
var inst_4305 = inst_4304;
var state_4422__$1 = state_4422;
if(cljs.core.truth_(inst_4305)){
var statearr_4501_4560 = state_4422__$1;
(statearr_4501_4560[(1)] = (10));

} else {
var statearr_4502_4561 = state_4422__$1;
(statearr_4502_4561[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__3688__auto___4507,cs,m,dchan,dctr,done))
;
return ((function (switch__3598__auto__,c__3688__auto___4507,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__3599__auto__ = null;
var cljs$core$async$mult_$_state_machine__3599__auto____0 = (function (){
var statearr_4503 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4503[(0)] = cljs$core$async$mult_$_state_machine__3599__auto__);

(statearr_4503[(1)] = (1));

return statearr_4503;
});
var cljs$core$async$mult_$_state_machine__3599__auto____1 = (function (state_4422){
while(true){
var ret_value__3600__auto__ = (function (){try{while(true){
var result__3601__auto__ = switch__3598__auto__.call(null,state_4422);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3601__auto__;
}
break;
}
}catch (e4504){if((e4504 instanceof Object)){
var ex__3602__auto__ = e4504;
var statearr_4505_4562 = state_4422;
(statearr_4505_4562[(5)] = ex__3602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4422);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4504;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4563 = state_4422;
state_4422 = G__4563;
continue;
} else {
return ret_value__3600__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__3599__auto__ = function(state_4422){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__3599__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__3599__auto____1.call(this,state_4422);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__3599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__3599__auto____0;
cljs$core$async$mult_$_state_machine__3599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__3599__auto____1;
return cljs$core$async$mult_$_state_machine__3599__auto__;
})()
;})(switch__3598__auto__,c__3688__auto___4507,cs,m,dchan,dctr,done))
})();
var state__3690__auto__ = (function (){var statearr_4506 = f__3689__auto__.call(null);
(statearr_4506[(6)] = c__3688__auto___4507);

return statearr_4506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3690__auto__);
});})(c__3688__auto___4507,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__4565 = arguments.length;
switch (G__4565) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,state_map);
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,mode);
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___4577 = arguments.length;
var i__4500__auto___4578 = (0);
while(true){
if((i__4500__auto___4578 < len__4499__auto___4577)){
args__4502__auto__.push((arguments[i__4500__auto___4578]));

var G__4579 = (i__4500__auto___4578 + (1));
i__4500__auto___4578 = G__4579;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__4571){
var map__4572 = p__4571;
var map__4572__$1 = ((((!((map__4572 == null)))?(((((map__4572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4572):map__4572);
var opts = map__4572__$1;
var statearr_4574_4580 = state;
(statearr_4574_4580[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__4572,map__4572__$1,opts){
return (function (val){
var statearr_4575_4581 = state;
(statearr_4575_4581[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__4572,map__4572__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_4576_4582 = state;
(statearr_4576_4582[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq4567){
var G__4568 = cljs.core.first.call(null,seq4567);
var seq4567__$1 = cljs.core.next.call(null,seq4567);
var G__4569 = cljs.core.first.call(null,seq4567__$1);
var seq4567__$2 = cljs.core.next.call(null,seq4567__$1);
var G__4570 = cljs.core.first.call(null,seq4567__$2);
var seq4567__$3 = cljs.core.next.call(null,seq4567__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4568,G__4569,G__4570,seq4567__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async4583 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4583 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta4584){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta4584 = meta4584;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4583.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_4585,meta4584__$1){
var self__ = this;
var _4585__$1 = this;
return (new cljs.core.async.t_cljs$core$async4583(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta4584__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4583.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_4585){
var self__ = this;
var _4585__$1 = this;
return self__.meta4584;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4583.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4583.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4583.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4583.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4583.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4583.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4583.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4583.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4583.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta4584","meta4584",-608551829,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4583.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4583.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4583";

cljs.core.async.t_cljs$core$async4583.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async4583");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4583.
 */
cljs.core.async.__GT_t_cljs$core$async4583 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async4583(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta4584){
return (new cljs.core.async.t_cljs$core$async4583(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta4584));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async4583(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__3688__auto___4747 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3688__auto___4747,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__3689__auto__ = (function (){var switch__3598__auto__ = ((function (c__3688__auto___4747,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_4687){
var state_val_4688 = (state_4687[(1)]);
if((state_val_4688 === (7))){
var inst_4602 = (state_4687[(2)]);
var state_4687__$1 = state_4687;
var statearr_4689_4748 = state_4687__$1;
(statearr_4689_4748[(2)] = inst_4602);

(statearr_4689_4748[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4688 === (20))){
var inst_4614 = (state_4687[(7)]);
var state_4687__$1 = state_4687;
var statearr_4690_4749 = state_4687__$1;
(statearr_4690_4749[(2)] = inst_4614);

(statearr_4690_4749[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4688 === (27))){
var state_4687__$1 = state_4687;
var statearr_4691_4750 = state_4687__$1;
(statearr_4691_4750[(2)] = null);

(statearr_4691_4750[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4688 === (1))){
var inst_4589 = (state_4687[(8)]);
var inst_4589__$1 = calc_state.call(null);
var inst_4591 = (inst_4589__$1 == null);
var inst_4592 = cljs.core.not.call(null,inst_4591);
var state_4687__$1 = (function (){var statearr_4692 = state_4687;
(statearr_4692[(8)] = inst_4589__$1);

return statearr_4692;
})();
if(inst_4592){
var statearr_4693_4751 = state_4687__$1;
(statearr_4693_4751[(1)] = (2));

} else {
var statearr_4694_4752 = state_4687__$1;
(statearr_4694_4752[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4688 === (24))){
var inst_4638 = (state_4687[(9)]);
var inst_4661 = (state_4687[(10)]);
var inst_4647 = (state_4687[(11)]);
var inst_4661__$1 = inst_4638.call(null,inst_4647);
var state_4687__$1 = (function (){var statearr_4695 = state_4687;
(statearr_4695[(10)] = inst_4661__$1);

return statearr_4695;
})();
if(cljs.core.truth_(inst_4661__$1)){
var statearr_4696_4753 = state_4687__$1;
(statearr_4696_4753[(1)] = (29));

} else {
var statearr_4697_4754 = state_4687__$1;
(statearr_4697_4754[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4688 === (4))){
var inst_4605 = (state_4687[(2)]);
var state_4687__$1 = state_4687;
if(cljs.core.truth_(inst_4605)){
var statearr_4698_4755 = state_4687__$1;
(statearr_4698_4755[(1)] = (8));

} else {
var statearr_4699_4756 = state_4687__$1;
(statearr_4699_4756[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4688 === (15))){
var inst_4632 = (state_4687[(2)]);
var state_4687__$1 = state_4687;
if(cljs.core.truth_(inst_4632)){
var statearr_4700_4757 = state_4687__$1;
(statearr_4700_4757[(1)] = (19));

} else {
var statearr_4701_4758 = state_4687__$1;
(statearr_4701_4758[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4688 === (21))){
var inst_4637 = (state_4687[(12)]);
var inst_4637__$1 = (state_4687[(2)]);
var inst_4638 = cljs.core.get.call(null,inst_4637__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_4639 = cljs.core.get.call(null,inst_4637__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_4640 = cljs.core.get.call(null,inst_4637__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_4687__$1 = (function (){var statearr_4702 = state_4687;
(statearr_4702[(9)] = inst_4638);

(statearr_4702[(13)] = inst_4639);

(statearr_4702[(12)] = inst_4637__$1);

return statearr_4702;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_4687__$1,(22),inst_4640);
} else {
if((state_val_4688 === (31))){
var inst_4669 = (state_4687[(2)]);
var state_4687__$1 = state_4687;
if(cljs.core.truth_(inst_4669)){
var statearr_4703_4759 = state_4687__$1;
(statearr_4703_4759[(1)] = (32));

} else {
var statearr_4704_4760 = state_4687__$1;
(statearr_4704_4760[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4688 === (32))){
var inst_4646 = (state_4687[(14)]);
var state_4687__$1 = state_4687;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4687__$1,(35),out,inst_4646);
} else {
if((state_val_4688 === (33))){
var inst_4637 = (state_4687[(12)]);
var inst_4614 = inst_4637;
var state_4687__$1 = (function (){var statearr_4705 = state_4687;
(statearr_4705[(7)] = inst_4614);

return statearr_4705;
})();
var statearr_4706_4761 = state_4687__$1;
(statearr_4706_4761[(2)] = null);

(statearr_4706_4761[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4688 === (13))){
var inst_4614 = (state_4687[(7)]);
var inst_4621 = inst_4614.cljs$lang$protocol_mask$partition0$;
var inst_4622 = (inst_4621 & (64));
var inst_4623 = inst_4614.cljs$core$ISeq$;
var inst_4624 = (cljs.core.PROTOCOL_SENTINEL === inst_4623);
var inst_4625 = ((inst_4622) || (inst_4624));
var state_4687__$1 = state_4687;
if(cljs.core.truth_(inst_4625)){
var statearr_4707_4762 = state_4687__$1;
(statearr_4707_4762[(1)] = (16));

} else {
var statearr_4708_4763 = state_4687__$1;
(statearr_4708_4763[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4688 === (22))){
var inst_4647 = (state_4687[(11)]);
var inst_4646 = (state_4687[(14)]);
var inst_4645 = (state_4687[(2)]);
var inst_4646__$1 = cljs.core.nth.call(null,inst_4645,(0),null);
var inst_4647__$1 = cljs.core.nth.call(null,inst_4645,(1),null);
var inst_4648 = (inst_4646__$1 == null);
var inst_4649 = cljs.core._EQ_.call(null,inst_4647__$1,change);
var inst_4650 = ((inst_4648) || (inst_4649));
var state_4687__$1 = (function (){var statearr_4709 = state_4687;
(statearr_4709[(11)] = inst_4647__$1);

(statearr_4709[(14)] = inst_4646__$1);

return statearr_4709;
})();
if(cljs.core.truth_(inst_4650)){
var statearr_4710_4764 = state_4687__$1;
(statearr_4710_4764[(1)] = (23));

} else {
var statearr_4711_4765 = state_4687__$1;
(statearr_4711_4765[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4688 === (36))){
var inst_4637 = (state_4687[(12)]);
var inst_4614 = inst_4637;
var state_4687__$1 = (function (){var statearr_4712 = state_4687;
(statearr_4712[(7)] = inst_4614);

return statearr_4712;
})();
var statearr_4713_4766 = state_4687__$1;
(statearr_4713_4766[(2)] = null);

(statearr_4713_4766[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4688 === (29))){
var inst_4661 = (state_4687[(10)]);
var state_4687__$1 = state_4687;
var statearr_4714_4767 = state_4687__$1;
(statearr_4714_4767[(2)] = inst_4661);

(statearr_4714_4767[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4688 === (6))){
var state_4687__$1 = state_4687;
var statearr_4715_4768 = state_4687__$1;
(statearr_4715_4768[(2)] = false);

(statearr_4715_4768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4688 === (28))){
var inst_4657 = (state_4687[(2)]);
var inst_4658 = calc_state.call(null);
var inst_4614 = inst_4658;
var state_4687__$1 = (function (){var statearr_4716 = state_4687;
(statearr_4716[(7)] = inst_4614);

(statearr_4716[(15)] = inst_4657);

return statearr_4716;
})();
var statearr_4717_4769 = state_4687__$1;
(statearr_4717_4769[(2)] = null);

(statearr_4717_4769[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4688 === (25))){
var inst_4683 = (state_4687[(2)]);
var state_4687__$1 = state_4687;
var statearr_4718_4770 = state_4687__$1;
(statearr_4718_4770[(2)] = inst_4683);

(statearr_4718_4770[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4688 === (34))){
var inst_4681 = (state_4687[(2)]);
var state_4687__$1 = state_4687;
var statearr_4719_4771 = state_4687__$1;
(statearr_4719_4771[(2)] = inst_4681);

(statearr_4719_4771[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4688 === (17))){
var state_4687__$1 = state_4687;
var statearr_4720_4772 = state_4687__$1;
(statearr_4720_4772[(2)] = false);

(statearr_4720_4772[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4688 === (3))){
var state_4687__$1 = state_4687;
var statearr_4721_4773 = state_4687__$1;
(statearr_4721_4773[(2)] = false);

(statearr_4721_4773[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4688 === (12))){
var inst_4685 = (state_4687[(2)]);
var state_4687__$1 = state_4687;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4687__$1,inst_4685);
} else {
if((state_val_4688 === (2))){
var inst_4589 = (state_4687[(8)]);
var inst_4594 = inst_4589.cljs$lang$protocol_mask$partition0$;
var inst_4595 = (inst_4594 & (64));
var inst_4596 = inst_4589.cljs$core$ISeq$;
var inst_4597 = (cljs.core.PROTOCOL_SENTINEL === inst_4596);
var inst_4598 = ((inst_4595) || (inst_4597));
var state_4687__$1 = state_4687;
if(cljs.core.truth_(inst_4598)){
var statearr_4722_4774 = state_4687__$1;
(statearr_4722_4774[(1)] = (5));

} else {
var statearr_4723_4775 = state_4687__$1;
(statearr_4723_4775[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4688 === (23))){
var inst_4646 = (state_4687[(14)]);
var inst_4652 = (inst_4646 == null);
var state_4687__$1 = state_4687;
if(cljs.core.truth_(inst_4652)){
var statearr_4724_4776 = state_4687__$1;
(statearr_4724_4776[(1)] = (26));

} else {
var statearr_4725_4777 = state_4687__$1;
(statearr_4725_4777[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4688 === (35))){
var inst_4672 = (state_4687[(2)]);
var state_4687__$1 = state_4687;
if(cljs.core.truth_(inst_4672)){
var statearr_4726_4778 = state_4687__$1;
(statearr_4726_4778[(1)] = (36));

} else {
var statearr_4727_4779 = state_4687__$1;
(statearr_4727_4779[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4688 === (19))){
var inst_4614 = (state_4687[(7)]);
var inst_4634 = cljs.core.apply.call(null,cljs.core.hash_map,inst_4614);
var state_4687__$1 = state_4687;
var statearr_4728_4780 = state_4687__$1;
(statearr_4728_4780[(2)] = inst_4634);

(statearr_4728_4780[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4688 === (11))){
var inst_4614 = (state_4687[(7)]);
var inst_4618 = (inst_4614 == null);
var inst_4619 = cljs.core.not.call(null,inst_4618);
var state_4687__$1 = state_4687;
if(inst_4619){
var statearr_4729_4781 = state_4687__$1;
(statearr_4729_4781[(1)] = (13));

} else {
var statearr_4730_4782 = state_4687__$1;
(statearr_4730_4782[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4688 === (9))){
var inst_4589 = (state_4687[(8)]);
var state_4687__$1 = state_4687;
var statearr_4731_4783 = state_4687__$1;
(statearr_4731_4783[(2)] = inst_4589);

(statearr_4731_4783[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4688 === (5))){
var state_4687__$1 = state_4687;
var statearr_4732_4784 = state_4687__$1;
(statearr_4732_4784[(2)] = true);

(statearr_4732_4784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4688 === (14))){
var state_4687__$1 = state_4687;
var statearr_4733_4785 = state_4687__$1;
(statearr_4733_4785[(2)] = false);

(statearr_4733_4785[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4688 === (26))){
var inst_4647 = (state_4687[(11)]);
var inst_4654 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_4647);
var state_4687__$1 = state_4687;
var statearr_4734_4786 = state_4687__$1;
(statearr_4734_4786[(2)] = inst_4654);

(statearr_4734_4786[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4688 === (16))){
var state_4687__$1 = state_4687;
var statearr_4735_4787 = state_4687__$1;
(statearr_4735_4787[(2)] = true);

(statearr_4735_4787[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4688 === (38))){
var inst_4677 = (state_4687[(2)]);
var state_4687__$1 = state_4687;
var statearr_4736_4788 = state_4687__$1;
(statearr_4736_4788[(2)] = inst_4677);

(statearr_4736_4788[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4688 === (30))){
var inst_4638 = (state_4687[(9)]);
var inst_4639 = (state_4687[(13)]);
var inst_4647 = (state_4687[(11)]);
var inst_4664 = cljs.core.empty_QMARK_.call(null,inst_4638);
var inst_4665 = inst_4639.call(null,inst_4647);
var inst_4666 = cljs.core.not.call(null,inst_4665);
var inst_4667 = ((inst_4664) && (inst_4666));
var state_4687__$1 = state_4687;
var statearr_4737_4789 = state_4687__$1;
(statearr_4737_4789[(2)] = inst_4667);

(statearr_4737_4789[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4688 === (10))){
var inst_4589 = (state_4687[(8)]);
var inst_4610 = (state_4687[(2)]);
var inst_4611 = cljs.core.get.call(null,inst_4610,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_4612 = cljs.core.get.call(null,inst_4610,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_4613 = cljs.core.get.call(null,inst_4610,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_4614 = inst_4589;
var state_4687__$1 = (function (){var statearr_4738 = state_4687;
(statearr_4738[(16)] = inst_4611);

(statearr_4738[(7)] = inst_4614);

(statearr_4738[(17)] = inst_4613);

(statearr_4738[(18)] = inst_4612);

return statearr_4738;
})();
var statearr_4739_4790 = state_4687__$1;
(statearr_4739_4790[(2)] = null);

(statearr_4739_4790[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4688 === (18))){
var inst_4629 = (state_4687[(2)]);
var state_4687__$1 = state_4687;
var statearr_4740_4791 = state_4687__$1;
(statearr_4740_4791[(2)] = inst_4629);

(statearr_4740_4791[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4688 === (37))){
var state_4687__$1 = state_4687;
var statearr_4741_4792 = state_4687__$1;
(statearr_4741_4792[(2)] = null);

(statearr_4741_4792[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4688 === (8))){
var inst_4589 = (state_4687[(8)]);
var inst_4607 = cljs.core.apply.call(null,cljs.core.hash_map,inst_4589);
var state_4687__$1 = state_4687;
var statearr_4742_4793 = state_4687__$1;
(statearr_4742_4793[(2)] = inst_4607);

(statearr_4742_4793[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__3688__auto___4747,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__3598__auto__,c__3688__auto___4747,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__3599__auto__ = null;
var cljs$core$async$mix_$_state_machine__3599__auto____0 = (function (){
var statearr_4743 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4743[(0)] = cljs$core$async$mix_$_state_machine__3599__auto__);

(statearr_4743[(1)] = (1));

return statearr_4743;
});
var cljs$core$async$mix_$_state_machine__3599__auto____1 = (function (state_4687){
while(true){
var ret_value__3600__auto__ = (function (){try{while(true){
var result__3601__auto__ = switch__3598__auto__.call(null,state_4687);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3601__auto__;
}
break;
}
}catch (e4744){if((e4744 instanceof Object)){
var ex__3602__auto__ = e4744;
var statearr_4745_4794 = state_4687;
(statearr_4745_4794[(5)] = ex__3602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4687);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4744;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4795 = state_4687;
state_4687 = G__4795;
continue;
} else {
return ret_value__3600__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__3599__auto__ = function(state_4687){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__3599__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__3599__auto____1.call(this,state_4687);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__3599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__3599__auto____0;
cljs$core$async$mix_$_state_machine__3599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__3599__auto____1;
return cljs$core$async$mix_$_state_machine__3599__auto__;
})()
;})(switch__3598__auto__,c__3688__auto___4747,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__3690__auto__ = (function (){var statearr_4746 = f__3689__auto__.call(null);
(statearr_4746[(6)] = c__3688__auto___4747);

return statearr_4746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3690__auto__);
});})(c__3688__auto___4747,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__4797 = arguments.length;
switch (G__4797) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__4801 = arguments.length;
switch (G__4801) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3922__auto__,mults){
return (function (p1__4799_SHARP_){
if(cljs.core.truth_(p1__4799_SHARP_.call(null,topic))){
return p1__4799_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__4799_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async4802 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4802 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta4803){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta4803 = meta4803;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4802.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_4804,meta4803__$1){
var self__ = this;
var _4804__$1 = this;
return (new cljs.core.async.t_cljs$core$async4802(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta4803__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4802.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_4804){
var self__ = this;
var _4804__$1 = this;
return self__.meta4803;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4802.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4802.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4802.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4802.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4802.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4802.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4802.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4802.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta4803","meta4803",561750147,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4802.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4802.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4802";

cljs.core.async.t_cljs$core$async4802.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async4802");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4802.
 */
cljs.core.async.__GT_t_cljs$core$async4802 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async4802(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta4803){
return (new cljs.core.async.t_cljs$core$async4802(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta4803));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async4802(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__3688__auto___4922 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3688__auto___4922,mults,ensure_mult,p){
return (function (){
var f__3689__auto__ = (function (){var switch__3598__auto__ = ((function (c__3688__auto___4922,mults,ensure_mult,p){
return (function (state_4876){
var state_val_4877 = (state_4876[(1)]);
if((state_val_4877 === (7))){
var inst_4872 = (state_4876[(2)]);
var state_4876__$1 = state_4876;
var statearr_4878_4923 = state_4876__$1;
(statearr_4878_4923[(2)] = inst_4872);

(statearr_4878_4923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4877 === (20))){
var state_4876__$1 = state_4876;
var statearr_4879_4924 = state_4876__$1;
(statearr_4879_4924[(2)] = null);

(statearr_4879_4924[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4877 === (1))){
var state_4876__$1 = state_4876;
var statearr_4880_4925 = state_4876__$1;
(statearr_4880_4925[(2)] = null);

(statearr_4880_4925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4877 === (24))){
var inst_4855 = (state_4876[(7)]);
var inst_4864 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_4855);
var state_4876__$1 = state_4876;
var statearr_4881_4926 = state_4876__$1;
(statearr_4881_4926[(2)] = inst_4864);

(statearr_4881_4926[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4877 === (4))){
var inst_4807 = (state_4876[(8)]);
var inst_4807__$1 = (state_4876[(2)]);
var inst_4808 = (inst_4807__$1 == null);
var state_4876__$1 = (function (){var statearr_4882 = state_4876;
(statearr_4882[(8)] = inst_4807__$1);

return statearr_4882;
})();
if(cljs.core.truth_(inst_4808)){
var statearr_4883_4927 = state_4876__$1;
(statearr_4883_4927[(1)] = (5));

} else {
var statearr_4884_4928 = state_4876__$1;
(statearr_4884_4928[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4877 === (15))){
var inst_4849 = (state_4876[(2)]);
var state_4876__$1 = state_4876;
var statearr_4885_4929 = state_4876__$1;
(statearr_4885_4929[(2)] = inst_4849);

(statearr_4885_4929[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4877 === (21))){
var inst_4869 = (state_4876[(2)]);
var state_4876__$1 = (function (){var statearr_4886 = state_4876;
(statearr_4886[(9)] = inst_4869);

return statearr_4886;
})();
var statearr_4887_4930 = state_4876__$1;
(statearr_4887_4930[(2)] = null);

(statearr_4887_4930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4877 === (13))){
var inst_4831 = (state_4876[(10)]);
var inst_4833 = cljs.core.chunked_seq_QMARK_.call(null,inst_4831);
var state_4876__$1 = state_4876;
if(inst_4833){
var statearr_4888_4931 = state_4876__$1;
(statearr_4888_4931[(1)] = (16));

} else {
var statearr_4889_4932 = state_4876__$1;
(statearr_4889_4932[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4877 === (22))){
var inst_4861 = (state_4876[(2)]);
var state_4876__$1 = state_4876;
if(cljs.core.truth_(inst_4861)){
var statearr_4890_4933 = state_4876__$1;
(statearr_4890_4933[(1)] = (23));

} else {
var statearr_4891_4934 = state_4876__$1;
(statearr_4891_4934[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4877 === (6))){
var inst_4855 = (state_4876[(7)]);
var inst_4857 = (state_4876[(11)]);
var inst_4807 = (state_4876[(8)]);
var inst_4855__$1 = topic_fn.call(null,inst_4807);
var inst_4856 = cljs.core.deref.call(null,mults);
var inst_4857__$1 = cljs.core.get.call(null,inst_4856,inst_4855__$1);
var state_4876__$1 = (function (){var statearr_4892 = state_4876;
(statearr_4892[(7)] = inst_4855__$1);

(statearr_4892[(11)] = inst_4857__$1);

return statearr_4892;
})();
if(cljs.core.truth_(inst_4857__$1)){
var statearr_4893_4935 = state_4876__$1;
(statearr_4893_4935[(1)] = (19));

} else {
var statearr_4894_4936 = state_4876__$1;
(statearr_4894_4936[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4877 === (25))){
var inst_4866 = (state_4876[(2)]);
var state_4876__$1 = state_4876;
var statearr_4895_4937 = state_4876__$1;
(statearr_4895_4937[(2)] = inst_4866);

(statearr_4895_4937[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4877 === (17))){
var inst_4831 = (state_4876[(10)]);
var inst_4840 = cljs.core.first.call(null,inst_4831);
var inst_4841 = cljs.core.async.muxch_STAR_.call(null,inst_4840);
var inst_4842 = cljs.core.async.close_BANG_.call(null,inst_4841);
var inst_4843 = cljs.core.next.call(null,inst_4831);
var inst_4817 = inst_4843;
var inst_4818 = null;
var inst_4819 = (0);
var inst_4820 = (0);
var state_4876__$1 = (function (){var statearr_4896 = state_4876;
(statearr_4896[(12)] = inst_4817);

(statearr_4896[(13)] = inst_4818);

(statearr_4896[(14)] = inst_4842);

(statearr_4896[(15)] = inst_4820);

(statearr_4896[(16)] = inst_4819);

return statearr_4896;
})();
var statearr_4897_4938 = state_4876__$1;
(statearr_4897_4938[(2)] = null);

(statearr_4897_4938[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4877 === (3))){
var inst_4874 = (state_4876[(2)]);
var state_4876__$1 = state_4876;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4876__$1,inst_4874);
} else {
if((state_val_4877 === (12))){
var inst_4851 = (state_4876[(2)]);
var state_4876__$1 = state_4876;
var statearr_4898_4939 = state_4876__$1;
(statearr_4898_4939[(2)] = inst_4851);

(statearr_4898_4939[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4877 === (2))){
var state_4876__$1 = state_4876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4876__$1,(4),ch);
} else {
if((state_val_4877 === (23))){
var state_4876__$1 = state_4876;
var statearr_4899_4940 = state_4876__$1;
(statearr_4899_4940[(2)] = null);

(statearr_4899_4940[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4877 === (19))){
var inst_4857 = (state_4876[(11)]);
var inst_4807 = (state_4876[(8)]);
var inst_4859 = cljs.core.async.muxch_STAR_.call(null,inst_4857);
var state_4876__$1 = state_4876;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4876__$1,(22),inst_4859,inst_4807);
} else {
if((state_val_4877 === (11))){
var inst_4817 = (state_4876[(12)]);
var inst_4831 = (state_4876[(10)]);
var inst_4831__$1 = cljs.core.seq.call(null,inst_4817);
var state_4876__$1 = (function (){var statearr_4900 = state_4876;
(statearr_4900[(10)] = inst_4831__$1);

return statearr_4900;
})();
if(inst_4831__$1){
var statearr_4901_4941 = state_4876__$1;
(statearr_4901_4941[(1)] = (13));

} else {
var statearr_4902_4942 = state_4876__$1;
(statearr_4902_4942[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4877 === (9))){
var inst_4853 = (state_4876[(2)]);
var state_4876__$1 = state_4876;
var statearr_4903_4943 = state_4876__$1;
(statearr_4903_4943[(2)] = inst_4853);

(statearr_4903_4943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4877 === (5))){
var inst_4814 = cljs.core.deref.call(null,mults);
var inst_4815 = cljs.core.vals.call(null,inst_4814);
var inst_4816 = cljs.core.seq.call(null,inst_4815);
var inst_4817 = inst_4816;
var inst_4818 = null;
var inst_4819 = (0);
var inst_4820 = (0);
var state_4876__$1 = (function (){var statearr_4904 = state_4876;
(statearr_4904[(12)] = inst_4817);

(statearr_4904[(13)] = inst_4818);

(statearr_4904[(15)] = inst_4820);

(statearr_4904[(16)] = inst_4819);

return statearr_4904;
})();
var statearr_4905_4944 = state_4876__$1;
(statearr_4905_4944[(2)] = null);

(statearr_4905_4944[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4877 === (14))){
var state_4876__$1 = state_4876;
var statearr_4909_4945 = state_4876__$1;
(statearr_4909_4945[(2)] = null);

(statearr_4909_4945[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4877 === (16))){
var inst_4831 = (state_4876[(10)]);
var inst_4835 = cljs.core.chunk_first.call(null,inst_4831);
var inst_4836 = cljs.core.chunk_rest.call(null,inst_4831);
var inst_4837 = cljs.core.count.call(null,inst_4835);
var inst_4817 = inst_4836;
var inst_4818 = inst_4835;
var inst_4819 = inst_4837;
var inst_4820 = (0);
var state_4876__$1 = (function (){var statearr_4910 = state_4876;
(statearr_4910[(12)] = inst_4817);

(statearr_4910[(13)] = inst_4818);

(statearr_4910[(15)] = inst_4820);

(statearr_4910[(16)] = inst_4819);

return statearr_4910;
})();
var statearr_4911_4946 = state_4876__$1;
(statearr_4911_4946[(2)] = null);

(statearr_4911_4946[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4877 === (10))){
var inst_4817 = (state_4876[(12)]);
var inst_4818 = (state_4876[(13)]);
var inst_4820 = (state_4876[(15)]);
var inst_4819 = (state_4876[(16)]);
var inst_4825 = cljs.core._nth.call(null,inst_4818,inst_4820);
var inst_4826 = cljs.core.async.muxch_STAR_.call(null,inst_4825);
var inst_4827 = cljs.core.async.close_BANG_.call(null,inst_4826);
var inst_4828 = (inst_4820 + (1));
var tmp4906 = inst_4817;
var tmp4907 = inst_4818;
var tmp4908 = inst_4819;
var inst_4817__$1 = tmp4906;
var inst_4818__$1 = tmp4907;
var inst_4819__$1 = tmp4908;
var inst_4820__$1 = inst_4828;
var state_4876__$1 = (function (){var statearr_4912 = state_4876;
(statearr_4912[(12)] = inst_4817__$1);

(statearr_4912[(17)] = inst_4827);

(statearr_4912[(13)] = inst_4818__$1);

(statearr_4912[(15)] = inst_4820__$1);

(statearr_4912[(16)] = inst_4819__$1);

return statearr_4912;
})();
var statearr_4913_4947 = state_4876__$1;
(statearr_4913_4947[(2)] = null);

(statearr_4913_4947[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4877 === (18))){
var inst_4846 = (state_4876[(2)]);
var state_4876__$1 = state_4876;
var statearr_4914_4948 = state_4876__$1;
(statearr_4914_4948[(2)] = inst_4846);

(statearr_4914_4948[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4877 === (8))){
var inst_4820 = (state_4876[(15)]);
var inst_4819 = (state_4876[(16)]);
var inst_4822 = (inst_4820 < inst_4819);
var inst_4823 = inst_4822;
var state_4876__$1 = state_4876;
if(cljs.core.truth_(inst_4823)){
var statearr_4915_4949 = state_4876__$1;
(statearr_4915_4949[(1)] = (10));

} else {
var statearr_4916_4950 = state_4876__$1;
(statearr_4916_4950[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__3688__auto___4922,mults,ensure_mult,p))
;
return ((function (switch__3598__auto__,c__3688__auto___4922,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__3599__auto__ = null;
var cljs$core$async$state_machine__3599__auto____0 = (function (){
var statearr_4917 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4917[(0)] = cljs$core$async$state_machine__3599__auto__);

(statearr_4917[(1)] = (1));

return statearr_4917;
});
var cljs$core$async$state_machine__3599__auto____1 = (function (state_4876){
while(true){
var ret_value__3600__auto__ = (function (){try{while(true){
var result__3601__auto__ = switch__3598__auto__.call(null,state_4876);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3601__auto__;
}
break;
}
}catch (e4918){if((e4918 instanceof Object)){
var ex__3602__auto__ = e4918;
var statearr_4919_4951 = state_4876;
(statearr_4919_4951[(5)] = ex__3602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4918;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4952 = state_4876;
state_4876 = G__4952;
continue;
} else {
return ret_value__3600__auto__;
}
break;
}
});
cljs$core$async$state_machine__3599__auto__ = function(state_4876){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3599__auto____1.call(this,state_4876);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3599__auto____0;
cljs$core$async$state_machine__3599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3599__auto____1;
return cljs$core$async$state_machine__3599__auto__;
})()
;})(switch__3598__auto__,c__3688__auto___4922,mults,ensure_mult,p))
})();
var state__3690__auto__ = (function (){var statearr_4920 = f__3689__auto__.call(null);
(statearr_4920[(6)] = c__3688__auto___4922);

return statearr_4920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3690__auto__);
});})(c__3688__auto___4922,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__4954 = arguments.length;
switch (G__4954) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__4957 = arguments.length;
switch (G__4957) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__4960 = arguments.length;
switch (G__4960) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__3688__auto___5027 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3688__auto___5027,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__3689__auto__ = (function (){var switch__3598__auto__ = ((function (c__3688__auto___5027,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_4999){
var state_val_5000 = (state_4999[(1)]);
if((state_val_5000 === (7))){
var state_4999__$1 = state_4999;
var statearr_5001_5028 = state_4999__$1;
(statearr_5001_5028[(2)] = null);

(statearr_5001_5028[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5000 === (1))){
var state_4999__$1 = state_4999;
var statearr_5002_5029 = state_4999__$1;
(statearr_5002_5029[(2)] = null);

(statearr_5002_5029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5000 === (4))){
var inst_4963 = (state_4999[(7)]);
var inst_4965 = (inst_4963 < cnt);
var state_4999__$1 = state_4999;
if(cljs.core.truth_(inst_4965)){
var statearr_5003_5030 = state_4999__$1;
(statearr_5003_5030[(1)] = (6));

} else {
var statearr_5004_5031 = state_4999__$1;
(statearr_5004_5031[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5000 === (15))){
var inst_4995 = (state_4999[(2)]);
var state_4999__$1 = state_4999;
var statearr_5005_5032 = state_4999__$1;
(statearr_5005_5032[(2)] = inst_4995);

(statearr_5005_5032[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5000 === (13))){
var inst_4988 = cljs.core.async.close_BANG_.call(null,out);
var state_4999__$1 = state_4999;
var statearr_5006_5033 = state_4999__$1;
(statearr_5006_5033[(2)] = inst_4988);

(statearr_5006_5033[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5000 === (6))){
var state_4999__$1 = state_4999;
var statearr_5007_5034 = state_4999__$1;
(statearr_5007_5034[(2)] = null);

(statearr_5007_5034[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5000 === (3))){
var inst_4997 = (state_4999[(2)]);
var state_4999__$1 = state_4999;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4999__$1,inst_4997);
} else {
if((state_val_5000 === (12))){
var inst_4985 = (state_4999[(8)]);
var inst_4985__$1 = (state_4999[(2)]);
var inst_4986 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_4985__$1);
var state_4999__$1 = (function (){var statearr_5008 = state_4999;
(statearr_5008[(8)] = inst_4985__$1);

return statearr_5008;
})();
if(cljs.core.truth_(inst_4986)){
var statearr_5009_5035 = state_4999__$1;
(statearr_5009_5035[(1)] = (13));

} else {
var statearr_5010_5036 = state_4999__$1;
(statearr_5010_5036[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5000 === (2))){
var inst_4962 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_4963 = (0);
var state_4999__$1 = (function (){var statearr_5011 = state_4999;
(statearr_5011[(9)] = inst_4962);

(statearr_5011[(7)] = inst_4963);

return statearr_5011;
})();
var statearr_5012_5037 = state_4999__$1;
(statearr_5012_5037[(2)] = null);

(statearr_5012_5037[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5000 === (11))){
var inst_4963 = (state_4999[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_4999,(10),Object,null,(9));
var inst_4972 = chs__$1.call(null,inst_4963);
var inst_4973 = done.call(null,inst_4963);
var inst_4974 = cljs.core.async.take_BANG_.call(null,inst_4972,inst_4973);
var state_4999__$1 = state_4999;
var statearr_5013_5038 = state_4999__$1;
(statearr_5013_5038[(2)] = inst_4974);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4999__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5000 === (9))){
var inst_4963 = (state_4999[(7)]);
var inst_4976 = (state_4999[(2)]);
var inst_4977 = (inst_4963 + (1));
var inst_4963__$1 = inst_4977;
var state_4999__$1 = (function (){var statearr_5014 = state_4999;
(statearr_5014[(10)] = inst_4976);

(statearr_5014[(7)] = inst_4963__$1);

return statearr_5014;
})();
var statearr_5015_5039 = state_4999__$1;
(statearr_5015_5039[(2)] = null);

(statearr_5015_5039[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5000 === (5))){
var inst_4983 = (state_4999[(2)]);
var state_4999__$1 = (function (){var statearr_5016 = state_4999;
(statearr_5016[(11)] = inst_4983);

return statearr_5016;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4999__$1,(12),dchan);
} else {
if((state_val_5000 === (14))){
var inst_4985 = (state_4999[(8)]);
var inst_4990 = cljs.core.apply.call(null,f,inst_4985);
var state_4999__$1 = state_4999;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4999__$1,(16),out,inst_4990);
} else {
if((state_val_5000 === (16))){
var inst_4992 = (state_4999[(2)]);
var state_4999__$1 = (function (){var statearr_5017 = state_4999;
(statearr_5017[(12)] = inst_4992);

return statearr_5017;
})();
var statearr_5018_5040 = state_4999__$1;
(statearr_5018_5040[(2)] = null);

(statearr_5018_5040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5000 === (10))){
var inst_4967 = (state_4999[(2)]);
var inst_4968 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_4999__$1 = (function (){var statearr_5019 = state_4999;
(statearr_5019[(13)] = inst_4967);

return statearr_5019;
})();
var statearr_5020_5041 = state_4999__$1;
(statearr_5020_5041[(2)] = inst_4968);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4999__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5000 === (8))){
var inst_4981 = (state_4999[(2)]);
var state_4999__$1 = state_4999;
var statearr_5021_5042 = state_4999__$1;
(statearr_5021_5042[(2)] = inst_4981);

(statearr_5021_5042[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__3688__auto___5027,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__3598__auto__,c__3688__auto___5027,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__3599__auto__ = null;
var cljs$core$async$state_machine__3599__auto____0 = (function (){
var statearr_5022 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5022[(0)] = cljs$core$async$state_machine__3599__auto__);

(statearr_5022[(1)] = (1));

return statearr_5022;
});
var cljs$core$async$state_machine__3599__auto____1 = (function (state_4999){
while(true){
var ret_value__3600__auto__ = (function (){try{while(true){
var result__3601__auto__ = switch__3598__auto__.call(null,state_4999);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3601__auto__;
}
break;
}
}catch (e5023){if((e5023 instanceof Object)){
var ex__3602__auto__ = e5023;
var statearr_5024_5043 = state_4999;
(statearr_5024_5043[(5)] = ex__3602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4999);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5023;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5044 = state_4999;
state_4999 = G__5044;
continue;
} else {
return ret_value__3600__auto__;
}
break;
}
});
cljs$core$async$state_machine__3599__auto__ = function(state_4999){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3599__auto____1.call(this,state_4999);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3599__auto____0;
cljs$core$async$state_machine__3599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3599__auto____1;
return cljs$core$async$state_machine__3599__auto__;
})()
;})(switch__3598__auto__,c__3688__auto___5027,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__3690__auto__ = (function (){var statearr_5025 = f__3689__auto__.call(null);
(statearr_5025[(6)] = c__3688__auto___5027);

return statearr_5025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3690__auto__);
});})(c__3688__auto___5027,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__5047 = arguments.length;
switch (G__5047) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__3688__auto___5101 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3688__auto___5101,out){
return (function (){
var f__3689__auto__ = (function (){var switch__3598__auto__ = ((function (c__3688__auto___5101,out){
return (function (state_5079){
var state_val_5080 = (state_5079[(1)]);
if((state_val_5080 === (7))){
var inst_5059 = (state_5079[(7)]);
var inst_5058 = (state_5079[(8)]);
var inst_5058__$1 = (state_5079[(2)]);
var inst_5059__$1 = cljs.core.nth.call(null,inst_5058__$1,(0),null);
var inst_5060 = cljs.core.nth.call(null,inst_5058__$1,(1),null);
var inst_5061 = (inst_5059__$1 == null);
var state_5079__$1 = (function (){var statearr_5081 = state_5079;
(statearr_5081[(7)] = inst_5059__$1);

(statearr_5081[(9)] = inst_5060);

(statearr_5081[(8)] = inst_5058__$1);

return statearr_5081;
})();
if(cljs.core.truth_(inst_5061)){
var statearr_5082_5102 = state_5079__$1;
(statearr_5082_5102[(1)] = (8));

} else {
var statearr_5083_5103 = state_5079__$1;
(statearr_5083_5103[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5080 === (1))){
var inst_5048 = cljs.core.vec.call(null,chs);
var inst_5049 = inst_5048;
var state_5079__$1 = (function (){var statearr_5084 = state_5079;
(statearr_5084[(10)] = inst_5049);

return statearr_5084;
})();
var statearr_5085_5104 = state_5079__$1;
(statearr_5085_5104[(2)] = null);

(statearr_5085_5104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5080 === (4))){
var inst_5049 = (state_5079[(10)]);
var state_5079__$1 = state_5079;
return cljs.core.async.ioc_alts_BANG_.call(null,state_5079__$1,(7),inst_5049);
} else {
if((state_val_5080 === (6))){
var inst_5075 = (state_5079[(2)]);
var state_5079__$1 = state_5079;
var statearr_5086_5105 = state_5079__$1;
(statearr_5086_5105[(2)] = inst_5075);

(statearr_5086_5105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5080 === (3))){
var inst_5077 = (state_5079[(2)]);
var state_5079__$1 = state_5079;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5079__$1,inst_5077);
} else {
if((state_val_5080 === (2))){
var inst_5049 = (state_5079[(10)]);
var inst_5051 = cljs.core.count.call(null,inst_5049);
var inst_5052 = (inst_5051 > (0));
var state_5079__$1 = state_5079;
if(cljs.core.truth_(inst_5052)){
var statearr_5088_5106 = state_5079__$1;
(statearr_5088_5106[(1)] = (4));

} else {
var statearr_5089_5107 = state_5079__$1;
(statearr_5089_5107[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5080 === (11))){
var inst_5049 = (state_5079[(10)]);
var inst_5068 = (state_5079[(2)]);
var tmp5087 = inst_5049;
var inst_5049__$1 = tmp5087;
var state_5079__$1 = (function (){var statearr_5090 = state_5079;
(statearr_5090[(11)] = inst_5068);

(statearr_5090[(10)] = inst_5049__$1);

return statearr_5090;
})();
var statearr_5091_5108 = state_5079__$1;
(statearr_5091_5108[(2)] = null);

(statearr_5091_5108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5080 === (9))){
var inst_5059 = (state_5079[(7)]);
var state_5079__$1 = state_5079;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5079__$1,(11),out,inst_5059);
} else {
if((state_val_5080 === (5))){
var inst_5073 = cljs.core.async.close_BANG_.call(null,out);
var state_5079__$1 = state_5079;
var statearr_5092_5109 = state_5079__$1;
(statearr_5092_5109[(2)] = inst_5073);

(statearr_5092_5109[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5080 === (10))){
var inst_5071 = (state_5079[(2)]);
var state_5079__$1 = state_5079;
var statearr_5093_5110 = state_5079__$1;
(statearr_5093_5110[(2)] = inst_5071);

(statearr_5093_5110[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5080 === (8))){
var inst_5059 = (state_5079[(7)]);
var inst_5060 = (state_5079[(9)]);
var inst_5049 = (state_5079[(10)]);
var inst_5058 = (state_5079[(8)]);
var inst_5063 = (function (){var cs = inst_5049;
var vec__5054 = inst_5058;
var v = inst_5059;
var c = inst_5060;
return ((function (cs,vec__5054,v,c,inst_5059,inst_5060,inst_5049,inst_5058,state_val_5080,c__3688__auto___5101,out){
return (function (p1__5045_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__5045_SHARP_);
});
;})(cs,vec__5054,v,c,inst_5059,inst_5060,inst_5049,inst_5058,state_val_5080,c__3688__auto___5101,out))
})();
var inst_5064 = cljs.core.filterv.call(null,inst_5063,inst_5049);
var inst_5049__$1 = inst_5064;
var state_5079__$1 = (function (){var statearr_5094 = state_5079;
(statearr_5094[(10)] = inst_5049__$1);

return statearr_5094;
})();
var statearr_5095_5111 = state_5079__$1;
(statearr_5095_5111[(2)] = null);

(statearr_5095_5111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__3688__auto___5101,out))
;
return ((function (switch__3598__auto__,c__3688__auto___5101,out){
return (function() {
var cljs$core$async$state_machine__3599__auto__ = null;
var cljs$core$async$state_machine__3599__auto____0 = (function (){
var statearr_5096 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5096[(0)] = cljs$core$async$state_machine__3599__auto__);

(statearr_5096[(1)] = (1));

return statearr_5096;
});
var cljs$core$async$state_machine__3599__auto____1 = (function (state_5079){
while(true){
var ret_value__3600__auto__ = (function (){try{while(true){
var result__3601__auto__ = switch__3598__auto__.call(null,state_5079);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3601__auto__;
}
break;
}
}catch (e5097){if((e5097 instanceof Object)){
var ex__3602__auto__ = e5097;
var statearr_5098_5112 = state_5079;
(statearr_5098_5112[(5)] = ex__3602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5079);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5097;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5113 = state_5079;
state_5079 = G__5113;
continue;
} else {
return ret_value__3600__auto__;
}
break;
}
});
cljs$core$async$state_machine__3599__auto__ = function(state_5079){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3599__auto____1.call(this,state_5079);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3599__auto____0;
cljs$core$async$state_machine__3599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3599__auto____1;
return cljs$core$async$state_machine__3599__auto__;
})()
;})(switch__3598__auto__,c__3688__auto___5101,out))
})();
var state__3690__auto__ = (function (){var statearr_5099 = f__3689__auto__.call(null);
(statearr_5099[(6)] = c__3688__auto___5101);

return statearr_5099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3690__auto__);
});})(c__3688__auto___5101,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__5115 = arguments.length;
switch (G__5115) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__3688__auto___5160 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3688__auto___5160,out){
return (function (){
var f__3689__auto__ = (function (){var switch__3598__auto__ = ((function (c__3688__auto___5160,out){
return (function (state_5139){
var state_val_5140 = (state_5139[(1)]);
if((state_val_5140 === (7))){
var inst_5121 = (state_5139[(7)]);
var inst_5121__$1 = (state_5139[(2)]);
var inst_5122 = (inst_5121__$1 == null);
var inst_5123 = cljs.core.not.call(null,inst_5122);
var state_5139__$1 = (function (){var statearr_5141 = state_5139;
(statearr_5141[(7)] = inst_5121__$1);

return statearr_5141;
})();
if(inst_5123){
var statearr_5142_5161 = state_5139__$1;
(statearr_5142_5161[(1)] = (8));

} else {
var statearr_5143_5162 = state_5139__$1;
(statearr_5143_5162[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5140 === (1))){
var inst_5116 = (0);
var state_5139__$1 = (function (){var statearr_5144 = state_5139;
(statearr_5144[(8)] = inst_5116);

return statearr_5144;
})();
var statearr_5145_5163 = state_5139__$1;
(statearr_5145_5163[(2)] = null);

(statearr_5145_5163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5140 === (4))){
var state_5139__$1 = state_5139;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5139__$1,(7),ch);
} else {
if((state_val_5140 === (6))){
var inst_5134 = (state_5139[(2)]);
var state_5139__$1 = state_5139;
var statearr_5146_5164 = state_5139__$1;
(statearr_5146_5164[(2)] = inst_5134);

(statearr_5146_5164[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5140 === (3))){
var inst_5136 = (state_5139[(2)]);
var inst_5137 = cljs.core.async.close_BANG_.call(null,out);
var state_5139__$1 = (function (){var statearr_5147 = state_5139;
(statearr_5147[(9)] = inst_5136);

return statearr_5147;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5139__$1,inst_5137);
} else {
if((state_val_5140 === (2))){
var inst_5116 = (state_5139[(8)]);
var inst_5118 = (inst_5116 < n);
var state_5139__$1 = state_5139;
if(cljs.core.truth_(inst_5118)){
var statearr_5148_5165 = state_5139__$1;
(statearr_5148_5165[(1)] = (4));

} else {
var statearr_5149_5166 = state_5139__$1;
(statearr_5149_5166[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5140 === (11))){
var inst_5116 = (state_5139[(8)]);
var inst_5126 = (state_5139[(2)]);
var inst_5127 = (inst_5116 + (1));
var inst_5116__$1 = inst_5127;
var state_5139__$1 = (function (){var statearr_5150 = state_5139;
(statearr_5150[(8)] = inst_5116__$1);

(statearr_5150[(10)] = inst_5126);

return statearr_5150;
})();
var statearr_5151_5167 = state_5139__$1;
(statearr_5151_5167[(2)] = null);

(statearr_5151_5167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5140 === (9))){
var state_5139__$1 = state_5139;
var statearr_5152_5168 = state_5139__$1;
(statearr_5152_5168[(2)] = null);

(statearr_5152_5168[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5140 === (5))){
var state_5139__$1 = state_5139;
var statearr_5153_5169 = state_5139__$1;
(statearr_5153_5169[(2)] = null);

(statearr_5153_5169[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5140 === (10))){
var inst_5131 = (state_5139[(2)]);
var state_5139__$1 = state_5139;
var statearr_5154_5170 = state_5139__$1;
(statearr_5154_5170[(2)] = inst_5131);

(statearr_5154_5170[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5140 === (8))){
var inst_5121 = (state_5139[(7)]);
var state_5139__$1 = state_5139;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5139__$1,(11),out,inst_5121);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__3688__auto___5160,out))
;
return ((function (switch__3598__auto__,c__3688__auto___5160,out){
return (function() {
var cljs$core$async$state_machine__3599__auto__ = null;
var cljs$core$async$state_machine__3599__auto____0 = (function (){
var statearr_5155 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_5155[(0)] = cljs$core$async$state_machine__3599__auto__);

(statearr_5155[(1)] = (1));

return statearr_5155;
});
var cljs$core$async$state_machine__3599__auto____1 = (function (state_5139){
while(true){
var ret_value__3600__auto__ = (function (){try{while(true){
var result__3601__auto__ = switch__3598__auto__.call(null,state_5139);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3601__auto__;
}
break;
}
}catch (e5156){if((e5156 instanceof Object)){
var ex__3602__auto__ = e5156;
var statearr_5157_5171 = state_5139;
(statearr_5157_5171[(5)] = ex__3602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5156;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5172 = state_5139;
state_5139 = G__5172;
continue;
} else {
return ret_value__3600__auto__;
}
break;
}
});
cljs$core$async$state_machine__3599__auto__ = function(state_5139){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3599__auto____1.call(this,state_5139);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3599__auto____0;
cljs$core$async$state_machine__3599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3599__auto____1;
return cljs$core$async$state_machine__3599__auto__;
})()
;})(switch__3598__auto__,c__3688__auto___5160,out))
})();
var state__3690__auto__ = (function (){var statearr_5158 = f__3689__auto__.call(null);
(statearr_5158[(6)] = c__3688__auto___5160);

return statearr_5158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3690__auto__);
});})(c__3688__auto___5160,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async5174 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5174 = (function (f,ch,meta5175){
this.f = f;
this.ch = ch;
this.meta5175 = meta5175;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async5174.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5176,meta5175__$1){
var self__ = this;
var _5176__$1 = this;
return (new cljs.core.async.t_cljs$core$async5174(self__.f,self__.ch,meta5175__$1));
});

cljs.core.async.t_cljs$core$async5174.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5176){
var self__ = this;
var _5176__$1 = this;
return self__.meta5175;
});

cljs.core.async.t_cljs$core$async5174.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5174.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async5174.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async5174.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5174.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async5177 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5177 = (function (f,ch,meta5175,_,fn1,meta5178){
this.f = f;
this.ch = ch;
this.meta5175 = meta5175;
this._ = _;
this.fn1 = fn1;
this.meta5178 = meta5178;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async5177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_5179,meta5178__$1){
var self__ = this;
var _5179__$1 = this;
return (new cljs.core.async.t_cljs$core$async5177(self__.f,self__.ch,self__.meta5175,self__._,self__.fn1,meta5178__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async5177.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_5179){
var self__ = this;
var _5179__$1 = this;
return self__.meta5178;
});})(___$1))
;

cljs.core.async.t_cljs$core$async5177.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5177.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async5177.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async5177.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__5173_SHARP_){
return f1.call(null,(((p1__5173_SHARP_ == null))?null:self__.f.call(null,p1__5173_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async5177.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta5175","meta5175",-1286145365,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async5174","cljs.core.async/t_cljs$core$async5174",1928209441,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta5178","meta5178",-1248749868,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async5177.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async5177.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5177";

cljs.core.async.t_cljs$core$async5177.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async5177");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5177.
 */
cljs.core.async.__GT_t_cljs$core$async5177 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async5177(f__$1,ch__$1,meta5175__$1,___$2,fn1__$1,meta5178){
return (new cljs.core.async.t_cljs$core$async5177(f__$1,ch__$1,meta5175__$1,___$2,fn1__$1,meta5178));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async5177(self__.f,self__.ch,self__.meta5175,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async5174.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5174.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async5174.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta5175","meta5175",-1286145365,null)], null);
});

cljs.core.async.t_cljs$core$async5174.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async5174.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5174";

cljs.core.async.t_cljs$core$async5174.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async5174");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5174.
 */
cljs.core.async.__GT_t_cljs$core$async5174 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async5174(f__$1,ch__$1,meta5175){
return (new cljs.core.async.t_cljs$core$async5174(f__$1,ch__$1,meta5175));
});

}

return (new cljs.core.async.t_cljs$core$async5174(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async5180 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5180 = (function (f,ch,meta5181){
this.f = f;
this.ch = ch;
this.meta5181 = meta5181;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async5180.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5182,meta5181__$1){
var self__ = this;
var _5182__$1 = this;
return (new cljs.core.async.t_cljs$core$async5180(self__.f,self__.ch,meta5181__$1));
});

cljs.core.async.t_cljs$core$async5180.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5182){
var self__ = this;
var _5182__$1 = this;
return self__.meta5181;
});

cljs.core.async.t_cljs$core$async5180.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5180.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async5180.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5180.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async5180.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5180.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async5180.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta5181","meta5181",697866363,null)], null);
});

cljs.core.async.t_cljs$core$async5180.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async5180.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5180";

cljs.core.async.t_cljs$core$async5180.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async5180");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5180.
 */
cljs.core.async.__GT_t_cljs$core$async5180 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async5180(f__$1,ch__$1,meta5181){
return (new cljs.core.async.t_cljs$core$async5180(f__$1,ch__$1,meta5181));
});

}

return (new cljs.core.async.t_cljs$core$async5180(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async5183 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5183 = (function (p,ch,meta5184){
this.p = p;
this.ch = ch;
this.meta5184 = meta5184;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async5183.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5185,meta5184__$1){
var self__ = this;
var _5185__$1 = this;
return (new cljs.core.async.t_cljs$core$async5183(self__.p,self__.ch,meta5184__$1));
});

cljs.core.async.t_cljs$core$async5183.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5185){
var self__ = this;
var _5185__$1 = this;
return self__.meta5184;
});

cljs.core.async.t_cljs$core$async5183.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5183.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async5183.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async5183.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5183.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async5183.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5183.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async5183.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta5184","meta5184",1965432759,null)], null);
});

cljs.core.async.t_cljs$core$async5183.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async5183.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5183";

cljs.core.async.t_cljs$core$async5183.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async5183");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5183.
 */
cljs.core.async.__GT_t_cljs$core$async5183 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async5183(p__$1,ch__$1,meta5184){
return (new cljs.core.async.t_cljs$core$async5183(p__$1,ch__$1,meta5184));
});

}

return (new cljs.core.async.t_cljs$core$async5183(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__5187 = arguments.length;
switch (G__5187) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__3688__auto___5227 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3688__auto___5227,out){
return (function (){
var f__3689__auto__ = (function (){var switch__3598__auto__ = ((function (c__3688__auto___5227,out){
return (function (state_5208){
var state_val_5209 = (state_5208[(1)]);
if((state_val_5209 === (7))){
var inst_5204 = (state_5208[(2)]);
var state_5208__$1 = state_5208;
var statearr_5210_5228 = state_5208__$1;
(statearr_5210_5228[(2)] = inst_5204);

(statearr_5210_5228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5209 === (1))){
var state_5208__$1 = state_5208;
var statearr_5211_5229 = state_5208__$1;
(statearr_5211_5229[(2)] = null);

(statearr_5211_5229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5209 === (4))){
var inst_5190 = (state_5208[(7)]);
var inst_5190__$1 = (state_5208[(2)]);
var inst_5191 = (inst_5190__$1 == null);
var state_5208__$1 = (function (){var statearr_5212 = state_5208;
(statearr_5212[(7)] = inst_5190__$1);

return statearr_5212;
})();
if(cljs.core.truth_(inst_5191)){
var statearr_5213_5230 = state_5208__$1;
(statearr_5213_5230[(1)] = (5));

} else {
var statearr_5214_5231 = state_5208__$1;
(statearr_5214_5231[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5209 === (6))){
var inst_5190 = (state_5208[(7)]);
var inst_5195 = p.call(null,inst_5190);
var state_5208__$1 = state_5208;
if(cljs.core.truth_(inst_5195)){
var statearr_5215_5232 = state_5208__$1;
(statearr_5215_5232[(1)] = (8));

} else {
var statearr_5216_5233 = state_5208__$1;
(statearr_5216_5233[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5209 === (3))){
var inst_5206 = (state_5208[(2)]);
var state_5208__$1 = state_5208;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5208__$1,inst_5206);
} else {
if((state_val_5209 === (2))){
var state_5208__$1 = state_5208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5208__$1,(4),ch);
} else {
if((state_val_5209 === (11))){
var inst_5198 = (state_5208[(2)]);
var state_5208__$1 = state_5208;
var statearr_5217_5234 = state_5208__$1;
(statearr_5217_5234[(2)] = inst_5198);

(statearr_5217_5234[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5209 === (9))){
var state_5208__$1 = state_5208;
var statearr_5218_5235 = state_5208__$1;
(statearr_5218_5235[(2)] = null);

(statearr_5218_5235[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5209 === (5))){
var inst_5193 = cljs.core.async.close_BANG_.call(null,out);
var state_5208__$1 = state_5208;
var statearr_5219_5236 = state_5208__$1;
(statearr_5219_5236[(2)] = inst_5193);

(statearr_5219_5236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5209 === (10))){
var inst_5201 = (state_5208[(2)]);
var state_5208__$1 = (function (){var statearr_5220 = state_5208;
(statearr_5220[(8)] = inst_5201);

return statearr_5220;
})();
var statearr_5221_5237 = state_5208__$1;
(statearr_5221_5237[(2)] = null);

(statearr_5221_5237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5209 === (8))){
var inst_5190 = (state_5208[(7)]);
var state_5208__$1 = state_5208;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5208__$1,(11),out,inst_5190);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__3688__auto___5227,out))
;
return ((function (switch__3598__auto__,c__3688__auto___5227,out){
return (function() {
var cljs$core$async$state_machine__3599__auto__ = null;
var cljs$core$async$state_machine__3599__auto____0 = (function (){
var statearr_5222 = [null,null,null,null,null,null,null,null,null];
(statearr_5222[(0)] = cljs$core$async$state_machine__3599__auto__);

(statearr_5222[(1)] = (1));

return statearr_5222;
});
var cljs$core$async$state_machine__3599__auto____1 = (function (state_5208){
while(true){
var ret_value__3600__auto__ = (function (){try{while(true){
var result__3601__auto__ = switch__3598__auto__.call(null,state_5208);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3601__auto__;
}
break;
}
}catch (e5223){if((e5223 instanceof Object)){
var ex__3602__auto__ = e5223;
var statearr_5224_5238 = state_5208;
(statearr_5224_5238[(5)] = ex__3602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5223;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5239 = state_5208;
state_5208 = G__5239;
continue;
} else {
return ret_value__3600__auto__;
}
break;
}
});
cljs$core$async$state_machine__3599__auto__ = function(state_5208){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3599__auto____1.call(this,state_5208);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3599__auto____0;
cljs$core$async$state_machine__3599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3599__auto____1;
return cljs$core$async$state_machine__3599__auto__;
})()
;})(switch__3598__auto__,c__3688__auto___5227,out))
})();
var state__3690__auto__ = (function (){var statearr_5225 = f__3689__auto__.call(null);
(statearr_5225[(6)] = c__3688__auto___5227);

return statearr_5225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3690__auto__);
});})(c__3688__auto___5227,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__5241 = arguments.length;
switch (G__5241) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__3688__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3688__auto__){
return (function (){
var f__3689__auto__ = (function (){var switch__3598__auto__ = ((function (c__3688__auto__){
return (function (state_5304){
var state_val_5305 = (state_5304[(1)]);
if((state_val_5305 === (7))){
var inst_5300 = (state_5304[(2)]);
var state_5304__$1 = state_5304;
var statearr_5306_5344 = state_5304__$1;
(statearr_5306_5344[(2)] = inst_5300);

(statearr_5306_5344[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5305 === (20))){
var inst_5270 = (state_5304[(7)]);
var inst_5281 = (state_5304[(2)]);
var inst_5282 = cljs.core.next.call(null,inst_5270);
var inst_5256 = inst_5282;
var inst_5257 = null;
var inst_5258 = (0);
var inst_5259 = (0);
var state_5304__$1 = (function (){var statearr_5307 = state_5304;
(statearr_5307[(8)] = inst_5256);

(statearr_5307[(9)] = inst_5258);

(statearr_5307[(10)] = inst_5257);

(statearr_5307[(11)] = inst_5281);

(statearr_5307[(12)] = inst_5259);

return statearr_5307;
})();
var statearr_5308_5345 = state_5304__$1;
(statearr_5308_5345[(2)] = null);

(statearr_5308_5345[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5305 === (1))){
var state_5304__$1 = state_5304;
var statearr_5309_5346 = state_5304__$1;
(statearr_5309_5346[(2)] = null);

(statearr_5309_5346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5305 === (4))){
var inst_5245 = (state_5304[(13)]);
var inst_5245__$1 = (state_5304[(2)]);
var inst_5246 = (inst_5245__$1 == null);
var state_5304__$1 = (function (){var statearr_5310 = state_5304;
(statearr_5310[(13)] = inst_5245__$1);

return statearr_5310;
})();
if(cljs.core.truth_(inst_5246)){
var statearr_5311_5347 = state_5304__$1;
(statearr_5311_5347[(1)] = (5));

} else {
var statearr_5312_5348 = state_5304__$1;
(statearr_5312_5348[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5305 === (15))){
var state_5304__$1 = state_5304;
var statearr_5316_5349 = state_5304__$1;
(statearr_5316_5349[(2)] = null);

(statearr_5316_5349[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5305 === (21))){
var state_5304__$1 = state_5304;
var statearr_5317_5350 = state_5304__$1;
(statearr_5317_5350[(2)] = null);

(statearr_5317_5350[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5305 === (13))){
var inst_5256 = (state_5304[(8)]);
var inst_5258 = (state_5304[(9)]);
var inst_5257 = (state_5304[(10)]);
var inst_5259 = (state_5304[(12)]);
var inst_5266 = (state_5304[(2)]);
var inst_5267 = (inst_5259 + (1));
var tmp5313 = inst_5256;
var tmp5314 = inst_5258;
var tmp5315 = inst_5257;
var inst_5256__$1 = tmp5313;
var inst_5257__$1 = tmp5315;
var inst_5258__$1 = tmp5314;
var inst_5259__$1 = inst_5267;
var state_5304__$1 = (function (){var statearr_5318 = state_5304;
(statearr_5318[(8)] = inst_5256__$1);

(statearr_5318[(9)] = inst_5258__$1);

(statearr_5318[(14)] = inst_5266);

(statearr_5318[(10)] = inst_5257__$1);

(statearr_5318[(12)] = inst_5259__$1);

return statearr_5318;
})();
var statearr_5319_5351 = state_5304__$1;
(statearr_5319_5351[(2)] = null);

(statearr_5319_5351[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5305 === (22))){
var state_5304__$1 = state_5304;
var statearr_5320_5352 = state_5304__$1;
(statearr_5320_5352[(2)] = null);

(statearr_5320_5352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5305 === (6))){
var inst_5245 = (state_5304[(13)]);
var inst_5254 = f.call(null,inst_5245);
var inst_5255 = cljs.core.seq.call(null,inst_5254);
var inst_5256 = inst_5255;
var inst_5257 = null;
var inst_5258 = (0);
var inst_5259 = (0);
var state_5304__$1 = (function (){var statearr_5321 = state_5304;
(statearr_5321[(8)] = inst_5256);

(statearr_5321[(9)] = inst_5258);

(statearr_5321[(10)] = inst_5257);

(statearr_5321[(12)] = inst_5259);

return statearr_5321;
})();
var statearr_5322_5353 = state_5304__$1;
(statearr_5322_5353[(2)] = null);

(statearr_5322_5353[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5305 === (17))){
var inst_5270 = (state_5304[(7)]);
var inst_5274 = cljs.core.chunk_first.call(null,inst_5270);
var inst_5275 = cljs.core.chunk_rest.call(null,inst_5270);
var inst_5276 = cljs.core.count.call(null,inst_5274);
var inst_5256 = inst_5275;
var inst_5257 = inst_5274;
var inst_5258 = inst_5276;
var inst_5259 = (0);
var state_5304__$1 = (function (){var statearr_5323 = state_5304;
(statearr_5323[(8)] = inst_5256);

(statearr_5323[(9)] = inst_5258);

(statearr_5323[(10)] = inst_5257);

(statearr_5323[(12)] = inst_5259);

return statearr_5323;
})();
var statearr_5324_5354 = state_5304__$1;
(statearr_5324_5354[(2)] = null);

(statearr_5324_5354[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5305 === (3))){
var inst_5302 = (state_5304[(2)]);
var state_5304__$1 = state_5304;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5304__$1,inst_5302);
} else {
if((state_val_5305 === (12))){
var inst_5290 = (state_5304[(2)]);
var state_5304__$1 = state_5304;
var statearr_5325_5355 = state_5304__$1;
(statearr_5325_5355[(2)] = inst_5290);

(statearr_5325_5355[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5305 === (2))){
var state_5304__$1 = state_5304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5304__$1,(4),in$);
} else {
if((state_val_5305 === (23))){
var inst_5298 = (state_5304[(2)]);
var state_5304__$1 = state_5304;
var statearr_5326_5356 = state_5304__$1;
(statearr_5326_5356[(2)] = inst_5298);

(statearr_5326_5356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5305 === (19))){
var inst_5285 = (state_5304[(2)]);
var state_5304__$1 = state_5304;
var statearr_5327_5357 = state_5304__$1;
(statearr_5327_5357[(2)] = inst_5285);

(statearr_5327_5357[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5305 === (11))){
var inst_5256 = (state_5304[(8)]);
var inst_5270 = (state_5304[(7)]);
var inst_5270__$1 = cljs.core.seq.call(null,inst_5256);
var state_5304__$1 = (function (){var statearr_5328 = state_5304;
(statearr_5328[(7)] = inst_5270__$1);

return statearr_5328;
})();
if(inst_5270__$1){
var statearr_5329_5358 = state_5304__$1;
(statearr_5329_5358[(1)] = (14));

} else {
var statearr_5330_5359 = state_5304__$1;
(statearr_5330_5359[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5305 === (9))){
var inst_5292 = (state_5304[(2)]);
var inst_5293 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_5304__$1 = (function (){var statearr_5331 = state_5304;
(statearr_5331[(15)] = inst_5292);

return statearr_5331;
})();
if(cljs.core.truth_(inst_5293)){
var statearr_5332_5360 = state_5304__$1;
(statearr_5332_5360[(1)] = (21));

} else {
var statearr_5333_5361 = state_5304__$1;
(statearr_5333_5361[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5305 === (5))){
var inst_5248 = cljs.core.async.close_BANG_.call(null,out);
var state_5304__$1 = state_5304;
var statearr_5334_5362 = state_5304__$1;
(statearr_5334_5362[(2)] = inst_5248);

(statearr_5334_5362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5305 === (14))){
var inst_5270 = (state_5304[(7)]);
var inst_5272 = cljs.core.chunked_seq_QMARK_.call(null,inst_5270);
var state_5304__$1 = state_5304;
if(inst_5272){
var statearr_5335_5363 = state_5304__$1;
(statearr_5335_5363[(1)] = (17));

} else {
var statearr_5336_5364 = state_5304__$1;
(statearr_5336_5364[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5305 === (16))){
var inst_5288 = (state_5304[(2)]);
var state_5304__$1 = state_5304;
var statearr_5337_5365 = state_5304__$1;
(statearr_5337_5365[(2)] = inst_5288);

(statearr_5337_5365[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5305 === (10))){
var inst_5257 = (state_5304[(10)]);
var inst_5259 = (state_5304[(12)]);
var inst_5264 = cljs.core._nth.call(null,inst_5257,inst_5259);
var state_5304__$1 = state_5304;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5304__$1,(13),out,inst_5264);
} else {
if((state_val_5305 === (18))){
var inst_5270 = (state_5304[(7)]);
var inst_5279 = cljs.core.first.call(null,inst_5270);
var state_5304__$1 = state_5304;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5304__$1,(20),out,inst_5279);
} else {
if((state_val_5305 === (8))){
var inst_5258 = (state_5304[(9)]);
var inst_5259 = (state_5304[(12)]);
var inst_5261 = (inst_5259 < inst_5258);
var inst_5262 = inst_5261;
var state_5304__$1 = state_5304;
if(cljs.core.truth_(inst_5262)){
var statearr_5338_5366 = state_5304__$1;
(statearr_5338_5366[(1)] = (10));

} else {
var statearr_5339_5367 = state_5304__$1;
(statearr_5339_5367[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__3688__auto__))
;
return ((function (switch__3598__auto__,c__3688__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__3599__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__3599__auto____0 = (function (){
var statearr_5340 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5340[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__3599__auto__);

(statearr_5340[(1)] = (1));

return statearr_5340;
});
var cljs$core$async$mapcat_STAR__$_state_machine__3599__auto____1 = (function (state_5304){
while(true){
var ret_value__3600__auto__ = (function (){try{while(true){
var result__3601__auto__ = switch__3598__auto__.call(null,state_5304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3601__auto__;
}
break;
}
}catch (e5341){if((e5341 instanceof Object)){
var ex__3602__auto__ = e5341;
var statearr_5342_5368 = state_5304;
(statearr_5342_5368[(5)] = ex__3602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5369 = state_5304;
state_5304 = G__5369;
continue;
} else {
return ret_value__3600__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__3599__auto__ = function(state_5304){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__3599__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__3599__auto____1.call(this,state_5304);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__3599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__3599__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__3599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__3599__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__3599__auto__;
})()
;})(switch__3598__auto__,c__3688__auto__))
})();
var state__3690__auto__ = (function (){var statearr_5343 = f__3689__auto__.call(null);
(statearr_5343[(6)] = c__3688__auto__);

return statearr_5343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3690__auto__);
});})(c__3688__auto__))
);

return c__3688__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__5371 = arguments.length;
switch (G__5371) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__5374 = arguments.length;
switch (G__5374) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__5377 = arguments.length;
switch (G__5377) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__3688__auto___5424 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3688__auto___5424,out){
return (function (){
var f__3689__auto__ = (function (){var switch__3598__auto__ = ((function (c__3688__auto___5424,out){
return (function (state_5401){
var state_val_5402 = (state_5401[(1)]);
if((state_val_5402 === (7))){
var inst_5396 = (state_5401[(2)]);
var state_5401__$1 = state_5401;
var statearr_5403_5425 = state_5401__$1;
(statearr_5403_5425[(2)] = inst_5396);

(statearr_5403_5425[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5402 === (1))){
var inst_5378 = null;
var state_5401__$1 = (function (){var statearr_5404 = state_5401;
(statearr_5404[(7)] = inst_5378);

return statearr_5404;
})();
var statearr_5405_5426 = state_5401__$1;
(statearr_5405_5426[(2)] = null);

(statearr_5405_5426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5402 === (4))){
var inst_5381 = (state_5401[(8)]);
var inst_5381__$1 = (state_5401[(2)]);
var inst_5382 = (inst_5381__$1 == null);
var inst_5383 = cljs.core.not.call(null,inst_5382);
var state_5401__$1 = (function (){var statearr_5406 = state_5401;
(statearr_5406[(8)] = inst_5381__$1);

return statearr_5406;
})();
if(inst_5383){
var statearr_5407_5427 = state_5401__$1;
(statearr_5407_5427[(1)] = (5));

} else {
var statearr_5408_5428 = state_5401__$1;
(statearr_5408_5428[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5402 === (6))){
var state_5401__$1 = state_5401;
var statearr_5409_5429 = state_5401__$1;
(statearr_5409_5429[(2)] = null);

(statearr_5409_5429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5402 === (3))){
var inst_5398 = (state_5401[(2)]);
var inst_5399 = cljs.core.async.close_BANG_.call(null,out);
var state_5401__$1 = (function (){var statearr_5410 = state_5401;
(statearr_5410[(9)] = inst_5398);

return statearr_5410;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5401__$1,inst_5399);
} else {
if((state_val_5402 === (2))){
var state_5401__$1 = state_5401;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5401__$1,(4),ch);
} else {
if((state_val_5402 === (11))){
var inst_5381 = (state_5401[(8)]);
var inst_5390 = (state_5401[(2)]);
var inst_5378 = inst_5381;
var state_5401__$1 = (function (){var statearr_5411 = state_5401;
(statearr_5411[(10)] = inst_5390);

(statearr_5411[(7)] = inst_5378);

return statearr_5411;
})();
var statearr_5412_5430 = state_5401__$1;
(statearr_5412_5430[(2)] = null);

(statearr_5412_5430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5402 === (9))){
var inst_5381 = (state_5401[(8)]);
var state_5401__$1 = state_5401;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5401__$1,(11),out,inst_5381);
} else {
if((state_val_5402 === (5))){
var inst_5381 = (state_5401[(8)]);
var inst_5378 = (state_5401[(7)]);
var inst_5385 = cljs.core._EQ_.call(null,inst_5381,inst_5378);
var state_5401__$1 = state_5401;
if(inst_5385){
var statearr_5414_5431 = state_5401__$1;
(statearr_5414_5431[(1)] = (8));

} else {
var statearr_5415_5432 = state_5401__$1;
(statearr_5415_5432[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5402 === (10))){
var inst_5393 = (state_5401[(2)]);
var state_5401__$1 = state_5401;
var statearr_5416_5433 = state_5401__$1;
(statearr_5416_5433[(2)] = inst_5393);

(statearr_5416_5433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5402 === (8))){
var inst_5378 = (state_5401[(7)]);
var tmp5413 = inst_5378;
var inst_5378__$1 = tmp5413;
var state_5401__$1 = (function (){var statearr_5417 = state_5401;
(statearr_5417[(7)] = inst_5378__$1);

return statearr_5417;
})();
var statearr_5418_5434 = state_5401__$1;
(statearr_5418_5434[(2)] = null);

(statearr_5418_5434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__3688__auto___5424,out))
;
return ((function (switch__3598__auto__,c__3688__auto___5424,out){
return (function() {
var cljs$core$async$state_machine__3599__auto__ = null;
var cljs$core$async$state_machine__3599__auto____0 = (function (){
var statearr_5419 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_5419[(0)] = cljs$core$async$state_machine__3599__auto__);

(statearr_5419[(1)] = (1));

return statearr_5419;
});
var cljs$core$async$state_machine__3599__auto____1 = (function (state_5401){
while(true){
var ret_value__3600__auto__ = (function (){try{while(true){
var result__3601__auto__ = switch__3598__auto__.call(null,state_5401);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3601__auto__;
}
break;
}
}catch (e5420){if((e5420 instanceof Object)){
var ex__3602__auto__ = e5420;
var statearr_5421_5435 = state_5401;
(statearr_5421_5435[(5)] = ex__3602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5401);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5436 = state_5401;
state_5401 = G__5436;
continue;
} else {
return ret_value__3600__auto__;
}
break;
}
});
cljs$core$async$state_machine__3599__auto__ = function(state_5401){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3599__auto____1.call(this,state_5401);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3599__auto____0;
cljs$core$async$state_machine__3599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3599__auto____1;
return cljs$core$async$state_machine__3599__auto__;
})()
;})(switch__3598__auto__,c__3688__auto___5424,out))
})();
var state__3690__auto__ = (function (){var statearr_5422 = f__3689__auto__.call(null);
(statearr_5422[(6)] = c__3688__auto___5424);

return statearr_5422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3690__auto__);
});})(c__3688__auto___5424,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__5438 = arguments.length;
switch (G__5438) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__3688__auto___5504 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3688__auto___5504,out){
return (function (){
var f__3689__auto__ = (function (){var switch__3598__auto__ = ((function (c__3688__auto___5504,out){
return (function (state_5476){
var state_val_5477 = (state_5476[(1)]);
if((state_val_5477 === (7))){
var inst_5472 = (state_5476[(2)]);
var state_5476__$1 = state_5476;
var statearr_5478_5505 = state_5476__$1;
(statearr_5478_5505[(2)] = inst_5472);

(statearr_5478_5505[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5477 === (1))){
var inst_5439 = (new Array(n));
var inst_5440 = inst_5439;
var inst_5441 = (0);
var state_5476__$1 = (function (){var statearr_5479 = state_5476;
(statearr_5479[(7)] = inst_5441);

(statearr_5479[(8)] = inst_5440);

return statearr_5479;
})();
var statearr_5480_5506 = state_5476__$1;
(statearr_5480_5506[(2)] = null);

(statearr_5480_5506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5477 === (4))){
var inst_5444 = (state_5476[(9)]);
var inst_5444__$1 = (state_5476[(2)]);
var inst_5445 = (inst_5444__$1 == null);
var inst_5446 = cljs.core.not.call(null,inst_5445);
var state_5476__$1 = (function (){var statearr_5481 = state_5476;
(statearr_5481[(9)] = inst_5444__$1);

return statearr_5481;
})();
if(inst_5446){
var statearr_5482_5507 = state_5476__$1;
(statearr_5482_5507[(1)] = (5));

} else {
var statearr_5483_5508 = state_5476__$1;
(statearr_5483_5508[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5477 === (15))){
var inst_5466 = (state_5476[(2)]);
var state_5476__$1 = state_5476;
var statearr_5484_5509 = state_5476__$1;
(statearr_5484_5509[(2)] = inst_5466);

(statearr_5484_5509[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5477 === (13))){
var state_5476__$1 = state_5476;
var statearr_5485_5510 = state_5476__$1;
(statearr_5485_5510[(2)] = null);

(statearr_5485_5510[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5477 === (6))){
var inst_5441 = (state_5476[(7)]);
var inst_5462 = (inst_5441 > (0));
var state_5476__$1 = state_5476;
if(cljs.core.truth_(inst_5462)){
var statearr_5486_5511 = state_5476__$1;
(statearr_5486_5511[(1)] = (12));

} else {
var statearr_5487_5512 = state_5476__$1;
(statearr_5487_5512[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5477 === (3))){
var inst_5474 = (state_5476[(2)]);
var state_5476__$1 = state_5476;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5476__$1,inst_5474);
} else {
if((state_val_5477 === (12))){
var inst_5440 = (state_5476[(8)]);
var inst_5464 = cljs.core.vec.call(null,inst_5440);
var state_5476__$1 = state_5476;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5476__$1,(15),out,inst_5464);
} else {
if((state_val_5477 === (2))){
var state_5476__$1 = state_5476;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5476__$1,(4),ch);
} else {
if((state_val_5477 === (11))){
var inst_5456 = (state_5476[(2)]);
var inst_5457 = (new Array(n));
var inst_5440 = inst_5457;
var inst_5441 = (0);
var state_5476__$1 = (function (){var statearr_5488 = state_5476;
(statearr_5488[(7)] = inst_5441);

(statearr_5488[(8)] = inst_5440);

(statearr_5488[(10)] = inst_5456);

return statearr_5488;
})();
var statearr_5489_5513 = state_5476__$1;
(statearr_5489_5513[(2)] = null);

(statearr_5489_5513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5477 === (9))){
var inst_5440 = (state_5476[(8)]);
var inst_5454 = cljs.core.vec.call(null,inst_5440);
var state_5476__$1 = state_5476;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5476__$1,(11),out,inst_5454);
} else {
if((state_val_5477 === (5))){
var inst_5444 = (state_5476[(9)]);
var inst_5449 = (state_5476[(11)]);
var inst_5441 = (state_5476[(7)]);
var inst_5440 = (state_5476[(8)]);
var inst_5448 = (inst_5440[inst_5441] = inst_5444);
var inst_5449__$1 = (inst_5441 + (1));
var inst_5450 = (inst_5449__$1 < n);
var state_5476__$1 = (function (){var statearr_5490 = state_5476;
(statearr_5490[(11)] = inst_5449__$1);

(statearr_5490[(12)] = inst_5448);

return statearr_5490;
})();
if(cljs.core.truth_(inst_5450)){
var statearr_5491_5514 = state_5476__$1;
(statearr_5491_5514[(1)] = (8));

} else {
var statearr_5492_5515 = state_5476__$1;
(statearr_5492_5515[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5477 === (14))){
var inst_5469 = (state_5476[(2)]);
var inst_5470 = cljs.core.async.close_BANG_.call(null,out);
var state_5476__$1 = (function (){var statearr_5494 = state_5476;
(statearr_5494[(13)] = inst_5469);

return statearr_5494;
})();
var statearr_5495_5516 = state_5476__$1;
(statearr_5495_5516[(2)] = inst_5470);

(statearr_5495_5516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5477 === (10))){
var inst_5460 = (state_5476[(2)]);
var state_5476__$1 = state_5476;
var statearr_5496_5517 = state_5476__$1;
(statearr_5496_5517[(2)] = inst_5460);

(statearr_5496_5517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5477 === (8))){
var inst_5449 = (state_5476[(11)]);
var inst_5440 = (state_5476[(8)]);
var tmp5493 = inst_5440;
var inst_5440__$1 = tmp5493;
var inst_5441 = inst_5449;
var state_5476__$1 = (function (){var statearr_5497 = state_5476;
(statearr_5497[(7)] = inst_5441);

(statearr_5497[(8)] = inst_5440__$1);

return statearr_5497;
})();
var statearr_5498_5518 = state_5476__$1;
(statearr_5498_5518[(2)] = null);

(statearr_5498_5518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__3688__auto___5504,out))
;
return ((function (switch__3598__auto__,c__3688__auto___5504,out){
return (function() {
var cljs$core$async$state_machine__3599__auto__ = null;
var cljs$core$async$state_machine__3599__auto____0 = (function (){
var statearr_5499 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5499[(0)] = cljs$core$async$state_machine__3599__auto__);

(statearr_5499[(1)] = (1));

return statearr_5499;
});
var cljs$core$async$state_machine__3599__auto____1 = (function (state_5476){
while(true){
var ret_value__3600__auto__ = (function (){try{while(true){
var result__3601__auto__ = switch__3598__auto__.call(null,state_5476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3601__auto__;
}
break;
}
}catch (e5500){if((e5500 instanceof Object)){
var ex__3602__auto__ = e5500;
var statearr_5501_5519 = state_5476;
(statearr_5501_5519[(5)] = ex__3602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5520 = state_5476;
state_5476 = G__5520;
continue;
} else {
return ret_value__3600__auto__;
}
break;
}
});
cljs$core$async$state_machine__3599__auto__ = function(state_5476){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3599__auto____1.call(this,state_5476);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3599__auto____0;
cljs$core$async$state_machine__3599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3599__auto____1;
return cljs$core$async$state_machine__3599__auto__;
})()
;})(switch__3598__auto__,c__3688__auto___5504,out))
})();
var state__3690__auto__ = (function (){var statearr_5502 = f__3689__auto__.call(null);
(statearr_5502[(6)] = c__3688__auto___5504);

return statearr_5502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3690__auto__);
});})(c__3688__auto___5504,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__5522 = arguments.length;
switch (G__5522) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__3688__auto___5592 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3688__auto___5592,out){
return (function (){
var f__3689__auto__ = (function (){var switch__3598__auto__ = ((function (c__3688__auto___5592,out){
return (function (state_5564){
var state_val_5565 = (state_5564[(1)]);
if((state_val_5565 === (7))){
var inst_5560 = (state_5564[(2)]);
var state_5564__$1 = state_5564;
var statearr_5566_5593 = state_5564__$1;
(statearr_5566_5593[(2)] = inst_5560);

(statearr_5566_5593[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5565 === (1))){
var inst_5523 = [];
var inst_5524 = inst_5523;
var inst_5525 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_5564__$1 = (function (){var statearr_5567 = state_5564;
(statearr_5567[(7)] = inst_5525);

(statearr_5567[(8)] = inst_5524);

return statearr_5567;
})();
var statearr_5568_5594 = state_5564__$1;
(statearr_5568_5594[(2)] = null);

(statearr_5568_5594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5565 === (4))){
var inst_5528 = (state_5564[(9)]);
var inst_5528__$1 = (state_5564[(2)]);
var inst_5529 = (inst_5528__$1 == null);
var inst_5530 = cljs.core.not.call(null,inst_5529);
var state_5564__$1 = (function (){var statearr_5569 = state_5564;
(statearr_5569[(9)] = inst_5528__$1);

return statearr_5569;
})();
if(inst_5530){
var statearr_5570_5595 = state_5564__$1;
(statearr_5570_5595[(1)] = (5));

} else {
var statearr_5571_5596 = state_5564__$1;
(statearr_5571_5596[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5565 === (15))){
var inst_5554 = (state_5564[(2)]);
var state_5564__$1 = state_5564;
var statearr_5572_5597 = state_5564__$1;
(statearr_5572_5597[(2)] = inst_5554);

(statearr_5572_5597[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5565 === (13))){
var state_5564__$1 = state_5564;
var statearr_5573_5598 = state_5564__$1;
(statearr_5573_5598[(2)] = null);

(statearr_5573_5598[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5565 === (6))){
var inst_5524 = (state_5564[(8)]);
var inst_5549 = inst_5524.length;
var inst_5550 = (inst_5549 > (0));
var state_5564__$1 = state_5564;
if(cljs.core.truth_(inst_5550)){
var statearr_5574_5599 = state_5564__$1;
(statearr_5574_5599[(1)] = (12));

} else {
var statearr_5575_5600 = state_5564__$1;
(statearr_5575_5600[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5565 === (3))){
var inst_5562 = (state_5564[(2)]);
var state_5564__$1 = state_5564;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5564__$1,inst_5562);
} else {
if((state_val_5565 === (12))){
var inst_5524 = (state_5564[(8)]);
var inst_5552 = cljs.core.vec.call(null,inst_5524);
var state_5564__$1 = state_5564;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5564__$1,(15),out,inst_5552);
} else {
if((state_val_5565 === (2))){
var state_5564__$1 = state_5564;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5564__$1,(4),ch);
} else {
if((state_val_5565 === (11))){
var inst_5528 = (state_5564[(9)]);
var inst_5532 = (state_5564[(10)]);
var inst_5542 = (state_5564[(2)]);
var inst_5543 = [];
var inst_5544 = inst_5543.push(inst_5528);
var inst_5524 = inst_5543;
var inst_5525 = inst_5532;
var state_5564__$1 = (function (){var statearr_5576 = state_5564;
(statearr_5576[(11)] = inst_5544);

(statearr_5576[(12)] = inst_5542);

(statearr_5576[(7)] = inst_5525);

(statearr_5576[(8)] = inst_5524);

return statearr_5576;
})();
var statearr_5577_5601 = state_5564__$1;
(statearr_5577_5601[(2)] = null);

(statearr_5577_5601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5565 === (9))){
var inst_5524 = (state_5564[(8)]);
var inst_5540 = cljs.core.vec.call(null,inst_5524);
var state_5564__$1 = state_5564;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5564__$1,(11),out,inst_5540);
} else {
if((state_val_5565 === (5))){
var inst_5528 = (state_5564[(9)]);
var inst_5532 = (state_5564[(10)]);
var inst_5525 = (state_5564[(7)]);
var inst_5532__$1 = f.call(null,inst_5528);
var inst_5533 = cljs.core._EQ_.call(null,inst_5532__$1,inst_5525);
var inst_5534 = cljs.core.keyword_identical_QMARK_.call(null,inst_5525,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_5535 = ((inst_5533) || (inst_5534));
var state_5564__$1 = (function (){var statearr_5578 = state_5564;
(statearr_5578[(10)] = inst_5532__$1);

return statearr_5578;
})();
if(cljs.core.truth_(inst_5535)){
var statearr_5579_5602 = state_5564__$1;
(statearr_5579_5602[(1)] = (8));

} else {
var statearr_5580_5603 = state_5564__$1;
(statearr_5580_5603[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5565 === (14))){
var inst_5557 = (state_5564[(2)]);
var inst_5558 = cljs.core.async.close_BANG_.call(null,out);
var state_5564__$1 = (function (){var statearr_5582 = state_5564;
(statearr_5582[(13)] = inst_5557);

return statearr_5582;
})();
var statearr_5583_5604 = state_5564__$1;
(statearr_5583_5604[(2)] = inst_5558);

(statearr_5583_5604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5565 === (10))){
var inst_5547 = (state_5564[(2)]);
var state_5564__$1 = state_5564;
var statearr_5584_5605 = state_5564__$1;
(statearr_5584_5605[(2)] = inst_5547);

(statearr_5584_5605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5565 === (8))){
var inst_5528 = (state_5564[(9)]);
var inst_5532 = (state_5564[(10)]);
var inst_5524 = (state_5564[(8)]);
var inst_5537 = inst_5524.push(inst_5528);
var tmp5581 = inst_5524;
var inst_5524__$1 = tmp5581;
var inst_5525 = inst_5532;
var state_5564__$1 = (function (){var statearr_5585 = state_5564;
(statearr_5585[(14)] = inst_5537);

(statearr_5585[(7)] = inst_5525);

(statearr_5585[(8)] = inst_5524__$1);

return statearr_5585;
})();
var statearr_5586_5606 = state_5564__$1;
(statearr_5586_5606[(2)] = null);

(statearr_5586_5606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__3688__auto___5592,out))
;
return ((function (switch__3598__auto__,c__3688__auto___5592,out){
return (function() {
var cljs$core$async$state_machine__3599__auto__ = null;
var cljs$core$async$state_machine__3599__auto____0 = (function (){
var statearr_5587 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5587[(0)] = cljs$core$async$state_machine__3599__auto__);

(statearr_5587[(1)] = (1));

return statearr_5587;
});
var cljs$core$async$state_machine__3599__auto____1 = (function (state_5564){
while(true){
var ret_value__3600__auto__ = (function (){try{while(true){
var result__3601__auto__ = switch__3598__auto__.call(null,state_5564);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3601__auto__;
}
break;
}
}catch (e5588){if((e5588 instanceof Object)){
var ex__3602__auto__ = e5588;
var statearr_5589_5607 = state_5564;
(statearr_5589_5607[(5)] = ex__3602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5564);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5588;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5608 = state_5564;
state_5564 = G__5608;
continue;
} else {
return ret_value__3600__auto__;
}
break;
}
});
cljs$core$async$state_machine__3599__auto__ = function(state_5564){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3599__auto____1.call(this,state_5564);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3599__auto____0;
cljs$core$async$state_machine__3599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3599__auto____1;
return cljs$core$async$state_machine__3599__auto__;
})()
;})(switch__3598__auto__,c__3688__auto___5592,out))
})();
var state__3690__auto__ = (function (){var statearr_5590 = f__3689__auto__.call(null);
(statearr_5590[(6)] = c__3688__auto___5592);

return statearr_5590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3690__auto__);
});})(c__3688__auto___5592,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
