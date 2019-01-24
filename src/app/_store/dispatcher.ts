import actions from './actions';
import { User } from '../_models/user.model';
import { Video } from '../_models/video.model';

const {SETMAINUSER, SETUSERS, SETVIDEOS} = actions;
// tslint:disable-next-line:prefer-const
let mainUser: User;
// tslint:disable-next-line:prefer-const
let users: User[];
// tslint:disable-next-line:prefer-const
let videos: Video[];

function dispatcher(state = {mainUser,
                            users,
                            videos}, action) {
    switch (action.type) {
        case SETMAINUSER: {
            return {...state, mu: state.mainUser = action.data};
        }
        case SETUSERS: {
            return {...state, u: state.users = action.data};
        }
        case SETVIDEOS: {
            return {...state, v: state.videos = action.data};
        }
        default: {
            return state;
        }
    }
}
export default dispatcher;
