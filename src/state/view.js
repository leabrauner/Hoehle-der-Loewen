import {VIEWS} from "../constants";
import {ChangeView} from "../actions";

export default ({ init, on, update }) => {

    init({ view: VIEWS.HOME });

    on(ChangeView, (state, view) => {
        state.view = view;
        update(state);
    });

}