<template>
  <div class="">
    <AlertModal
      :dialog="alert.visible"
      :errMsg="alert.msg"
      @closeModal="alert.visible = false"
    />

    <div class="d-flex justify-center">
      <v-skeleton-loader
        width="100%"
        class="mx-auto"
        v-if="loading"
        type="card"
      ></v-skeleton-loader>
      <v-col cols="12" sm="6" v-else>
        <div>
          <label for="first-name">First Name</label>

          <v-text-field
            id="first-name"
            dense
            outlined
            v-model="form.firstName"
            class="rounded-sm"
          ></v-text-field>
        </div>

        <div class="">
          <label for="last-name">Last Name</label>

          <v-text-field
            id="last-name"
            dense
            outlined
            v-model="form.lastName"
            class="rounded-sm"
          ></v-text-field>
        </div>

        <div class="">
          <label for="last-name">Gender</label>

          <div class="d-flex justify-space-between align-center">
            <div class="d-flex">
              <v-radio-group v-model="form.gender" row>
                <v-radio class="mr-3" label="Male" value="male"></v-radio>
                <v-radio class="ml-3" label="Female" value="female"></v-radio>
              </v-radio-group>
            </div>

            <div>
              <ConfirmEditModal
                :processing="processing"
                @updateUser="updateUser"
                @createUser="createUser"
              />
            </div>
          </div>
        </div>
      </v-col>
    </div>
  </div>
</template>

<script>
  import UserProvider from '../../../resources/UserProvider'
  import ConfirmEditModal from '../components/ConfirmEditModal.vue'
  import AlertModal from '../components/AlertModal.vue'

  const userService = new UserProvider()
  export default {
    components: {
      ConfirmEditModal,
      AlertModal,
    },
    computed: {
      userId() {
        return this.$route.params.userId || null
      },
      isUpdate() {
        return !!this.userId
      },
    },
    data() {
      return {
        processing: false,
        form: {
          gender: '',
          firstName: '',
          lastName: '',
        },
        alert: {
          visible: false,
          msg: 'บางอย่างผิดพลาดกรุณาลองใหม่',
        },
        loading: false,
      }
    },
    mounted() {
      if (this.isUpdate) {
        this.getUserInfo()
      }
    },
    methods: {
      async getUserInfo() {
        try {
          this.loading = true
          const res = await userService.getUserById(this.userId)
          this.form = {
            firstName: res.firstName || '',
            lastName: res.lastName || '',
            gender: res.gender || '',
          }
        } catch (err) {
          console.error(err)
        } finally {
          this.loading = false
        }
      },
      setAlert(msg) {
        this.alert.visible = true
        this.alert.msg = msg
      },
      formValidate() {
        if (!this.form.firstName) {
          this.setAlert('ชื่อเป็นข้อมูลที่จำเป็น!')
          return false
        }

        if (!this.form.lastName) {
          this.setAlert('ชื่อเป็นข้อมูลที่จำเป็น!')
          return false
        }

        if (!this.form.gender) {
          this.setAlert('เพศเป็นข้อมูลที่จำเป็น!')
          return false
        }

        return true
      },
      async updateUser() {
        try {
          this.processing = true
          const isValidForms = this.formValidate()

          if (!isValidForms) {
            return null
          }
          await userService.updateUser(this.userId, {
            ...this.form,
          })

          this.$router.push('/')
        } catch (err) {
          console.error(err)
        } finally {
          this.processing = false
        }
      },
      async createUser() {
        try {
          this.processing = true

          const isValidForms = this.formValidate()

          if (!isValidForms) {
            return null
          }
          await userService.createUser({
            ...this.form,
          })

          this.$router.push('/')
        } catch (err) {
          console.error(err)
        } finally {
          this.processing = false
        }
      },
    },
  }
</script>

<style lang="scss" scoped></style>