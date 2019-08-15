var now = 1;
var countNum = 0;
//post请求，查询一共有多少页数据
$.post("<%=appPath%>/book/countNum", function (data) {
    countNum = data;
});
//分页点击事件
$('ul li').click(function () {
    var page = 1;
    var who = $(this).index();
    $('#warning').css('display', 'none');
    $('#warning-text').empty();
    if (who == 0) {
        if (now - 1 <= 1) {
            page = 1;
            now = page;
            $('#warning').css('display', 'block');
            $('#warning-text').append("前面没有了！");
        }
        if (now - 1 > 1) {
            page = now - 1;
            now = page;
        }
    }
    if (who > 0 && who < 6) {
        if (who > countNum) {
            page = countNum;
            now = page;
        } else {
            page = who;
            now = who;
        }
    }
    if (who == 6) {
        if (countNum >= now + 1) {
            page = now + 1;
            now = page;
        }
        if (countNum < now + 1) {
            page = now;
            $('#warning').css('display', 'block');
            $('#warning-text').append("后面没有了！");
        }
    }
    //请求分页数据
    $.ajax({
        type: 'POST',
        url: '<%=appPath%>/book/listpage',
        data: {'start': (page - 1) * 10},
        dataType: 'json',
        success: function (data) {
            //回调分页数据
            $('table tbody tr').remove();
            for (var i = 0; i < data.length; i++) {
                $('table tbody').append(
                    '<tr>' +
                    '<td>' + data[i].bookId + '</td>' +
                    '<td>' + data[i].name + '</td>' +
                    '<td>' + data[i].number + '</td>' +
                    '<td><a href="<%=appPath%>/book/detail/' + data[i].bookId + '"'
                    + '>详情</a> | <a href="<%=appPath%>/book/del/' + data[i].bookId + '"' + '>删除</a></td>'
                    +
                    '</tr>'
                );
            }
        },
        error: function (data) {
            alert("失败：" + data);
        }
    });
});