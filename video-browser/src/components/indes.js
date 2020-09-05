const vm = new Vue({
    el: '#root',
    template: `
     <div>
         Current count: 0
         <div>
             <button @click="decrement">-</button>
             <button @click="increment">+</button>
         </div>
     </div>
    `,
    data: {
        function() {
            return (count: 0);
        }
     },
   methods: {
       increment() {
           this.count += 1;
       }, 
       decrement() {
         this.count -= 1;
       }
   }
 });