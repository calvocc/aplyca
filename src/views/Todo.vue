<template>
	<div class="about mt-20 mb-20">
		<div class="cabeza-lista">
			<h1>{{ user.nombre }} <small>{{ user.email }}</small></h1>
			<button class="btn-primary" @click="home">Volver</button>
		</div>
		<ul>
			<li v-for="(item, index) of dataTodo" :key="item.id" :class="{ complete: item.completed}" @click="select(index)">
				<font-awesome-icon icon="check-circle" v-if="item.completed"/>
				<font-awesome-icon icon="check-circle" v-if="!item.completed"/>
				<span>
					{{item.title}}
				</span>
			</li>
		</ul>
	</div>
</template>

<script>
    import axios from 'axios'
	import {mapMutations, mapState} from 'vuex'
	
	export default {
		name: 'Todo',
		data() {
			return {
				dataTodo: []
			}
		},
		computed: {
			...mapState(['user'])
		},
		methods: {
            ...mapMutations(['seeLoading', 'hideLoading']),
			home(){
				this.$router.push('/')
			},
			select(index){
				this.dataTodo[index].completed = !this.dataTodo[index].completed
			},
            async getuser(UserId){
                try {
                    this.seeLoading({titulo: 'Cargando usuarios'})
                    let datos = await axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${UserId}`)
					this.dataTodo = datos.data;
                } catch (error) {
                    console.log(error)
                } finally {
                    this.hideLoading()
                }
            } 
        },
        created(){
            this.getuser(this.$route.params.id)
        }
	}
</script>

<style scoped lang="stylus">
	.about{
		background-color #ffffff
		padding 20px
		.cabeza-lista{
			display flex
			flex-direction row
			justify-content space-between
			align-items center
			h1{
				font-size 1.2rem
				font-weight 700
				color #20253A
				small{
					font-size 0.8rem
					display block
					font-weight 400
					color #9B9EAC
				}
			}
		}
		ul{
			list-style none
			margin 0px
			padding 0px
			li{
				border 1px solid #9B9EAC
				margin-bottom 10px
				padding 10px 20px 10px 40px
				position relative
				font-size 0.8rem
				color #000000
				text-transform capitalize
				cursor pointer
				svg{
					position absolute
					left 15px
					top 50%
					margin-top -10px
					font-size 1.2rem
					border 1px solid #9B9EAC
					color #ffffff
					border-radius 50%
					width 20px
					height 20px
				}
				&.complete{
					cursor default
					text-decoration line-through
					color #9B9EAC
					svg{
						border none
						color #0054fe
					}
				}
			}
		}
	}
</style>