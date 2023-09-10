let scheduleMButton = document.querySelector ('#show-schedule-m');
let scheduleButton = document.querySelector ('#show-schedule');

function displayScheduleM () {
  let scheduleInfo = document.querySelector ('#schedule-m')

  if (scheduleInfo.style.display === 'block') {
    scheduleInfo.style.display = 'none';
  } else {
    scheduleInfo.style.display = 'block';
  }
}

function displaySchedule () {
  let scheduleInfo = document.querySelector ('#schedule')

  if (scheduleInfo.style.display === 'block') {
    scheduleInfo.style.display = 'none';
  } else {
    scheduleInfo.style.display = 'block';
  }
}

scheduleMButton.addEventListener('click', displayScheduleM)
scheduleButton.addEventListener('click', displaySchedule)