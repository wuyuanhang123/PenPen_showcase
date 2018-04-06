
$(function(){
    //建立websocket链接
    var socket = new WebSocket("ws://localhost:8080/chat/12345");
    //监听是否有消息送达
    socket.addEventListener('message',function(event){
         var message=event.data
        var html= '<div class="row">\
            <div class="col-md-12 rightname">\
            <p>啦啦啦</p>\
            </div>\
            </div>\
            <div class="row">\
            <div class="col-md-1 " >\
            <img alt="" src="../assets/images/test.jpg" class="pictureleft"/>\
            </div>\
            <div class="col-md-11 " >\
            <p class="itemleft">'+dsssssssddddddddddddddddddd+'</p>\
            </p>\
            </div>\
            </div>'
        $("#chatiframe").append(html);
    })
    //发送
 $("#send").click(function(){
     var message=$("#sendtext").val()
     var html = '<div class="row">\
         <div class="col-md-12 leftname">\
         <p>啦啦啦</p>\
         </div>\
         </div>\
         <div class="row">\
         <div class="col-md-11 " >\
         <p class="itemright">'+message+'</p>'
         '</div>\
         <div class="col-md-1 " >\
         <img alt="" src="../images/test.jpg" class="pictureright"/>\
         </div>\
         </div>'
     socket.send(message)   //将消息发送至服务器
     $("#chatiframe").append(html);
     $("#sendtext").val("")
 })
    $(document).keyup(function(event){
        if(event.keyCode ==13){
            $("#send").trigger("click")
        }
    });
})