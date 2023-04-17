import React, { useEffect, useState, useRef } from "react";
import { SafeAreaView, FlatList, View , DevSettings, Alert, ActivityIndicator, Text} from "react-native";
import NaijaStates from "naija-state-local-government";
import { Box } from "native-base";
import ProjectHeader from "../../components/HeaderFilterContainer/HeaderFilterContainer";
import routes from "../../routes";
import Loader from "../../components/Loader";
import useSetupContext from "../Setup/hooks/useSetupContext";
import useProjects from "./hooks/query/useProject";
import useGetSubscribe from "./hooks/query/useGetSubscribe";
import ProjectCard from "./components/ProjectCard";
import formatParams from "../../utils/formatParams";
import {getPushDataObject} from 'native-notify';
import styles from "./styles";
import NoData from "../../components/NoData";
import Pusher from 'pusher-js/react-native';
import axios from "axios";
import useAuthContext from "../Auth/hooks/useAuthContext";
import { NATIVE_PUSH_TOKEN, NATIVE_PUSH_TOKEN_LONG, PUSHER_TOKEN } from "../../constants";
import { getFromStorage } from "../../utils/storage";
import CalendarData from "./CalendarData"
import useGetNewProjects from "./hooks/query/useNewProjects";
import {getNewProjects} from  "./service/project"
import { result } from "lodash";


type ProjectsProps = {
  isFormComplete: boolean;
  handleSubmit: any;
  navigation: any;
  route: any
};

type PushData = {
  screenName: string;
}

const stateSelectOptions = NaijaStates.states().map((s: string) => ({
  label: s,
  value: s,
}));

const allLgas = { value: "", label: "All Local government" };

