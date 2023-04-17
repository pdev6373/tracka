import Pusher from 'pusher-js/react-native';
const API_KEY = "1d4eb20c505b49e623d0"

const pusher = new Pusher(API_KEY, {
    cluster: 'eu'
  }); 

  export default pusher