import React, {  useState } from 'react';
import { Modal, View, Text, Button, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Animated, Dimensions, TextInput, Image, KeyboardAvoidingView } from 'react-native';
import filterIcon from "../assets/filter.png";
import { ScrollView } from 'react-native';

const Filter = ({ setFilteredData, allData, subjects }) => {
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const slideAnim = useState(new Animated.Value(Dimensions.get('window').height))[0];
  const [idx, setIdx] = useState(null);
  const [showFilterCount, setShowFilterCount] = useState(false);
  const [filterCount, setFilterCount] = useState(0)

  console.log("sub:::", subjects);

  const filterValues = [
    ["6th", "7th", "8th", "OBE", "9th", "10th", "SEC", "I PUC", "II PUC", "SR-SEC"],
    ["LANGUAGE", "ENGLISH", "KANNADA"],
    subjects,
    ["ACADEMICS - NIOS", "ACADEMICS - KAR", "ACADEMICS - CBSE", "NEET", "PARA", "MUSIC", "ARTS & CRAFTS", "LANGUAGE LEARNING", "GENERAL"],
  ];

  const displayFilterCategory = ["Grade", "Medium", "Subject", "Curriculum"];
  const filterCategory = ["Class_from_Chapter", "Medium_from_chapter", "Subject_from_chapter", "Curriculum_from_Chapter"];


  const openModal = () => {
    setFilterModalVisible(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    // setFilters({})
    Animated.timing(slideAnim, {
      toValue: Dimensions.get('window').height,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setFilterModalVisible(false));
  };

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
  };

  const [filters, setFilters] = useState({});
  const isSelected = (category) => selectedCategory === category;
  const isValueSelected = (idx, value) => filters[filterCategory[idx]] === value;


  const setValues = (idx, value) => {
    setFilters(prevFilters => {
      const currentFilterValue = prevFilters[filterCategory[idx]];

      // If the selected value is already in filters, remove it (deselect)
      if (currentFilterValue === value) {
        const updatedFilters = { ...prevFilters };
        delete updatedFilters[filterCategory[idx]]; // Remove the filter
        return updatedFilters;
      }

      // Otherwise, select the value
      return {
        ...prevFilters,
        [filterCategory[idx]]: value
      };
    });
  };



  const onApply = () => {
    console.log("filters::: ", filters);
  
    if (filters && Object.keys(filters).length > 0) {
      const res = allData.filter(item => {
        // Match each key from the filter object
        for (const key in filters) {
          if (item[key] !== filters[key]) {
            return false;
          }
        }
        return true;
      });
  
      setFilteredData(res);
    } else {
      // If no filters are applied, show the full list
      setFilteredData(allData);
    }
  
    setFilterCount(Object.keys(filters).length);
    setShowFilterCount(Object.keys(filters).length > 0);
  
    closeModal();
  };
  

  const onClear = () => {
    setFilteredData(allData);
    setFilters({})
    setFilterCount(0)
    setShowFilterCount(false);
    closeModal();
  }



  const isValueSelectedForDot = (category) => {
    return filters[category] !== undefined;
  };

  return (
    <>
      <View style={styles.filterview}>
        <TouchableOpacity style={styles.filterbtn} onPress={openModal}>
          {
            allData != null && (
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={filterIcon} // Replace with your image path
                  style={styles.image}
                />
                {showFilterCount && filterCount > 0 && (
                  <View style={styles.bubble}>
                    <Text style={styles.bubbleText}>
                      {filterCount}
                    </Text>
                  </View>
                )}
              </View>
            )
          }
        </TouchableOpacity>
      </View>
      <Modal
        transparent={true}
        visible={filterModalVisible}
        animationType="none"
        onRequestClose={closeModal}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            {/* Close Modal when clicking outside */}
            <TouchableWithoutFeedback onPress={closeModal}>
              <View style={styles.overlay}>
                <TouchableWithoutFeedback>
                  <Animated.View style={[styles.modalContent, { transform: [{ translateY: slideAnim }] }]}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                      <Text style={styles.filtertxt}>Filters({Object.keys(filters).length})</Text>
                      <TouchableOpacity
                        onPress={() => {
                          closeModal()
                        }}
                      >
                        <Text style={{ fontSize: 16, fontWeight: "bold", color: "#B21E2B", marginEnd: 10 }}>Close</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.line} />
                    <View style={styles.filtercontainer}>
                      <View style={styles.filterleft}>

                        <TouchableOpacity
                          style={[styles.category, isSelected('Grade') && styles.selectedTab]}
                          onPress={() => {
                            handleCategoryPress('Grade');
                            setIdx(0);
                          }}
                        >
                          <Text style={[styles.categoryText, isSelected('Grade') && styles.selectedText]}>Grade</Text>

                          {/* Dot indicating a selected value for this category */}
                          {isValueSelectedForDot('Grade') && (
                            <View style={styles.dot} />
                          )}
                        </TouchableOpacity>

                        <TouchableOpacity
                          style={[styles.category, isSelected('Medium') && styles.selectedTab]}
                          onPress={() => {
                            handleCategoryPress('Medium');
                            setIdx(1);
                          }}
                        >
                          <Text style={[styles.categoryText, isSelected('Medium') && styles.selectedText]}>Medium</Text>

                          {/* Dot indicating a selected value for this category */}
                          {isValueSelectedForDot('Medium') && (
                            <View style={styles.dot} />
                          )}
                        </TouchableOpacity>

                        <TouchableOpacity
                          style={[styles.category, isSelected('Subject') && styles.selectedTab]}
                          onPress={() => {
                            handleCategoryPress('Subject');
                            setIdx(2);
                          }}
                        >
                          <Text style={[styles.categoryText, isSelected('Subject') && styles.selectedText]}>Subject</Text>

                          {/* Dot indicating a selected value for this category */}
                          {isValueSelectedForDot('Subject') && (
                            <View style={styles.dot} />
                          )}
                        </TouchableOpacity>

                        <TouchableOpacity
                          style={[styles.category, isSelected('Curriculum') && styles.selectedTab]}
                          onPress={() => {
                            handleCategoryPress('Curriculum')
                            setIdx(3);
                          }}
                        >
                          <Text style={[styles.categoryText, isSelected('Curriculum') && styles.selectedText]}>Curriculum</Text>

                          {/* Dot indicating a selected value for this category */}
                          {isValueSelectedForDot('Curriculum') && (
                            <View style={styles.dot} />
                          )}
                        </TouchableOpacity>

                        
                      </View>
                      <View style={styles.filterright}>
                        <View style={styles.filterrightsecond}>
                          {
                            idx !== null && (
                              filterValues[idx].map((value, i) => {
                                return (
                                  <TouchableOpacity
                                    key={i}
                                    onPress={() => setValues(idx, value)}
                                    style={[
                                      styles.filterOptions,
                                      isValueSelected(idx, value) && styles.selectedTabValue
                                    ]}
                                  >
                                    <Text style={isValueSelected(idx, value) && styles.selectedTextValue}>{value == "PENDING APPROVAL" ? "PENDING" : value}</Text>
                                  </TouchableOpacity>
                                );
                              })
                            )
                          }

                        </View>
                      </View>
                    </View>
                    <View style={styles.btns}>
                      <TouchableOpacity
                        onPress={onApply}
                        style={styles.submit}>
                        <Text style={styles.buttonText}>Apply</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={onClear}
                        style={styles.Cancel}>
                        <Text style={styles.buttonText1}>Clear</Text>
                      </TouchableOpacity>
                    </View>
                  </Animated.View>
                </TouchableWithoutFeedback>
              </View>
            </TouchableWithoutFeedback>
          </ScrollView>
        </KeyboardAvoidingView>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    borderColor: '#B21E2B',
    borderWidth: 1,
    width: "100%",
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  image: {
    width: 24,
    height: 24,
    fontWeight: "bold",
    tintColor: '#B21E2B', // Changes the color of the image
    marginTop: 3,
    marginStart: 2
  },
  dot: {
    width: 8,
    height: 8,
    backgroundColor: '#FFBE65',
    borderRadius: 4,
    marginLeft: 8,
  },
  bubble: {
    position: 'absolute',
    top: -5,
    right: -8,
    backgroundColor: '#ff9d00',
    width: 15,
    height: 15,
    borderRadius: 7.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bubbleText: {
    color: 'white',
    fontSize: 8,
    fontWeight: 'bold',
  },
  filtertxt: {
    marginBottom: 15,
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "black"
  },
  modalContainer: {
    flex: 1,  
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: 'grey',
    marginBottom: 6
  },
  inputtxt: {
    height: 48,
    marginTop: 5,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#B21E2B',
    borderRadius: 6,
    paddingLeft: 10,
    fontSize: 16,
  },
  selectedCode: {
    marginTop: 20,
    fontSize: 16,
  },
  modalContent: {
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5,
    width: '100%',
    padding: 20,
  },
  filterview: {
    height: 30,
    display: 'flex',
  },
  filterbtn: {
    alignSelf: 'flex-end',
    marginVertical: 2,
    marginEnd: 25,
  },
  filter: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 5,
    color: '#B21E2B',
  },
  filtercontainer: {
    flexDirection: 'row',
    gap: 30,
  },
  filterleft: {
    borderRightWidth: 0.1,
    backgroundColor: "#F5F5F5",
    marginLeft: 0
  },
  filterright: {
    flex: 1,
    paddingTop: 20
  },
  filterrightsecond: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'flex-start',
    width: '100%',
  },
  category: {
    padding: 15,
    flexDirection: 'row'
  },
  categoryText: {
    fontSize: 14,
    color: '#000',
  },
  selectedText: {
    color: '#FFFF',
    fontWeight: 'bold',
  },
  selectedTab: {
    backgroundColor: "#B21E2B"
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#B21E2B',
    marginBottom: 20
  },
  filterOptions: {
    backgroundColor: "#F5F5F5",
    flexWrap: 'wrap',
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  txtinput: {
    borderWidth: 1,
    width: "100%",
    paddingStart: 10,
    borderRadius: 10,
    borderColor: "#B21E2B"
  },
  selectedTabValue: {
    borderWidth: 2,
    borderColor: '#B21E2B'
  },
  selectedTextValue: {
    color: 'black',
    fontWeight: '700'
  },
  btns: {
    flex: 1,
    width: 340,
    height: 45,
    paddingVertical: 20,
    paddingHorizontal: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
    gap: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontStyle: 'normal',
    fontFamily: 'Inter',
    fontWeight: '700',
  },
  buttonText1: {
    color: '#B21E2B',
    fontSize: 14,
    fontStyle: 'normal',
    fontFamily: 'Inter',
    fontWeight: '700',
  },
  submit: {
    height: 50,
    width: 110,
    backgroundColor: '#B21E2B',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Cancel: {
    height: 50,
    width: 110,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#B21E2B',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Filter;
