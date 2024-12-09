<template>
  <UModal v-model="isLocalOpen">
    <div class="p-4">
      
      <h1 class="text-2xl font-bold">Edit deal</h1>
      <UDivider class="my-2" />

      <UForm :validate="validate" :state="state" class="space-y-4" @submit="onSubmit">
        <UFormGroup label="Name" name="name">
          <UInput v-model="state.name" color="blue" size="lg" />
        </UFormGroup>

        <UFormGroup label="Description" name="description">
          <UTextarea v-model="state.description" color="blue" size="lg" />
        </UFormGroup>

        <UButton type="submit" color="blue" class="w-full" block size="lg" :disabled="isPending">
          <template v-if="isPending">
            <Icon name="svg-spinners:3-dots-fade" class="w-5 h-5"/>
          </template>
          <template v-else>
            Save
          </template>
        </UButton>


      </UForm>

    </div>
  </UModal>
</template>

<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'
import { useMutation } from '@tanstack/vue-query';
import { COLLECTION_DEALS, DB_ID } from '~/constants';
import { DATABASE } from '~/libs/appwrite';

const props = defineProps({
  refetch: {
    type: Function,
    required: true
  }
})

const store = useEditDealStore()

const isLocalOpen = computed({
  get: () => store.isOpen,
  set: (value: boolean) => store.isOpen = value
})

const state = reactive({
  name: store.deal?.name,
  description: store.deal?.description
})


watch(
  () => store.deal,
  (newDeal) => {
    console.log(newDeal, 'store.deal');
    state.name = newDeal?.name || '';
    state.description = newDeal?.description || '';
  },
  { deep: true }
);

const validate = (state: any): FormError[] => {
  const errors = []
  if(!state.name) errors.push({path: 'name', message: 'Name is required'})
  if(!state.description) errors.push({path: 'description', message: 'Description is required'})
  return errors
}

const { isPending, mutate } = useMutation({
  mutationKey: ['edit-deal', store.deal?.$id],
  mutationFn: (data: {id: string; name: string; description: string}) => 
    DATABASE.updateDocument(DB_ID, COLLECTION_DEALS, data.id, {
      name: data.name,
      description: data.description
    }),
  onSuccess: () => {
    props.refetch()
    isLocalOpen.value = false
  }
})

async function onSubmit(event: FormSubmitEvent<any>){
  const { name, description } = event.data
  mutate({ id: store.deal?.$id!, name, description})
}

</script>