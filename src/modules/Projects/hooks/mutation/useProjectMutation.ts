import { useMutation } from "react-query";
import optimisticUpdate from "../../../../lib/api/helpers/optimisticUpdate";
import { GET_PROJECTS_KEY } from "../../../../constants";
import { interestedProject, reportProject } from "../../service/project";
import pusher from "../Pusher";
import axios from "axios"
import useAuthContext from "../../../Auth/hooks/useAuthContext";


export function useInterestProject(filterParams: any) {
  return useMutation("interest_project", interestedProject, {
    ...optimisticUpdate([GET_PROJECTS_KEY, filterParams], (old: any, newValue) => {
      const updatedRows = old?.rows?.map((p: {id: number, subscriberCount: number}) => {
        if (p.id === newValue.projectId) {
          return { ...p, subscriberCount: Number(p.subscriberCount) + 1 };
        }
        return p;
      }); 

      return { ...old, rows: updatedRows };
    }),
  });
}



export function useReportProject(filterParams: any) {
  const { user } = useAuthContext();
  return useMutation("report_project", reportProject);
  return useMutation("report_project", reportProject, {
    ...optimisticUpdate([GET_PROJECTS_KEY, filterParams], (old: any, newValue) => {
        const projectId = newValue._parts[1][1]
          // const channel = pusher.subscribe(`project-${projectId}`);
          //   channel.bind('projectReport', function(data: any) {
          //     const newData: any = JSON.stringify(data);
          //     console.log(newData)
          //     const PushNotification = async () => {
             
          //       // try {
          //       //   const res = await axios.post(`https://app.nativenotify.com/api/indie/notification`, {
          //       //       subID: `${user?.id}`,
          //       //       appId: 2476,
          //       //       appToken: 'VH2qcQVX7fvRzbG2bysb63',
          //       //       title: 'Project Reported',
          //       //       message: newData?.title
          //       //       });
          //       //       console.log(res)
          //       //   } catch (e) {
          //       //     console.log(e)
          //       //   }
          //     }
          //     PushNotification()

              
                  
          //   }); 
      const updatedRows = old?.rows?.map((p: {id: number, subscriberCount: number}) => {
        if (p.id === newValue.projectId) {
          return { ...p, subscriberCount: Number(p.subscriberCount) + 1 };
        }
        return p;
      });
      return { ...old, rows: updatedRows };
    }),
  });
}

