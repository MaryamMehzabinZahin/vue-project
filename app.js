
new Vue({
    el: "#app",
    data: {
    // user:"luuna",
    // age:16,
    // allowed:18
    cars:['bmw','ford','toyotA']
    },
    methods: {
        changeuser()
        {
            return this.user==="luna" ? true:false; 
        }
    }
});