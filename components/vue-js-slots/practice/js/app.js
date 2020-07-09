let HeaderComponent = {
    template: '#header-component-id',
    props: {
        title: {
            type: String,
            default: 'test'
        }
    }
}

let PageLayout = {
    template: '#page-layout',
    components: {
        'header-component': HeaderComponent,
    },
    data() {
        return {
            data: {
                test: 'this is a test',
            }
        };
    }
};





new Vue({
    el: '#app',
    components: {
        'page-layout':PageLayout,
    }
});