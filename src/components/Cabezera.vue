<template>
    <header class="cabezera">
        <div class="cabezera-pantalla">
            <button class="hamburguesa" @click="toggleSidebard">
                <font-awesome-icon icon="bars"/>
            </button>
            <h1>Dashboard</h1>
        </div>
        <div class="cabezera-user">
            <div class="foto">
                <img src="@/assets/avatar.png" alt="Marlene Sasoeur">
            </div>
            <h3>Marlene Sasoeur</h3>
        </div>
    </header>
</template>

<script>
    import {mapMutations} from 'vuex'
    export default {
        name: 'Cabezera',
        methods: {
            ...mapMutations(['openSidebard']),
            toggleSidebard(){
                this.openSidebard()
            }
        }
    }
</script>

<style scoped lang="stylus">
    .cabezera{
        background-color #ffffff
        height 70px
        padding 10px 15px
        display flex
        flex 1
        flex-direction row
        box-shadow: 0px 4px 4px rgba(43, 45, 55, 0.0105441);
        align-items center
        justify-content space-between
        .cabezera-pantalla{
            display flex
            align-items center
            .hamburguesa{
                width 40px
                height 40px
                background-color transparent
                border none
                display flex
                flex-direction column
                justify-content center
                align-items flex-end
                svg{
                    color: #A0A5BA
                }
                span{
                    display block
                    background-color #A0A5BA
                    height 2px
                    width 100%
                    margin-top 2px
                    margin-bottom 2px
                    &:last-child{
                        width 70%
                    }
                }
            }
            h1{
                color #74798C
                font-size 1.1rem
                font-weight 400
                margin 0px 10px
            }
        }
        .cabezera-user{
            display flex
            align-items center 
            .foto{
                background-color #F4E6AD
                width 30px
                height 30px
                border-radius 20px
                overflow hidden
                padding 5px
                img{
                    width 100%
                    height auto
                }
            }
            h3{
                font-weight 400
                font-size 0.8rem
                margin 10px
                color #74798C
            }
        }
    }

// Small devices
@media (max-width: 576px) {
	body{
		.cabezera{
            .cabezera-user{
                h3{
                    display none
                }
            }
		}
	}
}
</style>