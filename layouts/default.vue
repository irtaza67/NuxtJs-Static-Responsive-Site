<template>
  <div>
    <app-header></app-header>
    <Nuxt />
      <app-footer></app-footer>
  </div>
</template>
<script>
import header from '~/components/header.vue'
import footer from '~/components/footer.vue'
export default {
  components:{'app-header' : header ,'app-footer' : footer}
}
</script>