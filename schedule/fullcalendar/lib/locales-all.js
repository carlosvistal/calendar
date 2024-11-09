[].push.apply(FullCalendar.globalLocales, function () {
  'use strict';

  var l0 = {
    code: 'en',  // Language code for English
    week: {
        dow: 0, // Sunday is the first day of the week in most English-speaking countries (adjust if needed)
        doy: 4, // The week containing January 4th is considered the first week of the year.
    },
    buttonText: {
        prev: 'Previous',
        next: 'Next',
        today: 'Today',
        year: 'Year',
        month: 'Month',
        week: 'Week',
        day: 'Day',
        list: 'Agenda',  // 'Agenda' remains the same in English
    },
    allDayText: 'All Day',
    moreLinkText: 'More',
    noEventsText: 'There are no events',
};

  var localesAll = [
    l0, 
  ];

  return localesAll;

}());
