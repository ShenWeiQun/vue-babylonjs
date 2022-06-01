<template lang="pug">
km-overlay(:position="position", :class="{ sample: true, active }")
  div(@click="handleClick", v-text="text")
</template>

<script>
export default {
  props: ['text', 'position', 'active'],
  methods: {
    handleClick() {
      global.alert('Well done.');
    },
  },
};
</script>
