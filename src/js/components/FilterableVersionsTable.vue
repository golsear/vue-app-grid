<template>
    <div class="filterable-versions-table">
        Filterable versions table
        <filters-bar :grid-filters="gridData.filters"></filters-bar>
        <versions-table :columns="filteredColumns"
                        :rows="filteredRows"></versions-table>
    </div>
</template>

<script>
    import { defaultData } from '../default-data'

    export default {
      props: [],
        data() {
            return {
              gridData: defaultData[0],
            }
        },
        computed: {
          checkedFilters: function () {
            return this.$store.state.filters;
          },
          filteredColumnsKeys: function () {
            return this.filteredColumns.map(( column ) => column.key );
          },
          filteredColumns: function () {
            let self = this;

            return this.gridData.columns.filter((column) => {
              return ( column.isFiltered && self.checkedFilters.indexOf(column.key) > -1 ) || !column.isFiltered ? true : false;
            });
          },
          filteredRows: function () {
            let self = this;

            return this.gridData.rows.map((row) => {
              return Object.keys(row)
                      .filter(key => self.filteredColumnsKeys.includes(key))
                      .reduce((obj, key) => {
                        obj[key] = row[key];
                        return obj;
                      }, {});
            });
          }
        }
    }
</script>
