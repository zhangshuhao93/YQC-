    function setCookie(name, value, day, path, isSafe) {
        var str = '';
        str = encodeURIComponent(name) + '=' + encodeURIComponent(value);
//        str = encodeURIComponent(str);
        if (path) {
            str += ';path=' + path;
        }
        if (day) {
            var now = new Date();
            now.setDate(now.getDate() + day);
            str += ';expires=' + now;
        }
        if (isSafe) {
            str += ';secure';
        }
        document.cookie = str;
    }

    function getCookie(name) {
        var str = decodeURIComponent(document.cookie);
        var array = str.split('; ');
        var key_value;
        for (var i = 0; i < array.length; i++) {
            key_value = array[i].split('=');
            if (key_value[0] === name) {
                return key_value[1];
            }
        }
        return '';
    }
    export {
      getCookie
    }


    function removeCookie(name) {
        setCookie(name, '', -1);
    }



// 百度；
    function callback(data) {
//        console.log(data.s);
        $('#souList').empty();
        for (var i = 0; i < data.s.length; i++) {
            createLi(data.s[i]).appendTo('#souList');
        }
    }

    function createLi(wd) {
        $('.jsonp').remove();
        var html = $('#li-tpl').html();
        html = html.replace(/\{\{content\}\}/g, wd);
        return $(html);
    }