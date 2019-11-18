<template>
  <q-page padding>
    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">
    <div class="collumn" v-for="i in 50" :key="i">test {{i}}</div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>
