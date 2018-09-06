// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
goog.require('goog.net.Jsonp');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5457__auto__ = (function (){var fexpr__9793 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__9793.cljs$core$IFn$_invoke$arity$1 ? fexpr__9793.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__9793.call(null,channel));
})();
if(cljs.core.truth_(temp__5457__auto__)){
var req = temp__5457__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return cljs.core.cst$kw$jsonp.cljs$core$IFn$_invoke$arity$1(req).cancel(cljs.core.cst$kw$request.cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (formatted_h){
return (function (p__9794){
var vec__9795 = p__9794;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9795,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9795,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__9798 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$array_DASH_buffer,G__9798)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$blob,G__9798)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$document,G__9798)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$text,G__9798)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$default,G__9798)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__9798)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9798)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__9799){
var map__9800 = p__9799;
var map__9800__$1 = ((((!((map__9800 == null)))?(((((map__9800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9800):map__9800);
var request = map__9800__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9800__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9800__$1,cljs.core.cst$kw$default_DASH_headers);
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9800__$1,cljs.core.cst$kw$response_DASH_type);
var timeout = (function (){var or__3922__auto__ = cljs.core.cst$kw$timeout.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__9802 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__9802,default_headers);

cljs_http.core.apply_response_type_BANG_(G__9802,response_type);

G__9802.setTimeoutInterval(timeout);

G__9802.setWithCredentials(send_credentials);

return G__9802;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[cljs.core.cst$kw$no_DASH_error,cljs.core.cst$kw$abort,cljs.core.cst$kw$access_DASH_denied,cljs.core.cst$kw$custom_DASH_error,cljs.core.cst$kw$http_DASH_error,cljs.core.cst$kw$ff_DASH_silent_DASH_error,cljs.core.cst$kw$file_DASH_not_DASH_found,cljs.core.cst$kw$offline,cljs.core.cst$kw$exception,cljs.core.cst$kw$timeout]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__9803){
var map__9804 = p__9803;
var map__9804__$1 = ((((!((map__9804 == null)))?(((((map__9804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9804):map__9804);
var request = map__9804__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9804__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9804__$1,cljs.core.cst$kw$headers);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9804__$1,cljs.core.cst$kw$body);
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9804__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9804__$1,cljs.core.cst$kw$cancel);
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9804__$1,cljs.core.cst$kw$progress);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__3922__auto__ = request_method;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.cst$kw$get;
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr,map__9804,map__9804__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$status,target.getStatus(),cljs.core.cst$kw$success,target.isSuccess(),cljs.core.cst$kw$body,target.getResponse(),cljs.core.cst$kw$headers,cljs_http.util.parse_headers(target.getAllResponseHeaders()),cljs.core.cst$kw$trace_DASH_redirects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),cljs.core.cst$kw$error_DASH_code,(function (){var G__9806 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__9806) : cljs_http.core.error_kw.call(null,G__9806));
})(),cljs.core.cst$kw$error_DASH_text,target.getLastError()], null);
if(cljs.core.not(cljs_http.core.aborted_QMARK_(xhr))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,request_url,method,headers__$1,xhr,map__9804,map__9804__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

if(cljs.core.truth_(progress)){
var listener_9829 = ((function (channel,request_url,method,headers__$1,xhr,map__9804,map__9804__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$direction,direction,cljs.core.cst$kw$loaded,evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$total,evt.total], null):null)], 0)));
});})(channel,request_url,method,headers__$1,xhr,map__9804,map__9804__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
var G__9807_9830 = xhr;
G__9807_9830.setProgressEventsEnabled(true);

G__9807_9830.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_9829,cljs.core.cst$kw$upload));

