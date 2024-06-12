<template>
	<div>
		<FullCalendar :options="calendarOptions" ref="calendar" />
	</div>
</template>

<script setup>
import { ref, watch } from 'vue';
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import koLocale from '@fullcalendar/core/locales/ko';
import { useDateStore } from '@/stores/date'

const calendar = ref(null);
const dateStore = useDateStore();

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

watch(
	() => ({ year: dateStore.year, month: dateStore.month }),
	(newDate) => {
		const { year, month } = newDate;
		calendar.value.getApi().gotoDate(`${year}-${month.toString().padStart(2, '0')}-01`);
	}
);

</script>