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
homepage_ji.app.publication_item = (function homepage_ji$app$publication_item(p__10565){
var map__10566 = p__10565;
var map__10566__$1 = ((((!((map__10566 == null)))?(((((map__10566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10566):map__10566);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10566__$1,cljs.core.cst$kw$title);
var title_link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10566__$1,cljs.core.cst$kw$title_DASH_link);
var authors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10566__$1,cljs.core.cst$kw$authors);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10566__$1,cljs.core.cst$kw$tags);
var note = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10566__$1,cljs.core.cst$kw$note);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$publication_DASH_item,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,(cljs.core.truth_(note)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$tag_DASH_secondary,note], null):null),(cljs.core.truth_(tags)?(function (){var iter__4292__auto__ = ((function (map__10566,map__10566__$1,title,title_link,authors,tags,note){
return (function homepage_ji$app$publication_item_$_iter__10568(s__10569){
return (new cljs.core.LazySeq(null,((function (map__10566,map__10566__$1,title,title_link,authors,tags,note){
return (function (){
var s__10569__$1 = s__10569;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__10569__$1);
if(temp__5457__auto__){
var s__10569__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10569__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__10569__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__10571 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__10570 = (0);
while(true){
if((i__10570 < size__4291__auto__)){
var tag = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__10570);
cljs.core.chunk_append(b__10571,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$tag_DASH_success,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,cljs.core.cst$kw$link.cljs$core$IFn$_invoke$arity$1(tag)], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(tag)], null));

var G__10572 = (i__10570 + (1));
i__10570 = G__10572;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10571),homepage_ji$app$publication_item_$_iter__10568(cljs.core.chunk_rest(s__10569__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10571),null);
}
} else {
var tag = cljs.core.first(s__10569__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$tag_DASH_success,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,cljs.core.cst$kw$link.cljs$core$IFn$_invoke$arity$1(tag)], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(tag)], null),homepage_ji$app$publication_item_$_iter__10568(cljs.core.rest(s__10569__$2)));
}
} else {
return null;
}
break;
}
});})(map__10566,map__10566__$1,title,title_link,authors,tags,note))
,null,null));
});})(map__10566,map__10566__$1,title,title_link,authors,tags,note))
;
return iter__4292__auto__(tags);
})():null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$publication_DASH_link,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,title_link], null),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$authors,authors], null)], null);
});
homepage_ji.app.publications = (function homepage_ji$app$publications(){
var search_term = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
return ((function (search_term){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_publications,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1$content_DASH_subhead,"Publications"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form$pure_DASH_form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$pure_DASH_input_DASH_1,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$value,cljs.core.deref(search_term),cljs.core.cst$kw$placeholder,"Search...",cljs.core.cst$kw$on_DASH_change,((function (search_term){
return (function (p1__10573_SHARP_){
return cljs.core.reset_BANG_(search_term,p1__10573_SHARP_.target.value);
});})(search_term))
], null)], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4292__auto__ = ((function (search_term){
return (function homepage_ji$app$publications_$_iter__10574(s__10575){
return (new cljs.core.LazySeq(null,((function (search_term){
return (function (){
var s__10575__$1 = s__10575;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__10575__$1);
if(temp__5457__auto__){
var s__10575__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10575__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__10575__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__10577 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__10576 = (0);
while(true){
if((i__10576 < size__4291__auto__)){
var category = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__10576);
cljs.core.chunk_append(b__10577,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2$content_DASH_subhead,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(category)], null),(function (){var iter__4292__auto__ = ((function (i__10576,category,c__4290__auto__,size__4291__auto__,b__10577,s__10575__$2,temp__5457__auto__,search_term){
return (function homepage_ji$app$publications_$_iter__10574_$_iter__10578(s__10579){
return (new cljs.core.LazySeq(null,((function (i__10576,category,c__4290__auto__,size__4291__auto__,b__10577,s__10575__$2,temp__5457__auto__,search_term){
return (function (){
var s__10579__$1 = s__10579;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__10579__$1);
if(temp__5457__auto____$1){
var s__10579__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__10579__$2)){
var c__4290__auto____$1 = cljs.core.chunk_first(s__10579__$2);
var size__4291__auto____$1 = cljs.core.count(c__4290__auto____$1);
var b__10581 = cljs.core.chunk_buffer(size__4291__auto____$1);
if((function (){var i__10580 = (0);
while(true){
if((i__10580 < size__4291__auto____$1)){
var publication = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto____$1,i__10580);
cljs.core.chunk_append(b__10581,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_ji.app.publication_item,publication], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(publication)], null)));

var G__10592 = (i__10580 + (1));
i__10580 = G__10592;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10581),homepage_ji$app$publications_$_iter__10574_$_iter__10578(cljs.core.chunk_rest(s__10579__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10581),null);
}
} else {
var publication = cljs.core.first(s__10579__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_ji.app.publication_item,publication], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(publication)], null)),homepage_ji$app$publications_$_iter__10574_$_iter__10578(cljs.core.rest(s__10579__$2)));
}
} else {
return null;
}
break;
}
});})(i__10576,category,c__4290__auto__,size__4291__auto__,b__10577,s__10575__$2,temp__5457__auto__,search_term))
,null,null));
});})(i__10576,category,c__4290__auto__,size__4291__auto__,b__10577,s__10575__$2,temp__5457__auto__,search_term))
;
return iter__4292__auto__(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__10576,iter__4292__auto__,category,c__4290__auto__,size__4291__auto__,b__10577,s__10575__$2,temp__5457__auto__,search_term){
return (function (p__10582){
var map__10583 = p__10582;
var map__10583__$1 = ((((!((map__10583 == null)))?(((((map__10583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10583):map__10583);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10583__$1,cljs.core.cst$kw$title);
return clojure.string.includes_QMARK_(clojure.string.lower_case(title),clojure.string.lower_case(cljs.core.deref(search_term)));
});})(i__10576,iter__4292__auto__,category,c__4290__auto__,size__4291__auto__,b__10577,s__10575__$2,temp__5457__auto__,search_term))
,cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1(category)));
})()], null));

var G__10593 = (i__10576 + (1));
i__10576 = G__10593;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10577),homepage_ji$app$publications_$_iter__10574(cljs.core.chunk_rest(s__10575__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10577),null);
}
} else {
var category = cljs.core.first(s__10575__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2$content_DASH_subhead,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(category)], null),(function (){var iter__4292__auto__ = ((function (category,s__10575__$2,temp__5457__auto__,search_term){
return (function homepage_ji$app$publications_$_iter__10574_$_iter__10585(s__10586){
return (new cljs.core.LazySeq(null,((function (category,s__10575__$2,temp__5457__auto__,search_term){
return (function (){
var s__10586__$1 = s__10586;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__10586__$1);
if(temp__5457__auto____$1){
var s__10586__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__10586__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__10586__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__10588 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__10587 = (0);
while(true){
if((i__10587 < size__4291__auto__)){
var publication = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__10587);
cljs.core.chunk_append(b__10588,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_ji.app.publication_item,publication], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(publication)], null)));

var G__10594 = (i__10587 + (1));
i__10587 = G__10594;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10588),homepage_ji$app$publications_$_iter__10574_$_iter__10585(cljs.core.chunk_rest(s__10586__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10588),null);
}
} else {
var publication = cljs.core.first(s__10586__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_ji.app.publication_item,publication], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(publication)], null)),homepage_ji$app$publications_$_iter__10574_$_iter__10585(cljs.core.rest(s__10586__$2)));
}
} else {
return null;
}
break;
}
});})(category,s__10575__$2,temp__5457__auto__,search_term))
,null,null));
});})(category,s__10575__$2,temp__5457__auto__,search_term))
;
return iter__4292__auto__(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (iter__4292__auto__,category,s__10575__$2,temp__5457__auto__,search_term){
return (function (p__10589){
var map__10590 = p__10589;
var map__10590__$1 = ((((!((map__10590 == null)))?(((((map__10590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10590.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10590):map__10590);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10590__$1,cljs.core.cst$kw$title);
return clojure.string.includes_QMARK_(clojure.string.lower_case(title),clojure.string.lower_case(cljs.core.deref(search_term)));
});})(iter__4292__auto__,category,s__10575__$2,temp__5457__auto__,search_term))
,cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1(category)));
})()], null),homepage_ji$app$publications_$_iter__10574(cljs.core.rest(s__10575__$2)));
}
} else {
return null;
}
break;
}
});})(search_term))
,null,null));
});})(search_term))
;
return iter__4292__auto__(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(homepage_ji.app.site_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$publications], null)));
})())], null);
});
;})(search_term))
});
homepage_ji.app.teaching = (function homepage_ji$app$teaching(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_teaching,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1$content_DASH_subhead,"Teaching"], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4292__auto__ = (function homepage_ji$app$teaching_$_iter__10595(s__10596){
return (new cljs.core.LazySeq(null,(function (){
var s__10596__$1 = s__10596;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__10596__$1);
if(temp__5457__auto__){
var s__10596__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10596__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__10596__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__10598 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__10597 = (0);
while(true){
if((i__10597 < size__4291__auto__)){
var course = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__10597);
cljs.core.chunk_append(b__10598,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$teaching_DASH_item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$tag_DASH_success,cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(course)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$publication_DASH_link,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,cljs.core.cst$kw$link.cljs$core$IFn$_invoke$arity$1(course)], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(course)], null)], null));

var G__10599 = (i__10597 + (1));
i__10597 = G__10599;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10598),homepage_ji$app$teaching_$_iter__10595(cljs.core.chunk_rest(s__10596__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10598),null);
}
} else {
var course = cljs.core.first(s__10596__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$teaching_DASH_item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$tag_DASH_success,cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(course)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$publication_DASH_link,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,cljs.core.cst$kw$link.cljs$core$IFn$_invoke$arity$1(course)], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(course)], null)], null),homepage_ji$app$teaching_$_iter__10595(cljs.core.rest(s__10596__$2)));
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
homepage_ji.app.group_member = (function homepage_ji$app$group_member(p__10600){
var map__10601 = p__10600;
var map__10601__$1 = ((((!((map__10601 == null)))?(((((map__10601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10601.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10601):map__10601);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10601__$1,cljs.core.cst$kw$name);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10601__$1,cljs.core.cst$kw$link);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10601__$1,cljs.core.cst$kw$tag);
var avatar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10601__$1,cljs.core.cst$kw$avatar);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$group_DASH_member$pure_DASH_u_DASH_1_DASH_2$pure_DASH_md_DASH_1_DASH_3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$group_DASH_member_DASH_avatar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img$group_DASH_member_DASH_avatar_DASH_img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,avatar], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$group_DASH_member_DASH_name,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$tag_DASH_info,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,link], null),name], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$divgroup_DASH_member_DASH_tag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$small,tag], null)], null)], null);
});
homepage_ji.app.group_members = (function homepage_ji$app$group_members(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_group_DASH_members,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1$content_DASH_subhead,"Group Members"], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4292__auto__ = (function homepage_ji$app$group_members_$_iter__10603(s__10604){
return (new cljs.core.LazySeq(null,(function (){
var s__10604__$1 = s__10604;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__10604__$1);
if(temp__5457__auto__){
var s__10604__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10604__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__10604__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__10606 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__10605 = (0);
while(true){
if((i__10605 < size__4291__auto__)){
var member = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__10605);
cljs.core.chunk_append(b__10606,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_ji.app.group_member,member], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(member)], null)));

var G__10607 = (i__10605 + (1));
i__10605 = G__10607;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10606),homepage_ji$app$group_members_$_iter__10603(cljs.core.chunk_rest(s__10604__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10606),null);
}
} else {
var member = cljs.core.first(s__10604__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_ji.app.group_member,member], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(member)], null)),homepage_ji$app$group_members_$_iter__10603(cljs.core.rest(s__10604__$2)));
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_layout$pure_DASH_g,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_ji.app.sidebar], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$content$pure_DASH_u_DASH_1$pure_DASH_u_DASH_md_DASH_3_DASH_4,(function (){var G__10608 = cljs.core.deref(homepage_ji.app.current_page);
var G__10608__$1 = (((G__10608 instanceof cljs.core.Keyword))?G__10608.fqn:null);
switch (G__10608__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10608__$1)].join('')));

}
})()], null)], null);
}
});
});
homepage_ji.app.init = (function homepage_ji$app$init(){
var c__7851__auto___10629 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7851__auto___10629){
return (function (){
var f__7852__auto__ = (function (){var switch__7749__auto__ = ((function (c__7851__auto___10629){
return (function (state_10620){
var state_val_10621 = (state_10620[(1)]);
if((state_val_10621 === (1))){
var inst_10610 = cljs_http.client.get("site-conf.edn");
var state_10620__$1 = state_10620;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10620__$1,(2),inst_10610);
} else {
if((state_val_10621 === (2))){
var inst_10612 = (state_10620[(2)]);
var inst_10613 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_10612);
var inst_10614 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_10613)].join('');
var inst_10615 = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(inst_10614);
var inst_10616 = cljs.core.reset_BANG_(homepage_ji.app.site_data,inst_10615);
var inst_10617 = cljs.core.deref(homepage_ji.app.site_data);
var inst_10618 = cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_10617], 0));
var state_10620__$1 = (function (){var statearr_10622 = state_10620;
(statearr_10622[(7)] = inst_10616);

return statearr_10622;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_10620__$1,inst_10618);
} else {
return null;
}
}
});})(c__7851__auto___10629))
;
return ((function (switch__7749__auto__,c__7851__auto___10629){
return (function() {
var homepage_ji$app$init_$_state_machine__7750__auto__ = null;
var homepage_ji$app$init_$_state_machine__7750__auto____0 = (function (){
var statearr_10623 = [null,null,null,null,null,null,null,null];
(statearr_10623[(0)] = homepage_ji$app$init_$_state_machine__7750__auto__);

(statearr_10623[(1)] = (1));

return statearr_10623;
});
var homepage_ji$app$init_$_state_machine__7750__auto____1 = (function (state_10620){
while(true){
var ret_value__7751__auto__ = (function (){try{while(true){
var result__7752__auto__ = switch__7749__auto__(state_10620);
if(cljs.core.keyword_identical_QMARK_(result__7752__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7752__auto__;
}
break;
}
}catch (e10624){if((e10624 instanceof Object)){
var ex__7753__auto__ = e10624;
var statearr_10625_10630 = state_10620;
(statearr_10625_10630[(5)] = ex__7753__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10620);

return cljs.core.cst$kw$recur;
} else {
throw e10624;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7751__auto__,cljs.core.cst$kw$recur)){
var G__10631 = state_10620;
state_10620 = G__10631;
continue;
} else {
return ret_value__7751__auto__;
}
break;
}
});
homepage_ji$app$init_$_state_machine__7750__auto__ = function(state_10620){
switch(arguments.length){
case 0:
return homepage_ji$app$init_$_state_machine__7750__auto____0.call(this);
case 1:
return homepage_ji$app$init_$_state_machine__7750__auto____1.call(this,state_10620);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
homepage_ji$app$init_$_state_machine__7750__auto__.cljs$core$IFn$_invoke$arity$0 = homepage_ji$app$init_$_state_machine__7750__auto____0;
homepage_ji$app$init_$_state_machine__7750__auto__.cljs$core$IFn$_invoke$arity$1 = homepage_ji$app$init_$_state_machine__7750__auto____1;
return homepage_ji$app$init_$_state_machine__7750__auto__;
})()
;})(switch__7749__auto__,c__7851__auto___10629))
})();
var state__7853__auto__ = (function (){var statearr_10626 = (f__7852__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7852__auto__.cljs$core$IFn$_invoke$arity$0() : f__7852__auto__.call(null));
(statearr_10626[(6)] = c__7851__auto___10629);

return statearr_10626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7853__auto__);
});})(c__7851__auto___10629))
);


var G__10627 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_ji.app.calling_component], null);
var G__10628 = document.getElementById("container");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__10627,G__10628) : reagent.core.render_component.call(null,G__10627,G__10628));
});
