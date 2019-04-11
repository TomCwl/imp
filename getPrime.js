function prime (num){
    var arr = [],
        start = new Date(),
        end;
    outer: for (var i=2;i<num;i++){
        for(var j=2;j*j<=i;j++){
            if (i%j==0){
                continue outer;
            }
        }
        arr.push(i);
    }
    end = new Date();
    console.log(end-start);
    return arr;
}
