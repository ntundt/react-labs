function getFileNameFromUrl(url) {
    return decodeURI(url.split('/').pop());
}
const u = location.pathname;
var myref = (getFileNameFromUrl(u).replace(/\s/g, "_"));
$(function () {
    selectMenu(".site-nav-list", myref);
});

function selectMenu(el, href) {
    var search = href.split('?')[1] || '';
    if (search) {
        search = '?' + search;
    }
    $(el)
        .find('.site-nav-list-active')
        .removeClass('site-nav-list-active')
        .end()
        .find('a[href~="' + href + '"]')
        .filter(function () {
            return this.search === search;
        })
        .parents('li')
        .addClass('site-nav-list-active');
};