
$(function(){
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
         <img alt="" src="./images/icon_weixin.png" class="pictureright"/>\
         </div>\
         </div>'
     $("#chatiframe").append(html);
     $("#sendtext").val("")
 })
    $(document).keyup(function(event){
        if(event.keyCode ==13){
            $("#send").trigger("click")
        }
    });
})