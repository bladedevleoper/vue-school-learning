//Plan component
let PlanPickerItemComponent = {
    template: '#plan-template',
    props: {
        name: {
            type: String,
        },
        selectedPlan: {
            type: String,
        }
    },
    computed: {
        isSelected: function() {
            return this.name === this.selectedPlan;
        }
    },
    methods: {
        select () {

            // if (this.isSelected) {
            //    return this.selected = false;
            // }

            
            this.$emit('select', this.name);
            //return this.selected = true;
        }
    }
};

let PlanPickerComponent = {
    template: '#plan-picker-template',
    /* 
        Note:
        -- we can use another property that is an object to set local components
        -- this means that the parent component will have nested components
        -- syntax name-of-component : componentVariable
        -- name-of-component: the name provided to the html element <plan></plan> is the name given to the object key
        -- componentVariable is the object we have created let PlanComponent = {} this will then become the value of the name-of-component key
    */
    components: {
        "plan-picker-item": PlanPickerItemComponent,
    },
    /* 
        Note:
        -- We have had to move the data() into the parent component so that it can access it
        -- and that the nested component receives the nested data
        -- having data within the component it makes teh component independent of its own data
    */
    data () {
        return {
            plans: ['The single', 'The Curious', 'The Addict'],
            selectedPlan: null,
        }
    },
    methods: {
        selectPlan(value) {
            this.selectedPlan = value;
        }
    }
};

//Note: this is the root element
new Vue({
    el: '#app',
    components: {
        "plan-picker": PlanPickerComponent
    }
});