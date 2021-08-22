const ServerLostAutoRetryTime = 10000;
const DefaultServerLostHeader = '<i class="material-icons">construction</i>' +
'                <h1>LazyDB <span>Alpha</span></h1>' +
'                <h5>Next-gen SaaS backend</h5>';

function OpenServerLostScreen(title = "Connection lost", message = "Connection to your LazyDB server lost ", header = DefaultServerLostHeader){
    document.body.innerHTML = '<section class="lazydb_load_error">\n' +
        '    <div class="container">\n' +
        '        <div class="sub_container">\n' +
        '            <div class="header">\n' + header +
        '            </div>\n' +
        '            <div class="arrow-down"></div>\n' +
        '            <div class="loading">\n' +
        '                <h1>' + title + '</h1>\n' +
        '                <div class="lds-ripple red"><div></div><div></div></div>\n' +
        '                <h4 id="lazydb_load_error_sub_title">' + message + ' (auto retry in <span>' + (ServerLostAutoRetryTime / 1000) + '</span>s)</h4>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</section>';
    setTimeout(function (){
        document.location.reload();
    },ServerLostAutoRetryTime);
    let cpt = 10;
    setInterval(function (){
        cpt -= 1;
        document.getElementById('lazydb_load_error_sub_title').getElementsByTagName('span')[0].innerHTML=cpt
    },ServerLostAutoRetryTime / 10);
}