# Make any webpage editable
---------------------------
You can make any web page editable if you copy and paste this code in your browser's address bar.

```javascript
javascript:document.body.contentEditable = 'true'; document.designMode='on'; void 0
```

If you use chrome and copy this code then chrome may strip the leading `javascript:` for secuirty purpose.

What if you can make a bookmarklet of this code which will toggle the page to be editable and non editable. Here is the code of that bookmarklet. 

```javascript
javascript:(function() {
  if (document.body.contentEditable === 'false' || document.body.contentEditable === 'inherit') {
    document.body.contentEditable = 'true'; document.designMode='on';
  } else {
    document.body.contentEditable = 'false'; document.designMode='off';
  }
})()
```

Select this code and drag and drop in your bookmark bar and give appropriate name to this bookmarklet. Let the toggle begin :)

<a href="javascript:(function() { if (document.body.contentEditable === 'false' || document.body.contentEditable === 'inherit') { document.body.contentEditable = 'true'; document.designMode='on'; } else { document.body.contentEditable = 'false'; document.designMode='off'; } })()">contentEditable</a>

