interface User {
  name: string,
  email: string,
  id: string,
  status: boolean
}

const initialData: {user: User} = {
  user: {
    name: '',
    email: '',
    id: '',
    status: false
  }
}

export const useAuthStore = defineStore('auth', {
  state: () => initialData,
  getters: {
    currentUser: (state) => state.user
  },
  actions: {
    set(user: User){
      this.$patch({user})
    },
    clear(){
      this.$patch(initialData)
    }
  }
})