
// 비주얼 슬라이더
const Slider1 = new Swiper(".visual-slide .swiper",{
    loop:true,
    autoplay:{
        delay:4000,
        disableOnInteraction: false        
    },
    navigation:{
        nextEl:".sc-visual .next",
        prevEl:".sc-visual .prev"
    },
    pagination:{
        el:".pagination",
        type: "fraction"
    },
    observer: true,
    observeParents: true,

    on:{ 
        // 인덱스값에 따라 탭 클래스 컨트롤
        slideChange: function(){
            if(Slider1.realIndex <= 3){
                $(`.slide-news-btn`).addClass(`on`);
                $(`.slide-citizen-btn`).removeClass(`on`);
            }else{
                $(`.slide-citizen-btn`).addClass(`on`);
                $(`.slide-news-btn`).removeClass(`on`);
            };
        }
    }
    
});

// 재생, 정지 버튼
const slider1_start = $(`.sc-visual .play`);
const slider1_pause = $(`.sc-visual .pause`);

slider1_start.click(function(){
    Slider1.autoplay.start();
    $(this).css("display","none");
    $(slider1_pause).css("display","block");
});
slider1_pause.click(function(){
    Slider1.autoplay.stop();
    $(this).css("display","none");
    $(slider1_start).css("display","block");
})

// 주요뉴스, 시민참여 탭
const news_btn = $(`.slide-news-btn`);
const citizen_btn = $(`.slide-citizen-btn`);

news_btn.click(function(){
    Slider1.slideToLoop(0);
});
citizen_btn.click(function(){
    Slider1.slideToLoop(4);
});

// 비주얼 슬라이더 끝


// 관련 사이트
$(`.related-item .open-btn`).click(function(e){
    e.preventDefault();
    if ($(this).hasClass(`on`)){
        $(`.site-area`).removeClass(`on`);
        $(`.open-btn`).removeClass(`on`);
    }else{
        $(`.open-btn`).removeClass(`on`);
        $(`.site-area`).removeClass(`on`);
        $(this).addClass(`on`);
        $(this).next().addClass(`on`);
    }
});


// 배너 슬라이드
const Slider2 = new Swiper(".banner-group .swiper",{
    loop:true,
    slidesPerView:3,
    spaceBetween: 43,
    autoplay:{
        delay:4000,
        disableOnInteraction: false        
    },
    navigation:{
        nextEl:".banner-group .next",
        prevEl:".banner-group .prev"
    },
    pagination:{
        el:".pagination",
        type: "fraction"
    }
    
});
// 재생, 정지 버튼
const slider2_start = $(`.banner-group .play`);
const slider2_pause = $(`.banner-group .pause`);

slider2_start.click(function(){
    Slider2.autoplay.start();
    $(this).css("display","none");
    $(slider2_pause).css("display","block");
});
slider2_pause.click(function(){
    Slider2.autoplay.stop();
    $(this).css("display","none");
    $(slider2_start).css("display","block");
})

// TOP 버튼

$(window).scroll(function(){
    curr = $(window).scrollTop();
        if(curr == 0){
            $(`.top-btn`).removeClass(`on`);
        }else{
            $(`.top-btn`).addClass(`on`);
        }
})
$(`.top-btn`).click(function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
})