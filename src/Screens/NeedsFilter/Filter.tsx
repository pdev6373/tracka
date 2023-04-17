import React, {useState, useEffect} from "react";
import { SafeAreaView, View, Text , TouchableOpacity} from "react-native";
import { Radio, ScrollView } from "native-base";
import styles from "./filterstyles";
import SimpleHeader from "../../components/SimpleHeader/SimpleHeader";
import { saveToStorage, getFromStorage } from "../../utils/storage";
import { SelectDropdown } from "../../components/Input/Select/Select";
import { useNeedsCategory } from "../../modules/Needs/hooks/query/useNeeds"
import { ca } from "date-fns/locale";


// "../hooks/query/useNeeds";

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

// const categories = [
//   { label: 'Agriculture', value: 'Agriculture' },
//   { label: 'Health', value: 'Health' },
//   { label: 'Ladi', value: 'Ladi' },
//   { label: 'Petroleum', value: 'Petroleum' },
// ];



const Filter = (props: ProjectsProps) => {
  const [categoryProps, setCategoryProps] = useState()
  const [sortByProps, setSortByProps] = useState()

  const onSetCategory = ({name})=> {
    saveToStorage("needscategories", name)
    setCategoryProps(name)
  }

  const onSetSortBy = ({label, value})=> {
    saveToStorage("needsortprops", value)
    setSortByProps(value)
  }

  const { data: categories, isLoading } = useNeedsCategory();
  console.log(categories)
 

  useEffect(() => {
    const FetchCategoies = async () => {
      try {
        const category = await getFromStorage("needscategories")
        setCategoryProps(category)
      } catch (error) {
        console.log(error)
      }
    
    }
    FetchCategoies()

  }, [])

  useEffect(() => {
    const FetchCategoies = async () => {
      try {
        const sortProps = await getFromStorage("needsortprops")
        setSortByProps(sortProps)
      } catch (error) {
        console.log(error)
      }
     
    }
    FetchCategoies()

  }, [])

  return (
    <SafeAreaView style={[styles.container]}>
      <ScrollView>
        <SimpleHeader heading="Filter" />
        <View style={styles.filterWrapper}>
          <View>
            <Text style={styles.sectionHeader}>Sort by</Text>
            <Radio.Group
              accessibilityLabel="Pick your category"
              name="sortBy"
              style={styles.section}
              value={sortByProps ? sortByProps : "name"}
            >
              {sortBy.map((srt) => (
                <TouchableOpacity 
                key={srt.label}
                onPress={() => onSetSortBy(srt)}
                style={styles.sectionTab}>
                  <Text style={styles.sectionTabLabel}>{srt.label}</Text>
                  <Radio accessibilityLabel={srt.value} value={srt.value} />
                </TouchableOpacity>
              ))}
            </Radio.Group>
          </View>
          {/* <View>
            <Text style={styles.sectionHeader}>Filter by</Text>
            <View style={styles.section}>
              {sortBy.map((srt) => (
                <View style={styles.sectionTab}>
                  <Text style={styles.sectionTabLabel}>{srt.label}</Text>
                  <SelectDropdown onSelect={alert} options={sortBy} />
                </View>
              ))}
            </View>
          </View> */}
          <View>
            <Text style={styles.sectionHeader}>Needs Categories</Text>
            <Radio.Group
              accessibilityLabel="Pick your category"
              name="categoryBy"
              style={styles.section}
              value={categoryProps ? categoryProps : ""}
            >
              <TouchableOpacity
                onPress={() => onSetCategory({name : ""})}
                 style={styles.sectionTab}>
                  <Text style={styles.sectionTabLabel}>All category</Text>
                  <Radio accessibilityLabel="All category" value="" />
                </TouchableOpacity>
              {!isLoading && categories?.length !== 0 && categories?.map((srt) => (
                <TouchableOpacity
                onPress={() => onSetCategory(srt)}
                key={srt.name} style={styles.sectionTab}>
                  <Text style={styles.sectionTabLabel}>{srt.name}</Text>
                  <Radio accessibilityLabel={srt.name} value={srt.name} />
                </TouchableOpacity>
              ))}
            </Radio.Group>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Filter;
