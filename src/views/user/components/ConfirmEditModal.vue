<template>
<div class="text-center">
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn :loading="processing" color="success" class="black--text text-none" elevation="0" v-bind="attrs" v-on="on">
        Save
      </v-btn>
    </template>

    <v-card class="pa-2">
      <div style="font-size:1.2rem">
        ยืนยันการดำเนินการ
      </div>

      <v-divider class="my-2"></v-divider>

      <div class="text-center mt-5">
        ท่านต้องการดำเนินการที่จะเพิ่ม/แก้ไขหรือไม่
      </div>

      <div class="d-flex justify-end mt-8">
        <v-btn large class="mr-1" color="grey" @click="dialog = false" elevation="0">ยกเลิก</v-btn>
        <v-btn large color="primary" @click="submit" elevation="0" class="black--text">ตกลง</v-btn>
      </div>
    </v-card>
  </v-dialog>
</div>
</template>

<script>
export default {
  props: {
    processing: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isUpdate() {
      return !!this.$route.params.userId
    }
  },
  data() {
    return {
      dialog: false,

    }
  },
  methods: {
    submit() {
      if (this.isUpdate){
        this.$emit('updateUser')
      } else {
        this.$emit('createUser')
      }

      this.dialog = false
    }
  }

}
</script>
