import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

interface State{
    token:String
}

let state:State = {
    token:"demo"
};

const store = new Vuex.Store({
    strict:true,
    state,
    mutations: {
    },
    actions:{
        
    }



});

export default store;