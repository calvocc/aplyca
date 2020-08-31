<template>
	<div class="home">
		<button class="btn-primary mt-20 mb-20"><font-awesome-icon icon="plus"/> Add new user</button>
		<Tabla></Tabla>
	</div>
</template>

<script>
import Tabla from '@/components/Tabla.vue'

export default {
	name: 'Home',
	components: {
		Tabla
	}
}
</script>

