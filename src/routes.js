import Vue from 'vue';
import VueRouter from 'vue-router'

import Home from './components/Home.vue';
import Account from './components/Account.vue';
import Login from './components/Login.vue';
import DriverDetail from './components/DriverDetail.vue';
import Drivers from './components/Drivers.vue';
import NotFound from './components/NotFound.vue';
import RideCreate from './components/RideCreate.vue';
import SignUp from './components/SignUp.vue';
import store from './store.js';

Vue.use(VueRouter);

const routes = [
    {path: '/', component: Home},
    {path: '/account', component: Account, beforeEnter(to, from, next){
        if(store.state.token)
        {next()}
            else{next(`/signin`)}
    }},
    {path: '/signin', component: Login},
    {path: '/drivers', component: Drivers},
    {path: '/drivers/:pk', component: DriverDetail,
                children: [
                    {path: 'ride', component: RideCreate}
                ]},
    {path: '/signup', component: SignUp},
    {path: '/:invalidroute(.*)', component: NotFound},

]

export default new VueRouter({mode: 'history', routes})