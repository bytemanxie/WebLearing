<template>
    <div>
        <h2>子组件</h2>
        <p>姓名：{{name}}</p>
        <p>年龄：{{age}}</p>
        <p>身高：{{height}}</p>
    </div>
</template>

<script>
    export default {
        props: ['name', 'age', 'height']
    }
</script>

<style scoped>
</style>