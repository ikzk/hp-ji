(ns homepage-ji.app
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
   [reagent.core :as reagent :refer [atom]]
   [cljs.reader :as edn]
   [cljs-http.client :as http]
   [cljs.core.async :refer [<!]]
   [clojure.string :as s]))

(def site-data
  (atom nil))

(def current-page
  (atom :main))

(defn sidebar []
  [:div.sidebar.pure-u-1.pure-u-md-1-4
   [:div.header
    [:h1.brand-title "Ji Liu"]
    [:h2.brand-tagline "University of Rochester"]

    [:nav.nav
     [:ul.nav-list
      [:li.nav-item [:button.pure-button {:on-click #(reset! current-page :main)} "About Me"]]
      [:li.nav-item [:button.pure-button {:on-click #(reset! current-page :main)} "News"]]
      [:li.nav-item [:button.pure-button {:on-click #(reset! current-page :group-members)} "Group Members"]]
      [:li.nav-item [:button.pure-button {:on-click #(reset! current-page :publications)} "Publications"]]
      [:li.nav-item [:button.pure-button {:on-click #(reset! current-page :teaching)} "Teaching"]]]]]])

(defn about-me []
  (fn []
    [:div#about-me.pure-u-1
     [:h1.content-subhead "About Me"]
     [:img.about-me-image
      {:src (get-in @site-data [:about-me :avatar])
       :align "left"}]
     [:div.post-description (get-in @site-data [:about-me :text])]]))

(defn news-item [{:keys [content date]}]
  (fn []
    [:div.news-item
     [:div [:span.tag-success date]]
     [:div.post-description content]]))

(defn news []
  (let [display-num (atom 3)]
   (fn []
    [:div#news.pure-u-1
     [:h1.content-subhead "News"]
     (doall
      (for [item (take @display-num (get-in @site-data [:news :items]))]
        ^{:key (:date item)} [news-item item]))
     [:button.pure-button.news-read-more
      {:on-click #(swap! display-num + 3)}
      "Read More..."]])))

;; (defn publication-item [{:keys [title title-link authors tags note]}]
;;   [:div.publication-item
;;    [:div
;;     (when note [:span.tag-secondary note])
;;     (when tags (for [tag tags]
;;                       [:a.tag-success
;;                        {:href (:link tag)}
;;                        (:name tag)]))]
;;    [:div [:a.publication-link {:href title-link} title]]
;;    [:div.authors authors]])

;; (defn publications []
;;   (let [search-term (atom "")]
;;    (fn []
;;     [:div#publications
;;      [:h1.content-subhead "Publications"]
;;      [:form.pure-form
;;       [:input.pure-input-1 {:type "text"
;;                             :value @search-term
;;                             :placeholder "Search..."
;;                             :on-change #(reset! search-term (-> % .-target .-value))}]]
;;      (doall
;;       (for [category (get-in @site-data [:publications])]
;;         [:div [:h2.content-subhead (:name category)]
;;          (for [publication (filter (fn [{:keys [title]}]
;;                                      (s/includes? (s/lower-case title) (s/lower-case @search-term)))
;;                                    (:items category))]
;;            ^{:key (:title publication)} [publication-item publication])]))])))

(defn publications []
  (fn []
    [:div#publications
     [:h1.content-subhead "Publications"]
     [:div
      {:dangerouslySetInnerHTML {:__html (get-in @site-data [:publications :resource-link])}}]]))

(defn teaching []
  (fn []
    [:div#teaching
     [:h1.content-subhead "Teaching"]
     (doall
      (for [course (get-in @site-data [:teaching])]
        [:div.teaching-item
         [:div [:span.tag-success (:tag course)]]
         [:a.publication-link {:href (:link course)} (:name course)]]))]))

(defn group-member [{:keys [name link tag avatar]}]
  [:div.group-member.pure-u-1-2.pure-md-1-3
   [:div.group-member-avatar
    [:img.group-member-avatar-img
     {:src avatar}]]
   [:div.group-member-name [:a.tag-info {:href link} name]]
   [:divgroup-member-tag [:span.small tag]]])

(defn group-members []
  (fn []
    [:div#group-members
     [:h1.content-subhead "Group Members"]
     (doall (for [member (get-in @site-data [:group-members])]
              ^{:key (:name member)} [group-member member]))]))

(defn calling-component []
  (fn []
    (if (nil? @site-data)
      [:div]
      [:div#layout.pure-g
       [sidebar]
       [:div.content.pure-u-1.pure-u-md-3-4
        (case @current-page
          :main          [:div
                          [about-me]
                          [news]]
          :group-members [group-members]
          :publications  [publications]
          :teaching      [teaching])]])))

(defn init []
  (go
    (let [response (<! (http/get "site-conf.edn"))
          publications-html (<! (http/get "publications.html"))]
      (reset! site-data (edn/read-string (str (:body response))))
      (swap! site-data update-in [:publications :resource-link] (constantly (:body publications-html)))
      (print @site-data)))
  (reagent/render-component
   [calling-component]
   (.getElementById js/document "container")))
