/**
 * Created by hp on 2017/3/17.
 */
$(function(){
    var a=false;
   $('.header a:eq(0)').click(function(){
       if(a==false){
           $('.kuang').stop(true,false).slideDown();
           a=true;
       }else{
           $('.kuang').stop(true,false).slideUp();
           a=false;
       }
   });
    //����������ѯ
    $('.btn').click(function(){
        var $value=$('.sear').val();
        $('.box').show();
        $('ul').children().remove();
        if($value!==""){
            $.ajax({
                url:"http://wthrcdn.etouch.cn/weather_mini?city="+$value,
                type:'get',
                data:{},
                dataType:'json',
                async:true,
                success:function(data){
                    if(data.status!==1002){
                        $.each(data,function(i,j){
                            $('.titl').html(j.ganmao);
                            $.each(j.yesterday,function(k,l){
                                $('.news ul').append('<li>'+l+'</li>');
                            });
                            $.each(j.forecast,function(a,b){
                                $.each(b,function(n,m){
                                    $('.news ul').append('<li>'+m+'</li>');
                                });
                            })
                        });
                        $('.box h1').hide();
                    }else{
                        $('.box h1').show();
                    }
                }
            })
        }else{
            $('.box h1').show();
        }
    });
// ����ߴ�
    $('.size_box a').click(function(){
        $('.det_size').val($(this).html());
        $('.size_box').stop(true,false).slideUp();
        b=false;
    });
    var b=false;
    $('.size_btn').click(function(){
        if(b==false){
            $('.size_box').stop(true,false).slideDown();
            b=true;
        }else{
            $('.size_box').stop(true,false).slideUp();
            b=false;
        }
    });
    //    �����л��鿴��ƷͼƬ
    $('.det_bigImg img').attr("src",$('._smallImg img:eq(0)').attr('src'));
    $('._smallImg img').click(function(){
        $('.det_bigImg img').attr("src",$(this).attr('src'));
        $('._smallImg img').css({'border':'1px solid #fff'});
        $(this).css({'border':'1px solid #999'});
    });
// ��������
    var i=$('.det_num span').html();
    $('.jia').click(function(){
        i++;
       if($('.det_num span').html()>=222){
           i=222;
           $('.det_num span').html(222)
       }else{
           $('.det_num span').html(i)
       }
    });
    $('.jian').click(function(){
        i--;
        if($('.det_num span').html()<=0){
            i=0;
            $('.det_num span').html(0)
        }else{
            $('.det_num span').html(i)
        }
    });
//�������
    var c=false;
    $('#car-fen').click(function(){
        if(c==false){
            $('.fen').stop(true,false).slideDown();
            c=true;
        }else{
            $('.fen').stop(true,false).slideUp();
            c=false;
        }
    });
    //���빺�ﳵ
    $('.join').click(function(){
        $('.xiangqing').show();
        $('.huoping span').html($('.det_boxone p:eq(1)').html())
        $('.shoujia span').html($('.det_boxtwo p span:eq(0)').html())
        $('.size span').html($('.det_size').val())
        $('.num span').html($('.det_num span:eq(0)').html())
    });
    $('.xiangqing-one a').click(function(){
        $('.xiangqing').hide();
    });
    // ���ﳵ��Ʒ����
    var q=$('.car-num').html();
    $('.car-jia').click(function(){
        q++;
        if($('.car-num').html()>=99){
            q=99;
            $('.car-num').html(99);
        }else{
            $('.car-num').html(q)
        }
    });
    $('.car-jian').click(function(){
        q--;
        if($('.car-num').html()<=0){
            i=0;
            $('.car-num').html(0);
        }else{
            $('.car-num').html(q)
        }
    });
    //�Ƴ���Ʒ
    $('.re-btn').click(function(){
        $(this).parent().parent().remove();
    });
    //ȫѡ
    $('.quan').click(function(){
       $.each($(':checkbox'),function(){
           this.checked=true;
       })
    });
//    �����л�
    var type_set;
    $('.type_goods').hide().eq(0).show();
    $('.type_tab a').eq(0).css({"border-bottom":"4px solid black"});
    $('.type_tab a').mouseover(function(){
        clearTimeout(type_set);
        var l=$(this).index();
        type_set=setTimeout(function(){
            $('.type_goods').hide().eq(l).show();
            $('.type_tab a').eq(l).css({"border-bottom":"4px solid black"}).siblings().css({"border-bottom":"1px solid #999"});
        },500);
    });
});
