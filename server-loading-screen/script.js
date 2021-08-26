const DefaultServerLoadingHeader = '<i class="material-icons">construction</i>' +
'                <h1>LazyDB <span>Alpha</span></h1>' +
'                <h5>Next-gen SaaS backend</h5>';

function OpenServerLoadingScreen(promise_loading,title = "Loading in progress", message = "Your content will appear in a few second :)", header = DefaultServerLoadingHeader, params){
    const loading = document.createElement("section");
    loading.innerHTML = '    <div class="container">\n' +
        '        <div class="sub_container">\n' +
        '            <div class="header">\n' + header +
        '            </div>\n' +
        '            <div class="arrow-down"></div>\n' +
        '            <div class="loading">\n' +
        '                <h1>' + title + '</h1>\n' +
        '                <div class="lazydb_load_lds-ripple lazydb_blue"><div></div><div></div></div>\n' +
        '                <h4 id="lazydb_load_sub_title">' + message + '</h4>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n'

    loading.className = "lazydb_load";
    document.body.appendChild(loading);

    if (params.text_color){
        document.getElementsByClassName('sub_container')[0].style.color = params.text_color;
    }
    if (params.primary_color){
        document.getElementsByClassName('container')[0].style.background = params.primary_color;
    }
    if (params.span_background){
        document.getElementsByClassName('lazydb_load')[0].getElementsByTagName('span')[0].style.background = params.span_background;
    }
    if (params.span_color){
        document.getElementsByClassName('lazydb_load')[0].getElementsByTagName('span')[0].style.color = params.span_color;
    }
    if (params.header_color){
        document.getElementsByClassName('header')[0].style.background = params.header_color;
        document.getElementsByClassName('arrow-down')[0].style.borderTop = "30px solid " + params.header_color;
    }
    if (params.content_color){
        document.getElementsByClassName('sub_container')[0].style.background = params.content_color;
    }
    if (params.animate_loader){
        document.getElementsByClassName('lazydb_blue')[0].getElementsByTagName('div')[0].style.border = "5px solid " + params.animate_loader;
        document.getElementsByClassName('lazydb_blue')[0].getElementsByTagName('div')[1].style.border = "5px solid " + params.animate_loader;
    }

    promise_loading.then(next =>{
        document.body.removeChild(loading);
        next();
    });

}