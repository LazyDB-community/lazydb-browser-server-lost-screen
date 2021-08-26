const ServerLostAutoRetryTime = 10000;
const DefaultServerLostHeader = '<i class="material-icons">construction</i>' +
'                <h1>LazyDB <span>Alpha</span></h1>' +
'                <h5>Next-gen SaaS backend</h5>';

function OpenServerLostScreen(title = "Connection lost", message = "Connection to your LazyDB server lost ", header = DefaultServerLostHeader,params){
    document.body.innerHTML = '<section class="lazydb_load_error">\n' +
        '    <div class="container">\n' +
        '        <div class="sub_container">\n' +
        '            <div class="header">\n' + header +
        '            </div>\n' +
        '            <div class="arrow-down"></div>\n' +
        '            <div class="loading">\n' +
        '                <h1>' + title + '</h1>\n' +
        '                <div class="lazydb_load_error_lds-ripple lazydb_red"><div></div><div></div></div>\n' +
        '                <h4 id="lazydb_load_error_sub_title">' + message + ' (auto retry in <span>' + (ServerLostAutoRetryTime / 1000) + '</span>s)</h4>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</section>';
    if (params.text_color){
        document.getElementsByClassName('sub_container')[0].style.color = params.text_color;
    }
    if (params.primary_color){
        document.getElementsByClassName('container')[0].style.background = params.primary_color;
    }
    if (params.span_background){
        document.getElementsByClassName('lazydb_load_error')[0].getElementsByTagName('span')[0].style.background = params.span_background;
    }
    if (params.span_color){
        document.getElementsByClassName('lazydb_load_error')[0].getElementsByTagName('span')[0].style.color = params.span_color;
    }
    if (params.header_color){
        document.getElementsByClassName('header')[0].style.background = params.header_color;
        document.getElementsByClassName('arrow-down')[0].style.borderTop = "30px solid " + params.header_color;
    }
    if (params.content_color){
        document.getElementsByClassName('sub_container')[0].style.background = params.content_color;
    }
    if (params.animate_loader){
        document.getElementsByClassName('lazydb_red')[0].getElementsByTagName('div')[0].style.border = "5px solid " + params.animate_loader;
        document.getElementsByClassName('lazydb_red')[0].getElementsByTagName('div')[1].style.border = "5px solid " + params.animate_loader;
    }

    setTimeout(function (){
        document.location.reload();
    },ServerLostAutoRetryTime);
    let cpt = 10;
    setInterval(function (){
        cpt -= 1;
        document.getElementById('lazydb_load_error_sub_title').getElementsByTagName('span')[0].innerHTML=cpt
    },ServerLostAutoRetryTime / 10);
}