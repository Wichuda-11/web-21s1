<template>
  <div class="page-sport-create">
    <div class="section">
      <p class="title is-2">Create Sport</p>
      <div class="columns">
        <div class="column">
      <b-field label="Description" label-position="on-border">
        <b-input v-model="description" type="textarea" />
      </b-field>

      <b-field label="Event Count" label-position="on-border">
        <b-input v-model="eventCount" type="number" />
      </b-field>

      <b-field label="Name" label-position="on-border">
        <b-input v-model="name" />
      </b-field>

      <b-field label="Slug" label-position="on-border">
        <b-input  v-model="slug" />
      </b-field>
      </div>
    </div>

      <b-button type="is-primary" size="is-large" expanded @click="save(sport)">Save Sport</b-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Sport } from '@/store/types'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class AthleteCreate extends Vue {
  slug = 'taekwondo'
  name = 'Taekwondo'
  description = 'Originally from Korea, Taekwondo is a martial art that focuses on kicking.'
  eventCount = 8

  async save (): Promise<void> {
    const { slug, name, description, eventCount } = this
    const sport: Sport = { slug, name, description, eventCount }
    this.$store.dispatch('create-sport', sport)
    this.$router.push({ name: 'sportDetails', params: { sportSlug: sport.slug } })
  }
}
</script>
