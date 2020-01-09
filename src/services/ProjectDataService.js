import axios from "axios";

// where the backend is located
const API_URL = "http://localhost:9000";

class ProjectDataService{
    retriveAllProjects(){
        return axios.get(`${API_URL}/api/v1/project`);
    }
}

export default new ProjectDataService();