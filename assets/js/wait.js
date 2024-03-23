function ShowLoading(e) {
$("#finish").show();
$("#twrap").hide();
$("#bmodal").hide();
/* var div = document.createElement('div');
var img = document.createElement('img');
img.src = 'https://yolikers.com/loader.gif';
div.innerHTML = "<h2>Processing Your Request...<br /> Please Wait, It Might Take upto 2min. Dont Close The Window.</h2>";
div.style.cssText = 'top: 0%; left: 0%; width: 100%; height: 100%; display: flex; position: fixed; align-items: center; color: #FFFFFF; justify-content: center; background: #0d9ccb; border: 1px solid #000';
div.appendChild(img);
document.body.appendChild(div);
return true; */
// These 2 lines cancel form submission, so only use if needed.
//window.event.cancelBubble = true;
//e.stopPropagation();
}