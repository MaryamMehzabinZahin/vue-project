var data = { a: 1 }
new Vue({
    el: "#app",
    data: {
       src:"https://picsum.photos/200/300",
       alt:"mountain",
       link:"https://www.google.com/"
    },
    methods:{
        greeting()
        {
            return this.title;
        }
    }
});