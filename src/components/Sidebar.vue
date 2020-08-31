<template>
    <div class="sidebar">
        <button class="btn-close" @click="toggleSidebard"><font-awesome-icon icon="times"/></button>
        <div id="nav">
            <div class="sidebar-header">
                <h3>System</h3>
            </div>
            <div class="sidebar-body">
                <ul class="nav">
                    <li class="item">
                        <router-link to="/">
                            <font-awesome-icon icon="user-friends"/> Users
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex'
    export default {
        name: 'Sidebar',
        methods: {
            ...mapMutations(['openSidebard']),
            toggleSidebard(){
                this.openSidebard()
            }
        }
    }
</script>

<style scoped lang="stylus">
    .sidebar{
        width 160px
        padding-left 30px
        padding-right 30px
        .sidebar-header{
            padding-top 40px
            padding-bottom 15px
            h3{
                line-height 1.7rem
                font-size 1.5rem
                margin 0px
            }
        }
        .sidebar-body{
            padding-top 15px
            padding-bottom 15px
            .nav{
                padding 0px
                margin 0px
                list-style none
                .item{
                    a{
                        color #000000
                        font-size 0.9rem
                        text-decoration none
                        display block
                        transition all 0.5s ease 
                        svg{
                            color #3B5CE7
                            margin-right 10px
                        }
                        &:hover{
                            color #3B5CE7
                            transition all 0.5s ease 
                        }
                    }
                }
            }
        }
        .btn-close{
            position absolute
            top 0px
            right 0px
            background-color transparent
            border none
            width 40px
            height 40px
            justify-content center
            align-items center
            display none
            svg{
                font-size 20
                color #9B9EAC
            }
        }
    }
    @media (max-width: 576px) {
        .sidebar{
            .btn-close{
                display block
            }
        }
    }
</style>