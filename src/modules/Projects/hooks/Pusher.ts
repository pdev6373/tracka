import axios from 'axios';
import Pusher from 'pusher-js/react-native';
const API_KEY = "1d4eb20c505b49e623d0" 

    export const pusher = new Pusher('1d4eb20c505b49e623d0', {
        cluster: 'eu'
      }); 
      

      const sendPushNotification = async(userId: string | undefined
        , projects: any, routes:any) => {
      try {
       const res =  await axios.post(`https://app.nativenotify.com/api/indie/notification`, {
             subID: `${userId}`,
             appId: 2476,
             appToken: 'VH2qcQVX7fvRzbG2bysb63',
             title: `${projects.title}`,
             message: `${projects.content}`,
             pushData: {"screenName": `${routes.notification}`}
             });
             console.log(res)
         } catch(e) {
           console.log(e)
         }
      }


  export const channelConfig = async (projectId: string, userId: string | undefined, routes: any) => {
    try {
      const channel = pusher.subscribe(`project-${projectId}`);

    channel.bind('projectReport', function(data) {
        const value = JSON.stringify(data);
        const projects = JSON.parse(value)
        console.log(projects)
        sendPushNotification(userId, projects, routes)
          
      }); 
    } catch(e) {
      console.log(e)
    }
  }

 

  // export default pusher