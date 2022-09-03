<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
             
              color="danger"
              dark
              elevation="0"
              class="text-none  rounded-md"
          v-bind="attrs"
          v-on="on"
        >
          Delete
        </v-btn>
      </template>

      <v-card class="pa-2">
     <div style="font-size:1.2rem">
      ยืนยันการดำเนินการ
     </div>

     <v-divider class="my-2"></v-divider>

      <div class="text-center mt-5">
        ท่านต้องการดำเนินการที่จะลบผู้ใช้งานนี้หรือไม่
      </div>

       

      <div class="d-flex justify-end mt-8">
        <v-btn large class="mr-1" color="grey" @click="dialog = false" elevation="0">ยกเลิก</v-btn>
        <v-btn large  color="primary" @click="deletUser"  elevation="0" class="black--text">ตกลง</v-btn>
      </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dialog: false,
      }
    },
    methods:{
      deletUser(){
        this.$emit('deleteUser')
      }
    }
   
  }
</script>