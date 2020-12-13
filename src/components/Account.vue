<template>
    <div>
        <h1>Account</h1>
        <hr/>
        <h3> {{firstName}}'s Rides </h3>


        <p v-if="accountError" class="form-text text-danger">Cannot get your account information, please try again later.</p>
        <table v-if="ridesByUser" class ="table">
            <thead>
                <th>Location To</th>
                <th>Location From</th>
                
            </thead>

                <tbody>
                    <tr v-for="thisRide in ridesByUser" :key="thisRide.RidePK">
                        <th><router-link :to="`/DriverT/${thisRide.DriverFK}`">{{thisRide.LocationTo}}</router-link></th>
                        <th>{{thisRide.LocationFrom}}</th>
                        
                    </tr>
                </tbody>
            
            

        </table>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
      return{
          ridesByUser: null,
          accountError: false
      }  
    },
    computed: {
        firstName(){
            console.log(this.$store.state)
            return this.$store.state.user.FirstName}
    },
    created(){
        axios.get("/RideT/me", {
            headers: {
                Authorization: `Bearer ${this.$store.state.token}`
            }
        })
        .then((response)=>{
            console.log("here is the rides/me response: ", response)
            this.ridesByUser = response.data})
        .catch(()=>{
            this.accountError = true
        })
    }
}
</script>

<style scoped>

</style>