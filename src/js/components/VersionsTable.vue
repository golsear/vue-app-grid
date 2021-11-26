<template>
    <div class="versions-table">
        Versions table
      <table>
        <thead>
          <tr>
            <th v-for="column in columns">
                {{ column.name }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="entry in rows">
            <td v-for="column in columns">
              <template v-if="entry[column.key].type === 'status'">
                <span :class="getStatusCssClass(entry[column.key].statusCode)">{{ entry[column.key].value }}</span>
              </template>
              <template v-else-if="entry[column.key].type === 'date'">
                {{ entry[column.key].value | formatDate(entry[column.key].format)}}
              </template>
              <template v-else-if="entry[column.key].type === 'component'">
                <component :is="entry[column.key].value"
                           :text="entry[column.key].text"
                           :click-handle="entry[column.key].clickHandle"></component>
              </template>
              <template v-else>
                {{ entry[column.key].value }}
              </template>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
    export default {
        props: ['columns', 'rows'],
        methods: {
          getStatusCssClass: function (status) {
            let cssClass = '';

            switch (status) {
              case 2:
                cssClass = "text-danger";
                break;
              case 3:
                cssClass = "text-success";
                break;
              default:
                cssClass = '';
            }

            return cssClass;
          }
        }
    }
</script>
