# LazyDB browser tools
A set of tools to bootstrap your web project!  
  
## Server lost screen
A dynamic screen to nicely tell your users when something goes wrong.  

Add the includes to your html head :
```html
<link href="https://browser-tools.lazydb.com/server-lost-screen/style.css" rel="stylesheet">
<script src="https://browser-tools.lazydb.com/server-lost-screen/script.js"></script>

<!-- Optional, material icons for default header -->
<link href="https://fonts.googleapis.com/css2?family=Material+Icons" rel="stylesheet">
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
<link href="https://browser-tools.lazydb.com/server-loading-screen/style.css" rel="stylesheet">
<script src="https://browser-tools.lazydb.com/server-loading-screen/script.js"></script>

<!-- Optional, material icons for default header -->
<link href="https://fonts.googleapis.com/css2?family=Material+Icons" rel="stylesheet">
```
Then, you just have to call OpenServerLoadingScreen anytime you want :
```javascript
const optional_title = "Loading in progress";
const optional_message = "Your content will appear in a few second :)";
const optional_header = DefaultServerLoadingHeader;
OpenServerLoadingScreen(optional_title, optional_message, optional_header);
```

## Login screen
A dynamic login screen.

Add the includes to your html head :
```html
<!-- CDN for the loading screen -->
<link href="https://browser-tools.lazydb.com/connect-screen/style.css" rel="stylesheet">
<script src="https://browser-tools.lazydb.com/connect-screen/script.js"></script>

<!-- The official LazyDB connector for the browser -->
<script src="https://lazybrowser.lazydb.com/lazydb.js"></script>

<!-- Sweetalert -->
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@10.15.5/dist/sweetalert2.all.min.js"></script>

<!-- Optional, material icons for default header -->
<link href="https://fonts.googleapis.com/css2?family=Material+Icons" rel="stylesheet">
```
Then, you just have to call OpenConnectScreen anytime you want :
```javascript
const db = new Database("alpha.lazydb.com", 'your_port', function(){});
const optionnal_onConnect = function (){alert('Execute function when user is connected')};
const optionnal_title = "Login";
const optionnal_message = "Sign into your account";
const optionnal_img = "https://browser-tools.lazydb.com/logo_lazydb.png";
const optionnal_header = DefaultLoginHeader;
OpenConnectScreen(db,optionnal_onConnect,optionnal_title,optionnal_message,optionnal_img,optionnal_header);
```
