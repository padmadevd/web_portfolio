jQuery.noConflict();
const {
  utils,
  stagger,
  onScroll,
  createTimeline,
  animate,
  engine,
} = anime;
engine.defaults.composition = 'blend';

function jq($){

    let viewport = $("#viewport");
    let vp_width = parseInt(viewport.css("width"));
    let vp_height = parseInt(viewport.css("height"));

    let f_height;
    let f_width;
    if(vp_width/vp_height >= 1980/1080)
    {
        f_height = vp_height;
        f_width = f_height*1980/1080;
    }
    else
    {
        f_width = vp_width;
        f_height = f_width*1080/1980;
    }
    let f_top = (vp_height-f_height)/2;
    let f_left = (vp_width-f_width)/2;

    let img_height = f_height*50/100;
    let img_width = img_height*1716/1918;
    let img_top = f_top+f_height*25/100;
    let img_left = f_left+f_width*60/100;

    $("#f1_img").css({
        "position":"fixed",
        "top": img_top+"px",
        "left": img_left+"px",
        "width":img_width+"px",
        "height":img_height+"px"
    });

    $("#f1_img_border").css({
        "position":"fixed",
        "top": img_top-15+"px",
        "left": img_left+15+"px",
        "width":img_width+"px",
        "height":img_height+"px"
    });

    $("#f1_title").css({
        "font-size":f_height*12/100+"px",
        "position":"fixed",
        "top":f_top+f_height*5/100+"px",
        "left":f_left+f_width*40/100+"px"
    });

    $("#f1_name").css({
        "font-size":f_height*13/100+"px",
        "position":"fixed",
        "top":f_top+f_height*10/100+"px",
        "left":f_left+f_width*20/100+"px"
    });

    $("#f1_name2").css({
        "font-size":f_height*18/100+"px"
    });

    $("#f1_desc").css({
        "font-size":f_height*4/100+"px",
        "position":"fixed",
        "width":f_width*45/100+"px",
        "top":f_top+f_height*55/100+"px",
        "left":f_left+f_width*15/100+"px"
    });

    $("#f1_cap").css({
        "font-size":f_height*3/100+"px",
        "position":"fixed",
        "width":f_width*45/100+"px",
        "top":f_top+f_height*43/100+"px",
        "left":f_left+f_width*45/100+"px"
    });

    $("#f1_quote").css({
        "font-size":f_height*6/100+"px",
        "position":"fixed",
        "width":f_width*45/100+"px",
        "top":f_top+f_height*75/100+"px",
        "left":f_left+f_width*63/100+"px"
    });

    $("#f2_title").css({
        "font-size":f_height*12/100+"px",
        "position":"fixed",
        "top":f_top+"px",
        "left":f_left+f_width*10/100+"px"
    });

    $("#f2_desc1").css({
        "font-size":f_height*3.5/100+"px",
        "position":"fixed",
        "top":f_top+f_height*25/100+"px",
        "left":f_left+f_width*23/100+"px",
        "width":f_width*50/100+"px"
    });

    $("#f2_desc2").css({
        "font-size":f_height*3.5/100+"px",
        "position":"fixed",
        "top":f_top+f_height*42/100+"px",
        "left":f_left+f_width*10/100+"px",
        "width":f_width*50/100+"px"
    });

    $("#f2_desc3").css({
        "font-size":f_height*3.5/100+"px",
        "position":"fixed",
        "top":f_top+f_height*55/100+"px",
        "left":f_left+f_width*23/100+"px",
        "width":f_width*50/100+"px"
    });

    $("#f2_arrow").css({
        "position":"fixed",
        "top":f_top+f_height*40/100+"px",
        "left":f_left+f_width*90/100+"px",
        "rotate":"60deg",
        "height":f_width*10/100+"px"
    });

    $("#f2_arrow_text").css({
        "font-size":f_height*5/100+"px",
        "position":"fixed",
        "top":f_top+f_height*30/100+"px",
        "left":f_left+f_width*90/100+"px",
    });

    $(".f2_link").css({
        "position":"fixed",
        "left":f_left+f_width*80/100+"px",
        "padding":0+"px"
    });

    $(".f2_link_img").css({
        "height":f_height*10/100+"px",
        "width":f_height*10/100+"px"
    });

    $("#f2_git_link").css({
        "top":f_top+f_height*5/100+"px"
    });
    $("#f2_lin_link").css({
        "top":f_top+f_height*20/100+"px"
    });
    $("#f2_chef_link").css({
        "top":f_top+f_height*35/100+"px"
    });
    $("#f2_leet_link").css({
        "top":f_top+f_height*50/100+"px"
    });
    $("#f2_insta_link").css({
        "top":f_top+f_height*65/100+"px"
    });
    $("#f2_itch_link").css({
        "top":f_top+f_height*80/100+"px"
    });

    $("#f3_title").css({
        "font-size":f_height*12/100+"px",
        "position":"fixed",
        "top":f_top+"px",
        "left":f_left+f_width*13/100+"px"
    });

    $("#f3_name").css({
        "font-size":f_height*6/100+"px",
        "position":"fixed",
        "top":f_top+f_height*25/100+"px",
        "left":f_left+f_width*13/100+"px"
    });

    $("#f3_desc1").css({
        "font-size":f_height*3.5/100+"px",
        "position":"fixed",
        "top":f_top+f_height*35/100+"px",
        "left":f_left+f_width*5/100+"px",
        "width":f_width*50/100+"px"
    });

    $("#f3_desc2").css({
        "font-size":f_height*3.5/100+"px",
        "position":"fixed",
        "top":f_top+f_height*55/100+"px",
        "left":f_left+f_width*20/100+"px",
        "width":f_width*30/100+"px"
    });

    $("#f3_desc3").css({
        "font-size":f_height*3.5/100+"px",
        "position":"fixed",
        "top":f_top+f_height*70/100+"px",
        "left":f_left+f_width*20/100+"px",
        "width":f_width*40/100+"px"
    });

    $("#f3_arrow").css({
        "position":"fixed",
        "top":f_top+f_height*15/100+"px",
        "left":f_left+f_width*50/100+"px",
        "rotate":"30deg",
        "height":f_width*10/100+"px"
    });

    $("#f3_arrow_text").css({
        "font-size":f_height*5/100+"px",
        "position":"fixed",
        "top":f_top+f_height*5/100+"px",
        "left":f_left+f_width*50/100+"px",
    });

    let f3_img1_x_s = vp_width;
    let f3_img1_x_e = f_left+f_width*60/100;

    let f3_img2_y_s = -f_height*25/100-10;
    let f3_img2_y_e = f_top+f_height*10/100;

    let f3_img3_y_s = vp_height;
    let f3_img3_y_e = f_top+f_height*65/100;

    $("#f3_img1").css({
        "font-size":f_height*3.5/100+"px",
        "position":"fixed",
        "top":f_top+f_height*32.5/100+"px",
        "left":f3_img1_x_s+"px",
        "height":f_height*35/100+"px"
    });

    $("#f3_img2").css({
        "font-size":f_height*3.5/100+"px",
        "position":"fixed",
        "top":f3_img2_y_s+"px",
        "left":f_left+f_width*70/100+"px",
        "height":f_height*25/100+"px"
    });

    $("#f3_img3").css({
        "font-size":f_height*3.5/100+"px",
        "position":"fixed",
        "top":f3_img3_y_s+"px",
        "left":f_left+f_width*70/100+"px",
        "height":f_height*25/100+"px"
    });

    $("#menu").css({
        "position":"fixed",
        "top":f_top+f_height*67/100+"px",
        "left":f_left+f_width*2/100+"px",
    });

    $(".menu_i").css({
        "font-size":f_height*4/100+"px",
        "padding":f_height*1/100+"px "+f_height*6/100+"px",
        "margin": 0
    });

    let menu_i = $("#menu_i1");
    let menu_i_width = parseInt(menu_i.css("width"))+parseInt(menu_i.css("padding-left"))+parseInt(menu_i.css("padding-right"))+1;
    let menu_i_height = parseInt(menu_i.css("height"))+parseInt(menu_i.css("padding-top"))+parseInt(menu_i.css("padding-bottom"))+1;
    let menu_i_top = parseInt($("#menu").css("top"))+2;
    let menu_i_left = parseInt($("#menu").css("left"))+2;

    $("#menu_sel").css({
        "position":"fixed",
        "top":menu_i_top+"px",
        "left":menu_i_left+"px",
        "width":menu_i_width+"px",
        "height":menu_i_height+"px"
    });

    $(".f4_img").css({
        "position":"fixed"
    });

    $("#f4_title").css({
        "font-size":f_height*10/100+"px",
        "position":"fixed",
        "top":f_top+"px",
        "left":f_left+f_width*46/100+"px"
    });

    $("#f4_img1").css({
        "height": f_height*30/100+"px",
        "top":f_top+f_height*40/100+"px",
        "left":f_left+f_width*45/100+"px"
    });

    $("#f4_img2").css({
        "height": f_height*20/100+"px",
        "top":f_top+f_height*40/100+"px",
        "left":f_left+f_width*59/100+"px"
    });

    $("#f4_img3").css({
        "height": f_height*25/100+"px",
        "top":f_top+f_height*28/100+"px",
        "left":f_left+f_width*33/100+"px"
    });

    $("#f4_img4").css({
        "height": f_height*25/100+"px",
        "top":f_top+f_height*62/100+"px",
        "left":f_left+f_width*59/100+"px"
    });

    $("#f4_img5").css({
        "height": f_height*20/100+"px",
        "top":f_top+f_height*72/100+"px",
        "left":f_left+f_width*47/100+"px"
    });

    $("#f4_img6").css({
        "height": f_height*20/100+"px",
        "top":f_top+f_height*62/100+"px",
        "left":f_left+f_width*71/100+"px"
    });

    $("#f4_img7").css({
        "height": f_height*20/100+"px",
        "top":f_top+f_height*72/100+"px",
        "left":f_left+f_width*35/100+"px"
    });

    $("#f4_img8").css({
        "height": f_height*20/100+"px",
        "top":f_top+f_height*40/100+"px",
        "left":f_left+f_width*77.5/100+"px"
    });

    $("#f4_img9").css({
        "height": f_height*15/100+"px",
        "top":f_top+f_height*55/100+"px",
        "left":f_left+f_width*31.5/100+"px"
    });

    $("#f4_img10").css({
        "height": f_height*20/100+"px",
        "top":f_top+f_height*72/100+"px",
        "left":f_left+f_width*24.7/100+"px"
    });

    $("#f4_img11").css({
        "height": f_height*20/100+"px",
        "top":f_top+f_height*33/100+"px",
        "left":f_left+f_width*23.2/100+"px"
    });

    $("#f4_img12").css({
        "height": f_height*15/100+"px",
        "top":f_top+f_height*23/100+"px",
        "left":f_left+f_width*45/100+"px"
    });

    $("#f4_img13").css({
        "height": f_height*15/100+"px",
        "top":f_top+f_height*55/100+"px",
        "left":f_left+f_width*16/100+"px"
    });

    $("#f4_img14").css({
        "height": f_height*15/100+"px",
        "top":f_top+f_height*23/100+"px",
        "left":f_left+f_width*58.5/100+"px"
    });

    $("#f4_img15").css({
        "height": f_height*15/100+"px",
        "top":f_top+f_height*72/100+"px",
        "left":f_left+f_width*17/100+"px"
    });

    $("#f4_img16").css({
        "height": f_height*15/100+"px",
        "top":f_top+f_height*62/100+"px",
        "left":f_left+f_width*83/100+"px"
    });

    $("#f4_img17").css({
        "height": f_height*15/100+"px",
        "top":f_top+f_height*38/100+"px",
        "left":f_left+f_width*15.6/100+"px"
    });

    $("#f4_img18").css({
        "height": f_height*10/100+"px",
        "top":f_top+f_height*84/100+"px",
        "left":f_left+f_width*79.5/100+"px"
    });

    $("#f4_img19").css({
        "height": f_height*10/100+"px",
        "top":f_top+f_height*84/100+"px",
        "left":f_left+f_width*71/100+"px"
    });

    $("#f4_img20").css({
        "height": f_height*10/100+"px",
        "top":f_top+f_height*79.5/100+"px",
        "left":f_left+f_width*85/100+"px"
    });

    $("#f4_img21").css({
        "height": f_height*10/100+"px",
        "top":f_top+f_height*72.5/100+"px",
        "left":f_left+f_width*11.5/100+"px"
    });

    $("#f4_img22").css({
        "height": f_height*15/100+"px",
        "top":f_top+f_height*23/100+"px",
        "left":f_left+f_width*74/100+"px"
    });

    $("#f4_img23").css({
        "height": f_height*15/100+"px",
        "top":f_top+f_height*55/100+"px",
        "left":f_left+f_width*8.2/100+"px"
    });

    $("#f4_img24").css({
        "height": f_height*20/100+"px",
        "top":f_top+f_height*33/100+"px",
        "left":f_left+f_width*3.5/100+"px"
    });

    $("#f4_img25").css({
        "height": f_height*10/100+"px",
        "top":f_top+f_height*51/100+"px",
        "left":f_left+f_width*87/100+"px"
    });

    $("#f4_img26").css({
        "height": f_height*15/100+"px",
        "top":f_top+f_height*23/100+"px",
        "left":f_left+f_width*81.5/100+"px"
    });

    $("#f4_img27").css({
        "height": f_height*10/100+"px",
        "top":f_top+f_height*39/100+"px",
        "left":f_left+f_width*87/100+"px"
    });

    $("#f4_img28").css({
        "height": f_height*15/100+"px",
        "top":f_top+f_height*21/100+"px",
        "left":f_left+f_width*15.5/100+"px"
    });

    $("#f4_img29").css({
        "height": f_height*10/100+"px",
        "top":f_top+f_height*21/100+"px",
        "left":f_left+f_width*9/100+"px"
    });

    $("#f4_img30").css({
        "height": f_height*15/100+"px",
        "top":f_top+f_height*11/100+"px",
        "left":f_left+f_width*33/100+"px"
    });

    $("#f4_img31").css({
        "height": f_height*12/100+"px",
        "top":f_top+f_height*19/100+"px",
        "left":f_left+f_width*23.3/100+"px"
    });

    $("#f5_title").css({
        "font-size":f_height*15/100+"px",
        "position":"fixed",
        "top":f_top+f_height*20/100+"px",
        "left":f_left+f_width*15/100+"px"
    });

    animate(['#f1_title', '#f1_desc', '#f1_cap', '#f1_quote', '#f1_name', '#f1_img', '#f1_img_border'], {
        opacity: 0,
        ease: 'linear',
        delay: stagger(200),
        autoplay: onScroll({
            container: 'body',
            target: '#f1_scroll',
            enter: '50% 75%',
            leave: '25% 100%',
            sync: .5
        })
    });

    animate(['#f1_img', '#f1_img_border'], {
        width: 0,
        left: img_left+img_width/2+"px",
        ease: 'linear',
        autoplay: onScroll({
            container: 'body',
            target: '#f1_scroll',
            enter: '50% 75%',
            leave: '25% 100%',
            sync: .5,
            // debug: true
        })
    });

    animate(['#f2_title', '#f2_desc1', '#f2_desc2', '#f2_desc3', ".f2_link", "#f2_arrow", "#f2_arrow_text"], {
        opacity: 1,
        ease: 'linear',
        delay: stagger(200),
        autoplay: onScroll({
            container: 'body',
            target: '#f2_scroll',
            enter: '50% 0%',
            leave: '25% 25%',
            sync: .5,
            // debug: true
        })
    });

    animate(['#f2_title', '#f2_desc1', '#f2_desc2', '#f2_desc3', ".f2_link", "#f2_arrow", "#f2_arrow_text"], {
        opacity: 0,
        ease: 'linear',
        delay: stagger(200),
        autoplay: onScroll({
            container: 'body',
            target: '#f2_scroll',
            enter: '50% 75%',
            leave: '25% 100%',
            sync: .5,
            // debug: true
        })
    });

    animate(['#f3_title', '#f3_name', '#f3_desc1', '#f3_desc2', '#f3_desc3', "#f3_arrow", "#f3_arrow_text"], {
        opacity: 1,
        ease: 'linear',
        delay: stagger(200),
        autoplay: onScroll({
            container: 'body',
            target: '#f3_scroll',
            enter: '50% 0%',
            leave: '25% 25%',
            sync: .5,
            // debug: true
        })
    });

    animate(['#f3_img1'], {
        left: f3_img1_x_e,
        ease: 'linear',
        autoplay: onScroll({
            container: 'body',
            target: '#f3_scroll',
            enter: '50% 0%',
            leave: '25% 25%',
            sync: .5,
            // debug: true
        })
    });

    animate(['#f3_img2'], {
        top: f3_img2_y_e,
        ease: 'linear',
        autoplay: onScroll({
            container: 'body',
            target: '#f3_scroll',
            enter: '50% 0%',
            leave: '25% 25%',
            sync: .5,
            // debug: true
        })
    });

    animate(['#f3_img3'], {
        top: f3_img3_y_e,
        ease: 'linear',
        autoplay: onScroll({
            container: 'body',
            target: '#f3_scroll',
            enter: '50% 0%',
            leave: '25% 25%',
            sync: .5,
            // debug: true
        })
    });

    animate(["#f4_title", ".f4_img"], {
        opacity: 1,
        ease: 'linear',
        delay: stagger(200),
        autoplay: onScroll({
            container: 'body',
            target: '#f4_scroll',
            enter: '50% 0%',
            leave: '25% 25%',
            sync: .5,
            // debug: true
        })
    });

    animate("#f5_title", {
        opacity: 1,
        ease: 'linear',
        autoplay: onScroll({
            container: 'body',
            target: '#f5_scroll',
            enter: '50% 0%',
            leave: '25% 25%',
            sync: .5,
            // debug: true
        })
    });

    animate("#menu_sel", {
        top:menu_i_top+menu_i_height+"px",
        ease: 'linear',
        autoplay: onScroll({
            container: 'body',
            target: '#f2_scroll',
            enter: '50% 0%',
            leave: '25% 25%',
            sync: .5,
            // debug: true
        })
    });

    animate("#menu_sel", {
        top:menu_i_top+menu_i_height*2+"px",
        ease: 'linear',
        autoplay: onScroll({
            container: 'body',
            target: '#f3_scroll',
            enter: '50% 0%',
            leave: '25% 25%',
            sync: .5,
            // debug: true
        })
    });

    animate("#menu_sel", {
        top:menu_i_top+menu_i_height*3+2+"px",
        ease: 'linear',
        autoplay: onScroll({
            container: 'body',
            target: '#f4_scroll',
            enter: '50% 0%',
            leave: '25% 25%',
            sync: .5,
            // debug: true
        })
    });

    animate(['#f3_title', '#f3_name', '#f3_desc1', '#f3_desc2', '#f3_desc3', "#f3_arrow", "#f3_arrow_text"], {
        opacity: 0,
        ease: 'linear',
        delay: stagger(200),
        autoplay: onScroll({
            container: 'body',
            target: '#f3_scroll',
            enter: '50% 75%',
            leave: '25% 100%',
            sync: .5,
            // debug: true
        })
    });

    animate(['#f3_img1'], {
        left: f3_img1_x_s,
        ease: 'linear',
        autoplay: onScroll({
            container: 'body',
            target: '#f3_scroll',
            enter: '50% 75%',
            leave: '25% 100%',
            sync: .5,
            // debug: true
        })
    });

    animate(['#f3_img2'], {
        top: f3_img2_y_s,
        ease: 'linear',
        autoplay: onScroll({
            container: 'body',
            target: '#f3_scroll',
            enter: '50% 75%',
            leave: '25% 100%',
            sync: .5,
            // debug: true
        })
    });

    animate(['#f3_img3'], {
        top: f3_img3_y_s,
        ease: 'linear',
        autoplay: onScroll({
            container: 'body',
            target: '#f3_scroll',
            enter: '50% 75%',
            leave: '25% 100%',
            sync: .5,
            // debug: true
        })
    });

    animate(["#f4_title", ".f4_img"], {
        opacity: 0,
        ease: 'linear',
        delay: stagger(200),
        autoplay: onScroll({
            container: 'body',
            target: '#f4_scroll',
            enter: '50% 75%',
            leave: '25% 100%',
            sync: .5,
            // debug: true
        })
    });

    $("#menu_i1").click(function(){
        window.scrollTo({
            top:0,
            behavior: "smooth"
        });
    });

    $("#menu_i2").click(function(){
        window.scrollTo({
            top:vp_height,
            behavior: "smooth"
        });
    });

    $("#menu_i3").click(function(){
        window.scrollTo({
            top:vp_height*2,
            behavior: "smooth"
        });
    });

    $("#menu_i4").click(function(){
        window.scrollTo({
            top:vp_height*3,
            behavior: "smooth"
        });
    });
}

jQuery(document).ready(jq);
