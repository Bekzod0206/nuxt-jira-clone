<template>
  <UiLoader v-if="loadingStore.isLoading" />
  <template v-else>
    <LayoutsMainNavbar />
    <section class="min-h-screen bg-white dark:bg-black">
      <slot />
    </section>
  </template>
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

console.log(authStore.currentUser)

</script>