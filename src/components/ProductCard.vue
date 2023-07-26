<template>
	<div class="card h-100 p-3 max-h-container">
		<div class="d-flex justify-content-between align-items-center mb-4">
			<h6 class="text-secondary m-0 fs-14">{{sortedBy}}</h6>
			<span class="text-white bg-purple rounded-pill px-3 py-1 fs-14">Last 30 days</span>
		</div>
		<div class="d-flex flex-column justify-content-between h-100">
			<div v-for="(product, key) in products" :key="product.product" class="d-flex gap-3 align-items-center pb-3 b-divider mt-3 mt-lg-0">
				<div>
					<img :src="require('@/assets/noimage.jpg')" alt="Imagen no disponible" />
				</div>
				<div>
					<h6 class="m-0 mb-1 ">#{{ key + 1 }} {{ product.product__name }}</h6>
					<span class="fs-14">{{ product.count }} clicks</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		sortedBy: {
			type: String,
			default: "",
		},
		products: {
			type: Array,
			default: () => [],
		},
	}
};
</script>
