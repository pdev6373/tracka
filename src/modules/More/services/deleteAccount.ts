import Api from "../../../lib/api/Shared";
import endpoints from "../../../lib/endpoints";

const deleteAccount = () => {
    return Api.delete(endpoints.deleteAccount, {}, {});
  };
  
  export default deleteAccount;