const DefaultServerLoadingHeader = '<i class="material-icons">construction</i>' +
'                <h1>LazyDB <span>Alpha</span></h1>' +
'                <h5>Next-gen SaaS backend</h5>';

function OpenServerLoadingScreen(title = "Loading in progress", message = "Your content will appear in a few second :)", header = DefaultServerLostHeader){
    document.body.innerHTML = '<section class="lazydb_load">\n' +
        '    <div class="container">\n' +
        '        <div class="sub_container">\n' +
        '            <div class="header">\n' + header +
        '            </div>\n' +
        '            <div class="arrow-down"></div>\n' +
        '            <div class="loading">\n' +
        '                <h1>' + title + '</h1>\n' +
        '                <div class="lazydb_load_lds-ripple red"><div></div><div></div></div>\n' +
        '                <h4 id="lazydb_load_sub_title">' + message + '</h4>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</section>';
}