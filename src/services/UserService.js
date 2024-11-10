import axios from "axios";

const api_url_users = "http://localhost:9696/api/users";

class UserService{

    // getAllUsers(){
    //     return axios.get(api_url_users);
    // }

    getAllUsers(page = 0, size = 5){
        return axios.get(`${api_url_users}?page=${page}&size=${size}` );
    }


    saveUser(user){
        return axios.post(api_url_users,user);
    }

    updateUser(id,user){
        return axios.put(`${api_url_users}/${id}`,user);
    }


    deleteUser(id) {
        return axios.delete(`${api_url_users}/${id}`);
    
    }
    

}





export default new UserService();

