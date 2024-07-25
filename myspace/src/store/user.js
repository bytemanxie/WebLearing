import  {jwtDecode} from 'jwt-decode';
import axiosInstance from '@/services/axios.js'
const ModuleUser = {
    state:{
        id: "",
        username: "",
        photo: "",
        followerCount: 0,
        access: "",
        refresh: "",
        is_login: false,
    },
    getters: {
    },
    mutations: {
        updateUser(state, user){
            state.id = user.id;
            state.username = user.username;
            state.photo = user.photo;
            state.followerCount = user.followerCount;
            state.access = user.access;
            state.refresh = user.refresh;
            state.is_login = true;
        },
        updateAccess(state, access){
            console.log(access)
            state.access = access;
        },
        logout(state){
            state.id = "";
            state.username = "";
            state.photo = "";
            state.followerCount = 0;
            state.access = "";
            state.refresh = "";
            state.is_login = false;
        }
    },
    actions: {
        login:(context, data) => {

            axiosInstance.post("/api/token/",{
                username: data.username,
                password: data.password,
            }).then(resp => {
                const {access, refresh} = resp.data;
                const access_obj = jwtDecode(access);
                console.log(access_obj);
                setInterval(() => {
                    axiosInstance.post('/api/token/refresh/',{
                        refresh,
                    }).then(resp => {
                        console.log(resp);
                        context.commit('updateAccess', resp.data.access); 
                    }).catch(()=>{
                        console.log('error')
                    })

                }, 4.5 * 60 * 1000)

                axiosInstance.get('/myspace/getinfo/',{
                    timeout: 5000,
                    params:{
                        user_id: access_obj.user_id,
                    },
                    headers:{
                        'Authorization': `Bearer ${access}`,
                    },   
                }).then(resp => {
                    console.log(resp)
                    context.commit('updateUser', {
                        ...resp.data,
                        access,
                        refresh,
                        is_login: true,
                    })
                    data.success();
                }).catch(() => {
                    data.error();
                })
            }).catch(() => {
                data.error();
            })
        },

        logout:(context) => {
            console.log('logout');
            context.commit('logout');
        },
    },
    modules: {
    }
}

export default ModuleUser;