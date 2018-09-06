// Compiled by ClojureScript 1.10.238 {}
goog.provide('homepage_ji.app');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.reader');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('clojure.string');
homepage_ji.app.site_data = reagent.core.atom.call(null,null);
homepage_ji.app.current_page = reagent.core.atom.call(null,new cljs.core.Keyword(null,"main","main",-2117802661));
homepage_ji.app.sidebar = (function homepage_ji$app$sidebar(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sidebar.pure-u-1.pure-u-md-1-4","div.sidebar.pure-u-1.pure-u-md-1-4",1583042790),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.header","div.header",1964513620),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.brand-title","h1.brand-title",-355572544),"Ji Liu"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.brand-tagline","h2.brand-tagline",648476820),"University of Rochester"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.nav","nav.nav",-223269137),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav-list","ul.nav-list",2119183677),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.nav-item","li.nav-item",299679112),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.pure-button","button.pure-button",698850720),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,homepage_ji.app.current_page,new cljs.core.Keyword(null,"main","main",-2117802661));
})], null),"About Me"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.nav-item","li.nav-item",299679112),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.pure-button","button.pure-button",698850720),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,homepage_ji.app.current_page,new cljs.core.Keyword(null,"main","main",-2117802661));
})], null),"News"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.nav-item","li.nav-item",299679112),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.pure-button","button.pure-button",698850720),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,homepage_ji.app.current_page,new cljs.core.Keyword(null,"group-members","group-members",-729516321));
})], null),"Group Members"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.nav-item","li.nav-item",299679112),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.pure-button","button.pure-button",698850720),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,homepage_ji.app.current_page,new cljs.core.Keyword(null,"publications","publications",1164590218));
})], null),"Publications"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.nav-item","li.nav-item",299679112),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.pure-button","button.pure-button",698850720),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,homepage_ji.app.current_page,new cljs.core.Keyword(null,"teaching","teaching",1331203675));
})], null),"Teaching"], null)], null)], null)], null)], null)], null);
});
homepage_ji.app.about_me = (function homepage_ji$app$about_me(){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#about-me.pure-u-1","div#about-me.pure-u-1",535017772),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.content-subhead","h1.content-subhead",892213106),"About Me"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.about-me-image","img.about-me-image",-282576617),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),cljs.core.get_in.call(null,cljs.core.deref.call(null,homepage_ji.app.site_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"about-me","about-me",2107557030),new cljs.core.Keyword(null,"avatar","avatar",-1607499307)], null)),new cljs.core.Keyword(null,"align","align",1964212802),"left"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.post-description","div.post-description",118885674),cljs.core.get_in.call(null,cljs.core.deref.call(null,homepage_ji.app.site_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"about-me","about-me",2107557030),new cljs.core.Keyword(null,"text","text",-1790561697)], null))], null)], null);
});
});
homepage_ji.app.news_item = (function homepage_ji$app$news_item(p__6323){
var map__6324 = p__6323;
var map__6324__$1 = ((((!((map__6324 == null)))?(((((map__6324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6324):map__6324);
var content = cljs.core.get.call(null,map__6324__$1,new cljs.core.Keyword(null,"content","content",15833224));
var date = cljs.core.get.call(null,map__6324__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
return ((function (map__6324,map__6324__$1,content,date){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.news-item","div.news-item",-943257469),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.tag-success","span.tag-success",-428023791),date], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.post-description","div.post-description",118885674),content], null)], null);
});
;})(map__6324,map__6324__$1,content,date))
});
homepage_ji.app.news = (function homepage_ji$app$news(){
var display_num = reagent.core.atom.call(null,(3));
return ((function (display_num){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#news.pure-u-1","div#news.pure-u-1",-8515273),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.content-subhead","h1.content-subhead",892213106),"News"], null),cljs.core.doall.call(null,(function (){var iter__4292__auto__ = ((function (display_num){
return (function homepage_ji$app$news_$_iter__6326(s__6327){
return (new cljs.core.LazySeq(null,((function (display_num){
return (function (){
var s__6327__$1 = s__6327;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__6327__$1);
if(temp__5457__auto__){
var s__6327__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6327__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__6327__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__6329 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__6328 = (0);
while(true){
if((i__6328 < size__4291__auto__)){
var item = cljs.core._nth.call(null,c__4290__auto__,i__6328);
cljs.core.chunk_append.call(null,b__6329,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_ji.app.news_item,item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(item)], null)));

var G__6330 = (i__6328 + (1));
i__6328 = G__6330;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6329),homepage_ji$app$news_$_iter__6326.call(null,cljs.core.chunk_rest.call(null,s__6327__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6329),null);
}
} else {
var item = cljs.core.first.call(null,s__6327__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_ji.app.news_item,item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(item)], null)),homepage_ji$app$news_$_iter__6326.call(null,cljs.core.rest.call(null,s__6327__$2)));
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
return iter__4292__auto__.call(null,cljs.core.take.call(null,cljs.core.deref.call(null,display_num),cljs.core.get_in.call(null,cljs.core.deref.call(null,homepage_ji.app.site_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"news","news",-811837442),new cljs.core.Keyword(null,"items","items",1031954938)], null))));
})()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.pure-button.news-read-more","button.pure-button.news-read-more",-461426248),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (display_num){
return (function (){
return cljs.core.swap_BANG_.call(null,display_num,cljs.core._PLUS_,(3));
});})(display_num))
], null),"Read More..."], null)], null);
});
;})(display_num))
});
homepage_ji.app.publications = (function homepage_ji$app$publications(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#publications","div#publications",-1506829843),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.content-subhead","h1.content-subhead",892213106),"Publications"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),cljs.core.get_in.call(null,cljs.core.deref.call(null,homepage_ji.app.site_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"publications","publications",1164590218),new cljs.core.Keyword(null,"resource-link","resource-link",-104111676)], null))], null)], null)], null)], null);
});
});
homepage_ji.app.teaching = (function homepage_ji$app$teaching(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#teaching","div#teaching",-469422001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.content-subhead","h1.content-subhead",892213106),"Teaching"], null),cljs.core.doall.call(null,(function (){var iter__4292__auto__ = (function homepage_ji$app$teaching_$_iter__6331(s__6332){
return (new cljs.core.LazySeq(null,(function (){
var s__6332__$1 = s__6332;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__6332__$1);
if(temp__5457__auto__){
var s__6332__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6332__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__6332__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__6334 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__6333 = (0);
while(true){
if((i__6333 < size__4291__auto__)){
var course = cljs.core._nth.call(null,c__4290__auto__,i__6333);
cljs.core.chunk_append.call(null,b__6334,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.teaching-item","div.teaching-item",2124844947),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.tag-success","span.tag-success",-428023791),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(course)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.publication-link","a.publication-link",-331662101),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(course)], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(course)], null)], null));

var G__6335 = (i__6333 + (1));
i__6333 = G__6335;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6334),homepage_ji$app$teaching_$_iter__6331.call(null,cljs.core.chunk_rest.call(null,s__6332__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6334),null);
}
} else {
var course = cljs.core.first.call(null,s__6332__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.teaching-item","div.teaching-item",2124844947),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.tag-success","span.tag-success",-428023791),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(course)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.publication-link","a.publication-link",-331662101),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(course)], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(course)], null)], null),homepage_ji$app$teaching_$_iter__6331.call(null,cljs.core.rest.call(null,s__6332__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,homepage_ji.app.site_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"teaching","teaching",1331203675)], null)));
})())], null);
});
});
homepage_ji.app.group_member = (function homepage_ji$app$group_member(p__6336){
var map__6337 = p__6336;
var map__6337__$1 = ((((!((map__6337 == null)))?(((((map__6337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6337):map__6337);
var name = cljs.core.get.call(null,map__6337__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var link = cljs.core.get.call(null,map__6337__$1,new cljs.core.Keyword(null,"link","link",-1769163468));
var tag = cljs.core.get.call(null,map__6337__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var avatar = cljs.core.get.call(null,map__6337__$1,new cljs.core.Keyword(null,"avatar","avatar",-1607499307));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.group-member.pure-u-1-2.pure-md-1-3","div.group-member.pure-u-1-2.pure-md-1-3",2125541874),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.group-member-avatar","div.group-member-avatar",393141181),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.group-member-avatar-img","img.group-member-avatar-img",-1365000089),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),avatar], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.group-member-name","div.group-member-name",989958494),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.tag-info","a.tag-info",-2080477548),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),link], null),name], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"divgroup-member-tag","divgroup-member-tag",718104040),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.small","span.small",1761756015),tag], null)], null)], null);
});
homepage_ji.app.group_members = (function homepage_ji$app$group_members(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#group-members","div#group-members",660883040),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.content-subhead","h1.content-subhead",892213106),"Group Members"], null),cljs.core.doall.call(null,(function (){var iter__4292__auto__ = (function homepage_ji$app$group_members_$_iter__6339(s__6340){
return (new cljs.core.LazySeq(null,(function (){
var s__6340__$1 = s__6340;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__6340__$1);
if(temp__5457__auto__){
var s__6340__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6340__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__6340__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__6342 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__6341 = (0);
while(true){
if((i__6341 < size__4291__auto__)){
var member = cljs.core._nth.call(null,c__4290__auto__,i__6341);
cljs.core.chunk_append.call(null,b__6342,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_ji.app.group_member,member], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(member)], null)));

var G__6343 = (i__6341 + (1));
i__6341 = G__6343;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6342),homepage_ji$app$group_members_$_iter__6339.call(null,cljs.core.chunk_rest.call(null,s__6340__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6342),null);
}
} else {
var member = cljs.core.first.call(null,s__6340__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_ji.app.group_member,member], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(member)], null)),homepage_ji$app$group_members_$_iter__6339.call(null,cljs.core.rest.call(null,s__6340__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,homepage_ji.app.site_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group-members","group-members",-729516321)], null)));
})())], null);
});
});
homepage_ji.app.calling_component = (function homepage_ji$app$calling_component(){
return (function (){
if((cljs.core.deref.call(null,homepage_ji.app.site_data) == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#layout.pure-g","div#layout.pure-g",63663919),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_ji.app.sidebar], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content.pure-u-1.pure-u-md-3-4","div.content.pure-u-1.pure-u-md-3-4",954899351),(function (){var G__6344 = cljs.core.deref.call(null,homepage_ji.app.current_page);
var G__6344__$1 = (((G__6344 instanceof cljs.core.Keyword))?G__6344.fqn:null);
switch (G__6344__$1) {
case "main":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_ji.app.about_me], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_ji.app.news], null)], null);

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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__6344__$1)].join('')));

}
})()], null)], null);
}
});
});
homepage_ji.app.init = (function homepage_ji$app$init(){
var c__3688__auto___6373 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3688__auto___6373){
return (function (){
var f__3689__auto__ = (function (){var switch__3598__auto__ = ((function (c__3688__auto___6373){
return (function (state_6365){
var state_val_6366 = (state_6365[(1)]);
if((state_val_6366 === (1))){
var inst_6346 = cljs_http.client.get.call(null,"https://ikzk.github.io/hp-ji/site-conf.edn");
var state_6365__$1 = state_6365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6365__$1,(2),inst_6346);
} else {
if((state_val_6366 === (2))){
var inst_6348 = (state_6365[(2)]);
var inst_6349 = cljs_http.client.get.call(null,"https://ikzk.github.io/hp-ji/publications.html");
var state_6365__$1 = (function (){var statearr_6367 = state_6365;
(statearr_6367[(7)] = inst_6348);

return statearr_6367;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6365__$1,(3),inst_6349);
} else {
if((state_val_6366 === (3))){
var inst_6348 = (state_6365[(7)]);
var inst_6351 = (state_6365[(2)]);
var inst_6352 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_6348);
var inst_6353 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_6352)].join('');
var inst_6354 = cljs.reader.read_string.call(null,inst_6353);
var inst_6355 = cljs.core.reset_BANG_.call(null,homepage_ji.app.site_data,inst_6354);
var inst_6356 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6357 = [new cljs.core.Keyword(null,"publications","publications",1164590218),new cljs.core.Keyword(null,"resource-link","resource-link",-104111676)];
var inst_6358 = (new cljs.core.PersistentVector(null,2,(5),inst_6356,inst_6357,null));
var inst_6359 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_6351);
var inst_6360 = cljs.core.constantly.call(null,inst_6359);
var inst_6361 = cljs.core.swap_BANG_.call(null,homepage_ji.app.site_data,cljs.core.update_in,inst_6358,inst_6360);
var inst_6362 = cljs.core.deref.call(null,homepage_ji.app.site_data);
var inst_6363 = cljs.core.print.call(null,inst_6362);
var state_6365__$1 = (function (){var statearr_6368 = state_6365;
(statearr_6368[(8)] = inst_6355);

(statearr_6368[(9)] = inst_6361);

return statearr_6368;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6365__$1,inst_6363);
} else {
return null;
}
}
}
});})(c__3688__auto___6373))
;
return ((function (switch__3598__auto__,c__3688__auto___6373){
return (function() {
var homepage_ji$app$init_$_state_machine__3599__auto__ = null;
var homepage_ji$app$init_$_state_machine__3599__auto____0 = (function (){
var statearr_6369 = [null,null,null,null,null,null,null,null,null,null];
(statearr_6369[(0)] = homepage_ji$app$init_$_state_machine__3599__auto__);

(statearr_6369[(1)] = (1));

return statearr_6369;
});
var homepage_ji$app$init_$_state_machine__3599__auto____1 = (function (state_6365){
while(true){
var ret_value__3600__auto__ = (function (){try{while(true){
var result__3601__auto__ = switch__3598__auto__.call(null,state_6365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3601__auto__;
}
break;
}
}catch (e6370){if((e6370 instanceof Object)){
var ex__3602__auto__ = e6370;
var statearr_6371_6374 = state_6365;
(statearr_6371_6374[(5)] = ex__3602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6370;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6375 = state_6365;
state_6365 = G__6375;
continue;
} else {
return ret_value__3600__auto__;
}
break;
}
});
homepage_ji$app$init_$_state_machine__3599__auto__ = function(state_6365){
switch(arguments.length){
case 0:
return homepage_ji$app$init_$_state_machine__3599__auto____0.call(this);
case 1:
return homepage_ji$app$init_$_state_machine__3599__auto____1.call(this,state_6365);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
homepage_ji$app$init_$_state_machine__3599__auto__.cljs$core$IFn$_invoke$arity$0 = homepage_ji$app$init_$_state_machine__3599__auto____0;
homepage_ji$app$init_$_state_machine__3599__auto__.cljs$core$IFn$_invoke$arity$1 = homepage_ji$app$init_$_state_machine__3599__auto____1;
return homepage_ji$app$init_$_state_machine__3599__auto__;
})()
;})(switch__3598__auto__,c__3688__auto___6373))
})();
var state__3690__auto__ = (function (){var statearr_6372 = f__3689__auto__.call(null);
(statearr_6372[(6)] = c__3688__auto___6373);

return statearr_6372;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3690__auto__);
});})(c__3688__auto___6373))
);


return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage_ji.app.calling_component], null),document.getElementById("container"));
});

//# sourceMappingURL=app.js.map
