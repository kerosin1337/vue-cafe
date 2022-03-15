<template>
    <div class="d-flex flex-column align-items-center">
        <h1 class="mb-5">Log Out</h1>
        <p>Are you sure?</p>
        <button @click.prevent="logout" class="but">Yes</button>
    </div>
</template>
<script>
import { mapActions, mapMutations } from 'vuex'
export default {
    name: 'log-out',
    methods: {
        ...mapActions({logoutAction: 'authorization/logout/logout'}),
        ...mapMutations({delToken: 'authorization/logout/delToken'}),
        async logout() {
           await this.delToken() 
           this.$router.push('/')
        }
    },
    mounted() {

    }
}
</script>
<style>
    
</style>