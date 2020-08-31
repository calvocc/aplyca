import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		sidebard: false,
		user: {
			nombre: '',
			email: '',
			compania: '',
			direccion: '',
		},
		loading: {
			titulo: '',
			estate: false
		}
	},
	mutations: {
		userSelect(state, userstate){
			state.user.nombre = userstate.nombre,
			state.user.email = userstate.email,
			state.user.compania = userstate.compania,
			state.user.direccion = userstate.direccion
		},
		seeLoading(state, payload){
			state.loading.titulo = payload.titulo,
			state.loading.estate = true
		},
		hideLoading(state){
			state.loading.estate = false
		},
		openSidebard(state){
			state.sidebard = !state.sidebard
		}
	},
	actions: {
	},
	modules: {
	}
})
