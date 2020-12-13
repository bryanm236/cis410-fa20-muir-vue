<template>
    <div>
        <h1>Drivers</h1>
        <hr/>

        <table class="table">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Vehicle</th>
                    <th></th>
            
                </tr>
            </thead>
            <tbody>
                <tr v-for="thisDriver in drivers" :key="thisDriver.DriverPK" >
                    <th>{{thisDriver.FirstName}}</th>
                    <td>{{thisDriver.VehicleType}}</td>
                    <td>

                        <router-link :to="`/drivers/${thisDriver.DriverPK}`">
                        <button type="button" class="btn btn-primary">Driver Info</button>
                        </router-link>
                    </td>

                </tr>



            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    computed:{
        drivers(){return this.$store.state.drivers}
    }
}
</script>

<style scoped>

</style>