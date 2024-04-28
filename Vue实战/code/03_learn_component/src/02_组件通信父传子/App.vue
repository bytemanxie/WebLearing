<template>
    <div>
        <show-info name="byteman" age="25" height="190"></show-info>
        <show-info name="byteman1" age="25" height="190"></show-info>
    </div>
</template>

<script>
    import ShowInfo from './ShowInfo.vue'
    export default {
        components: {
            ShowInfo
        }
    }
</script>

<style scoped>
</style>
