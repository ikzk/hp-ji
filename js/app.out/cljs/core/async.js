// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__7907 = arguments.length;
switch (G__7907) {
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
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async7908 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7908 = (function (f,blockable,meta7909){
this.f = f;
this.blockable = blockable;
this.meta7909 = meta7909;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7908.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7910,meta7909__$1){
var self__ = this;
var _7910__$1 = this;
return (new cljs.core.async.t_cljs$core$async7908(self__.f,self__.blockable,meta7909__$1));
});

cljs.core.async.t_cljs$core$async7908.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7910){
var self__ = this;
var _7910__$1 = this;
return self__.meta7909;
});

cljs.core.async.t_cljs$core$async7908.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7908.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async7908.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async7908.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async7908.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta7909], null);
});

cljs.core.async.t_cljs$core$async7908.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7908.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7908";

cljs.core.async.t_cljs$core$async7908.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async7908");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7908.
 */
cljs.core.async.__GT_t_cljs$core$async7908 = (function cljs$core$async$__GT_t_cljs$core$async7908(f__$1,blockable__$1,meta7909){
return (new cljs.core.async.t_cljs$core$async7908(f__$1,blockable__$1,meta7909));
});

}

return (new cljs.core.async.t_cljs$core$async7908(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
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
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__7914 = arguments.length;
switch (G__7914) {
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
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var G__7917 = arguments.length;
switch (G__7917) {
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
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__7920 = arguments.length;
switch (G__7920) {
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
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_7922 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_7922) : fn1.call(null,val_7922));
} else {
cljs.core.async.impl.dispatch.run(((function (val_7922,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_7922) : fn1.call(null,val_7922));
});})(val_7922,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
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
var G__7924 = arguments.length;
switch (G__7924) {
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
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5455__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
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
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4376__auto___7926 = n;
var x_7927 = (0);
while(true){
if((x_7927 < n__4376__auto___7926)){
(a[x_7927] = (0));

var G__7928 = (x_7927 + (1));
x_7927 = G__7928;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__7929 = (i + (1));
i = G__7929;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if(typeof cljs.core.async.t_cljs$core$async7930 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7930 = (function (flag,meta7931){
this.flag = flag;
this.meta7931 = meta7931;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7930.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_7932,meta7931__$1){
var self__ = this;
var _7932__$1 = this;
return (new cljs.core.async.t_cljs$core$async7930(self__.flag,meta7931__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async7930.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_7932){
var self__ = this;
var _7932__$1 = this;
return self__.meta7931;
});})(flag))
;

cljs.core.async.t_cljs$core$async7930.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7930.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async7930.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async7930.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async7930.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta7931], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async7930.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7930.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7930";

cljs.core.async.t_cljs$core$async7930.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async7930");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7930.
 */
cljs.core.async.__GT_t_cljs$core$async7930 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async7930(flag__$1,meta7931){
return (new cljs.core.async.t_cljs$core$async7930(flag__$1,meta7931));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async7930(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async7933 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7933 = (function (flag,cb,meta7934){
this.flag = flag;
this.cb = cb;
this.meta7934 = meta7934;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7935,meta7934__$1){
var self__ = this;
var _7935__$1 = this;
return (new cljs.core.async.t_cljs$core$async7933(self__.flag,self__.cb,meta7934__$1));
});

cljs.core.async.t_cljs$core$async7933.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7935){
var self__ = this;
var _7935__$1 = this;
return self__.meta7934;
});

cljs.core.async.t_cljs$core$async7933.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7933.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async7933.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async7933.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async7933.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta7934], null);
});

cljs.core.async.t_cljs$core$async7933.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7933.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7933";

cljs.core.async.t_cljs$core$async7933.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async7933");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7933.
 */
cljs.core.async.__GT_t_cljs$core$async7933 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async7933(flag__$1,cb__$1,meta7934){
return (new cljs.core.async.t_cljs$core$async7933(flag__$1,cb__$1,meta7934));
});

}

