// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('homepage_ji.app');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('cljs.reader');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('clojure.string');
homepage_ji.app.site_data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
homepage_ji.app.current_page = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$main);
homepage_ji.app.sidebar = (function homepage_ji$app$sidebar(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$sidebar$pure_DASH_u_DASH_1$pure_DASH_u_DASH_md_DASH_1_DASH_4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$header,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1$brand_DASH_title,"Ji Liu"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2$brand_DASH_tagline,"University of Rochester"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nav$nav,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$nav_DASH_list,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$nav_DASH_item,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$pure_DASH_button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.reset_BANG_(homepage_ji.app.current_page,cljs.core.cst$kw$main);
})], null),"About Me"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$nav_DASH_item,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$pure_DASH_button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.reset_BANG_(homepage_ji.app.current_page,cljs.core.cst$kw$main);
})], null),"News"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$nav_DASH_item,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$pure_DASH_button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.reset_BANG_(homepage_ji.app.current_page,cljs.core.cst$kw$group_DASH_members);
})], null),"Group Members"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$nav_DASH_item,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$pure_DASH_button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.reset_BANG_(homepage_ji.app.current_page,cljs.core.cst$kw$publications);
})], null),"Publications"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$nav_DASH_item,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$pure_DASH_button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.reset_BANG_(homepage_ji.app.current_page,cljs.core.cst$kw$teaching);
})], null),"Teaching"], null)], null)], null)], null)], null)], null);
});
homepage_ji.app.about_me = (function homepage_ji$app$about_me(){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_about_DASH_me$pure_DASH_u_DASH_1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1$content_DASH_subhead,"About Me"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img$about_DASH_me_DASH_image,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(homepage_ji.app.site_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$about_DASH_me,cljs.core.cst$kw$avatar], null)),cljs.core.cst$kw$align,"left"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$post_DASH_description,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(homepage_ji.app.site_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$about_DASH_me,cljs.core.cst$kw$text], null))], null)], null);
});
});
homepage_ji.app.news_item = (function homepage_ji$app$news_item(p__10557){
var map__10558 = p__10557;
var map__10558__$1 = ((((!((map__10558 == null)))?(((((map__10558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10558):map__10558);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10558__$1,cljs.core.cst$kw$content);
var date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10558__$1,cljs.core.cst$kw$date);
return ((function (map__10558,map__10558__$1,content,date){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$news_DASH_item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$tag_DASH_success,date], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$post_DASH_description,content], null)], null);
});
;})(map__10558,map__10558__$1,content,date))
});
homepage_ji.app.news = (function homepage_ji$app$news(){
var display_num = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((3));
return ((function (display_num){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_news$pure_DASH_u_DASH_1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1$content_DASH_subhead,"News"], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4292__auto__ = ((function (display_num){
return (function homepage_ji$app$news_$_iter__10560(s__10561){
return (new cljs.core.LazySeq(null,((function (display_num){
return (function (){
var s__10561__$1 = s__10561;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__10561__$1);
if(temp__5457__auto__){
var s__10561__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10561__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__10561__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__10563 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__10562 = (0);
while(true){
if((i__10562 < size__4291__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__10562);
cljs.core.chunk_append(b__10563,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_ji.app.news_item,item], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$date.cljs$core$IFn$_invoke$arity$1(item)], null)));

var G__10564 = (i__10562 + (1));
i__10562 = G__10564;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10563),homepage_ji$app$news_$_iter__10560(cljs.core.chunk_rest(s__10561__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10563),null);
}
} else {
var item = cljs.core.first(s__10561__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_ji.app.news_item,item], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$date.cljs$core$IFn$_invoke$arity$1(item)], null)),homepage_ji$app$news_$_iter__10560(cljs.core.rest(s__10561__$2)));
}
} else {
return null;
}
break;
}
});})(display_num))
,null,null));
});})(display_num))
;
return iter__4292__auto__(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(display_num),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(homepage_ji.app.site_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$news,cljs.core.cst$kw$items], null))));
})()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$pure_DASH_button$news_DASH_read_DASH_more,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (display_num){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(display_num,cljs.core._PLUS_,(3));
});})(display_num))
], null),"Read More..."], null)], null);
});
;})(display_num))
});
homepage_ji.app.publications = (function homepage_ji$app$publications(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_publications,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1$content_DASH_subhead,"Publications"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dangerouslySetInnerHTML,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$__html,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(homepage_ji.app.site_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$publications,cljs.core.cst$kw$resource_DASH_link], null))], null)], null)], null)], null);
});
});
homepage_ji.app.teaching = (function homepage_ji$app$teaching(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_teaching,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1$content_DASH_subhead,"Teaching"], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4292__auto__ = (function homepage_ji$app$teaching_$_iter__10565(s__10566){
return (new cljs.core.LazySeq(null,(function (){
var s__10566__$1 = s__10566;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__10566__$1);
if(temp__5457__auto__){
var s__10566__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10566__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__10566__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__10568 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__10567 = (0);
while(true){
if((i__10567 < size__4291__auto__)){
var course = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__10567);
cljs.core.chunk_append(b__10568,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$teaching_DASH_item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$tag_DASH_success,cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(course)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$publication_DASH_link,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,cljs.core.cst$kw$link.cljs$core$IFn$_invoke$arity$1(course)], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(course)], null)], null));

var G__10569 = (i__10567 + (1));
i__10567 = G__10569;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10568),homepage_ji$app$teaching_$_iter__10565(cljs.core.chunk_rest(s__10566__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10568),null);
}
} else {
var course = cljs.core.first(s__10566__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$teaching_DASH_item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$tag_DASH_success,cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(course)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$publication_DASH_link,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,cljs.core.cst$kw$link.cljs$core$IFn$_invoke$arity$1(course)], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(course)], null)], null),homepage_ji$app$teaching_$_iter__10565(cljs.core.rest(s__10566__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(homepage_ji.app.site_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$teaching], null)));
})())], null);
});
});
homepage_ji.app.group_member = (function homepage_ji$app$group_member(p__10570){
var map__10571 = p__10570;
var map__10571__$1 = ((((!((map__10571 == null)))?(((((map__10571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10571.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10571):map__10571);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10571__$1,cljs.core.cst$kw$name);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10571__$1,cljs.core.cst$kw$link);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10571__$1,cljs.core.cst$kw$tag);
var avatar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10571__$1,cljs.core.cst$kw$avatar);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$group_DASH_member$pure_DASH_u_DASH_1_DASH_2$pure_DASH_md_DASH_1_DASH_3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$group_DASH_member_DASH_avatar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img$group_DASH_member_DASH_avatar_DASH_img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,avatar], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$group_DASH_member_DASH_name,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$tag_DASH_info,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,link], null),name], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$divgroup_DASH_member_DASH_tag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$small,tag], null)], null)], null);
});
homepage_ji.app.group_members = (function homepage_ji$app$group_members(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_group_DASH_members,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1$content_DASH_subhead,"Group Members"], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4292__auto__ = (function homepage_ji$app$group_members_$_iter__10573(s__10574){
return (new cljs.core.LazySeq(null,(function (){
var s__10574__$1 = s__10574;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__10574__$1);
if(temp__5457__auto__){
var s__10574__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10574__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__10574__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__10576 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__10575 = (0);
while(true){
if((i__10575 < size__4291__auto__)){
var member = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__10575);
cljs.core.chunk_append(b__10576,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_ji.app.group_member,member], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(member)], null)));

var G__10577 = (i__10575 + (1));
i__10575 = G__10577;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10576),homepage_ji$app$group_members_$_iter__10573(cljs.core.chunk_rest(s__10574__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10576),null);
}
} else {
var member = cljs.core.first(s__10574__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_ji.app.group_member,member], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(member)], null)),homepage_ji$app$group_members_$_iter__10573(cljs.core.rest(s__10574__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(homepage_ji.app.site_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$group_DASH_members], null)));
})())], null);
});
});
homepage_ji.app.calling_component = (function homepage_ji$app$calling_component(){
return (function (){
if((cljs.core.deref(homepage_ji.app.site_data) == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_layout$pure_DASH_g,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_ji.app.sidebar], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$content$pure_DASH_u_DASH_1$pure_DASH_u_DASH_md_DASH_3_DASH_4,(function (){var G__10578 = cljs.core.deref(homepage_ji.app.current_page);
var G__10578__$1 = (((G__10578 instanceof cljs.core.Keyword))?G__10578.fqn:null);
switch (G__10578__$1) {
case "main":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_ji.app.about_me], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_ji.app.news], null)], null);

break;
case "group-members":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_ji.app.group_members], null);

break;
case "publications":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_ji.app.publications], null);

