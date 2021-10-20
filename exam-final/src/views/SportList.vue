<template>
  <div class="page-sport-list">
    <div class="section">
      <p class="title" is-2>Sports</p>
       <div v-for="sport in sports" :key="sport.slug">
        <router-link :to="{name: 'SportDetails', params: { sportSlug: sport.slug }}">{{sport.name}}
        </router-link>
            <img :src="`/images/sports/${sport.slug}.png`" width="2%" alt="sport.name">
       </div>
      </div>
  </div>
</template>

<script lang="ts">
import { Sport } from '@/store/types'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class SportList extends Vue {
  get sports (): Sport [] {
    return this.$store.state.sports.sort((a: Sport, b: Sport) => a.name.localeCompare(b.name))
  }
}
</script>
