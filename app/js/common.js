$(function () {
	$('.open-btn').on('click', function () {
		$(this).toggleClass('open').siblings('.faq-item-description').find('.hidden-desc').slideToggle();
	});
	$(".example.stopwatch").TimeCircles({
		"circle_bg_color": '#ffffff',
		"bg_width": 1.1,
		"fg_width": 0.016666666666666666,
		"time": {
			"Days": {
				"show": false
			},
			"Hours": {
				"text": "Hours",
				"color": "#40484F",
				"show": true
			},
			"Minutes": {
				"text": "Minutes",
				"color": "#40484F",
				"show": true
			},
			"Seconds": {
				"text": "Seconds",
				"color": "#40484F",
				"show": true
			}
		}
	});
});
