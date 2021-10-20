<template>
  <div class="sport-list">
    <h1 class="title">Sports</h1>
      <li class="is-size-4" v-for="sport in sports" :key="sport.slug">
        <router-link>
          <h1>{{ sportDetails.name }}</h1>
          Event count: {{ sportDetails.eventCount }}<br>
          {{sportDetails.description}}
        </router-link>
                <img
                  :src="`/images/sports/${sport.sportSlug}.png`"
                  alt="sport.sportname"
                >
      </li>
  </div>
</template>

<script lang="ts">
import { Sport } from '@/store/types'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class SportList extends Vue {
  get Sport (): Sport [] {
    return this.$store.state.sports.sort((a: Sport, b: Sport) => a.name.localeCompare(b.name))
  }
}
</script>
