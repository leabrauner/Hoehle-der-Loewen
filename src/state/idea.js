import {CreateIdea} from "../actions";
import {http, sse} from "../core/http";
import {TEST_IDEAS} from "../constants";

export default ({init, on, update, join}) => {

    init({idea: null, ideas: TEST_IDEAS});

//    sse('idea/sse',event => {
//        join('ideas', JSON.parse(event.data).source)
//    });

    on(CreateIdea, (state, idea) => {
        // http.post('idea/save', idea).then(response => {
        //    console.log(response);
        //    update({ideas: [...state.ideas, response.data]});
        // });
    });

    // http.get('idea/all').then(response => {
    //    update({ideas: response.data});
    // });

}