# LazyDB browser tools
A set of tools to bootstrap your web project!  
  
## Server lost screen
A dynamic screen to nicely tell your users when something goes wrong.  

Add the includes to your html head :
```html
<link href="https://fonts.googleapis.com/css2?family=Material+Icons" rel="stylesheet">
<link href="https://browser-tools.lazydb.com/server-lost-screen/style.css" rel="stylesheet">
<script src="https://browser-tools.lazydb.com/server-lost-screen/script.js"></script>
```
Then, you just have to call OpenServerLostScreen anytime you want :
```javascript
const optional_title = "Connection lost";
const optional_message = "Connection to your LazyDB server lost";
const optional_header = DefaultServerLostHeader;
OpenServerLostScreen(optional_title, optional_message, optional_header);
```

## Server loading screen
A dynamic screen to nicely tell your users when something is loading.

Add the includes to your html head :
```html
<link href="https://fonts.googleapis.com/css2?family=Material+Icons" rel="stylesheet">
<link href="https://browser-tools.lazydb.com/server-loading-screen/style.css" rel="stylesheet">
<script src="https://browser-tools.lazydb.com/server-loading-screen/script.js"></script>
```
Then, you just have to call OpenServerLoadingScreen anytime you want :
```javascript
const optional_title = "Loading in progress";
const optional_message = "Your content will appear in a few second :)";
const optional_header = DefaultServerLoadingHeader;
OpenServerLoadingScreen(optional_title, optional_message, optional_header);
```