break;
case "teaching":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_ji.app.teaching], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10578__$1)].join('')));

}
})()], null)], null);
}
});
});
homepage_ji.app.init = (function homepage_ji$app$init(){
var c__7851__auto___10609 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7851__auto___10609){
return (function (){
var f__7852__auto__ = (function (){var switch__7749__auto__ = ((function (c__7851__auto___10609){
return (function (state_10599){
var state_val_10600 = (state_10599[(1)]);
if((state_val_10600 === (1))){
var inst_10580 = cljs_http.client.get("site-conf.edn");
var state_10599__$1 = state_10599;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10599__$1,(2),inst_10580);
} else {
if((state_val_10600 === (2))){
var inst_10582 = (state_10599[(2)]);
var inst_10583 = cljs_http.client.get("publications.html");
var state_10599__$1 = (function (){var statearr_10601 = state_10599;
(statearr_10601[(7)] = inst_10582);

return statearr_10601;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10599__$1,(3),inst_10583);
} else {
if((state_val_10600 === (3))){
var inst_10582 = (state_10599[(7)]);
var inst_10585 = (state_10599[(2)]);
var inst_10586 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_10582);
var inst_10587 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_10586)].join('');
var inst_10588 = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(inst_10587);
var inst_10589 = cljs.core.reset_BANG_(homepage_ji.app.site_data,inst_10588);
var inst_10590 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10591 = [cljs.core.cst$kw$publications,cljs.core.cst$kw$resource_DASH_link];
var inst_10592 = (new cljs.core.PersistentVector(null,2,(5),inst_10590,inst_10591,null));
var inst_10593 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_10585);
var inst_10594 = cljs.core.constantly(inst_10593);
var inst_10595 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(homepage_ji.app.site_data,cljs.core.update_in,inst_10592,inst_10594);
var inst_10596 = cljs.core.deref(homepage_ji.app.site_data);
var inst_10597 = cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_10596], 0));
var state_10599__$1 = (function (){var statearr_10602 = state_10599;
(statearr_10602[(8)] = inst_10589);

(statearr_10602[(9)] = inst_10595);

return statearr_10602;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_10599__$1,inst_10597);
} else {
return null;
}
}
}
});})(c__7851__auto___10609))
;
return ((function (switch__7749__auto__,c__7851__auto___10609){
return (function() {
var homepage_ji$app$init_$_state_machine__7750__auto__ = null;
var homepage_ji$app$init_$_state_machine__7750__auto____0 = (function (){
var statearr_10603 = [null,null,null,null,null,null,null,null,null,null];
(statearr_10603[(0)] = homepage_ji$app$init_$_state_machine__7750__auto__);

(statearr_10603[(1)] = (1));

return statearr_10603;
});
var homepage_ji$app$init_$_state_machine__7750__auto____1 = (function (state_10599){
while(true){
var ret_value__7751__auto__ = (function (){try{while(true){
var result__7752__auto__ = switch__7749__auto__(state_10599);
if(cljs.core.keyword_identical_QMARK_(result__7752__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7752__auto__;
}
break;
}
}catch (e10604){if((e10604 instanceof Object)){
var ex__7753__auto__ = e10604;
var statearr_10605_10610 = state_10599;
(statearr_10605_10610[(5)] = ex__7753__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10599);

return cljs.core.cst$kw$recur;
} else {
throw e10604;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7751__auto__,cljs.core.cst$kw$recur)){
var G__10611 = state_10599;
state_10599 = G__10611;
continue;
} else {
return ret_value__7751__auto__;
}
break;
}
});
homepage_ji$app$init_$_state_machine__7750__auto__ = function(state_10599){
switch(arguments.length){
case 0:
return homepage_ji$app$init_$_state_machine__7750__auto____0.call(this);
case 1:
return homepage_ji$app$init_$_state_machine__7750__auto____1.call(this,state_10599);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
homepage_ji$app$init_$_state_machine__7750__auto__.cljs$core$IFn$_invoke$arity$0 = homepage_ji$app$init_$_state_machine__7750__auto____0;
homepage_ji$app$init_$_state_machine__7750__auto__.cljs$core$IFn$_invoke$arity$1 = homepage_ji$app$init_$_state_machine__7750__auto____1;
return homepage_ji$app$init_$_state_machine__7750__auto__;
})()
;})(switch__7749__auto__,c__7851__auto___10609))
})();
var state__7853__auto__ = (function (){var statearr_10606 = (f__7852__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7852__auto__.cljs$core$IFn$_invoke$arity$0() : f__7852__auto__.call(null));
(statearr_10606[(6)] = c__7851__auto___10609);

return statearr_10606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7853__auto__);
});})(c__7851__auto___10609))
);


var G__10607 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_ji.app.calling_component], null);
var G__10608 = document.getElementById("container");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__10607,G__10608) : reagent.core.render_component.call(null,G__10607,G__10608));
});
