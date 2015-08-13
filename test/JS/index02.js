$(function() {
	var item1 = $('.item1');
	var item2 = $('.item2');
	// var dv = $('.main-container');
	// var interval;

	// dv.on('mouseenter', function(){
	// 	interval = setInterval(rotate, 4000);
	// }).on('mouseleave',function(){
	// 	clearInterval(interval);
	// });

	// function rotate(){
	// 	TweenMax.fromTo(item1, 1, {
	// 		rotationY: -180
	// 	}, {
	// 		rotationY: 0
	// 	});		
	// 	TweenMax.fromTo(item2, 1, {
	// 		rotationY: 0
	// 	}, {
	// 		rotationY: 180
	// 	});

	// 	TweenMax.fromTo(item1, 1, {
	// 		rotationY: 0
	// 	}, {
	// 		rotationY: 180,
	// 		delay: 2
	// 	});		
	// 	TweenMax.fromTo(item2, 1, {
	// 		rotationY: 180
	// 	}, {
	// 		rotationY: 360,
	// 		delay: 2
	// 	});
	// }

	$('.main-container').addClass('main-container_hover');

	var bgImgSrc = [];
	bgImgSrc[0] = 'images/sliderimage1.jpg';
	bgImgSrc[1] = 'images/sliderimage2.jpg';
	bgImgSrc[2] = 'images/sliderimage3.jpg';

	var imgSrcIndex = Math.round(Math.random()*2);

	var bgImg = $('.content');
	bgImg.css('background-image', 'url('+bgImgSrc[imgSrcIndex]+')');

	if(imgSrcIndex == 0){
		console.log(0);
		$('.item1 img').eq(0).toggleClass('active');
		$('.item2 img').eq(0).toggleClass('active');
	}else if(imgSrcIndex == 1){
		console.log(1);
		$('.item1 img').eq(1).toggleClass('active');
		$('.item2 img').eq(1).toggleClass('active');
	}else{
		console.log(2);
		$('.item1 img').eq(2).toggleClass('active');
		$('.item2 img').eq(2).toggleClass('active');
	}

})


