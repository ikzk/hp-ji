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
var G__7911 = arguments.length;
switch (G__7911) {
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
if(typeof cljs.core.async.t_cljs$core$async7912 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7912 = (function (f,blockable,meta7913){
this.f = f;
this.blockable = blockable;
this.meta7913 = meta7913;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7912.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7914,meta7913__$1){
var self__ = this;
var _7914__$1 = this;
return (new cljs.core.async.t_cljs$core$async7912(self__.f,self__.blockable,meta7913__$1));
});

cljs.core.async.t_cljs$core$async7912.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7914){
var self__ = this;
var _7914__$1 = this;
return self__.meta7913;
});

cljs.core.async.t_cljs$core$async7912.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7912.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async7912.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async7912.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async7912.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta7913], null);
});

cljs.core.async.t_cljs$core$async7912.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7912.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7912";

cljs.core.async.t_cljs$core$async7912.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async7912");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7912.
 */
cljs.core.async.__GT_t_cljs$core$async7912 = (function cljs$core$async$__GT_t_cljs$core$async7912(f__$1,blockable__$1,meta7913){
return (new cljs.core.async.t_cljs$core$async7912(f__$1,blockable__$1,meta7913));
});

}

return (new cljs.core.async.t_cljs$core$async7912(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__7918 = arguments.length;
switch (G__7918) {
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
var G__7921 = arguments.length;
switch (G__7921) {
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
var G__7924 = arguments.length;
switch (G__7924) {
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
var val_7926 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_7926) : fn1.call(null,val_7926));
} else {
cljs.core.async.impl.dispatch.run(((function (val_7926,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_7926) : fn1.call(null,val_7926));
});})(val_7926,ret))
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
var G__7928 = arguments.length;
switch (G__7928) {
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
var n__4376__auto___7930 = n;
var x_7931 = (0);
while(true){
if((x_7931 < n__4376__auto___7930)){
(a[x_7931] = (0));

var G__7932 = (x_7931 + (1));
x_7931 = G__7932;
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

var G__7933 = (i + (1));
i = G__7933;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if(typeof cljs.core.async.t_cljs$core$async7934 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7934 = (function (flag,meta7935){
this.flag = flag;
this.meta7935 = meta7935;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_7936,meta7935__$1){
var self__ = this;
var _7936__$1 = this;
return (new cljs.core.async.t_cljs$core$async7934(self__.flag,meta7935__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async7934.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_7936){
var self__ = this;
var _7936__$1 = this;
return self__.meta7935;
});})(flag))
;

cljs.core.async.t_cljs$core$async7934.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7934.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async7934.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async7934.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async7934.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta7935], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async7934.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7934.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7934";

cljs.core.async.t_cljs$core$async7934.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async7934");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7934.
 */
cljs.core.async.__GT_t_cljs$core$async7934 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async7934(flag__$1,meta7935){
return (new cljs.core.async.t_cljs$core$async7934(flag__$1,meta7935));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async7934(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async7937 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7937 = (function (flag,cb,meta7938){
this.flag = flag;
this.cb = cb;
this.meta7938 = meta7938;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7937.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7939,meta7938__$1){
var self__ = this;
var _7939__$1 = this;
return (new cljs.core.async.t_cljs$core$async7937(self__.flag,self__.cb,meta7938__$1));
});

cljs.core.async.t_cljs$core$async7937.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7939){
var self__ = this;
var _7939__$1 = this;
return self__.meta7938;
});

cljs.core.async.t_cljs$core$async7937.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7937.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async7937.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async7937.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async7937.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta7938], null);
});

cljs.core.async.t_cljs$core$async7937.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7937.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7937";

cljs.core.async.t_cljs$core$async7937.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async7937");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7937.
 */
cljs.core.async.__GT_t_cljs$core$async7937 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async7937(flag__$1,cb__$1,meta7938){
return (new cljs.core.async.t_cljs$core$async7937(flag__$1,cb__$1,meta7938));
});

}

