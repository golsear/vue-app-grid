<template>
    <div class="grid__button">
        <button @click="handleClick()">{{ text }}</button>
    </div>
</template>

<script>
    export default {
        props: ['text', 'clickHandle'],
        methods: {
          handleClick: function () {
            return this[this.clickHandle]();
          },
          continue: function () {
            alert('Продовжити');
          },
          review: function () {
            alert('Переглянути');
          }
        }
    }
</script>
