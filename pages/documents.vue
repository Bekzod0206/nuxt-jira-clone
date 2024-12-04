<template>
  <div>
    <h1>Documents</h1>
  </div>
</template>

<script setup lang="ts">
import { ACCOUNT } from '~/libs/appwrite';

definePageMeta({layout: 'documents'})
  useHead({title: 'Documents | Jira software'})

const router = useRouter()
const loadingStore = useLoadingStore()
const authStore = useAuthStore()

onMounted(() => {
  ACCOUNT.get()
    .then((response) => {
      loadingStore.set(false)
      authStore.set({
        email: response.email,
        name: response.name,
        id: response.$id,
        status: response.status
      })
    })
    .catch(() => router.push('/auth'))
})

</script>