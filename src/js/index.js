import "../scss/index.scss";
import "bootstrap";
import moment from 'moment';
import Vue from 'vue';
import FilterableVersionsTable from './components/FilterableVersionsTable.vue';
import FiltersBar from './components/FiltersBar.vue';
import VersionsTable from './components/VersionsTable.vue';

Vue.component('filterable-versions-table', FilterableVersionsTable);
Vue.component('filters-bar', FiltersBar);
Vue.component('versions-table', VersionsTable);

Vue.filter('formatDate', function (value) {
    if (value) {
        return moment.unix(Number(value)).locale('uk').format("DD MMM.YYYY HH:mm");
        //return moment.unix(1637768407).locale('uk').format("DD MMM.YYYY HH:mm")
    }
});

// Register globals.
// - TODO: register through the 'webpack.ProvidePlugin'.
window.Vue = Vue;

new Vue().$mount('#app');