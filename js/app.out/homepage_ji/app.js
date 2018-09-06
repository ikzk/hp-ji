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
homepage_ji.app.news_item = (function homepage_ji$app$news_item(p__10553){
var map__10554 = p__10553;
var map__10554__$1 = ((((!((map__10554 == null)))?(((((map__10554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10554):map__10554);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10554__$1,cljs.core.cst$kw$content);
var date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10554__$1,cljs.core.cst$kw$date);
return ((function (map__10554,map__10554__$1,content,date){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$news_DASH_item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$tag_DASH_success,date], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$post_DASH_description,content], null)], null);
});
;})(map__10554,map__10554__$1,content,date))
});
homepage_ji.app.news = (function homepage_ji$app$news(){
var display_num = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((3));
return ((function (display_num){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_news$pure_DASH_u_DASH_1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1$content_DASH_subhead,"News"], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4292__auto__ = ((function (display_num){
return (function homepage_ji$app$news_$_iter__10556(s__10557){
return (new cljs.core.LazySeq(null,((function (display_num){
return (function (){
var s__10557__$1 = s__10557;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__10557__$1);
if(temp__5457__auto__){
var s__10557__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10557__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__10557__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__10559 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__10558 = (0);
while(true){
if((i__10558 < size__4291__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__10558);
cljs.core.chunk_append(b__10559,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_ji.app.news_item,item], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$date.cljs$core$IFn$_invoke$arity$1(item)], null)));

var G__10560 = (i__10558 + (1));
i__10558 = G__10560;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10559),homepage_ji$app$news_$_iter__10556(cljs.core.chunk_rest(s__10557__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10559),null);
}
} else {
var item = cljs.core.first(s__10557__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_ji.app.news_item,item], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$date.cljs$core$IFn$_invoke$arity$1(item)], null)),homepage_ji$app$news_$_iter__10556(cljs.core.rest(s__10557__$2)));
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_teaching,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1$content_DASH_subhead,"Teaching"], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4292__auto__ = (function homepage_ji$app$teaching_$_iter__10561(s__10562){
return (new cljs.core.LazySeq(null,(function (){
var s__10562__$1 = s__10562;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__10562__$1);
if(temp__5457__auto__){
var s__10562__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10562__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__10562__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__10564 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__10563 = (0);
while(true){
if((i__10563 < size__4291__auto__)){
var course = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__10563);
cljs.core.chunk_append(b__10564,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$teaching_DASH_item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$tag_DASH_success,cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(course)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$publication_DASH_link,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,cljs.core.cst$kw$link.cljs$core$IFn$_invoke$arity$1(course)], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(course)], null)], null));

var G__10565 = (i__10563 + (1));
i__10563 = G__10565;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10564),homepage_ji$app$teaching_$_iter__10561(cljs.core.chunk_rest(s__10562__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10564),null);
}
} else {
var course = cljs.core.first(s__10562__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$teaching_DASH_item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$tag_DASH_success,cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(course)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$publication_DASH_link,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,cljs.core.cst$kw$link.cljs$core$IFn$_invoke$arity$1(course)], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(course)], null)], null),homepage_ji$app$teaching_$_iter__10561(cljs.core.rest(s__10562__$2)));
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
homepage_ji.app.group_member = (function homepage_ji$app$group_member(p__10566){
var map__10567 = p__10566;
var map__10567__$1 = ((((!((map__10567 == null)))?(((((map__10567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10567.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10567):map__10567);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10567__$1,cljs.core.cst$kw$name);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10567__$1,cljs.core.cst$kw$link);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10567__$1,cljs.core.cst$kw$tag);
var avatar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10567__$1,cljs.core.cst$kw$avatar);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$group_DASH_member$pure_DASH_u_DASH_1_DASH_2$pure_DASH_md_DASH_1_DASH_3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$group_DASH_member_DASH_avatar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img$group_DASH_member_DASH_avatar_DASH_img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,avatar], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$group_DASH_member_DASH_name,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$tag_DASH_info,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,link], null),name], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$divgroup_DASH_member_DASH_tag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$small,tag], null)], null)], null);
});
homepage_ji.app.group_members = (function homepage_ji$app$group_members(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_group_DASH_members,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1$content_DASH_subhead,"Group Members"], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4292__auto__ = (function homepage_ji$app$group_members_$_iter__10569(s__10570){
return (new cljs.core.LazySeq(null,(function (){
var s__10570__$1 = s__10570;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__10570__$1);
if(temp__5457__auto__){
var s__10570__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10570__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__10570__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__10572 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__10571 = (0);
while(true){
if((i__10571 < size__4291__auto__)){
var member = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__10571);
cljs.core.chunk_append(b__10572,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_ji.app.group_member,member], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(member)], null)));

var G__10573 = (i__10571 + (1));
i__10571 = G__10573;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10572),homepage_ji$app$group_members_$_iter__10569(cljs.core.chunk_rest(s__10570__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10572),null);
}
} else {
var member = cljs.core.first(s__10570__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_ji.app.group_member,member], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(member)], null)),homepage_ji$app$group_members_$_iter__10569(cljs.core.rest(s__10570__$2)));
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_layout$pure_DASH_g,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_ji.app.sidebar], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$content$pure_DASH_u_DASH_1$pure_DASH_u_DASH_md_DASH_3_DASH_4,(function (){var G__10574 = cljs.core.deref(homepage_ji.app.current_page);
var G__10574__$1 = (((G__10574 instanceof cljs.core.Keyword))?G__10574.fqn:null);
switch (G__10574__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10574__$1)].join('')));

}
})()], null)], null);
}
});
});
homepage_ji.app.init = (function homepage_ji$app$init(){
var c__7847__auto___10605 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7847__auto___10605){
return (function (){
var f__7848__auto__ = (function (){var switch__7745__auto__ = ((function (c__7847__auto___10605){
return (function (state_10595){
var state_val_10596 = (state_10595[(1)]);
if((state_val_10596 === (1))){
var inst_10576 = cljs_http.client.get("https://ikzk.github.io/hp-ji/site-conf.edn");
var state_10595__$1 = state_10595;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10595__$1,(2),inst_10576);
} else {
if((state_val_10596 === (2))){
var inst_10578 = (state_10595[(2)]);
var inst_10579 = cljs_http.client.get("https://ikzk.github.io/hp-ji/publications.html");
var state_10595__$1 = (function (){var statearr_10597 = state_10595;
(statearr_10597[(7)] = inst_10578);

return statearr_10597;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10595__$1,(3),inst_10579);
} else {
if((state_val_10596 === (3))){
var inst_10578 = (state_10595[(7)]);
var inst_10581 = (state_10595[(2)]);
var inst_10582 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_10578);
var inst_10583 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_10582)].join('');
var inst_10584 = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(inst_10583);
var inst_10585 = cljs.core.reset_BANG_(homepage_ji.app.site_data,inst_10584);
var inst_10586 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10587 = [cljs.core.cst$kw$publications,cljs.core.cst$kw$resource_DASH_link];
var inst_10588 = (new cljs.core.PersistentVector(null,2,(5),inst_10586,inst_10587,null));
var inst_10589 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_10581);
var inst_10590 = cljs.core.constantly(inst_10589);
var inst_10591 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(homepage_ji.app.site_data,cljs.core.update_in,inst_10588,inst_10590);
var inst_10592 = cljs.core.deref(homepage_ji.app.site_data);
var inst_10593 = cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_10592], 0));
var state_10595__$1 = (function (){var statearr_10598 = state_10595;
(statearr_10598[(8)] = inst_10591);

(statearr_10598[(9)] = inst_10585);

return statearr_10598;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_10595__$1,inst_10593);
} else {
return null;
}
}
}
});})(c__7847__auto___10605))
;
return ((function (switch__7745__auto__,c__7847__auto___10605){
return (function() {
var homepage_ji$app$init_$_state_machine__7746__auto__ = null;
var homepage_ji$app$init_$_state_machine__7746__auto____0 = (function (){
var statearr_10599 = [null,null,null,null,null,null,null,null,null,null];
(statearr_10599[(0)] = homepage_ji$app$init_$_state_machine__7746__auto__);

(statearr_10599[(1)] = (1));

return statearr_10599;
});
var homepage_ji$app$init_$_state_machine__7746__auto____1 = (function (state_10595){
while(true){
var ret_value__7747__auto__ = (function (){try{while(true){
var result__7748__auto__ = switch__7745__auto__(state_10595);
if(cljs.core.keyword_identical_QMARK_(result__7748__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7748__auto__;
}
break;
}
}catch (e10600){if((e10600 instanceof Object)){
var ex__7749__auto__ = e10600;
var statearr_10601_10606 = state_10595;
(statearr_10601_10606[(5)] = ex__7749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10595);

return cljs.core.cst$kw$recur;
} else {
throw e10600;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7747__auto__,cljs.core.cst$kw$recur)){
var G__10607 = state_10595;
state_10595 = G__10607;
continue;
} else {
return ret_value__7747__auto__;
}
break;
}
});
homepage_ji$app$init_$_state_machine__7746__auto__ = function(state_10595){
switch(arguments.length){
case 0:
return homepage_ji$app$init_$_state_machine__7746__auto____0.call(this);
case 1:
return homepage_ji$app$init_$_state_machine__7746__auto____1.call(this,state_10595);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
homepage_ji$app$init_$_state_machine__7746__auto__.cljs$core$IFn$_invoke$arity$0 = homepage_ji$app$init_$_state_machine__7746__auto____0;
homepage_ji$app$init_$_state_machine__7746__auto__.cljs$core$IFn$_invoke$arity$1 = homepage_ji$app$init_$_state_machine__7746__auto____1;
return homepage_ji$app$init_$_state_machine__7746__auto__;
})()
;})(switch__7745__auto__,c__7847__auto___10605))
})();
var state__7849__auto__ = (function (){var statearr_10602 = (f__7848__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7848__auto__.cljs$core$IFn$_invoke$arity$0() : f__7848__auto__.call(null));
(statearr_10602[(6)] = c__7847__auto___10605);

return statearr_10602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7849__auto__);
});})(c__7847__auto___10605))
);


var G__10603 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_ji.app.calling_component], null);
var G__10604 = document.getElementById("container");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__10603,G__10604) : reagent.core.render_component.call(null,G__10603,G__10604));
});
