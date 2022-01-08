
new Vue({
    el: "#app",
    data: {
    user:"luna",
    age:16,
    allowed:18
    },
    methods: {
        changeuser()
        {
            return this.user==="luna" ? true:false; 
        }
    }
});