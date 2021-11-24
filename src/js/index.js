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
        return moment(String(value)).format('DD.MM.YYYY');
    }
});

// Register globals.
// - TODO: register through the 'webpack.ProvidePlugin'.
window.Vue = Vue;

new Vue().$mount('#app');