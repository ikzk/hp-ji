// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs_http.core');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('no.en.core');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return (v > (0));
} else {
return and__3911__auto__;
}
})())){
return v;
} else {
return null;
}
});
cljs_http.client.acc_param = (function cljs_http$client$acc_param(o,v){
if(cljs.core.coll_QMARK_(o)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(o,v);
} else {
if(!((o == null))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,v], null);
} else {
return v;

}
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if(!(clojure.string.blank_QMARK_(s))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__10346_SHARP_,p2__10345_SHARP_){
var vec__10347 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__10345_SHARP_,/=/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10347,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10347,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__10346_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(k)),cljs_http.client.acc_param,no.en.core.url_decode(v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if(!(clojure.string.blank_QMARK_(url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$scheme,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(uri.getScheme()),cljs.core.cst$kw$server_DASH_name,uri.getDomain(),cljs.core.cst$kw$server_DASH_port,cljs_http.client.if_pos(uri.getPort()),cljs.core.cst$kw$uri,uri.getPath(),cljs.core.cst$kw$query_DASH_string,((cljs.core.not(query_data.isEmpty()))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)].join(''):null),cljs.core.cst$kw$query_DASH_params,((cljs.core.not(query_data.isEmpty()))?cljs_http.client.parse_query_params([cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode(cljs.core.name(k))),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode([cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__10350_SHARP_){
return cljs_http.client.encode_val(k,p1__10350_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__10351){
var vec__10352 = p__10351;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10352,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10352,(1),null);
if(cljs.core.coll_QMARK_(v)){
return cljs_http.client.encode_vals(k,v);
} else {
return cljs_http.client.encode_val(k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap(esc_chars,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (esc_chars){
return (function (p1__10355_SHARP_){
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__10355_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$head,request_method);
if(and__3911__auto__){
var and__3911__auto____$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((204),cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(response));
if(and__3911__auto____$1){
return cljs.core.re_find(cljs.core.re_pattern(["(?i)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_http.client.escape_special(content_type))].join('')),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})())){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__5455__auto__ = cljs.core.cst$kw$edn_DASH_params.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5455__auto__)){
var params = temp__5455__auto__;
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__10356 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$edn_DASH_params),cljs.core.cst$kw$body,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([params], 0))),cljs.core.cst$kw$headers,headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__10356) : client.call(null,G__10356));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__10357_SHARP_){
return cljs_http.client.decode_body(p1__10357_SHARP_,cljs.reader.read_string,"application/edn",cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__4502__auto__ = [];
var len__4499__auto___10365 = arguments.length;
var i__4500__auto___10366 = (0);
while(true){
if((i__4500__auto___10366 < len__4499__auto___10365)){
args__4502__auto__.push((arguments[i__4500__auto___10366]));

var G__10367 = (i__4500__auto___10366 + (1));
i__4500__auto___10366 = G__10367;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__10360){
var vec__10361 = p__10360;
var default_headers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10361,(0),null);
return ((function (vec__10361,default_headers){
return (function (request){
var temp__5455__auto__ = (function (){var or__3922__auto__ = cljs.core.cst$kw$default_DASH_headers.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var default_headers__$1 = temp__5455__auto__;
var G__10364 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(request,cljs.core.cst$kw$default_DASH_headers,default_headers__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__10364) : client.call(null,G__10364));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
;})(vec__10361,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq10358){
var G__10359 = cljs.core.first(seq10358);
var seq10358__$1 = cljs.core.next(seq10358);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10359,seq10358__$1);
});

cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__4502__auto__ = [];
var len__4499__auto___10375 = arguments.length;
var i__4500__auto___10376 = (0);
while(true){
if((i__4500__auto___10376 < len__4499__auto___10375)){
args__4502__auto__.push((arguments[i__4500__auto___10376]));

var G__10377 = (i__4500__auto___10376 + (1));
i__4500__auto___10376 = G__10377;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__10370){
var vec__10371 = p__10370;
var accept = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10371,(0),null);
return ((function (vec__10371,accept){
return (function (request){
var temp__5455__auto__ = (function (){var or__3922__auto__ = cljs.core.cst$kw$accept.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var accept__$1 = temp__5455__auto__;
var G__10374 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"accept"], null),accept__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__10374) : client.call(null,G__10374));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
;})(vec__10371,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq10368){
var G__10369 = cljs.core.first(seq10368);
var seq10368__$1 = cljs.core.next(seq10368);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10369,seq10368__$1);
});

cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__4502__auto__ = [];
var len__4499__auto___10385 = arguments.length;
var i__4500__auto___10386 = (0);
while(true){
if((i__4500__auto___10386 < len__4499__auto___10385)){
args__4502__auto__.push((arguments[i__4500__auto___10386]));

var G__10387 = (i__4500__auto___10386 + (1));
i__4500__auto___10386 = G__10387;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__10380){
var vec__10381 = p__10380;
var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10381,(0),null);
return ((function (vec__10381,content_type){
return (function (request){
var temp__5455__auto__ = (function (){var or__3922__auto__ = cljs.core.cst$kw$content_DASH_type.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var content_type__$1 = temp__5455__auto__;
var G__10384 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"content-type"], null),content_type__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__10384) : client.call(null,G__10384));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
;})(vec__10381,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq10378){
var G__10379 = cljs.core.first(seq10378);
var seq10378__$1 = cljs.core.next(seq10378);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10379,seq10378__$1);
});

cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$encoding,cljs.core.cst$kw$json,cljs.core.cst$kw$encoding_DASH_opts,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$decoding,cljs.core.cst$kw$json,cljs.core.cst$kw$decoding_DASH_opts,cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Encode :transit-params in the `request` :body and set the appropriate
 *   Content Type header.
 * 
 *   A :transit-opts map can be optionally provided with the following keys:
 * 
 *   :encoding                #{:json, :json-verbose}
 *   :decoding                #{:json, :json-verbose}
 *   :encoding/decoding-opts  appropriate map of options to be passed to
 *                         transit writer/reader, respectively.
 */
cljs_http.client.wrap_transit_params = (function cljs_http$client$wrap_transit_params(client){
return (function (request){
var temp__5455__auto__ = cljs.core.cst$kw$transit_DASH_params.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5455__auto__)){
var params = temp__5455__auto__;
var map__10388 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs_http.client.default_transit_opts,cljs.core.cst$kw$transit_DASH_opts.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__10388__$1 = ((((!((map__10388 == null)))?(((((map__10388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10388.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10388):map__10388);
var encoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10388__$1,cljs.core.cst$kw$encoding);
var encoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10388__$1,cljs.core.cst$kw$encoding_DASH_opts);
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__10390 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$transit_DASH_params),cljs.core.cst$kw$body,cljs_http.util.transit_encode(params,encoding,encoding_opts)),cljs.core.cst$kw$headers,headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__10390) : client.call(null,G__10390));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__10393 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs_http.client.default_transit_opts,cljs.core.cst$kw$transit_DASH_opts.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__10393__$1 = ((((!((map__10393 == null)))?(((((map__10393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10393.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10393):map__10393);
var decoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10393__$1,cljs.core.cst$kw$decoding);
var decoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10393__$1,cljs.core.cst$kw$decoding_DASH_opts);
var transit_decode = ((function (map__10393,map__10393__$1,decoding,decoding_opts){
return (function (p1__10391_SHARP_){
return cljs_http.util.transit_decode(p1__10391_SHARP_,decoding,decoding_opts);
});})(map__10393,map__10393__$1,decoding,decoding_opts))
;
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2(((function (map__10393,map__10393__$1,decoding,decoding_opts,transit_decode){
return (function (p1__10392_SHARP_){
return cljs_http.client.decode_body(p1__10392_SHARP_,transit_decode,"application/transit+json",cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(request));
});})(map__10393,map__10393__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__5455__auto__ = cljs.core.cst$kw$json_DASH_params.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5455__auto__)){
var params = temp__5455__auto__;
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__10395 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$json_DASH_params),cljs.core.cst$kw$body,cljs_http.util.json_encode(params)),cljs.core.cst$kw$headers,headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__10395) : client.call(null,G__10395));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__10396_SHARP_){
return cljs_http.client.decode_body(p1__10396_SHARP_,cljs_http.util.json_decode,"application/json",cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__10397){
var map__10398 = p__10397;
var map__10398__$1 = ((((!((map__10398 == null)))?(((((map__10398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10398):map__10398);
var req = map__10398__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10398__$1,cljs.core.cst$kw$query_DASH_params);
if(cljs.core.truth_(query_params)){
var G__10400 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$query_DASH_params),cljs.core.cst$kw$query_DASH_string,cljs_http.client.generate_query_string(query_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__10400) : client.call(null,G__10400));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__10401){
var map__10402 = p__10401;
var map__10402__$1 = ((((!((map__10402 == null)))?(((((map__10402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10402):map__10402);
var request = map__10402__$1;
var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10402__$1,cljs.core.cst$kw$form_DASH_params);
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10402__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10402__$1,cljs.core.cst$kw$headers);
if(cljs.core.truth_((function (){var and__3911__auto__ = form_params;
if(cljs.core.truth_(and__3911__auto__)){
var fexpr__10404 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$patch,null,cljs.core.cst$kw$delete,null,cljs.core.cst$kw$post,null,cljs.core.cst$kw$put,null], null), null);
return (fexpr__10404.cljs$core$IFn$_invoke$arity$1 ? fexpr__10404.cljs$core$IFn$_invoke$arity$1(request_method) : fexpr__10404.call(null,request_method));
} else {
return and__3911__auto__;
}
})())){
var headers__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers], 0));
var G__10405 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$form_DASH_params),cljs.core.cst$kw$body,cljs_http.client.generate_query_string(form_params)),cljs.core.cst$kw$headers,headers__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__10405) : client.call(null,G__10405));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__10406_10416 = cljs.core.seq(params);
var chunk__10407_10417 = null;
var count__10408_10418 = (0);
var i__10409_10419 = (0);
while(true){
if((i__10409_10419 < count__10408_10418)){
var vec__10410_10420 = chunk__10407_10417.cljs$core$IIndexed$_nth$arity$2(null,i__10409_10419);
var k_10421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10410_10420,(0),null);
var v_10422 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10410_10420,(1),null);
if(cljs.core.coll_QMARK_(v_10422)){
form_data.append(cljs.core.name(k_10421),cljs.core.first(v_10422),cljs.core.second(v_10422));
} else {
form_data.append(cljs.core.name(k_10421),v_10422);
}


var G__10423 = seq__10406_10416;
var G__10424 = chunk__10407_10417;
var G__10425 = count__10408_10418;
var G__10426 = (i__10409_10419 + (1));
seq__10406_10416 = G__10423;
chunk__10407_10417 = G__10424;
count__10408_10418 = G__10425;
i__10409_10419 = G__10426;
continue;
} else {
var temp__5457__auto___10427 = cljs.core.seq(seq__10406_10416);
if(temp__5457__auto___10427){
var seq__10406_10428__$1 = temp__5457__auto___10427;
if(cljs.core.chunked_seq_QMARK_(seq__10406_10428__$1)){
var c__4319__auto___10429 = cljs.core.chunk_first(seq__10406_10428__$1);
var G__10430 = cljs.core.chunk_rest(seq__10406_10428__$1);
var G__10431 = c__4319__auto___10429;
var G__10432 = cljs.core.count(c__4319__auto___10429);
var G__10433 = (0);
seq__10406_10416 = G__10430;
chunk__10407_10417 = G__10431;
count__10408_10418 = G__10432;
i__10409_10419 = G__10433;
continue;
} else {
var vec__10413_10434 = cljs.core.first(seq__10406_10428__$1);
var k_10435 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10413_10434,(0),null);
var v_10436 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10413_10434,(1),null);
if(cljs.core.coll_QMARK_(v_10436)){
form_data.append(cljs.core.name(k_10435),cljs.core.first(v_10436),cljs.core.second(v_10436));
} else {
form_data.append(cljs.core.name(k_10435),v_10436);
}


var G__10437 = cljs.core.next(seq__10406_10428__$1);
var G__10438 = null;
var G__10439 = (0);
var G__10440 = (0);
seq__10406_10416 = G__10437;
chunk__10407_10417 = G__10438;
count__10408_10418 = G__10439;
i__10409_10419 = G__10440;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function cljs_http$client$wrap_multipart_params(client){
return (function (p__10441){
var map__10442 = p__10441;
var map__10442__$1 = ((((!((map__10442 == null)))?(((((map__10442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10442.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10442):map__10442);
var request = map__10442__$1;
var multipart_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10442__$1,cljs.core.cst$kw$multipart_DASH_params);
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10442__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core.truth_((function (){var and__3911__auto__ = multipart_params;
if(cljs.core.truth_(and__3911__auto__)){
var fexpr__10444 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$patch,null,cljs.core.cst$kw$delete,null,cljs.core.cst$kw$post,null,cljs.core.cst$kw$put,null], null), null);
return (fexpr__10444.cljs$core$IFn$_invoke$arity$1 ? fexpr__10444.cljs$core$IFn$_invoke$arity$1(request_method) : fexpr__10444.call(null,request_method));
} else {
return and__3911__auto__;
}
})())){
var G__10445 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$multipart_DASH_params),cljs.core.cst$kw$body,cljs_http.client.generate_form_data(multipart_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__10445) : client.call(null,G__10445));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__5455__auto__ = cljs.core.cst$kw$method.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__5455__auto__)){
var m = temp__5455__auto__;
var G__10446 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$method),cljs.core.cst$kw$request_DASH_method,m);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__10446) : client.call(null,G__10446));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__10447_SHARP_){
var G__10448 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__10447_SHARP_,cljs.core.cst$kw$server_DASH_name,server_name);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__10448) : client.call(null,G__10448));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__10450){
var map__10451 = p__10450;
var map__10451__$1 = ((((!((map__10451 == null)))?(((((map__10451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10451.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10451):map__10451);
var req = map__10451__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10451__$1,cljs.core.cst$kw$query_DASH_params);
var temp__5455__auto__ = cljs_http.client.parse_url(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__5455__auto__)){
var spec = temp__5455__auto__;
var G__10453 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,spec], 0)),cljs.core.cst$kw$url),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$query_DASH_params], null),((function (spec,temp__5455__auto__,map__10451,map__10451__$1,req,query_params){
return (function (p1__10449_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__10449_SHARP_,query_params], 0));
});})(spec,temp__5455__auto__,map__10451,map__10451__$1,req,query_params))
);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__10453) : client.call(null,G__10453));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__4502__auto__ = [];
var len__4499__auto___10461 = arguments.length;
var i__4500__auto___10462 = (0);
while(true){
if((i__4500__auto___10462 < len__4499__auto___10461)){
args__4502__auto__.push((arguments[i__4500__auto___10462]));

var G__10463 = (i__4500__auto___10462 + (1));
i__4500__auto___10462 = G__10463;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__10456){
var vec__10457 = p__10456;
var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10457,(0),null);
return ((function (vec__10457,credentials){
return (function (req){
var credentials__$1 = (function (){var or__3922__auto__ = cljs.core.cst$kw$basic_DASH_auth.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_(credentials__$1))){
var G__10460 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$basic_DASH_auth),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"authorization"], null),cljs_http.util.basic_auth(credentials__$1));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__10460) : client.call(null,G__10460));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
;})(vec__10457,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq10454){
var G__10455 = cljs.core.first(seq10454);
var seq10454__$1 = cljs.core.next(seq10454);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10455,seq10454__$1);
});

/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__5455__auto__ = cljs.core.cst$kw$oauth_DASH_token.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__5455__auto__)){
var oauth_token = temp__5455__auto__;
var G__10464 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$oauth_DASH_token),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"authorization"], null),["Bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token)].join(''));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__10464) : client.call(null,G__10464));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__5455__auto__ = cljs.core.cst$kw$channel.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5455__auto__)){
var custom_channel = temp__5455__auto__;
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request)),custom_channel);
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers(cljs_http.client.wrap_channel_from_request_map(cljs_http.client.wrap_url(cljs_http.client.wrap_method(cljs_http.client.wrap_oauth(cljs_http.client.wrap_basic_auth(cljs_http.client.wrap_query_params(cljs_http.client.wrap_content_type(cljs_http.client.wrap_json_response(cljs_http.client.wrap_json_params(cljs_http.client.wrap_transit_response(cljs_http.client.wrap_transit_params(cljs_http.client.wrap_edn_response(cljs_http.client.wrap_edn_params(cljs_http.client.wrap_multipart_params(cljs_http.client.wrap_form_params(cljs_http.client.wrap_accept(request)))))))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map for corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request(cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__4502__auto__ = [];
var len__4499__auto___10472 = arguments.length;
var i__4500__auto___10473 = (0);
while(true){
if((i__4500__auto___10473 < len__4499__auto___10472)){
args__4502__auto__.push((arguments[i__4500__auto___10473]));

var G__10474 = (i__4500__auto___10473 + (1));
i__4500__auto___10473 = G__10474;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__10467){
var vec__10468 = p__10467;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10468,(0),null);
var G__10471 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$delete,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__10471) : cljs_http.client.request.call(null,G__10471));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.delete$.cljs$lang$applyTo = (function (seq10465){
var G__10466 = cljs.core.first(seq10465);
var seq10465__$1 = cljs.core.next(seq10465);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10466,seq10465__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__4502__auto__ = [];
var len__4499__auto___10482 = arguments.length;
var i__4500__auto___10483 = (0);
while(true){
if((i__4500__auto___10483 < len__4499__auto___10482)){
args__4502__auto__.push((arguments[i__4500__auto___10483]));

var G__10484 = (i__4500__auto___10483 + (1));
i__4500__auto___10483 = G__10484;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__10477){
var vec__10478 = p__10477;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10478,(0),null);
var G__10481 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__10481) : cljs_http.client.request.call(null,G__10481));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.get.cljs$lang$applyTo = (function (seq10475){
var G__10476 = cljs.core.first(seq10475);
var seq10475__$1 = cljs.core.next(seq10475);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10476,seq10475__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__4502__auto__ = [];
var len__4499__auto___10492 = arguments.length;
var i__4500__auto___10493 = (0);
while(true){
if((i__4500__auto___10493 < len__4499__auto___10492)){
args__4502__auto__.push((arguments[i__4500__auto___10493]));

var G__10494 = (i__4500__auto___10493 + (1));
i__4500__auto___10493 = G__10494;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__10487){
var vec__10488 = p__10487;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10488,(0),null);
var G__10491 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$head,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__10491) : cljs_http.client.request.call(null,G__10491));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.head.cljs$lang$applyTo = (function (seq10485){
var G__10486 = cljs.core.first(seq10485);
var seq10485__$1 = cljs.core.next(seq10485);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10486,seq10485__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__4502__auto__ = [];
var len__4499__auto___10502 = arguments.length;
var i__4500__auto___10503 = (0);
while(true){
if((i__4500__auto___10503 < len__4499__auto___10502)){
args__4502__auto__.push((arguments[i__4500__auto___10503]));

var G__10504 = (i__4500__auto___10503 + (1));
i__4500__auto___10503 = G__10504;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__10497){
var vec__10498 = p__10497;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10498,(0),null);
var G__10501 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$jsonp,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__10501) : cljs_http.client.request.call(null,G__10501));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq10495){
var G__10496 = cljs.core.first(seq10495);
var seq10495__$1 = cljs.core.next(seq10495);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10496,seq10495__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__4502__auto__ = [];
var len__4499__auto___10512 = arguments.length;
var i__4500__auto___10513 = (0);
while(true){
if((i__4500__auto___10513 < len__4499__auto___10512)){
args__4502__auto__.push((arguments[i__4500__auto___10513]));

var G__10514 = (i__4500__auto___10513 + (1));
i__4500__auto___10513 = G__10514;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__10507){
var vec__10508 = p__10507;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10508,(0),null);
var G__10511 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$move,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__10511) : cljs_http.client.request.call(null,G__10511));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.move.cljs$lang$applyTo = (function (seq10505){
var G__10506 = cljs.core.first(seq10505);
var seq10505__$1 = cljs.core.next(seq10505);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10506,seq10505__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__4502__auto__ = [];
var len__4499__auto___10522 = arguments.length;
var i__4500__auto___10523 = (0);
while(true){
if((i__4500__auto___10523 < len__4499__auto___10522)){
args__4502__auto__.push((arguments[i__4500__auto___10523]));

var G__10524 = (i__4500__auto___10523 + (1));
i__4500__auto___10523 = G__10524;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__10517){
var vec__10518 = p__10517;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10518,(0),null);
var G__10521 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$options,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__10521) : cljs_http.client.request.call(null,G__10521));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.options.cljs$lang$applyTo = (function (seq10515){
var G__10516 = cljs.core.first(seq10515);
var seq10515__$1 = cljs.core.next(seq10515);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10516,seq10515__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__4502__auto__ = [];
var len__4499__auto___10532 = arguments.length;
var i__4500__auto___10533 = (0);
while(true){
if((i__4500__auto___10533 < len__4499__auto___10532)){
args__4502__auto__.push((arguments[i__4500__auto___10533]));

var G__10534 = (i__4500__auto___10533 + (1));
i__4500__auto___10533 = G__10534;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__10527){
var vec__10528 = p__10527;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10528,(0),null);
var G__10531 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$patch,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__10531) : cljs_http.client.request.call(null,G__10531));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.patch.cljs$lang$applyTo = (function (seq10525){
var G__10526 = cljs.core.first(seq10525);
var seq10525__$1 = cljs.core.next(seq10525);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10526,seq10525__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__4502__auto__ = [];
var len__4499__auto___10542 = arguments.length;
var i__4500__auto___10543 = (0);
while(true){
if((i__4500__auto___10543 < len__4499__auto___10542)){
args__4502__auto__.push((arguments[i__4500__auto___10543]));

var G__10544 = (i__4500__auto___10543 + (1));
i__4500__auto___10543 = G__10544;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__10537){
var vec__10538 = p__10537;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10538,(0),null);
var G__10541 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$post,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__10541) : cljs_http.client.request.call(null,G__10541));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.post.cljs$lang$applyTo = (function (seq10535){
var G__10536 = cljs.core.first(seq10535);
var seq10535__$1 = cljs.core.next(seq10535);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10536,seq10535__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__4502__auto__ = [];
var len__4499__auto___10552 = arguments.length;
var i__4500__auto___10553 = (0);
while(true){
if((i__4500__auto___10553 < len__4499__auto___10552)){
args__4502__auto__.push((arguments[i__4500__auto___10553]));

var G__10554 = (i__4500__auto___10553 + (1));
i__4500__auto___10553 = G__10554;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__10547){
var vec__10548 = p__10547;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10548,(0),null);
var G__10551 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$put,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__10551) : cljs_http.client.request.call(null,G__10551));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.put.cljs$lang$applyTo = (function (seq10545){
var G__10546 = cljs.core.first(seq10545);
var seq10545__$1 = cljs.core.next(seq10545);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10546,seq10545__$1);
});

