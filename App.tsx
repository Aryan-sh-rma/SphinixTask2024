import { Button, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const [clickTimes, setClickTimes] = useState(0)
  
  
  const CompanyList = [{
    id:0,
    companyName: "Google",
    jobRole: "SDE 1",
    experience: 2,
    type:"SDE-1"

  }, {
    id:1,
    companyName: "Microsoft",
    jobRole: "Web Developer",
    experience: 3,
    type:"SDE-1"

  }, {
    id:2,
    companyName: "Alpha Techs",
    jobRole: "App Developer",
    experience: 1,
    type:"SDE-2"

  },

  {
    id:3,
    companyName: "Facebook",
    jobRole: "IOS/Android Devloper",
    experience: 5,
    type:"SDE-2"

  },
  {
    id:4,
    companyName: "Amazon",
    jobRole: "Software Trainee",
    experience: 5,
    type:"SDE-2"

  },
  {
    id:5,
    companyName: "Beta TEch Solutions",
    jobRole: "Python Developer",
    experience: 3,
    type:"SDE-1"

  },
  {
    id:6,
    companyName: "TCS",
    jobRole: "Java Developer",
    experience: 0,
    type:"SDE-2"

  },
  {
    id:7,
    companyName: "Tech Ninja",
    jobRole: "Java Developer Intern",
    experience: 0,
    type:"SDE-1"

  },
  ]

  const [displayedListings, setDisplayedListings] = useState(CompanyList);

  const onButtonPress=()=>{
    let newCount=clickTimes+1;
    if (newCount > 4) {
      newCount = 1;
    }
    console.log("at present new count is",newCount)
    if(newCount==1 || newCount===3){
      setDisplayedListings(CompanyList);
    }else if(newCount==2){
      setDisplayedListings(CompanyList.filter(item => item.type === "SDE-1"))
    }else if(newCount===4){
      setDisplayedListings(CompanyList.filter(item => item.type === "SDE-2"))
    }

    
    setClickTimes(newCount);
  }

  
  return (
    <SafeAreaView style={styles.container}>
      <Button
      
        onPress={onButtonPress}
        title="Click Me"

        accessibilityLabel="Learn more about this purple button"
      />
      


    <>
          <Text style={[styles.cardText,{color:"red",fontWeight:"500",width:360,margin:20,fontSize:18,}]}>
            You clicked button {clickTimes}  times
          </Text>
          <FlatList
            keyExtractor={item => item.id.toString()}
            data={displayedListings}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Text style={styles.cardText}>{item.companyName}</Text>
                <Text style={styles.cardText}>{item.jobRole}</Text>
                <Text style={styles.cardText}>{item.experience}</Text>
                <Text style={styles.cardText}>{item.type}</Text>
              </View>
            )}

          />
          </>
 
       
          



    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    paddingTop:10,
    alignItems: "center",


  },

  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 370,

    backgroundColor: "pink",
    marginTop: 10,
    borderRadius: 10,
    padding: 15,
  },
  cardText: {
    width: "20%",
    color: "black",

  }

})