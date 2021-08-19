<template>
  <div class="profile-edit">
    <div>
      <h1>{{ name }}</h1>
      {{ tagline }}
      <ul>
        <img :src="picUrl" width="300" />
      </ul>
    </div>
    <div>
      <input type="text" v-model.number="name" />
      <input type="text" v-model.number="tagline" />
      <input type="text" v-model.number="picUrl" />
    </div>
  </div>
</template>
<style scoped>
.profile-edit {
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
}

input {
  display: block;
  width: 100%;
  margin-top: 1rem;
}
</style>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class ProfileEdit extends Vue {
  name = 'Wichuda Ampin'
  tagline = 'Health; Happiness; Excellence'
  picUrl = 'http://student.nu.ac.th/62346915/photo/134962593.jpg'
}
</script>
