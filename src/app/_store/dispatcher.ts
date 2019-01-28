import actions from './actions';
import { User } from '../_models/user.model';
import { Video } from '../_models/video.model';
import { Service } from '../_models/service.model';

const {SETMAINUSER, SETUSERS, SETVIDEOS, SETSERVICES} = actions;
// tslint:disable-next-line:prefer-const
let mainUser: User;
// tslint:disable-next-line:prefer-const
let users: User[];
// tslint:disable-next-line:prefer-const
let videos: Video[];
// tslint:disable-next-line:prefer-const
let services: Service[];

function dispatcher(state = {mainUser,
                            users,
                            videos,
                            services}, action) {
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
        case SETSERVICES: {
            return {...state, s: state.services = action.data};
        }
        default: {
            return state;
        }
    }
}
export default dispatcher;
