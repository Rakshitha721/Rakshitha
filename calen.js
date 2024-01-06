document.addEventListener('DOMContentLoaded', function () {
    const calendar = document.getElementById('calendar');
    const currentMonthElement = document.getElementById('currentMonth');
    const sessionTopicInput = document.getElementById('sessionTopic');
    const sessionDateInput = document.getElementById('sessionDate');
    const prevMonthBtn = document.getElementById('prevMonthBtn');
    const nextMonthBtn = document.getElementById('nextMonthBtn');

    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    renderCalendar(currentMonth, currentYear);

    function renderCalendar(month, year) {
        calendar.innerHTML = '';
        currentMonthElement.textContent = `${getMonthName(month)} ${year}`;

        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        for (let i = 0; i < firstDayOfMonth; i++) {
            const emptyDay = document.createElement('div');
            emptyDay.className = 'calendar-day';
            calendar.appendChild(emptyDay);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const calendarDay = document.createElement('div');
            calendarDay.className = 'calendar-day';
            calendarDay.textContent = day;
            calendarDay.addEventListener('click', () => openModal(day, month, year));
            calendar.appendChild(calendarDay);
        }
    }

    function openModal(day, month, year) {
        const formattedDate = `${year}-${(month + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
        sessionDateInput.value = formattedDate;
        sessionTopicInput.value = '';

        // You can implement your modal or other UI logic here
        alert(`Selected date: ${formattedDate}`);
    }

    function getMonthName(month) {
        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        return monthNames[month];
    }

    function prevMonth() {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderCalendar(currentMonth, currentYear);
    }

    function nextMonth() {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar(currentMonth, currentYear);
    }

    function scheduleSession() {
        const topic = sessionTopicInput.value;
        const date = sessionDateInput.value;

        // Implement logic to send this data to the server or do further processing
        alert(`Scheduled session on ${date} for the topic: ${topic}`);
    }
});
