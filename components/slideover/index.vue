<template>
  <USlideover v-model="isLocalOpen">
    <UCard
      class="flex flex-col flex-1 overflow-y-auto rounded-none"
      :ui="{
        body: { base: 'flex-1' },
        ring: '',
        divide: 'divide-y divide-border'
      }"
    >
      <template #header>
        <SlideoverTop />
      </template>
      <SlideoverComments />
    </UCard>
  </USlideover>
</template>

<script setup lang="ts">

const state = useCurrentDealStore()

const isLocalOpen = computed({
  get: () => state.isOpen,
  set: (value: boolean) => state.isOpen = value
})

</script>