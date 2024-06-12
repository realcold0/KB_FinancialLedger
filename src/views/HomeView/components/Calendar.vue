<template>
	<div>
		<FullCalendar :options="calendarOptions" ref="calendar" />
		<div v-if="loading">Loading...</div>
		<div v-else-if="error">{{ error }}</div>
	</div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import koLocale from '@fullcalendar/core/locales/ko';
import { useDateStore } from '@/stores/date';
import axios from 'axios';

const calendar = ref(null);
const dateStore = useDateStore();
const loading = ref(true);
const error = ref(null);
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
	events: []
});

const fetchTransactionHistory = async () => {
	try {
		const id = sessionStorage.getItem('id');
		const response = await axios.get(`http://localhost:3001/transactionDetail?user_id=${id}`);
		const transactions = response.data;
		

		// 거래 내역 데이터를 FullCalendar 이벤트 형식으로 변환
		const events = transactions.map(transaction => ({
			title: `${transaction.memo}`,
			start: transaction.date,
			extendedProps: {
				category: transaction.category,
				payment: transaction.payment
			}
		}));

		calendarOptions.value.events = events;
	} catch (err) {
		error.value = err.message;
	} finally {
		loading.value = false;
	}
};

onMounted(async () => {
	await fetchTransactionHistory();
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

<style scoped></style>