//page fully loaded
// 1. get data from server - url ? /data
// 2. show data in html

$(document).ready(function()
{
$.getJSON("/data",function(d)
{
alert(JSON.stringify(d));
$("#name").text(d.name);
$("#col").text(d.college);
$("#reg").text(d.regno);
})
})