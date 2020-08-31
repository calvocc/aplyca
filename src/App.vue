<template>
	<div id="app">
		<div class="container-fluid" :class="{ close: sidebard}">
			<div class="row">
				<div class="menu-lateral">
					<Sidebar />
				</div>

				<div class="contenedor">
					<cabezera />
					<router-view/>
				</div>
				
				<loading 
					:active.sync="loading.estate" 
					:can-cancel="false"
					:is-full-page="true"
					color="#0054FE"
					loader="dots"
				></loading>
			</div>
		</div>
	</div>
</template>

<script>
	import Sidebar from '@/components/Sidebar'
	import cabezera from '@/components/Cabezera'
	import Loading from 'vue-loading-overlay';
	import 'vue-loading-overlay/dist/vue-loading.css';
	import {mapState} from 'vuex';

	export default {
		name: 'App',
		computed: {
			...mapState(['loading', 'sidebard'])
		},
        components: {
			Loading,
			Sidebar,
			cabezera
        }
	}
</script>

<style lang="stylus">
	@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap');
	
	body{
		margin: 0;
		font-family: 'Roboto', sans-serif;
		font-size: 1rem;
		font-weight: 400;
		line-height: 1.5;
		color: #212529;
		text-align: left;
		background-color: #fff;
		#app{
			background-color #F5F6FA
		}
		*
		::before
		::after
		{
			box-sizing: border-box;
		}
		:focus{
			outline none 
			border none
		}
		.container-fluid{
			width 100%
			padding-right 15px
			padding-left 220px
			margin-right auto
			margin-left auto
			transition all 0.5s ease
			.row{
				display flex
				flex-direction row
				margin-right -15px
				margin-left -15px
			}
			.contenedor{
				flex 1
				padding-left 30px
				padding-right  30px
				max-width 100%
			}
			.menu-lateral{
				background-color #ffffff
				z-index 1000
				height: 100vh
				width 220px
				position fixed
				overflow hidden
				top 0
				left 0
				box-shadow 4px 0px 4px rgba(43, 45, 55, 0.01);
				transition all 0.5s ease
			}
			&.close{
				padding-left 15px
				transition all 0.5s ease
				.menu-lateral{
					width  0px
					transition all 0.5s ease
				}
			}
		}
		.btn-primary{
			background-color #0054fe
			color #ffffff
			border none
			border-radius 5px
			padding 10px 20px
			margin 10px 0px
			svg{
				margin-right 10px
			}
		}
		.mt-10{
			margin-top 10px
		}
		.mt-20{
			margin-top 20px
		}
		.mb-10{
			margin-bottom 10px
		}
		.mb-20{
			margin-bottom 20px
		}
		.float-right{
			float right
		}
	}

// Small devices
@media (max-width: 576px) {
	body{
		.container-fluid{
			padding-left 15px
			padding-right 15px
			.menu-lateral{
				width 220px
				top 0
				left 0px
				transition all 0.5s ease
				&.close{
					width  0px
					transition all 0.5s ease
				}
			}
			.contenedor{
				padding-left 15px
				padding-right 15px
			}
			&.close{
				padding-left 15px
				transition all 0.5s ease
				.menu-lateral{
					width  0px
					transition all 0.5s ease
				}
			}
		}
	}
}
</style>
