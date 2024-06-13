<template>
	<div>
		<div class="summary-records">
			<div class="summary-item">
				<p class="summary-income">총수입 {{ dashboard.total_income.toLocaleString() }} 원</p>
				<p class="summary-expense">총지출 {{ dashboard.total_expand.toLocaleString() }} 원</p>
			</div>
			<div class="summary-total">총계 {{ dashboard.profit.toLocaleString() }} 원</div>
		</div>
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
const dashboard = ref({
	total_income: 0,
	total_expand: 0,
	profit: 0,
});
const calendar = ref(null);
const dateStore = useDateStore();
const loading = ref(true);
const error = ref(null);
const fetchDashboardData = async () => {
	try {
		const id = sessionStorage.getItem('id');
		const response = await axios.get(`http://localhost:3001/account?id=${id}`);
		const data = response.data;
		const userDashboard = data.find(user => user.id == id);
		if (userDashboard) {
			dashboard.value = userDashboard;
		} else {
			error.value = 'User data not found';
		}
	} catch (err) {
		error.value = err.message;
	} finally {
		loading.value = false;
	}
};
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
		const colorMap = {
			'수입': '#0000FF',
			'지출': '#E47069',
		}
		// 거래 내역 데이터를 FullCalendar 이벤트 형식으로 변환
		const events = transactions.map(transaction => ({
			title: `${transaction.class === '수입' ? '+' : '-'}${parseInt(transaction.amount).toLocaleString()} 원`,
			start: transaction.date,
			extendedProps: {
				category: transaction.category,
				payment: transaction.payment
			},
			backgroundColor: "transparent",
			borderColor: "transparent",
			textColor: colorMap[transaction.class] || '#CCCCCC'
		}));
		// 일별 쓴 내역 추가
		const dailyTransactions = groupTransactionsByDay(transactions);
		Object.keys(dailyTransactions).forEach(date => {
			const totalAmount = dailyTransactions[date].reduce((total, transaction) => {
				return transaction.class === '수입' ? total + parseInt(transaction.amount) : total - parseInt(transaction.amount);
			}, 0);
			events.push({
				title: `지출 : ${totalAmount.toLocaleString()} 원`,
				start: date,
				backgroundColor: "transparent",
				borderColor: "transparent",
				textColor: '#000000'
			});
		});
		calendarOptions.value.events = events;
	} catch (err) {
		error.value = err.message;
	} finally {
		loading.value = false;
	}
};
// 거래 내역을 일자별로 그룹화하는 함수
const groupTransactionsByDay = (transactions) => {
	const groupedTransactions = {};
	transactions.forEach(transaction => {
		const date = transaction.date;
		if (!groupedTransactions[date]) {
			groupedTransactions[date] = [];
		}
		groupedTransactions[date].push(transaction);
	});
	return groupedTransactions;
};
onMounted(async () => {
	await fetchTransactionHistory();
	await fetchDashboardData();
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

<style scoped>
.summary-records {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	font-weight: 700;
	margin: 0 auto;
}
.summary-item {
	display: flex;
	gap: 9px;
	white-space: nowrap;
}
.summary-income {
	color: #6293ce;
	font-family: 'Inter', sans-serif;
}
.summary-expense {
	color: #f66464;
	font-family: 'Inter', sans-serif;
}
.summary-total {
	color: #434343;
	font-family: 'Inter', sans-serif;
}
</style>