// import actions from './actions';
// import { GetDataService } from '../_services/getData.service';
// import { HttpClient } from '@angular/common/http';
// import { User } from '../_models/user.model';
// import { Video } from '../_models/video.model';

// const {GETMAINUSER, GETUSERS, GETVIDEOS} = actions;
// // tslint:disable-next-line:prefer-const
// let http: HttpClient;
// const getDataServ: GetDataService = new GetDataService(http);
// // let mainUser: User;
// // let users: User[];
// // let videos: Video[];

// function dispatcher(state = {mainUser,
//                             users,
//                             videos}, action) {
//     switch (action.type) {
//         case GETMAINUSER: {
//             console.log(2);
//             getDataServ.setMainUser();
//             return {...state, mu: state.mainUser = getDataServ.mainUser()};
//         }
//         // tslint:disable-next-line:no-switch-case-fall-through
//         case GETUSERS: {
//             getDataServ.getUsers().subscribe(
//                 (userlist) => {
//                     users = userlist;
//                     return {...state, u: state.users = users};
//                 }
//             );
//         }
//         // tslint:disable-next-line:no-switch-case-fall-through
//         case GETVIDEOS: {
//             getDataServ.getVideos().subscribe(
//                 (videolist) => {
//                     videos = videolist;
//                     return {...state, v: state.videos = videos};
//                 }
//             );
//         }
//         // tslint:disable-next-line:no-switch-case-fall-through
//         default: {
//             return state;
//         }
//     }
// }
// export default dispatcher;
