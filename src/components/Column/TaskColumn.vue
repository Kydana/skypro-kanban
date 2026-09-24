<template>
  <div class="main__column">
			<div class="column__title">
				<p>{{ title }}</p>
			</div>
      <div class="cards">
        <slot />
      </div>
	</div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'Без статуса'
  }
});
</script>

<style>
.main__column {
  width: 20%;
  margin: 0 auto;
  display: block;
}
.column__title {
  padding: 0 10px;
  margin: 15px 0;
}
.column__title p {
  color: #94A6BE;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
}
.cards {
  width: 100%;
  display: block;
  position: relative;
}
</style>
