

  $("p").click(function(){

    $(".alert-box").css("visibility", "visible")
    $("#e_zaku").addClass('animated  flash')
  });

  $(".alert-box").click(function(){

    $(".alert-box").css("visibility", "hidden")
    $("#e_zaku").addClass('animated shake')
    alert("Zeta Gundam Launching!!!");
  });
