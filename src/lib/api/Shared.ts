import Api from './Api';

const URL = 'https://api.budgit.link/api/v1'

export default new Api(URL);

const newURL = "https://budgit-project.herokuapp.com"

export const newApi = new Api(newURL)