G__9807_9830.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_9829,cljs.core.cst$kw$download));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__7847__auto___9831 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7847__auto___9831,channel,request_url,method,headers__$1,xhr,map__9804,map__9804__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (){
var f__7848__auto__ = (function (){var switch__7745__auto__ = ((function (c__7847__auto___9831,channel,request_url,method,headers__$1,xhr,map__9804,map__9804__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (state_9818){
var state_val_9819 = (state_9818[(1)]);
if((state_val_9819 === (1))){
var state_9818__$1 = state_9818;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9818__$1,(2),cancel);
} else {
if((state_val_9819 === (2))){
var inst_9809 = (state_9818[(2)]);
var inst_9810 = xhr.isComplete();
var inst_9811 = cljs.core.not(inst_9810);
var state_9818__$1 = (function (){var statearr_9820 = state_9818;
(statearr_9820[(7)] = inst_9809);

return statearr_9820;
})();
if(inst_9811){
var statearr_9821_9832 = state_9818__$1;
(statearr_9821_9832[(1)] = (3));

} else {
var statearr_9822_9833 = state_9818__$1;
(statearr_9822_9833[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9819 === (3))){
var inst_9813 = xhr.abort();
var state_9818__$1 = state_9818;
var statearr_9823_9834 = state_9818__$1;
(statearr_9823_9834[(2)] = inst_9813);

(statearr_9823_9834[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9819 === (4))){
var state_9818__$1 = state_9818;
var statearr_9824_9835 = state_9818__$1;
(statearr_9824_9835[(2)] = null);

(statearr_9824_9835[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9819 === (5))){
var inst_9816 = (state_9818[(2)]);
var state_9818__$1 = state_9818;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9818__$1,inst_9816);
} else {
return null;
}
}
}
}
}
});})(c__7847__auto___9831,channel,request_url,method,headers__$1,xhr,map__9804,map__9804__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
return ((function (switch__7745__auto__,c__7847__auto___9831,channel,request_url,method,headers__$1,xhr,map__9804,map__9804__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function() {
var cljs_http$core$xhr_$_state_machine__7746__auto__ = null;
var cljs_http$core$xhr_$_state_machine__7746__auto____0 = (function (){
var statearr_9825 = [null,null,null,null,null,null,null,null];
(statearr_9825[(0)] = cljs_http$core$xhr_$_state_machine__7746__auto__);

(statearr_9825[(1)] = (1));

return statearr_9825;
});
var cljs_http$core$xhr_$_state_machine__7746__auto____1 = (function (state_9818){
while(true){
var ret_value__7747__auto__ = (function (){try{while(true){
var result__7748__auto__ = switch__7745__auto__(state_9818);
if(cljs.core.keyword_identical_QMARK_(result__7748__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7748__auto__;
}
break;
}
}catch (e9826){if((e9826 instanceof Object)){
var ex__7749__auto__ = e9826;
var statearr_9827_9836 = state_9818;
(statearr_9827_9836[(5)] = ex__7749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9818);

return cljs.core.cst$kw$recur;
} else {
throw e9826;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7747__auto__,cljs.core.cst$kw$recur)){
var G__9837 = state_9818;
state_9818 = G__9837;
continue;
} else {
return ret_value__7747__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__7746__auto__ = function(state_9818){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__7746__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__7746__auto____1.call(this,state_9818);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs_http$core$xhr_$_state_machine__7746__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__7746__auto____0;
cljs_http$core$xhr_$_state_machine__7746__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__7746__auto____1;
return cljs_http$core$xhr_$_state_machine__7746__auto__;
})()
;})(switch__7745__auto__,c__7847__auto___9831,channel,request_url,method,headers__$1,xhr,map__9804,map__9804__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
})();
var state__7849__auto__ = (function (){var statearr_9828 = (f__7848__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7848__auto__.cljs$core$IFn$_invoke$arity$0() : f__7848__auto__.call(null));
(statearr_9828[(6)] = c__7847__auto___9831);

return statearr_9828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7849__auto__);
});})(c__7847__auto___9831,channel,request_url,method,headers__$1,xhr,map__9804,map__9804__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__9838){
var map__9839 = p__9838;
var map__9839__$1 = ((((!((map__9839 == null)))?(((((map__9839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9839):map__9839);
var request = map__9839__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9839__$1,cljs.core.cst$kw$timeout);
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9839__$1,cljs.core.cst$kw$callback_DASH_name);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9839__$1,cljs.core.cst$kw$cancel);
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9839__$1,cljs.core.cst$kw$keywordize_DASH_keys_QMARK_,true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_9852 = jsonp.send(null,((function (channel,jsonp,map__9839,map__9839__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,(200),cljs.core.cst$kw$success,true,cljs.core.cst$kw$body,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp,map__9839,map__9839__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp,map__9839,map__9839__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp,map__9839,map__9839__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$jsonp,jsonp,cljs.core.cst$kw$request,req_9852], null));

if(cljs.core.truth_(cancel)){
var c__7847__auto___9853 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7847__auto___9853,req_9852,channel,jsonp,map__9839,map__9839__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__7848__auto__ = (function (){var switch__7745__auto__ = ((function (c__7847__auto___9853,req_9852,channel,jsonp,map__9839,map__9839__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_9845){
var state_val_9846 = (state_9845[(1)]);
if((state_val_9846 === (1))){
var state_9845__$1 = state_9845;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9845__$1,(2),cancel);
} else {
if((state_val_9846 === (2))){
var inst_9842 = (state_9845[(2)]);
var inst_9843 = jsonp.cancel(req_9852);
var state_9845__$1 = (function (){var statearr_9847 = state_9845;
(statearr_9847[(7)] = inst_9842);

return statearr_9847;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_9845__$1,inst_9843);
} else {
return null;
}
}
});})(c__7847__auto___9853,req_9852,channel,jsonp,map__9839,map__9839__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__7745__auto__,c__7847__auto___9853,req_9852,channel,jsonp,map__9839,map__9839__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__7746__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__7746__auto____0 = (function (){
var statearr_9848 = [null,null,null,null,null,null,null,null];
(statearr_9848[(0)] = cljs_http$core$jsonp_$_state_machine__7746__auto__);

(statearr_9848[(1)] = (1));

return statearr_9848;
});
var cljs_http$core$jsonp_$_state_machine__7746__auto____1 = (function (state_9845){
while(true){
var ret_value__7747__auto__ = (function (){try{while(true){
var result__7748__auto__ = switch__7745__auto__(state_9845);
if(cljs.core.keyword_identical_QMARK_(result__7748__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7748__auto__;
}
break;
}
}catch (e9849){if((e9849 instanceof Object)){
var ex__7749__auto__ = e9849;
var statearr_9850_9854 = state_9845;
(statearr_9850_9854[(5)] = ex__7749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9845);

return cljs.core.cst$kw$recur;
} else {
throw e9849;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7747__auto__,cljs.core.cst$kw$recur)){
var G__9855 = state_9845;
state_9845 = G__9855;
continue;
} else {
return ret_value__7747__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__7746__auto__ = function(state_9845){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__7746__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__7746__auto____1.call(this,state_9845);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs_http$core$jsonp_$_state_machine__7746__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__7746__auto____0;
cljs_http$core$jsonp_$_state_machine__7746__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__7746__auto____1;
return cljs_http$core$jsonp_$_state_machine__7746__auto__;
})()
;})(switch__7745__auto__,c__7847__auto___9853,req_9852,channel,jsonp,map__9839,map__9839__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__7849__auto__ = (function (){var statearr_9851 = (f__7848__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7848__auto__.cljs$core$IFn$_invoke$arity$0() : f__7848__auto__.call(null));
(statearr_9851[(6)] = c__7847__auto___9853);

return statearr_9851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7849__auto__);
});})(c__7847__auto___9853,req_9852,channel,jsonp,map__9839,map__9839__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__9856){
var map__9857 = p__9856;
var map__9857__$1 = ((((!((map__9857 == null)))?(((((map__9857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9857):map__9857);
var request = map__9857__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9857__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,cljs.core.cst$kw$jsonp)){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});
