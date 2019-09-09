$(function() {

  // 首页点击切换
  $('.box3-bottom-lf ul li').click(function() {
    var idx = $(this).index()
    console.log(idx)
    $(this)
      .addClass('active')
      .siblings()
      .removeClass('active')
    // 对应内容显示
    $('.box-bottom-contaner .box-text')
      .eq(idx)
      .addClass('show')
      .siblings()
      .removeClass('show')
  })

  // 资讯中心
  $('.info-lf').click(function(){
    console.log('上一页');
  })

  $('.info-rt').click(function(){
    console.log('下一页');
  })
})
 // 关于我们表单提交验证
 function check() {
  //根据ID获取值
  var username = $('#usename').val();
  var tel = $('#tel').val();
  var email = $('#email').val();
  var advise = $('#advise').val();
  var re = /^1\d{10}$/;// 电话号验证
 var emailReg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/; //邮箱验证

  if (username == '') {
    alert('姓名不能为空')
    return false
  }
  if (tel == '') {
    alert('电话不能为空')
    return false
  }

  if (!re.test(tel)) {
    alert('请输入正确手机号码！')
    return false
  }

  if (email == '') {
    alert('邮箱不能为空')
    return false
  }

  if (!emailReg.test(email)) {
    alert('请输入正确的邮箱格式！')
    return false
  }

  if (advise == '') {
    alert('建议不能为空')
    return false
  }
  return true
}