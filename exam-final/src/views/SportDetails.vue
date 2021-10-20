<template>
  <div class="page-sport-details">
    <div class="section" v-if="sport">
      <p class="title is-2">{{ sport.name }}</p>
      <p class="title is-5">Event count: {{ sport.eventCount }}</p>
      <p>{{ sport.description }}</p>
    </div>
    <div class="section" v-else>
      <p class="title is-2">Sport not found</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Sport } from '@/store/types'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class SportDetails extends Vue {
  get sport (): Sport | undefined {
    return this.$store.getters.sportsBySlug[this.$route.params.sportSlug]
  }
}

</script>
