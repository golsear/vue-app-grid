import "../scss/index.scss";
import "bootstrap";
import moment from 'moment';
import Vue from 'vue';
import Vuex from 'vuex';
import FilterableVersionsTable from './components/FilterableVersionsTable.vue';
import FiltersBar from './components/FiltersBar.vue';
import VersionsTable from './components/VersionsTable.vue';

Vue.use(Vuex);

Vue.component('filterable-versions-table', FilterableVersionsTable);
Vue.component('filters-bar', FiltersBar);
Vue.component('versions-table', VersionsTable);

Vue.filter('formatDate', function (value) {
    if (value) {
        return moment.unix(Number(value)).locale('uk').format("DD MMM.YYYY HH:mm");
    }
});

// Register globals.
// - TODO: register through the 'webpack.ProvidePlugin'.
window.Vue = Vue;

const store = new Vuex.Store({
    state: {
        filters: []
    },
    mutations: {
        updateFilters (state, filters) {
            state.filters = filters;
        }
    }
});

new Vue({
    store: store
}).$mount('#app');