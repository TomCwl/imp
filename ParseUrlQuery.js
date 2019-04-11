let url = "http://www.baidu.com?key0=0&key1=1&key2=2";


export default function ParseUrlQuery(url){
    let str = url.split("?")[1],
        items = str.split("&"),
        arr,
        key,
        value

    for(let i = 0; i < items.length; i ++){
        arr = items[i].split("=");
        key = arr[0];
        value = arr[1];
        this[key] = value;
    }
}

var obj = new ParseUrlQuery(url);
