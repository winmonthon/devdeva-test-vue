<template>
<div class="text-center">
  <v-dialog v-model="dialog" width="500">

    <v-card class="pa-2">
      <div style="font-size:1.2rem">
        กรุณาตรวจสอบข้อมูล
      </div>

      <v-divider class="my-2"></v-divider>

      <div class="text-center mt-5">
        {{errMsg}}
      </div>

      <div class="d-flex justify-end mt-8">
       
        <v-btn large color="primary" @click="close" elevation="0" class="black--text ml-1">ตกลง</v-btn>
      </div>
    </v-card>
  </v-dialog>
</div>
</template>

<script>
export default {
  props: {
    errMsg: {
      type: String,
      default: 'บางอย่างผิดพลาด'
    },
    dialog: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {

    }
  },
   methods:{
      close(){
        this.$emit('closeModal')
      }
    }
}
</script>
