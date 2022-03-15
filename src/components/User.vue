<template>
    <div v-if="show" :class="$style.forModal">
    <div
      class="position-fixed top-50 start-50 translate-middle p-5"
      :class="$style.modal"
    >
      <div class="d-flex align-items-center justify-content-between mb-3">
        <h2>Add an user</h2>
        <i @click="close" class="fa-solid fa-xmark"></i>
      </div>
      <div>
        
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name: 'user-component'
}
</script>
<style>
    
</style>