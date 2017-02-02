function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

var x = 5;
buf.push("<div><ul>");
for (var i=1; i<=x; i++) {
{
buf.push("<li>Hello</li>");
}
}
buf.push("</ul></div>");;return buf.join("");
}