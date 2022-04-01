"use strict";(self.webpackChunk_internetarchive_bookreader=self.webpackChunk_internetarchive_bookreader||[]).push([[529],{8586:function(e,t,n){n(5666),n(1058),n(9600),n(7327),n(1539),n(2222),n(9826),n(5069),n(4553),n(8674);var a,o=n(3609),r=n(3609);function s(e,t,n,a,o,r,s){try{var i=e[r](s),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(a,o)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(a,o){var r=e.apply(t,n);function i(e){s(r,a,o,i,c,"next",e)}function c(e){s(r,a,o,i,c,"throw",e)}i(void 0)}))}}o.extend(BookReader.defaultOptions,{olHost:"https://openlibrary.org",enableChaptersPlugin:!0,bookId:""}),BookReader.prototype.setup=(a=BookReader.prototype.setup,function(e){a.call(this,e),this.olHost=e.olHost,this.enableChaptersPlugin=e.enableChaptersPlugin,this.bookId=e.bookId}),BookReader.prototype.init=function(e){return function(){var t=this;e.call(this),this.enableChaptersPlugin&&"embed"!==this.ui&&this.getOpenLibraryRecord(),this.enableMobileNav&&(this.bind(BookReader.eventNames.mobileNavOpen,(function(){t.updateTOCState(t.firstIndex,t._tocEntries),r("table-contents-list").parent().hasClass("mm-opened")&&t.updateTOCState(t.firstIndex,t._tocEntries)})),r(".BRmobileMenu__tableContents").on("click",(function(){t.updateTOCState(t.firstIndex,t._tocEntries)})))}}(BookReader.prototype.init),BookReader.prototype.addChapter=function(e,t,n){var a=this,o=BookReader.util.cssPercentage(n,this.getNumLeafs()-1),s=function(e){a.jumpToIndex(r(e.delegateTarget).data("pageIndex")),r(".current-chapter").removeClass("current-chapter"),r(e.delegateTarget).addClass("current-chapter")},i="".concat(e," | "),c="".concat("Page"," ").concat(t),l=r("<li></li>").append(r("<span class='BRTOCElementTitle'></span>").text(i)).append(r("<span class='BRTOCElementPage'></span>").text(c));l.addClass("BRtable-contents-el").appendTo(this.$(".table-contents-list")).data({pageIndex:n}),null!=n&&(r("<div></div>").append(r("<div />").text(i+c)).addClass("BRchapter").css({left:o}).appendTo(this.$(".BRnavline")).data({pageIndex:n}).on("mouseenter",(function(e){var t=e.currentTarget,n=t.querySelector("div"),o=n.getBoundingClientRect(),s=t.getBoundingClientRect(),i=2*parseInt(getComputedStyle(n).paddingLeft);o.x-i<0&&n.style.setProperty("transform","translateX(-".concat(s.left-i,"px)")),a.$(".BRsearch,.BRchapter").removeClass("front"),r(e.target).addClass("front")})).on("mouseleave",(function(e){return r(e.target).removeClass("front")})).on("click",s),l.bind("click",s).addClass("chapter-clickable").attr("data-event-click-tracking","BRTOCPanel|GoToChapter"))},BookReader.prototype.removeChapters=function(){this.$(".BRnavpos .BRchapter").remove()},BookReader.prototype.updateTOC=function(e){this.removeChapters(),this.enableMobileNav&&e.length>0&&this.$(".BRmobileMenu__tableContents").show();for(var t=0;t<e.length;t++)this.addChapterFromEntry(e[t]);this._tocEntries=e,r(".table-contents-list").children().each((function(t,n){e[t].mobileHTML=n}))},BookReader.prototype.addChapterFromEntry=function(e){e.pageIndex=this.getPageIndex(e.pagenum);var t=[e.label,e.title].filter((function(e){return e})).join(" ");this.addChapter(t,e.pagenum,e.pageIndex),this.$(".BRchapter, .BRsearch").each((function(e,t){var n=r(t);n.on("mouseenter",(function(){return n.addClass("front")})).on("mouseleave",(function(){return n.removeClass("front")}))}))},BookReader.prototype.getOpenLibraryRecord=i(regeneratorRuntime.mark((function e(){var t,n,a,o,s=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(this.olHost,"/query.json?type=/type/edition&*="),n="".concat(t,"&ocaid=").concat(this.bookId),a=function(e){e&&e.table_of_contents&&s.updateTOC(e.table_of_contents)},e.next=5,r.ajax({url:n,dataType:"jsonp"});case 5:if((o=e.sent)&&o.length){e.next=10;break}return e.next=9,r.ajax({url:"".concat(t,"&source_records=ia:").concat(this.bookId),dataType:"jsonp"});case 9:o=e.sent;case 10:o&&o.length>0&&a(o[0]);case 11:case"end":return e.stop()}}),e,this)}))),BookReader.prototype.buildMobileDrawerElement=function(e){return function(){var t=e.call(this);return this.enableMobileNav&&this.options.enableChaptersPlugin&&t.find(".BRmobileMenu__moreInfoRow").after(r('\n        <li class="BRmobileMenu__tableContents" data-event-click-tracking="BRSidebar|TOCPanel">\n            <span>\n                <span class="DrawerIconWrapper">\n                  <img class="DrawerIcon" src="'.concat(this.imagesBaseURL,'icon_toc.svg" alt="toc-icon"/>\n                </span>\n                Table of Contents\n            </span>\n            <div>\n                <ol class="table-contents-list">\n                </ol>\n            </div>\n        </li>')).hide()),t}}(BookReader.prototype.buildMobileDrawerElement),BookReader.prototype.updateTOCState=function(e,t){if(t){r(".current-chapter").removeClass("current-chapter");var n=t.filter((function(e){return null!=e.pageIndex})).reverse(),a=n[n.findIndex((function(t){return t.pageIndex<=e}))];null!=a&&r(a.mobileHTML).addClass("current-chapter")}}}},function(e){e(e.s=8586)}]);
//# sourceMappingURL=plugin.chapters.js.map