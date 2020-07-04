//h is basically short for hyper script
/**
 - in vue 2 the render function use to accept an arguement which was h.
 - not we can use it anywhere as it is globally imported
 */
import { h } from 'vue'

const App = {
    render() {
        /**
         * - this will return a plain div.
         * but this will be a javacript representation of the div.
         * The render method will then take this to convert it to the dom
        */
        return h('div', {
            id: 'hello',
        }, [
            h('span', 'world')
        ]);
    }
}


//this render function will output something like this:
//<div id="hello"><span>world</span></div>