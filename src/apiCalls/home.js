import axios from 'axios'
import serverAddress from './config';

const utils = {
  getWorkSpaces: (data) => {
		let url = serverAddress + "/api/workSpace/getAllWorkspaces?page=" + (data? data : 0);
		return axios.get(url);
	},
  changeAvailability: (data) => {
    let url = serverAddress + "/api/workSpace/changeAvailability";
		return axios.post(url, data);
  }
}

export default utils;
