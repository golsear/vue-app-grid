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
                {{ entry[column.key].value }}
              </template>
              <template v-else-if="entry[column.key].type === 'date'">
                {{ entry[column.key].value | formatDate}}
              </template>
              <template v-else-if="entry[column.key].type === 'component'">
                Render component {{ entry[column.key].value }}
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
        props: ['columns', 'rows']
    }
</script>
