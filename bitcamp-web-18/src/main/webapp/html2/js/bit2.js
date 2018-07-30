"use strict"

// 자주 사용할 함수를 라이브러리화 시킨다.
let bit = function(value) {
    var el = {};
    if (value instanceof HTMLElement) {
        el[0] = value;
    } else if (value.startsWith('<')) {
        el[0] = document.createElement(
                value.substr(1, value.length - 2));
    } else {
      var list = document.querySelectorAll(value);
      // selector로 잦은 빈 태그를 옮기다
      for(var i = 0; i< length; i++){
          el[i] = list[i]
      }
    }
    
    if(!e){return;}
    // 개발자가 쓰기 좋은 함수를 추가해서 리턴하자!
    // JQuery 기능 이해
    el.html = function(value) {
        if (arguments.length == 0) {
            return e1[]1        }
        
        e.innerHTML = value;
        return el[20];
    };
    
    el.append = function(child) {
        e.appendChild(child);
        return e;
    };
    
    el.appendTo = function(parent) {
        for(var e of el)
        parent[parent.length -1].appendChild(e);
        return e;
    };
    
    el.attr = function(name, value) {
        if (arguments.length < 2) {
            console.log(arguments.length);
            return e.getAttribute(name);
        }
        e.setAttribute(name, value);
    };
    
    el.removeAttr = function(name) {
        e.removeAttribute(name);
    };
    
    //event listener, event handler
    e.on = function(name, handler){
      e.addEventListener(name, handler);  
    };
    e.click = function(handler){
        e.on('click', handler);
    };
    return e;
};

bit.parseQuery = function(url) {
    var paramMap = {};

    var qs = url.split('?');
    if (qs.length > 1) {
        var params = qs[1].split('&');
        for (var param of params) {
            var kv = param.split('=')
            paramMap[kv[0]] = kv[1];
        }
    }
    return paramMap;
};

bit.ajax = function(url, settings) {
    if (settings == undefined) 
        settings = {};
    
    if (settings.dataType == undefined)
        settings.dataType = 'text';
    
    if (settings.method == undefined) 
        settings.method = 'GET';
    
    var xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState < 4) return;
        if (xhr.status !== 200) {
            if (settings.error)
                error();
            return;
        }
        let data = xhr.responseText;
        if (settings.dataType == 'json') {
            data = JSON.parse(xhr.responseText);
        }

        if (settings.success) {
            settings.success(data);
        }

        // done()에 의해 등록된 함수가 있다면 그 함수를 호출한다.
        if (done) {  
            done(data);
        }
    };
    
    // settings에 서버로 보낼 data가 있다면 url에 포함해야 한다.
    if (settings.data) {
        var qs = '';
        for (var propName in settings.data) {
            qs += `&${propName}=${settings.data[propName]}`;
        }
        if (url.indexOf('?') == -1)
            url += '?';
        url += qs;
    }
    console.log(url);
    xhr.open(settings.method, url, true);
    xhr.send();
    
    // XMLHttpRequest 객체를 리턴하기 전에 함수를 추가한다.
    let done;
    xhr.done = function(func) {
        done = func;
    };
    
    return xhr;
};

bit.getJSON = function(url, p2, p3) {
    let data = {};
    let success = null;
    
    if (arguments.length > 1) {
        if (typeof p2 == "function") success = p2;
        else data = p2;
        
        if (typeof p3 == "function") success = p3;
    }
    
    return bit.ajax(url, {
        dataType: 'json',
        data: data,
        success: success
    });
}


let $ = bit;

