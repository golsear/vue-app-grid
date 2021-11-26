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
        props: ['columns', 'rows']
    }
</script>
