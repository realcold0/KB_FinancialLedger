<template>
	<div>
		<button type="button" @click="prev">이전</button>
		<button type="button" @click="next">다음</button>
		<FullCalendar :options="calendarOptions" ref="calendar" />
	</div>
</template>

<script setup>
import { ref } from 'vue';
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import koLocale from '@fullcalendar/core/locales/ko';

const calendar = ref(null);

const calendarOptions = ref({
	plugins: [dayGridPlugin, interactionPlugin],
	locale: koLocale,
	headerToolbar: {
		left: '',
		center: '',
		right: ''
	},
	initialView: 'dayGridMonth',
	dateClick: handleDateClick,
	events: [
		{ title: 'event 1', date: '2023-04-01' },
		{ title: 'event 2', date: '2023-04-02' }
	]
});

function handleDateClick(arg) {
	alert('date click! ' + arg.dateStr);
}

function prev() {
	calendar.value.getApi().prev();
}

function next() {
	calendar.value.getApi().next();
}
</script>