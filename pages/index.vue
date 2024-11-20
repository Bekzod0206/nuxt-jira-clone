<template>
  <!-- HERO SECTION -->
  <section class="flex items-center justify-between h-[100vh] pt-[10vh] gap-4 
    bg-gradient-to-t from-white dark:from-black to-blue-500 dark:to-blue-800"
  >
    <div class="pl-20 flex flex-col space-y-3">
      <h1 class="text-5xl">
        Move fast, stay aligned and build better - together
      </h1>
      <p class="text-lg opacity-80">
        The #1 software development tool used by agile teams
      </p>

      <NuxtLink to="/auth">
        <UButton color="blue">
          Try it free!
        </UButton>
      </NuxtLink>
    </div>
    <NuxtImg src="/hero.webp"/>
  </section>

  <!-- TABS SECTION -->
  <section>
    <h1 class="text-4xl font-medium px-4">
      All from a single source of truth
    </h1>

    <UTabs :items="tabs" class="mt-6 px-4" :ui="{list: {width: 'w-fit'}}">
      <template #item="{item}">
        <div class="flex justify-between items-center gap-6 mt-8">
         <div class="w-[40%]">
          
         </div>
        </div>
      </template>
    </UTabs>
  </section>
  
</template>

<script setup lang="ts">
import { tabs } from '~/constants';

useHead({title: 'Jira software'})
</script>