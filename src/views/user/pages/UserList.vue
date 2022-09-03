<template>
<div>
  <section class="d-flex justify-space-between align-center">
    <h2 class="font-weight-regular">Users List</h2>

    <v-btn color="primary" width="120" to="/add" elevation="0" class="text-none black--text">
      Add +
    </v-btn>
  </section>

  <v-skeleton-loader class="mx-auto" v-if="loading" type="table-tbody"></v-skeleton-loader>

  <section class="mt-6" v-else>

    <v-row v-for="(user, i) in userList" :key="i" class="align-center ma-0 mt-4">
      <v-col class="py-0" cols="2" sm="1">
        <div class="text-center circle-num">{{ i + 1 }}</div>
      </v-col>

      <v-col class="py-0">
        <div class="name-text text-capitalize">
          <div>{{ user.firstName }} {{ user.lastName }}</div>
          <div>( {{ user.gender }} )</div>
        </div>
      </v-col>

      <v-col class="pa-0 d-flex justify-end">
        <div class="d-sm-flex ">
          <v-btn  color="grey" elevation="0" :to="`/add/${user.id}`" class="text-none ma-1 rounded-md">Edit</v-btn>

          <ConfirmDeleteModal @deleteUser="deleteUser(user.id)" class="ma-1" />
        </div>
      </v-col>
    </v-row>
  </section>
</div>
</template>

<script>
import UserProvider from '../../../resources/UserProvider'
import ConfirmDeleteModal from '../components/ConfirmDeleteModal.vue'

const userService = new UserProvider()
export default {
  components: {
    ConfirmDeleteModal,
  },
  data() {
    return {
      userList: [],
      loading: true
    }
  },
  mounted() {
    this.getUserList()
  },
  methods: {
    async deleteUser(id) {
      try {
        this.loading = true
        await userService.deleteUser(id)

        this.getUserList()
      } catch (err) {
        console.error(err)
      } finally {
        this.loading = false
      }
    },
    async getUserList() {
      try {
        this.loading = true
        const res = await userService.getUsers({})

        this.userList = res
      } catch (err) {
        console.error(err)
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.circle-num {
  color: white;
  background-color: #2e97ff;
  border: #2e97ff 1px solid;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media only screen and (max-width: 600px) {
  .name-text {
    font-size: 0.9rem;
  }
}
</style>
