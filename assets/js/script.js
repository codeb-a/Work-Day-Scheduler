$(document).ready(function () {

	function init() {
		displayTime();
		updateRowColor();
		$('#one .description').val(localStorage.getItem('one'));
		$('#two .description').val(localStorage.getItem('two'));
		$('#three .description').val(localStorage.getItem('three'));
		$('#four .description').val(localStorage.getItem('four'));
		$('#five .description').val(localStorage.getItem('five'));
		$('#six .description').val(localStorage.getItem('six'));
		$('#seven .description').val(localStorage.getItem('seven'));
		$('#eight .description').val(localStorage.getItem('eight'));
		$('#nine .description').val(localStorage.getItem('nine'));
		$('#ten .description').val(localStorage.getItem('ten'));
	}

	function displayCurrentDay() {
        let currentDate = moment().format('MMM DD, YYYY hh:mm:ss');
        currentDayEl.text(currentDate);
    }

	setInterval(displayTime, 1000);

	function showSaved() {
		$("#saved").show().delay(300).fadeOut();
	}

	function saveTask() {
		showSaved();
		let task = $(this).siblings('.description').val();
		let time = $(this).parent().attr('id');
		localStorage.setItem(time, task);
	}

	function updateRowColor() {

		let currentHour = moment().hour();

		$('.time-block').each(function () {
			let hour = $(this).attr('data-time');
			hour = parseInt(hour, 10);
			if (currentHour > hour) {
				$(this).addClass('past');
			};
			if (currentHour === hour) {
				$(this).addClass('present');
			};
			if (currentHour < hour) {
				$(this).addClass('future');
			}
		});

	}

	$('.saveBtn').on('click', saveTask);
	init();
})