return (new cljs.core.async.t_cljs$core$async7933(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__7936_SHARP_){
var G__7938 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__7936_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__7938) : fret.call(null,G__7938));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__7937_SHARP_){
var G__7939 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__7937_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__7939) : fret.call(null,G__7939));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__7940 = (i + (1));
i = G__7940;
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
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__5457__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
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
var len__4499__auto___7946 = arguments.length;
var i__4500__auto___7947 = (0);
while(true){
if((i__4500__auto___7947 < len__4499__auto___7946)){
args__4502__auto__.push((arguments[i__4500__auto___7947]));

var G__7948 = (i__4500__auto___7947 + (1));
i__4500__auto___7947 = G__7948;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__7943){
var map__7944 = p__7943;
var map__7944__$1 = ((((!((map__7944 == null)))?(((((map__7944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7944.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7944):map__7944);
var opts = map__7944__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq7941){
var G__7942 = cljs.core.first(seq7941);
var seq7941__$1 = cljs.core.next(seq7941);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7942,seq7941__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__7950 = arguments.length;
switch (G__7950) {
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
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__7847__auto___7996 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7847__auto___7996){
return (function (){
var f__7848__auto__ = (function (){var switch__7745__auto__ = ((function (c__7847__auto___7996){
return (function (state_7974){
var state_val_7975 = (state_7974[(1)]);
if((state_val_7975 === (7))){
var inst_7970 = (state_7974[(2)]);
var state_7974__$1 = state_7974;
var statearr_7976_7997 = state_7974__$1;
(statearr_7976_7997[(2)] = inst_7970);

(statearr_7976_7997[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7975 === (1))){
var state_7974__$1 = state_7974;
var statearr_7977_7998 = state_7974__$1;
(statearr_7977_7998[(2)] = null);

(statearr_7977_7998[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7975 === (4))){
var inst_7953 = (state_7974[(7)]);
var inst_7953__$1 = (state_7974[(2)]);
var inst_7954 = (inst_7953__$1 == null);
var state_7974__$1 = (function (){var statearr_7978 = state_7974;
(statearr_7978[(7)] = inst_7953__$1);

return statearr_7978;
})();
if(cljs.core.truth_(inst_7954)){
var statearr_7979_7999 = state_7974__$1;
(statearr_7979_7999[(1)] = (5));

} else {
var statearr_7980_8000 = state_7974__$1;
(statearr_7980_8000[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7975 === (13))){
var state_7974__$1 = state_7974;
var statearr_7981_8001 = state_7974__$1;
(statearr_7981_8001[(2)] = null);

(statearr_7981_8001[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7975 === (6))){
var inst_7953 = (state_7974[(7)]);
var state_7974__$1 = state_7974;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_7974__$1,(11),to,inst_7953);
} else {
if((state_val_7975 === (3))){
var inst_7972 = (state_7974[(2)]);
var state_7974__$1 = state_7974;
return cljs.core.async.impl.ioc_helpers.return_chan(state_7974__$1,inst_7972);
} else {
if((state_val_7975 === (12))){
var state_7974__$1 = state_7974;
var statearr_7982_8002 = state_7974__$1;
(statearr_7982_8002[(2)] = null);

(statearr_7982_8002[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7975 === (2))){
var state_7974__$1 = state_7974;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7974__$1,(4),from);
} else {
if((state_val_7975 === (11))){
var inst_7963 = (state_7974[(2)]);
var state_7974__$1 = state_7974;
if(cljs.core.truth_(inst_7963)){
var statearr_7983_8003 = state_7974__$1;
(statearr_7983_8003[(1)] = (12));

} else {
var statearr_7984_8004 = state_7974__$1;
(statearr_7984_8004[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7975 === (9))){
var state_7974__$1 = state_7974;
var statearr_7985_8005 = state_7974__$1;
(statearr_7985_8005[(2)] = null);

(statearr_7985_8005[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7975 === (5))){
var state_7974__$1 = state_7974;
if(cljs.core.truth_(close_QMARK_)){
var statearr_7986_8006 = state_7974__$1;
(statearr_7986_8006[(1)] = (8));

} else {
var statearr_7987_8007 = state_7974__$1;
(statearr_7987_8007[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7975 === (14))){
var inst_7968 = (state_7974[(2)]);
var state_7974__$1 = state_7974;
var statearr_7988_8008 = state_7974__$1;
(statearr_7988_8008[(2)] = inst_7968);

(statearr_7988_8008[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7975 === (10))){
var inst_7960 = (state_7974[(2)]);
var state_7974__$1 = state_7974;
var statearr_7989_8009 = state_7974__$1;
(statearr_7989_8009[(2)] = inst_7960);

(statearr_7989_8009[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7975 === (8))){
var inst_7957 = cljs.core.async.close_BANG_(to);
var state_7974__$1 = state_7974;
var statearr_7990_8010 = state_7974__$1;
(statearr_7990_8010[(2)] = inst_7957);

(statearr_7990_8010[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__7847__auto___7996))
;
return ((function (switch__7745__auto__,c__7847__auto___7996){
return (function() {
var cljs$core$async$state_machine__7746__auto__ = null;
var cljs$core$async$state_machine__7746__auto____0 = (function (){
var statearr_7991 = [null,null,null,null,null,null,null,null];
(statearr_7991[(0)] = cljs$core$async$state_machine__7746__auto__);

(statearr_7991[(1)] = (1));

return statearr_7991;
});
var cljs$core$async$state_machine__7746__auto____1 = (function (state_7974){
while(true){
var ret_value__7747__auto__ = (function (){try{while(true){
var result__7748__auto__ = switch__7745__auto__(state_7974);
if(cljs.core.keyword_identical_QMARK_(result__7748__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7748__auto__;
}
break;
}
}catch (e7992){if((e7992 instanceof Object)){
var ex__7749__auto__ = e7992;
var statearr_7993_8011 = state_7974;
(statearr_7993_8011[(5)] = ex__7749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7974);

return cljs.core.cst$kw$recur;
} else {
throw e7992;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7747__auto__,cljs.core.cst$kw$recur)){
var G__8012 = state_7974;
state_7974 = G__8012;
continue;
} else {
return ret_value__7747__auto__;
}
break;
}
});
cljs$core$async$state_machine__7746__auto__ = function(state_7974){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7746__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7746__auto____1.call(this,state_7974);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__7746__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7746__auto____0;
cljs$core$async$state_machine__7746__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7746__auto____1;
return cljs$core$async$state_machine__7746__auto__;
})()
;})(switch__7745__auto__,c__7847__auto___7996))
})();
var state__7849__auto__ = (function (){var statearr_7994 = (f__7848__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7848__auto__.cljs$core$IFn$_invoke$arity$0() : f__7848__auto__.call(null));
(statearr_7994[(6)] = c__7847__auto___7996);

return statearr_7994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7849__auto__);
});})(c__7847__auto___7996))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__8013){
var vec__8014 = p__8013;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8014,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8014,(1),null);
var job = vec__8014;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__7847__auto___8185 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7847__auto___8185,res,vec__8014,v,p,job,jobs,results){
return (function (){
var f__7848__auto__ = (function (){var switch__7745__auto__ = ((function (c__7847__auto___8185,res,vec__8014,v,p,job,jobs,results){
return (function (state_8021){
var state_val_8022 = (state_8021[(1)]);
if((state_val_8022 === (1))){
var state_8021__$1 = state_8021;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8021__$1,(2),res,v);
} else {
if((state_val_8022 === (2))){
var inst_8018 = (state_8021[(2)]);
var inst_8019 = cljs.core.async.close_BANG_(res);
var state_8021__$1 = (function (){var statearr_8023 = state_8021;
(statearr_8023[(7)] = inst_8018);

return statearr_8023;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_8021__$1,inst_8019);
} else {
return null;
}
}
});})(c__7847__auto___8185,res,vec__8014,v,p,job,jobs,results))
;
return ((function (switch__7745__auto__,c__7847__auto___8185,res,vec__8014,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7746__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7746__auto____0 = (function (){
var statearr_8024 = [null,null,null,null,null,null,null,null];
(statearr_8024[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7746__auto__);

(statearr_8024[(1)] = (1));

return statearr_8024;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7746__auto____1 = (function (state_8021){
while(true){
var ret_value__7747__auto__ = (function (){try{while(true){
var result__7748__auto__ = switch__7745__auto__(state_8021);
if(cljs.core.keyword_identical_QMARK_(result__7748__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7748__auto__;
}
break;
}
}catch (e8025){if((e8025 instanceof Object)){
var ex__7749__auto__ = e8025;
var statearr_8026_8186 = state_8021;
(statearr_8026_8186[(5)] = ex__7749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8021);

return cljs.core.cst$kw$recur;
} else {
throw e8025;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7747__auto__,cljs.core.cst$kw$recur)){
var G__8187 = state_8021;
state_8021 = G__8187;
continue;
} else {
return ret_value__7747__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7746__auto__ = function(state_8021){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7746__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7746__auto____1.call(this,state_8021);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__7746__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7746__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7746__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7746__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7746__auto__;
})()
;})(switch__7745__auto__,c__7847__auto___8185,res,vec__8014,v,p,job,jobs,results))
})();
var state__7849__auto__ = (function (){var statearr_8027 = (f__7848__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7848__auto__.cljs$core$IFn$_invoke$arity$0() : f__7848__auto__.call(null));
(statearr_8027[(6)] = c__7847__auto___8185);

return statearr_8027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7849__auto__);
});})(c__7847__auto___8185,res,vec__8014,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__8028){
var vec__8029 = p__8028;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8029,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8029,(1),null);
var job = vec__8029;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4376__auto___8188 = n;
var __8189 = (0);
while(true){
if((__8189 < n__4376__auto___8188)){
var G__8032_8190 = type;
var G__8032_8191__$1 = (((G__8032_8190 instanceof cljs.core.Keyword))?G__8032_8190.fqn:null);
switch (G__8032_8191__$1) {
case "compute":
var c__7847__auto___8193 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__8189,c__7847__auto___8193,G__8032_8190,G__8032_8191__$1,n__4376__auto___8188,jobs,results,process,async){
return (function (){
var f__7848__auto__ = (function (){var switch__7745__auto__ = ((function (__8189,c__7847__auto___8193,G__8032_8190,G__8032_8191__$1,n__4376__auto___8188,jobs,results,process,async){
return (function (state_8045){
var state_val_8046 = (state_8045[(1)]);
if((state_val_8046 === (1))){
var state_8045__$1 = state_8045;
var statearr_8047_8194 = state_8045__$1;
(statearr_8047_8194[(2)] = null);

(statearr_8047_8194[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8046 === (2))){
var state_8045__$1 = state_8045;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8045__$1,(4),jobs);
} else {
if((state_val_8046 === (3))){
var inst_8043 = (state_8045[(2)]);
var state_8045__$1 = state_8045;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8045__$1,inst_8043);
} else {
if((state_val_8046 === (4))){
var inst_8035 = (state_8045[(2)]);
var inst_8036 = process(inst_8035);
var state_8045__$1 = state_8045;
if(cljs.core.truth_(inst_8036)){
var statearr_8048_8195 = state_8045__$1;
(statearr_8048_8195[(1)] = (5));

} else {
var statearr_8049_8196 = state_8045__$1;
(statearr_8049_8196[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8046 === (5))){
var state_8045__$1 = state_8045;
var statearr_8050_8197 = state_8045__$1;
(statearr_8050_8197[(2)] = null);

(statearr_8050_8197[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8046 === (6))){
var state_8045__$1 = state_8045;
var statearr_8051_8198 = state_8045__$1;
(statearr_8051_8198[(2)] = null);

(statearr_8051_8198[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8046 === (7))){
var inst_8041 = (state_8045[(2)]);
var state_8045__$1 = state_8045;
var statearr_8052_8199 = state_8045__$1;
(statearr_8052_8199[(2)] = inst_8041);

(statearr_8052_8199[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__8189,c__7847__auto___8193,G__8032_8190,G__8032_8191__$1,n__4376__auto___8188,jobs,results,process,async))
;
return ((function (__8189,switch__7745__auto__,c__7847__auto___8193,G__8032_8190,G__8032_8191__$1,n__4376__auto___8188,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7746__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7746__auto____0 = (function (){
var statearr_8053 = [null,null,null,null,null,null,null];
(statearr_8053[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7746__auto__);

(statearr_8053[(1)] = (1));

return statearr_8053;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7746__auto____1 = (function (state_8045){
while(true){
var ret_value__7747__auto__ = (function (){try{while(true){
var result__7748__auto__ = switch__7745__auto__(state_8045);
if(cljs.core.keyword_identical_QMARK_(result__7748__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7748__auto__;
}
break;
}
}catch (e8054){if((e8054 instanceof Object)){
var ex__7749__auto__ = e8054;
var statearr_8055_8200 = state_8045;
(statearr_8055_8200[(5)] = ex__7749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8045);

return cljs.core.cst$kw$recur;
} else {
throw e8054;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7747__auto__,cljs.core.cst$kw$recur)){
var G__8201 = state_8045;
state_8045 = G__8201;
continue;
} else {
return ret_value__7747__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7746__auto__ = function(state_8045){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7746__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7746__auto____1.call(this,state_8045);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__7746__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7746__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7746__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7746__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7746__auto__;
})()
;})(__8189,switch__7745__auto__,c__7847__auto___8193,G__8032_8190,G__8032_8191__$1,n__4376__auto___8188,jobs,results,process,async))
})();
var state__7849__auto__ = (function (){var statearr_8056 = (f__7848__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7848__auto__.cljs$core$IFn$_invoke$arity$0() : f__7848__auto__.call(null));
(statearr_8056[(6)] = c__7847__auto___8193);

return statearr_8056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7849__auto__);
});})(__8189,c__7847__auto___8193,G__8032_8190,G__8032_8191__$1,n__4376__auto___8188,jobs,results,process,async))
);


break;
case "async":
var c__7847__auto___8202 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__8189,c__7847__auto___8202,G__8032_8190,G__8032_8191__$1,n__4376__auto___8188,jobs,results,process,async){
return (function (){
var f__7848__auto__ = (function (){var switch__7745__auto__ = ((function (__8189,c__7847__auto___8202,G__8032_8190,G__8032_8191__$1,n__4376__auto___8188,jobs,results,process,async){
return (function (state_8069){
var state_val_8070 = (state_8069[(1)]);
if((state_val_8070 === (1))){
var state_8069__$1 = state_8069;
var statearr_8071_8203 = state_8069__$1;
(statearr_8071_8203[(2)] = null);

(statearr_8071_8203[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8070 === (2))){
var state_8069__$1 = state_8069;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8069__$1,(4),jobs);
} else {
if((state_val_8070 === (3))){
var inst_8067 = (state_8069[(2)]);
var state_8069__$1 = state_8069;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8069__$1,inst_8067);
} else {
if((state_val_8070 === (4))){
var inst_8059 = (state_8069[(2)]);
var inst_8060 = async(inst_8059);
var state_8069__$1 = state_8069;
if(cljs.core.truth_(inst_8060)){
var statearr_8072_8204 = state_8069__$1;
(statearr_8072_8204[(1)] = (5));

} else {
var statearr_8073_8205 = state_8069__$1;
(statearr_8073_8205[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8070 === (5))){
var state_8069__$1 = state_8069;
var statearr_8074_8206 = state_8069__$1;
(statearr_8074_8206[(2)] = null);

(statearr_8074_8206[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8070 === (6))){
var state_8069__$1 = state_8069;
var statearr_8075_8207 = state_8069__$1;
(statearr_8075_8207[(2)] = null);

(statearr_8075_8207[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8070 === (7))){
var inst_8065 = (state_8069[(2)]);
var state_8069__$1 = state_8069;
var statearr_8076_8208 = state_8069__$1;
(statearr_8076_8208[(2)] = inst_8065);

(statearr_8076_8208[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__8189,c__7847__auto___8202,G__8032_8190,G__8032_8191__$1,n__4376__auto___8188,jobs,results,process,async))
;
return ((function (__8189,switch__7745__auto__,c__7847__auto___8202,G__8032_8190,G__8032_8191__$1,n__4376__auto___8188,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7746__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7746__auto____0 = (function (){
var statearr_8077 = [null,null,null,null,null,null,null];
(statearr_8077[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7746__auto__);

(statearr_8077[(1)] = (1));

return statearr_8077;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7746__auto____1 = (function (state_8069){
while(true){
var ret_value__7747__auto__ = (function (){try{while(true){
var result__7748__auto__ = switch__7745__auto__(state_8069);
if(cljs.core.keyword_identical_QMARK_(result__7748__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7748__auto__;
}
break;
}
}catch (e8078){if((e8078 instanceof Object)){
var ex__7749__auto__ = e8078;
var statearr_8079_8209 = state_8069;
(statearr_8079_8209[(5)] = ex__7749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8069);

return cljs.core.cst$kw$recur;
} else {
throw e8078;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7747__auto__,cljs.core.cst$kw$recur)){
var G__8210 = state_8069;
state_8069 = G__8210;
continue;
} else {
return ret_value__7747__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7746__auto__ = function(state_8069){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7746__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7746__auto____1.call(this,state_8069);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__7746__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7746__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7746__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7746__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7746__auto__;
})()
;})(__8189,switch__7745__auto__,c__7847__auto___8202,G__8032_8190,G__8032_8191__$1,n__4376__auto___8188,jobs,results,process,async))
})();
var state__7849__auto__ = (function (){var statearr_8080 = (f__7848__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7848__auto__.cljs$core$IFn$_invoke$arity$0() : f__7848__auto__.call(null));
(statearr_8080[(6)] = c__7847__auto___8202);

return statearr_8080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7849__auto__);
});})(__8189,c__7847__auto___8202,G__8032_8190,G__8032_8191__$1,n__4376__auto___8188,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8032_8191__$1)].join('')));

}

var G__8211 = (__8189 + (1));
__8189 = G__8211;
continue;
} else {
}
break;
}

var c__7847__auto___8212 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7847__auto___8212,jobs,results,process,async){
return (function (){
var f__7848__auto__ = (function (){var switch__7745__auto__ = ((function (c__7847__auto___8212,jobs,results,process,async){
return (function (state_8102){
var state_val_8103 = (state_8102[(1)]);
if((state_val_8103 === (1))){
var state_8102__$1 = state_8102;
var statearr_8104_8213 = state_8102__$1;
(statearr_8104_8213[(2)] = null);

(statearr_8104_8213[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8103 === (2))){
var state_8102__$1 = state_8102;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8102__$1,(4),from);
} else {
if((state_val_8103 === (3))){
var inst_8100 = (state_8102[(2)]);
var state_8102__$1 = state_8102;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8102__$1,inst_8100);
} else {
if((state_val_8103 === (4))){
var inst_8083 = (state_8102[(7)]);
var inst_8083__$1 = (state_8102[(2)]);
var inst_8084 = (inst_8083__$1 == null);
var state_8102__$1 = (function (){var statearr_8105 = state_8102;
(statearr_8105[(7)] = inst_8083__$1);

return statearr_8105;
})();
if(cljs.core.truth_(inst_8084)){
var statearr_8106_8214 = state_8102__$1;
(statearr_8106_8214[(1)] = (5));

} else {
var statearr_8107_8215 = state_8102__$1;
(statearr_8107_8215[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8103 === (5))){
var inst_8086 = cljs.core.async.close_BANG_(jobs);
var state_8102__$1 = state_8102;
var statearr_8108_8216 = state_8102__$1;
(statearr_8108_8216[(2)] = inst_8086);

(statearr_8108_8216[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8103 === (6))){
var inst_8088 = (state_8102[(8)]);
var inst_8083 = (state_8102[(7)]);
var inst_8088__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_8089 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8090 = [inst_8083,inst_8088__$1];
var inst_8091 = (new cljs.core.PersistentVector(null,2,(5),inst_8089,inst_8090,null));
var state_8102__$1 = (function (){var statearr_8109 = state_8102;
(statearr_8109[(8)] = inst_8088__$1);

return statearr_8109;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8102__$1,(8),jobs,inst_8091);
} else {
if((state_val_8103 === (7))){
var inst_8098 = (state_8102[(2)]);
var state_8102__$1 = state_8102;
var statearr_8110_8217 = state_8102__$1;
(statearr_8110_8217[(2)] = inst_8098);

(statearr_8110_8217[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8103 === (8))){
var inst_8088 = (state_8102[(8)]);
var inst_8093 = (state_8102[(2)]);
var state_8102__$1 = (function (){var statearr_8111 = state_8102;
(statearr_8111[(9)] = inst_8093);

return statearr_8111;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8102__$1,(9),results,inst_8088);
} else {
if((state_val_8103 === (9))){
var inst_8095 = (state_8102[(2)]);
var state_8102__$1 = (function (){var statearr_8112 = state_8102;
(statearr_8112[(10)] = inst_8095);

return statearr_8112;
})();
var statearr_8113_8218 = state_8102__$1;
(statearr_8113_8218[(2)] = null);

(statearr_8113_8218[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__7847__auto___8212,jobs,results,process,async))
;
return ((function (switch__7745__auto__,c__7847__auto___8212,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7746__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7746__auto____0 = (function (){
var statearr_8114 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_8114[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7746__auto__);

(statearr_8114[(1)] = (1));

return statearr_8114;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7746__auto____1 = (function (state_8102){
while(true){
var ret_value__7747__auto__ = (function (){try{while(true){
var result__7748__auto__ = switch__7745__auto__(state_8102);
if(cljs.core.keyword_identical_QMARK_(result__7748__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7748__auto__;
}
break;
}
}catch (e8115){if((e8115 instanceof Object)){
var ex__7749__auto__ = e8115;
var statearr_8116_8219 = state_8102;
(statearr_8116_8219[(5)] = ex__7749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8102);

return cljs.core.cst$kw$recur;
} else {
throw e8115;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7747__auto__,cljs.core.cst$kw$recur)){
var G__8220 = state_8102;
state_8102 = G__8220;
continue;
} else {
return ret_value__7747__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7746__auto__ = function(state_8102){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7746__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7746__auto____1.call(this,state_8102);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__7746__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7746__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7746__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7746__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7746__auto__;
})()
;})(switch__7745__auto__,c__7847__auto___8212,jobs,results,process,async))
})();
var state__7849__auto__ = (function (){var statearr_8117 = (f__7848__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7848__auto__.cljs$core$IFn$_invoke$arity$0() : f__7848__auto__.call(null));
(statearr_8117[(6)] = c__7847__auto___8212);

return statearr_8117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7849__auto__);
});})(c__7847__auto___8212,jobs,results,process,async))
);


var c__7847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7847__auto__,jobs,results,process,async){
return (function (){
var f__7848__auto__ = (function (){var switch__7745__auto__ = ((function (c__7847__auto__,jobs,results,process,async){
return (function (state_8155){
var state_val_8156 = (state_8155[(1)]);
if((state_val_8156 === (7))){
var inst_8151 = (state_8155[(2)]);
var state_8155__$1 = state_8155;
var statearr_8157_8221 = state_8155__$1;
(statearr_8157_8221[(2)] = inst_8151);

(statearr_8157_8221[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8156 === (20))){
var state_8155__$1 = state_8155;
var statearr_8158_8222 = state_8155__$1;
(statearr_8158_8222[(2)] = null);

(statearr_8158_8222[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8156 === (1))){
var state_8155__$1 = state_8155;
var statearr_8159_8223 = state_8155__$1;
(statearr_8159_8223[(2)] = null);

(statearr_8159_8223[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8156 === (4))){
var inst_8120 = (state_8155[(7)]);
var inst_8120__$1 = (state_8155[(2)]);
var inst_8121 = (inst_8120__$1 == null);
var state_8155__$1 = (function (){var statearr_8160 = state_8155;
(statearr_8160[(7)] = inst_8120__$1);

return statearr_8160;
})();
if(cljs.core.truth_(inst_8121)){
var statearr_8161_8224 = state_8155__$1;
(statearr_8161_8224[(1)] = (5));

} else {
var statearr_8162_8225 = state_8155__$1;
(statearr_8162_8225[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8156 === (15))){
var inst_8133 = (state_8155[(8)]);
var state_8155__$1 = state_8155;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8155__$1,(18),to,inst_8133);
} else {
if((state_val_8156 === (21))){
var inst_8146 = (state_8155[(2)]);
var state_8155__$1 = state_8155;
var statearr_8163_8226 = state_8155__$1;
(statearr_8163_8226[(2)] = inst_8146);

(statearr_8163_8226[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8156 === (13))){
var inst_8148 = (state_8155[(2)]);
var state_8155__$1 = (function (){var statearr_8164 = state_8155;
(statearr_8164[(9)] = inst_8148);

return statearr_8164;
})();
var statearr_8165_8227 = state_8155__$1;
(statearr_8165_8227[(2)] = null);

(statearr_8165_8227[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8156 === (6))){
var inst_8120 = (state_8155[(7)]);
var state_8155__$1 = state_8155;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8155__$1,(11),inst_8120);
} else {
if((state_val_8156 === (17))){
var inst_8141 = (state_8155[(2)]);
var state_8155__$1 = state_8155;
if(cljs.core.truth_(inst_8141)){
var statearr_8166_8228 = state_8155__$1;
(statearr_8166_8228[(1)] = (19));

} else {
var statearr_8167_8229 = state_8155__$1;
(statearr_8167_8229[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8156 === (3))){
var inst_8153 = (state_8155[(2)]);
var state_8155__$1 = state_8155;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8155__$1,inst_8153);
} else {
if((state_val_8156 === (12))){
var inst_8130 = (state_8155[(10)]);
var state_8155__$1 = state_8155;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8155__$1,(14),inst_8130);
} else {
if((state_val_8156 === (2))){
var state_8155__$1 = state_8155;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8155__$1,(4),results);
} else {
if((state_val_8156 === (19))){
var state_8155__$1 = state_8155;
var statearr_8168_8230 = state_8155__$1;
(statearr_8168_8230[(2)] = null);

(statearr_8168_8230[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8156 === (11))){
var inst_8130 = (state_8155[(2)]);
var state_8155__$1 = (function (){var statearr_8169 = state_8155;
(statearr_8169[(10)] = inst_8130);

return statearr_8169;
})();
var statearr_8170_8231 = state_8155__$1;
(statearr_8170_8231[(2)] = null);

(statearr_8170_8231[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8156 === (9))){
var state_8155__$1 = state_8155;
var statearr_8171_8232 = state_8155__$1;
(statearr_8171_8232[(2)] = null);

(statearr_8171_8232[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8156 === (5))){
var state_8155__$1 = state_8155;
if(cljs.core.truth_(close_QMARK_)){
var statearr_8172_8233 = state_8155__$1;
(statearr_8172_8233[(1)] = (8));

} else {
var statearr_8173_8234 = state_8155__$1;
(statearr_8173_8234[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8156 === (14))){
var inst_8135 = (state_8155[(11)]);
var inst_8133 = (state_8155[(8)]);
var inst_8133__$1 = (state_8155[(2)]);
var inst_8134 = (inst_8133__$1 == null);
var inst_8135__$1 = cljs.core.not(inst_8134);
var state_8155__$1 = (function (){var statearr_8174 = state_8155;
(statearr_8174[(11)] = inst_8135__$1);

(statearr_8174[(8)] = inst_8133__$1);

return statearr_8174;
})();
if(inst_8135__$1){
var statearr_8175_8235 = state_8155__$1;
(statearr_8175_8235[(1)] = (15));

} else {
var statearr_8176_8236 = state_8155__$1;
(statearr_8176_8236[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8156 === (16))){
var inst_8135 = (state_8155[(11)]);
var state_8155__$1 = state_8155;
var statearr_8177_8237 = state_8155__$1;
(statearr_8177_8237[(2)] = inst_8135);

(statearr_8177_8237[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8156 === (10))){
var inst_8127 = (state_8155[(2)]);
var state_8155__$1 = state_8155;
var statearr_8178_8238 = state_8155__$1;
(statearr_8178_8238[(2)] = inst_8127);

(statearr_8178_8238[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8156 === (18))){
var inst_8138 = (state_8155[(2)]);
var state_8155__$1 = state_8155;
var statearr_8179_8239 = state_8155__$1;
(statearr_8179_8239[(2)] = inst_8138);

(statearr_8179_8239[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8156 === (8))){
var inst_8124 = cljs.core.async.close_BANG_(to);
var state_8155__$1 = state_8155;
var statearr_8180_8240 = state_8155__$1;
(statearr_8180_8240[(2)] = inst_8124);

(statearr_8180_8240[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__7847__auto__,jobs,results,process,async))
;
return ((function (switch__7745__auto__,c__7847__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7746__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7746__auto____0 = (function (){
var statearr_8181 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8181[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7746__auto__);

(statearr_8181[(1)] = (1));

return statearr_8181;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7746__auto____1 = (function (state_8155){
while(true){
var ret_value__7747__auto__ = (function (){try{while(true){
var result__7748__auto__ = switch__7745__auto__(state_8155);
if(cljs.core.keyword_identical_QMARK_(result__7748__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7748__auto__;
}
break;
}
}catch (e8182){if((e8182 instanceof Object)){
var ex__7749__auto__ = e8182;
var statearr_8183_8241 = state_8155;
(statearr_8183_8241[(5)] = ex__7749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8155);

return cljs.core.cst$kw$recur;
} else {
throw e8182;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7747__auto__,cljs.core.cst$kw$recur)){
var G__8242 = state_8155;
state_8155 = G__8242;
continue;
} else {
return ret_value__7747__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7746__auto__ = function(state_8155){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7746__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7746__auto____1.call(this,state_8155);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__7746__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7746__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7746__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7746__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7746__auto__;
})()
;})(switch__7745__auto__,c__7847__auto__,jobs,results,process,async))
})();
var state__7849__auto__ = (function (){var statearr_8184 = (f__7848__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7848__auto__.cljs$core$IFn$_invoke$arity$0() : f__7848__auto__.call(null));
(statearr_8184[(6)] = c__7847__auto__);

return statearr_8184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7849__auto__);
});})(c__7847__auto__,jobs,results,process,async))
);

return c__7847__auto__;
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
var G__8244 = arguments.length;
switch (G__8244) {
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
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
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
var G__8247 = arguments.length;
switch (G__8247) {
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
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
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
var G__8250 = arguments.length;
switch (G__8250) {
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
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__7847__auto___8299 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7847__auto___8299,tc,fc){
return (function (){
var f__7848__auto__ = (function (){var switch__7745__auto__ = ((function (c__7847__auto___8299,tc,fc){
return (function (state_8276){
var state_val_8277 = (state_8276[(1)]);
if((state_val_8277 === (7))){
var inst_8272 = (state_8276[(2)]);
var state_8276__$1 = state_8276;
var statearr_8278_8300 = state_8276__$1;
(statearr_8278_8300[(2)] = inst_8272);

(statearr_8278_8300[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8277 === (1))){
var state_8276__$1 = state_8276;
var statearr_8279_8301 = state_8276__$1;
(statearr_8279_8301[(2)] = null);

(statearr_8279_8301[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8277 === (4))){
var inst_8253 = (state_8276[(7)]);
var inst_8253__$1 = (state_8276[(2)]);
var inst_8254 = (inst_8253__$1 == null);
var state_8276__$1 = (function (){var statearr_8280 = state_8276;
(statearr_8280[(7)] = inst_8253__$1);

return statearr_8280;
})();
if(cljs.core.truth_(inst_8254)){
var statearr_8281_8302 = state_8276__$1;
(statearr_8281_8302[(1)] = (5));

} else {
var statearr_8282_8303 = state_8276__$1;
(statearr_8282_8303[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8277 === (13))){
var state_8276__$1 = state_8276;
var statearr_8283_8304 = state_8276__$1;
(statearr_8283_8304[(2)] = null);

(statearr_8283_8304[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8277 === (6))){
var inst_8253 = (state_8276[(7)]);
var inst_8259 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_8253) : p.call(null,inst_8253));
var state_8276__$1 = state_8276;
if(cljs.core.truth_(inst_8259)){
var statearr_8284_8305 = state_8276__$1;
(statearr_8284_8305[(1)] = (9));

} else {
var statearr_8285_8306 = state_8276__$1;
(statearr_8285_8306[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8277 === (3))){
var inst_8274 = (state_8276[(2)]);
var state_8276__$1 = state_8276;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8276__$1,inst_8274);
} else {
if((state_val_8277 === (12))){
var state_8276__$1 = state_8276;
var statearr_8286_8307 = state_8276__$1;
(statearr_8286_8307[(2)] = null);

(statearr_8286_8307[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8277 === (2))){
var state_8276__$1 = state_8276;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8276__$1,(4),ch);
} else {
if((state_val_8277 === (11))){
var inst_8253 = (state_8276[(7)]);
var inst_8263 = (state_8276[(2)]);
var state_8276__$1 = state_8276;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8276__$1,(8),inst_8263,inst_8253);
} else {
if((state_val_8277 === (9))){
var state_8276__$1 = state_8276;
var statearr_8287_8308 = state_8276__$1;
(statearr_8287_8308[(2)] = tc);

(statearr_8287_8308[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8277 === (5))){
var inst_8256 = cljs.core.async.close_BANG_(tc);
var inst_8257 = cljs.core.async.close_BANG_(fc);
var state_8276__$1 = (function (){var statearr_8288 = state_8276;
(statearr_8288[(8)] = inst_8256);

return statearr_8288;
})();
var statearr_8289_8309 = state_8276__$1;
(statearr_8289_8309[(2)] = inst_8257);

(statearr_8289_8309[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8277 === (14))){
var inst_8270 = (state_8276[(2)]);
var state_8276__$1 = state_8276;
var statearr_8290_8310 = state_8276__$1;
(statearr_8290_8310[(2)] = inst_8270);

(statearr_8290_8310[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8277 === (10))){
var state_8276__$1 = state_8276;
var statearr_8291_8311 = state_8276__$1;
(statearr_8291_8311[(2)] = fc);

(statearr_8291_8311[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8277 === (8))){
var inst_8265 = (state_8276[(2)]);
var state_8276__$1 = state_8276;
if(cljs.core.truth_(inst_8265)){
var statearr_8292_8312 = state_8276__$1;
(statearr_8292_8312[(1)] = (12));

} else {
var statearr_8293_8313 = state_8276__$1;
(statearr_8293_8313[(1)] = (13));

}

return cljs.core.cst$kw$recur;
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
});})(c__7847__auto___8299,tc,fc))
;
return ((function (switch__7745__auto__,c__7847__auto___8299,tc,fc){
return (function() {
var cljs$core$async$state_machine__7746__auto__ = null;
var cljs$core$async$state_machine__7746__auto____0 = (function (){
var statearr_8294 = [null,null,null,null,null,null,null,null,null];
(statearr_8294[(0)] = cljs$core$async$state_machine__7746__auto__);

(statearr_8294[(1)] = (1));

return statearr_8294;
});
var cljs$core$async$state_machine__7746__auto____1 = (function (state_8276){
while(true){
var ret_value__7747__auto__ = (function (){try{while(true){
var result__7748__auto__ = switch__7745__auto__(state_8276);
if(cljs.core.keyword_identical_QMARK_(result__7748__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7748__auto__;
}
break;
}
}catch (e8295){if((e8295 instanceof Object)){
var ex__7749__auto__ = e8295;
var statearr_8296_8314 = state_8276;
(statearr_8296_8314[(5)] = ex__7749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8276);

return cljs.core.cst$kw$recur;
} else {
throw e8295;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7747__auto__,cljs.core.cst$kw$recur)){
var G__8315 = state_8276;
state_8276 = G__8315;
continue;
} else {
return ret_value__7747__auto__;
}
break;
}
});
cljs$core$async$state_machine__7746__auto__ = function(state_8276){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7746__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7746__auto____1.call(this,state_8276);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__7746__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7746__auto____0;
cljs$core$async$state_machine__7746__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7746__auto____1;
return cljs$core$async$state_machine__7746__auto__;
})()
;})(switch__7745__auto__,c__7847__auto___8299,tc,fc))
})();
var state__7849__auto__ = (function (){var statearr_8297 = (f__7848__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7848__auto__.cljs$core$IFn$_invoke$arity$0() : f__7848__auto__.call(null));
(statearr_8297[(6)] = c__7847__auto___8299);

return statearr_8297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7849__auto__);
});})(c__7847__auto___8299,tc,fc))
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
var c__7847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7847__auto__){
return (function (){
var f__7848__auto__ = (function (){var switch__7745__auto__ = ((function (c__7847__auto__){
return (function (state_8336){
var state_val_8337 = (state_8336[(1)]);
if((state_val_8337 === (7))){
var inst_8332 = (state_8336[(2)]);
var state_8336__$1 = state_8336;
var statearr_8338_8356 = state_8336__$1;
(statearr_8338_8356[(2)] = inst_8332);

(statearr_8338_8356[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8337 === (1))){
var inst_8316 = init;
var state_8336__$1 = (function (){var statearr_8339 = state_8336;
(statearr_8339[(7)] = inst_8316);

return statearr_8339;
})();
var statearr_8340_8357 = state_8336__$1;
(statearr_8340_8357[(2)] = null);

(statearr_8340_8357[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8337 === (4))){
var inst_8319 = (state_8336[(8)]);
var inst_8319__$1 = (state_8336[(2)]);
var inst_8320 = (inst_8319__$1 == null);
var state_8336__$1 = (function (){var statearr_8341 = state_8336;
(statearr_8341[(8)] = inst_8319__$1);

return statearr_8341;
})();
if(cljs.core.truth_(inst_8320)){
var statearr_8342_8358 = state_8336__$1;
(statearr_8342_8358[(1)] = (5));

} else {
var statearr_8343_8359 = state_8336__$1;
(statearr_8343_8359[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8337 === (6))){
var inst_8323 = (state_8336[(9)]);
var inst_8319 = (state_8336[(8)]);
var inst_8316 = (state_8336[(7)]);
var inst_8323__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_8316,inst_8319) : f.call(null,inst_8316,inst_8319));
var inst_8324 = cljs.core.reduced_QMARK_(inst_8323__$1);
var state_8336__$1 = (function (){var statearr_8344 = state_8336;
(statearr_8344[(9)] = inst_8323__$1);

return statearr_8344;
})();
if(inst_8324){
var statearr_8345_8360 = state_8336__$1;
(statearr_8345_8360[(1)] = (8));

} else {
var statearr_8346_8361 = state_8336__$1;
(statearr_8346_8361[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8337 === (3))){
var inst_8334 = (state_8336[(2)]);
var state_8336__$1 = state_8336;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8336__$1,inst_8334);
} else {
if((state_val_8337 === (2))){
var state_8336__$1 = state_8336;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8336__$1,(4),ch);
} else {
if((state_val_8337 === (9))){
var inst_8323 = (state_8336[(9)]);
var inst_8316 = inst_8323;
var state_8336__$1 = (function (){var statearr_8347 = state_8336;
(statearr_8347[(7)] = inst_8316);

return statearr_8347;
})();
var statearr_8348_8362 = state_8336__$1;
(statearr_8348_8362[(2)] = null);

(statearr_8348_8362[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8337 === (5))){
var inst_8316 = (state_8336[(7)]);
var state_8336__$1 = state_8336;
var statearr_8349_8363 = state_8336__$1;
(statearr_8349_8363[(2)] = inst_8316);

(statearr_8349_8363[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8337 === (10))){
var inst_8330 = (state_8336[(2)]);
var state_8336__$1 = state_8336;
var statearr_8350_8364 = state_8336__$1;
(statearr_8350_8364[(2)] = inst_8330);

(statearr_8350_8364[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8337 === (8))){
var inst_8323 = (state_8336[(9)]);
var inst_8326 = cljs.core.deref(inst_8323);
var state_8336__$1 = state_8336;
var statearr_8351_8365 = state_8336__$1;
(statearr_8351_8365[(2)] = inst_8326);

(statearr_8351_8365[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__7847__auto__))
;
return ((function (switch__7745__auto__,c__7847__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__7746__auto__ = null;
var cljs$core$async$reduce_$_state_machine__7746__auto____0 = (function (){
var statearr_8352 = [null,null,null,null,null,null,null,null,null,null];
(statearr_8352[(0)] = cljs$core$async$reduce_$_state_machine__7746__auto__);

(statearr_8352[(1)] = (1));

return statearr_8352;
});
var cljs$core$async$reduce_$_state_machine__7746__auto____1 = (function (state_8336){
while(true){
var ret_value__7747__auto__ = (function (){try{while(true){
var result__7748__auto__ = switch__7745__auto__(state_8336);
if(cljs.core.keyword_identical_QMARK_(result__7748__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7748__auto__;
}
break;
}
}catch (e8353){if((e8353 instanceof Object)){
var ex__7749__auto__ = e8353;
var statearr_8354_8366 = state_8336;
(statearr_8354_8366[(5)] = ex__7749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8336);

return cljs.core.cst$kw$recur;
} else {
throw e8353;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7747__auto__,cljs.core.cst$kw$recur)){
var G__8367 = state_8336;
state_8336 = G__8367;
continue;
} else {
return ret_value__7747__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__7746__auto__ = function(state_8336){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__7746__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__7746__auto____1.call(this,state_8336);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__7746__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__7746__auto____0;
cljs$core$async$reduce_$_state_machine__7746__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__7746__auto____1;
return cljs$core$async$reduce_$_state_machine__7746__auto__;
})()
;})(switch__7745__auto__,c__7847__auto__))
})();
var state__7849__auto__ = (function (){var statearr_8355 = (f__7848__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7848__auto__.cljs$core$IFn$_invoke$arity$0() : f__7848__auto__.call(null));
(statearr_8355[(6)] = c__7847__auto__);

return statearr_8355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7849__auto__);
});})(c__7847__auto__))
);

return c__7847__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__7847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7847__auto__,f__$1){
return (function (){
var f__7848__auto__ = (function (){var switch__7745__auto__ = ((function (c__7847__auto__,f__$1){
return (function (state_8373){
var state_val_8374 = (state_8373[(1)]);
if((state_val_8374 === (1))){
var inst_8368 = cljs.core.async.reduce(f__$1,init,ch);
var state_8373__$1 = state_8373;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8373__$1,(2),inst_8368);
} else {
if((state_val_8374 === (2))){
var inst_8370 = (state_8373[(2)]);
var inst_8371 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_8370) : f__$1.call(null,inst_8370));
var state_8373__$1 = state_8373;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8373__$1,inst_8371);
} else {
return null;
}
}
});})(c__7847__auto__,f__$1))
;
return ((function (switch__7745__auto__,c__7847__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__7746__auto__ = null;
var cljs$core$async$transduce_$_state_machine__7746__auto____0 = (function (){
var statearr_8375 = [null,null,null,null,null,null,null];
(statearr_8375[(0)] = cljs$core$async$transduce_$_state_machine__7746__auto__);

(statearr_8375[(1)] = (1));

return statearr_8375;
});
var cljs$core$async$transduce_$_state_machine__7746__auto____1 = (function (state_8373){
while(true){
var ret_value__7747__auto__ = (function (){try{while(true){
var result__7748__auto__ = switch__7745__auto__(state_8373);
if(cljs.core.keyword_identical_QMARK_(result__7748__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7748__auto__;
}
break;
}
}catch (e8376){if((e8376 instanceof Object)){
var ex__7749__auto__ = e8376;
var statearr_8377_8379 = state_8373;
(statearr_8377_8379[(5)] = ex__7749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8373);

return cljs.core.cst$kw$recur;
} else {
throw e8376;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7747__auto__,cljs.core.cst$kw$recur)){
var G__8380 = state_8373;
state_8373 = G__8380;
continue;
} else {
return ret_value__7747__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__7746__auto__ = function(state_8373){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__7746__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__7746__auto____1.call(this,state_8373);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__7746__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__7746__auto____0;
cljs$core$async$transduce_$_state_machine__7746__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__7746__auto____1;
return cljs$core$async$transduce_$_state_machine__7746__auto__;
})()
;})(switch__7745__auto__,c__7847__auto__,f__$1))
})();
var state__7849__auto__ = (function (){var statearr_8378 = (f__7848__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7848__auto__.cljs$core$IFn$_invoke$arity$0() : f__7848__auto__.call(null));
(statearr_8378[(6)] = c__7847__auto__);

return statearr_8378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7849__auto__);
});})(c__7847__auto__,f__$1))
);

return c__7847__auto__;
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
var G__8382 = arguments.length;
switch (G__8382) {
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
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__7847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7847__auto__){
return (function (){
var f__7848__auto__ = (function (){var switch__7745__auto__ = ((function (c__7847__auto__){
return (function (state_8407){
var state_val_8408 = (state_8407[(1)]);
if((state_val_8408 === (7))){
var inst_8389 = (state_8407[(2)]);
var state_8407__$1 = state_8407;
var statearr_8409_8430 = state_8407__$1;
(statearr_8409_8430[(2)] = inst_8389);

(statearr_8409_8430[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8408 === (1))){
var inst_8383 = cljs.core.seq(coll);
var inst_8384 = inst_8383;
var state_8407__$1 = (function (){var statearr_8410 = state_8407;
(statearr_8410[(7)] = inst_8384);

return statearr_8410;
})();
var statearr_8411_8431 = state_8407__$1;
(statearr_8411_8431[(2)] = null);

(statearr_8411_8431[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8408 === (4))){
var inst_8384 = (state_8407[(7)]);
var inst_8387 = cljs.core.first(inst_8384);
var state_8407__$1 = state_8407;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8407__$1,(7),ch,inst_8387);
} else {
if((state_val_8408 === (13))){
var inst_8401 = (state_8407[(2)]);
var state_8407__$1 = state_8407;
var statearr_8412_8432 = state_8407__$1;
(statearr_8412_8432[(2)] = inst_8401);

(statearr_8412_8432[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8408 === (6))){
var inst_8392 = (state_8407[(2)]);
var state_8407__$1 = state_8407;
if(cljs.core.truth_(inst_8392)){
var statearr_8413_8433 = state_8407__$1;
(statearr_8413_8433[(1)] = (8));

} else {
var statearr_8414_8434 = state_8407__$1;
(statearr_8414_8434[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8408 === (3))){
var inst_8405 = (state_8407[(2)]);
var state_8407__$1 = state_8407;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8407__$1,inst_8405);
} else {
if((state_val_8408 === (12))){
var state_8407__$1 = state_8407;
var statearr_8415_8435 = state_8407__$1;
(statearr_8415_8435[(2)] = null);

(statearr_8415_8435[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8408 === (2))){
var inst_8384 = (state_8407[(7)]);
var state_8407__$1 = state_8407;
if(cljs.core.truth_(inst_8384)){
var statearr_8416_8436 = state_8407__$1;
(statearr_8416_8436[(1)] = (4));

} else {
var statearr_8417_8437 = state_8407__$1;
(statearr_8417_8437[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8408 === (11))){
var inst_8398 = cljs.core.async.close_BANG_(ch);
var state_8407__$1 = state_8407;
var statearr_8418_8438 = state_8407__$1;
(statearr_8418_8438[(2)] = inst_8398);

(statearr_8418_8438[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8408 === (9))){
var state_8407__$1 = state_8407;
if(cljs.core.truth_(close_QMARK_)){
var statearr_8419_8439 = state_8407__$1;
(statearr_8419_8439[(1)] = (11));

} else {
var statearr_8420_8440 = state_8407__$1;
(statearr_8420_8440[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8408 === (5))){
var inst_8384 = (state_8407[(7)]);
var state_8407__$1 = state_8407;
var statearr_8421_8441 = state_8407__$1;
(statearr_8421_8441[(2)] = inst_8384);

(statearr_8421_8441[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8408 === (10))){
var inst_8403 = (state_8407[(2)]);
var state_8407__$1 = state_8407;
var statearr_8422_8442 = state_8407__$1;
(statearr_8422_8442[(2)] = inst_8403);

(statearr_8422_8442[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8408 === (8))){
var inst_8384 = (state_8407[(7)]);
var inst_8394 = cljs.core.next(inst_8384);
var inst_8384__$1 = inst_8394;
var state_8407__$1 = (function (){var statearr_8423 = state_8407;
(statearr_8423[(7)] = inst_8384__$1);

return statearr_8423;
})();
var statearr_8424_8443 = state_8407__$1;
(statearr_8424_8443[(2)] = null);

(statearr_8424_8443[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__7847__auto__))
;
return ((function (switch__7745__auto__,c__7847__auto__){
return (function() {
var cljs$core$async$state_machine__7746__auto__ = null;
var cljs$core$async$state_machine__7746__auto____0 = (function (){
var statearr_8425 = [null,null,null,null,null,null,null,null];
(statearr_8425[(0)] = cljs$core$async$state_machine__7746__auto__);

(statearr_8425[(1)] = (1));

return statearr_8425;
});
var cljs$core$async$state_machine__7746__auto____1 = (function (state_8407){
while(true){
var ret_value__7747__auto__ = (function (){try{while(true){
var result__7748__auto__ = switch__7745__auto__(state_8407);
if(cljs.core.keyword_identical_QMARK_(result__7748__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7748__auto__;
}
break;
}
}catch (e8426){if((e8426 instanceof Object)){
var ex__7749__auto__ = e8426;
var statearr_8427_8444 = state_8407;
(statearr_8427_8444[(5)] = ex__7749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8407);

return cljs.core.cst$kw$recur;
} else {
throw e8426;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7747__auto__,cljs.core.cst$kw$recur)){
var G__8445 = state_8407;
state_8407 = G__8445;
continue;
} else {
return ret_value__7747__auto__;
}
break;
}
});
cljs$core$async$state_machine__7746__auto__ = function(state_8407){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7746__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7746__auto____1.call(this,state_8407);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__7746__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7746__auto____0;
cljs$core$async$state_machine__7746__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7746__auto____1;
return cljs$core$async$state_machine__7746__auto__;
})()
;})(switch__7745__auto__,c__7847__auto__))
})();
var state__7849__auto__ = (function (){var statearr_8428 = (f__7848__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7848__auto__.cljs$core$IFn$_invoke$arity$0() : f__7848__auto__.call(null));
(statearr_8428[(6)] = c__7847__auto__);

return statearr_8428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7849__auto__);
});})(c__7847__auto__))
);

return c__7847__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

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
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4212__auto__.call(null,_));
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__4212__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
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
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4212__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4212__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
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
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto__.call(null,m,ch));
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
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
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4212__auto__.call(null,m));
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4212__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async8446 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8446 = (function (ch,cs,meta8447){
this.ch = ch;
this.cs = cs;
this.meta8447 = meta8447;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8446.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_8448,meta8447__$1){
var self__ = this;
var _8448__$1 = this;
return (new cljs.core.async.t_cljs$core$async8446(self__.ch,self__.cs,meta8447__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async8446.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_8448){
var self__ = this;
var _8448__$1 = this;
return self__.meta8447;
});})(cs))
;

cljs.core.async.t_cljs$core$async8446.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8446.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async8446.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8446.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async8446.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async8446.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async8446.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta8447], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async8446.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8446.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8446";

cljs.core.async.t_cljs$core$async8446.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async8446");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8446.
 */
cljs.core.async.__GT_t_cljs$core$async8446 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async8446(ch__$1,cs__$1,meta8447){
return (new cljs.core.async.t_cljs$core$async8446(ch__$1,cs__$1,meta8447));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async8446(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__7847__auto___8668 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7847__auto___8668,cs,m,dchan,dctr,done){
return (function (){
var f__7848__auto__ = (function (){var switch__7745__auto__ = ((function (c__7847__auto___8668,cs,m,dchan,dctr,done){
return (function (state_8583){
var state_val_8584 = (state_8583[(1)]);
if((state_val_8584 === (7))){
var inst_8579 = (state_8583[(2)]);
var state_8583__$1 = state_8583;
var statearr_8585_8669 = state_8583__$1;
(statearr_8585_8669[(2)] = inst_8579);

(statearr_8585_8669[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8584 === (20))){
var inst_8482 = (state_8583[(7)]);
var inst_8494 = cljs.core.first(inst_8482);
var inst_8495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_8494,(0),null);
var inst_8496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_8494,(1),null);
var state_8583__$1 = (function (){var statearr_8586 = state_8583;
(statearr_8586[(8)] = inst_8495);

return statearr_8586;
})();
if(cljs.core.truth_(inst_8496)){
var statearr_8587_8670 = state_8583__$1;
(statearr_8587_8670[(1)] = (22));

} else {
var statearr_8588_8671 = state_8583__$1;
(statearr_8588_8671[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8584 === (27))){
var inst_8526 = (state_8583[(9)]);
var inst_8531 = (state_8583[(10)]);
var inst_8524 = (state_8583[(11)]);
var inst_8451 = (state_8583[(12)]);
var inst_8531__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_8524,inst_8526);
var inst_8532 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_8531__$1,inst_8451,done);
var state_8583__$1 = (function (){var statearr_8589 = state_8583;
(statearr_8589[(10)] = inst_8531__$1);

return statearr_8589;
})();
if(cljs.core.truth_(inst_8532)){
var statearr_8590_8672 = state_8583__$1;
(statearr_8590_8672[(1)] = (30));

} else {
var statearr_8591_8673 = state_8583__$1;
(statearr_8591_8673[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8584 === (1))){
var state_8583__$1 = state_8583;
var statearr_8592_8674 = state_8583__$1;
(statearr_8592_8674[(2)] = null);

(statearr_8592_8674[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8584 === (24))){
var inst_8482 = (state_8583[(7)]);
var inst_8501 = (state_8583[(2)]);
var inst_8502 = cljs.core.next(inst_8482);
var inst_8460 = inst_8502;
var inst_8461 = null;
var inst_8462 = (0);
var inst_8463 = (0);
var state_8583__$1 = (function (){var statearr_8593 = state_8583;
(statearr_8593[(13)] = inst_8501);

(statearr_8593[(14)] = inst_8462);

(statearr_8593[(15)] = inst_8461);

(statearr_8593[(16)] = inst_8460);

(statearr_8593[(17)] = inst_8463);

return statearr_8593;
})();
var statearr_8594_8675 = state_8583__$1;
(statearr_8594_8675[(2)] = null);

(statearr_8594_8675[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8584 === (39))){
var state_8583__$1 = state_8583;
var statearr_8598_8676 = state_8583__$1;
(statearr_8598_8676[(2)] = null);

(statearr_8598_8676[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8584 === (4))){
var inst_8451 = (state_8583[(12)]);
var inst_8451__$1 = (state_8583[(2)]);
var inst_8452 = (inst_8451__$1 == null);
var state_8583__$1 = (function (){var statearr_8599 = state_8583;
(statearr_8599[(12)] = inst_8451__$1);

return statearr_8599;
})();
if(cljs.core.truth_(inst_8452)){
var statearr_8600_8677 = state_8583__$1;
(statearr_8600_8677[(1)] = (5));

} else {
var statearr_8601_8678 = state_8583__$1;
(statearr_8601_8678[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8584 === (15))){
var inst_8462 = (state_8583[(14)]);
var inst_8461 = (state_8583[(15)]);
var inst_8460 = (state_8583[(16)]);
var inst_8463 = (state_8583[(17)]);
var inst_8478 = (state_8583[(2)]);
var inst_8479 = (inst_8463 + (1));
var tmp8595 = inst_8462;
var tmp8596 = inst_8461;
var tmp8597 = inst_8460;
var inst_8460__$1 = tmp8597;
var inst_8461__$1 = tmp8596;
var inst_8462__$1 = tmp8595;
var inst_8463__$1 = inst_8479;
var state_8583__$1 = (function (){var statearr_8602 = state_8583;
(statearr_8602[(14)] = inst_8462__$1);

(statearr_8602[(15)] = inst_8461__$1);

(statearr_8602[(18)] = inst_8478);

(statearr_8602[(16)] = inst_8460__$1);

(statearr_8602[(17)] = inst_8463__$1);

return statearr_8602;
})();
var statearr_8603_8679 = state_8583__$1;
(statearr_8603_8679[(2)] = null);

(statearr_8603_8679[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8584 === (21))){
var inst_8505 = (state_8583[(2)]);
var state_8583__$1 = state_8583;
var statearr_8607_8680 = state_8583__$1;
(statearr_8607_8680[(2)] = inst_8505);

(statearr_8607_8680[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8584 === (31))){
var inst_8531 = (state_8583[(10)]);
var inst_8535 = done(null);
var inst_8536 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_8531);
var state_8583__$1 = (function (){var statearr_8608 = state_8583;
(statearr_8608[(19)] = inst_8535);

return statearr_8608;
})();
var statearr_8609_8681 = state_8583__$1;
(statearr_8609_8681[(2)] = inst_8536);

(statearr_8609_8681[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8584 === (32))){
var inst_8526 = (state_8583[(9)]);
var inst_8523 = (state_8583[(20)]);
var inst_8524 = (state_8583[(11)]);
var inst_8525 = (state_8583[(21)]);
var inst_8538 = (state_8583[(2)]);
var inst_8539 = (inst_8526 + (1));
var tmp8604 = inst_8523;
var tmp8605 = inst_8524;
var tmp8606 = inst_8525;
var inst_8523__$1 = tmp8604;
var inst_8524__$1 = tmp8605;
var inst_8525__$1 = tmp8606;
var inst_8526__$1 = inst_8539;
var state_8583__$1 = (function (){var statearr_8610 = state_8583;
(statearr_8610[(9)] = inst_8526__$1);

(statearr_8610[(20)] = inst_8523__$1);

(statearr_8610[(11)] = inst_8524__$1);

(statearr_8610[(21)] = inst_8525__$1);

(statearr_8610[(22)] = inst_8538);

return statearr_8610;
})();
var statearr_8611_8682 = state_8583__$1;
(statearr_8611_8682[(2)] = null);

(statearr_8611_8682[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8584 === (40))){
var inst_8551 = (state_8583[(23)]);
var inst_8555 = done(null);
var inst_8556 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_8551);
var state_8583__$1 = (function (){var statearr_8612 = state_8583;
(statearr_8612[(24)] = inst_8555);

return statearr_8612;
})();
var statearr_8613_8683 = state_8583__$1;
(statearr_8613_8683[(2)] = inst_8556);

(statearr_8613_8683[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8584 === (33))){
var inst_8542 = (state_8583[(25)]);
var inst_8544 = cljs.core.chunked_seq_QMARK_(inst_8542);
var state_8583__$1 = state_8583;
if(inst_8544){
var statearr_8614_8684 = state_8583__$1;
(statearr_8614_8684[(1)] = (36));

} else {
var statearr_8615_8685 = state_8583__$1;
(statearr_8615_8685[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8584 === (13))){
var inst_8472 = (state_8583[(26)]);
var inst_8475 = cljs.core.async.close_BANG_(inst_8472);
var state_8583__$1 = state_8583;
var statearr_8616_8686 = state_8583__$1;
(statearr_8616_8686[(2)] = inst_8475);

(statearr_8616_8686[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8584 === (22))){
var inst_8495 = (state_8583[(8)]);
var inst_8498 = cljs.core.async.close_BANG_(inst_8495);
var state_8583__$1 = state_8583;
var statearr_8617_8687 = state_8583__$1;
(statearr_8617_8687[(2)] = inst_8498);

(statearr_8617_8687[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8584 === (36))){
var inst_8542 = (state_8583[(25)]);
var inst_8546 = cljs.core.chunk_first(inst_8542);
var inst_8547 = cljs.core.chunk_rest(inst_8542);
var inst_8548 = cljs.core.count(inst_8546);
var inst_8523 = inst_8547;
var inst_8524 = inst_8546;
var inst_8525 = inst_8548;
var inst_8526 = (0);
var state_8583__$1 = (function (){var statearr_8618 = state_8583;
(statearr_8618[(9)] = inst_8526);

(statearr_8618[(20)] = inst_8523);

(statearr_8618[(11)] = inst_8524);

(statearr_8618[(21)] = inst_8525);

return statearr_8618;
})();
var statearr_8619_8688 = state_8583__$1;
(statearr_8619_8688[(2)] = null);

(statearr_8619_8688[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8584 === (41))){
var inst_8542 = (state_8583[(25)]);
var inst_8558 = (state_8583[(2)]);
var inst_8559 = cljs.core.next(inst_8542);
var inst_8523 = inst_8559;
var inst_8524 = null;
var inst_8525 = (0);
var inst_8526 = (0);
var state_8583__$1 = (function (){var statearr_8620 = state_8583;
(statearr_8620[(9)] = inst_8526);

(statearr_8620[(20)] = inst_8523);

(statearr_8620[(11)] = inst_8524);

(statearr_8620[(27)] = inst_8558);

(statearr_8620[(21)] = inst_8525);

return statearr_8620;
})();
var statearr_8621_8689 = state_8583__$1;
(statearr_8621_8689[(2)] = null);

(statearr_8621_8689[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8584 === (43))){
var state_8583__$1 = state_8583;
var statearr_8622_8690 = state_8583__$1;
(statearr_8622_8690[(2)] = null);

(statearr_8622_8690[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8584 === (29))){
var inst_8567 = (state_8583[(2)]);
var state_8583__$1 = state_8583;
var statearr_8623_8691 = state_8583__$1;
(statearr_8623_8691[(2)] = inst_8567);

(statearr_8623_8691[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8584 === (44))){
var inst_8576 = (state_8583[(2)]);
var state_8583__$1 = (function (){var statearr_8624 = state_8583;
(statearr_8624[(28)] = inst_8576);

return statearr_8624;
})();
var statearr_8625_8692 = state_8583__$1;
(statearr_8625_8692[(2)] = null);

(statearr_8625_8692[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8584 === (6))){
var inst_8515 = (state_8583[(29)]);
var inst_8514 = cljs.core.deref(cs);
var inst_8515__$1 = cljs.core.keys(inst_8514);
var inst_8516 = cljs.core.count(inst_8515__$1);
var inst_8517 = cljs.core.reset_BANG_(dctr,inst_8516);
var inst_8522 = cljs.core.seq(inst_8515__$1);
var inst_8523 = inst_8522;
var inst_8524 = null;
var inst_8525 = (0);
var inst_8526 = (0);
var state_8583__$1 = (function (){var statearr_8626 = state_8583;
(statearr_8626[(9)] = inst_8526);

(statearr_8626[(29)] = inst_8515__$1);

(statearr_8626[(20)] = inst_8523);

(statearr_8626[(11)] = inst_8524);

(statearr_8626[(21)] = inst_8525);

(statearr_8626[(30)] = inst_8517);

return statearr_8626;
})();
var statearr_8627_8693 = state_8583__$1;
(statearr_8627_8693[(2)] = null);

(statearr_8627_8693[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8584 === (28))){
var inst_8523 = (state_8583[(20)]);
var inst_8542 = (state_8583[(25)]);
var inst_8542__$1 = cljs.core.seq(inst_8523);
var state_8583__$1 = (function (){var statearr_8628 = state_8583;
(statearr_8628[(25)] = inst_8542__$1);

return statearr_8628;
})();
if(inst_8542__$1){
var statearr_8629_8694 = state_8583__$1;
(statearr_8629_8694[(1)] = (33));

} else {
var statearr_8630_8695 = state_8583__$1;
(statearr_8630_8695[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8584 === (25))){
var inst_8526 = (state_8583[(9)]);
var inst_8525 = (state_8583[(21)]);
var inst_8528 = (inst_8526 < inst_8525);
var inst_8529 = inst_8528;
var state_8583__$1 = state_8583;
if(cljs.core.truth_(inst_8529)){
var statearr_8631_8696 = state_8583__$1;
(statearr_8631_8696[(1)] = (27));

} else {
var statearr_8632_8697 = state_8583__$1;
(statearr_8632_8697[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8584 === (34))){
var state_8583__$1 = state_8583;
var statearr_8633_8698 = state_8583__$1;
(statearr_8633_8698[(2)] = null);

(statearr_8633_8698[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8584 === (17))){
var state_8583__$1 = state_8583;
var statearr_8634_8699 = state_8583__$1;
(statearr_8634_8699[(2)] = null);

(statearr_8634_8699[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8584 === (3))){
var inst_8581 = (state_8583[(2)]);
var state_8583__$1 = state_8583;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8583__$1,inst_8581);
} else {
if((state_val_8584 === (12))){
var inst_8510 = (state_8583[(2)]);
var state_8583__$1 = state_8583;
var statearr_8635_8700 = state_8583__$1;
(statearr_8635_8700[(2)] = inst_8510);

(statearr_8635_8700[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8584 === (2))){
var state_8583__$1 = state_8583;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8583__$1,(4),ch);
} else {
if((state_val_8584 === (23))){
var state_8583__$1 = state_8583;
var statearr_8636_8701 = state_8583__$1;
(statearr_8636_8701[(2)] = null);

(statearr_8636_8701[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8584 === (35))){
var inst_8565 = (state_8583[(2)]);
var state_8583__$1 = state_8583;
var statearr_8637_8702 = state_8583__$1;
(statearr_8637_8702[(2)] = inst_8565);

(statearr_8637_8702[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8584 === (19))){
var inst_8482 = (state_8583[(7)]);
var inst_8486 = cljs.core.chunk_first(inst_8482);
var inst_8487 = cljs.core.chunk_rest(inst_8482);
var inst_8488 = cljs.core.count(inst_8486);
var inst_8460 = inst_8487;
var inst_8461 = inst_8486;
var inst_8462 = inst_8488;
var inst_8463 = (0);
var state_8583__$1 = (function (){var statearr_8638 = state_8583;
(statearr_8638[(14)] = inst_8462);

(statearr_8638[(15)] = inst_8461);

(statearr_8638[(16)] = inst_8460);

(statearr_8638[(17)] = inst_8463);

return statearr_8638;
})();
var statearr_8639_8703 = state_8583__$1;
(statearr_8639_8703[(2)] = null);

(statearr_8639_8703[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8584 === (11))){
var inst_8482 = (state_8583[(7)]);
var inst_8460 = (state_8583[(16)]);
var inst_8482__$1 = cljs.core.seq(inst_8460);
var state_8583__$1 = (function (){var statearr_8640 = state_8583;
(statearr_8640[(7)] = inst_8482__$1);

return statearr_8640;
})();
if(inst_8482__$1){
var statearr_8641_8704 = state_8583__$1;
(statearr_8641_8704[(1)] = (16));

} else {
var statearr_8642_8705 = state_8583__$1;
(statearr_8642_8705[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8584 === (9))){
var inst_8512 = (state_8583[(2)]);
var state_8583__$1 = state_8583;
var statearr_8643_8706 = state_8583__$1;
(statearr_8643_8706[(2)] = inst_8512);

(statearr_8643_8706[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8584 === (5))){
var inst_8458 = cljs.core.deref(cs);
var inst_8459 = cljs.core.seq(inst_8458);
var inst_8460 = inst_8459;
var inst_8461 = null;
var inst_8462 = (0);
var inst_8463 = (0);
var state_8583__$1 = (function (){var statearr_8644 = state_8583;
(statearr_8644[(14)] = inst_8462);

(statearr_8644[(15)] = inst_8461);

(statearr_8644[(16)] = inst_8460);

(statearr_8644[(17)] = inst_8463);

return statearr_8644;
})();
var statearr_8645_8707 = state_8583__$1;
(statearr_8645_8707[(2)] = null);

(statearr_8645_8707[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8584 === (14))){
var state_8583__$1 = state_8583;
var statearr_8646_8708 = state_8583__$1;
(statearr_8646_8708[(2)] = null);

(statearr_8646_8708[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8584 === (45))){
var inst_8573 = (state_8583[(2)]);
var state_8583__$1 = state_8583;
var statearr_8647_8709 = state_8583__$1;
(statearr_8647_8709[(2)] = inst_8573);

(statearr_8647_8709[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8584 === (26))){
var inst_8515 = (state_8583[(29)]);
var inst_8569 = (state_8583[(2)]);
var inst_8570 = cljs.core.seq(inst_8515);
var state_8583__$1 = (function (){var statearr_8648 = state_8583;
(statearr_8648[(31)] = inst_8569);

return statearr_8648;
})();
if(inst_8570){
var statearr_8649_8710 = state_8583__$1;
(statearr_8649_8710[(1)] = (42));

} else {
var statearr_8650_8711 = state_8583__$1;
(statearr_8650_8711[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8584 === (16))){
var inst_8482 = (state_8583[(7)]);
var inst_8484 = cljs.core.chunked_seq_QMARK_(inst_8482);
var state_8583__$1 = state_8583;
if(inst_8484){
var statearr_8651_8712 = state_8583__$1;
(statearr_8651_8712[(1)] = (19));

} else {
var statearr_8652_8713 = state_8583__$1;
(statearr_8652_8713[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8584 === (38))){
var inst_8562 = (state_8583[(2)]);
var state_8583__$1 = state_8583;
var statearr_8653_8714 = state_8583__$1;
(statearr_8653_8714[(2)] = inst_8562);

(statearr_8653_8714[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8584 === (30))){
var state_8583__$1 = state_8583;
var statearr_8654_8715 = state_8583__$1;
(statearr_8654_8715[(2)] = null);

(statearr_8654_8715[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8584 === (10))){
var inst_8461 = (state_8583[(15)]);
var inst_8463 = (state_8583[(17)]);
var inst_8471 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_8461,inst_8463);
var inst_8472 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_8471,(0),null);
var inst_8473 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_8471,(1),null);
var state_8583__$1 = (function (){var statearr_8655 = state_8583;
(statearr_8655[(26)] = inst_8472);

return statearr_8655;
})();
if(cljs.core.truth_(inst_8473)){
var statearr_8656_8716 = state_8583__$1;
(statearr_8656_8716[(1)] = (13));

} else {
var statearr_8657_8717 = state_8583__$1;
(statearr_8657_8717[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8584 === (18))){
var inst_8508 = (state_8583[(2)]);
var state_8583__$1 = state_8583;
var statearr_8658_8718 = state_8583__$1;
(statearr_8658_8718[(2)] = inst_8508);

(statearr_8658_8718[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8584 === (42))){
var state_8583__$1 = state_8583;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8583__$1,(45),dchan);
} else {
if((state_val_8584 === (37))){
var inst_8451 = (state_8583[(12)]);
var inst_8551 = (state_8583[(23)]);
var inst_8542 = (state_8583[(25)]);
var inst_8551__$1 = cljs.core.first(inst_8542);
var inst_8552 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_8551__$1,inst_8451,done);
var state_8583__$1 = (function (){var statearr_8659 = state_8583;
(statearr_8659[(23)] = inst_8551__$1);

return statearr_8659;
})();
if(cljs.core.truth_(inst_8552)){
var statearr_8660_8719 = state_8583__$1;
(statearr_8660_8719[(1)] = (39));

} else {
var statearr_8661_8720 = state_8583__$1;
(statearr_8661_8720[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8584 === (8))){
var inst_8462 = (state_8583[(14)]);
var inst_8463 = (state_8583[(17)]);
var inst_8465 = (inst_8463 < inst_8462);
var inst_8466 = inst_8465;
var state_8583__$1 = state_8583;
if(cljs.core.truth_(inst_8466)){
var statearr_8662_8721 = state_8583__$1;
(statearr_8662_8721[(1)] = (10));

} else {
var statearr_8663_8722 = state_8583__$1;
(statearr_8663_8722[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__7847__auto___8668,cs,m,dchan,dctr,done))
;
return ((function (switch__7745__auto__,c__7847__auto___8668,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__7746__auto__ = null;
var cljs$core$async$mult_$_state_machine__7746__auto____0 = (function (){
var statearr_8664 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8664[(0)] = cljs$core$async$mult_$_state_machine__7746__auto__);

(statearr_8664[(1)] = (1));

return statearr_8664;
});
var cljs$core$async$mult_$_state_machine__7746__auto____1 = (function (state_8583){
while(true){
var ret_value__7747__auto__ = (function (){try{while(true){
var result__7748__auto__ = switch__7745__auto__(state_8583);
if(cljs.core.keyword_identical_QMARK_(result__7748__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7748__auto__;
}
break;
}
}catch (e8665){if((e8665 instanceof Object)){
var ex__7749__auto__ = e8665;
var statearr_8666_8723 = state_8583;
(statearr_8666_8723[(5)] = ex__7749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8583);

return cljs.core.cst$kw$recur;
} else {
throw e8665;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7747__auto__,cljs.core.cst$kw$recur)){
var G__8724 = state_8583;
state_8583 = G__8724;
continue;
} else {
return ret_value__7747__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__7746__auto__ = function(state_8583){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__7746__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__7746__auto____1.call(this,state_8583);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__7746__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__7746__auto____0;
cljs$core$async$mult_$_state_machine__7746__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__7746__auto____1;
return cljs$core$async$mult_$_state_machine__7746__auto__;
})()
;})(switch__7745__auto__,c__7847__auto___8668,cs,m,dchan,dctr,done))
})();
var state__7849__auto__ = (function (){var statearr_8667 = (f__7848__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7848__auto__.cljs$core$IFn$_invoke$arity$0() : f__7848__auto__.call(null));
(statearr_8667[(6)] = c__7847__auto___8668);

return statearr_8667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7849__auto__);
});})(c__7847__auto___8668,cs,m,dchan,dctr,done))
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
var G__8726 = arguments.length;
switch (G__8726) {
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
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
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
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto__.call(null,m,ch));
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
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
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto__.call(null,m,ch));
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
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
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4212__auto__.call(null,m));
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4212__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
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
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4212__auto__.call(null,m,state_map));
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4212__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
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
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4212__auto__.call(null,m,mode));
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4212__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___8738 = arguments.length;
var i__4500__auto___8739 = (0);
while(true){
if((i__4500__auto___8739 < len__4499__auto___8738)){
args__4502__auto__.push((arguments[i__4500__auto___8739]));

var G__8740 = (i__4500__auto___8739 + (1));
i__4500__auto___8739 = G__8740;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__8732){
var map__8733 = p__8732;
var map__8733__$1 = ((((!((map__8733 == null)))?(((((map__8733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8733):map__8733);
var opts = map__8733__$1;
var statearr_8735_8741 = state;
(statearr_8735_8741[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__8733,map__8733__$1,opts){
return (function (val){
var statearr_8736_8742 = state;
(statearr_8736_8742[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__8733,map__8733__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_8737_8743 = state;
(statearr_8737_8743[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq8728){
var G__8729 = cljs.core.first(seq8728);
var seq8728__$1 = cljs.core.next(seq8728);
var G__8730 = cljs.core.first(seq8728__$1);
var seq8728__$2 = cljs.core.next(seq8728__$1);
var G__8731 = cljs.core.first(seq8728__$2);
var seq8728__$3 = cljs.core.next(seq8728__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8729,G__8730,G__8731,seq8728__$3);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute);
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos)))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async8744 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8744 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta8745){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta8745 = meta8745;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8744.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_8746,meta8745__$1){
var self__ = this;
var _8746__$1 = this;
return (new cljs.core.async.t_cljs$core$async8744(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta8745__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8744.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_8746){
var self__ = this;
var _8746__$1 = this;
return self__.meta8745;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8744.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8744.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8744.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8744.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8744.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8744.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8744.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8744.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8744.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta8745], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8744.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8744.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8744";

cljs.core.async.t_cljs$core$async8744.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async8744");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8744.
 */
cljs.core.async.__GT_t_cljs$core$async8744 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async8744(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta8745){
return (new cljs.core.async.t_cljs$core$async8744(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta8745));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async8744(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7847__auto___8908 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7847__auto___8908,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7848__auto__ = (function (){var switch__7745__auto__ = ((function (c__7847__auto___8908,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_8848){
var state_val_8849 = (state_8848[(1)]);
if((state_val_8849 === (7))){
var inst_8763 = (state_8848[(2)]);
var state_8848__$1 = state_8848;
var statearr_8850_8909 = state_8848__$1;
(statearr_8850_8909[(2)] = inst_8763);

(statearr_8850_8909[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8849 === (20))){
var inst_8775 = (state_8848[(7)]);
var state_8848__$1 = state_8848;
var statearr_8851_8910 = state_8848__$1;
(statearr_8851_8910[(2)] = inst_8775);

(statearr_8851_8910[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8849 === (27))){
var state_8848__$1 = state_8848;
var statearr_8852_8911 = state_8848__$1;
(statearr_8852_8911[(2)] = null);

(statearr_8852_8911[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8849 === (1))){
var inst_8750 = (state_8848[(8)]);
var inst_8750__$1 = calc_state();
var inst_8752 = (inst_8750__$1 == null);
var inst_8753 = cljs.core.not(inst_8752);
var state_8848__$1 = (function (){var statearr_8853 = state_8848;
(statearr_8853[(8)] = inst_8750__$1);

return statearr_8853;
})();
if(inst_8753){
var statearr_8854_8912 = state_8848__$1;
(statearr_8854_8912[(1)] = (2));

} else {
var statearr_8855_8913 = state_8848__$1;
(statearr_8855_8913[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8849 === (24))){
var inst_8808 = (state_8848[(9)]);
var inst_8822 = (state_8848[(10)]);
var inst_8799 = (state_8848[(11)]);
var inst_8822__$1 = (inst_8799.cljs$core$IFn$_invoke$arity$1 ? inst_8799.cljs$core$IFn$_invoke$arity$1(inst_8808) : inst_8799.call(null,inst_8808));
var state_8848__$1 = (function (){var statearr_8856 = state_8848;
(statearr_8856[(10)] = inst_8822__$1);

return statearr_8856;
})();
if(cljs.core.truth_(inst_8822__$1)){
var statearr_8857_8914 = state_8848__$1;
(statearr_8857_8914[(1)] = (29));

} else {
var statearr_8858_8915 = state_8848__$1;
(statearr_8858_8915[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8849 === (4))){
var inst_8766 = (state_8848[(2)]);
var state_8848__$1 = state_8848;
if(cljs.core.truth_(inst_8766)){
var statearr_8859_8916 = state_8848__$1;
(statearr_8859_8916[(1)] = (8));

} else {
var statearr_8860_8917 = state_8848__$1;
(statearr_8860_8917[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8849 === (15))){
var inst_8793 = (state_8848[(2)]);
var state_8848__$1 = state_8848;
if(cljs.core.truth_(inst_8793)){
var statearr_8861_8918 = state_8848__$1;
(statearr_8861_8918[(1)] = (19));

} else {
var statearr_8862_8919 = state_8848__$1;
(statearr_8862_8919[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8849 === (21))){
var inst_8798 = (state_8848[(12)]);
var inst_8798__$1 = (state_8848[(2)]);
var inst_8799 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_8798__$1,cljs.core.cst$kw$solos);
var inst_8800 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_8798__$1,cljs.core.cst$kw$mutes);
var inst_8801 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_8798__$1,cljs.core.cst$kw$reads);
var state_8848__$1 = (function (){var statearr_8863 = state_8848;
(statearr_8863[(12)] = inst_8798__$1);

(statearr_8863[(13)] = inst_8800);

(statearr_8863[(11)] = inst_8799);

return statearr_8863;
})();
return cljs.core.async.ioc_alts_BANG_(state_8848__$1,(22),inst_8801);
} else {
if((state_val_8849 === (31))){
var inst_8830 = (state_8848[(2)]);
var state_8848__$1 = state_8848;
if(cljs.core.truth_(inst_8830)){
var statearr_8864_8920 = state_8848__$1;
(statearr_8864_8920[(1)] = (32));

} else {
var statearr_8865_8921 = state_8848__$1;
(statearr_8865_8921[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8849 === (32))){
var inst_8807 = (state_8848[(14)]);
var state_8848__$1 = state_8848;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8848__$1,(35),out,inst_8807);
} else {
if((state_val_8849 === (33))){
var inst_8798 = (state_8848[(12)]);
var inst_8775 = inst_8798;
var state_8848__$1 = (function (){var statearr_8866 = state_8848;
(statearr_8866[(7)] = inst_8775);

return statearr_8866;
})();
var statearr_8867_8922 = state_8848__$1;
(statearr_8867_8922[(2)] = null);

(statearr_8867_8922[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8849 === (13))){
var inst_8775 = (state_8848[(7)]);
var inst_8782 = inst_8775.cljs$lang$protocol_mask$partition0$;
var inst_8783 = (inst_8782 & (64));
var inst_8784 = inst_8775.cljs$core$ISeq$;
var inst_8785 = (cljs.core.PROTOCOL_SENTINEL === inst_8784);
var inst_8786 = ((inst_8783) || (inst_8785));
var state_8848__$1 = state_8848;
if(cljs.core.truth_(inst_8786)){
var statearr_8868_8923 = state_8848__$1;
(statearr_8868_8923[(1)] = (16));

} else {
var statearr_8869_8924 = state_8848__$1;
(statearr_8869_8924[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8849 === (22))){
var inst_8808 = (state_8848[(9)]);
var inst_8807 = (state_8848[(14)]);
var inst_8806 = (state_8848[(2)]);
var inst_8807__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_8806,(0),null);
var inst_8808__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_8806,(1),null);
var inst_8809 = (inst_8807__$1 == null);
var inst_8810 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_8808__$1,change);
var inst_8811 = ((inst_8809) || (inst_8810));
var state_8848__$1 = (function (){var statearr_8870 = state_8848;
(statearr_8870[(9)] = inst_8808__$1);

(statearr_8870[(14)] = inst_8807__$1);

return statearr_8870;
})();
if(cljs.core.truth_(inst_8811)){
var statearr_8871_8925 = state_8848__$1;
(statearr_8871_8925[(1)] = (23));

} else {
var statearr_8872_8926 = state_8848__$1;
(statearr_8872_8926[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8849 === (36))){
var inst_8798 = (state_8848[(12)]);
var inst_8775 = inst_8798;
var state_8848__$1 = (function (){var statearr_8873 = state_8848;
(statearr_8873[(7)] = inst_8775);

return statearr_8873;
})();
var statearr_8874_8927 = state_8848__$1;
(statearr_8874_8927[(2)] = null);

(statearr_8874_8927[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8849 === (29))){
var inst_8822 = (state_8848[(10)]);
var state_8848__$1 = state_8848;
var statearr_8875_8928 = state_8848__$1;
(statearr_8875_8928[(2)] = inst_8822);

(statearr_8875_8928[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8849 === (6))){
var state_8848__$1 = state_8848;
var statearr_8876_8929 = state_8848__$1;
(statearr_8876_8929[(2)] = false);

(statearr_8876_8929[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8849 === (28))){
var inst_8818 = (state_8848[(2)]);
var inst_8819 = calc_state();
var inst_8775 = inst_8819;
var state_8848__$1 = (function (){var statearr_8877 = state_8848;
(statearr_8877[(15)] = inst_8818);

(statearr_8877[(7)] = inst_8775);

return statearr_8877;
})();
var statearr_8878_8930 = state_8848__$1;
(statearr_8878_8930[(2)] = null);

(statearr_8878_8930[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8849 === (25))){
var inst_8844 = (state_8848[(2)]);
var state_8848__$1 = state_8848;
var statearr_8879_8931 = state_8848__$1;
(statearr_8879_8931[(2)] = inst_8844);

(statearr_8879_8931[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8849 === (34))){
var inst_8842 = (state_8848[(2)]);
var state_8848__$1 = state_8848;
var statearr_8880_8932 = state_8848__$1;
(statearr_8880_8932[(2)] = inst_8842);

(statearr_8880_8932[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8849 === (17))){
var state_8848__$1 = state_8848;
var statearr_8881_8933 = state_8848__$1;
(statearr_8881_8933[(2)] = false);

(statearr_8881_8933[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8849 === (3))){
var state_8848__$1 = state_8848;
var statearr_8882_8934 = state_8848__$1;
(statearr_8882_8934[(2)] = false);

(statearr_8882_8934[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8849 === (12))){
var inst_8846 = (state_8848[(2)]);
var state_8848__$1 = state_8848;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8848__$1,inst_8846);
} else {
if((state_val_8849 === (2))){
var inst_8750 = (state_8848[(8)]);
var inst_8755 = inst_8750.cljs$lang$protocol_mask$partition0$;
var inst_8756 = (inst_8755 & (64));
var inst_8757 = inst_8750.cljs$core$ISeq$;
var inst_8758 = (cljs.core.PROTOCOL_SENTINEL === inst_8757);
var inst_8759 = ((inst_8756) || (inst_8758));
var state_8848__$1 = state_8848;
if(cljs.core.truth_(inst_8759)){
var statearr_8883_8935 = state_8848__$1;
(statearr_8883_8935[(1)] = (5));

} else {
var statearr_8884_8936 = state_8848__$1;
(statearr_8884_8936[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8849 === (23))){
var inst_8807 = (state_8848[(14)]);
var inst_8813 = (inst_8807 == null);
var state_8848__$1 = state_8848;
if(cljs.core.truth_(inst_8813)){
var statearr_8885_8937 = state_8848__$1;
(statearr_8885_8937[(1)] = (26));

} else {
var statearr_8886_8938 = state_8848__$1;
(statearr_8886_8938[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8849 === (35))){
var inst_8833 = (state_8848[(2)]);
var state_8848__$1 = state_8848;
if(cljs.core.truth_(inst_8833)){
var statearr_8887_8939 = state_8848__$1;
(statearr_8887_8939[(1)] = (36));

} else {
var statearr_8888_8940 = state_8848__$1;
(statearr_8888_8940[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8849 === (19))){
var inst_8775 = (state_8848[(7)]);
var inst_8795 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_8775);
var state_8848__$1 = state_8848;
var statearr_8889_8941 = state_8848__$1;
(statearr_8889_8941[(2)] = inst_8795);

(statearr_8889_8941[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8849 === (11))){
var inst_8775 = (state_8848[(7)]);
var inst_8779 = (inst_8775 == null);
var inst_8780 = cljs.core.not(inst_8779);
var state_8848__$1 = state_8848;
if(inst_8780){
var statearr_8890_8942 = state_8848__$1;
(statearr_8890_8942[(1)] = (13));

} else {
var statearr_8891_8943 = state_8848__$1;
(statearr_8891_8943[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8849 === (9))){
var inst_8750 = (state_8848[(8)]);
var state_8848__$1 = state_8848;
var statearr_8892_8944 = state_8848__$1;
(statearr_8892_8944[(2)] = inst_8750);

(statearr_8892_8944[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8849 === (5))){
var state_8848__$1 = state_8848;
var statearr_8893_8945 = state_8848__$1;
(statearr_8893_8945[(2)] = true);

(statearr_8893_8945[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8849 === (14))){
var state_8848__$1 = state_8848;
var statearr_8894_8946 = state_8848__$1;
(statearr_8894_8946[(2)] = false);

(statearr_8894_8946[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8849 === (26))){
var inst_8808 = (state_8848[(9)]);
var inst_8815 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_8808);
var state_8848__$1 = state_8848;
var statearr_8895_8947 = state_8848__$1;
(statearr_8895_8947[(2)] = inst_8815);

(statearr_8895_8947[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8849 === (16))){
var state_8848__$1 = state_8848;
var statearr_8896_8948 = state_8848__$1;
(statearr_8896_8948[(2)] = true);

(statearr_8896_8948[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8849 === (38))){
var inst_8838 = (state_8848[(2)]);
var state_8848__$1 = state_8848;
var statearr_8897_8949 = state_8848__$1;
(statearr_8897_8949[(2)] = inst_8838);

(statearr_8897_8949[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8849 === (30))){
var inst_8808 = (state_8848[(9)]);
var inst_8800 = (state_8848[(13)]);
var inst_8799 = (state_8848[(11)]);
var inst_8825 = cljs.core.empty_QMARK_(inst_8799);
var inst_8826 = (inst_8800.cljs$core$IFn$_invoke$arity$1 ? inst_8800.cljs$core$IFn$_invoke$arity$1(inst_8808) : inst_8800.call(null,inst_8808));
var inst_8827 = cljs.core.not(inst_8826);
var inst_8828 = ((inst_8825) && (inst_8827));
var state_8848__$1 = state_8848;
var statearr_8898_8950 = state_8848__$1;
(statearr_8898_8950[(2)] = inst_8828);

(statearr_8898_8950[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8849 === (10))){
var inst_8750 = (state_8848[(8)]);
var inst_8771 = (state_8848[(2)]);
var inst_8772 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_8771,cljs.core.cst$kw$solos);
var inst_8773 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_8771,cljs.core.cst$kw$mutes);
var inst_8774 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_8771,cljs.core.cst$kw$reads);
var inst_8775 = inst_8750;
var state_8848__$1 = (function (){var statearr_8899 = state_8848;
(statearr_8899[(16)] = inst_8772);

(statearr_8899[(17)] = inst_8774);

(statearr_8899[(7)] = inst_8775);

(statearr_8899[(18)] = inst_8773);

return statearr_8899;
})();
var statearr_8900_8951 = state_8848__$1;
(statearr_8900_8951[(2)] = null);

(statearr_8900_8951[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8849 === (18))){
var inst_8790 = (state_8848[(2)]);
var state_8848__$1 = state_8848;
var statearr_8901_8952 = state_8848__$1;
(statearr_8901_8952[(2)] = inst_8790);

(statearr_8901_8952[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8849 === (37))){
var state_8848__$1 = state_8848;
var statearr_8902_8953 = state_8848__$1;
(statearr_8902_8953[(2)] = null);

(statearr_8902_8953[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8849 === (8))){
var inst_8750 = (state_8848[(8)]);
var inst_8768 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_8750);
var state_8848__$1 = state_8848;
var statearr_8903_8954 = state_8848__$1;
(statearr_8903_8954[(2)] = inst_8768);

(statearr_8903_8954[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__7847__auto___8908,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7745__auto__,c__7847__auto___8908,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__7746__auto__ = null;
var cljs$core$async$mix_$_state_machine__7746__auto____0 = (function (){
var statearr_8904 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8904[(0)] = cljs$core$async$mix_$_state_machine__7746__auto__);

(statearr_8904[(1)] = (1));

return statearr_8904;
});
var cljs$core$async$mix_$_state_machine__7746__auto____1 = (function (state_8848){
while(true){
var ret_value__7747__auto__ = (function (){try{while(true){
var result__7748__auto__ = switch__7745__auto__(state_8848);
if(cljs.core.keyword_identical_QMARK_(result__7748__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7748__auto__;
}
break;
}
}catch (e8905){if((e8905 instanceof Object)){
var ex__7749__auto__ = e8905;
var statearr_8906_8955 = state_8848;
(statearr_8906_8955[(5)] = ex__7749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8848);

return cljs.core.cst$kw$recur;
} else {
throw e8905;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7747__auto__,cljs.core.cst$kw$recur)){
var G__8956 = state_8848;
state_8848 = G__8956;
continue;
} else {
return ret_value__7747__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__7746__auto__ = function(state_8848){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__7746__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__7746__auto____1.call(this,state_8848);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__7746__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__7746__auto____0;
cljs$core$async$mix_$_state_machine__7746__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__7746__auto____1;
return cljs$core$async$mix_$_state_machine__7746__auto__;
})()
;})(switch__7745__auto__,c__7847__auto___8908,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7849__auto__ = (function (){var statearr_8907 = (f__7848__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7848__auto__.cljs$core$IFn$_invoke$arity$0() : f__7848__auto__.call(null));
(statearr_8907[(6)] = c__7847__auto___8908);

return statearr_8907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7849__auto__);
});})(c__7847__auto___8908,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
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
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4212__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4212__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
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
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4212__auto__.call(null,p,v,ch));
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4212__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__8958 = arguments.length;
switch (G__8958) {
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
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4212__auto__.call(null,p));
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__4212__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
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
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4212__auto__.call(null,p,v));
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__4212__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
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
var G__8962 = arguments.length;
switch (G__8962) {
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
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3922__auto__,mults){
return (function (p1__8960_SHARP_){
if(cljs.core.truth_((p1__8960_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__8960_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__8960_SHARP_.call(null,topic)))){
return p1__8960_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__8960_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async8963 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8963 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta8964){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta8964 = meta8964;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8963.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_8965,meta8964__$1){
var self__ = this;
var _8965__$1 = this;
return (new cljs.core.async.t_cljs$core$async8963(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta8964__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8963.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_8965){
var self__ = this;
var _8965__$1 = this;
return self__.meta8964;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8963.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8963.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8963.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8963.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8963.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8963.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8963.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8963.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta8964], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8963.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8963.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8963";

cljs.core.async.t_cljs$core$async8963.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async8963");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8963.
 */
cljs.core.async.__GT_t_cljs$core$async8963 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async8963(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta8964){
return (new cljs.core.async.t_cljs$core$async8963(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta8964));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async8963(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7847__auto___9083 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7847__auto___9083,mults,ensure_mult,p){
return (function (){
var f__7848__auto__ = (function (){var switch__7745__auto__ = ((function (c__7847__auto___9083,mults,ensure_mult,p){
return (function (state_9037){
var state_val_9038 = (state_9037[(1)]);
if((state_val_9038 === (7))){
var inst_9033 = (state_9037[(2)]);
var state_9037__$1 = state_9037;
var statearr_9039_9084 = state_9037__$1;
(statearr_9039_9084[(2)] = inst_9033);

(statearr_9039_9084[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9038 === (20))){
var state_9037__$1 = state_9037;
var statearr_9040_9085 = state_9037__$1;
(statearr_9040_9085[(2)] = null);

(statearr_9040_9085[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9038 === (1))){
var state_9037__$1 = state_9037;
var statearr_9041_9086 = state_9037__$1;
(statearr_9041_9086[(2)] = null);

(statearr_9041_9086[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9038 === (24))){
var inst_9016 = (state_9037[(7)]);
var inst_9025 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_9016);
var state_9037__$1 = state_9037;
var statearr_9042_9087 = state_9037__$1;
(statearr_9042_9087[(2)] = inst_9025);

(statearr_9042_9087[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9038 === (4))){
var inst_8968 = (state_9037[(8)]);
var inst_8968__$1 = (state_9037[(2)]);
var inst_8969 = (inst_8968__$1 == null);
var state_9037__$1 = (function (){var statearr_9043 = state_9037;
(statearr_9043[(8)] = inst_8968__$1);

return statearr_9043;
})();
if(cljs.core.truth_(inst_8969)){
var statearr_9044_9088 = state_9037__$1;
(statearr_9044_9088[(1)] = (5));

} else {
var statearr_9045_9089 = state_9037__$1;
(statearr_9045_9089[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9038 === (15))){
var inst_9010 = (state_9037[(2)]);
var state_9037__$1 = state_9037;
var statearr_9046_9090 = state_9037__$1;
(statearr_9046_9090[(2)] = inst_9010);

(statearr_9046_9090[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9038 === (21))){
var inst_9030 = (state_9037[(2)]);
var state_9037__$1 = (function (){var statearr_9047 = state_9037;
(statearr_9047[(9)] = inst_9030);

return statearr_9047;
})();
var statearr_9048_9091 = state_9037__$1;
(statearr_9048_9091[(2)] = null);

(statearr_9048_9091[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9038 === (13))){
var inst_8992 = (state_9037[(10)]);
var inst_8994 = cljs.core.chunked_seq_QMARK_(inst_8992);
var state_9037__$1 = state_9037;
if(inst_8994){
var statearr_9049_9092 = state_9037__$1;
(statearr_9049_9092[(1)] = (16));

} else {
var statearr_9050_9093 = state_9037__$1;
(statearr_9050_9093[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9038 === (22))){
var inst_9022 = (state_9037[(2)]);
var state_9037__$1 = state_9037;
if(cljs.core.truth_(inst_9022)){
var statearr_9051_9094 = state_9037__$1;
(statearr_9051_9094[(1)] = (23));

} else {
var statearr_9052_9095 = state_9037__$1;
(statearr_9052_9095[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9038 === (6))){
var inst_8968 = (state_9037[(8)]);
var inst_9016 = (state_9037[(7)]);
var inst_9018 = (state_9037[(11)]);
var inst_9016__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_8968) : topic_fn.call(null,inst_8968));
var inst_9017 = cljs.core.deref(mults);
var inst_9018__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_9017,inst_9016__$1);
var state_9037__$1 = (function (){var statearr_9053 = state_9037;
(statearr_9053[(7)] = inst_9016__$1);

(statearr_9053[(11)] = inst_9018__$1);

return statearr_9053;
})();
if(cljs.core.truth_(inst_9018__$1)){
var statearr_9054_9096 = state_9037__$1;
(statearr_9054_9096[(1)] = (19));

} else {
var statearr_9055_9097 = state_9037__$1;
(statearr_9055_9097[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9038 === (25))){
var inst_9027 = (state_9037[(2)]);
var state_9037__$1 = state_9037;
var statearr_9056_9098 = state_9037__$1;
(statearr_9056_9098[(2)] = inst_9027);

(statearr_9056_9098[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9038 === (17))){
var inst_8992 = (state_9037[(10)]);
var inst_9001 = cljs.core.first(inst_8992);
var inst_9002 = cljs.core.async.muxch_STAR_(inst_9001);
var inst_9003 = cljs.core.async.close_BANG_(inst_9002);
var inst_9004 = cljs.core.next(inst_8992);
var inst_8978 = inst_9004;
var inst_8979 = null;
var inst_8980 = (0);
var inst_8981 = (0);
var state_9037__$1 = (function (){var statearr_9057 = state_9037;
(statearr_9057[(12)] = inst_8978);

(statearr_9057[(13)] = inst_8981);

(statearr_9057[(14)] = inst_8980);

(statearr_9057[(15)] = inst_9003);

(statearr_9057[(16)] = inst_8979);

return statearr_9057;
})();
var statearr_9058_9099 = state_9037__$1;
(statearr_9058_9099[(2)] = null);

(statearr_9058_9099[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9038 === (3))){
var inst_9035 = (state_9037[(2)]);
var state_9037__$1 = state_9037;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9037__$1,inst_9035);
} else {
if((state_val_9038 === (12))){
var inst_9012 = (state_9037[(2)]);
var state_9037__$1 = state_9037;
var statearr_9059_9100 = state_9037__$1;
(statearr_9059_9100[(2)] = inst_9012);

(statearr_9059_9100[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9038 === (2))){
var state_9037__$1 = state_9037;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9037__$1,(4),ch);
} else {
if((state_val_9038 === (23))){
var state_9037__$1 = state_9037;
var statearr_9060_9101 = state_9037__$1;
(statearr_9060_9101[(2)] = null);

(statearr_9060_9101[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9038 === (19))){
var inst_8968 = (state_9037[(8)]);
var inst_9018 = (state_9037[(11)]);
var inst_9020 = cljs.core.async.muxch_STAR_(inst_9018);
var state_9037__$1 = state_9037;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9037__$1,(22),inst_9020,inst_8968);
} else {
if((state_val_9038 === (11))){
var inst_8978 = (state_9037[(12)]);
var inst_8992 = (state_9037[(10)]);
var inst_8992__$1 = cljs.core.seq(inst_8978);
var state_9037__$1 = (function (){var statearr_9061 = state_9037;
(statearr_9061[(10)] = inst_8992__$1);

return statearr_9061;
})();
if(inst_8992__$1){
var statearr_9062_9102 = state_9037__$1;
(statearr_9062_9102[(1)] = (13));

} else {
var statearr_9063_9103 = state_9037__$1;
(statearr_9063_9103[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9038 === (9))){
var inst_9014 = (state_9037[(2)]);
var state_9037__$1 = state_9037;
var statearr_9064_9104 = state_9037__$1;
(statearr_9064_9104[(2)] = inst_9014);

(statearr_9064_9104[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9038 === (5))){
var inst_8975 = cljs.core.deref(mults);
var inst_8976 = cljs.core.vals(inst_8975);
var inst_8977 = cljs.core.seq(inst_8976);
var inst_8978 = inst_8977;
var inst_8979 = null;
var inst_8980 = (0);
var inst_8981 = (0);
var state_9037__$1 = (function (){var statearr_9065 = state_9037;
(statearr_9065[(12)] = inst_8978);

(statearr_9065[(13)] = inst_8981);

(statearr_9065[(14)] = inst_8980);

(statearr_9065[(16)] = inst_8979);

return statearr_9065;
})();
var statearr_9066_9105 = state_9037__$1;
(statearr_9066_9105[(2)] = null);

(statearr_9066_9105[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9038 === (14))){
var state_9037__$1 = state_9037;
var statearr_9070_9106 = state_9037__$1;
(statearr_9070_9106[(2)] = null);

(statearr_9070_9106[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9038 === (16))){
var inst_8992 = (state_9037[(10)]);
var inst_8996 = cljs.core.chunk_first(inst_8992);
var inst_8997 = cljs.core.chunk_rest(inst_8992);
var inst_8998 = cljs.core.count(inst_8996);
var inst_8978 = inst_8997;
var inst_8979 = inst_8996;
var inst_8980 = inst_8998;
var inst_8981 = (0);
var state_9037__$1 = (function (){var statearr_9071 = state_9037;
(statearr_9071[(12)] = inst_8978);

(statearr_9071[(13)] = inst_8981);

(statearr_9071[(14)] = inst_8980);

(statearr_9071[(16)] = inst_8979);

return statearr_9071;
})();
var statearr_9072_9107 = state_9037__$1;
(statearr_9072_9107[(2)] = null);

(statearr_9072_9107[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9038 === (10))){
var inst_8978 = (state_9037[(12)]);
var inst_8981 = (state_9037[(13)]);
var inst_8980 = (state_9037[(14)]);
var inst_8979 = (state_9037[(16)]);
var inst_8986 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_8979,inst_8981);
var inst_8987 = cljs.core.async.muxch_STAR_(inst_8986);
var inst_8988 = cljs.core.async.close_BANG_(inst_8987);
var inst_8989 = (inst_8981 + (1));
var tmp9067 = inst_8978;
var tmp9068 = inst_8980;
var tmp9069 = inst_8979;
var inst_8978__$1 = tmp9067;
var inst_8979__$1 = tmp9069;
var inst_8980__$1 = tmp9068;
var inst_8981__$1 = inst_8989;
var state_9037__$1 = (function (){var statearr_9073 = state_9037;
(statearr_9073[(12)] = inst_8978__$1);

(statearr_9073[(13)] = inst_8981__$1);

(statearr_9073[(14)] = inst_8980__$1);

(statearr_9073[(17)] = inst_8988);

(statearr_9073[(16)] = inst_8979__$1);

return statearr_9073;
})();
var statearr_9074_9108 = state_9037__$1;
(statearr_9074_9108[(2)] = null);

(statearr_9074_9108[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9038 === (18))){
var inst_9007 = (state_9037[(2)]);
var state_9037__$1 = state_9037;
var statearr_9075_9109 = state_9037__$1;
(statearr_9075_9109[(2)] = inst_9007);

(statearr_9075_9109[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9038 === (8))){
var inst_8981 = (state_9037[(13)]);
var inst_8980 = (state_9037[(14)]);
var inst_8983 = (inst_8981 < inst_8980);
var inst_8984 = inst_8983;
var state_9037__$1 = state_9037;
if(cljs.core.truth_(inst_8984)){
var statearr_9076_9110 = state_9037__$1;
(statearr_9076_9110[(1)] = (10));

} else {
var statearr_9077_9111 = state_9037__$1;
(statearr_9077_9111[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__7847__auto___9083,mults,ensure_mult,p))
;
return ((function (switch__7745__auto__,c__7847__auto___9083,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__7746__auto__ = null;
var cljs$core$async$state_machine__7746__auto____0 = (function (){
var statearr_9078 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9078[(0)] = cljs$core$async$state_machine__7746__auto__);

(statearr_9078[(1)] = (1));

return statearr_9078;
});
var cljs$core$async$state_machine__7746__auto____1 = (function (state_9037){
while(true){
var ret_value__7747__auto__ = (function (){try{while(true){
var result__7748__auto__ = switch__7745__auto__(state_9037);
if(cljs.core.keyword_identical_QMARK_(result__7748__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7748__auto__;
}
break;
}
}catch (e9079){if((e9079 instanceof Object)){
var ex__7749__auto__ = e9079;
var statearr_9080_9112 = state_9037;
(statearr_9080_9112[(5)] = ex__7749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9037);

return cljs.core.cst$kw$recur;
} else {
throw e9079;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7747__auto__,cljs.core.cst$kw$recur)){
var G__9113 = state_9037;
state_9037 = G__9113;
continue;
} else {
return ret_value__7747__auto__;
}
break;
}
});
cljs$core$async$state_machine__7746__auto__ = function(state_9037){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7746__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7746__auto____1.call(this,state_9037);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__7746__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7746__auto____0;
cljs$core$async$state_machine__7746__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7746__auto____1;
return cljs$core$async$state_machine__7746__auto__;
})()
;})(switch__7745__auto__,c__7847__auto___9083,mults,ensure_mult,p))
})();
var state__7849__auto__ = (function (){var statearr_9081 = (f__7848__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7848__auto__.cljs$core$IFn$_invoke$arity$0() : f__7848__auto__.call(null));
(statearr_9081[(6)] = c__7847__auto___9083);

return statearr_9081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7849__auto__);
});})(c__7847__auto___9083,mults,ensure_mult,p))
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
var G__9115 = arguments.length;
switch (G__9115) {
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
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__9118 = arguments.length;
switch (G__9118) {
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
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
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
var G__9121 = arguments.length;
switch (G__9121) {
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
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__7847__auto___9188 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7847__auto___9188,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7848__auto__ = (function (){var switch__7745__auto__ = ((function (c__7847__auto___9188,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_9160){
var state_val_9161 = (state_9160[(1)]);
if((state_val_9161 === (7))){
var state_9160__$1 = state_9160;
var statearr_9162_9189 = state_9160__$1;
(statearr_9162_9189[(2)] = null);

(statearr_9162_9189[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9161 === (1))){
var state_9160__$1 = state_9160;
var statearr_9163_9190 = state_9160__$1;
(statearr_9163_9190[(2)] = null);

(statearr_9163_9190[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9161 === (4))){
var inst_9124 = (state_9160[(7)]);
var inst_9126 = (inst_9124 < cnt);
var state_9160__$1 = state_9160;
if(cljs.core.truth_(inst_9126)){
var statearr_9164_9191 = state_9160__$1;
(statearr_9164_9191[(1)] = (6));

} else {
var statearr_9165_9192 = state_9160__$1;
(statearr_9165_9192[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9161 === (15))){
var inst_9156 = (state_9160[(2)]);
var state_9160__$1 = state_9160;
var statearr_9166_9193 = state_9160__$1;
(statearr_9166_9193[(2)] = inst_9156);

(statearr_9166_9193[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9161 === (13))){
var inst_9149 = cljs.core.async.close_BANG_(out);
var state_9160__$1 = state_9160;
var statearr_9167_9194 = state_9160__$1;
(statearr_9167_9194[(2)] = inst_9149);

(statearr_9167_9194[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9161 === (6))){
var state_9160__$1 = state_9160;
var statearr_9168_9195 = state_9160__$1;
(statearr_9168_9195[(2)] = null);

(statearr_9168_9195[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9161 === (3))){
var inst_9158 = (state_9160[(2)]);
var state_9160__$1 = state_9160;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9160__$1,inst_9158);
} else {
if((state_val_9161 === (12))){
var inst_9146 = (state_9160[(8)]);
var inst_9146__$1 = (state_9160[(2)]);
var inst_9147 = cljs.core.some(cljs.core.nil_QMARK_,inst_9146__$1);
var state_9160__$1 = (function (){var statearr_9169 = state_9160;
(statearr_9169[(8)] = inst_9146__$1);

return statearr_9169;
})();
if(cljs.core.truth_(inst_9147)){
var statearr_9170_9196 = state_9160__$1;
(statearr_9170_9196[(1)] = (13));

} else {
var statearr_9171_9197 = state_9160__$1;
(statearr_9171_9197[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9161 === (2))){
var inst_9123 = cljs.core.reset_BANG_(dctr,cnt);
var inst_9124 = (0);
var state_9160__$1 = (function (){var statearr_9172 = state_9160;
(statearr_9172[(9)] = inst_9123);

(statearr_9172[(7)] = inst_9124);

return statearr_9172;
})();
var statearr_9173_9198 = state_9160__$1;
(statearr_9173_9198[(2)] = null);

(statearr_9173_9198[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9161 === (11))){
var inst_9124 = (state_9160[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_9160,(10),Object,null,(9));
var inst_9133 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_9124) : chs__$1.call(null,inst_9124));
var inst_9134 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_9124) : done.call(null,inst_9124));
var inst_9135 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_9133,inst_9134);
var state_9160__$1 = state_9160;
var statearr_9174_9199 = state_9160__$1;
(statearr_9174_9199[(2)] = inst_9135);


cljs.core.async.impl.ioc_helpers.process_exception(state_9160__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_9161 === (9))){
var inst_9124 = (state_9160[(7)]);
var inst_9137 = (state_9160[(2)]);
var inst_9138 = (inst_9124 + (1));
var inst_9124__$1 = inst_9138;
var state_9160__$1 = (function (){var statearr_9175 = state_9160;
(statearr_9175[(10)] = inst_9137);

(statearr_9175[(7)] = inst_9124__$1);

return statearr_9175;
})();
var statearr_9176_9200 = state_9160__$1;
(statearr_9176_9200[(2)] = null);

(statearr_9176_9200[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9161 === (5))){
var inst_9144 = (state_9160[(2)]);
var state_9160__$1 = (function (){var statearr_9177 = state_9160;
(statearr_9177[(11)] = inst_9144);

return statearr_9177;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9160__$1,(12),dchan);
} else {
if((state_val_9161 === (14))){
var inst_9146 = (state_9160[(8)]);
var inst_9151 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_9146);
var state_9160__$1 = state_9160;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9160__$1,(16),out,inst_9151);
} else {
if((state_val_9161 === (16))){
var inst_9153 = (state_9160[(2)]);
var state_9160__$1 = (function (){var statearr_9178 = state_9160;
(statearr_9178[(12)] = inst_9153);

return statearr_9178;
})();
var statearr_9179_9201 = state_9160__$1;
(statearr_9179_9201[(2)] = null);

(statearr_9179_9201[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9161 === (10))){
var inst_9128 = (state_9160[(2)]);
var inst_9129 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_9160__$1 = (function (){var statearr_9180 = state_9160;
(statearr_9180[(13)] = inst_9128);

return statearr_9180;
})();
var statearr_9181_9202 = state_9160__$1;
(statearr_9181_9202[(2)] = inst_9129);


cljs.core.async.impl.ioc_helpers.process_exception(state_9160__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_9161 === (8))){
var inst_9142 = (state_9160[(2)]);
var state_9160__$1 = state_9160;
var statearr_9182_9203 = state_9160__$1;
(statearr_9182_9203[(2)] = inst_9142);

(statearr_9182_9203[(1)] = (5));


return cljs.core.cst$kw$recur;
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
});})(c__7847__auto___9188,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7745__auto__,c__7847__auto___9188,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__7746__auto__ = null;
var cljs$core$async$state_machine__7746__auto____0 = (function (){
var statearr_9183 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9183[(0)] = cljs$core$async$state_machine__7746__auto__);

(statearr_9183[(1)] = (1));

return statearr_9183;
});
var cljs$core$async$state_machine__7746__auto____1 = (function (state_9160){
while(true){
var ret_value__7747__auto__ = (function (){try{while(true){
var result__7748__auto__ = switch__7745__auto__(state_9160);
if(cljs.core.keyword_identical_QMARK_(result__7748__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7748__auto__;
}
break;
}
}catch (e9184){if((e9184 instanceof Object)){
var ex__7749__auto__ = e9184;
var statearr_9185_9204 = state_9160;
(statearr_9185_9204[(5)] = ex__7749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9160);

return cljs.core.cst$kw$recur;
} else {
throw e9184;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7747__auto__,cljs.core.cst$kw$recur)){
var G__9205 = state_9160;
state_9160 = G__9205;
continue;
} else {
return ret_value__7747__auto__;
}
break;
}
});
cljs$core$async$state_machine__7746__auto__ = function(state_9160){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7746__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7746__auto____1.call(this,state_9160);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__7746__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7746__auto____0;
cljs$core$async$state_machine__7746__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7746__auto____1;
return cljs$core$async$state_machine__7746__auto__;
})()
;})(switch__7745__auto__,c__7847__auto___9188,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7849__auto__ = (function (){var statearr_9186 = (f__7848__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7848__auto__.cljs$core$IFn$_invoke$arity$0() : f__7848__auto__.call(null));
(statearr_9186[(6)] = c__7847__auto___9188);

return statearr_9186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7849__auto__);
});})(c__7847__auto___9188,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__9208 = arguments.length;
switch (G__9208) {
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
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__7847__auto___9262 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7847__auto___9262,out){
return (function (){
var f__7848__auto__ = (function (){var switch__7745__auto__ = ((function (c__7847__auto___9262,out){
return (function (state_9240){
var state_val_9241 = (state_9240[(1)]);
if((state_val_9241 === (7))){
var inst_9219 = (state_9240[(7)]);
var inst_9220 = (state_9240[(8)]);
var inst_9219__$1 = (state_9240[(2)]);
var inst_9220__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_9219__$1,(0),null);
var inst_9221 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_9219__$1,(1),null);
var inst_9222 = (inst_9220__$1 == null);
var state_9240__$1 = (function (){var statearr_9242 = state_9240;
(statearr_9242[(9)] = inst_9221);

(statearr_9242[(7)] = inst_9219__$1);

(statearr_9242[(8)] = inst_9220__$1);

return statearr_9242;
})();
if(cljs.core.truth_(inst_9222)){
var statearr_9243_9263 = state_9240__$1;
(statearr_9243_9263[(1)] = (8));

} else {
var statearr_9244_9264 = state_9240__$1;
(statearr_9244_9264[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9241 === (1))){
var inst_9209 = cljs.core.vec(chs);
var inst_9210 = inst_9209;
var state_9240__$1 = (function (){var statearr_9245 = state_9240;
(statearr_9245[(10)] = inst_9210);

return statearr_9245;
})();
var statearr_9246_9265 = state_9240__$1;
(statearr_9246_9265[(2)] = null);

(statearr_9246_9265[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9241 === (4))){
var inst_9210 = (state_9240[(10)]);
var state_9240__$1 = state_9240;
return cljs.core.async.ioc_alts_BANG_(state_9240__$1,(7),inst_9210);
} else {
if((state_val_9241 === (6))){
var inst_9236 = (state_9240[(2)]);
var state_9240__$1 = state_9240;
var statearr_9247_9266 = state_9240__$1;
(statearr_9247_9266[(2)] = inst_9236);

(statearr_9247_9266[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9241 === (3))){
var inst_9238 = (state_9240[(2)]);
var state_9240__$1 = state_9240;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9240__$1,inst_9238);
} else {
if((state_val_9241 === (2))){
var inst_9210 = (state_9240[(10)]);
var inst_9212 = cljs.core.count(inst_9210);
var inst_9213 = (inst_9212 > (0));
var state_9240__$1 = state_9240;
if(cljs.core.truth_(inst_9213)){
var statearr_9249_9267 = state_9240__$1;
(statearr_9249_9267[(1)] = (4));

} else {
var statearr_9250_9268 = state_9240__$1;
(statearr_9250_9268[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9241 === (11))){
var inst_9210 = (state_9240[(10)]);
var inst_9229 = (state_9240[(2)]);
var tmp9248 = inst_9210;
var inst_9210__$1 = tmp9248;
var state_9240__$1 = (function (){var statearr_9251 = state_9240;
(statearr_9251[(10)] = inst_9210__$1);

(statearr_9251[(11)] = inst_9229);

return statearr_9251;
})();
var statearr_9252_9269 = state_9240__$1;
(statearr_9252_9269[(2)] = null);

(statearr_9252_9269[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9241 === (9))){
var inst_9220 = (state_9240[(8)]);
var state_9240__$1 = state_9240;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9240__$1,(11),out,inst_9220);
} else {
if((state_val_9241 === (5))){
var inst_9234 = cljs.core.async.close_BANG_(out);
var state_9240__$1 = state_9240;
var statearr_9253_9270 = state_9240__$1;
(statearr_9253_9270[(2)] = inst_9234);

(statearr_9253_9270[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9241 === (10))){
var inst_9232 = (state_9240[(2)]);
var state_9240__$1 = state_9240;
var statearr_9254_9271 = state_9240__$1;
(statearr_9254_9271[(2)] = inst_9232);

(statearr_9254_9271[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9241 === (8))){
var inst_9221 = (state_9240[(9)]);
var inst_9210 = (state_9240[(10)]);
var inst_9219 = (state_9240[(7)]);
var inst_9220 = (state_9240[(8)]);
var inst_9224 = (function (){var cs = inst_9210;
var vec__9215 = inst_9219;
var v = inst_9220;
var c = inst_9221;
return ((function (cs,vec__9215,v,c,inst_9221,inst_9210,inst_9219,inst_9220,state_val_9241,c__7847__auto___9262,out){
return (function (p1__9206_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__9206_SHARP_);
});
;})(cs,vec__9215,v,c,inst_9221,inst_9210,inst_9219,inst_9220,state_val_9241,c__7847__auto___9262,out))
})();
var inst_9225 = cljs.core.filterv(inst_9224,inst_9210);
var inst_9210__$1 = inst_9225;
var state_9240__$1 = (function (){var statearr_9255 = state_9240;
(statearr_9255[(10)] = inst_9210__$1);

return statearr_9255;
})();
var statearr_9256_9272 = state_9240__$1;
(statearr_9256_9272[(2)] = null);

(statearr_9256_9272[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__7847__auto___9262,out))
;
return ((function (switch__7745__auto__,c__7847__auto___9262,out){
return (function() {
var cljs$core$async$state_machine__7746__auto__ = null;
var cljs$core$async$state_machine__7746__auto____0 = (function (){
var statearr_9257 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9257[(0)] = cljs$core$async$state_machine__7746__auto__);

(statearr_9257[(1)] = (1));

return statearr_9257;
});
var cljs$core$async$state_machine__7746__auto____1 = (function (state_9240){
while(true){
var ret_value__7747__auto__ = (function (){try{while(true){
var result__7748__auto__ = switch__7745__auto__(state_9240);
if(cljs.core.keyword_identical_QMARK_(result__7748__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7748__auto__;
}
break;
}
}catch (e9258){if((e9258 instanceof Object)){
var ex__7749__auto__ = e9258;
var statearr_9259_9273 = state_9240;
(statearr_9259_9273[(5)] = ex__7749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9240);

return cljs.core.cst$kw$recur;
} else {
throw e9258;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7747__auto__,cljs.core.cst$kw$recur)){
var G__9274 = state_9240;
state_9240 = G__9274;
continue;
} else {
return ret_value__7747__auto__;
}
break;
}
});
cljs$core$async$state_machine__7746__auto__ = function(state_9240){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7746__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7746__auto____1.call(this,state_9240);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__7746__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7746__auto____0;
cljs$core$async$state_machine__7746__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7746__auto____1;
return cljs$core$async$state_machine__7746__auto__;
})()
;})(switch__7745__auto__,c__7847__auto___9262,out))
})();
var state__7849__auto__ = (function (){var statearr_9260 = (f__7848__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7848__auto__.cljs$core$IFn$_invoke$arity$0() : f__7848__auto__.call(null));
(statearr_9260[(6)] = c__7847__auto___9262);

return statearr_9260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7849__auto__);
});})(c__7847__auto___9262,out))
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
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__9276 = arguments.length;
switch (G__9276) {
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
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__7847__auto___9321 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7847__auto___9321,out){
return (function (){
var f__7848__auto__ = (function (){var switch__7745__auto__ = ((function (c__7847__auto___9321,out){
return (function (state_9300){
var state_val_9301 = (state_9300[(1)]);
if((state_val_9301 === (7))){
var inst_9282 = (state_9300[(7)]);
var inst_9282__$1 = (state_9300[(2)]);
var inst_9283 = (inst_9282__$1 == null);
var inst_9284 = cljs.core.not(inst_9283);
var state_9300__$1 = (function (){var statearr_9302 = state_9300;
(statearr_9302[(7)] = inst_9282__$1);

return statearr_9302;
})();
if(inst_9284){
var statearr_9303_9322 = state_9300__$1;
(statearr_9303_9322[(1)] = (8));

} else {
var statearr_9304_9323 = state_9300__$1;
(statearr_9304_9323[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9301 === (1))){
var inst_9277 = (0);
var state_9300__$1 = (function (){var statearr_9305 = state_9300;
(statearr_9305[(8)] = inst_9277);

return statearr_9305;
})();
var statearr_9306_9324 = state_9300__$1;
(statearr_9306_9324[(2)] = null);

(statearr_9306_9324[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9301 === (4))){
var state_9300__$1 = state_9300;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9300__$1,(7),ch);
} else {
if((state_val_9301 === (6))){
var inst_9295 = (state_9300[(2)]);
var state_9300__$1 = state_9300;
var statearr_9307_9325 = state_9300__$1;
(statearr_9307_9325[(2)] = inst_9295);

(statearr_9307_9325[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9301 === (3))){
var inst_9297 = (state_9300[(2)]);
var inst_9298 = cljs.core.async.close_BANG_(out);
var state_9300__$1 = (function (){var statearr_9308 = state_9300;
(statearr_9308[(9)] = inst_9297);

return statearr_9308;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_9300__$1,inst_9298);
} else {
if((state_val_9301 === (2))){
var inst_9277 = (state_9300[(8)]);
var inst_9279 = (inst_9277 < n);
var state_9300__$1 = state_9300;
if(cljs.core.truth_(inst_9279)){
var statearr_9309_9326 = state_9300__$1;
(statearr_9309_9326[(1)] = (4));

} else {
var statearr_9310_9327 = state_9300__$1;
(statearr_9310_9327[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9301 === (11))){
var inst_9277 = (state_9300[(8)]);
var inst_9287 = (state_9300[(2)]);
var inst_9288 = (inst_9277 + (1));
var inst_9277__$1 = inst_9288;
var state_9300__$1 = (function (){var statearr_9311 = state_9300;
(statearr_9311[(10)] = inst_9287);

(statearr_9311[(8)] = inst_9277__$1);

return statearr_9311;
})();
var statearr_9312_9328 = state_9300__$1;
(statearr_9312_9328[(2)] = null);

(statearr_9312_9328[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9301 === (9))){
var state_9300__$1 = state_9300;
var statearr_9313_9329 = state_9300__$1;
(statearr_9313_9329[(2)] = null);

(statearr_9313_9329[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9301 === (5))){
var state_9300__$1 = state_9300;
var statearr_9314_9330 = state_9300__$1;
(statearr_9314_9330[(2)] = null);

(statearr_9314_9330[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9301 === (10))){
var inst_9292 = (state_9300[(2)]);
var state_9300__$1 = state_9300;
var statearr_9315_9331 = state_9300__$1;
(statearr_9315_9331[(2)] = inst_9292);

(statearr_9315_9331[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9301 === (8))){
var inst_9282 = (state_9300[(7)]);
var state_9300__$1 = state_9300;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9300__$1,(11),out,inst_9282);
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
});})(c__7847__auto___9321,out))
;
return ((function (switch__7745__auto__,c__7847__auto___9321,out){
return (function() {
var cljs$core$async$state_machine__7746__auto__ = null;
var cljs$core$async$state_machine__7746__auto____0 = (function (){
var statearr_9316 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9316[(0)] = cljs$core$async$state_machine__7746__auto__);

(statearr_9316[(1)] = (1));

return statearr_9316;
});
var cljs$core$async$state_machine__7746__auto____1 = (function (state_9300){
while(true){
var ret_value__7747__auto__ = (function (){try{while(true){
var result__7748__auto__ = switch__7745__auto__(state_9300);
if(cljs.core.keyword_identical_QMARK_(result__7748__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7748__auto__;
}
break;
}
}catch (e9317){if((e9317 instanceof Object)){
var ex__7749__auto__ = e9317;
var statearr_9318_9332 = state_9300;
(statearr_9318_9332[(5)] = ex__7749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9300);

return cljs.core.cst$kw$recur;
} else {
throw e9317;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7747__auto__,cljs.core.cst$kw$recur)){
var G__9333 = state_9300;
state_9300 = G__9333;
continue;
} else {
return ret_value__7747__auto__;
}
break;
}
});
cljs$core$async$state_machine__7746__auto__ = function(state_9300){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7746__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7746__auto____1.call(this,state_9300);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__7746__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7746__auto____0;
cljs$core$async$state_machine__7746__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7746__auto____1;
return cljs$core$async$state_machine__7746__auto__;
})()
;})(switch__7745__auto__,c__7847__auto___9321,out))
})();
var state__7849__auto__ = (function (){var statearr_9319 = (f__7848__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7848__auto__.cljs$core$IFn$_invoke$arity$0() : f__7848__auto__.call(null));
(statearr_9319[(6)] = c__7847__auto___9321);

return statearr_9319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7849__auto__);
});})(c__7847__auto___9321,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async9335 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9335 = (function (f,ch,meta9336){
this.f = f;
this.ch = ch;
this.meta9336 = meta9336;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async9335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9337,meta9336__$1){
var self__ = this;
var _9337__$1 = this;
return (new cljs.core.async.t_cljs$core$async9335(self__.f,self__.ch,meta9336__$1));
});

cljs.core.async.t_cljs$core$async9335.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9337){
var self__ = this;
var _9337__$1 = this;
return self__.meta9336;
});

cljs.core.async.t_cljs$core$async9335.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9335.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async9335.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async9335.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9335.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async9338 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9338 = (function (f,ch,meta9336,_,fn1,meta9339){
this.f = f;
this.ch = ch;
this.meta9336 = meta9336;
this._ = _;
this.fn1 = fn1;
this.meta9339 = meta9339;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async9338.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_9340,meta9339__$1){
var self__ = this;
var _9340__$1 = this;
return (new cljs.core.async.t_cljs$core$async9338(self__.f,self__.ch,self__.meta9336,self__._,self__.fn1,meta9339__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async9338.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_9340){
var self__ = this;
var _9340__$1 = this;
return self__.meta9339;
});})(___$1))
;

cljs.core.async.t_cljs$core$async9338.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9338.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async9338.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async9338.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__9334_SHARP_){
var G__9341 = (((p1__9334_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__9334_SHARP_) : self__.f.call(null,p1__9334_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__9341) : f1.call(null,G__9341));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async9338.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta9336,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async9335], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta9339], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async9338.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9338.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9338";

cljs.core.async.t_cljs$core$async9338.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async9338");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9338.
 */
cljs.core.async.__GT_t_cljs$core$async9338 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async9338(f__$1,ch__$1,meta9336__$1,___$2,fn1__$1,meta9339){
return (new cljs.core.async.t_cljs$core$async9338(f__$1,ch__$1,meta9336__$1,___$2,fn1__$1,meta9339));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async9338(self__.f,self__.ch,self__.meta9336,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__9342 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__9342) : self__.f.call(null,G__9342));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async9335.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9335.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async9335.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta9336], null);
});

cljs.core.async.t_cljs$core$async9335.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9335.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9335";

cljs.core.async.t_cljs$core$async9335.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async9335");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9335.
 */
cljs.core.async.__GT_t_cljs$core$async9335 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async9335(f__$1,ch__$1,meta9336){
return (new cljs.core.async.t_cljs$core$async9335(f__$1,ch__$1,meta9336));
});

}

return (new cljs.core.async.t_cljs$core$async9335(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async9343 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9343 = (function (f,ch,meta9344){
this.f = f;
this.ch = ch;
this.meta9344 = meta9344;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async9343.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9345,meta9344__$1){
var self__ = this;
var _9345__$1 = this;
return (new cljs.core.async.t_cljs$core$async9343(self__.f,self__.ch,meta9344__$1));
});

cljs.core.async.t_cljs$core$async9343.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9345){
var self__ = this;
var _9345__$1 = this;
return self__.meta9344;
});

cljs.core.async.t_cljs$core$async9343.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9343.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async9343.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9343.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async9343.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9343.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async9343.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta9344], null);
});

cljs.core.async.t_cljs$core$async9343.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9343.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9343";

cljs.core.async.t_cljs$core$async9343.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async9343");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9343.
 */
cljs.core.async.__GT_t_cljs$core$async9343 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async9343(f__$1,ch__$1,meta9344){
return (new cljs.core.async.t_cljs$core$async9343(f__$1,ch__$1,meta9344));
});

}

return (new cljs.core.async.t_cljs$core$async9343(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async9346 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9346 = (function (p,ch,meta9347){
this.p = p;
this.ch = ch;
this.meta9347 = meta9347;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async9346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9348,meta9347__$1){
var self__ = this;
var _9348__$1 = this;
return (new cljs.core.async.t_cljs$core$async9346(self__.p,self__.ch,meta9347__$1));
});

cljs.core.async.t_cljs$core$async9346.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9348){
var self__ = this;
var _9348__$1 = this;
return self__.meta9347;
});

cljs.core.async.t_cljs$core$async9346.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9346.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async9346.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async9346.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9346.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async9346.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9346.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async9346.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta9347], null);
});

cljs.core.async.t_cljs$core$async9346.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9346.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9346";

cljs.core.async.t_cljs$core$async9346.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async9346");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9346.
 */
cljs.core.async.__GT_t_cljs$core$async9346 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async9346(p__$1,ch__$1,meta9347){
return (new cljs.core.async.t_cljs$core$async9346(p__$1,ch__$1,meta9347));
});

}

return (new cljs.core.async.t_cljs$core$async9346(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__9350 = arguments.length;
switch (G__9350) {
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
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__7847__auto___9390 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7847__auto___9390,out){
return (function (){
var f__7848__auto__ = (function (){var switch__7745__auto__ = ((function (c__7847__auto___9390,out){
return (function (state_9371){
var state_val_9372 = (state_9371[(1)]);
if((state_val_9372 === (7))){
var inst_9367 = (state_9371[(2)]);
var state_9371__$1 = state_9371;
var statearr_9373_9391 = state_9371__$1;
(statearr_9373_9391[(2)] = inst_9367);

(statearr_9373_9391[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9372 === (1))){
var state_9371__$1 = state_9371;
var statearr_9374_9392 = state_9371__$1;
(statearr_9374_9392[(2)] = null);

(statearr_9374_9392[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9372 === (4))){
var inst_9353 = (state_9371[(7)]);
var inst_9353__$1 = (state_9371[(2)]);
var inst_9354 = (inst_9353__$1 == null);
var state_9371__$1 = (function (){var statearr_9375 = state_9371;
(statearr_9375[(7)] = inst_9353__$1);

return statearr_9375;
})();
if(cljs.core.truth_(inst_9354)){
var statearr_9376_9393 = state_9371__$1;
(statearr_9376_9393[(1)] = (5));

} else {
var statearr_9377_9394 = state_9371__$1;
(statearr_9377_9394[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9372 === (6))){
var inst_9353 = (state_9371[(7)]);
var inst_9358 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_9353) : p.call(null,inst_9353));
var state_9371__$1 = state_9371;
if(cljs.core.truth_(inst_9358)){
var statearr_9378_9395 = state_9371__$1;
(statearr_9378_9395[(1)] = (8));

} else {
var statearr_9379_9396 = state_9371__$1;
(statearr_9379_9396[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9372 === (3))){
var inst_9369 = (state_9371[(2)]);
var state_9371__$1 = state_9371;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9371__$1,inst_9369);
} else {
if((state_val_9372 === (2))){
var state_9371__$1 = state_9371;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9371__$1,(4),ch);
} else {
if((state_val_9372 === (11))){
var inst_9361 = (state_9371[(2)]);
var state_9371__$1 = state_9371;
var statearr_9380_9397 = state_9371__$1;
(statearr_9380_9397[(2)] = inst_9361);

(statearr_9380_9397[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9372 === (9))){
var state_9371__$1 = state_9371;
var statearr_9381_9398 = state_9371__$1;
(statearr_9381_9398[(2)] = null);

(statearr_9381_9398[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9372 === (5))){
var inst_9356 = cljs.core.async.close_BANG_(out);
var state_9371__$1 = state_9371;
var statearr_9382_9399 = state_9371__$1;
(statearr_9382_9399[(2)] = inst_9356);

(statearr_9382_9399[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9372 === (10))){
var inst_9364 = (state_9371[(2)]);
var state_9371__$1 = (function (){var statearr_9383 = state_9371;
(statearr_9383[(8)] = inst_9364);

return statearr_9383;
})();
var statearr_9384_9400 = state_9371__$1;
(statearr_9384_9400[(2)] = null);

(statearr_9384_9400[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9372 === (8))){
var inst_9353 = (state_9371[(7)]);
var state_9371__$1 = state_9371;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9371__$1,(11),out,inst_9353);
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
});})(c__7847__auto___9390,out))
;
return ((function (switch__7745__auto__,c__7847__auto___9390,out){
return (function() {
var cljs$core$async$state_machine__7746__auto__ = null;
var cljs$core$async$state_machine__7746__auto____0 = (function (){
var statearr_9385 = [null,null,null,null,null,null,null,null,null];
(statearr_9385[(0)] = cljs$core$async$state_machine__7746__auto__);

(statearr_9385[(1)] = (1));

return statearr_9385;
});
var cljs$core$async$state_machine__7746__auto____1 = (function (state_9371){
while(true){
var ret_value__7747__auto__ = (function (){try{while(true){
var result__7748__auto__ = switch__7745__auto__(state_9371);
if(cljs.core.keyword_identical_QMARK_(result__7748__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7748__auto__;
}
break;
}
}catch (e9386){if((e9386 instanceof Object)){
var ex__7749__auto__ = e9386;
var statearr_9387_9401 = state_9371;
(statearr_9387_9401[(5)] = ex__7749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9371);

return cljs.core.cst$kw$recur;
} else {
throw e9386;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7747__auto__,cljs.core.cst$kw$recur)){
var G__9402 = state_9371;
state_9371 = G__9402;
continue;
} else {
return ret_value__7747__auto__;
}
break;
}
});
cljs$core$async$state_machine__7746__auto__ = function(state_9371){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7746__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7746__auto____1.call(this,state_9371);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__7746__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7746__auto____0;
cljs$core$async$state_machine__7746__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7746__auto____1;
return cljs$core$async$state_machine__7746__auto__;
})()
;})(switch__7745__auto__,c__7847__auto___9390,out))
})();
var state__7849__auto__ = (function (){var statearr_9388 = (f__7848__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7848__auto__.cljs$core$IFn$_invoke$arity$0() : f__7848__auto__.call(null));
(statearr_9388[(6)] = c__7847__auto___9390);

return statearr_9388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7849__auto__);
});})(c__7847__auto___9390,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__9404 = arguments.length;
switch (G__9404) {
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
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__7847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7847__auto__){
return (function (){
var f__7848__auto__ = (function (){var switch__7745__auto__ = ((function (c__7847__auto__){
return (function (state_9467){
var state_val_9468 = (state_9467[(1)]);
if((state_val_9468 === (7))){
var inst_9463 = (state_9467[(2)]);
var state_9467__$1 = state_9467;
var statearr_9469_9507 = state_9467__$1;
(statearr_9469_9507[(2)] = inst_9463);

(statearr_9469_9507[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9468 === (20))){
var inst_9433 = (state_9467[(7)]);
var inst_9444 = (state_9467[(2)]);
var inst_9445 = cljs.core.next(inst_9433);
var inst_9419 = inst_9445;
var inst_9420 = null;
var inst_9421 = (0);
var inst_9422 = (0);
var state_9467__$1 = (function (){var statearr_9470 = state_9467;
(statearr_9470[(8)] = inst_9421);

(statearr_9470[(9)] = inst_9444);

(statearr_9470[(10)] = inst_9419);

(statearr_9470[(11)] = inst_9420);

(statearr_9470[(12)] = inst_9422);

return statearr_9470;
})();
var statearr_9471_9508 = state_9467__$1;
(statearr_9471_9508[(2)] = null);

(statearr_9471_9508[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9468 === (1))){
var state_9467__$1 = state_9467;
var statearr_9472_9509 = state_9467__$1;
(statearr_9472_9509[(2)] = null);

(statearr_9472_9509[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9468 === (4))){
var inst_9408 = (state_9467[(13)]);
var inst_9408__$1 = (state_9467[(2)]);
var inst_9409 = (inst_9408__$1 == null);
var state_9467__$1 = (function (){var statearr_9473 = state_9467;
(statearr_9473[(13)] = inst_9408__$1);

return statearr_9473;
})();
if(cljs.core.truth_(inst_9409)){
var statearr_9474_9510 = state_9467__$1;
(statearr_9474_9510[(1)] = (5));

} else {
var statearr_9475_9511 = state_9467__$1;
(statearr_9475_9511[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9468 === (15))){
var state_9467__$1 = state_9467;
var statearr_9479_9512 = state_9467__$1;
(statearr_9479_9512[(2)] = null);

(statearr_9479_9512[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9468 === (21))){
var state_9467__$1 = state_9467;
var statearr_9480_9513 = state_9467__$1;
(statearr_9480_9513[(2)] = null);

(statearr_9480_9513[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9468 === (13))){
var inst_9421 = (state_9467[(8)]);
var inst_9419 = (state_9467[(10)]);
var inst_9420 = (state_9467[(11)]);
var inst_9422 = (state_9467[(12)]);
var inst_9429 = (state_9467[(2)]);
var inst_9430 = (inst_9422 + (1));
var tmp9476 = inst_9421;
var tmp9477 = inst_9419;
var tmp9478 = inst_9420;
var inst_9419__$1 = tmp9477;
var inst_9420__$1 = tmp9478;
var inst_9421__$1 = tmp9476;
var inst_9422__$1 = inst_9430;
var state_9467__$1 = (function (){var statearr_9481 = state_9467;
(statearr_9481[(14)] = inst_9429);

(statearr_9481[(8)] = inst_9421__$1);

(statearr_9481[(10)] = inst_9419__$1);

(statearr_9481[(11)] = inst_9420__$1);

(statearr_9481[(12)] = inst_9422__$1);

return statearr_9481;
})();
var statearr_9482_9514 = state_9467__$1;
(statearr_9482_9514[(2)] = null);

(statearr_9482_9514[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9468 === (22))){
var state_9467__$1 = state_9467;
var statearr_9483_9515 = state_9467__$1;
(statearr_9483_9515[(2)] = null);

(statearr_9483_9515[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9468 === (6))){
var inst_9408 = (state_9467[(13)]);
var inst_9417 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_9408) : f.call(null,inst_9408));
var inst_9418 = cljs.core.seq(inst_9417);
var inst_9419 = inst_9418;
var inst_9420 = null;
var inst_9421 = (0);
var inst_9422 = (0);
var state_9467__$1 = (function (){var statearr_9484 = state_9467;
(statearr_9484[(8)] = inst_9421);

(statearr_9484[(10)] = inst_9419);

(statearr_9484[(11)] = inst_9420);

(statearr_9484[(12)] = inst_9422);

return statearr_9484;
})();
var statearr_9485_9516 = state_9467__$1;
(statearr_9485_9516[(2)] = null);

(statearr_9485_9516[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9468 === (17))){
var inst_9433 = (state_9467[(7)]);
var inst_9437 = cljs.core.chunk_first(inst_9433);
var inst_9438 = cljs.core.chunk_rest(inst_9433);
var inst_9439 = cljs.core.count(inst_9437);
var inst_9419 = inst_9438;
var inst_9420 = inst_9437;
var inst_9421 = inst_9439;
var inst_9422 = (0);
var state_9467__$1 = (function (){var statearr_9486 = state_9467;
(statearr_9486[(8)] = inst_9421);

(statearr_9486[(10)] = inst_9419);

(statearr_9486[(11)] = inst_9420);

(statearr_9486[(12)] = inst_9422);

return statearr_9486;
})();
var statearr_9487_9517 = state_9467__$1;
(statearr_9487_9517[(2)] = null);

(statearr_9487_9517[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9468 === (3))){
var inst_9465 = (state_9467[(2)]);
var state_9467__$1 = state_9467;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9467__$1,inst_9465);
} else {
if((state_val_9468 === (12))){
var inst_9453 = (state_9467[(2)]);
var state_9467__$1 = state_9467;
var statearr_9488_9518 = state_9467__$1;
(statearr_9488_9518[(2)] = inst_9453);

(statearr_9488_9518[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9468 === (2))){
var state_9467__$1 = state_9467;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9467__$1,(4),in$);
} else {
if((state_val_9468 === (23))){
var inst_9461 = (state_9467[(2)]);
var state_9467__$1 = state_9467;
var statearr_9489_9519 = state_9467__$1;
(statearr_9489_9519[(2)] = inst_9461);

(statearr_9489_9519[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9468 === (19))){
var inst_9448 = (state_9467[(2)]);
var state_9467__$1 = state_9467;
var statearr_9490_9520 = state_9467__$1;
(statearr_9490_9520[(2)] = inst_9448);

(statearr_9490_9520[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9468 === (11))){
var inst_9433 = (state_9467[(7)]);
var inst_9419 = (state_9467[(10)]);
var inst_9433__$1 = cljs.core.seq(inst_9419);
var state_9467__$1 = (function (){var statearr_9491 = state_9467;
(statearr_9491[(7)] = inst_9433__$1);

return statearr_9491;
})();
if(inst_9433__$1){
var statearr_9492_9521 = state_9467__$1;
(statearr_9492_9521[(1)] = (14));

} else {
var statearr_9493_9522 = state_9467__$1;
(statearr_9493_9522[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9468 === (9))){
var inst_9455 = (state_9467[(2)]);
var inst_9456 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_9467__$1 = (function (){var statearr_9494 = state_9467;
(statearr_9494[(15)] = inst_9455);

return statearr_9494;
})();
if(cljs.core.truth_(inst_9456)){
var statearr_9495_9523 = state_9467__$1;
(statearr_9495_9523[(1)] = (21));

} else {
var statearr_9496_9524 = state_9467__$1;
(statearr_9496_9524[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9468 === (5))){
var inst_9411 = cljs.core.async.close_BANG_(out);
var state_9467__$1 = state_9467;
var statearr_9497_9525 = state_9467__$1;
(statearr_9497_9525[(2)] = inst_9411);

(statearr_9497_9525[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9468 === (14))){
var inst_9433 = (state_9467[(7)]);
var inst_9435 = cljs.core.chunked_seq_QMARK_(inst_9433);
var state_9467__$1 = state_9467;
if(inst_9435){
var statearr_9498_9526 = state_9467__$1;
(statearr_9498_9526[(1)] = (17));

} else {
var statearr_9499_9527 = state_9467__$1;
(statearr_9499_9527[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9468 === (16))){
var inst_9451 = (state_9467[(2)]);
var state_9467__$1 = state_9467;
var statearr_9500_9528 = state_9467__$1;
(statearr_9500_9528[(2)] = inst_9451);

(statearr_9500_9528[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9468 === (10))){
var inst_9420 = (state_9467[(11)]);
var inst_9422 = (state_9467[(12)]);
var inst_9427 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_9420,inst_9422);
var state_9467__$1 = state_9467;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9467__$1,(13),out,inst_9427);
} else {
if((state_val_9468 === (18))){
var inst_9433 = (state_9467[(7)]);
var inst_9442 = cljs.core.first(inst_9433);
var state_9467__$1 = state_9467;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9467__$1,(20),out,inst_9442);
} else {
if((state_val_9468 === (8))){
var inst_9421 = (state_9467[(8)]);
var inst_9422 = (state_9467[(12)]);
var inst_9424 = (inst_9422 < inst_9421);
var inst_9425 = inst_9424;
var state_9467__$1 = state_9467;
if(cljs.core.truth_(inst_9425)){
var statearr_9501_9529 = state_9467__$1;
(statearr_9501_9529[(1)] = (10));

} else {
var statearr_9502_9530 = state_9467__$1;
(statearr_9502_9530[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__7847__auto__))
;
return ((function (switch__7745__auto__,c__7847__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__7746__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__7746__auto____0 = (function (){
var statearr_9503 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9503[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__7746__auto__);

(statearr_9503[(1)] = (1));

return statearr_9503;
});
var cljs$core$async$mapcat_STAR__$_state_machine__7746__auto____1 = (function (state_9467){
while(true){
var ret_value__7747__auto__ = (function (){try{while(true){
var result__7748__auto__ = switch__7745__auto__(state_9467);
if(cljs.core.keyword_identical_QMARK_(result__7748__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7748__auto__;
}
break;
}
}catch (e9504){if((e9504 instanceof Object)){
var ex__7749__auto__ = e9504;
var statearr_9505_9531 = state_9467;
(statearr_9505_9531[(5)] = ex__7749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9467);

return cljs.core.cst$kw$recur;
} else {
throw e9504;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7747__auto__,cljs.core.cst$kw$recur)){
var G__9532 = state_9467;
state_9467 = G__9532;
continue;
} else {
return ret_value__7747__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__7746__auto__ = function(state_9467){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__7746__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__7746__auto____1.call(this,state_9467);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__7746__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__7746__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__7746__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__7746__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__7746__auto__;
})()
;})(switch__7745__auto__,c__7847__auto__))
})();
var state__7849__auto__ = (function (){var statearr_9506 = (f__7848__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7848__auto__.cljs$core$IFn$_invoke$arity$0() : f__7848__auto__.call(null));
(statearr_9506[(6)] = c__7847__auto__);

return statearr_9506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7849__auto__);
});})(c__7847__auto__))
);

return c__7847__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__9534 = arguments.length;
switch (G__9534) {
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
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__9537 = arguments.length;
switch (G__9537) {
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
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__9540 = arguments.length;
switch (G__9540) {
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
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__7847__auto___9587 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7847__auto___9587,out){
return (function (){
var f__7848__auto__ = (function (){var switch__7745__auto__ = ((function (c__7847__auto___9587,out){
return (function (state_9564){
var state_val_9565 = (state_9564[(1)]);
if((state_val_9565 === (7))){
var inst_9559 = (state_9564[(2)]);
var state_9564__$1 = state_9564;
var statearr_9566_9588 = state_9564__$1;
(statearr_9566_9588[(2)] = inst_9559);

(statearr_9566_9588[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9565 === (1))){
var inst_9541 = null;
var state_9564__$1 = (function (){var statearr_9567 = state_9564;
(statearr_9567[(7)] = inst_9541);

return statearr_9567;
})();
var statearr_9568_9589 = state_9564__$1;
(statearr_9568_9589[(2)] = null);

(statearr_9568_9589[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9565 === (4))){
var inst_9544 = (state_9564[(8)]);
var inst_9544__$1 = (state_9564[(2)]);
var inst_9545 = (inst_9544__$1 == null);
var inst_9546 = cljs.core.not(inst_9545);
var state_9564__$1 = (function (){var statearr_9569 = state_9564;
(statearr_9569[(8)] = inst_9544__$1);

return statearr_9569;
})();
if(inst_9546){
var statearr_9570_9590 = state_9564__$1;
(statearr_9570_9590[(1)] = (5));

} else {
var statearr_9571_9591 = state_9564__$1;
(statearr_9571_9591[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9565 === (6))){
var state_9564__$1 = state_9564;
var statearr_9572_9592 = state_9564__$1;
(statearr_9572_9592[(2)] = null);

(statearr_9572_9592[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9565 === (3))){
var inst_9561 = (state_9564[(2)]);
var inst_9562 = cljs.core.async.close_BANG_(out);
var state_9564__$1 = (function (){var statearr_9573 = state_9564;
(statearr_9573[(9)] = inst_9561);

return statearr_9573;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_9564__$1,inst_9562);
} else {
if((state_val_9565 === (2))){
var state_9564__$1 = state_9564;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9564__$1,(4),ch);
} else {
if((state_val_9565 === (11))){
var inst_9544 = (state_9564[(8)]);
var inst_9553 = (state_9564[(2)]);
var inst_9541 = inst_9544;
var state_9564__$1 = (function (){var statearr_9574 = state_9564;
(statearr_9574[(7)] = inst_9541);

(statearr_9574[(10)] = inst_9553);

return statearr_9574;
})();
var statearr_9575_9593 = state_9564__$1;
(statearr_9575_9593[(2)] = null);

(statearr_9575_9593[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9565 === (9))){
var inst_9544 = (state_9564[(8)]);
var state_9564__$1 = state_9564;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9564__$1,(11),out,inst_9544);
} else {
if((state_val_9565 === (5))){
var inst_9541 = (state_9564[(7)]);
var inst_9544 = (state_9564[(8)]);
var inst_9548 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_9544,inst_9541);
var state_9564__$1 = state_9564;
if(inst_9548){
var statearr_9577_9594 = state_9564__$1;
(statearr_9577_9594[(1)] = (8));

} else {
var statearr_9578_9595 = state_9564__$1;
(statearr_9578_9595[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9565 === (10))){
var inst_9556 = (state_9564[(2)]);
var state_9564__$1 = state_9564;
var statearr_9579_9596 = state_9564__$1;
(statearr_9579_9596[(2)] = inst_9556);

(statearr_9579_9596[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9565 === (8))){
var inst_9541 = (state_9564[(7)]);
var tmp9576 = inst_9541;
var inst_9541__$1 = tmp9576;
var state_9564__$1 = (function (){var statearr_9580 = state_9564;
(statearr_9580[(7)] = inst_9541__$1);

return statearr_9580;
})();
var statearr_9581_9597 = state_9564__$1;
(statearr_9581_9597[(2)] = null);

(statearr_9581_9597[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__7847__auto___9587,out))
;
return ((function (switch__7745__auto__,c__7847__auto___9587,out){
return (function() {
var cljs$core$async$state_machine__7746__auto__ = null;
var cljs$core$async$state_machine__7746__auto____0 = (function (){
var statearr_9582 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9582[(0)] = cljs$core$async$state_machine__7746__auto__);

(statearr_9582[(1)] = (1));

return statearr_9582;
});
var cljs$core$async$state_machine__7746__auto____1 = (function (state_9564){
while(true){
var ret_value__7747__auto__ = (function (){try{while(true){
var result__7748__auto__ = switch__7745__auto__(state_9564);
if(cljs.core.keyword_identical_QMARK_(result__7748__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7748__auto__;
}
break;
}
}catch (e9583){if((e9583 instanceof Object)){
var ex__7749__auto__ = e9583;
var statearr_9584_9598 = state_9564;
(statearr_9584_9598[(5)] = ex__7749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9564);

return cljs.core.cst$kw$recur;
} else {
throw e9583;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7747__auto__,cljs.core.cst$kw$recur)){
var G__9599 = state_9564;
state_9564 = G__9599;
continue;
} else {
return ret_value__7747__auto__;
}
break;
}
});
cljs$core$async$state_machine__7746__auto__ = function(state_9564){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7746__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7746__auto____1.call(this,state_9564);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__7746__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7746__auto____0;
cljs$core$async$state_machine__7746__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7746__auto____1;
return cljs$core$async$state_machine__7746__auto__;
})()
;})(switch__7745__auto__,c__7847__auto___9587,out))
})();
var state__7849__auto__ = (function (){var statearr_9585 = (f__7848__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7848__auto__.cljs$core$IFn$_invoke$arity$0() : f__7848__auto__.call(null));
(statearr_9585[(6)] = c__7847__auto___9587);

return statearr_9585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7849__auto__);
});})(c__7847__auto___9587,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__9601 = arguments.length;
switch (G__9601) {
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
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__7847__auto___9667 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7847__auto___9667,out){
return (function (){
var f__7848__auto__ = (function (){var switch__7745__auto__ = ((function (c__7847__auto___9667,out){
return (function (state_9639){
var state_val_9640 = (state_9639[(1)]);
if((state_val_9640 === (7))){
var inst_9635 = (state_9639[(2)]);
var state_9639__$1 = state_9639;
var statearr_9641_9668 = state_9639__$1;
(statearr_9641_9668[(2)] = inst_9635);

(statearr_9641_9668[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9640 === (1))){
var inst_9602 = (new Array(n));
var inst_9603 = inst_9602;
var inst_9604 = (0);
var state_9639__$1 = (function (){var statearr_9642 = state_9639;
(statearr_9642[(7)] = inst_9603);

(statearr_9642[(8)] = inst_9604);

return statearr_9642;
})();
var statearr_9643_9669 = state_9639__$1;
(statearr_9643_9669[(2)] = null);

(statearr_9643_9669[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9640 === (4))){
var inst_9607 = (state_9639[(9)]);
var inst_9607__$1 = (state_9639[(2)]);
var inst_9608 = (inst_9607__$1 == null);
var inst_9609 = cljs.core.not(inst_9608);
var state_9639__$1 = (function (){var statearr_9644 = state_9639;
(statearr_9644[(9)] = inst_9607__$1);

return statearr_9644;
})();
if(inst_9609){
var statearr_9645_9670 = state_9639__$1;
(statearr_9645_9670[(1)] = (5));

} else {
var statearr_9646_9671 = state_9639__$1;
(statearr_9646_9671[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9640 === (15))){
var inst_9629 = (state_9639[(2)]);
var state_9639__$1 = state_9639;
var statearr_9647_9672 = state_9639__$1;
(statearr_9647_9672[(2)] = inst_9629);

(statearr_9647_9672[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9640 === (13))){
var state_9639__$1 = state_9639;
var statearr_9648_9673 = state_9639__$1;
(statearr_9648_9673[(2)] = null);

(statearr_9648_9673[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9640 === (6))){
var inst_9604 = (state_9639[(8)]);
var inst_9625 = (inst_9604 > (0));
var state_9639__$1 = state_9639;
if(cljs.core.truth_(inst_9625)){
var statearr_9649_9674 = state_9639__$1;
(statearr_9649_9674[(1)] = (12));

} else {
var statearr_9650_9675 = state_9639__$1;
(statearr_9650_9675[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9640 === (3))){
var inst_9637 = (state_9639[(2)]);
var state_9639__$1 = state_9639;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9639__$1,inst_9637);
} else {
if((state_val_9640 === (12))){
var inst_9603 = (state_9639[(7)]);
var inst_9627 = cljs.core.vec(inst_9603);
var state_9639__$1 = state_9639;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9639__$1,(15),out,inst_9627);
} else {
if((state_val_9640 === (2))){
var state_9639__$1 = state_9639;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9639__$1,(4),ch);
} else {
if((state_val_9640 === (11))){
var inst_9619 = (state_9639[(2)]);
var inst_9620 = (new Array(n));
var inst_9603 = inst_9620;
var inst_9604 = (0);
var state_9639__$1 = (function (){var statearr_9651 = state_9639;
(statearr_9651[(10)] = inst_9619);

(statearr_9651[(7)] = inst_9603);

(statearr_9651[(8)] = inst_9604);

return statearr_9651;
})();
var statearr_9652_9676 = state_9639__$1;
(statearr_9652_9676[(2)] = null);

(statearr_9652_9676[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9640 === (9))){
var inst_9603 = (state_9639[(7)]);
var inst_9617 = cljs.core.vec(inst_9603);
var state_9639__$1 = state_9639;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9639__$1,(11),out,inst_9617);
} else {
if((state_val_9640 === (5))){
var inst_9607 = (state_9639[(9)]);
var inst_9612 = (state_9639[(11)]);
var inst_9603 = (state_9639[(7)]);
var inst_9604 = (state_9639[(8)]);
var inst_9611 = (inst_9603[inst_9604] = inst_9607);
var inst_9612__$1 = (inst_9604 + (1));
var inst_9613 = (inst_9612__$1 < n);
var state_9639__$1 = (function (){var statearr_9653 = state_9639;
(statearr_9653[(11)] = inst_9612__$1);

(statearr_9653[(12)] = inst_9611);

return statearr_9653;
})();
if(cljs.core.truth_(inst_9613)){
var statearr_9654_9677 = state_9639__$1;
(statearr_9654_9677[(1)] = (8));

} else {
var statearr_9655_9678 = state_9639__$1;
(statearr_9655_9678[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9640 === (14))){
var inst_9632 = (state_9639[(2)]);
var inst_9633 = cljs.core.async.close_BANG_(out);
var state_9639__$1 = (function (){var statearr_9657 = state_9639;
(statearr_9657[(13)] = inst_9632);

return statearr_9657;
})();
var statearr_9658_9679 = state_9639__$1;
(statearr_9658_9679[(2)] = inst_9633);

(statearr_9658_9679[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9640 === (10))){
var inst_9623 = (state_9639[(2)]);
var state_9639__$1 = state_9639;
var statearr_9659_9680 = state_9639__$1;
(statearr_9659_9680[(2)] = inst_9623);

(statearr_9659_9680[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9640 === (8))){
var inst_9612 = (state_9639[(11)]);
var inst_9603 = (state_9639[(7)]);
var tmp9656 = inst_9603;
var inst_9603__$1 = tmp9656;
var inst_9604 = inst_9612;
var state_9639__$1 = (function (){var statearr_9660 = state_9639;
(statearr_9660[(7)] = inst_9603__$1);

(statearr_9660[(8)] = inst_9604);

return statearr_9660;
})();
var statearr_9661_9681 = state_9639__$1;
(statearr_9661_9681[(2)] = null);

(statearr_9661_9681[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__7847__auto___9667,out))
;
return ((function (switch__7745__auto__,c__7847__auto___9667,out){
return (function() {
var cljs$core$async$state_machine__7746__auto__ = null;
var cljs$core$async$state_machine__7746__auto____0 = (function (){
var statearr_9662 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9662[(0)] = cljs$core$async$state_machine__7746__auto__);

(statearr_9662[(1)] = (1));

return statearr_9662;
});
var cljs$core$async$state_machine__7746__auto____1 = (function (state_9639){
while(true){
var ret_value__7747__auto__ = (function (){try{while(true){
var result__7748__auto__ = switch__7745__auto__(state_9639);
if(cljs.core.keyword_identical_QMARK_(result__7748__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7748__auto__;
}
break;
}
}catch (e9663){if((e9663 instanceof Object)){
var ex__7749__auto__ = e9663;
var statearr_9664_9682 = state_9639;
(statearr_9664_9682[(5)] = ex__7749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9639);

return cljs.core.cst$kw$recur;
} else {
throw e9663;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7747__auto__,cljs.core.cst$kw$recur)){
var G__9683 = state_9639;
state_9639 = G__9683;
continue;
} else {
return ret_value__7747__auto__;
}
break;
}
});
cljs$core$async$state_machine__7746__auto__ = function(state_9639){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7746__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7746__auto____1.call(this,state_9639);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__7746__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7746__auto____0;
cljs$core$async$state_machine__7746__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7746__auto____1;
return cljs$core$async$state_machine__7746__auto__;
})()
;})(switch__7745__auto__,c__7847__auto___9667,out))
})();
var state__7849__auto__ = (function (){var statearr_9665 = (f__7848__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7848__auto__.cljs$core$IFn$_invoke$arity$0() : f__7848__auto__.call(null));
(statearr_9665[(6)] = c__7847__auto___9667);

return statearr_9665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7849__auto__);
});})(c__7847__auto___9667,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__9685 = arguments.length;
switch (G__9685) {
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
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__7847__auto___9755 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7847__auto___9755,out){
return (function (){
var f__7848__auto__ = (function (){var switch__7745__auto__ = ((function (c__7847__auto___9755,out){
return (function (state_9727){
var state_val_9728 = (state_9727[(1)]);
if((state_val_9728 === (7))){
var inst_9723 = (state_9727[(2)]);
var state_9727__$1 = state_9727;
var statearr_9729_9756 = state_9727__$1;
(statearr_9729_9756[(2)] = inst_9723);

(statearr_9729_9756[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9728 === (1))){
var inst_9686 = [];
var inst_9687 = inst_9686;
var inst_9688 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_9727__$1 = (function (){var statearr_9730 = state_9727;
(statearr_9730[(7)] = inst_9688);

(statearr_9730[(8)] = inst_9687);

return statearr_9730;
})();
var statearr_9731_9757 = state_9727__$1;
(statearr_9731_9757[(2)] = null);

(statearr_9731_9757[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9728 === (4))){
var inst_9691 = (state_9727[(9)]);
var inst_9691__$1 = (state_9727[(2)]);
var inst_9692 = (inst_9691__$1 == null);
var inst_9693 = cljs.core.not(inst_9692);
var state_9727__$1 = (function (){var statearr_9732 = state_9727;
(statearr_9732[(9)] = inst_9691__$1);

return statearr_9732;
})();
if(inst_9693){
var statearr_9733_9758 = state_9727__$1;
(statearr_9733_9758[(1)] = (5));

} else {
var statearr_9734_9759 = state_9727__$1;
(statearr_9734_9759[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9728 === (15))){
var inst_9717 = (state_9727[(2)]);
var state_9727__$1 = state_9727;
var statearr_9735_9760 = state_9727__$1;
(statearr_9735_9760[(2)] = inst_9717);

(statearr_9735_9760[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9728 === (13))){
var state_9727__$1 = state_9727;
var statearr_9736_9761 = state_9727__$1;
(statearr_9736_9761[(2)] = null);

(statearr_9736_9761[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9728 === (6))){
var inst_9687 = (state_9727[(8)]);
var inst_9712 = inst_9687.length;
var inst_9713 = (inst_9712 > (0));
var state_9727__$1 = state_9727;
if(cljs.core.truth_(inst_9713)){
var statearr_9737_9762 = state_9727__$1;
(statearr_9737_9762[(1)] = (12));

} else {
var statearr_9738_9763 = state_9727__$1;
(statearr_9738_9763[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9728 === (3))){
var inst_9725 = (state_9727[(2)]);
var state_9727__$1 = state_9727;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9727__$1,inst_9725);
} else {
if((state_val_9728 === (12))){
var inst_9687 = (state_9727[(8)]);
var inst_9715 = cljs.core.vec(inst_9687);
var state_9727__$1 = state_9727;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9727__$1,(15),out,inst_9715);
} else {
if((state_val_9728 === (2))){
var state_9727__$1 = state_9727;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9727__$1,(4),ch);
} else {
if((state_val_9728 === (11))){
var inst_9695 = (state_9727[(10)]);
var inst_9691 = (state_9727[(9)]);
var inst_9705 = (state_9727[(2)]);
var inst_9706 = [];
var inst_9707 = inst_9706.push(inst_9691);
var inst_9687 = inst_9706;
var inst_9688 = inst_9695;
var state_9727__$1 = (function (){var statearr_9739 = state_9727;
(statearr_9739[(7)] = inst_9688);

(statearr_9739[(8)] = inst_9687);

(statearr_9739[(11)] = inst_9705);

(statearr_9739[(12)] = inst_9707);

return statearr_9739;
})();
var statearr_9740_9764 = state_9727__$1;
(statearr_9740_9764[(2)] = null);

(statearr_9740_9764[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9728 === (9))){
var inst_9687 = (state_9727[(8)]);
var inst_9703 = cljs.core.vec(inst_9687);
var state_9727__$1 = state_9727;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9727__$1,(11),out,inst_9703);
} else {
if((state_val_9728 === (5))){
var inst_9688 = (state_9727[(7)]);
var inst_9695 = (state_9727[(10)]);
var inst_9691 = (state_9727[(9)]);
var inst_9695__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_9691) : f.call(null,inst_9691));
var inst_9696 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_9695__$1,inst_9688);
var inst_9697 = cljs.core.keyword_identical_QMARK_(inst_9688,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_9698 = ((inst_9696) || (inst_9697));
var state_9727__$1 = (function (){var statearr_9741 = state_9727;
(statearr_9741[(10)] = inst_9695__$1);

return statearr_9741;
})();
if(cljs.core.truth_(inst_9698)){
var statearr_9742_9765 = state_9727__$1;
(statearr_9742_9765[(1)] = (8));

} else {
var statearr_9743_9766 = state_9727__$1;
(statearr_9743_9766[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9728 === (14))){
var inst_9720 = (state_9727[(2)]);
var inst_9721 = cljs.core.async.close_BANG_(out);
var state_9727__$1 = (function (){var statearr_9745 = state_9727;
(statearr_9745[(13)] = inst_9720);

return statearr_9745;
})();
var statearr_9746_9767 = state_9727__$1;
(statearr_9746_9767[(2)] = inst_9721);

(statearr_9746_9767[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9728 === (10))){
var inst_9710 = (state_9727[(2)]);
var state_9727__$1 = state_9727;
var statearr_9747_9768 = state_9727__$1;
(statearr_9747_9768[(2)] = inst_9710);

(statearr_9747_9768[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9728 === (8))){
var inst_9687 = (state_9727[(8)]);
var inst_9695 = (state_9727[(10)]);
var inst_9691 = (state_9727[(9)]);
var inst_9700 = inst_9687.push(inst_9691);
var tmp9744 = inst_9687;
var inst_9687__$1 = tmp9744;
var inst_9688 = inst_9695;
var state_9727__$1 = (function (){var statearr_9748 = state_9727;
(statearr_9748[(7)] = inst_9688);

(statearr_9748[(8)] = inst_9687__$1);

(statearr_9748[(14)] = inst_9700);

return statearr_9748;
})();
var statearr_9749_9769 = state_9727__$1;
(statearr_9749_9769[(2)] = null);

(statearr_9749_9769[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__7847__auto___9755,out))
;
return ((function (switch__7745__auto__,c__7847__auto___9755,out){
return (function() {
var cljs$core$async$state_machine__7746__auto__ = null;
var cljs$core$async$state_machine__7746__auto____0 = (function (){
var statearr_9750 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9750[(0)] = cljs$core$async$state_machine__7746__auto__);

(statearr_9750[(1)] = (1));

return statearr_9750;
});
var cljs$core$async$state_machine__7746__auto____1 = (function (state_9727){
while(true){
var ret_value__7747__auto__ = (function (){try{while(true){
var result__7748__auto__ = switch__7745__auto__(state_9727);
if(cljs.core.keyword_identical_QMARK_(result__7748__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7748__auto__;
}
break;
}
}catch (e9751){if((e9751 instanceof Object)){
var ex__7749__auto__ = e9751;
var statearr_9752_9770 = state_9727;
(statearr_9752_9770[(5)] = ex__7749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9727);

return cljs.core.cst$kw$recur;
} else {
throw e9751;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7747__auto__,cljs.core.cst$kw$recur)){
var G__9771 = state_9727;
state_9727 = G__9771;
continue;
} else {
return ret_value__7747__auto__;
}
break;
}
});
cljs$core$async$state_machine__7746__auto__ = function(state_9727){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7746__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7746__auto____1.call(this,state_9727);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__7746__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7746__auto____0;
cljs$core$async$state_machine__7746__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7746__auto____1;
return cljs$core$async$state_machine__7746__auto__;
})()
;})(switch__7745__auto__,c__7847__auto___9755,out))
})();
var state__7849__auto__ = (function (){var statearr_9753 = (f__7848__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7848__auto__.cljs$core$IFn$_invoke$arity$0() : f__7848__auto__.call(null));
(statearr_9753[(6)] = c__7847__auto___9755);

return statearr_9753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7849__auto__);
});})(c__7847__auto___9755,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

