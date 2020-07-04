
//Note creating a local instance of a component
let FamilyTreeComponent =  {
    template: '#family-tree-template',
    props: {
        memberName: {
            type: String,
        },
        memberAge: {
            type: Number
        },
        gender: {
            type: String,
        },
        selectedMember:{
            type: String,
        }
    },
    computed: {
        isSelected: function () {
           return this.memberName === this.selectedMember;
        }
    },
    data: () => {
        return {
            name: '',
            age: 0,
        }
    },
    methods:{
        selectFamilyMember: function () {
            this.$emit('selected', this.name);
            //this.selectedMember = this.memberName;
        }
    },
    mounted(){

        /*
            Note: - can use these as setters and getters
            -- set the data and push the data and set the data in the component.
            
        */
        this.name = this.memberName;
        this.age = `${this.memberAge} years old`;
        
    }
    
};

 let FamilyTreeParentComponent = {
    template: '#family-tree-parent-template',
    //Note: data will be encapulated to this component, so it can be passed down to the child component
    components: {
        "family-tree": FamilyTreeComponent,
    },
    data() {
        return {
            family: [
                {
                    name: 'James',
                    age: 33,
                    gender: 'Male'
                },
                {
                    name: 'Rebecca',
                    age: 29,
                    gender: 'Female',
                },
                {
                    name: 'Laura',
                    age: 34,
                    gender: 'Female',
                },
                {
                    name: 'Jonathan',
                    age: 30,
                    gender: 'Male',
                },
                {
                    name: 'Nathan',
                    age: 19,
                    gender: 'Male',
                },
            ],
            selectedFamilyMember: null
        }
    },
    methods: {
        selectedMember: function(member) {
            this.selectedFamilyMember = member;
        }
    }
 };


new Vue({
    el: '#app',
    components: {
        'family-tree-parent': FamilyTreeParentComponent,
    },
    methods: {
        
    },
    mounted() {
        
        document.title = 'Family Tree';        
    },
});