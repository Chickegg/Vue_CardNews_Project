<template>
    <div>
        <ul :class="navbar">
            <li v-for="menu in menuData">{{menu}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            menuData: [
                'Home', 'Company', 'MyPage', 'Logout'
            ],
            navbar: 'navbar',
        }
        
    },
    computed: {

    },
    methods: {

    },

}
</script>

<style>
    .navbar {
        background-color: white;
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        border: 2px solid red;
        
    }
</style>