import {DURATION} from "../constants";
import {SetVotingDuration} from "../actions";

export default ({init, on, update}) => {

    init({
        poll: null,
        duration: DURATION.MIN_15
    });

    on(SetVotingDuration, (state, duration) => {
        update({ duration });
    });

}