const Projects = ({ navigation, route }: ProjectsProps) => {
  const { preference, filterProps, setFilterProps } = useSetupContext();
  const { user } = useAuthContext();
  const [refreshing,setIsRefreshing] = React.useState(false)
  const [data, setProjectData] = React.useState([])
  const params = route.params
  const scrollRef = React.useRef();
  let pushDataObject = getPushDataObject<PushData>()
  useEffect(() => {
    if (pushDataObject.screenName) {
      navigation.navigate(pushDataObject?.screenName)
    }
  }) 
  const [isPushedNotificationActivated, setIsPushedNotificationActivated] = useState<string>("")
  const [category, setCategoryProps] = useState("")
  const [sortProps, setSortProps] = useState("")
  const [limit, setLimit] = useState(10)
  const [loadingMoreItem, setLoadMoreItem] = useState(false)
  // console.log(sortProps, category)
  // console.log(route)

  useEffect(() => {
    const FetchCategoies = async () => {
      const category = await getFromStorage("categories")
      setCategoryProps(category)
    }
    FetchCategoies()

  }, [])

  useEffect(() => {

  }, [filterProps])

  const scrollToTop = () => {
    scrollRef?.current.scrollToOffset({ animated: true, offset: 0 })
  }

  // const scrollToTop = React.useCallback((value) => {
  //   // Redacted: animation related code
  //     scrollRef?.current.scrollToOffset({ animated: true, offset: 0 })

  // }, []);
console.log(loadingMoreItem, "=======Loading more")
 

  useEffect(() => {
    const FetchSortValue = async () => {
      const sortValue = await getFromStorage("projectSortValue")
      setSortProps(sortValue)
    }
    FetchSortValue()

  }, [])

  // useEffect(() => {
  //   setFilterProps({
  //     category,
  //     sortBy: sortProps
  //   })
  // }, [category, sortProps])

  const onRefresh = async () => {
      setIsRefreshing(true)
      await refetch()
      setIsRefreshing(false)
  }



  const [projectParams, setProjectParams] = useState({
    searchTerm: "",
    state: preference?.state,
    area: preference?.lga,
    year: null,
    sortBy: filterProps?.sortBy,
    category: filterProps?.category,
  });




  useEffect(() => {
    const fetchStatus = async (id) => {
       let status = await getFromStorage(`notification-status-${id}`)
      setIsPushedNotificationActivated(status)
    }
    fetchStatus("projectPush")
   
  }, [])

  // DevSettings.reload() 
  
  const {data: listOfSubscribers, isLoading: isLoadingSubscribers, error} = useGetSubscribe()

  if (error){
    Alert.alert("Something went wrong. Please try again, and make sure you are connected to the internet.")
  }

  // useEffect(() => {
  //   const project = {title: "Project", content: "Testing the data"}
  //   sendPushNotification(user?.id, project, routes)
  // }, [])

  // useEffect(() => {
  //   const fetchData = async() => {
  //     axios.get("https://budgit-project.herokuapp.com/projects").then(data => console.log(data)).catch(err => console.log("Something went wrong", err.message))
  //   }
  //   fetchData()
  // }, [])


  const sendPushNotification = async(userId: string | undefined
    , projects: any, routes:any) => {
  try {
   const res =  await axios.post(`https://app.nativenotify.com/api/indie/notification`, {
         subID: `${userId}`,
         appId: NATIVE_PUSH_TOKEN,
         appToken: `${NATIVE_PUSH_TOKEN_LONG}`,
         title: `${projects.title}`,
         message: `${projects.content}`,
         pushData: {"screenName": `${routes.notification}`}
         });
        //  console.log(res.data)
     } catch(e) {
       console.log(e)
       Alert.alert("Something went wrong. Please try again, and make sure you are connected to the internet.")
     }
  }
  const pusher = new Pusher(`${PUSHER_TOKEN}`, {
    cluster: 'eu'
  }); 

  useEffect(() => {
    const PushNotification = async () => {
      try {
       listOfSubscribers?.project?.map((data) => {
          const channel = pusher.subscribe(`project-${data?.id}`);
          channel.bind('projectReport', function(data) {
            const value = JSON.stringify(data);
            // console.log(value)
          const projects = JSON.parse(value)
         
          if (isPushedNotificationActivated === "ON") {
            sendPushNotification(user?.id, projects, routes)
          }
          }); 
        })
      } catch(e){
        console.log(e)
      }
    }
    PushNotification()
  }, [isLoadingSubscribers,listOfSubscribers])
  

  const { data: projectData, isLoading, error:ProjectDataError, isRefetching, isFetched,isFetchedAfterMount, status} = useProjects(
    formatParams({
      state: projectParams.state?.toLowerCase(),
      search: projectParams?.searchTerm,
      year: !!projectParams.year && projectParams.year,
      limit: 20,
      orderBy: projectParams.sortBy,
      ministry: projectParams.category,
    })
  );

  // console.log(status)

  // console.log(isRefetching,isFetched,isFetchedAfterMount,projectData)

  React.useCallback(() => {
      const fetchData = async ()=> {
        const res =  await getNewProjects(formatParams({
          state: projectParams.state?.toLowerCase(),
          search: projectParams?.searchTerm,
          year: !!projectParams.year && projectParams.year,
          limit: 20,
          orderBy: projectParams.sortBy,
          ministry: projectParams.category,
        }))

        const result  = await res()

        // console.log(result, "Res------------------------")
      }
      fetchData()
  }, [projectParams])

  const { data: projectNewData, isLoading: isLoadingNew, error:NewError, refetch} = useGetNewProjects(
    formatParams({
      state: projectParams.state?.toLowerCase(),
      search: projectParams?.searchTerm,
      year: !!projectParams.year && projectParams.year,
      limit: limit,
      ministryId: filterProps?.category,
      orderBy: filterProps?.sortBy,
      start: limit + 1 && limit + 1
    })
  );

  // React.useEffect(() => {
  //   // projectNewData?.length > 1 && scrollToTop()
  // }, [projectNewData])

  // console.log(projectNewData, "-------------")

  const [currentData, setCurrentData] = React.useState<any>([])

  // console.log(projectNewData,  "ProjectNew Data")


    React.useEffect(() => {
      const fetchNewData = () => {
        if (loadingMoreItem) {
           setCurrentData((prev:any) => ([...prev, ...projectNewData]))
            setLoadMoreItem(false)

        } else {
          setLoadMoreItem(false)
        setCurrentData(projectNewData)
        }

      }
      projectNewData && fetchNewData()
    }, [ projectNewData, projectParams, loadingMoreItem])

  
    React.useEffect(() => {
     currentData.length > 0 && scrollToTop()
     console.log(projectParams)
    }, [projectParams])

  if (ProjectDataError) {
    Alert.alert("Something went wrong. Please try again, and make sure you are connected to the internet.")
  }

  // useEffect(() => {
  //   navigation.navigate("setup")
  // }, [])

  const loadMoreItem = () => {
    // setData([...projectDataMemo, ])
    setLimit((prev) => prev * 2)
    setLoadMoreItem(true)

  }





  const filterHandler = () => {
    navigation.navigate(routes.filter);
  };

  function yearHandler(year: number) {
    setProjectParams((prev) => ({
      ...prev,
      year,
      limit: 10,
      start: 1
    }));
  }

  function stateOptionHandler(state: string) {
    setProjectParams((prev) => ({
      ...prev,
      state,
      lga: "",
      limit: 10,
      start: 1
    }));
  }

  function searchHandler(searchTerm: string) {
    setProjectParams((prev) => ({
      ...prev,
      searchTerm,
      limit: 10,
      start: 1
    }));
  }
  

  const lgaSelectOptions = projectParams.state
    ? NaijaStates.lgas(projectParams.state)?.lgas?.map((l: string) => ({
        value: l,
        label: l,
      }))
    : [];

  function onPressHandler(params: any) {
    navigation.navigate(routes.projectDetails, {
      project: params,
      // filterParams: {
      //   ...formatParams({
      //     state: projectParams.state?.toLowerCase(),
      //     search: projectParams.searchTerm,
      //     area: projectParams.area.toLowerCase(),
      //   }),
      // },
    });
  }

  return (
    <SafeAreaView style={{flex: 1, alignContent: "center",}}>
      <ProjectHeader
        filterHandler={filterHandler}
        selectOptions={stateSelectOptions}
        selectOptionsTwo={CalendarData}
        selectOptionTwoHandler={yearHandler}
        selectPlaceholderTwo="Select Year"
        selectPlaceholderOne="Select state"
        selectedValueOne={projectParams?.state}
        selectedValueTwo={projectParams.year}
        selectOptionHandler={stateOptionHandler}
        searchHandler={searchHandler}
        searchPlaceholder="Search communities, needs"
        disableSelectTwo={!lgaSelectOptions.length}
      />

        <Box> 
          {isLoadingNew && !loadingMoreItem && <Loader />}

          {!isLoadingNew && currentData?.length == 0 &&
          <View style={{marginTop: 100}}> 
           <NoData
           heading="No Projects Found"
           lead="Please enter other search or location options"
         />
          </View>

          }
          { currentData?.length > 0 &&

          <FlatList
            ref={scrollRef}
            style={styles.flatList}
            data={currentData}
            // extraData={currentData}
            onRefresh={onRefresh}
            refreshing={isLoadingNew}
            renderItem={({ item }) => (
              <ProjectCard {...item} onPressHandler={onPressHandler} />
            )}
            keyExtractor={(item) => `${item.id}`}
            onEndReachedThreshold={0.5}
            onEndReached={loadMoreItem}
            // ListEmptyComponent={() => 
            //  !isLoadingNew && <NoData
            //   heading="No Projects Found"
            //   lead="Please enter other search or location options"
            // />
            // }
            ListFooterComponent={() => 
              currentData?.length > 0 && isLoadingNew && <Loader /> 
            }
          
            ListFooterComponentStyle={{flex:1, justifyContent: 'flex-end', marginBottom: 200}}
          />
     
        }

        </Box>
        {/* )} */}


     {!!projectData?.rows.length && !isLoading && <Box style={styles.spacer} />}
    </SafeAreaView>
  );
};

export default Projects;
