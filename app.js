(function () {
var getKids = function (el) {
  return Array.prototype.slice.apply(el.children);
};
var eachKid = function (parent, fn, scope) {
  getKids(parent).forEach(function (kid) {
    eachKid(kid, fn, scope);
    fn.apply(scope, [kid]);
  }, scope);
};
var style = function (el) {
  el.style.backgroundColor = '#000';
  el.style.color = '#666';
};
eachKid(document.body, function (el) {
  style(el);
});
}());