  $(document).ready(function(){
    $("#knappfram").show();
    $("#knappfram").click(function(){
      $("#imgs").animate({right: "+=33.33%"},1500,function(){});
    });
  });

  $(document).ready(function(){
    $("#knappbak").show();
    $("#knappbak").click(function(){
      $("#imgs").animate({right: "-=33.33%"},1500,function(){});
    });
  });
