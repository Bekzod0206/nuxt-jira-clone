<template>
  <div class="h-[10vh] fixed top-0 left-0 right-0 bg-gray-100 dark:bg-gray-900 z-50">
    <div class="container mx-auto flex items-center justify-between h-full">
      <NuxtLink to="/" class="flex items-center space-x-1">
        <NuxtImg src="/logo.svg" width="50" height="50" />
        <span class="text-2xl font-medium">Jira Software</span>
      </NuxtLink>

      <div class="flex items-center space-x-2">
        <SharedColorMode />
        <template v-if="currentUser.status">
          <UButton color="red" class="bold" @click="logout">
            Log out
          </UButton>
          <NuxtLink to="/documents">
            <UButton color="blue" variant="outline">
              Documents
            </UButton>
          </NuxtLink>
          <SharedUserBox />
        </template>
        <template v-else>
          <NuxtLink to="/auth">
            <UButton color="blue">
              Try it free!
            </UButton>
          </NuxtLink>
          <NuxtLink to="/auth">
            <UButton color="blue" variant="soft">
              Sign in
            </UButton>
          </NuxtLink>
          </template>
      </div>

    </div>
  </div>
</template>
<script setup lang="ts">
import { ACCOUNT } from '~/libs/appwrite';

const { currentUser, clear } = useAuthStore()
const router = useRouter()
const loadingStore = useLoadingStore()

const logout = async () => {
  loadingStore.set(true)
  await ACCOUNT.deleteSession('current')
  clear()
  router.push('/auth')
  loadingStore.set(false)
}
</script>