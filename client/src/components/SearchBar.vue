<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      searchTerm: ''
    }
  },
  methods: {
    onSearch(event: { target: { value: string } }) {
      this.$emit('search', event.target.value)
    }
  }
})
</script>

<template>
  <div class="mb-3">
    <input type="text" class="form-control" placeholder="Search products..." @input="onSearch" />
  </div>
</template>
