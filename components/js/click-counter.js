/*create a component
Vue.component(componentName, {})
first parameter is the component name
second parameter is the options for the component
*/
Vue.component('click-counter', {
    //template: '<button @click="count++"> {{ count }} </button>',
    template: '#click-counter-template',
    data() {
        return {
            count: 0,
        };
    }
});
new Vue({
    el: '#app'
});
