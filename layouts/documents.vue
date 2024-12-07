<template>
  <UiLoader v-if="loadingStore.isLoading" />
  <main v-else>
    <LayoutsNavbar />
    <LayoutsSidebar />
    <section class="min-h-screen bg-white dark:bg-black pl-72 pt-[10vh]">
      <div class="p-4">
        <slot />
      </div>
    </section>
  </main>
</template>
<script setup lang="ts">

import { ACCOUNT } from '~/libs/appwrite';


const authStore = useAuthStore()
const loadingStore = useLoadingStore()

onMounted(() => {
  ACCOUNT.get().then(response => 
    authStore.set({
      email: response.email,
      name: response.name,
      id: response.$id,
      status: response.status
    })
  ).finally(() => loadingStore.set(false))
})

</script>