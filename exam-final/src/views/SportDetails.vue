<template>
  <div class="sport-details">
    <h1 class="title">Gymnastics</h1>
      <li>
          <h1>{{ sportDetails.name }}</h1>
          Event count: {{ sportDetails.eventCount }}<br>
          {{sportDetails.description}}
      </li>
  </div>
</template>

<script lang="ts">
import { Sport } from '@/store/types'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class SportDetails extends Vue {
  get Sport (): Sport | undefined {
    return this.$store.getters.sportsBySlug[this.$route.params.slug] ?? null
  }
}

</script>
