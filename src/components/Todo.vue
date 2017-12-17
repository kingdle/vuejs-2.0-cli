<template>
    <div id="content" class="mui-page">

        <div class="mui-table-view mui-table-view-cell">
            <div v-if="error" class="error" style="text-align: center;color: #575757;font-size: 12px;padding-top: 20px;">
                {{ error }}
            </div>
            <div class="cont" onclick="window.history.go(-1)">
                <div>
                    <h3 style="color: #009296; padding:10px 0;font-weight: 400;" class="mui-navigate-left">
                        <span v-if="todo">{{todo.title}}</span>
                    </h3>
                </div>
                <div class="info">
                    <span v-if="todo" class="gap_point" style="font-size: 14px;">{{todo.updated_at}}</span>
                </div>
                <p class="summary" v-if="todo" v-html="todo.content" style="padding-bottom: 20px;"></p>
                <p style="text-align: center; color: #009296;font-size: 12px;padding-bottom: 20px;">点击屏幕返回上一页</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                todo: null,
                error: null
            }
        },
        created(){
            this.fetchData()
        },
        watch: {
            '$route': 'fetchData'
        },
        methods: {
            fetchData(){
                this.error = this.todo = null
                this.axios.get('http://hd.maxdata.cc:8185/api/post/' + this.$route.params.id).then(response => {
                    this.todo = response.data
                })
            }
        }
    }
</script>

