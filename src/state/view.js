import {VIEWS} from "../constants";
import {ChangeView} from "../actions";

export default ({ init, on }) => {

    init({ view: VIEWS.HOME });

    on(ChangeView, (view, state, update) => {
        state.view = view;
        update(state);
    });

}