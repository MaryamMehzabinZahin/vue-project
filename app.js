
new Vue({
    el: "#app",
    data: {
        formData:{
            firstname:'',
            lastname:''
        }
    },
    methods: {
     handleForm()
     {
         console.log(this.formData);
     }
     }


    
});