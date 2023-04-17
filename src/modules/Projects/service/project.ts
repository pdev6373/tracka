import Api , {newApi} from "../../../lib/api/Shared";
import { ProjectInterface, SubscribeInterface } from "../../../types/Projects";
import endpoints from "../../../lib/endpoints";
import formatQueryParams from "../../../utils/formatQueryParams";
import { cond } from "lodash";
import axios from "axios";

type ResponseType = { rows?: ProjectInterface[]; count: string; page: number; project?:SubscribeInterface };

export function getProjects(params: Record<string, any>) {
  const query = formatQueryParams(params);

  const transformRes = (data: { data: any }): ResponseType => {
    const formattedProjects: ProjectInterface[] = data.data.rows.map(
      (project: any) =>
        ({
          id: String(project.id),
          amount: project.amount,
          title: project.name,
          category: project?.sector?.name,
          state: project?.location?.name,
          lga: project?.area?.name,
          reportCount: project?.reportCount,
          subscriberCount: project?.subscriberCount || 0,
          status: project?.status,
          region: project?.region,
          agency: project?.agency?.name,
          representative: project.representative || {
            name: "(N/A) Reach out to Bugit PTO",
            phoneNumber: "+2349083331633",
            email: "info@yourbudgit.com",
          },
        } as ProjectInterface)
    );

    return { ...data.data, rows: formattedProjects };
  };
  return () =>
    Api.get<{ data: any }, ResponseType>(
      `${endpoints.projects}?${query}`,
      {},
      transformRes
    );
}



export function getNewProjects(params: Record<string, any>) {
  const query = formatQueryParams(params);
  const formatedData = (data: any) => {
     const formatData:any = data.data.data.data.results.map((project: any) => ({
      id: String(project.id),
      amount: project.amount,
      title: project.name,
      category: project?.ministry ? project.ministry : "Projects",
      ministryId: project.ministryId,
      state: project?.state,
      lga: project?.region,
      reportCount: project?.reportCount ? project?.reportCount : 0,
      subscriberCount: project?.subscriberCount || 0,
      status: project?.status,
      region: project?.region,
      agency: project?.agency?.name,
      representative: project.representative || {
        name: "(N/A) Reach out to Bugit PTO",
        phoneNumber: "+2349083331633",
        email: "info@tracka.ng",
      },
    } as ProjectInterface))

    return formatData
  }
  return () =>
axios.get(`https://budgit-project.herokuapp.com/projects?${query}`).then(data => formatedData(data)).catch(e => console.log(e))
}


export function getNewProject(params: Record<string, any>) {
  const query = formatQueryParams(params);
  const formatedData = (data: any) => {
    //  const formatData:any = data.data.data.data.results.map((project: any) => ({
    //   id: String(project.id),
    //   amount: project.amount,
    //   title: project.name,
    //   category: project?.ministry ? project.ministry : "Projects",
    //   ministryId: project.ministryId,
    //   state: project?.state,
    //   lga: project?.region,
    //   reportCount: project?.reportCount ? project?.reportCount : 0,
    //   subscriberCount: project?.subscriberCount || 0,
    //   status: project?.status,
    //   region: project?.region,
    //   agency: project?.agency?.name,
    //   representative: project.representative || {
    //     name: "(N/A) Reach out to Bugit PTO",
    //     phoneNumber: "+2349083331633",
    //     email: "info@tracka.ng",
    //   },
    // } as ProjectInterface))

    return data
  }
  return () =>
axios.get(`https://budgit-project.herokuapp.com/project/22047`).then(data => formatedData(data)).catch(e => console.log(e))
}


export function getMinistries() {
  const formatedData = (data: any) => {
    const formatData = data.data.data.data.map((data : {id: number, name: string}) => ({
      label: data.name,
      value: data.id
    }))
    return formatData
  }
  return () => axios.get(`https://budgit-project.herokuapp.com/ministries`).then(data => formatedData(data)).catch(e => console.log(e))
}

export function interestedProject(param: Record<string, any>) {
  return Api.post(endpoints.projectInterest, { ...param }, {});
}

export function reportProject(param: Record<string, any>) {
  console.log('======reportProject',param)
  return Api.post(endpoints.reportProject, param, {});
}


// export function getListOfSubscribe(params: Record<string, any>) {
//   const query = formatQueryParams(params);

//   const transformRes = (data: { data: any }): ResponseType => {
//     return data.data
//   };
//   return () =>
//     Api.get<{ data: any }, ResponseType>(
//       `${endpoints.fetchProjectSubscribe}?${query}`,
//       {},
//       transformRes
//     );
// }

export function getListOfSubscribe(params: Record<string, any>) {
  const query = formatQueryParams(params);

  const transformRes = (data: { data: any }): ResponseType => {
    const formattedProjects: ProjectInterface[] = data.data.map(
      ({project}: any) =>
        ({ 
          id: String(project.id),
          amount: project.amount,
          title: project.name,
          category: project?.name,
          state: project?.state,
          lga: project?.region,
          reportCount: project?.reportCount ? project?.reportCount : null,
          subscriberCount: project?.subscriberCount ? project?.subscriberCount : null,
          status: project?.status,
          region: project?.region,
          agency: project.stakeholderName,
          representative: {
            name: project.stakeholderName ? project.stakeholderName : "(N/A) Reach out to Bugit PTO",
            phoneNumber: project.stakeholderMobile ? project.stakeholderMobile : "+2349083331633",
            email: project.stakeholderEmail ? project.stakeholderEmail : "info@yourbudgit.com",
          },
        } as ProjectInterface)
    );

    return { ...data.data, project: formattedProjects };
  };
  return () =>
    Api.get<{ data: any }, ResponseType>(
      `${endpoints.fetchProjectSubscribe}?${query}`,
      {},
      transformRes
    );
}


export function getReportedProject(params: Record<string, any>) {
  const query = formatQueryParams(params);

  const transformRes = (data: { data: any }): ResponseType => {
    const formattedProjects: SubscribeInterface[] = data.data.map(
      (project: any) =>
        ({ 
          id: String(project?.id),
          amount: project?.amount,
          title: project?.name,
          category: project?.name,
          state: project?.state,
          lga: project?.region,
          reportCount: project?.reportCount ? project?.reportCount : null,
          subscriberCount: project?.subscriberCount ? project?.subscriberCount : null,
          status: project?.status,
          region: project?.region,
          agency: project?.stakeholderName ? project.stakeholderName : "(N/A) Reach out to Bugit PTO",
          representative: {
            name: project.stakeholderName ? project.stakeholderName : "(N/A) Reach out to Bugit PTO",
            phoneNumber: project.stakeholderMobile ? project.stakeholderMobile : "+2349083331633",
            email: project.stakeholderEmail ? project.stakeholderEmail : "info@yourbudgit.com",
          },
        } as ProjectInterface)
    );

    return {...data.data, project: formattedProjects}

  };
  return () =>
    Api.get<{ data: any }, ResponseType>(
      `${endpoints.myReportProject}?${query}`,
      {},
      transformRes
    );
}

export function getProjectNotification(params: Record<string, any>) {
  const query = formatQueryParams(params);

  const transformRes = (data: { data: any }): ResponseType => {
   return data.data
  };
  return () =>
    Api.get<{ data: any }, ResponseType>(
      `${endpoints.projectNotification}?${query}`,
      {},
      transformRes
    );
}

