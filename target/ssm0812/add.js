function list() {
    window.location.href="<%=appPath%>/book/list";
}
$('#warning').css('display', 'none');
var frm = $('#add');
frm.submit(function (ev) {
    $.ajax({
        type: frm.attr('method'),
        url: frm.attr('action'),
        data: frm.serialize(),
        success:function(data) {
            list();
        },
        error:function(data){
            //alert("添加失败");
        }
    });
    ev.preventDefault();
});