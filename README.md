# LazyDB browser tools
A set of tools to bootstrap your web project!  
  
## Server lost screen
A dynamic screen to nicely tell your users when something goes wrong.  

Add the includes to your html head :
```html
<link href="https://browser-tools.lazydb.com/server-lost-screen/style.css" rel="stylesheet">
<script src="https://browser-tools.lazydb.com/server-lost-screen/script.js"></script>
```
Then, you just have to call OpenServerLostScreen anytime you want :
```javascript
const optional_title = "Connection lost";
const optional_message = "Connection to your LazyDB server lost ";
const optional_header = DefaultServerLostHeader;
OpenServerLostScreen(optional_title, optional_message, optional_header);
```
