module.exports = function(list, k, v, opts) {
    var i, result = '';
    for(i = 0; i < list.length; ++i)
        if(list[i][k] == v)
            result = result + opts.fn(list[i]);
    return result;
}