<script language="JavaScript">
var Cookie = new Object();
Cookie.set = function(name, value, expires, path, domain, secure) {
document.cookie = name + "=" + escape(value) +
((expires) ? "; expires=" + expires : "") +c ((path) ? "; path=" + path : "") +
((domain) ? "; domain=" + domain : "") +
((secure) ? "; secure" : "");
}
Cookie.get = function(name) {
var prefix = name + "=";
var cookieStartIndex = document.cookie.indexOf(prefix);
if (cookieStartIndex == -1) return null;
var cookieEndIndex = document.cookie.indexOf(";", cookieStartIndex + prefix.length);
if (cookieEndIndex == -1) cookieEndIndex = document.cookie.length;
return unescape(document.cookie.substring(cookieStartIndex + prefix.length, cookieEndIndex));
}
Cookie.del = function(name, path, domain) {
if (getCookie(name)) {
document.cookie = name + "=" +
((path) ? "; path=" + path : "") +
((domain) ? "; domain=" + domain : "") +
"; expires=Thu, 01-Jan-70 00:00:01 GMT";
}
}
var myVar = null;// просто переменная со значением, для проверки кукисов
myVar = Cookie.get("trava");
if (myVar != "1")// проверка на то есть куки или нету, если есть то не выполнять скрипт иначе задается вопрос
{
var zayti = confirm("Вам уже есть 18лет? \nЕсли нет, нажмите Отмена.");
if (zayti){
Cookie.set("trava", "1");
}
else
{location.href = "http://www.youtube.com/watch?v=k1EvDLTDLic";}
}
</script>