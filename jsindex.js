$(document).ready(function () {
  $("#goTop").hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 150) $("#goTop").show("slow");
    else $("#goTop").hide("slow");
  });
  $("#goTop").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1800
    );
  });

  $("#goBottom").show();
  $(window).scroll(function () {
    var t = $("div.poster").prop("offsetTop");
    if ($(this).scrollTop() >= t - 250) $("#goBottom").hide("slow");
    else $("#goBottom").show("slow");
  });
  $("#goBottom").click(function () {
    var r = $("div.copy").prop("offsetTop");
    $("html, body").animate(
      {
        scrollTop: r,
      },
      1800
    );
  });


  $(window).scroll(function () {
    var a = document.getElementById("div1")
    
    if ($(this).scrollTop() >= $(".jewelry").prop("offsetTop"))
    { 
      a.setAttribute("style", "background-color:  #e9e8e8;color:black")
    
    }
    else  a.setAttribute("style", "background-color:black;color:white")
  });
  


  $("#ads").hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 150) $("#ads").show("slow");
    else $("#ads").hide("slow");
  });


  $(".menu-cart").hide();
  $("#cancel").click(function () {
    
    $(".menu-cart").hide();
  });
  $("#cart").click(function () {
    alert("DolceStore đang trong quá trình hoàn thiện! Để lại thông tin để nhận thông báo mới nhất!")
    $(".menu-cart").show();
  });



  $(".submit-btn").click(function(){
    var x=$("#contact-name").val();
    var y=$("#contact-phone").val();
    var a=$("#contact-email").val();
    var b=$("#contact-description").val();
    if(x&&y&&a&&b){
        alert("Gửi thông tin cho Dolce thành công")
    }
    else{   
        alert("Hãy nhập đầy đủ thông tin")
    }
  })

  $("#submit").click(function(){
    var x=$("#mail").val();
    if(x){
        alert("Đăng kí thành công")
    }
    else{   
        alert("Hãy nhập đầy đủ thông tin")
    }
  })



  $("div.menu-tab > ul.tab > li:first-child").addClass("wow animate__slideInLeft");
  $("div.menu-tab > ul.tab > li:last-child").addClass("wow animate__slideInRight");
  $("section.intro-video > video").addClass("wow animate__slideInLeft");
  $("section.intro-video > div.news").addClass("wow animate__slideInRight");
  $("div.bestseller").addClass("wow animate__shakeY");
  $("div.cards").addClass("wow animate__fadeInUp");
  $("div.colec1").addClass("wow animate__fadeInUp");
  $("div.card").addClass("wow animate__fadeInUp");
  $("div.description").addClass("wow animate__backInUp");
  $("div.infor-item").addClass("wow animate__backInLeft");
  $("div.poster").addClass("wow animate__backInRight");

  wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animate__animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();

  



});


   function changeImage(obj){
    var path = obj.src
    var img = document.getElementById("mainImg")
    img.setAttribute("src", path)
  }
  
  function thongbao(){
    alert("DolceStore đang trong quá trình hoàn thiện! Để lại thông tin để nhận thông báo mới nhất!")
  }



