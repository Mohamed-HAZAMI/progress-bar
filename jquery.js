
$(function(){
    var wid =$(window).width();
    wid =$(window).width();
    console.log(wid);

if(wid>992)
{
    $(".input").on("click",function(){
        animateProcess($(".items").val());
    });
    function animateProcess(pourcentage)
    {
        $(".inter-box").animate({
           "width":(pourcentage*900)/100
        },3000);
        $({counter:1}).animate({counter:pourcentage},
            {
                      duration:3000,
                      step : function()
                {
                    $(".inter-box").text(Math.ceil(this.counter)+"%");
                }
            })
    }
  }

else if(wid<992){

    $(".input").on("click",function(){
        animateProcess($(".items").val());
    });
    function animateProcess(pourcentage)
    {
        $(".inter-box").animate({
           "width":(pourcentage*300)/100
        },3000);
        $({counter:1}).animate({counter:pourcentage},
            {
                      duration:3000,
                      step : function()
                {
                    $(".inter-box").text(Math.ceil(this.counter)+"%");
                }
            })
    }
}
});
