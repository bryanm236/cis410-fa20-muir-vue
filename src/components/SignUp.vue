<template>
    <div>
        <h1>Sign Up</h1>
        <form @submit.prevent="onSubmit">
            <div class="form-group">
              <label for="examplenameFirst">First Name</label>
              <input type="nameFirst" class="form-control" id="examplenameFirst1" aria-describedby="nameFirstHelp" required="" name="nameFirst" value="Robert" v-model="FirstName">
            </div>
            <div class="form-group">
              <label for="examplenameLast">Last Name</label>
              <input type="nameLast" class="form-control" id="examplenameLast1" aria-describedby="nameLastHelp" required="" name="nameLast" value="Redford" v-model="LastName">
            </div>
            <div class="form-group">
              <label for="exampleEmail">Email</label>
              <input type="email" class="form-control" id="exampleEmail1" aria-describedby="EmailHelp" required="" name="email" value="rob@mail.com" v-model="Email">
              <small v-if="dupEmail" class="form-text text-danger">Please choose a different email. </small>
            </div>
            
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" required="" value="asdfasdf" v-model="Password">
            </div>

            <button type="submit" class="btn btn-primary">Sign-Up</button>
            <p class="text-danger" id="error-login">{{errorMessage}}</p>
          </form>

    </div>
</template>

<script>

import axios from 'axios';
export default {

    data() {
      return {
        FirstName: '',
        LastName: '',
        Email: '',
        Password: '',
        errorMessage: '',
        dupEmail: false
      }


    },
    methods: {
      onSubmit(){

        const myFormData = {
          FirstName: this.FirstName,
          LastName: this.LastName,
          Email: this.Email,
          Password: this.Password
        }
        // console.log(myFormData)

        axios.post("/CustomerT", myFormData)
          .then((myResponse)=>{
            // console.log(myResponse)
            this.$router.replace("/signin?signupsuccess=true")
            })
            .catch((myError)=>{
              if(myError.response.status === 409){
                this.dupEmail = true
              }else{
                this.errorMessage ="Cannot sign you up, please again later."
              }
            })
      }
    }
}
</script>

<style scoped>

</style>