<template>
        <router-view :todos="todos"></router-view>
</template>

<script>
    export default {
        name: 'app-hd',
        data() {
            return {
                todos: []
            }
        },
        mounted(){
            this.axios.get('http://hd.maxdata.cc:8185/api/posts').then(response => {
                this.todos = response.data;
            })
        },
        computed: {
            todoCount(){
                return this.todos.length;
            }
        }
    }
</script>


