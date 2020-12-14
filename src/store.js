import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import routes from './routes.js';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        token: null,
        user: null,
        drivers: []

    },
    mutations:{
        storeTokenInApp(state, myToken){
            state.token = myToken
        },
        storeUserInApp(state, myUser){
            state.user = myUser
        },
        storeDrivers(state, myDrivers){
            state.drivers = myDrivers
        },
        clearAuthData(state){
            state.token = null;
            state.user = null;
        }


    },
    actions:{
        getDrivers({commit}){
            axios.get('/DriverT')
            .then((myResponse)=>{
                console.log("response from getDrivers action", myResponse)
                commit('storeDrivers', myResponse.data)
            })
            .catch(()=>{console.log("error in getDrivers action")})
        },
        logout({commit, state}){
            axios.post('/customers/logout',null,{
                headers:{
                    Authorization: `Bearer ${state.token}`
                }
            });

            commit(`clearAuthData`)

            routes.replace("/");
        }

    }


})