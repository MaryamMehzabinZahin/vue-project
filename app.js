
new Vue({
    el: "#app",
    data: {
         name:"luuna",
         x:0,
         y:0
    },
    methods: {
     update(){
         setTimeout(()=>{
             this.name="rafff"
         },2000)
     },
     getCoord(event)
     {
         this.x=event.clientX;
         this.y=event.clientY;
     }

    },
    
});