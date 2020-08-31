<template>
    <div class="tablaresponsibe mb-20">
        <table class="tablas">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Company</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr 
                    v-for="item of usuarios" 
                    :key="item.id"
                >
                    <td>{{item.id}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.email}}</td>
                    <td>{{item.address.city}} {{item.address.street}} {{item.address.suite}}</td>
                    <td>{{item.company.name}}</td>
                    <td>
                        <button @click="verTodo(item)">View todo</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import axios from 'axios'
    import {mapMutations} from 'vuex'

    export default {
        name: 'Lista',
        data() {
            return {
                usuarios: []
            }
        },
        methods: {
            ...mapMutations(['userSelect', 'seeLoading', 'hideLoading']),
            verTodo(item){
                this.userSelect({
                    nombre: item.name,
                    email: item.email,
                    compania: item.company.name+' '+item.address.street+' '+item.address.suite,
                    direccion: item.address.city,
                })
                this.$router.push(`/todo/${item.id}`)
            },
            async getuser(){
                try {
                    this.seeLoading({titulo: 'Cargando usuarios'})
                    let datos = await axios.get('https://jsonplaceholder.typicode.com/users')
                    this.usuarios = datos.data;
                } catch (error) {
                    console.log(error)
                } finally {
                    this.hideLoading()
                }
            } 
        },
        created(){
            this.getuser()
        }
    }
</script>

<style scoped lang="stylus">
    .tablaresponsibe{
        min-width 100%
        background-color #ffffff
        padding 20px
        overflow-x auto
        .tablas{
            width 100%
            border-collapse collapse
            min-width 100%
            thead{
                background-color #ffffff
                width 100%
                tr{
                    th{
                        padding 20px 15px
                        color #9B9EAC
                    }
                }
            }
            tbody{
                width 100%
                tr{
                    background-color #ffffff
                    width 100%
                    &:nth-child(odd){
                        background-color #F5F6FA
                    }
                    td{
                        color: #20253A
                        padding 15px 15px
                        font-size 0.8rem
                        button{
                            background-color transparent
                            border none
                            color #5977FF
                            text-decoration underline
                            width 75px
                        }
                    }
                }
            }
        }
    }
</style>