<template>
    <ul class="mui-table-view">
        <li class="mui-table-view-cell"
            v-for="todo in todos"
            style="list-style-type:none;">
            <router-link :to="{name:'todo',params:{id:todo.id}}" style="text-decoration:none;" class="">
            <div class="cont">
                <h3>
                        <span style="color: #009296; padding:10px 0;font-weight: 400;">{{todo.title}}</span>
                </h3>
                <div class="info">
                        <span class="author">
                            <span style="color: #009296;font-weight: 200;" class="name">{{todo.author_id}}</span>
                            <span class="gap_point">•</span>
                            <span style="color: #575757;font-weight: 200;">{{todo.updated_at}}</span>
                        </span>
                </div>
                <p style="color: #404040;font-weight: 200;" class="summary">{{todo.content | htmlspecialchars}}</p>
                <div class="tag">
                    <i class="mui-icon mui-icon-flag"></i>
                    <span style="color: #009296;font-weight: 200;" class="collection-tag">青岛新海岸新区</span>
                </div>
            </div>
            </router-link>
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'todos',
        props: ['todos'],
    }
    import Vue from 'vue'
    Vue.filter('htmlspecialchars', function (value) {
        var s = value;
        var dd = s.replace(/<\/?.+?>/g, "");
        var dds = dd.replace(/ /g, "");
        return dds.substr(0, 80) + '...'

    })
</script>
