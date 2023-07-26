<template>
	<div class="m-md-4 mr-auto mt-3 mb-3">
		<div class="container-fluid row mx-auto gap-lg-0 gap-3">
			<h4 class="mb-0 mb-md-3">Dashboard</h4>
			<!-- SESSIONS CHART -->			
			<div class="col-lg-6 col-12 h-100">
				<div class="card px-3 px-md-3 py-4">
					<div class="w-100 d-flex flex-column flex-md-row justify-content-between mb-4">
						<h6 class="mb-2 mb-md-0 text-secondary">Total sessions</h6>
						<div class="d-flex gap-2">
							<b-button @click="onClick('Monthly')" class="btn-purple">Monthly</b-button>
							<b-button @click="onClick('Weekly')" class="btn-purple-outline">Weekly</b-button>
							<b-button @click="onClick('Day')" variant="outline" class="text-purple">Day</b-button>
						</div>
					</div>
					<line-chart :sessionsData="sessionsData" />
					<b-modal v-model="modalVisibility" centered hide-footer hide-header>
						<v-date-picker
							is-expanded
							v-model="selectedDate"
							@dayclick="onDayClick"
							:masks="masks"
							class="border-0"
						/>
					</b-modal>
				</div>
			</div>
			<!-- PRODUCTS -->
			<div class="col-12 col-lg-3">
				<product-card :sortedBy="'Most clicked'" :products="products" />
			</div>
			<div class="col-12 col-lg-3">
				<product-card :sortedBy="'Less clicked'" :products="products.toReversed()" />
			</div>
		</div>
	</div>
</template>

<script>
import LineChart from "@/components/LineChart.vue";
import ProductCard from "@/components/ProductCard.vue";

export default {
	components: {
		LineChart,
		ProductCard,
	},
	data() { // informacion de prueba para la grafica
		return {
			sessionsData: [
				{ date: "2023-01-01", tip: 14 },
				{ date: "2023-01-02", tip: 25 },
				{ date: "2023-01-03", tip: 35 },
				{ date: "2023-01-04", tip: 20 },
				{ date: "2023-01-05", tip: 45 },
				{ date: "2023-01-06", tip: 30 },
				{ date: "2023-01-07", tip: 15 },
				{ date: "2023-01-08", tip: 50 },
				{ date: "2023-01-09", tip: 40 },
				{ date: "2023-01-10", tip: 25 },
				{ date: "2023-01-11", tip: 14 },
				{ date: "2023-01-12", tip: 25 },
			],
			products: [],
			filterType: "",
			selectedDate: null,
			modalVisibility: false,
			masks: {
				input: "YYYY-MM-DD",
			},
		};
	},
	mounted() {
		this.getProducts();
	},
	methods: {
		getProducts() {
			this.$axios
				.get("/order-analitics/get_most_ordered_products?date=2023-07-1")
				.then((result) => {
					this.products = result.data;
				})
				.catch((err) => {
					console.log(err);
				});
		},
		onClick(filter) {
			this.filterType = filter;
			this.modalVisibility = true;
		},
		onDayClick(date) {
			this.modalVisibility = false;

			this.sessionsData = [
				{ date: "2023-01-01", tip: 32 },
				{ date: "2023-01-02", tip: 35 },
				{ date: "2023-01-03", tip: 55 },
				{ date: "2023-01-04", tip: 30 },
				{ date: "2023-01-05", tip: 25 },
				{ date: "2023-01-06", tip: 40 },
			];

			if (this.filterType === "Monthly") {
				console.log(date.id, this.filterType);
			} else if (this.filterType === "Weekly") {
				console.log(date.id, this.filterType);
			} else if (this.filterType === "Day") {
				console.log(date.id, this.filterType);
			}
		},
	},
};
</script>

<style></style>
