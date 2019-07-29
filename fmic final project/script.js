$(document).ready(function() {

  $('.nav-button').click(function() {
    $('.nav-button').toggleClass('change');
  });
  $(window).scroll(function() {

    let position = $(this).scrollTop();
    console.log(position);
    if(position >= 150) {
      $('.uno').addClass('fromLeft');
      $('.dos').addClass('fromBottom');
      $('.tres').addClass('fromRight');
    } else {
      $('.uno').removeClass('fromLeft');
      $('.dos').removeClass('fromBottom');
      $('.tres').removeClass('fromRight');
    }
    if(position<350){
      $('.b0').addClass('active');
      $('.b1').removeClass('active');
      $('.b2').removeClass('active');
      $('.b3').removeClass('active');
      $('.b4').removeClass('active');
      $('.b5').removeClass('active');
    }else if(position >= 350 && position<=1050) {
      $('.b1').addClass('active');
      $('.b0').removeClass('active');
      $('.b2').removeClass('active');
      $('.b3').removeClass('active');
      $('.b4').removeClass('active');
      $('.b5').removeClass('active');
    } else if(position>1050 && position<=2400){
      $('.b2').addClass('active');
      $('.b0').removeClass('active');
      $('.b1').removeClass('active');
      $('.b3').removeClass('active');
      $('.b4').removeClass('active');
      $('.b5').removeClass('active');
    }
    else if(position>2400 && position<=3000){
      $('.b3').addClass('active');
      $('.b0').removeClass('active');
      $('.b1').removeClass('active');
      $('.b2').removeClass('active');
      $('.b4').removeClass('active');
      $('.b5').removeClass('active');
    }else if(position>2900 && position<=3100){
      $('.b4').addClass('active');
      $('.b0').removeClass('active');
      $('.b1').removeClass('active');
      $('.b2').removeClass('active');
      $('.b3').removeClass('active');
      $('.b5').removeClass('active');
    }else if(position>3150){
      $('.b5').addClass('active');
      $('.b0').removeClass('active');
      $('.b1').removeClass('active');
      $('.b2').removeClass('active');
      $('.b3').removeClass('active');
      $('.b4').removeClass('active');
    }
  });
});
let activityCard1Counter = 2;
let activityCard2Counter = 2;
let activityCard3Counter = 2;



function changeBackground()
// body
{

	setInterval(() => {
		document.querySelector('.activity-1 .activity-img').style.opacity = 0;
		document.querySelector('.activity-1 .activity-img').style.background = `url("images/hult-prize/final-event-${activityCard1Counter}.jpg") center center no-repeat /
	cover`;
		setTimeout(() => {
			document.querySelector('.activity-1 .activity-img').style.opacity = 1;
		}, 50);
		if (activityCard1Counter === 7)
			activityCard1Counter = 1;
		else
			activityCard1Counter++;
	}, 2500);

}
setInterval(() => {
	document.querySelector('.activity-2 .activity-img').style.opacity = 0;
	document.querySelector('.activity-2 .activity-img').style.background = `url("images/total/total-${activityCard2Counter}.jpg") center center no-repeat /
			cover`;
	setTimeout(() => {
		document.querySelector('.activity-2 .activity-img').style.opacity = 1;
	}, 60);
	if (activityCard2Counter === 5)
		activityCard2Counter = 1;
	else
		activityCard2Counter++;
}, 2500);
setInterval(() => {
	document.querySelector('.activity-3 .activity-img').style.opacity = 0;
	document.querySelector('.activity-3 .activity-img').style.background = `url("images/sprint/sprint-${activityCard3Counter}.jpg") center center no-repeat /
		cover`;
	setTimeout(() => {
		document.querySelector('.activity-3 .activity-img').style.opacity = 1;
	}, 70);
	if (activityCard3Counter === 5)
		activityCard3Counter = 1;
	else
		activityCard3Counter++;
}, 2500);


changeBackground();
