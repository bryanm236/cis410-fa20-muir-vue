<template>
    <div>
        <div class="card">
            <div class="card-body">
                <h2 class="text-primary">{{driver.FirstName}}</h2>
                <br/>
                <p>Driver ID: <br/><strong>{{driver.DriverPK}}</strong></p>
                <p>Vehicle: <br/><strong>{{driver.VehicleType}}</strong></p>
                <p>As an official driver for our company, {{driver.FirstName}} has underwent extensive training and pledged to uphold our standards, with our topmost priority being you, the customer.</p>
            </div>
        </div>

        <router-link v-if="auth" :to="` /drivers/${this.$route.params.pk}/ride`">
            <button type="button" class="btn btn-success">Take a Ride in {{driver.FirstName}}'s {{driver.VehicleType}}</button>
        </router-link>

        <router-link v-else :to="`/signin`">
            <button type="button" class="btn btn-outline-success">Sign in to Take a Ride in {{driver.FirstName}}'s {{driver.VehicleType}}!</button>
        </router-link>

    </div>
</template>

<script>
export default {
    computed:{
        driver(){
            var drivers = this.$store.state.drivers;
            var thisDriver = drivers.find((aDriver)=> aDriver.DriverPK == this.$route.params.pk)

            // console.log("here is the movie you want", thisDriver);
            return thisDriver
        },
        auth(){return this.$store.state.token}
    }
}
</script>

<style scoped>

</style>