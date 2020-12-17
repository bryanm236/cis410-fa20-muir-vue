<template>
  <div class="row justify-content-center">
    <div class="col-lg-10">
      <div class="card">
        <div class="card-body">
          <h4>Where to?</h4>
          <form id="ride-form" @submit.prevent="submitRide">
            <div class="form-group">
              <label for="locationToInput">Location To:</label>
              <input
                id="locationToInput"
                name="locationTo"
                required="required"
                class="form-control" v-model="locationTo"
              />
            </div>
            <div class="form-group">
              <label for="locationFromInput">Location From:</label>
              <input
                id="locatioFromInput"
                name="locationFrom"
                required="required"
                class="form-control" v-model="locationFrom"
              />
            </div>
             <div class="form-group">
              <label for="RideTypeInput">Other Details:</label>
              <input
                id="RideTypeInput"
                name="RideType"
                required="required"
                class="form-control" v-model="RideType"
              />
            </div>
            <button type="submit" class="btn btn-primary">Take a Ride!</button>
            <button v-on:click="cancelRide" type="clear" class="btn btn-outline-danger">
              Cancel
            </button>
            
            <p v-if="errorMessage" class="form-text text-danger">{{errorMessage}}</p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            RideType: null,
            locationTo: null,
            locationFrom: null,
            errorMessage: null,
        }
    },
    methods:{
        submitRide(){
            const myRide ={
                DriverFK: this.$route.params.pk,
                LocationTo: this.locationTo,
                LocationFrom: this.locationFrom,
                RideType: this.RideType
                
            };

            // console.log("here is the ride", myRide)
            const token = this.$store.state.token;
            axios.post("/RideT",myRide,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            }).then(()=>{this.$router.replace('/account')})
            .catch(()=>{this.errorMessage = "Unable to get you a ride, please try again later."})
        },
        cancelRide(){
            this.$router.go(-1)
        }
    }
};
</script>

<style scoped></style>
