/* 评论数 */
    $(function() {
        // 固定参数
        var short_name = 'unofficial';
        var keys = [];
        var $keys = $('.duoshuo_key');
        $keys.each(function(k, v) {
            keys.push(v.id);
        })
        
        var url = "http://api.duoshuo.com/threads/counts.jsonp?short_name="+ short_name +"&threads=" + keys.join(',');
        $.ajax({
            dataType: "jsonp",
            url: url,
            success: function(data) {
                var res = data.response;
                $keys.each(function(k, v) {
                    $(v).html(res[v.id].comments);
                })
            }
        });
    });