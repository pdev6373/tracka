import React, {useState, useEffect} from "react";
import { SafeAreaView, View, Text , TouchableOpacity} from "react-native";
import { Radio, ScrollView } from "native-base";
import styles from "./filterstyle";
import SimpleHeader from "../../components/SimpleHeader/SimpleHeader";
import { saveToStorage, getFromStorage } from "../../utils/storage";
import { SelectDropdown } from "../../components/Input/Select/Select";
import { request, gql } from "graphql-request";
import { useQuery } from "react-query";
import routes from "../../routes";
import useProjects from "../../modules/Projects/hooks/query/useProject";
import formatParams from "../../utils/formatParams";
import useSetupContext from "../../modules/Setup/hooks/useSetupContext";
import axios from "axios";
import { min } from "lodash";
import { primaryColors } from "../../styles/Colors";
import useMinistry from "../../modules/Projects/hooks/query/useGetMinistry";
type ProjectsProps = {
  isFormComplete: boolean;
  handleSubmit: any;
  navigation: any;
};

const sortBy = [
  { label: 'Project titile(A-Z)', value: 'name' },
  { label: 'Project titile(Z-A)', value: '-name' },
  { label: 'Amount (Highest-Lowest)', value: 'amount' },
  { label: 'Amount (Lowest-Highest)', value: '-amount' },
];

const categories = [
  { label: 'All Categories', value: '' },
  { label: 'Agriculture', value: 'agriculture' },
  { label: 'Health', value: 'health' },
  { label: 'Education', value: 'education' },
  { label: 'Internal Affairs', value: 'internalAffairs' },
  { label: 'Justice', value: 'justice' },
  { label: 'Labour', value: 'labour' },
  { label: 'Petroleum', value: 'petroleum' },
  { label: 'Mines and Steel', value: 'mineAndSteel' },
  { label: 'Science and Technology', value: 'scienceAndTechnology' },
  { label: 'Special Duties', value: 'specialDuties' },
  { label: 'Transport', value: 'transport' },
  { label: 'Water Resources', value: 'waterResources'},
  { label: 'Works and Housing', value: 'workAndHousing' },
  { label: 'Women Affairs', value: 'womenAffairs' },
  { label: 'Youth and Sport', value: 'youthAndSport' },
  { label: 'Aviation', value: 'aviation' },
  { label: 'Information And Culture', value: 'informationAndCulture' },
  { label: 'Defence', value: 'defence' },
  { label: 'Environment', value: 'environment' },
  { label: 'Finance', value: 'finance' },
  { label: 'Foreign Affairs', value: 'foreignAffairs'},
  { label: 'Niger Delta', value: 'nigerDelta' },
  { label: 'Industry, Trade And Investment', value: 'industry' },
  { label: 'Power', value: 'power' },
  { label: 'FCT', value: 'fct' },
  { label: 'Interior', value: 'interior' },
  { label: 'Humanitarian Affairs', value: 'hummanitarianAffairs' },
  { label: 'Police Affair', value: 'policeAffair' },
];

const Filter = (props: ProjectsProps) => {
// const [ministries, setMinistries] = useState([])

const { setFilterProps } = useSetupContext();
  const [categoryProps, setCategoryProps] = useState<number>(0)
  const [loading, setLoading] = useState(true)
  const [sortProps, setSortProps] = useState("")


useEffect(() => {
  setFilterProps({
    sortBy: sortProps,
    category: categoryProps,
  })

}, [categoryProps, sortProps])

  const onSetCategory = async (props: {value: number | string, label: string})=> {
    await saveToStorage("categories", props.value)
    console.log(props)
    setCategoryProps(props.value)

  
  }

  const onSetSort = async ({value, label}) => {
    await saveToStorage("projectSortValue", value)
    setSortProps(value)
  
  }

  const {data: ministries, isLoading} = useMinistry()
  
  useEffect(() => {
    const FetchCategoies = async () => {
      const category = await getFromStorage("categories")
      setCategoryProps(category)
    }
    FetchCategoies()

  }, [])

  useEffect(() => {
    const FetchSortValue = async () => {
      const sortValue = await getFromStorage("projectSortValue")
      setSortProps(sortValue)
    }
    FetchSortValue()

  }, [])



  return (
    <SafeAreaView style={[styles.container]}>
      <ScrollView>
        <SimpleHeader heading="Filter" />
        <View style={styles.filterWrapper}>
          <View>
            <Text style={styles.sectionHeader}>Sort by</Text>
            <Radio.Group
              accessibilityLabel="Pick your favorite number"
              name="sortBy"
              style={styles.section}
              value={sortProps ? sortProps : "name"}
            >
              {sortBy.map((srt) => (
                <TouchableOpacity onPress={() => onSetSort(srt)}
                key={srt.value}
                style={styles.sectionTab}>
                  <Text style={styles.sectionTabLabel}>{srt.label}</Text>
                  <Radio accessibilityLabel={srt.value} value={srt.value} />
                </TouchableOpacity>
              ))}
            </Radio.Group>
          </View>
          <View>
            <Text style={styles.sectionHeader}>Categories</Text>
            {isLoading && <Text style={{color: primaryColors.blue, textAlign: "center"}}>Loading...</Text>}
           {!isLoading && ministries?.length > 0 && <Radio.Group
              accessibilityLabel="Pick your favorite number"
              name="sortBy"
              style={styles.section}
              value={`${categoryProps}`}
            >
               <TouchableOpacity
                onPress={() => onSetCategory({
                  value: "",
                  label: "All"
                })}
               style={styles.sectionTab}>
                  <Text style={styles.sectionTabLabel}>All</Text> 
                  <Radio accessibilityLabel={""} value={""} />
                </TouchableOpacity>
              {ministries?.map((srt: {value:number, label:string}) => (
                <TouchableOpacity
                onPress={() => onSetCategory(srt)}
                key={srt.value} style={styles.sectionTab}>
                  <Text style={styles.sectionTabLabel}>{srt.label}</Text> 
                  <Radio accessibilityLabel={`${srt.value}`} value={`${srt.value}`} />
                </TouchableOpacity>
              ))}
            </Radio.Group>}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Filter;