return (new cljs.core.async.t_cljs$core$async7937(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__7940_SHARP_){
var G__7942 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__7940_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__7942) : fret.call(null,G__7942));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__7941_SHARP_){
var G__7943 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__7941_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__7943) : fret.call(null,G__7943));
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
var G__7944 = (i + (1));
i = G__7944;
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
var len__4499__auto___7950 = arguments.length;
var i__4500__auto___7951 = (0);
while(true){
if((i__4500__auto___7951 < len__4499__auto___7950)){
args__4502__auto__.push((arguments[i__4500__auto___7951]));

var G__7952 = (i__4500__auto___7951 + (1));
i__4500__auto___7951 = G__7952;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__7947){
var map__7948 = p__7947;
var map__7948__$1 = ((((!((map__7948 == null)))?(((((map__7948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7948):map__7948);
var opts = map__7948__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq7945){
var G__7946 = cljs.core.first(seq7945);
var seq7945__$1 = cljs.core.next(seq7945);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7946,seq7945__$1);
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
var G__7954 = arguments.length;
switch (G__7954) {
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
var c__7851__auto___8000 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7851__auto___8000){
return (function (){
var f__7852__auto__ = (function (){var switch__7749__auto__ = ((function (c__7851__auto___8000){
return (function (state_7978){
var state_val_7979 = (state_7978[(1)]);
if((state_val_7979 === (7))){
var inst_7974 = (state_7978[(2)]);
var state_7978__$1 = state_7978;
var statearr_7980_8001 = state_7978__$1;
(statearr_7980_8001[(2)] = inst_7974);

(statearr_7980_8001[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7979 === (1))){
var state_7978__$1 = state_7978;
var statearr_7981_8002 = state_7978__$1;
(statearr_7981_8002[(2)] = null);

(statearr_7981_8002[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7979 === (4))){
var inst_7957 = (state_7978[(7)]);
var inst_7957__$1 = (state_7978[(2)]);
var inst_7958 = (inst_7957__$1 == null);
var state_7978__$1 = (function (){var statearr_7982 = state_7978;
(statearr_7982[(7)] = inst_7957__$1);

return statearr_7982;
})();
if(cljs.core.truth_(inst_7958)){
var statearr_7983_8003 = state_7978__$1;
(statearr_7983_8003[(1)] = (5));

} else {
var statearr_7984_8004 = state_7978__$1;
(statearr_7984_8004[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7979 === (13))){
var state_7978__$1 = state_7978;
var statearr_7985_8005 = state_7978__$1;
(statearr_7985_8005[(2)] = null);

(statearr_7985_8005[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7979 === (6))){
var inst_7957 = (state_7978[(7)]);
var state_7978__$1 = state_7978;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_7978__$1,(11),to,inst_7957);
} else {
if((state_val_7979 === (3))){
var inst_7976 = (state_7978[(2)]);
var state_7978__$1 = state_7978;
return cljs.core.async.impl.ioc_helpers.return_chan(state_7978__$1,inst_7976);
} else {
if((state_val_7979 === (12))){
var state_7978__$1 = state_7978;
var statearr_7986_8006 = state_7978__$1;
(statearr_7986_8006[(2)] = null);

(statearr_7986_8006[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7979 === (2))){
var state_7978__$1 = state_7978;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7978__$1,(4),from);
} else {
if((state_val_7979 === (11))){
var inst_7967 = (state_7978[(2)]);
var state_7978__$1 = state_7978;
if(cljs.core.truth_(inst_7967)){
var statearr_7987_8007 = state_7978__$1;
(statearr_7987_8007[(1)] = (12));

} else {
var statearr_7988_8008 = state_7978__$1;
(statearr_7988_8008[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7979 === (9))){
var state_7978__$1 = state_7978;
var statearr_7989_8009 = state_7978__$1;
(statearr_7989_8009[(2)] = null);

(statearr_7989_8009[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7979 === (5))){
var state_7978__$1 = state_7978;
if(cljs.core.truth_(close_QMARK_)){
var statearr_7990_8010 = state_7978__$1;
(statearr_7990_8010[(1)] = (8));

} else {
var statearr_7991_8011 = state_7978__$1;
(statearr_7991_8011[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7979 === (14))){
var inst_7972 = (state_7978[(2)]);
var state_7978__$1 = state_7978;
var statearr_7992_8012 = state_7978__$1;
(statearr_7992_8012[(2)] = inst_7972);

(statearr_7992_8012[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7979 === (10))){
var inst_7964 = (state_7978[(2)]);
var state_7978__$1 = state_7978;
var statearr_7993_8013 = state_7978__$1;
(statearr_7993_8013[(2)] = inst_7964);

(statearr_7993_8013[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7979 === (8))){
var inst_7961 = cljs.core.async.close_BANG_(to);
var state_7978__$1 = state_7978;
var statearr_7994_8014 = state_7978__$1;
(statearr_7994_8014[(2)] = inst_7961);

(statearr_7994_8014[(1)] = (10));


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
});})(c__7851__auto___8000))
;
return ((function (switch__7749__auto__,c__7851__auto___8000){
return (function() {
var cljs$core$async$state_machine__7750__auto__ = null;
var cljs$core$async$state_machine__7750__auto____0 = (function (){
var statearr_7995 = [null,null,null,null,null,null,null,null];
(statearr_7995[(0)] = cljs$core$async$state_machine__7750__auto__);

(statearr_7995[(1)] = (1));

return statearr_7995;
});
var cljs$core$async$state_machine__7750__auto____1 = (function (state_7978){
while(true){
var ret_value__7751__auto__ = (function (){try{while(true){
var result__7752__auto__ = switch__7749__auto__(state_7978);
if(cljs.core.keyword_identical_QMARK_(result__7752__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7752__auto__;
}
break;
}
}catch (e7996){if((e7996 instanceof Object)){
var ex__7753__auto__ = e7996;
var statearr_7997_8015 = state_7978;
(statearr_7997_8015[(5)] = ex__7753__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7978);

return cljs.core.cst$kw$recur;
} else {
throw e7996;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7751__auto__,cljs.core.cst$kw$recur)){
var G__8016 = state_7978;
state_7978 = G__8016;
continue;
} else {
return ret_value__7751__auto__;
}
break;
}
});
cljs$core$async$state_machine__7750__auto__ = function(state_7978){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7750__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7750__auto____1.call(this,state_7978);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__7750__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7750__auto____0;
cljs$core$async$state_machine__7750__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7750__auto____1;
return cljs$core$async$state_machine__7750__auto__;
})()
;})(switch__7749__auto__,c__7851__auto___8000))
})();
var state__7853__auto__ = (function (){var statearr_7998 = (f__7852__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7852__auto__.cljs$core$IFn$_invoke$arity$0() : f__7852__auto__.call(null));
(statearr_7998[(6)] = c__7851__auto___8000);

return statearr_7998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7853__auto__);
});})(c__7851__auto___8000))
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
return (function (p__8017){
var vec__8018 = p__8017;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8018,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8018,(1),null);
var job = vec__8018;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__7851__auto___8189 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7851__auto___8189,res,vec__8018,v,p,job,jobs,results){
return (function (){
var f__7852__auto__ = (function (){var switch__7749__auto__ = ((function (c__7851__auto___8189,res,vec__8018,v,p,job,jobs,results){
return (function (state_8025){
var state_val_8026 = (state_8025[(1)]);
if((state_val_8026 === (1))){
var state_8025__$1 = state_8025;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8025__$1,(2),res,v);
} else {
if((state_val_8026 === (2))){
var inst_8022 = (state_8025[(2)]);
var inst_8023 = cljs.core.async.close_BANG_(res);
var state_8025__$1 = (function (){var statearr_8027 = state_8025;
(statearr_8027[(7)] = inst_8022);

return statearr_8027;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_8025__$1,inst_8023);
} else {
return null;
}
}
});})(c__7851__auto___8189,res,vec__8018,v,p,job,jobs,results))
;
return ((function (switch__7749__auto__,c__7851__auto___8189,res,vec__8018,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7750__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7750__auto____0 = (function (){
var statearr_8028 = [null,null,null,null,null,null,null,null];
(statearr_8028[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7750__auto__);

(statearr_8028[(1)] = (1));

return statearr_8028;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7750__auto____1 = (function (state_8025){
while(true){
var ret_value__7751__auto__ = (function (){try{while(true){
var result__7752__auto__ = switch__7749__auto__(state_8025);
if(cljs.core.keyword_identical_QMARK_(result__7752__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7752__auto__;
}
break;
}
}catch (e8029){if((e8029 instanceof Object)){
var ex__7753__auto__ = e8029;
var statearr_8030_8190 = state_8025;
(statearr_8030_8190[(5)] = ex__7753__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8025);

return cljs.core.cst$kw$recur;
} else {
throw e8029;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7751__auto__,cljs.core.cst$kw$recur)){
var G__8191 = state_8025;
state_8025 = G__8191;
continue;
} else {
return ret_value__7751__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7750__auto__ = function(state_8025){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7750__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7750__auto____1.call(this,state_8025);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__7750__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7750__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7750__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7750__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7750__auto__;
})()
;})(switch__7749__auto__,c__7851__auto___8189,res,vec__8018,v,p,job,jobs,results))
})();
var state__7853__auto__ = (function (){var statearr_8031 = (f__7852__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7852__auto__.cljs$core$IFn$_invoke$arity$0() : f__7852__auto__.call(null));
(statearr_8031[(6)] = c__7851__auto___8189);

return statearr_8031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7853__auto__);
});})(c__7851__auto___8189,res,vec__8018,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__8032){
var vec__8033 = p__8032;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8033,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8033,(1),null);
var job = vec__8033;
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
var n__4376__auto___8192 = n;
var __8193 = (0);
while(true){
if((__8193 < n__4376__auto___8192)){
var G__8036_8194 = type;
var G__8036_8195__$1 = (((G__8036_8194 instanceof cljs.core.Keyword))?G__8036_8194.fqn:null);
switch (G__8036_8195__$1) {
case "compute":
var c__7851__auto___8197 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__8193,c__7851__auto___8197,G__8036_8194,G__8036_8195__$1,n__4376__auto___8192,jobs,results,process,async){
return (function (){
var f__7852__auto__ = (function (){var switch__7749__auto__ = ((function (__8193,c__7851__auto___8197,G__8036_8194,G__8036_8195__$1,n__4376__auto___8192,jobs,results,process,async){
return (function (state_8049){
var state_val_8050 = (state_8049[(1)]);
if((state_val_8050 === (1))){
var state_8049__$1 = state_8049;
var statearr_8051_8198 = state_8049__$1;
(statearr_8051_8198[(2)] = null);

(statearr_8051_8198[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8050 === (2))){
var state_8049__$1 = state_8049;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8049__$1,(4),jobs);
} else {
if((state_val_8050 === (3))){
var inst_8047 = (state_8049[(2)]);
var state_8049__$1 = state_8049;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8049__$1,inst_8047);
} else {
if((state_val_8050 === (4))){
var inst_8039 = (state_8049[(2)]);
var inst_8040 = process(inst_8039);
var state_8049__$1 = state_8049;
if(cljs.core.truth_(inst_8040)){
var statearr_8052_8199 = state_8049__$1;
(statearr_8052_8199[(1)] = (5));

} else {
var statearr_8053_8200 = state_8049__$1;
(statearr_8053_8200[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8050 === (5))){
var state_8049__$1 = state_8049;
var statearr_8054_8201 = state_8049__$1;
(statearr_8054_8201[(2)] = null);

(statearr_8054_8201[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8050 === (6))){
var state_8049__$1 = state_8049;
var statearr_8055_8202 = state_8049__$1;
(statearr_8055_8202[(2)] = null);

(statearr_8055_8202[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8050 === (7))){
var inst_8045 = (state_8049[(2)]);
var state_8049__$1 = state_8049;
var statearr_8056_8203 = state_8049__$1;
(statearr_8056_8203[(2)] = inst_8045);

(statearr_8056_8203[(1)] = (3));


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
});})(__8193,c__7851__auto___8197,G__8036_8194,G__8036_8195__$1,n__4376__auto___8192,jobs,results,process,async))
;
return ((function (__8193,switch__7749__auto__,c__7851__auto___8197,G__8036_8194,G__8036_8195__$1,n__4376__auto___8192,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7750__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7750__auto____0 = (function (){
var statearr_8057 = [null,null,null,null,null,null,null];
(statearr_8057[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7750__auto__);

(statearr_8057[(1)] = (1));

return statearr_8057;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7750__auto____1 = (function (state_8049){
while(true){
var ret_value__7751__auto__ = (function (){try{while(true){
var result__7752__auto__ = switch__7749__auto__(state_8049);
if(cljs.core.keyword_identical_QMARK_(result__7752__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7752__auto__;
}
break;
}
}catch (e8058){if((e8058 instanceof Object)){
var ex__7753__auto__ = e8058;
var statearr_8059_8204 = state_8049;
(statearr_8059_8204[(5)] = ex__7753__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8049);

return cljs.core.cst$kw$recur;
} else {
throw e8058;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7751__auto__,cljs.core.cst$kw$recur)){
var G__8205 = state_8049;
state_8049 = G__8205;
continue;
} else {
return ret_value__7751__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7750__auto__ = function(state_8049){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7750__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7750__auto____1.call(this,state_8049);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__7750__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7750__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7750__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7750__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7750__auto__;
})()
;})(__8193,switch__7749__auto__,c__7851__auto___8197,G__8036_8194,G__8036_8195__$1,n__4376__auto___8192,jobs,results,process,async))
})();
var state__7853__auto__ = (function (){var statearr_8060 = (f__7852__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7852__auto__.cljs$core$IFn$_invoke$arity$0() : f__7852__auto__.call(null));
(statearr_8060[(6)] = c__7851__auto___8197);

return statearr_8060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7853__auto__);
});})(__8193,c__7851__auto___8197,G__8036_8194,G__8036_8195__$1,n__4376__auto___8192,jobs,results,process,async))
);


break;
case "async":
var c__7851__auto___8206 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__8193,c__7851__auto___8206,G__8036_8194,G__8036_8195__$1,n__4376__auto___8192,jobs,results,process,async){
return (function (){
var f__7852__auto__ = (function (){var switch__7749__auto__ = ((function (__8193,c__7851__auto___8206,G__8036_8194,G__8036_8195__$1,n__4376__auto___8192,jobs,results,process,async){
return (function (state_8073){
var state_val_8074 = (state_8073[(1)]);
if((state_val_8074 === (1))){
var state_8073__$1 = state_8073;
var statearr_8075_8207 = state_8073__$1;
(statearr_8075_8207[(2)] = null);

(statearr_8075_8207[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8074 === (2))){
var state_8073__$1 = state_8073;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8073__$1,(4),jobs);
} else {
if((state_val_8074 === (3))){
var inst_8071 = (state_8073[(2)]);
var state_8073__$1 = state_8073;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8073__$1,inst_8071);
} else {
if((state_val_8074 === (4))){
var inst_8063 = (state_8073[(2)]);
var inst_8064 = async(inst_8063);
var state_8073__$1 = state_8073;
if(cljs.core.truth_(inst_8064)){
var statearr_8076_8208 = state_8073__$1;
(statearr_8076_8208[(1)] = (5));

} else {
var statearr_8077_8209 = state_8073__$1;
(statearr_8077_8209[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8074 === (5))){
var state_8073__$1 = state_8073;
var statearr_8078_8210 = state_8073__$1;
(statearr_8078_8210[(2)] = null);

(statearr_8078_8210[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8074 === (6))){
var state_8073__$1 = state_8073;
var statearr_8079_8211 = state_8073__$1;
(statearr_8079_8211[(2)] = null);

(statearr_8079_8211[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8074 === (7))){
var inst_8069 = (state_8073[(2)]);
var state_8073__$1 = state_8073;
var statearr_8080_8212 = state_8073__$1;
(statearr_8080_8212[(2)] = inst_8069);

(statearr_8080_8212[(1)] = (3));


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
});})(__8193,c__7851__auto___8206,G__8036_8194,G__8036_8195__$1,n__4376__auto___8192,jobs,results,process,async))
;
return ((function (__8193,switch__7749__auto__,c__7851__auto___8206,G__8036_8194,G__8036_8195__$1,n__4376__auto___8192,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7750__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7750__auto____0 = (function (){
var statearr_8081 = [null,null,null,null,null,null,null];
(statearr_8081[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7750__auto__);

(statearr_8081[(1)] = (1));

return statearr_8081;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7750__auto____1 = (function (state_8073){
while(true){
var ret_value__7751__auto__ = (function (){try{while(true){
var result__7752__auto__ = switch__7749__auto__(state_8073);
if(cljs.core.keyword_identical_QMARK_(result__7752__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7752__auto__;
}
break;
}
}catch (e8082){if((e8082 instanceof Object)){
var ex__7753__auto__ = e8082;
var statearr_8083_8213 = state_8073;
(statearr_8083_8213[(5)] = ex__7753__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8073);

return cljs.core.cst$kw$recur;
} else {
throw e8082;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7751__auto__,cljs.core.cst$kw$recur)){
var G__8214 = state_8073;
state_8073 = G__8214;
continue;
} else {
return ret_value__7751__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7750__auto__ = function(state_8073){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7750__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7750__auto____1.call(this,state_8073);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__7750__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7750__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7750__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7750__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7750__auto__;
})()
;})(__8193,switch__7749__auto__,c__7851__auto___8206,G__8036_8194,G__8036_8195__$1,n__4376__auto___8192,jobs,results,process,async))
})();
var state__7853__auto__ = (function (){var statearr_8084 = (f__7852__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7852__auto__.cljs$core$IFn$_invoke$arity$0() : f__7852__auto__.call(null));
(statearr_8084[(6)] = c__7851__auto___8206);

return statearr_8084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7853__auto__);
});})(__8193,c__7851__auto___8206,G__8036_8194,G__8036_8195__$1,n__4376__auto___8192,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8036_8195__$1)].join('')));

}

var G__8215 = (__8193 + (1));
__8193 = G__8215;
continue;
} else {
}
break;
}

var c__7851__auto___8216 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7851__auto___8216,jobs,results,process,async){
return (function (){
var f__7852__auto__ = (function (){var switch__7749__auto__ = ((function (c__7851__auto___8216,jobs,results,process,async){
return (function (state_8106){
var state_val_8107 = (state_8106[(1)]);
if((state_val_8107 === (1))){
var state_8106__$1 = state_8106;
var statearr_8108_8217 = state_8106__$1;
(statearr_8108_8217[(2)] = null);

(statearr_8108_8217[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8107 === (2))){
var state_8106__$1 = state_8106;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8106__$1,(4),from);
} else {
if((state_val_8107 === (3))){
var inst_8104 = (state_8106[(2)]);
var state_8106__$1 = state_8106;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8106__$1,inst_8104);
} else {
if((state_val_8107 === (4))){
var inst_8087 = (state_8106[(7)]);
var inst_8087__$1 = (state_8106[(2)]);
var inst_8088 = (inst_8087__$1 == null);
var state_8106__$1 = (function (){var statearr_8109 = state_8106;
(statearr_8109[(7)] = inst_8087__$1);

return statearr_8109;
})();
if(cljs.core.truth_(inst_8088)){
var statearr_8110_8218 = state_8106__$1;
(statearr_8110_8218[(1)] = (5));

} else {
var statearr_8111_8219 = state_8106__$1;
(statearr_8111_8219[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8107 === (5))){
var inst_8090 = cljs.core.async.close_BANG_(jobs);
var state_8106__$1 = state_8106;
var statearr_8112_8220 = state_8106__$1;
(statearr_8112_8220[(2)] = inst_8090);

(statearr_8112_8220[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8107 === (6))){
var inst_8092 = (state_8106[(8)]);
var inst_8087 = (state_8106[(7)]);
var inst_8092__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_8093 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8094 = [inst_8087,inst_8092__$1];
var inst_8095 = (new cljs.core.PersistentVector(null,2,(5),inst_8093,inst_8094,null));
var state_8106__$1 = (function (){var statearr_8113 = state_8106;
(statearr_8113[(8)] = inst_8092__$1);

return statearr_8113;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8106__$1,(8),jobs,inst_8095);
} else {
if((state_val_8107 === (7))){
var inst_8102 = (state_8106[(2)]);
var state_8106__$1 = state_8106;
var statearr_8114_8221 = state_8106__$1;
(statearr_8114_8221[(2)] = inst_8102);

(statearr_8114_8221[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8107 === (8))){
var inst_8092 = (state_8106[(8)]);
var inst_8097 = (state_8106[(2)]);
var state_8106__$1 = (function (){var statearr_8115 = state_8106;
(statearr_8115[(9)] = inst_8097);

return statearr_8115;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8106__$1,(9),results,inst_8092);
} else {
if((state_val_8107 === (9))){
var inst_8099 = (state_8106[(2)]);
var state_8106__$1 = (function (){var statearr_8116 = state_8106;
(statearr_8116[(10)] = inst_8099);

return statearr_8116;
})();
var statearr_8117_8222 = state_8106__$1;
(statearr_8117_8222[(2)] = null);

(statearr_8117_8222[(1)] = (2));


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
});})(c__7851__auto___8216,jobs,results,process,async))
;
return ((function (switch__7749__auto__,c__7851__auto___8216,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7750__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7750__auto____0 = (function (){
var statearr_8118 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_8118[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7750__auto__);

(statearr_8118[(1)] = (1));

return statearr_8118;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7750__auto____1 = (function (state_8106){
while(true){
var ret_value__7751__auto__ = (function (){try{while(true){
var result__7752__auto__ = switch__7749__auto__(state_8106);
if(cljs.core.keyword_identical_QMARK_(result__7752__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7752__auto__;
}
break;
}
}catch (e8119){if((e8119 instanceof Object)){
var ex__7753__auto__ = e8119;
var statearr_8120_8223 = state_8106;
(statearr_8120_8223[(5)] = ex__7753__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8106);

return cljs.core.cst$kw$recur;
} else {
throw e8119;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7751__auto__,cljs.core.cst$kw$recur)){
var G__8224 = state_8106;
state_8106 = G__8224;
continue;
} else {
return ret_value__7751__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7750__auto__ = function(state_8106){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7750__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7750__auto____1.call(this,state_8106);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__7750__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7750__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7750__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7750__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7750__auto__;
})()
;})(switch__7749__auto__,c__7851__auto___8216,jobs,results,process,async))
})();
var state__7853__auto__ = (function (){var statearr_8121 = (f__7852__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7852__auto__.cljs$core$IFn$_invoke$arity$0() : f__7852__auto__.call(null));
(statearr_8121[(6)] = c__7851__auto___8216);

return statearr_8121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7853__auto__);
});})(c__7851__auto___8216,jobs,results,process,async))
);


var c__7851__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7851__auto__,jobs,results,process,async){
return (function (){
var f__7852__auto__ = (function (){var switch__7749__auto__ = ((function (c__7851__auto__,jobs,results,process,async){
return (function (state_8159){
var state_val_8160 = (state_8159[(1)]);
if((state_val_8160 === (7))){
var inst_8155 = (state_8159[(2)]);
var state_8159__$1 = state_8159;
var statearr_8161_8225 = state_8159__$1;
(statearr_8161_8225[(2)] = inst_8155);

(statearr_8161_8225[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8160 === (20))){
var state_8159__$1 = state_8159;
var statearr_8162_8226 = state_8159__$1;
(statearr_8162_8226[(2)] = null);

(statearr_8162_8226[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8160 === (1))){
var state_8159__$1 = state_8159;
var statearr_8163_8227 = state_8159__$1;
(statearr_8163_8227[(2)] = null);

(statearr_8163_8227[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8160 === (4))){
var inst_8124 = (state_8159[(7)]);
var inst_8124__$1 = (state_8159[(2)]);
var inst_8125 = (inst_8124__$1 == null);
var state_8159__$1 = (function (){var statearr_8164 = state_8159;
(statearr_8164[(7)] = inst_8124__$1);

return statearr_8164;
})();
if(cljs.core.truth_(inst_8125)){
var statearr_8165_8228 = state_8159__$1;
(statearr_8165_8228[(1)] = (5));

} else {
var statearr_8166_8229 = state_8159__$1;
(statearr_8166_8229[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8160 === (15))){
var inst_8137 = (state_8159[(8)]);
var state_8159__$1 = state_8159;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8159__$1,(18),to,inst_8137);
} else {
if((state_val_8160 === (21))){
var inst_8150 = (state_8159[(2)]);
var state_8159__$1 = state_8159;
var statearr_8167_8230 = state_8159__$1;
(statearr_8167_8230[(2)] = inst_8150);

(statearr_8167_8230[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8160 === (13))){
var inst_8152 = (state_8159[(2)]);
var state_8159__$1 = (function (){var statearr_8168 = state_8159;
(statearr_8168[(9)] = inst_8152);

return statearr_8168;
})();
var statearr_8169_8231 = state_8159__$1;
(statearr_8169_8231[(2)] = null);

(statearr_8169_8231[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8160 === (6))){
var inst_8124 = (state_8159[(7)]);
var state_8159__$1 = state_8159;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8159__$1,(11),inst_8124);
} else {
if((state_val_8160 === (17))){
var inst_8145 = (state_8159[(2)]);
var state_8159__$1 = state_8159;
if(cljs.core.truth_(inst_8145)){
var statearr_8170_8232 = state_8159__$1;
(statearr_8170_8232[(1)] = (19));

} else {
var statearr_8171_8233 = state_8159__$1;
(statearr_8171_8233[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8160 === (3))){
var inst_8157 = (state_8159[(2)]);
var state_8159__$1 = state_8159;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8159__$1,inst_8157);
} else {
if((state_val_8160 === (12))){
var inst_8134 = (state_8159[(10)]);
var state_8159__$1 = state_8159;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8159__$1,(14),inst_8134);
} else {
if((state_val_8160 === (2))){
var state_8159__$1 = state_8159;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8159__$1,(4),results);
} else {
if((state_val_8160 === (19))){
var state_8159__$1 = state_8159;
var statearr_8172_8234 = state_8159__$1;
(statearr_8172_8234[(2)] = null);

(statearr_8172_8234[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8160 === (11))){
var inst_8134 = (state_8159[(2)]);
var state_8159__$1 = (function (){var statearr_8173 = state_8159;
(statearr_8173[(10)] = inst_8134);

return statearr_8173;
})();
var statearr_8174_8235 = state_8159__$1;
(statearr_8174_8235[(2)] = null);

(statearr_8174_8235[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8160 === (9))){
var state_8159__$1 = state_8159;
var statearr_8175_8236 = state_8159__$1;
(statearr_8175_8236[(2)] = null);

(statearr_8175_8236[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8160 === (5))){
var state_8159__$1 = state_8159;
if(cljs.core.truth_(close_QMARK_)){
var statearr_8176_8237 = state_8159__$1;
(statearr_8176_8237[(1)] = (8));

} else {
var statearr_8177_8238 = state_8159__$1;
(statearr_8177_8238[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8160 === (14))){
var inst_8137 = (state_8159[(8)]);
var inst_8139 = (state_8159[(11)]);
var inst_8137__$1 = (state_8159[(2)]);
var inst_8138 = (inst_8137__$1 == null);
var inst_8139__$1 = cljs.core.not(inst_8138);
var state_8159__$1 = (function (){var statearr_8178 = state_8159;
(statearr_8178[(8)] = inst_8137__$1);

(statearr_8178[(11)] = inst_8139__$1);

return statearr_8178;
})();
if(inst_8139__$1){
var statearr_8179_8239 = state_8159__$1;
(statearr_8179_8239[(1)] = (15));

} else {
var statearr_8180_8240 = state_8159__$1;
(statearr_8180_8240[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8160 === (16))){
var inst_8139 = (state_8159[(11)]);
var state_8159__$1 = state_8159;
var statearr_8181_8241 = state_8159__$1;
(statearr_8181_8241[(2)] = inst_8139);

(statearr_8181_8241[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8160 === (10))){
var inst_8131 = (state_8159[(2)]);
var state_8159__$1 = state_8159;
var statearr_8182_8242 = state_8159__$1;
(statearr_8182_8242[(2)] = inst_8131);

(statearr_8182_8242[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8160 === (18))){
var inst_8142 = (state_8159[(2)]);
var state_8159__$1 = state_8159;
var statearr_8183_8243 = state_8159__$1;
(statearr_8183_8243[(2)] = inst_8142);

(statearr_8183_8243[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8160 === (8))){
var inst_8128 = cljs.core.async.close_BANG_(to);
var state_8159__$1 = state_8159;
var statearr_8184_8244 = state_8159__$1;
(statearr_8184_8244[(2)] = inst_8128);

(statearr_8184_8244[(1)] = (10));


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
});})(c__7851__auto__,jobs,results,process,async))
;
return ((function (switch__7749__auto__,c__7851__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7750__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7750__auto____0 = (function (){
var statearr_8185 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8185[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7750__auto__);

(statearr_8185[(1)] = (1));

return statearr_8185;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7750__auto____1 = (function (state_8159){
while(true){
var ret_value__7751__auto__ = (function (){try{while(true){
var result__7752__auto__ = switch__7749__auto__(state_8159);
if(cljs.core.keyword_identical_QMARK_(result__7752__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7752__auto__;
}
break;
}
}catch (e8186){if((e8186 instanceof Object)){
var ex__7753__auto__ = e8186;
var statearr_8187_8245 = state_8159;
(statearr_8187_8245[(5)] = ex__7753__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8159);

return cljs.core.cst$kw$recur;
} else {
throw e8186;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7751__auto__,cljs.core.cst$kw$recur)){
var G__8246 = state_8159;
state_8159 = G__8246;
continue;
} else {
return ret_value__7751__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7750__auto__ = function(state_8159){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7750__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7750__auto____1.call(this,state_8159);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__7750__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7750__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7750__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7750__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7750__auto__;
})()
;})(switch__7749__auto__,c__7851__auto__,jobs,results,process,async))
})();
var state__7853__auto__ = (function (){var statearr_8188 = (f__7852__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7852__auto__.cljs$core$IFn$_invoke$arity$0() : f__7852__auto__.call(null));
(statearr_8188[(6)] = c__7851__auto__);

return statearr_8188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7853__auto__);
});})(c__7851__auto__,jobs,results,process,async))
);

return c__7851__auto__;
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
var G__8248 = arguments.length;
switch (G__8248) {
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
var G__8251 = arguments.length;
switch (G__8251) {
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
var G__8254 = arguments.length;
switch (G__8254) {
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
var c__7851__auto___8303 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7851__auto___8303,tc,fc){
return (function (){
var f__7852__auto__ = (function (){var switch__7749__auto__ = ((function (c__7851__auto___8303,tc,fc){
return (function (state_8280){
var state_val_8281 = (state_8280[(1)]);
if((state_val_8281 === (7))){
var inst_8276 = (state_8280[(2)]);
var state_8280__$1 = state_8280;
var statearr_8282_8304 = state_8280__$1;
(statearr_8282_8304[(2)] = inst_8276);

(statearr_8282_8304[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8281 === (1))){
var state_8280__$1 = state_8280;
var statearr_8283_8305 = state_8280__$1;
(statearr_8283_8305[(2)] = null);

(statearr_8283_8305[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8281 === (4))){
var inst_8257 = (state_8280[(7)]);
var inst_8257__$1 = (state_8280[(2)]);
var inst_8258 = (inst_8257__$1 == null);
var state_8280__$1 = (function (){var statearr_8284 = state_8280;
(statearr_8284[(7)] = inst_8257__$1);

return statearr_8284;
})();
if(cljs.core.truth_(inst_8258)){
var statearr_8285_8306 = state_8280__$1;
(statearr_8285_8306[(1)] = (5));

} else {
var statearr_8286_8307 = state_8280__$1;
(statearr_8286_8307[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8281 === (13))){
var state_8280__$1 = state_8280;
var statearr_8287_8308 = state_8280__$1;
(statearr_8287_8308[(2)] = null);

(statearr_8287_8308[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8281 === (6))){
var inst_8257 = (state_8280[(7)]);
var inst_8263 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_8257) : p.call(null,inst_8257));
var state_8280__$1 = state_8280;
if(cljs.core.truth_(inst_8263)){
var statearr_8288_8309 = state_8280__$1;
(statearr_8288_8309[(1)] = (9));

} else {
var statearr_8289_8310 = state_8280__$1;
(statearr_8289_8310[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8281 === (3))){
var inst_8278 = (state_8280[(2)]);
var state_8280__$1 = state_8280;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8280__$1,inst_8278);
} else {
if((state_val_8281 === (12))){
var state_8280__$1 = state_8280;
var statearr_8290_8311 = state_8280__$1;
(statearr_8290_8311[(2)] = null);

(statearr_8290_8311[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8281 === (2))){
var state_8280__$1 = state_8280;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8280__$1,(4),ch);
} else {
if((state_val_8281 === (11))){
var inst_8257 = (state_8280[(7)]);
var inst_8267 = (state_8280[(2)]);
var state_8280__$1 = state_8280;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8280__$1,(8),inst_8267,inst_8257);
} else {
if((state_val_8281 === (9))){
var state_8280__$1 = state_8280;
var statearr_8291_8312 = state_8280__$1;
(statearr_8291_8312[(2)] = tc);

(statearr_8291_8312[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8281 === (5))){
var inst_8260 = cljs.core.async.close_BANG_(tc);
var inst_8261 = cljs.core.async.close_BANG_(fc);
var state_8280__$1 = (function (){var statearr_8292 = state_8280;
(statearr_8292[(8)] = inst_8260);

return statearr_8292;
})();
var statearr_8293_8313 = state_8280__$1;
(statearr_8293_8313[(2)] = inst_8261);

(statearr_8293_8313[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8281 === (14))){
var inst_8274 = (state_8280[(2)]);
var state_8280__$1 = state_8280;
var statearr_8294_8314 = state_8280__$1;
(statearr_8294_8314[(2)] = inst_8274);

(statearr_8294_8314[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8281 === (10))){
var state_8280__$1 = state_8280;
var statearr_8295_8315 = state_8280__$1;
(statearr_8295_8315[(2)] = fc);

(statearr_8295_8315[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8281 === (8))){
var inst_8269 = (state_8280[(2)]);
var state_8280__$1 = state_8280;
if(cljs.core.truth_(inst_8269)){
var statearr_8296_8316 = state_8280__$1;
(statearr_8296_8316[(1)] = (12));

} else {
var statearr_8297_8317 = state_8280__$1;
(statearr_8297_8317[(1)] = (13));

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
});})(c__7851__auto___8303,tc,fc))
;
return ((function (switch__7749__auto__,c__7851__auto___8303,tc,fc){
return (function() {
var cljs$core$async$state_machine__7750__auto__ = null;
var cljs$core$async$state_machine__7750__auto____0 = (function (){
var statearr_8298 = [null,null,null,null,null,null,null,null,null];
(statearr_8298[(0)] = cljs$core$async$state_machine__7750__auto__);

(statearr_8298[(1)] = (1));

return statearr_8298;
});
var cljs$core$async$state_machine__7750__auto____1 = (function (state_8280){
while(true){
var ret_value__7751__auto__ = (function (){try{while(true){
var result__7752__auto__ = switch__7749__auto__(state_8280);
if(cljs.core.keyword_identical_QMARK_(result__7752__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7752__auto__;
}
break;
}
}catch (e8299){if((e8299 instanceof Object)){
var ex__7753__auto__ = e8299;
var statearr_8300_8318 = state_8280;
(statearr_8300_8318[(5)] = ex__7753__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8280);

return cljs.core.cst$kw$recur;
} else {
throw e8299;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7751__auto__,cljs.core.cst$kw$recur)){
var G__8319 = state_8280;
state_8280 = G__8319;
continue;
} else {
return ret_value__7751__auto__;
}
break;
}
});
cljs$core$async$state_machine__7750__auto__ = function(state_8280){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7750__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7750__auto____1.call(this,state_8280);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__7750__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7750__auto____0;
cljs$core$async$state_machine__7750__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7750__auto____1;
return cljs$core$async$state_machine__7750__auto__;
})()
;})(switch__7749__auto__,c__7851__auto___8303,tc,fc))
})();
var state__7853__auto__ = (function (){var statearr_8301 = (f__7852__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7852__auto__.cljs$core$IFn$_invoke$arity$0() : f__7852__auto__.call(null));
(statearr_8301[(6)] = c__7851__auto___8303);

return statearr_8301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7853__auto__);
});})(c__7851__auto___8303,tc,fc))
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
var c__7851__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7851__auto__){
return (function (){
var f__7852__auto__ = (function (){var switch__7749__auto__ = ((function (c__7851__auto__){
return (function (state_8340){
var state_val_8341 = (state_8340[(1)]);
if((state_val_8341 === (7))){
var inst_8336 = (state_8340[(2)]);
var state_8340__$1 = state_8340;
var statearr_8342_8360 = state_8340__$1;
(statearr_8342_8360[(2)] = inst_8336);

(statearr_8342_8360[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8341 === (1))){
var inst_8320 = init;
var state_8340__$1 = (function (){var statearr_8343 = state_8340;
(statearr_8343[(7)] = inst_8320);

return statearr_8343;
})();
var statearr_8344_8361 = state_8340__$1;
(statearr_8344_8361[(2)] = null);

(statearr_8344_8361[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8341 === (4))){
var inst_8323 = (state_8340[(8)]);
var inst_8323__$1 = (state_8340[(2)]);
var inst_8324 = (inst_8323__$1 == null);
var state_8340__$1 = (function (){var statearr_8345 = state_8340;
(statearr_8345[(8)] = inst_8323__$1);

return statearr_8345;
})();
if(cljs.core.truth_(inst_8324)){
var statearr_8346_8362 = state_8340__$1;
(statearr_8346_8362[(1)] = (5));

} else {
var statearr_8347_8363 = state_8340__$1;
(statearr_8347_8363[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8341 === (6))){
var inst_8323 = (state_8340[(8)]);
var inst_8327 = (state_8340[(9)]);
var inst_8320 = (state_8340[(7)]);
var inst_8327__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_8320,inst_8323) : f.call(null,inst_8320,inst_8323));
var inst_8328 = cljs.core.reduced_QMARK_(inst_8327__$1);
var state_8340__$1 = (function (){var statearr_8348 = state_8340;
(statearr_8348[(9)] = inst_8327__$1);

return statearr_8348;
})();
if(inst_8328){
var statearr_8349_8364 = state_8340__$1;
(statearr_8349_8364[(1)] = (8));

} else {
var statearr_8350_8365 = state_8340__$1;
(statearr_8350_8365[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8341 === (3))){
var inst_8338 = (state_8340[(2)]);
var state_8340__$1 = state_8340;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8340__$1,inst_8338);
} else {
if((state_val_8341 === (2))){
var state_8340__$1 = state_8340;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8340__$1,(4),ch);
} else {
if((state_val_8341 === (9))){
var inst_8327 = (state_8340[(9)]);
var inst_8320 = inst_8327;
var state_8340__$1 = (function (){var statearr_8351 = state_8340;
(statearr_8351[(7)] = inst_8320);

return statearr_8351;
})();
var statearr_8352_8366 = state_8340__$1;
(statearr_8352_8366[(2)] = null);

(statearr_8352_8366[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8341 === (5))){
var inst_8320 = (state_8340[(7)]);
var state_8340__$1 = state_8340;
var statearr_8353_8367 = state_8340__$1;
(statearr_8353_8367[(2)] = inst_8320);

(statearr_8353_8367[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8341 === (10))){
var inst_8334 = (state_8340[(2)]);
var state_8340__$1 = state_8340;
var statearr_8354_8368 = state_8340__$1;
(statearr_8354_8368[(2)] = inst_8334);

(statearr_8354_8368[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8341 === (8))){
var inst_8327 = (state_8340[(9)]);
var inst_8330 = cljs.core.deref(inst_8327);
var state_8340__$1 = state_8340;
var statearr_8355_8369 = state_8340__$1;
(statearr_8355_8369[(2)] = inst_8330);

(statearr_8355_8369[(1)] = (10));


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
});})(c__7851__auto__))
;
return ((function (switch__7749__auto__,c__7851__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__7750__auto__ = null;
var cljs$core$async$reduce_$_state_machine__7750__auto____0 = (function (){
var statearr_8356 = [null,null,null,null,null,null,null,null,null,null];
(statearr_8356[(0)] = cljs$core$async$reduce_$_state_machine__7750__auto__);

(statearr_8356[(1)] = (1));

return statearr_8356;
});
var cljs$core$async$reduce_$_state_machine__7750__auto____1 = (function (state_8340){
while(true){
var ret_value__7751__auto__ = (function (){try{while(true){
var result__7752__auto__ = switch__7749__auto__(state_8340);
if(cljs.core.keyword_identical_QMARK_(result__7752__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7752__auto__;
}
break;
}
}catch (e8357){if((e8357 instanceof Object)){
var ex__7753__auto__ = e8357;
var statearr_8358_8370 = state_8340;
(statearr_8358_8370[(5)] = ex__7753__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8340);

return cljs.core.cst$kw$recur;
} else {
throw e8357;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7751__auto__,cljs.core.cst$kw$recur)){
var G__8371 = state_8340;
state_8340 = G__8371;
continue;
} else {
return ret_value__7751__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__7750__auto__ = function(state_8340){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__7750__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__7750__auto____1.call(this,state_8340);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__7750__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__7750__auto____0;
cljs$core$async$reduce_$_state_machine__7750__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__7750__auto____1;
return cljs$core$async$reduce_$_state_machine__7750__auto__;
})()
;})(switch__7749__auto__,c__7851__auto__))
})();
var state__7853__auto__ = (function (){var statearr_8359 = (f__7852__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7852__auto__.cljs$core$IFn$_invoke$arity$0() : f__7852__auto__.call(null));
(statearr_8359[(6)] = c__7851__auto__);

return statearr_8359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7853__auto__);
});})(c__7851__auto__))
);

return c__7851__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__7851__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7851__auto__,f__$1){
return (function (){
var f__7852__auto__ = (function (){var switch__7749__auto__ = ((function (c__7851__auto__,f__$1){
return (function (state_8377){
var state_val_8378 = (state_8377[(1)]);
if((state_val_8378 === (1))){
var inst_8372 = cljs.core.async.reduce(f__$1,init,ch);
var state_8377__$1 = state_8377;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8377__$1,(2),inst_8372);
} else {
if((state_val_8378 === (2))){
var inst_8374 = (state_8377[(2)]);
var inst_8375 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_8374) : f__$1.call(null,inst_8374));
var state_8377__$1 = state_8377;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8377__$1,inst_8375);
} else {
return null;
}
}
});})(c__7851__auto__,f__$1))
;
return ((function (switch__7749__auto__,c__7851__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__7750__auto__ = null;
var cljs$core$async$transduce_$_state_machine__7750__auto____0 = (function (){
var statearr_8379 = [null,null,null,null,null,null,null];
(statearr_8379[(0)] = cljs$core$async$transduce_$_state_machine__7750__auto__);

(statearr_8379[(1)] = (1));

return statearr_8379;
});
var cljs$core$async$transduce_$_state_machine__7750__auto____1 = (function (state_8377){
while(true){
var ret_value__7751__auto__ = (function (){try{while(true){
var result__7752__auto__ = switch__7749__auto__(state_8377);
if(cljs.core.keyword_identical_QMARK_(result__7752__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7752__auto__;
}
break;
}
}catch (e8380){if((e8380 instanceof Object)){
var ex__7753__auto__ = e8380;
var statearr_8381_8383 = state_8377;
(statearr_8381_8383[(5)] = ex__7753__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8377);

return cljs.core.cst$kw$recur;
} else {
throw e8380;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7751__auto__,cljs.core.cst$kw$recur)){
var G__8384 = state_8377;
state_8377 = G__8384;
continue;
} else {
return ret_value__7751__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__7750__auto__ = function(state_8377){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__7750__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__7750__auto____1.call(this,state_8377);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__7750__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__7750__auto____0;
cljs$core$async$transduce_$_state_machine__7750__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__7750__auto____1;
return cljs$core$async$transduce_$_state_machine__7750__auto__;
})()
;})(switch__7749__auto__,c__7851__auto__,f__$1))
})();
var state__7853__auto__ = (function (){var statearr_8382 = (f__7852__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7852__auto__.cljs$core$IFn$_invoke$arity$0() : f__7852__auto__.call(null));
(statearr_8382[(6)] = c__7851__auto__);

return statearr_8382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7853__auto__);
});})(c__7851__auto__,f__$1))
);

return c__7851__auto__;
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
var G__8386 = arguments.length;
switch (G__8386) {
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
var c__7851__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7851__auto__){
return (function (){
var f__7852__auto__ = (function (){var switch__7749__auto__ = ((function (c__7851__auto__){
return (function (state_8411){
var state_val_8412 = (state_8411[(1)]);
if((state_val_8412 === (7))){
var inst_8393 = (state_8411[(2)]);
var state_8411__$1 = state_8411;
var statearr_8413_8434 = state_8411__$1;
(statearr_8413_8434[(2)] = inst_8393);

(statearr_8413_8434[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8412 === (1))){
var inst_8387 = cljs.core.seq(coll);
var inst_8388 = inst_8387;
var state_8411__$1 = (function (){var statearr_8414 = state_8411;
(statearr_8414[(7)] = inst_8388);

return statearr_8414;
})();
var statearr_8415_8435 = state_8411__$1;
(statearr_8415_8435[(2)] = null);

(statearr_8415_8435[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8412 === (4))){
var inst_8388 = (state_8411[(7)]);
var inst_8391 = cljs.core.first(inst_8388);
var state_8411__$1 = state_8411;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8411__$1,(7),ch,inst_8391);
} else {
if((state_val_8412 === (13))){
var inst_8405 = (state_8411[(2)]);
var state_8411__$1 = state_8411;
var statearr_8416_8436 = state_8411__$1;
(statearr_8416_8436[(2)] = inst_8405);

(statearr_8416_8436[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8412 === (6))){
var inst_8396 = (state_8411[(2)]);
var state_8411__$1 = state_8411;
if(cljs.core.truth_(inst_8396)){
var statearr_8417_8437 = state_8411__$1;
(statearr_8417_8437[(1)] = (8));

} else {
var statearr_8418_8438 = state_8411__$1;
(statearr_8418_8438[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8412 === (3))){
var inst_8409 = (state_8411[(2)]);
var state_8411__$1 = state_8411;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8411__$1,inst_8409);
} else {
if((state_val_8412 === (12))){
var state_8411__$1 = state_8411;
var statearr_8419_8439 = state_8411__$1;
(statearr_8419_8439[(2)] = null);

(statearr_8419_8439[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8412 === (2))){
var inst_8388 = (state_8411[(7)]);
var state_8411__$1 = state_8411;
if(cljs.core.truth_(inst_8388)){
var statearr_8420_8440 = state_8411__$1;
(statearr_8420_8440[(1)] = (4));

} else {
var statearr_8421_8441 = state_8411__$1;
(statearr_8421_8441[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8412 === (11))){
var inst_8402 = cljs.core.async.close_BANG_(ch);
var state_8411__$1 = state_8411;
var statearr_8422_8442 = state_8411__$1;
(statearr_8422_8442[(2)] = inst_8402);

(statearr_8422_8442[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8412 === (9))){
var state_8411__$1 = state_8411;
if(cljs.core.truth_(close_QMARK_)){
var statearr_8423_8443 = state_8411__$1;
(statearr_8423_8443[(1)] = (11));

} else {
var statearr_8424_8444 = state_8411__$1;
(statearr_8424_8444[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8412 === (5))){
var inst_8388 = (state_8411[(7)]);
var state_8411__$1 = state_8411;
var statearr_8425_8445 = state_8411__$1;
(statearr_8425_8445[(2)] = inst_8388);

(statearr_8425_8445[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8412 === (10))){
var inst_8407 = (state_8411[(2)]);
var state_8411__$1 = state_8411;
var statearr_8426_8446 = state_8411__$1;
(statearr_8426_8446[(2)] = inst_8407);

(statearr_8426_8446[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8412 === (8))){
var inst_8388 = (state_8411[(7)]);
var inst_8398 = cljs.core.next(inst_8388);
var inst_8388__$1 = inst_8398;
var state_8411__$1 = (function (){var statearr_8427 = state_8411;
(statearr_8427[(7)] = inst_8388__$1);

return statearr_8427;
})();
var statearr_8428_8447 = state_8411__$1;
(statearr_8428_8447[(2)] = null);

(statearr_8428_8447[(1)] = (2));


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
});})(c__7851__auto__))
;
return ((function (switch__7749__auto__,c__7851__auto__){
return (function() {
var cljs$core$async$state_machine__7750__auto__ = null;
var cljs$core$async$state_machine__7750__auto____0 = (function (){
var statearr_8429 = [null,null,null,null,null,null,null,null];
(statearr_8429[(0)] = cljs$core$async$state_machine__7750__auto__);

(statearr_8429[(1)] = (1));

return statearr_8429;
});
var cljs$core$async$state_machine__7750__auto____1 = (function (state_8411){
while(true){
var ret_value__7751__auto__ = (function (){try{while(true){
var result__7752__auto__ = switch__7749__auto__(state_8411);
if(cljs.core.keyword_identical_QMARK_(result__7752__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7752__auto__;
}
break;
}
}catch (e8430){if((e8430 instanceof Object)){
var ex__7753__auto__ = e8430;
var statearr_8431_8448 = state_8411;
(statearr_8431_8448[(5)] = ex__7753__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8411);

return cljs.core.cst$kw$recur;
} else {
throw e8430;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7751__auto__,cljs.core.cst$kw$recur)){
var G__8449 = state_8411;
state_8411 = G__8449;
continue;
} else {
return ret_value__7751__auto__;
}
break;
}
});
cljs$core$async$state_machine__7750__auto__ = function(state_8411){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7750__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7750__auto____1.call(this,state_8411);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__7750__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7750__auto____0;
cljs$core$async$state_machine__7750__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7750__auto____1;
return cljs$core$async$state_machine__7750__auto__;
})()
;})(switch__7749__auto__,c__7851__auto__))
})();
var state__7853__auto__ = (function (){var statearr_8432 = (f__7852__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7852__auto__.cljs$core$IFn$_invoke$arity$0() : f__7852__auto__.call(null));
(statearr_8432[(6)] = c__7851__auto__);

return statearr_8432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7853__auto__);
});})(c__7851__auto__))
);

return c__7851__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async8450 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8450 = (function (ch,cs,meta8451){
this.ch = ch;
this.cs = cs;
this.meta8451 = meta8451;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8450.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_8452,meta8451__$1){
var self__ = this;
var _8452__$1 = this;
return (new cljs.core.async.t_cljs$core$async8450(self__.ch,self__.cs,meta8451__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async8450.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_8452){
var self__ = this;
var _8452__$1 = this;
return self__.meta8451;
});})(cs))
;

cljs.core.async.t_cljs$core$async8450.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8450.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async8450.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8450.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async8450.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async8450.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async8450.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta8451], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async8450.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8450.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8450";

cljs.core.async.t_cljs$core$async8450.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async8450");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8450.
 */
cljs.core.async.__GT_t_cljs$core$async8450 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async8450(ch__$1,cs__$1,meta8451){
return (new cljs.core.async.t_cljs$core$async8450(ch__$1,cs__$1,meta8451));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async8450(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__7851__auto___8672 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7851__auto___8672,cs,m,dchan,dctr,done){
return (function (){
var f__7852__auto__ = (function (){var switch__7749__auto__ = ((function (c__7851__auto___8672,cs,m,dchan,dctr,done){
return (function (state_8587){
var state_val_8588 = (state_8587[(1)]);
if((state_val_8588 === (7))){
var inst_8583 = (state_8587[(2)]);
var state_8587__$1 = state_8587;
var statearr_8589_8673 = state_8587__$1;
(statearr_8589_8673[(2)] = inst_8583);

(statearr_8589_8673[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8588 === (20))){
var inst_8486 = (state_8587[(7)]);
var inst_8498 = cljs.core.first(inst_8486);
var inst_8499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_8498,(0),null);
var inst_8500 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_8498,(1),null);
var state_8587__$1 = (function (){var statearr_8590 = state_8587;
(statearr_8590[(8)] = inst_8499);

return statearr_8590;
})();
if(cljs.core.truth_(inst_8500)){
var statearr_8591_8674 = state_8587__$1;
(statearr_8591_8674[(1)] = (22));

} else {
var statearr_8592_8675 = state_8587__$1;
(statearr_8592_8675[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8588 === (27))){
var inst_8528 = (state_8587[(9)]);
var inst_8530 = (state_8587[(10)]);
var inst_8535 = (state_8587[(11)]);
var inst_8455 = (state_8587[(12)]);
var inst_8535__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_8528,inst_8530);
var inst_8536 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_8535__$1,inst_8455,done);
var state_8587__$1 = (function (){var statearr_8593 = state_8587;
(statearr_8593[(11)] = inst_8535__$1);

return statearr_8593;
})();
if(cljs.core.truth_(inst_8536)){
var statearr_8594_8676 = state_8587__$1;
(statearr_8594_8676[(1)] = (30));

} else {
var statearr_8595_8677 = state_8587__$1;
(statearr_8595_8677[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8588 === (1))){
var state_8587__$1 = state_8587;
var statearr_8596_8678 = state_8587__$1;
(statearr_8596_8678[(2)] = null);

(statearr_8596_8678[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8588 === (24))){
var inst_8486 = (state_8587[(7)]);
var inst_8505 = (state_8587[(2)]);
var inst_8506 = cljs.core.next(inst_8486);
var inst_8464 = inst_8506;
var inst_8465 = null;
var inst_8466 = (0);
var inst_8467 = (0);
var state_8587__$1 = (function (){var statearr_8597 = state_8587;
(statearr_8597[(13)] = inst_8505);

(statearr_8597[(14)] = inst_8464);

(statearr_8597[(15)] = inst_8466);

(statearr_8597[(16)] = inst_8465);

(statearr_8597[(17)] = inst_8467);

return statearr_8597;
})();
var statearr_8598_8679 = state_8587__$1;
(statearr_8598_8679[(2)] = null);

(statearr_8598_8679[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8588 === (39))){
var state_8587__$1 = state_8587;
var statearr_8602_8680 = state_8587__$1;
(statearr_8602_8680[(2)] = null);

(statearr_8602_8680[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8588 === (4))){
var inst_8455 = (state_8587[(12)]);
var inst_8455__$1 = (state_8587[(2)]);
var inst_8456 = (inst_8455__$1 == null);
var state_8587__$1 = (function (){var statearr_8603 = state_8587;
(statearr_8603[(12)] = inst_8455__$1);

return statearr_8603;
})();
if(cljs.core.truth_(inst_8456)){
var statearr_8604_8681 = state_8587__$1;
(statearr_8604_8681[(1)] = (5));

} else {
var statearr_8605_8682 = state_8587__$1;
(statearr_8605_8682[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8588 === (15))){
var inst_8464 = (state_8587[(14)]);
var inst_8466 = (state_8587[(15)]);
var inst_8465 = (state_8587[(16)]);
var inst_8467 = (state_8587[(17)]);
var inst_8482 = (state_8587[(2)]);
var inst_8483 = (inst_8467 + (1));
var tmp8599 = inst_8464;
var tmp8600 = inst_8466;
var tmp8601 = inst_8465;
var inst_8464__$1 = tmp8599;
var inst_8465__$1 = tmp8601;
var inst_8466__$1 = tmp8600;
var inst_8467__$1 = inst_8483;
var state_8587__$1 = (function (){var statearr_8606 = state_8587;
(statearr_8606[(14)] = inst_8464__$1);

(statearr_8606[(15)] = inst_8466__$1);

(statearr_8606[(18)] = inst_8482);

(statearr_8606[(16)] = inst_8465__$1);

(statearr_8606[(17)] = inst_8467__$1);

return statearr_8606;
})();
var statearr_8607_8683 = state_8587__$1;
(statearr_8607_8683[(2)] = null);

(statearr_8607_8683[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8588 === (21))){
var inst_8509 = (state_8587[(2)]);
var state_8587__$1 = state_8587;
var statearr_8611_8684 = state_8587__$1;
(statearr_8611_8684[(2)] = inst_8509);

(statearr_8611_8684[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8588 === (31))){
var inst_8535 = (state_8587[(11)]);
var inst_8539 = done(null);
var inst_8540 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_8535);
var state_8587__$1 = (function (){var statearr_8612 = state_8587;
(statearr_8612[(19)] = inst_8539);

return statearr_8612;
})();
var statearr_8613_8685 = state_8587__$1;
(statearr_8613_8685[(2)] = inst_8540);

(statearr_8613_8685[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8588 === (32))){
var inst_8527 = (state_8587[(20)]);
var inst_8528 = (state_8587[(9)]);
var inst_8530 = (state_8587[(10)]);
var inst_8529 = (state_8587[(21)]);
var inst_8542 = (state_8587[(2)]);
var inst_8543 = (inst_8530 + (1));
var tmp8608 = inst_8527;
var tmp8609 = inst_8528;
var tmp8610 = inst_8529;
var inst_8527__$1 = tmp8608;
var inst_8528__$1 = tmp8609;
var inst_8529__$1 = tmp8610;
var inst_8530__$1 = inst_8543;
var state_8587__$1 = (function (){var statearr_8614 = state_8587;
(statearr_8614[(20)] = inst_8527__$1);

(statearr_8614[(9)] = inst_8528__$1);

(statearr_8614[(10)] = inst_8530__$1);

(statearr_8614[(21)] = inst_8529__$1);

(statearr_8614[(22)] = inst_8542);

return statearr_8614;
})();
var statearr_8615_8686 = state_8587__$1;
(statearr_8615_8686[(2)] = null);

(statearr_8615_8686[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8588 === (40))){
var inst_8555 = (state_8587[(23)]);
var inst_8559 = done(null);
var inst_8560 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_8555);
var state_8587__$1 = (function (){var statearr_8616 = state_8587;
(statearr_8616[(24)] = inst_8559);

return statearr_8616;
})();
var statearr_8617_8687 = state_8587__$1;
(statearr_8617_8687[(2)] = inst_8560);

(statearr_8617_8687[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8588 === (33))){
var inst_8546 = (state_8587[(25)]);
var inst_8548 = cljs.core.chunked_seq_QMARK_(inst_8546);
var state_8587__$1 = state_8587;
if(inst_8548){
var statearr_8618_8688 = state_8587__$1;
(statearr_8618_8688[(1)] = (36));

} else {
var statearr_8619_8689 = state_8587__$1;
(statearr_8619_8689[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8588 === (13))){
var inst_8476 = (state_8587[(26)]);
var inst_8479 = cljs.core.async.close_BANG_(inst_8476);
var state_8587__$1 = state_8587;
var statearr_8620_8690 = state_8587__$1;
(statearr_8620_8690[(2)] = inst_8479);

(statearr_8620_8690[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8588 === (22))){
var inst_8499 = (state_8587[(8)]);
var inst_8502 = cljs.core.async.close_BANG_(inst_8499);
var state_8587__$1 = state_8587;
var statearr_8621_8691 = state_8587__$1;
(statearr_8621_8691[(2)] = inst_8502);

(statearr_8621_8691[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8588 === (36))){
var inst_8546 = (state_8587[(25)]);
var inst_8550 = cljs.core.chunk_first(inst_8546);
var inst_8551 = cljs.core.chunk_rest(inst_8546);
var inst_8552 = cljs.core.count(inst_8550);
var inst_8527 = inst_8551;
var inst_8528 = inst_8550;
var inst_8529 = inst_8552;
var inst_8530 = (0);
var state_8587__$1 = (function (){var statearr_8622 = state_8587;
(statearr_8622[(20)] = inst_8527);

(statearr_8622[(9)] = inst_8528);

(statearr_8622[(10)] = inst_8530);

(statearr_8622[(21)] = inst_8529);

return statearr_8622;
})();
var statearr_8623_8692 = state_8587__$1;
(statearr_8623_8692[(2)] = null);

(statearr_8623_8692[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8588 === (41))){
var inst_8546 = (state_8587[(25)]);
var inst_8562 = (state_8587[(2)]);
var inst_8563 = cljs.core.next(inst_8546);
var inst_8527 = inst_8563;
var inst_8528 = null;
var inst_8529 = (0);
var inst_8530 = (0);
var state_8587__$1 = (function (){var statearr_8624 = state_8587;
(statearr_8624[(20)] = inst_8527);

(statearr_8624[(27)] = inst_8562);

(statearr_8624[(9)] = inst_8528);

(statearr_8624[(10)] = inst_8530);

(statearr_8624[(21)] = inst_8529);

return statearr_8624;
})();
var statearr_8625_8693 = state_8587__$1;
(statearr_8625_8693[(2)] = null);

(statearr_8625_8693[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8588 === (43))){
var state_8587__$1 = state_8587;
var statearr_8626_8694 = state_8587__$1;
(statearr_8626_8694[(2)] = null);

(statearr_8626_8694[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8588 === (29))){
var inst_8571 = (state_8587[(2)]);
var state_8587__$1 = state_8587;
var statearr_8627_8695 = state_8587__$1;
(statearr_8627_8695[(2)] = inst_8571);

(statearr_8627_8695[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8588 === (44))){
var inst_8580 = (state_8587[(2)]);
var state_8587__$1 = (function (){var statearr_8628 = state_8587;
(statearr_8628[(28)] = inst_8580);

return statearr_8628;
})();
var statearr_8629_8696 = state_8587__$1;
(statearr_8629_8696[(2)] = null);

(statearr_8629_8696[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8588 === (6))){
var inst_8519 = (state_8587[(29)]);
var inst_8518 = cljs.core.deref(cs);
var inst_8519__$1 = cljs.core.keys(inst_8518);
var inst_8520 = cljs.core.count(inst_8519__$1);
var inst_8521 = cljs.core.reset_BANG_(dctr,inst_8520);
var inst_8526 = cljs.core.seq(inst_8519__$1);
var inst_8527 = inst_8526;
var inst_8528 = null;
var inst_8529 = (0);
var inst_8530 = (0);
var state_8587__$1 = (function (){var statearr_8630 = state_8587;
(statearr_8630[(20)] = inst_8527);

(statearr_8630[(9)] = inst_8528);

(statearr_8630[(10)] = inst_8530);

(statearr_8630[(29)] = inst_8519__$1);

(statearr_8630[(21)] = inst_8529);

(statearr_8630[(30)] = inst_8521);

return statearr_8630;
})();
var statearr_8631_8697 = state_8587__$1;
(statearr_8631_8697[(2)] = null);

(statearr_8631_8697[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8588 === (28))){
var inst_8527 = (state_8587[(20)]);
var inst_8546 = (state_8587[(25)]);
var inst_8546__$1 = cljs.core.seq(inst_8527);
var state_8587__$1 = (function (){var statearr_8632 = state_8587;
(statearr_8632[(25)] = inst_8546__$1);

return statearr_8632;
})();
if(inst_8546__$1){
var statearr_8633_8698 = state_8587__$1;
(statearr_8633_8698[(1)] = (33));

} else {
var statearr_8634_8699 = state_8587__$1;
(statearr_8634_8699[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8588 === (25))){
var inst_8530 = (state_8587[(10)]);
var inst_8529 = (state_8587[(21)]);
var inst_8532 = (inst_8530 < inst_8529);
var inst_8533 = inst_8532;
var state_8587__$1 = state_8587;
if(cljs.core.truth_(inst_8533)){
var statearr_8635_8700 = state_8587__$1;
(statearr_8635_8700[(1)] = (27));

} else {
var statearr_8636_8701 = state_8587__$1;
(statearr_8636_8701[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8588 === (34))){
var state_8587__$1 = state_8587;
var statearr_8637_8702 = state_8587__$1;
(statearr_8637_8702[(2)] = null);

(statearr_8637_8702[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8588 === (17))){
var state_8587__$1 = state_8587;
var statearr_8638_8703 = state_8587__$1;
(statearr_8638_8703[(2)] = null);

(statearr_8638_8703[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8588 === (3))){
var inst_8585 = (state_8587[(2)]);
var state_8587__$1 = state_8587;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8587__$1,inst_8585);
} else {
if((state_val_8588 === (12))){
var inst_8514 = (state_8587[(2)]);
var state_8587__$1 = state_8587;
var statearr_8639_8704 = state_8587__$1;
(statearr_8639_8704[(2)] = inst_8514);

(statearr_8639_8704[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8588 === (2))){
var state_8587__$1 = state_8587;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8587__$1,(4),ch);
} else {
if((state_val_8588 === (23))){
var state_8587__$1 = state_8587;
var statearr_8640_8705 = state_8587__$1;
(statearr_8640_8705[(2)] = null);

(statearr_8640_8705[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8588 === (35))){
var inst_8569 = (state_8587[(2)]);
var state_8587__$1 = state_8587;
var statearr_8641_8706 = state_8587__$1;
(statearr_8641_8706[(2)] = inst_8569);

(statearr_8641_8706[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8588 === (19))){
var inst_8486 = (state_8587[(7)]);
var inst_8490 = cljs.core.chunk_first(inst_8486);
var inst_8491 = cljs.core.chunk_rest(inst_8486);
var inst_8492 = cljs.core.count(inst_8490);
var inst_8464 = inst_8491;
var inst_8465 = inst_8490;
var inst_8466 = inst_8492;
var inst_8467 = (0);
var state_8587__$1 = (function (){var statearr_8642 = state_8587;
(statearr_8642[(14)] = inst_8464);

(statearr_8642[(15)] = inst_8466);

(statearr_8642[(16)] = inst_8465);

(statearr_8642[(17)] = inst_8467);

return statearr_8642;
})();
var statearr_8643_8707 = state_8587__$1;
(statearr_8643_8707[(2)] = null);

(statearr_8643_8707[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8588 === (11))){
var inst_8486 = (state_8587[(7)]);
var inst_8464 = (state_8587[(14)]);
var inst_8486__$1 = cljs.core.seq(inst_8464);
var state_8587__$1 = (function (){var statearr_8644 = state_8587;
(statearr_8644[(7)] = inst_8486__$1);

return statearr_8644;
})();
if(inst_8486__$1){
var statearr_8645_8708 = state_8587__$1;
(statearr_8645_8708[(1)] = (16));

} else {
var statearr_8646_8709 = state_8587__$1;
(statearr_8646_8709[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8588 === (9))){
var inst_8516 = (state_8587[(2)]);
var state_8587__$1 = state_8587;
var statearr_8647_8710 = state_8587__$1;
(statearr_8647_8710[(2)] = inst_8516);

(statearr_8647_8710[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8588 === (5))){
var inst_8462 = cljs.core.deref(cs);
var inst_8463 = cljs.core.seq(inst_8462);
var inst_8464 = inst_8463;
var inst_8465 = null;
var inst_8466 = (0);
var inst_8467 = (0);
var state_8587__$1 = (function (){var statearr_8648 = state_8587;
(statearr_8648[(14)] = inst_8464);

(statearr_8648[(15)] = inst_8466);

(statearr_8648[(16)] = inst_8465);

(statearr_8648[(17)] = inst_8467);

return statearr_8648;
})();
var statearr_8649_8711 = state_8587__$1;
(statearr_8649_8711[(2)] = null);

(statearr_8649_8711[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8588 === (14))){
var state_8587__$1 = state_8587;
var statearr_8650_8712 = state_8587__$1;
(statearr_8650_8712[(2)] = null);

(statearr_8650_8712[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8588 === (45))){
var inst_8577 = (state_8587[(2)]);
var state_8587__$1 = state_8587;
var statearr_8651_8713 = state_8587__$1;
(statearr_8651_8713[(2)] = inst_8577);

(statearr_8651_8713[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8588 === (26))){
var inst_8519 = (state_8587[(29)]);
var inst_8573 = (state_8587[(2)]);
var inst_8574 = cljs.core.seq(inst_8519);
var state_8587__$1 = (function (){var statearr_8652 = state_8587;
(statearr_8652[(31)] = inst_8573);

return statearr_8652;
})();
if(inst_8574){
var statearr_8653_8714 = state_8587__$1;
(statearr_8653_8714[(1)] = (42));

} else {
var statearr_8654_8715 = state_8587__$1;
(statearr_8654_8715[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8588 === (16))){
var inst_8486 = (state_8587[(7)]);
var inst_8488 = cljs.core.chunked_seq_QMARK_(inst_8486);
var state_8587__$1 = state_8587;
if(inst_8488){
var statearr_8655_8716 = state_8587__$1;
(statearr_8655_8716[(1)] = (19));

} else {
var statearr_8656_8717 = state_8587__$1;
(statearr_8656_8717[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8588 === (38))){
var inst_8566 = (state_8587[(2)]);
var state_8587__$1 = state_8587;
var statearr_8657_8718 = state_8587__$1;
(statearr_8657_8718[(2)] = inst_8566);

(statearr_8657_8718[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8588 === (30))){
var state_8587__$1 = state_8587;
var statearr_8658_8719 = state_8587__$1;
(statearr_8658_8719[(2)] = null);

(statearr_8658_8719[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8588 === (10))){
var inst_8465 = (state_8587[(16)]);
var inst_8467 = (state_8587[(17)]);
var inst_8475 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_8465,inst_8467);
var inst_8476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_8475,(0),null);
var inst_8477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_8475,(1),null);
var state_8587__$1 = (function (){var statearr_8659 = state_8587;
(statearr_8659[(26)] = inst_8476);

return statearr_8659;
})();
if(cljs.core.truth_(inst_8477)){
var statearr_8660_8720 = state_8587__$1;
(statearr_8660_8720[(1)] = (13));

} else {
var statearr_8661_8721 = state_8587__$1;
(statearr_8661_8721[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8588 === (18))){
var inst_8512 = (state_8587[(2)]);
var state_8587__$1 = state_8587;
var statearr_8662_8722 = state_8587__$1;
(statearr_8662_8722[(2)] = inst_8512);

(statearr_8662_8722[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8588 === (42))){
var state_8587__$1 = state_8587;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8587__$1,(45),dchan);
} else {
if((state_val_8588 === (37))){
var inst_8555 = (state_8587[(23)]);
var inst_8455 = (state_8587[(12)]);
var inst_8546 = (state_8587[(25)]);
var inst_8555__$1 = cljs.core.first(inst_8546);
var inst_8556 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_8555__$1,inst_8455,done);
var state_8587__$1 = (function (){var statearr_8663 = state_8587;
(statearr_8663[(23)] = inst_8555__$1);

return statearr_8663;
})();
if(cljs.core.truth_(inst_8556)){
var statearr_8664_8723 = state_8587__$1;
(statearr_8664_8723[(1)] = (39));

} else {
var statearr_8665_8724 = state_8587__$1;
(statearr_8665_8724[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8588 === (8))){
var inst_8466 = (state_8587[(15)]);
var inst_8467 = (state_8587[(17)]);
var inst_8469 = (inst_8467 < inst_8466);
var inst_8470 = inst_8469;
var state_8587__$1 = state_8587;
if(cljs.core.truth_(inst_8470)){
var statearr_8666_8725 = state_8587__$1;
(statearr_8666_8725[(1)] = (10));

} else {
var statearr_8667_8726 = state_8587__$1;
(statearr_8667_8726[(1)] = (11));

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
});})(c__7851__auto___8672,cs,m,dchan,dctr,done))
;
return ((function (switch__7749__auto__,c__7851__auto___8672,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__7750__auto__ = null;
var cljs$core$async$mult_$_state_machine__7750__auto____0 = (function (){
var statearr_8668 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8668[(0)] = cljs$core$async$mult_$_state_machine__7750__auto__);

(statearr_8668[(1)] = (1));

return statearr_8668;
});
var cljs$core$async$mult_$_state_machine__7750__auto____1 = (function (state_8587){
while(true){
var ret_value__7751__auto__ = (function (){try{while(true){
var result__7752__auto__ = switch__7749__auto__(state_8587);
if(cljs.core.keyword_identical_QMARK_(result__7752__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7752__auto__;
}
break;
}
}catch (e8669){if((e8669 instanceof Object)){
var ex__7753__auto__ = e8669;
var statearr_8670_8727 = state_8587;
(statearr_8670_8727[(5)] = ex__7753__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8587);

return cljs.core.cst$kw$recur;
} else {
throw e8669;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7751__auto__,cljs.core.cst$kw$recur)){
var G__8728 = state_8587;
state_8587 = G__8728;
continue;
} else {
return ret_value__7751__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__7750__auto__ = function(state_8587){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__7750__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__7750__auto____1.call(this,state_8587);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__7750__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__7750__auto____0;
cljs$core$async$mult_$_state_machine__7750__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__7750__auto____1;
return cljs$core$async$mult_$_state_machine__7750__auto__;
})()
;})(switch__7749__auto__,c__7851__auto___8672,cs,m,dchan,dctr,done))
})();
var state__7853__auto__ = (function (){var statearr_8671 = (f__7852__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7852__auto__.cljs$core$IFn$_invoke$arity$0() : f__7852__auto__.call(null));
(statearr_8671[(6)] = c__7851__auto___8672);

return statearr_8671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7853__auto__);
});})(c__7851__auto___8672,cs,m,dchan,dctr,done))
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
var G__8730 = arguments.length;
switch (G__8730) {
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
var len__4499__auto___8742 = arguments.length;
var i__4500__auto___8743 = (0);
while(true){
if((i__4500__auto___8743 < len__4499__auto___8742)){
args__4502__auto__.push((arguments[i__4500__auto___8743]));

var G__8744 = (i__4500__auto___8743 + (1));
i__4500__auto___8743 = G__8744;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__8736){
var map__8737 = p__8736;
var map__8737__$1 = ((((!((map__8737 == null)))?(((((map__8737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8737.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8737):map__8737);
var opts = map__8737__$1;
var statearr_8739_8745 = state;
(statearr_8739_8745[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__8737,map__8737__$1,opts){
return (function (val){
var statearr_8740_8746 = state;
(statearr_8740_8746[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__8737,map__8737__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_8741_8747 = state;
(statearr_8741_8747[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq8732){
var G__8733 = cljs.core.first(seq8732);
var seq8732__$1 = cljs.core.next(seq8732);
var G__8734 = cljs.core.first(seq8732__$1);
var seq8732__$2 = cljs.core.next(seq8732__$1);
var G__8735 = cljs.core.first(seq8732__$2);
var seq8732__$3 = cljs.core.next(seq8732__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8733,G__8734,G__8735,seq8732__$3);
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
if(typeof cljs.core.async.t_cljs$core$async8748 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8748 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta8749){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta8749 = meta8749;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_8750,meta8749__$1){
var self__ = this;
var _8750__$1 = this;
return (new cljs.core.async.t_cljs$core$async8748(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta8749__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8748.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_8750){
var self__ = this;
var _8750__$1 = this;
return self__.meta8749;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8748.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8748.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8748.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8748.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8748.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8748.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8748.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8748.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async8748.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta8749], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8748.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8748.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8748";

cljs.core.async.t_cljs$core$async8748.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async8748");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8748.
 */
cljs.core.async.__GT_t_cljs$core$async8748 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async8748(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta8749){
return (new cljs.core.async.t_cljs$core$async8748(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta8749));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async8748(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7851__auto___8912 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7851__auto___8912,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7852__auto__ = (function (){var switch__7749__auto__ = ((function (c__7851__auto___8912,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_8852){
var state_val_8853 = (state_8852[(1)]);
if((state_val_8853 === (7))){
var inst_8767 = (state_8852[(2)]);
var state_8852__$1 = state_8852;
var statearr_8854_8913 = state_8852__$1;
(statearr_8854_8913[(2)] = inst_8767);

(statearr_8854_8913[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8853 === (20))){
var inst_8779 = (state_8852[(7)]);
var state_8852__$1 = state_8852;
var statearr_8855_8914 = state_8852__$1;
(statearr_8855_8914[(2)] = inst_8779);

(statearr_8855_8914[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8853 === (27))){
var state_8852__$1 = state_8852;
var statearr_8856_8915 = state_8852__$1;
(statearr_8856_8915[(2)] = null);

(statearr_8856_8915[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8853 === (1))){
var inst_8754 = (state_8852[(8)]);
var inst_8754__$1 = calc_state();
var inst_8756 = (inst_8754__$1 == null);
var inst_8757 = cljs.core.not(inst_8756);
var state_8852__$1 = (function (){var statearr_8857 = state_8852;
(statearr_8857[(8)] = inst_8754__$1);

return statearr_8857;
})();
if(inst_8757){
var statearr_8858_8916 = state_8852__$1;
(statearr_8858_8916[(1)] = (2));

} else {
var statearr_8859_8917 = state_8852__$1;
(statearr_8859_8917[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8853 === (24))){
var inst_8812 = (state_8852[(9)]);
var inst_8803 = (state_8852[(10)]);
var inst_8826 = (state_8852[(11)]);
var inst_8826__$1 = (inst_8803.cljs$core$IFn$_invoke$arity$1 ? inst_8803.cljs$core$IFn$_invoke$arity$1(inst_8812) : inst_8803.call(null,inst_8812));
var state_8852__$1 = (function (){var statearr_8860 = state_8852;
(statearr_8860[(11)] = inst_8826__$1);

return statearr_8860;
})();
if(cljs.core.truth_(inst_8826__$1)){
var statearr_8861_8918 = state_8852__$1;
(statearr_8861_8918[(1)] = (29));

} else {
var statearr_8862_8919 = state_8852__$1;
(statearr_8862_8919[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8853 === (4))){
var inst_8770 = (state_8852[(2)]);
var state_8852__$1 = state_8852;
if(cljs.core.truth_(inst_8770)){
var statearr_8863_8920 = state_8852__$1;
(statearr_8863_8920[(1)] = (8));

} else {
var statearr_8864_8921 = state_8852__$1;
(statearr_8864_8921[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8853 === (15))){
var inst_8797 = (state_8852[(2)]);
var state_8852__$1 = state_8852;
if(cljs.core.truth_(inst_8797)){
var statearr_8865_8922 = state_8852__$1;
(statearr_8865_8922[(1)] = (19));

} else {
var statearr_8866_8923 = state_8852__$1;
(statearr_8866_8923[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8853 === (21))){
var inst_8802 = (state_8852[(12)]);
var inst_8802__$1 = (state_8852[(2)]);
var inst_8803 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_8802__$1,cljs.core.cst$kw$solos);
var inst_8804 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_8802__$1,cljs.core.cst$kw$mutes);
var inst_8805 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_8802__$1,cljs.core.cst$kw$reads);
var state_8852__$1 = (function (){var statearr_8867 = state_8852;
(statearr_8867[(10)] = inst_8803);

(statearr_8867[(13)] = inst_8804);

(statearr_8867[(12)] = inst_8802__$1);

return statearr_8867;
})();
return cljs.core.async.ioc_alts_BANG_(state_8852__$1,(22),inst_8805);
} else {
if((state_val_8853 === (31))){
var inst_8834 = (state_8852[(2)]);
var state_8852__$1 = state_8852;
if(cljs.core.truth_(inst_8834)){
var statearr_8868_8924 = state_8852__$1;
(statearr_8868_8924[(1)] = (32));

} else {
var statearr_8869_8925 = state_8852__$1;
(statearr_8869_8925[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8853 === (32))){
var inst_8811 = (state_8852[(14)]);
var state_8852__$1 = state_8852;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8852__$1,(35),out,inst_8811);
} else {
if((state_val_8853 === (33))){
var inst_8802 = (state_8852[(12)]);
var inst_8779 = inst_8802;
var state_8852__$1 = (function (){var statearr_8870 = state_8852;
(statearr_8870[(7)] = inst_8779);

return statearr_8870;
})();
var statearr_8871_8926 = state_8852__$1;
(statearr_8871_8926[(2)] = null);

(statearr_8871_8926[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8853 === (13))){
var inst_8779 = (state_8852[(7)]);
var inst_8786 = inst_8779.cljs$lang$protocol_mask$partition0$;
var inst_8787 = (inst_8786 & (64));
var inst_8788 = inst_8779.cljs$core$ISeq$;
var inst_8789 = (cljs.core.PROTOCOL_SENTINEL === inst_8788);
var inst_8790 = ((inst_8787) || (inst_8789));
var state_8852__$1 = state_8852;
if(cljs.core.truth_(inst_8790)){
var statearr_8872_8927 = state_8852__$1;
(statearr_8872_8927[(1)] = (16));

} else {
var statearr_8873_8928 = state_8852__$1;
(statearr_8873_8928[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8853 === (22))){
var inst_8812 = (state_8852[(9)]);
var inst_8811 = (state_8852[(14)]);
var inst_8810 = (state_8852[(2)]);
var inst_8811__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_8810,(0),null);
var inst_8812__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_8810,(1),null);
var inst_8813 = (inst_8811__$1 == null);
var inst_8814 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_8812__$1,change);
var inst_8815 = ((inst_8813) || (inst_8814));
var state_8852__$1 = (function (){var statearr_8874 = state_8852;
(statearr_8874[(9)] = inst_8812__$1);

(statearr_8874[(14)] = inst_8811__$1);

return statearr_8874;
})();
if(cljs.core.truth_(inst_8815)){
var statearr_8875_8929 = state_8852__$1;
(statearr_8875_8929[(1)] = (23));

} else {
var statearr_8876_8930 = state_8852__$1;
(statearr_8876_8930[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8853 === (36))){
var inst_8802 = (state_8852[(12)]);
var inst_8779 = inst_8802;
var state_8852__$1 = (function (){var statearr_8877 = state_8852;
(statearr_8877[(7)] = inst_8779);

return statearr_8877;
})();
var statearr_8878_8931 = state_8852__$1;
(statearr_8878_8931[(2)] = null);

(statearr_8878_8931[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8853 === (29))){
var inst_8826 = (state_8852[(11)]);
var state_8852__$1 = state_8852;
var statearr_8879_8932 = state_8852__$1;
(statearr_8879_8932[(2)] = inst_8826);

(statearr_8879_8932[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8853 === (6))){
var state_8852__$1 = state_8852;
var statearr_8880_8933 = state_8852__$1;
(statearr_8880_8933[(2)] = false);

(statearr_8880_8933[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8853 === (28))){
var inst_8822 = (state_8852[(2)]);
var inst_8823 = calc_state();
var inst_8779 = inst_8823;
var state_8852__$1 = (function (){var statearr_8881 = state_8852;
(statearr_8881[(7)] = inst_8779);

(statearr_8881[(15)] = inst_8822);

return statearr_8881;
})();
var statearr_8882_8934 = state_8852__$1;
(statearr_8882_8934[(2)] = null);

(statearr_8882_8934[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8853 === (25))){
var inst_8848 = (state_8852[(2)]);
var state_8852__$1 = state_8852;
var statearr_8883_8935 = state_8852__$1;
(statearr_8883_8935[(2)] = inst_8848);

(statearr_8883_8935[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8853 === (34))){
var inst_8846 = (state_8852[(2)]);
var state_8852__$1 = state_8852;
var statearr_8884_8936 = state_8852__$1;
(statearr_8884_8936[(2)] = inst_8846);

(statearr_8884_8936[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8853 === (17))){
var state_8852__$1 = state_8852;
var statearr_8885_8937 = state_8852__$1;
(statearr_8885_8937[(2)] = false);

(statearr_8885_8937[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8853 === (3))){
var state_8852__$1 = state_8852;
var statearr_8886_8938 = state_8852__$1;
(statearr_8886_8938[(2)] = false);

(statearr_8886_8938[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8853 === (12))){
var inst_8850 = (state_8852[(2)]);
var state_8852__$1 = state_8852;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8852__$1,inst_8850);
} else {
if((state_val_8853 === (2))){
var inst_8754 = (state_8852[(8)]);
var inst_8759 = inst_8754.cljs$lang$protocol_mask$partition0$;
var inst_8760 = (inst_8759 & (64));
var inst_8761 = inst_8754.cljs$core$ISeq$;
var inst_8762 = (cljs.core.PROTOCOL_SENTINEL === inst_8761);
var inst_8763 = ((inst_8760) || (inst_8762));
var state_8852__$1 = state_8852;
if(cljs.core.truth_(inst_8763)){
var statearr_8887_8939 = state_8852__$1;
(statearr_8887_8939[(1)] = (5));

} else {
var statearr_8888_8940 = state_8852__$1;
(statearr_8888_8940[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8853 === (23))){
var inst_8811 = (state_8852[(14)]);
var inst_8817 = (inst_8811 == null);
var state_8852__$1 = state_8852;
if(cljs.core.truth_(inst_8817)){
var statearr_8889_8941 = state_8852__$1;
(statearr_8889_8941[(1)] = (26));

} else {
var statearr_8890_8942 = state_8852__$1;
(statearr_8890_8942[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8853 === (35))){
var inst_8837 = (state_8852[(2)]);
var state_8852__$1 = state_8852;
if(cljs.core.truth_(inst_8837)){
var statearr_8891_8943 = state_8852__$1;
(statearr_8891_8943[(1)] = (36));

} else {
var statearr_8892_8944 = state_8852__$1;
(statearr_8892_8944[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8853 === (19))){
var inst_8779 = (state_8852[(7)]);
var inst_8799 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_8779);
var state_8852__$1 = state_8852;
var statearr_8893_8945 = state_8852__$1;
(statearr_8893_8945[(2)] = inst_8799);

(statearr_8893_8945[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8853 === (11))){
var inst_8779 = (state_8852[(7)]);
var inst_8783 = (inst_8779 == null);
var inst_8784 = cljs.core.not(inst_8783);
var state_8852__$1 = state_8852;
if(inst_8784){
var statearr_8894_8946 = state_8852__$1;
(statearr_8894_8946[(1)] = (13));

} else {
var statearr_8895_8947 = state_8852__$1;
(statearr_8895_8947[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8853 === (9))){
var inst_8754 = (state_8852[(8)]);
var state_8852__$1 = state_8852;
var statearr_8896_8948 = state_8852__$1;
(statearr_8896_8948[(2)] = inst_8754);

(statearr_8896_8948[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8853 === (5))){
var state_8852__$1 = state_8852;
var statearr_8897_8949 = state_8852__$1;
(statearr_8897_8949[(2)] = true);

(statearr_8897_8949[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8853 === (14))){
var state_8852__$1 = state_8852;
var statearr_8898_8950 = state_8852__$1;
(statearr_8898_8950[(2)] = false);

(statearr_8898_8950[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8853 === (26))){
var inst_8812 = (state_8852[(9)]);
var inst_8819 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_8812);
var state_8852__$1 = state_8852;
var statearr_8899_8951 = state_8852__$1;
(statearr_8899_8951[(2)] = inst_8819);

(statearr_8899_8951[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8853 === (16))){
var state_8852__$1 = state_8852;
var statearr_8900_8952 = state_8852__$1;
(statearr_8900_8952[(2)] = true);

(statearr_8900_8952[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8853 === (38))){
var inst_8842 = (state_8852[(2)]);
var state_8852__$1 = state_8852;
var statearr_8901_8953 = state_8852__$1;
(statearr_8901_8953[(2)] = inst_8842);

(statearr_8901_8953[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8853 === (30))){
var inst_8812 = (state_8852[(9)]);
var inst_8803 = (state_8852[(10)]);
var inst_8804 = (state_8852[(13)]);
var inst_8829 = cljs.core.empty_QMARK_(inst_8803);
var inst_8830 = (inst_8804.cljs$core$IFn$_invoke$arity$1 ? inst_8804.cljs$core$IFn$_invoke$arity$1(inst_8812) : inst_8804.call(null,inst_8812));
var inst_8831 = cljs.core.not(inst_8830);
var inst_8832 = ((inst_8829) && (inst_8831));
var state_8852__$1 = state_8852;
var statearr_8902_8954 = state_8852__$1;
(statearr_8902_8954[(2)] = inst_8832);

(statearr_8902_8954[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8853 === (10))){
var inst_8754 = (state_8852[(8)]);
var inst_8775 = (state_8852[(2)]);
var inst_8776 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_8775,cljs.core.cst$kw$solos);
var inst_8777 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_8775,cljs.core.cst$kw$mutes);
var inst_8778 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_8775,cljs.core.cst$kw$reads);
var inst_8779 = inst_8754;
var state_8852__$1 = (function (){var statearr_8903 = state_8852;
(statearr_8903[(16)] = inst_8777);

(statearr_8903[(17)] = inst_8778);

(statearr_8903[(7)] = inst_8779);

(statearr_8903[(18)] = inst_8776);

return statearr_8903;
})();
var statearr_8904_8955 = state_8852__$1;
(statearr_8904_8955[(2)] = null);

(statearr_8904_8955[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8853 === (18))){
var inst_8794 = (state_8852[(2)]);
var state_8852__$1 = state_8852;
var statearr_8905_8956 = state_8852__$1;
(statearr_8905_8956[(2)] = inst_8794);

(statearr_8905_8956[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8853 === (37))){
var state_8852__$1 = state_8852;
var statearr_8906_8957 = state_8852__$1;
(statearr_8906_8957[(2)] = null);

(statearr_8906_8957[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8853 === (8))){
var inst_8754 = (state_8852[(8)]);
var inst_8772 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_8754);
var state_8852__$1 = state_8852;
var statearr_8907_8958 = state_8852__$1;
(statearr_8907_8958[(2)] = inst_8772);

(statearr_8907_8958[(1)] = (10));


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
});})(c__7851__auto___8912,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7749__auto__,c__7851__auto___8912,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__7750__auto__ = null;
var cljs$core$async$mix_$_state_machine__7750__auto____0 = (function (){
var statearr_8908 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8908[(0)] = cljs$core$async$mix_$_state_machine__7750__auto__);

(statearr_8908[(1)] = (1));

return statearr_8908;
});
var cljs$core$async$mix_$_state_machine__7750__auto____1 = (function (state_8852){
while(true){
var ret_value__7751__auto__ = (function (){try{while(true){
var result__7752__auto__ = switch__7749__auto__(state_8852);
if(cljs.core.keyword_identical_QMARK_(result__7752__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7752__auto__;
}
break;
}
}catch (e8909){if((e8909 instanceof Object)){
var ex__7753__auto__ = e8909;
var statearr_8910_8959 = state_8852;
(statearr_8910_8959[(5)] = ex__7753__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8852);

return cljs.core.cst$kw$recur;
} else {
throw e8909;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7751__auto__,cljs.core.cst$kw$recur)){
var G__8960 = state_8852;
state_8852 = G__8960;
continue;
} else {
return ret_value__7751__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__7750__auto__ = function(state_8852){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__7750__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__7750__auto____1.call(this,state_8852);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__7750__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__7750__auto____0;
cljs$core$async$mix_$_state_machine__7750__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__7750__auto____1;
return cljs$core$async$mix_$_state_machine__7750__auto__;
})()
;})(switch__7749__auto__,c__7851__auto___8912,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7853__auto__ = (function (){var statearr_8911 = (f__7852__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7852__auto__.cljs$core$IFn$_invoke$arity$0() : f__7852__auto__.call(null));
(statearr_8911[(6)] = c__7851__auto___8912);

return statearr_8911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7853__auto__);
});})(c__7851__auto___8912,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__8962 = arguments.length;
switch (G__8962) {
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
var G__8966 = arguments.length;
switch (G__8966) {
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
return (function (p1__8964_SHARP_){
if(cljs.core.truth_((p1__8964_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__8964_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__8964_SHARP_.call(null,topic)))){
return p1__8964_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__8964_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async8967 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8967 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta8968){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta8968 = meta8968;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8967.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_8969,meta8968__$1){
var self__ = this;
var _8969__$1 = this;
return (new cljs.core.async.t_cljs$core$async8967(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta8968__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8967.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_8969){
var self__ = this;
var _8969__$1 = this;
return self__.meta8968;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8967.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8967.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8967.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8967.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8967.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async8967.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8967.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8967.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta8968], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8967.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8967.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8967";

cljs.core.async.t_cljs$core$async8967.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async8967");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8967.
 */
cljs.core.async.__GT_t_cljs$core$async8967 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async8967(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta8968){
return (new cljs.core.async.t_cljs$core$async8967(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta8968));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async8967(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7851__auto___9087 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7851__auto___9087,mults,ensure_mult,p){
return (function (){
var f__7852__auto__ = (function (){var switch__7749__auto__ = ((function (c__7851__auto___9087,mults,ensure_mult,p){
return (function (state_9041){
var state_val_9042 = (state_9041[(1)]);
if((state_val_9042 === (7))){
var inst_9037 = (state_9041[(2)]);
var state_9041__$1 = state_9041;
var statearr_9043_9088 = state_9041__$1;
(statearr_9043_9088[(2)] = inst_9037);

(statearr_9043_9088[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9042 === (20))){
var state_9041__$1 = state_9041;
var statearr_9044_9089 = state_9041__$1;
(statearr_9044_9089[(2)] = null);

(statearr_9044_9089[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9042 === (1))){
var state_9041__$1 = state_9041;
var statearr_9045_9090 = state_9041__$1;
(statearr_9045_9090[(2)] = null);

(statearr_9045_9090[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9042 === (24))){
var inst_9020 = (state_9041[(7)]);
var inst_9029 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_9020);
var state_9041__$1 = state_9041;
var statearr_9046_9091 = state_9041__$1;
(statearr_9046_9091[(2)] = inst_9029);

(statearr_9046_9091[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9042 === (4))){
var inst_8972 = (state_9041[(8)]);
var inst_8972__$1 = (state_9041[(2)]);
var inst_8973 = (inst_8972__$1 == null);
var state_9041__$1 = (function (){var statearr_9047 = state_9041;
(statearr_9047[(8)] = inst_8972__$1);

return statearr_9047;
})();
if(cljs.core.truth_(inst_8973)){
var statearr_9048_9092 = state_9041__$1;
(statearr_9048_9092[(1)] = (5));

} else {
var statearr_9049_9093 = state_9041__$1;
(statearr_9049_9093[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9042 === (15))){
var inst_9014 = (state_9041[(2)]);
var state_9041__$1 = state_9041;
var statearr_9050_9094 = state_9041__$1;
(statearr_9050_9094[(2)] = inst_9014);

(statearr_9050_9094[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9042 === (21))){
var inst_9034 = (state_9041[(2)]);
var state_9041__$1 = (function (){var statearr_9051 = state_9041;
(statearr_9051[(9)] = inst_9034);

return statearr_9051;
})();
var statearr_9052_9095 = state_9041__$1;
(statearr_9052_9095[(2)] = null);

(statearr_9052_9095[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9042 === (13))){
var inst_8996 = (state_9041[(10)]);
var inst_8998 = cljs.core.chunked_seq_QMARK_(inst_8996);
var state_9041__$1 = state_9041;
if(inst_8998){
var statearr_9053_9096 = state_9041__$1;
(statearr_9053_9096[(1)] = (16));

} else {
var statearr_9054_9097 = state_9041__$1;
(statearr_9054_9097[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9042 === (22))){
var inst_9026 = (state_9041[(2)]);
var state_9041__$1 = state_9041;
if(cljs.core.truth_(inst_9026)){
var statearr_9055_9098 = state_9041__$1;
(statearr_9055_9098[(1)] = (23));

} else {
var statearr_9056_9099 = state_9041__$1;
(statearr_9056_9099[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9042 === (6))){
var inst_8972 = (state_9041[(8)]);
var inst_9022 = (state_9041[(11)]);
var inst_9020 = (state_9041[(7)]);
var inst_9020__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_8972) : topic_fn.call(null,inst_8972));
var inst_9021 = cljs.core.deref(mults);
var inst_9022__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_9021,inst_9020__$1);
var state_9041__$1 = (function (){var statearr_9057 = state_9041;
(statearr_9057[(11)] = inst_9022__$1);

(statearr_9057[(7)] = inst_9020__$1);

return statearr_9057;
})();
if(cljs.core.truth_(inst_9022__$1)){
var statearr_9058_9100 = state_9041__$1;
(statearr_9058_9100[(1)] = (19));

} else {
var statearr_9059_9101 = state_9041__$1;
(statearr_9059_9101[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9042 === (25))){
var inst_9031 = (state_9041[(2)]);
var state_9041__$1 = state_9041;
var statearr_9060_9102 = state_9041__$1;
(statearr_9060_9102[(2)] = inst_9031);

(statearr_9060_9102[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9042 === (17))){
var inst_8996 = (state_9041[(10)]);
var inst_9005 = cljs.core.first(inst_8996);
var inst_9006 = cljs.core.async.muxch_STAR_(inst_9005);
var inst_9007 = cljs.core.async.close_BANG_(inst_9006);
var inst_9008 = cljs.core.next(inst_8996);
var inst_8982 = inst_9008;
var inst_8983 = null;
var inst_8984 = (0);
var inst_8985 = (0);
var state_9041__$1 = (function (){var statearr_9061 = state_9041;
(statearr_9061[(12)] = inst_8982);

(statearr_9061[(13)] = inst_8984);

(statearr_9061[(14)] = inst_8983);

(statearr_9061[(15)] = inst_8985);

(statearr_9061[(16)] = inst_9007);

return statearr_9061;
})();
var statearr_9062_9103 = state_9041__$1;
(statearr_9062_9103[(2)] = null);

(statearr_9062_9103[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9042 === (3))){
var inst_9039 = (state_9041[(2)]);
var state_9041__$1 = state_9041;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9041__$1,inst_9039);
} else {
if((state_val_9042 === (12))){
var inst_9016 = (state_9041[(2)]);
var state_9041__$1 = state_9041;
var statearr_9063_9104 = state_9041__$1;
(statearr_9063_9104[(2)] = inst_9016);

(statearr_9063_9104[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9042 === (2))){
var state_9041__$1 = state_9041;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9041__$1,(4),ch);
} else {
if((state_val_9042 === (23))){
var state_9041__$1 = state_9041;
var statearr_9064_9105 = state_9041__$1;
(statearr_9064_9105[(2)] = null);

(statearr_9064_9105[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9042 === (19))){
var inst_8972 = (state_9041[(8)]);
var inst_9022 = (state_9041[(11)]);
var inst_9024 = cljs.core.async.muxch_STAR_(inst_9022);
var state_9041__$1 = state_9041;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9041__$1,(22),inst_9024,inst_8972);
} else {
if((state_val_9042 === (11))){
var inst_8982 = (state_9041[(12)]);
var inst_8996 = (state_9041[(10)]);
var inst_8996__$1 = cljs.core.seq(inst_8982);
var state_9041__$1 = (function (){var statearr_9065 = state_9041;
(statearr_9065[(10)] = inst_8996__$1);

return statearr_9065;
})();
if(inst_8996__$1){
var statearr_9066_9106 = state_9041__$1;
(statearr_9066_9106[(1)] = (13));

} else {
var statearr_9067_9107 = state_9041__$1;
(statearr_9067_9107[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9042 === (9))){
var inst_9018 = (state_9041[(2)]);
var state_9041__$1 = state_9041;
var statearr_9068_9108 = state_9041__$1;
(statearr_9068_9108[(2)] = inst_9018);

(statearr_9068_9108[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9042 === (5))){
var inst_8979 = cljs.core.deref(mults);
var inst_8980 = cljs.core.vals(inst_8979);
var inst_8981 = cljs.core.seq(inst_8980);
var inst_8982 = inst_8981;
var inst_8983 = null;
var inst_8984 = (0);
var inst_8985 = (0);
var state_9041__$1 = (function (){var statearr_9069 = state_9041;
(statearr_9069[(12)] = inst_8982);

(statearr_9069[(13)] = inst_8984);

(statearr_9069[(14)] = inst_8983);

(statearr_9069[(15)] = inst_8985);

return statearr_9069;
})();
var statearr_9070_9109 = state_9041__$1;
(statearr_9070_9109[(2)] = null);

(statearr_9070_9109[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9042 === (14))){
var state_9041__$1 = state_9041;
var statearr_9074_9110 = state_9041__$1;
(statearr_9074_9110[(2)] = null);

(statearr_9074_9110[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9042 === (16))){
var inst_8996 = (state_9041[(10)]);
var inst_9000 = cljs.core.chunk_first(inst_8996);
var inst_9001 = cljs.core.chunk_rest(inst_8996);
var inst_9002 = cljs.core.count(inst_9000);
var inst_8982 = inst_9001;
var inst_8983 = inst_9000;
var inst_8984 = inst_9002;
var inst_8985 = (0);
var state_9041__$1 = (function (){var statearr_9075 = state_9041;
(statearr_9075[(12)] = inst_8982);

(statearr_9075[(13)] = inst_8984);

(statearr_9075[(14)] = inst_8983);

(statearr_9075[(15)] = inst_8985);

return statearr_9075;
})();
var statearr_9076_9111 = state_9041__$1;
(statearr_9076_9111[(2)] = null);

(statearr_9076_9111[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9042 === (10))){
var inst_8982 = (state_9041[(12)]);
var inst_8984 = (state_9041[(13)]);
var inst_8983 = (state_9041[(14)]);
var inst_8985 = (state_9041[(15)]);
var inst_8990 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_8983,inst_8985);
var inst_8991 = cljs.core.async.muxch_STAR_(inst_8990);
var inst_8992 = cljs.core.async.close_BANG_(inst_8991);
var inst_8993 = (inst_8985 + (1));
var tmp9071 = inst_8982;
var tmp9072 = inst_8984;
var tmp9073 = inst_8983;
var inst_8982__$1 = tmp9071;
var inst_8983__$1 = tmp9073;
var inst_8984__$1 = tmp9072;
var inst_8985__$1 = inst_8993;
var state_9041__$1 = (function (){var statearr_9077 = state_9041;
(statearr_9077[(12)] = inst_8982__$1);

(statearr_9077[(13)] = inst_8984__$1);

(statearr_9077[(14)] = inst_8983__$1);

(statearr_9077[(15)] = inst_8985__$1);

(statearr_9077[(17)] = inst_8992);

return statearr_9077;
})();
var statearr_9078_9112 = state_9041__$1;
(statearr_9078_9112[(2)] = null);

(statearr_9078_9112[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9042 === (18))){
var inst_9011 = (state_9041[(2)]);
var state_9041__$1 = state_9041;
var statearr_9079_9113 = state_9041__$1;
(statearr_9079_9113[(2)] = inst_9011);

(statearr_9079_9113[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9042 === (8))){
var inst_8984 = (state_9041[(13)]);
var inst_8985 = (state_9041[(15)]);
var inst_8987 = (inst_8985 < inst_8984);
var inst_8988 = inst_8987;
var state_9041__$1 = state_9041;
if(cljs.core.truth_(inst_8988)){
var statearr_9080_9114 = state_9041__$1;
(statearr_9080_9114[(1)] = (10));

} else {
var statearr_9081_9115 = state_9041__$1;
(statearr_9081_9115[(1)] = (11));

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
});})(c__7851__auto___9087,mults,ensure_mult,p))
;
return ((function (switch__7749__auto__,c__7851__auto___9087,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__7750__auto__ = null;
var cljs$core$async$state_machine__7750__auto____0 = (function (){
var statearr_9082 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9082[(0)] = cljs$core$async$state_machine__7750__auto__);

(statearr_9082[(1)] = (1));

return statearr_9082;
});
var cljs$core$async$state_machine__7750__auto____1 = (function (state_9041){
while(true){
var ret_value__7751__auto__ = (function (){try{while(true){
var result__7752__auto__ = switch__7749__auto__(state_9041);
if(cljs.core.keyword_identical_QMARK_(result__7752__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7752__auto__;
}
break;
}
}catch (e9083){if((e9083 instanceof Object)){
var ex__7753__auto__ = e9083;
var statearr_9084_9116 = state_9041;
(statearr_9084_9116[(5)] = ex__7753__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9041);

return cljs.core.cst$kw$recur;
} else {
throw e9083;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7751__auto__,cljs.core.cst$kw$recur)){
var G__9117 = state_9041;
state_9041 = G__9117;
continue;
} else {
return ret_value__7751__auto__;
}
break;
}
});
cljs$core$async$state_machine__7750__auto__ = function(state_9041){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7750__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7750__auto____1.call(this,state_9041);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__7750__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7750__auto____0;
cljs$core$async$state_machine__7750__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7750__auto____1;
return cljs$core$async$state_machine__7750__auto__;
})()
;})(switch__7749__auto__,c__7851__auto___9087,mults,ensure_mult,p))
})();
var state__7853__auto__ = (function (){var statearr_9085 = (f__7852__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7852__auto__.cljs$core$IFn$_invoke$arity$0() : f__7852__auto__.call(null));
(statearr_9085[(6)] = c__7851__auto___9087);

return statearr_9085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7853__auto__);
});})(c__7851__auto___9087,mults,ensure_mult,p))
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
var G__9119 = arguments.length;
switch (G__9119) {
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
var G__9122 = arguments.length;
switch (G__9122) {
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
var G__9125 = arguments.length;
switch (G__9125) {
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
var c__7851__auto___9192 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7851__auto___9192,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7852__auto__ = (function (){var switch__7749__auto__ = ((function (c__7851__auto___9192,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_9164){
var state_val_9165 = (state_9164[(1)]);
if((state_val_9165 === (7))){
var state_9164__$1 = state_9164;
var statearr_9166_9193 = state_9164__$1;
(statearr_9166_9193[(2)] = null);

(statearr_9166_9193[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9165 === (1))){
var state_9164__$1 = state_9164;
var statearr_9167_9194 = state_9164__$1;
(statearr_9167_9194[(2)] = null);

(statearr_9167_9194[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9165 === (4))){
var inst_9128 = (state_9164[(7)]);
var inst_9130 = (inst_9128 < cnt);
var state_9164__$1 = state_9164;
if(cljs.core.truth_(inst_9130)){
var statearr_9168_9195 = state_9164__$1;
(statearr_9168_9195[(1)] = (6));

} else {
var statearr_9169_9196 = state_9164__$1;
(statearr_9169_9196[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9165 === (15))){
var inst_9160 = (state_9164[(2)]);
var state_9164__$1 = state_9164;
var statearr_9170_9197 = state_9164__$1;
(statearr_9170_9197[(2)] = inst_9160);

(statearr_9170_9197[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9165 === (13))){
var inst_9153 = cljs.core.async.close_BANG_(out);
var state_9164__$1 = state_9164;
var statearr_9171_9198 = state_9164__$1;
(statearr_9171_9198[(2)] = inst_9153);

(statearr_9171_9198[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9165 === (6))){
var state_9164__$1 = state_9164;
var statearr_9172_9199 = state_9164__$1;
(statearr_9172_9199[(2)] = null);

(statearr_9172_9199[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9165 === (3))){
var inst_9162 = (state_9164[(2)]);
var state_9164__$1 = state_9164;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9164__$1,inst_9162);
} else {
if((state_val_9165 === (12))){
var inst_9150 = (state_9164[(8)]);
var inst_9150__$1 = (state_9164[(2)]);
var inst_9151 = cljs.core.some(cljs.core.nil_QMARK_,inst_9150__$1);
var state_9164__$1 = (function (){var statearr_9173 = state_9164;
(statearr_9173[(8)] = inst_9150__$1);

return statearr_9173;
})();
if(cljs.core.truth_(inst_9151)){
var statearr_9174_9200 = state_9164__$1;
(statearr_9174_9200[(1)] = (13));

} else {
var statearr_9175_9201 = state_9164__$1;
(statearr_9175_9201[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9165 === (2))){
var inst_9127 = cljs.core.reset_BANG_(dctr,cnt);
var inst_9128 = (0);
var state_9164__$1 = (function (){var statearr_9176 = state_9164;
(statearr_9176[(9)] = inst_9127);

(statearr_9176[(7)] = inst_9128);

return statearr_9176;
})();
var statearr_9177_9202 = state_9164__$1;
(statearr_9177_9202[(2)] = null);

(statearr_9177_9202[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9165 === (11))){
var inst_9128 = (state_9164[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_9164,(10),Object,null,(9));
var inst_9137 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_9128) : chs__$1.call(null,inst_9128));
var inst_9138 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_9128) : done.call(null,inst_9128));
var inst_9139 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_9137,inst_9138);
var state_9164__$1 = state_9164;
var statearr_9178_9203 = state_9164__$1;
(statearr_9178_9203[(2)] = inst_9139);


cljs.core.async.impl.ioc_helpers.process_exception(state_9164__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_9165 === (9))){
var inst_9128 = (state_9164[(7)]);
var inst_9141 = (state_9164[(2)]);
var inst_9142 = (inst_9128 + (1));
var inst_9128__$1 = inst_9142;
var state_9164__$1 = (function (){var statearr_9179 = state_9164;
(statearr_9179[(10)] = inst_9141);

(statearr_9179[(7)] = inst_9128__$1);

return statearr_9179;
})();
var statearr_9180_9204 = state_9164__$1;
(statearr_9180_9204[(2)] = null);

(statearr_9180_9204[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9165 === (5))){
var inst_9148 = (state_9164[(2)]);
var state_9164__$1 = (function (){var statearr_9181 = state_9164;
(statearr_9181[(11)] = inst_9148);

return statearr_9181;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9164__$1,(12),dchan);
} else {
if((state_val_9165 === (14))){
var inst_9150 = (state_9164[(8)]);
var inst_9155 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_9150);
var state_9164__$1 = state_9164;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9164__$1,(16),out,inst_9155);
} else {
if((state_val_9165 === (16))){
var inst_9157 = (state_9164[(2)]);
var state_9164__$1 = (function (){var statearr_9182 = state_9164;
(statearr_9182[(12)] = inst_9157);

return statearr_9182;
})();
var statearr_9183_9205 = state_9164__$1;
(statearr_9183_9205[(2)] = null);

(statearr_9183_9205[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9165 === (10))){
var inst_9132 = (state_9164[(2)]);
var inst_9133 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_9164__$1 = (function (){var statearr_9184 = state_9164;
(statearr_9184[(13)] = inst_9132);

return statearr_9184;
})();
var statearr_9185_9206 = state_9164__$1;
(statearr_9185_9206[(2)] = inst_9133);


cljs.core.async.impl.ioc_helpers.process_exception(state_9164__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_9165 === (8))){
var inst_9146 = (state_9164[(2)]);
var state_9164__$1 = state_9164;
var statearr_9186_9207 = state_9164__$1;
(statearr_9186_9207[(2)] = inst_9146);

(statearr_9186_9207[(1)] = (5));


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
});})(c__7851__auto___9192,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7749__auto__,c__7851__auto___9192,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__7750__auto__ = null;
var cljs$core$async$state_machine__7750__auto____0 = (function (){
var statearr_9187 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9187[(0)] = cljs$core$async$state_machine__7750__auto__);

(statearr_9187[(1)] = (1));

return statearr_9187;
});
var cljs$core$async$state_machine__7750__auto____1 = (function (state_9164){
while(true){
var ret_value__7751__auto__ = (function (){try{while(true){
var result__7752__auto__ = switch__7749__auto__(state_9164);
if(cljs.core.keyword_identical_QMARK_(result__7752__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7752__auto__;
}
break;
}
}catch (e9188){if((e9188 instanceof Object)){
var ex__7753__auto__ = e9188;
var statearr_9189_9208 = state_9164;
(statearr_9189_9208[(5)] = ex__7753__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9164);

return cljs.core.cst$kw$recur;
} else {
throw e9188;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7751__auto__,cljs.core.cst$kw$recur)){
var G__9209 = state_9164;
state_9164 = G__9209;
continue;
} else {
return ret_value__7751__auto__;
}
break;
}
});
cljs$core$async$state_machine__7750__auto__ = function(state_9164){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7750__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7750__auto____1.call(this,state_9164);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__7750__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7750__auto____0;
cljs$core$async$state_machine__7750__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7750__auto____1;
return cljs$core$async$state_machine__7750__auto__;
})()
;})(switch__7749__auto__,c__7851__auto___9192,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7853__auto__ = (function (){var statearr_9190 = (f__7852__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7852__auto__.cljs$core$IFn$_invoke$arity$0() : f__7852__auto__.call(null));
(statearr_9190[(6)] = c__7851__auto___9192);

return statearr_9190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7853__auto__);
});})(c__7851__auto___9192,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__9212 = arguments.length;
switch (G__9212) {
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
var c__7851__auto___9266 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7851__auto___9266,out){
return (function (){
var f__7852__auto__ = (function (){var switch__7749__auto__ = ((function (c__7851__auto___9266,out){
return (function (state_9244){
var state_val_9245 = (state_9244[(1)]);
if((state_val_9245 === (7))){
var inst_9223 = (state_9244[(7)]);
var inst_9224 = (state_9244[(8)]);
var inst_9223__$1 = (state_9244[(2)]);
var inst_9224__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_9223__$1,(0),null);
var inst_9225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_9223__$1,(1),null);
var inst_9226 = (inst_9224__$1 == null);
var state_9244__$1 = (function (){var statearr_9246 = state_9244;
(statearr_9246[(7)] = inst_9223__$1);

(statearr_9246[(9)] = inst_9225);

(statearr_9246[(8)] = inst_9224__$1);

return statearr_9246;
})();
if(cljs.core.truth_(inst_9226)){
var statearr_9247_9267 = state_9244__$1;
(statearr_9247_9267[(1)] = (8));

} else {
var statearr_9248_9268 = state_9244__$1;
(statearr_9248_9268[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9245 === (1))){
var inst_9213 = cljs.core.vec(chs);
var inst_9214 = inst_9213;
var state_9244__$1 = (function (){var statearr_9249 = state_9244;
(statearr_9249[(10)] = inst_9214);

return statearr_9249;
})();
var statearr_9250_9269 = state_9244__$1;
(statearr_9250_9269[(2)] = null);

(statearr_9250_9269[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9245 === (4))){
var inst_9214 = (state_9244[(10)]);
var state_9244__$1 = state_9244;
return cljs.core.async.ioc_alts_BANG_(state_9244__$1,(7),inst_9214);
} else {
if((state_val_9245 === (6))){
var inst_9240 = (state_9244[(2)]);
var state_9244__$1 = state_9244;
var statearr_9251_9270 = state_9244__$1;
(statearr_9251_9270[(2)] = inst_9240);

(statearr_9251_9270[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9245 === (3))){
var inst_9242 = (state_9244[(2)]);
var state_9244__$1 = state_9244;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9244__$1,inst_9242);
} else {
if((state_val_9245 === (2))){
var inst_9214 = (state_9244[(10)]);
var inst_9216 = cljs.core.count(inst_9214);
var inst_9217 = (inst_9216 > (0));
var state_9244__$1 = state_9244;
if(cljs.core.truth_(inst_9217)){
var statearr_9253_9271 = state_9244__$1;
(statearr_9253_9271[(1)] = (4));

} else {
var statearr_9254_9272 = state_9244__$1;
(statearr_9254_9272[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9245 === (11))){
var inst_9214 = (state_9244[(10)]);
var inst_9233 = (state_9244[(2)]);
var tmp9252 = inst_9214;
var inst_9214__$1 = tmp9252;
var state_9244__$1 = (function (){var statearr_9255 = state_9244;
(statearr_9255[(10)] = inst_9214__$1);

(statearr_9255[(11)] = inst_9233);

return statearr_9255;
})();
var statearr_9256_9273 = state_9244__$1;
(statearr_9256_9273[(2)] = null);

(statearr_9256_9273[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9245 === (9))){
var inst_9224 = (state_9244[(8)]);
var state_9244__$1 = state_9244;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9244__$1,(11),out,inst_9224);
} else {
if((state_val_9245 === (5))){
var inst_9238 = cljs.core.async.close_BANG_(out);
var state_9244__$1 = state_9244;
var statearr_9257_9274 = state_9244__$1;
(statearr_9257_9274[(2)] = inst_9238);

(statearr_9257_9274[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9245 === (10))){
var inst_9236 = (state_9244[(2)]);
var state_9244__$1 = state_9244;
var statearr_9258_9275 = state_9244__$1;
(statearr_9258_9275[(2)] = inst_9236);

(statearr_9258_9275[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9245 === (8))){
var inst_9214 = (state_9244[(10)]);
var inst_9223 = (state_9244[(7)]);
var inst_9225 = (state_9244[(9)]);
var inst_9224 = (state_9244[(8)]);
var inst_9228 = (function (){var cs = inst_9214;
var vec__9219 = inst_9223;
var v = inst_9224;
var c = inst_9225;
return ((function (cs,vec__9219,v,c,inst_9214,inst_9223,inst_9225,inst_9224,state_val_9245,c__7851__auto___9266,out){
return (function (p1__9210_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__9210_SHARP_);
});
;})(cs,vec__9219,v,c,inst_9214,inst_9223,inst_9225,inst_9224,state_val_9245,c__7851__auto___9266,out))
})();
var inst_9229 = cljs.core.filterv(inst_9228,inst_9214);
var inst_9214__$1 = inst_9229;
var state_9244__$1 = (function (){var statearr_9259 = state_9244;
(statearr_9259[(10)] = inst_9214__$1);

return statearr_9259;
})();
var statearr_9260_9276 = state_9244__$1;
(statearr_9260_9276[(2)] = null);

(statearr_9260_9276[(1)] = (2));


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
});})(c__7851__auto___9266,out))
;
return ((function (switch__7749__auto__,c__7851__auto___9266,out){
return (function() {
var cljs$core$async$state_machine__7750__auto__ = null;
var cljs$core$async$state_machine__7750__auto____0 = (function (){
var statearr_9261 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9261[(0)] = cljs$core$async$state_machine__7750__auto__);

(statearr_9261[(1)] = (1));

return statearr_9261;
});
var cljs$core$async$state_machine__7750__auto____1 = (function (state_9244){
while(true){
var ret_value__7751__auto__ = (function (){try{while(true){
var result__7752__auto__ = switch__7749__auto__(state_9244);
if(cljs.core.keyword_identical_QMARK_(result__7752__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7752__auto__;
}
break;
}
}catch (e9262){if((e9262 instanceof Object)){
var ex__7753__auto__ = e9262;
var statearr_9263_9277 = state_9244;
(statearr_9263_9277[(5)] = ex__7753__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9244);

return cljs.core.cst$kw$recur;
} else {
throw e9262;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7751__auto__,cljs.core.cst$kw$recur)){
var G__9278 = state_9244;
state_9244 = G__9278;
continue;
} else {
return ret_value__7751__auto__;
}
break;
}
});
cljs$core$async$state_machine__7750__auto__ = function(state_9244){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7750__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7750__auto____1.call(this,state_9244);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__7750__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7750__auto____0;
cljs$core$async$state_machine__7750__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7750__auto____1;
return cljs$core$async$state_machine__7750__auto__;
})()
;})(switch__7749__auto__,c__7851__auto___9266,out))
})();
var state__7853__auto__ = (function (){var statearr_9264 = (f__7852__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7852__auto__.cljs$core$IFn$_invoke$arity$0() : f__7852__auto__.call(null));
(statearr_9264[(6)] = c__7851__auto___9266);

return statearr_9264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7853__auto__);
});})(c__7851__auto___9266,out))
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
var G__9280 = arguments.length;
switch (G__9280) {
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
var c__7851__auto___9325 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7851__auto___9325,out){
return (function (){
var f__7852__auto__ = (function (){var switch__7749__auto__ = ((function (c__7851__auto___9325,out){
return (function (state_9304){
var state_val_9305 = (state_9304[(1)]);
if((state_val_9305 === (7))){
var inst_9286 = (state_9304[(7)]);
var inst_9286__$1 = (state_9304[(2)]);
var inst_9287 = (inst_9286__$1 == null);
var inst_9288 = cljs.core.not(inst_9287);
var state_9304__$1 = (function (){var statearr_9306 = state_9304;
(statearr_9306[(7)] = inst_9286__$1);

return statearr_9306;
})();
if(inst_9288){
var statearr_9307_9326 = state_9304__$1;
(statearr_9307_9326[(1)] = (8));

} else {
var statearr_9308_9327 = state_9304__$1;
(statearr_9308_9327[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9305 === (1))){
var inst_9281 = (0);
var state_9304__$1 = (function (){var statearr_9309 = state_9304;
(statearr_9309[(8)] = inst_9281);

return statearr_9309;
})();
var statearr_9310_9328 = state_9304__$1;
(statearr_9310_9328[(2)] = null);

(statearr_9310_9328[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9305 === (4))){
var state_9304__$1 = state_9304;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9304__$1,(7),ch);
} else {
if((state_val_9305 === (6))){
var inst_9299 = (state_9304[(2)]);
var state_9304__$1 = state_9304;
var statearr_9311_9329 = state_9304__$1;
(statearr_9311_9329[(2)] = inst_9299);

(statearr_9311_9329[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9305 === (3))){
var inst_9301 = (state_9304[(2)]);
var inst_9302 = cljs.core.async.close_BANG_(out);
var state_9304__$1 = (function (){var statearr_9312 = state_9304;
(statearr_9312[(9)] = inst_9301);

return statearr_9312;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_9304__$1,inst_9302);
} else {
if((state_val_9305 === (2))){
var inst_9281 = (state_9304[(8)]);
var inst_9283 = (inst_9281 < n);
var state_9304__$1 = state_9304;
if(cljs.core.truth_(inst_9283)){
var statearr_9313_9330 = state_9304__$1;
(statearr_9313_9330[(1)] = (4));

} else {
var statearr_9314_9331 = state_9304__$1;
(statearr_9314_9331[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9305 === (11))){
var inst_9281 = (state_9304[(8)]);
var inst_9291 = (state_9304[(2)]);
var inst_9292 = (inst_9281 + (1));
var inst_9281__$1 = inst_9292;
var state_9304__$1 = (function (){var statearr_9315 = state_9304;
(statearr_9315[(8)] = inst_9281__$1);

(statearr_9315[(10)] = inst_9291);

return statearr_9315;
})();
var statearr_9316_9332 = state_9304__$1;
(statearr_9316_9332[(2)] = null);

(statearr_9316_9332[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9305 === (9))){
var state_9304__$1 = state_9304;
var statearr_9317_9333 = state_9304__$1;
(statearr_9317_9333[(2)] = null);

(statearr_9317_9333[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9305 === (5))){
var state_9304__$1 = state_9304;
var statearr_9318_9334 = state_9304__$1;
(statearr_9318_9334[(2)] = null);

(statearr_9318_9334[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9305 === (10))){
var inst_9296 = (state_9304[(2)]);
var state_9304__$1 = state_9304;
var statearr_9319_9335 = state_9304__$1;
(statearr_9319_9335[(2)] = inst_9296);

(statearr_9319_9335[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9305 === (8))){
var inst_9286 = (state_9304[(7)]);
var state_9304__$1 = state_9304;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9304__$1,(11),out,inst_9286);
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
});})(c__7851__auto___9325,out))
;
return ((function (switch__7749__auto__,c__7851__auto___9325,out){
return (function() {
var cljs$core$async$state_machine__7750__auto__ = null;
var cljs$core$async$state_machine__7750__auto____0 = (function (){
var statearr_9320 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9320[(0)] = cljs$core$async$state_machine__7750__auto__);

(statearr_9320[(1)] = (1));

return statearr_9320;
});
var cljs$core$async$state_machine__7750__auto____1 = (function (state_9304){
while(true){
var ret_value__7751__auto__ = (function (){try{while(true){
var result__7752__auto__ = switch__7749__auto__(state_9304);
if(cljs.core.keyword_identical_QMARK_(result__7752__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7752__auto__;
}
break;
}
}catch (e9321){if((e9321 instanceof Object)){
var ex__7753__auto__ = e9321;
var statearr_9322_9336 = state_9304;
(statearr_9322_9336[(5)] = ex__7753__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9304);

return cljs.core.cst$kw$recur;
} else {
throw e9321;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7751__auto__,cljs.core.cst$kw$recur)){
var G__9337 = state_9304;
state_9304 = G__9337;
continue;
} else {
return ret_value__7751__auto__;
}
break;
}
});
cljs$core$async$state_machine__7750__auto__ = function(state_9304){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7750__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7750__auto____1.call(this,state_9304);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__7750__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7750__auto____0;
cljs$core$async$state_machine__7750__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7750__auto____1;
return cljs$core$async$state_machine__7750__auto__;
})()
;})(switch__7749__auto__,c__7851__auto___9325,out))
})();
var state__7853__auto__ = (function (){var statearr_9323 = (f__7852__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7852__auto__.cljs$core$IFn$_invoke$arity$0() : f__7852__auto__.call(null));
(statearr_9323[(6)] = c__7851__auto___9325);

return statearr_9323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7853__auto__);
});})(c__7851__auto___9325,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async9339 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9339 = (function (f,ch,meta9340){
this.f = f;
this.ch = ch;
this.meta9340 = meta9340;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async9339.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9341,meta9340__$1){
var self__ = this;
var _9341__$1 = this;
return (new cljs.core.async.t_cljs$core$async9339(self__.f,self__.ch,meta9340__$1));
});

cljs.core.async.t_cljs$core$async9339.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9341){
var self__ = this;
var _9341__$1 = this;
return self__.meta9340;
});

cljs.core.async.t_cljs$core$async9339.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9339.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async9339.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async9339.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9339.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async9342 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9342 = (function (f,ch,meta9340,_,fn1,meta9343){
this.f = f;
this.ch = ch;
this.meta9340 = meta9340;
this._ = _;
this.fn1 = fn1;
this.meta9343 = meta9343;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async9342.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_9344,meta9343__$1){
var self__ = this;
var _9344__$1 = this;
return (new cljs.core.async.t_cljs$core$async9342(self__.f,self__.ch,self__.meta9340,self__._,self__.fn1,meta9343__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async9342.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_9344){
var self__ = this;
var _9344__$1 = this;
return self__.meta9343;
});})(___$1))
;

cljs.core.async.t_cljs$core$async9342.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9342.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async9342.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async9342.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__9338_SHARP_){
var G__9345 = (((p1__9338_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__9338_SHARP_) : self__.f.call(null,p1__9338_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__9345) : f1.call(null,G__9345));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async9342.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta9340,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async9339], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta9343], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async9342.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9342.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9342";

cljs.core.async.t_cljs$core$async9342.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async9342");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9342.
 */
cljs.core.async.__GT_t_cljs$core$async9342 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async9342(f__$1,ch__$1,meta9340__$1,___$2,fn1__$1,meta9343){
return (new cljs.core.async.t_cljs$core$async9342(f__$1,ch__$1,meta9340__$1,___$2,fn1__$1,meta9343));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async9342(self__.f,self__.ch,self__.meta9340,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__9346 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__9346) : self__.f.call(null,G__9346));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async9339.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9339.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async9339.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta9340], null);
});

cljs.core.async.t_cljs$core$async9339.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9339.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9339";

cljs.core.async.t_cljs$core$async9339.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async9339");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9339.
 */
cljs.core.async.__GT_t_cljs$core$async9339 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async9339(f__$1,ch__$1,meta9340){
return (new cljs.core.async.t_cljs$core$async9339(f__$1,ch__$1,meta9340));
});

}

return (new cljs.core.async.t_cljs$core$async9339(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async9347 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9347 = (function (f,ch,meta9348){
this.f = f;
this.ch = ch;
this.meta9348 = meta9348;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async9347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9349,meta9348__$1){
var self__ = this;
var _9349__$1 = this;
return (new cljs.core.async.t_cljs$core$async9347(self__.f,self__.ch,meta9348__$1));
});

cljs.core.async.t_cljs$core$async9347.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9349){
var self__ = this;
var _9349__$1 = this;
return self__.meta9348;
});

cljs.core.async.t_cljs$core$async9347.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9347.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async9347.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9347.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async9347.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9347.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async9347.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta9348], null);
});

cljs.core.async.t_cljs$core$async9347.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9347.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9347";

cljs.core.async.t_cljs$core$async9347.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async9347");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9347.
 */
cljs.core.async.__GT_t_cljs$core$async9347 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async9347(f__$1,ch__$1,meta9348){
return (new cljs.core.async.t_cljs$core$async9347(f__$1,ch__$1,meta9348));
});

}

return (new cljs.core.async.t_cljs$core$async9347(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async9350 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9350 = (function (p,ch,meta9351){
this.p = p;
this.ch = ch;
this.meta9351 = meta9351;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async9350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9352,meta9351__$1){
var self__ = this;
var _9352__$1 = this;
return (new cljs.core.async.t_cljs$core$async9350(self__.p,self__.ch,meta9351__$1));
});

cljs.core.async.t_cljs$core$async9350.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9352){
var self__ = this;
var _9352__$1 = this;
return self__.meta9351;
});

cljs.core.async.t_cljs$core$async9350.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9350.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async9350.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async9350.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9350.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async9350.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9350.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async9350.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta9351], null);
});

cljs.core.async.t_cljs$core$async9350.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9350.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9350";

cljs.core.async.t_cljs$core$async9350.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async9350");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9350.
 */
cljs.core.async.__GT_t_cljs$core$async9350 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async9350(p__$1,ch__$1,meta9351){
return (new cljs.core.async.t_cljs$core$async9350(p__$1,ch__$1,meta9351));
});

}

return (new cljs.core.async.t_cljs$core$async9350(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__9354 = arguments.length;
switch (G__9354) {
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
var c__7851__auto___9394 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7851__auto___9394,out){
return (function (){
var f__7852__auto__ = (function (){var switch__7749__auto__ = ((function (c__7851__auto___9394,out){
return (function (state_9375){
var state_val_9376 = (state_9375[(1)]);
if((state_val_9376 === (7))){
var inst_9371 = (state_9375[(2)]);
var state_9375__$1 = state_9375;
var statearr_9377_9395 = state_9375__$1;
(statearr_9377_9395[(2)] = inst_9371);

(statearr_9377_9395[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9376 === (1))){
var state_9375__$1 = state_9375;
var statearr_9378_9396 = state_9375__$1;
(statearr_9378_9396[(2)] = null);

(statearr_9378_9396[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9376 === (4))){
var inst_9357 = (state_9375[(7)]);
var inst_9357__$1 = (state_9375[(2)]);
var inst_9358 = (inst_9357__$1 == null);
var state_9375__$1 = (function (){var statearr_9379 = state_9375;
(statearr_9379[(7)] = inst_9357__$1);

return statearr_9379;
})();
if(cljs.core.truth_(inst_9358)){
var statearr_9380_9397 = state_9375__$1;
(statearr_9380_9397[(1)] = (5));

} else {
var statearr_9381_9398 = state_9375__$1;
(statearr_9381_9398[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9376 === (6))){
var inst_9357 = (state_9375[(7)]);
var inst_9362 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_9357) : p.call(null,inst_9357));
var state_9375__$1 = state_9375;
if(cljs.core.truth_(inst_9362)){
var statearr_9382_9399 = state_9375__$1;
(statearr_9382_9399[(1)] = (8));

} else {
var statearr_9383_9400 = state_9375__$1;
(statearr_9383_9400[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9376 === (3))){
var inst_9373 = (state_9375[(2)]);
var state_9375__$1 = state_9375;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9375__$1,inst_9373);
} else {
if((state_val_9376 === (2))){
var state_9375__$1 = state_9375;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9375__$1,(4),ch);
} else {
if((state_val_9376 === (11))){
var inst_9365 = (state_9375[(2)]);
var state_9375__$1 = state_9375;
var statearr_9384_9401 = state_9375__$1;
(statearr_9384_9401[(2)] = inst_9365);

(statearr_9384_9401[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9376 === (9))){
var state_9375__$1 = state_9375;
var statearr_9385_9402 = state_9375__$1;
(statearr_9385_9402[(2)] = null);

(statearr_9385_9402[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9376 === (5))){
var inst_9360 = cljs.core.async.close_BANG_(out);
var state_9375__$1 = state_9375;
var statearr_9386_9403 = state_9375__$1;
(statearr_9386_9403[(2)] = inst_9360);

(statearr_9386_9403[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9376 === (10))){
var inst_9368 = (state_9375[(2)]);
var state_9375__$1 = (function (){var statearr_9387 = state_9375;
(statearr_9387[(8)] = inst_9368);

return statearr_9387;
})();
var statearr_9388_9404 = state_9375__$1;
(statearr_9388_9404[(2)] = null);

(statearr_9388_9404[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9376 === (8))){
var inst_9357 = (state_9375[(7)]);
var state_9375__$1 = state_9375;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9375__$1,(11),out,inst_9357);
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
});})(c__7851__auto___9394,out))
;
return ((function (switch__7749__auto__,c__7851__auto___9394,out){
return (function() {
var cljs$core$async$state_machine__7750__auto__ = null;
var cljs$core$async$state_machine__7750__auto____0 = (function (){
var statearr_9389 = [null,null,null,null,null,null,null,null,null];
(statearr_9389[(0)] = cljs$core$async$state_machine__7750__auto__);

(statearr_9389[(1)] = (1));

return statearr_9389;
});
var cljs$core$async$state_machine__7750__auto____1 = (function (state_9375){
while(true){
var ret_value__7751__auto__ = (function (){try{while(true){
var result__7752__auto__ = switch__7749__auto__(state_9375);
if(cljs.core.keyword_identical_QMARK_(result__7752__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7752__auto__;
}
break;
}
}catch (e9390){if((e9390 instanceof Object)){
var ex__7753__auto__ = e9390;
var statearr_9391_9405 = state_9375;
(statearr_9391_9405[(5)] = ex__7753__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9375);

return cljs.core.cst$kw$recur;
} else {
throw e9390;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7751__auto__,cljs.core.cst$kw$recur)){
var G__9406 = state_9375;
state_9375 = G__9406;
continue;
} else {
return ret_value__7751__auto__;
}
break;
}
});
cljs$core$async$state_machine__7750__auto__ = function(state_9375){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7750__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7750__auto____1.call(this,state_9375);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__7750__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7750__auto____0;
cljs$core$async$state_machine__7750__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7750__auto____1;
return cljs$core$async$state_machine__7750__auto__;
})()
;})(switch__7749__auto__,c__7851__auto___9394,out))
})();
var state__7853__auto__ = (function (){var statearr_9392 = (f__7852__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7852__auto__.cljs$core$IFn$_invoke$arity$0() : f__7852__auto__.call(null));
(statearr_9392[(6)] = c__7851__auto___9394);

return statearr_9392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7853__auto__);
});})(c__7851__auto___9394,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__9408 = arguments.length;
switch (G__9408) {
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
var c__7851__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7851__auto__){
return (function (){
var f__7852__auto__ = (function (){var switch__7749__auto__ = ((function (c__7851__auto__){
return (function (state_9471){
var state_val_9472 = (state_9471[(1)]);
if((state_val_9472 === (7))){
var inst_9467 = (state_9471[(2)]);
var state_9471__$1 = state_9471;
var statearr_9473_9511 = state_9471__$1;
(statearr_9473_9511[(2)] = inst_9467);

(statearr_9473_9511[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9472 === (20))){
var inst_9437 = (state_9471[(7)]);
var inst_9448 = (state_9471[(2)]);
var inst_9449 = cljs.core.next(inst_9437);
var inst_9423 = inst_9449;
var inst_9424 = null;
var inst_9425 = (0);
var inst_9426 = (0);
var state_9471__$1 = (function (){var statearr_9474 = state_9471;
(statearr_9474[(8)] = inst_9423);

(statearr_9474[(9)] = inst_9448);

(statearr_9474[(10)] = inst_9425);

(statearr_9474[(11)] = inst_9426);

(statearr_9474[(12)] = inst_9424);

return statearr_9474;
})();
var statearr_9475_9512 = state_9471__$1;
(statearr_9475_9512[(2)] = null);

(statearr_9475_9512[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9472 === (1))){
var state_9471__$1 = state_9471;
var statearr_9476_9513 = state_9471__$1;
(statearr_9476_9513[(2)] = null);

(statearr_9476_9513[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9472 === (4))){
var inst_9412 = (state_9471[(13)]);
var inst_9412__$1 = (state_9471[(2)]);
var inst_9413 = (inst_9412__$1 == null);
var state_9471__$1 = (function (){var statearr_9477 = state_9471;
(statearr_9477[(13)] = inst_9412__$1);

return statearr_9477;
})();
if(cljs.core.truth_(inst_9413)){
var statearr_9478_9514 = state_9471__$1;
(statearr_9478_9514[(1)] = (5));

} else {
var statearr_9479_9515 = state_9471__$1;
(statearr_9479_9515[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9472 === (15))){
var state_9471__$1 = state_9471;
var statearr_9483_9516 = state_9471__$1;
(statearr_9483_9516[(2)] = null);

(statearr_9483_9516[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9472 === (21))){
var state_9471__$1 = state_9471;
var statearr_9484_9517 = state_9471__$1;
(statearr_9484_9517[(2)] = null);

(statearr_9484_9517[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9472 === (13))){
var inst_9423 = (state_9471[(8)]);
var inst_9425 = (state_9471[(10)]);
var inst_9426 = (state_9471[(11)]);
var inst_9424 = (state_9471[(12)]);
var inst_9433 = (state_9471[(2)]);
var inst_9434 = (inst_9426 + (1));
var tmp9480 = inst_9423;
var tmp9481 = inst_9425;
var tmp9482 = inst_9424;
var inst_9423__$1 = tmp9480;
var inst_9424__$1 = tmp9482;
var inst_9425__$1 = tmp9481;
var inst_9426__$1 = inst_9434;
var state_9471__$1 = (function (){var statearr_9485 = state_9471;
(statearr_9485[(14)] = inst_9433);

(statearr_9485[(8)] = inst_9423__$1);

(statearr_9485[(10)] = inst_9425__$1);

(statearr_9485[(11)] = inst_9426__$1);

(statearr_9485[(12)] = inst_9424__$1);

return statearr_9485;
})();
var statearr_9486_9518 = state_9471__$1;
(statearr_9486_9518[(2)] = null);

(statearr_9486_9518[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9472 === (22))){
var state_9471__$1 = state_9471;
var statearr_9487_9519 = state_9471__$1;
(statearr_9487_9519[(2)] = null);

(statearr_9487_9519[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9472 === (6))){
var inst_9412 = (state_9471[(13)]);
var inst_9421 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_9412) : f.call(null,inst_9412));
var inst_9422 = cljs.core.seq(inst_9421);
var inst_9423 = inst_9422;
var inst_9424 = null;
var inst_9425 = (0);
var inst_9426 = (0);
var state_9471__$1 = (function (){var statearr_9488 = state_9471;
(statearr_9488[(8)] = inst_9423);

(statearr_9488[(10)] = inst_9425);

(statearr_9488[(11)] = inst_9426);

(statearr_9488[(12)] = inst_9424);

return statearr_9488;
})();
var statearr_9489_9520 = state_9471__$1;
(statearr_9489_9520[(2)] = null);

(statearr_9489_9520[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9472 === (17))){
var inst_9437 = (state_9471[(7)]);
var inst_9441 = cljs.core.chunk_first(inst_9437);
var inst_9442 = cljs.core.chunk_rest(inst_9437);
var inst_9443 = cljs.core.count(inst_9441);
var inst_9423 = inst_9442;
var inst_9424 = inst_9441;
var inst_9425 = inst_9443;
var inst_9426 = (0);
var state_9471__$1 = (function (){var statearr_9490 = state_9471;
(statearr_9490[(8)] = inst_9423);

(statearr_9490[(10)] = inst_9425);

(statearr_9490[(11)] = inst_9426);

(statearr_9490[(12)] = inst_9424);

return statearr_9490;
})();
var statearr_9491_9521 = state_9471__$1;
(statearr_9491_9521[(2)] = null);

(statearr_9491_9521[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9472 === (3))){
var inst_9469 = (state_9471[(2)]);
var state_9471__$1 = state_9471;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9471__$1,inst_9469);
} else {
if((state_val_9472 === (12))){
var inst_9457 = (state_9471[(2)]);
var state_9471__$1 = state_9471;
var statearr_9492_9522 = state_9471__$1;
(statearr_9492_9522[(2)] = inst_9457);

(statearr_9492_9522[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9472 === (2))){
var state_9471__$1 = state_9471;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9471__$1,(4),in$);
} else {
if((state_val_9472 === (23))){
var inst_9465 = (state_9471[(2)]);
var state_9471__$1 = state_9471;
var statearr_9493_9523 = state_9471__$1;
(statearr_9493_9523[(2)] = inst_9465);

(statearr_9493_9523[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9472 === (19))){
var inst_9452 = (state_9471[(2)]);
var state_9471__$1 = state_9471;
var statearr_9494_9524 = state_9471__$1;
(statearr_9494_9524[(2)] = inst_9452);

(statearr_9494_9524[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9472 === (11))){
var inst_9423 = (state_9471[(8)]);
var inst_9437 = (state_9471[(7)]);
var inst_9437__$1 = cljs.core.seq(inst_9423);
var state_9471__$1 = (function (){var statearr_9495 = state_9471;
(statearr_9495[(7)] = inst_9437__$1);

return statearr_9495;
})();
if(inst_9437__$1){
var statearr_9496_9525 = state_9471__$1;
(statearr_9496_9525[(1)] = (14));

} else {
var statearr_9497_9526 = state_9471__$1;
(statearr_9497_9526[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9472 === (9))){
var inst_9459 = (state_9471[(2)]);
var inst_9460 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_9471__$1 = (function (){var statearr_9498 = state_9471;
(statearr_9498[(15)] = inst_9459);

return statearr_9498;
})();
if(cljs.core.truth_(inst_9460)){
var statearr_9499_9527 = state_9471__$1;
(statearr_9499_9527[(1)] = (21));

} else {
var statearr_9500_9528 = state_9471__$1;
(statearr_9500_9528[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9472 === (5))){
var inst_9415 = cljs.core.async.close_BANG_(out);
var state_9471__$1 = state_9471;
var statearr_9501_9529 = state_9471__$1;
(statearr_9501_9529[(2)] = inst_9415);

(statearr_9501_9529[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9472 === (14))){
var inst_9437 = (state_9471[(7)]);
var inst_9439 = cljs.core.chunked_seq_QMARK_(inst_9437);
var state_9471__$1 = state_9471;
if(inst_9439){
var statearr_9502_9530 = state_9471__$1;
(statearr_9502_9530[(1)] = (17));

} else {
var statearr_9503_9531 = state_9471__$1;
(statearr_9503_9531[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9472 === (16))){
var inst_9455 = (state_9471[(2)]);
var state_9471__$1 = state_9471;
var statearr_9504_9532 = state_9471__$1;
(statearr_9504_9532[(2)] = inst_9455);

(statearr_9504_9532[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9472 === (10))){
var inst_9426 = (state_9471[(11)]);
var inst_9424 = (state_9471[(12)]);
var inst_9431 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_9424,inst_9426);
var state_9471__$1 = state_9471;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9471__$1,(13),out,inst_9431);
} else {
if((state_val_9472 === (18))){
var inst_9437 = (state_9471[(7)]);
var inst_9446 = cljs.core.first(inst_9437);
var state_9471__$1 = state_9471;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9471__$1,(20),out,inst_9446);
} else {
if((state_val_9472 === (8))){
var inst_9425 = (state_9471[(10)]);
var inst_9426 = (state_9471[(11)]);
var inst_9428 = (inst_9426 < inst_9425);
var inst_9429 = inst_9428;
var state_9471__$1 = state_9471;
if(cljs.core.truth_(inst_9429)){
var statearr_9505_9533 = state_9471__$1;
(statearr_9505_9533[(1)] = (10));

} else {
var statearr_9506_9534 = state_9471__$1;
(statearr_9506_9534[(1)] = (11));

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
});})(c__7851__auto__))
;
return ((function (switch__7749__auto__,c__7851__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__7750__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__7750__auto____0 = (function (){
var statearr_9507 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9507[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__7750__auto__);

(statearr_9507[(1)] = (1));

return statearr_9507;
});
var cljs$core$async$mapcat_STAR__$_state_machine__7750__auto____1 = (function (state_9471){
while(true){
var ret_value__7751__auto__ = (function (){try{while(true){
var result__7752__auto__ = switch__7749__auto__(state_9471);
if(cljs.core.keyword_identical_QMARK_(result__7752__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7752__auto__;
}
break;
}
}catch (e9508){if((e9508 instanceof Object)){
var ex__7753__auto__ = e9508;
var statearr_9509_9535 = state_9471;
(statearr_9509_9535[(5)] = ex__7753__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9471);

return cljs.core.cst$kw$recur;
} else {
throw e9508;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7751__auto__,cljs.core.cst$kw$recur)){
var G__9536 = state_9471;
state_9471 = G__9536;
continue;
} else {
return ret_value__7751__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__7750__auto__ = function(state_9471){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__7750__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__7750__auto____1.call(this,state_9471);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__7750__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__7750__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__7750__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__7750__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__7750__auto__;
})()
;})(switch__7749__auto__,c__7851__auto__))
})();
var state__7853__auto__ = (function (){var statearr_9510 = (f__7852__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7852__auto__.cljs$core$IFn$_invoke$arity$0() : f__7852__auto__.call(null));
(statearr_9510[(6)] = c__7851__auto__);

return statearr_9510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7853__auto__);
});})(c__7851__auto__))
);

return c__7851__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__9538 = arguments.length;
switch (G__9538) {
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
var G__9541 = arguments.length;
switch (G__9541) {
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
var G__9544 = arguments.length;
switch (G__9544) {
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
var c__7851__auto___9591 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7851__auto___9591,out){
return (function (){
var f__7852__auto__ = (function (){var switch__7749__auto__ = ((function (c__7851__auto___9591,out){
return (function (state_9568){
var state_val_9569 = (state_9568[(1)]);
if((state_val_9569 === (7))){
var inst_9563 = (state_9568[(2)]);
var state_9568__$1 = state_9568;
var statearr_9570_9592 = state_9568__$1;
(statearr_9570_9592[(2)] = inst_9563);

(statearr_9570_9592[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9569 === (1))){
var inst_9545 = null;
var state_9568__$1 = (function (){var statearr_9571 = state_9568;
(statearr_9571[(7)] = inst_9545);

return statearr_9571;
})();
var statearr_9572_9593 = state_9568__$1;
(statearr_9572_9593[(2)] = null);

(statearr_9572_9593[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9569 === (4))){
var inst_9548 = (state_9568[(8)]);
var inst_9548__$1 = (state_9568[(2)]);
var inst_9549 = (inst_9548__$1 == null);
var inst_9550 = cljs.core.not(inst_9549);
var state_9568__$1 = (function (){var statearr_9573 = state_9568;
(statearr_9573[(8)] = inst_9548__$1);

return statearr_9573;
})();
if(inst_9550){
var statearr_9574_9594 = state_9568__$1;
(statearr_9574_9594[(1)] = (5));

} else {
var statearr_9575_9595 = state_9568__$1;
(statearr_9575_9595[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9569 === (6))){
var state_9568__$1 = state_9568;
var statearr_9576_9596 = state_9568__$1;
(statearr_9576_9596[(2)] = null);

(statearr_9576_9596[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9569 === (3))){
var inst_9565 = (state_9568[(2)]);
var inst_9566 = cljs.core.async.close_BANG_(out);
var state_9568__$1 = (function (){var statearr_9577 = state_9568;
(statearr_9577[(9)] = inst_9565);

return statearr_9577;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_9568__$1,inst_9566);
} else {
if((state_val_9569 === (2))){
var state_9568__$1 = state_9568;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9568__$1,(4),ch);
} else {
if((state_val_9569 === (11))){
var inst_9548 = (state_9568[(8)]);
var inst_9557 = (state_9568[(2)]);
var inst_9545 = inst_9548;
var state_9568__$1 = (function (){var statearr_9578 = state_9568;
(statearr_9578[(10)] = inst_9557);

(statearr_9578[(7)] = inst_9545);

return statearr_9578;
})();
var statearr_9579_9597 = state_9568__$1;
(statearr_9579_9597[(2)] = null);

(statearr_9579_9597[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9569 === (9))){
var inst_9548 = (state_9568[(8)]);
var state_9568__$1 = state_9568;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9568__$1,(11),out,inst_9548);
} else {
if((state_val_9569 === (5))){
var inst_9548 = (state_9568[(8)]);
var inst_9545 = (state_9568[(7)]);
var inst_9552 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_9548,inst_9545);
var state_9568__$1 = state_9568;
if(inst_9552){
var statearr_9581_9598 = state_9568__$1;
(statearr_9581_9598[(1)] = (8));

} else {
var statearr_9582_9599 = state_9568__$1;
(statearr_9582_9599[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9569 === (10))){
var inst_9560 = (state_9568[(2)]);
var state_9568__$1 = state_9568;
var statearr_9583_9600 = state_9568__$1;
(statearr_9583_9600[(2)] = inst_9560);

(statearr_9583_9600[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9569 === (8))){
var inst_9545 = (state_9568[(7)]);
var tmp9580 = inst_9545;
var inst_9545__$1 = tmp9580;
var state_9568__$1 = (function (){var statearr_9584 = state_9568;
(statearr_9584[(7)] = inst_9545__$1);

return statearr_9584;
})();
var statearr_9585_9601 = state_9568__$1;
(statearr_9585_9601[(2)] = null);

(statearr_9585_9601[(1)] = (2));


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
});})(c__7851__auto___9591,out))
;
return ((function (switch__7749__auto__,c__7851__auto___9591,out){
return (function() {
var cljs$core$async$state_machine__7750__auto__ = null;
var cljs$core$async$state_machine__7750__auto____0 = (function (){
var statearr_9586 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9586[(0)] = cljs$core$async$state_machine__7750__auto__);

(statearr_9586[(1)] = (1));

return statearr_9586;
});
var cljs$core$async$state_machine__7750__auto____1 = (function (state_9568){
while(true){
var ret_value__7751__auto__ = (function (){try{while(true){
var result__7752__auto__ = switch__7749__auto__(state_9568);
if(cljs.core.keyword_identical_QMARK_(result__7752__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7752__auto__;
}
break;
}
}catch (e9587){if((e9587 instanceof Object)){
var ex__7753__auto__ = e9587;
var statearr_9588_9602 = state_9568;
(statearr_9588_9602[(5)] = ex__7753__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9568);

return cljs.core.cst$kw$recur;
} else {
throw e9587;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7751__auto__,cljs.core.cst$kw$recur)){
var G__9603 = state_9568;
state_9568 = G__9603;
continue;
} else {
return ret_value__7751__auto__;
}
break;
}
});
cljs$core$async$state_machine__7750__auto__ = function(state_9568){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7750__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7750__auto____1.call(this,state_9568);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__7750__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7750__auto____0;
cljs$core$async$state_machine__7750__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7750__auto____1;
return cljs$core$async$state_machine__7750__auto__;
})()
;})(switch__7749__auto__,c__7851__auto___9591,out))
})();
var state__7853__auto__ = (function (){var statearr_9589 = (f__7852__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7852__auto__.cljs$core$IFn$_invoke$arity$0() : f__7852__auto__.call(null));
(statearr_9589[(6)] = c__7851__auto___9591);

return statearr_9589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7853__auto__);
});})(c__7851__auto___9591,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__9605 = arguments.length;
switch (G__9605) {
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
var c__7851__auto___9671 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7851__auto___9671,out){
return (function (){
var f__7852__auto__ = (function (){var switch__7749__auto__ = ((function (c__7851__auto___9671,out){
return (function (state_9643){
var state_val_9644 = (state_9643[(1)]);
if((state_val_9644 === (7))){
var inst_9639 = (state_9643[(2)]);
var state_9643__$1 = state_9643;
var statearr_9645_9672 = state_9643__$1;
(statearr_9645_9672[(2)] = inst_9639);

(statearr_9645_9672[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9644 === (1))){
var inst_9606 = (new Array(n));
var inst_9607 = inst_9606;
var inst_9608 = (0);
var state_9643__$1 = (function (){var statearr_9646 = state_9643;
(statearr_9646[(7)] = inst_9607);

(statearr_9646[(8)] = inst_9608);

return statearr_9646;
})();
var statearr_9647_9673 = state_9643__$1;
(statearr_9647_9673[(2)] = null);

(statearr_9647_9673[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9644 === (4))){
var inst_9611 = (state_9643[(9)]);
var inst_9611__$1 = (state_9643[(2)]);
var inst_9612 = (inst_9611__$1 == null);
var inst_9613 = cljs.core.not(inst_9612);
var state_9643__$1 = (function (){var statearr_9648 = state_9643;
(statearr_9648[(9)] = inst_9611__$1);

return statearr_9648;
})();
if(inst_9613){
var statearr_9649_9674 = state_9643__$1;
(statearr_9649_9674[(1)] = (5));

} else {
var statearr_9650_9675 = state_9643__$1;
(statearr_9650_9675[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9644 === (15))){
var inst_9633 = (state_9643[(2)]);
var state_9643__$1 = state_9643;
var statearr_9651_9676 = state_9643__$1;
(statearr_9651_9676[(2)] = inst_9633);

(statearr_9651_9676[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9644 === (13))){
var state_9643__$1 = state_9643;
var statearr_9652_9677 = state_9643__$1;
(statearr_9652_9677[(2)] = null);

(statearr_9652_9677[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9644 === (6))){
var inst_9608 = (state_9643[(8)]);
var inst_9629 = (inst_9608 > (0));
var state_9643__$1 = state_9643;
if(cljs.core.truth_(inst_9629)){
var statearr_9653_9678 = state_9643__$1;
(statearr_9653_9678[(1)] = (12));

} else {
var statearr_9654_9679 = state_9643__$1;
(statearr_9654_9679[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9644 === (3))){
var inst_9641 = (state_9643[(2)]);
var state_9643__$1 = state_9643;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9643__$1,inst_9641);
} else {
if((state_val_9644 === (12))){
var inst_9607 = (state_9643[(7)]);
var inst_9631 = cljs.core.vec(inst_9607);
var state_9643__$1 = state_9643;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9643__$1,(15),out,inst_9631);
} else {
if((state_val_9644 === (2))){
var state_9643__$1 = state_9643;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9643__$1,(4),ch);
} else {
if((state_val_9644 === (11))){
var inst_9623 = (state_9643[(2)]);
var inst_9624 = (new Array(n));
var inst_9607 = inst_9624;
var inst_9608 = (0);
var state_9643__$1 = (function (){var statearr_9655 = state_9643;
(statearr_9655[(7)] = inst_9607);

(statearr_9655[(10)] = inst_9623);

(statearr_9655[(8)] = inst_9608);

return statearr_9655;
})();
var statearr_9656_9680 = state_9643__$1;
(statearr_9656_9680[(2)] = null);

(statearr_9656_9680[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9644 === (9))){
var inst_9607 = (state_9643[(7)]);
var inst_9621 = cljs.core.vec(inst_9607);
var state_9643__$1 = state_9643;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9643__$1,(11),out,inst_9621);
} else {
if((state_val_9644 === (5))){
var inst_9607 = (state_9643[(7)]);
var inst_9611 = (state_9643[(9)]);
var inst_9608 = (state_9643[(8)]);
var inst_9616 = (state_9643[(11)]);
var inst_9615 = (inst_9607[inst_9608] = inst_9611);
var inst_9616__$1 = (inst_9608 + (1));
var inst_9617 = (inst_9616__$1 < n);
var state_9643__$1 = (function (){var statearr_9657 = state_9643;
(statearr_9657[(12)] = inst_9615);

(statearr_9657[(11)] = inst_9616__$1);

return statearr_9657;
})();
if(cljs.core.truth_(inst_9617)){
var statearr_9658_9681 = state_9643__$1;
(statearr_9658_9681[(1)] = (8));

} else {
var statearr_9659_9682 = state_9643__$1;
(statearr_9659_9682[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9644 === (14))){
var inst_9636 = (state_9643[(2)]);
var inst_9637 = cljs.core.async.close_BANG_(out);
var state_9643__$1 = (function (){var statearr_9661 = state_9643;
(statearr_9661[(13)] = inst_9636);

return statearr_9661;
})();
var statearr_9662_9683 = state_9643__$1;
(statearr_9662_9683[(2)] = inst_9637);

(statearr_9662_9683[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9644 === (10))){
var inst_9627 = (state_9643[(2)]);
var state_9643__$1 = state_9643;
var statearr_9663_9684 = state_9643__$1;
(statearr_9663_9684[(2)] = inst_9627);

(statearr_9663_9684[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9644 === (8))){
var inst_9607 = (state_9643[(7)]);
var inst_9616 = (state_9643[(11)]);
var tmp9660 = inst_9607;
var inst_9607__$1 = tmp9660;
var inst_9608 = inst_9616;
var state_9643__$1 = (function (){var statearr_9664 = state_9643;
(statearr_9664[(7)] = inst_9607__$1);

(statearr_9664[(8)] = inst_9608);

return statearr_9664;
})();
var statearr_9665_9685 = state_9643__$1;
(statearr_9665_9685[(2)] = null);

(statearr_9665_9685[(1)] = (2));


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
});})(c__7851__auto___9671,out))
;
return ((function (switch__7749__auto__,c__7851__auto___9671,out){
return (function() {
var cljs$core$async$state_machine__7750__auto__ = null;
var cljs$core$async$state_machine__7750__auto____0 = (function (){
var statearr_9666 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9666[(0)] = cljs$core$async$state_machine__7750__auto__);

(statearr_9666[(1)] = (1));

return statearr_9666;
});
var cljs$core$async$state_machine__7750__auto____1 = (function (state_9643){
while(true){
var ret_value__7751__auto__ = (function (){try{while(true){
var result__7752__auto__ = switch__7749__auto__(state_9643);
if(cljs.core.keyword_identical_QMARK_(result__7752__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7752__auto__;
}
break;
}
}catch (e9667){if((e9667 instanceof Object)){
var ex__7753__auto__ = e9667;
var statearr_9668_9686 = state_9643;
(statearr_9668_9686[(5)] = ex__7753__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9643);

return cljs.core.cst$kw$recur;
} else {
throw e9667;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7751__auto__,cljs.core.cst$kw$recur)){
var G__9687 = state_9643;
state_9643 = G__9687;
continue;
} else {
return ret_value__7751__auto__;
}
break;
}
});
cljs$core$async$state_machine__7750__auto__ = function(state_9643){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7750__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7750__auto____1.call(this,state_9643);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__7750__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7750__auto____0;
cljs$core$async$state_machine__7750__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7750__auto____1;
return cljs$core$async$state_machine__7750__auto__;
})()
;})(switch__7749__auto__,c__7851__auto___9671,out))
})();
var state__7853__auto__ = (function (){var statearr_9669 = (f__7852__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7852__auto__.cljs$core$IFn$_invoke$arity$0() : f__7852__auto__.call(null));
(statearr_9669[(6)] = c__7851__auto___9671);

return statearr_9669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7853__auto__);
});})(c__7851__auto___9671,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__9689 = arguments.length;
switch (G__9689) {
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
var c__7851__auto___9759 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7851__auto___9759,out){
return (function (){
var f__7852__auto__ = (function (){var switch__7749__auto__ = ((function (c__7851__auto___9759,out){
return (function (state_9731){
var state_val_9732 = (state_9731[(1)]);
if((state_val_9732 === (7))){
var inst_9727 = (state_9731[(2)]);
var state_9731__$1 = state_9731;
var statearr_9733_9760 = state_9731__$1;
(statearr_9733_9760[(2)] = inst_9727);

(statearr_9733_9760[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9732 === (1))){
var inst_9690 = [];
var inst_9691 = inst_9690;
var inst_9692 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_9731__$1 = (function (){var statearr_9734 = state_9731;
(statearr_9734[(7)] = inst_9691);

(statearr_9734[(8)] = inst_9692);

return statearr_9734;
})();
var statearr_9735_9761 = state_9731__$1;
(statearr_9735_9761[(2)] = null);

(statearr_9735_9761[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9732 === (4))){
var inst_9695 = (state_9731[(9)]);
var inst_9695__$1 = (state_9731[(2)]);
var inst_9696 = (inst_9695__$1 == null);
var inst_9697 = cljs.core.not(inst_9696);
var state_9731__$1 = (function (){var statearr_9736 = state_9731;
(statearr_9736[(9)] = inst_9695__$1);

return statearr_9736;
})();
if(inst_9697){
var statearr_9737_9762 = state_9731__$1;
(statearr_9737_9762[(1)] = (5));

} else {
var statearr_9738_9763 = state_9731__$1;
(statearr_9738_9763[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9732 === (15))){
var inst_9721 = (state_9731[(2)]);
var state_9731__$1 = state_9731;
var statearr_9739_9764 = state_9731__$1;
(statearr_9739_9764[(2)] = inst_9721);

(statearr_9739_9764[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9732 === (13))){
var state_9731__$1 = state_9731;
var statearr_9740_9765 = state_9731__$1;
(statearr_9740_9765[(2)] = null);

(statearr_9740_9765[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9732 === (6))){
var inst_9691 = (state_9731[(7)]);
var inst_9716 = inst_9691.length;
var inst_9717 = (inst_9716 > (0));
var state_9731__$1 = state_9731;
if(cljs.core.truth_(inst_9717)){
var statearr_9741_9766 = state_9731__$1;
(statearr_9741_9766[(1)] = (12));

} else {
var statearr_9742_9767 = state_9731__$1;
(statearr_9742_9767[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9732 === (3))){
var inst_9729 = (state_9731[(2)]);
var state_9731__$1 = state_9731;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9731__$1,inst_9729);
} else {
if((state_val_9732 === (12))){
var inst_9691 = (state_9731[(7)]);
var inst_9719 = cljs.core.vec(inst_9691);
var state_9731__$1 = state_9731;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9731__$1,(15),out,inst_9719);
} else {
if((state_val_9732 === (2))){
var state_9731__$1 = state_9731;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9731__$1,(4),ch);
} else {
if((state_val_9732 === (11))){
var inst_9695 = (state_9731[(9)]);
var inst_9699 = (state_9731[(10)]);
var inst_9709 = (state_9731[(2)]);
var inst_9710 = [];
var inst_9711 = inst_9710.push(inst_9695);
var inst_9691 = inst_9710;
var inst_9692 = inst_9699;
var state_9731__$1 = (function (){var statearr_9743 = state_9731;
(statearr_9743[(11)] = inst_9709);

(statearr_9743[(7)] = inst_9691);

(statearr_9743[(8)] = inst_9692);

(statearr_9743[(12)] = inst_9711);

return statearr_9743;
})();
var statearr_9744_9768 = state_9731__$1;
(statearr_9744_9768[(2)] = null);

(statearr_9744_9768[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9732 === (9))){
var inst_9691 = (state_9731[(7)]);
var inst_9707 = cljs.core.vec(inst_9691);
var state_9731__$1 = state_9731;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9731__$1,(11),out,inst_9707);
} else {
if((state_val_9732 === (5))){
var inst_9695 = (state_9731[(9)]);
var inst_9692 = (state_9731[(8)]);
var inst_9699 = (state_9731[(10)]);
var inst_9699__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_9695) : f.call(null,inst_9695));
var inst_9700 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_9699__$1,inst_9692);
var inst_9701 = cljs.core.keyword_identical_QMARK_(inst_9692,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_9702 = ((inst_9700) || (inst_9701));
var state_9731__$1 = (function (){var statearr_9745 = state_9731;
(statearr_9745[(10)] = inst_9699__$1);

return statearr_9745;
})();
if(cljs.core.truth_(inst_9702)){
var statearr_9746_9769 = state_9731__$1;
(statearr_9746_9769[(1)] = (8));

} else {
var statearr_9747_9770 = state_9731__$1;
(statearr_9747_9770[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9732 === (14))){
var inst_9724 = (state_9731[(2)]);
var inst_9725 = cljs.core.async.close_BANG_(out);
var state_9731__$1 = (function (){var statearr_9749 = state_9731;
(statearr_9749[(13)] = inst_9724);

return statearr_9749;
})();
var statearr_9750_9771 = state_9731__$1;
(statearr_9750_9771[(2)] = inst_9725);

(statearr_9750_9771[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9732 === (10))){
var inst_9714 = (state_9731[(2)]);
var state_9731__$1 = state_9731;
var statearr_9751_9772 = state_9731__$1;
(statearr_9751_9772[(2)] = inst_9714);

(statearr_9751_9772[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9732 === (8))){
var inst_9695 = (state_9731[(9)]);
var inst_9691 = (state_9731[(7)]);
var inst_9699 = (state_9731[(10)]);
var inst_9704 = inst_9691.push(inst_9695);
var tmp9748 = inst_9691;
var inst_9691__$1 = tmp9748;
var inst_9692 = inst_9699;
var state_9731__$1 = (function (){var statearr_9752 = state_9731;
(statearr_9752[(14)] = inst_9704);

(statearr_9752[(7)] = inst_9691__$1);

(statearr_9752[(8)] = inst_9692);

return statearr_9752;
})();
var statearr_9753_9773 = state_9731__$1;
(statearr_9753_9773[(2)] = null);

(statearr_9753_9773[(1)] = (2));


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
});})(c__7851__auto___9759,out))
;
return ((function (switch__7749__auto__,c__7851__auto___9759,out){
return (function() {
var cljs$core$async$state_machine__7750__auto__ = null;
var cljs$core$async$state_machine__7750__auto____0 = (function (){
var statearr_9754 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9754[(0)] = cljs$core$async$state_machine__7750__auto__);

(statearr_9754[(1)] = (1));

return statearr_9754;
});
var cljs$core$async$state_machine__7750__auto____1 = (function (state_9731){
while(true){
var ret_value__7751__auto__ = (function (){try{while(true){
var result__7752__auto__ = switch__7749__auto__(state_9731);
if(cljs.core.keyword_identical_QMARK_(result__7752__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7752__auto__;
}
break;
}
}catch (e9755){if((e9755 instanceof Object)){
var ex__7753__auto__ = e9755;
var statearr_9756_9774 = state_9731;
(statearr_9756_9774[(5)] = ex__7753__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9731);

return cljs.core.cst$kw$recur;
} else {
throw e9755;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7751__auto__,cljs.core.cst$kw$recur)){
var G__9775 = state_9731;
state_9731 = G__9775;
continue;
} else {
return ret_value__7751__auto__;
}
break;
}
});
cljs$core$async$state_machine__7750__auto__ = function(state_9731){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7750__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7750__auto____1.call(this,state_9731);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__7750__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7750__auto____0;
cljs$core$async$state_machine__7750__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7750__auto____1;
return cljs$core$async$state_machine__7750__auto__;
})()
;})(switch__7749__auto__,c__7851__auto___9759,out))
})();
var state__7853__auto__ = (function (){var statearr_9757 = (f__7852__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7852__auto__.cljs$core$IFn$_invoke$arity$0() : f__7852__auto__.call(null));
(statearr_9757[(6)] = c__7851__auto___9759);

return statearr_9757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7853__auto__);
});})(c__7851__auto___9759,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

