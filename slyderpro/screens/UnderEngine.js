import React, { useState,useEffect } from 'react';
import {View, Text,ScrollView,Image,TouchableOpacity,Alert,StyleSheet,StatusBar } from  'react-native';
import NeumorphismButton from '../src/neumorphism-button'
import Resetbtn from '../src/resetbtn'
import { Switch } from 'react-native-switch';
import { Shadow, Neomorph } from 'react-native-neomorph-shadows';
import greenCircle from '../images/greencircle.png';
import CompassHeading from 'react-native-compass-heading';
import centerCompass from '../images/compasscircle.png';
import boat from '../images/boat.png';
import leftrev from '../images/leftrevs.png';
import rightrev from '../images/rightrevs.png';


function UnderEngine (){

    
    const [isEnabled1, setIsEnabled1] = useState(false);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);

    const [isEnabled2, setIsEnabled2] = useState(false);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

    const [isEnabled3, setIsEnabled3] = useState(false);
    const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);

    const [isEnabled4, setIsEnabled4] = useState(false);
    const toggleSwitch4 = () => setIsEnabled4(previousState => !previousState);
 
    const [isEnabled5, setIsEnabled5] = useState(false);
    const toggleSwitch5 = () => setIsEnabled5(previousState => !previousState);
    
    const [isEnabled6, setIsEnabled6] = useState(false);
    const toggleSwitch6 = () => setIsEnabled6(previousState => !previousState);

   

    //set log 1 value
    const [myText1, setMyText1] = useState("11.5");
    const [myText2, setMyText2] = useState("13.5");
    const [bgColor1, setBgColor1] = useState('#3e3e3e');
    const [bgColor2, setBgColor2] = useState('#3e3e3e');

    const setBoth1 = () => {
      setBgColor1('red');
      setBgColor2('#3e3e3e');
    };
    
    const setBoth2 = () => {
      setBgColor1('#3e3e3e');
      setBgColor2('red');
    };


    const [compassHeading, setCompassHeading] = useState(0);

    useEffect(() => {
      const degree_update_rate = 3;
  
      // accuracy on android will be hardcoded to 1
      // since the value is not available.
      // For iOS, it is in degrees
      CompassHeading.start(degree_update_rate, ({heading, accuracy}) => {
        setCompassHeading(heading, accuracy);
      });
  
      return () => {
        CompassHeading.stop();
      };
    }, []);
return(    
  
<View style={{backgroundColor:'#242424'}}>
<StatusBar hidden />
  {/* <ScrollView> */}
    {/*shadow drop neomorph switch equipment*/}
    <View style={{position:'absolute',top:90,left:150}}>
    <Neomorph
  inner // <- enable inner shadow
  darkShadowColor="#141414" // <- set this
  lightShadowColor="#2e2e2e"
  style={{
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 1,
    shadowColor: "white",
    shadowRadius: 3,
    borderRadius: 150,
    backgroundColor: '#141414',
    width:158,
    height:62,
    
    // ...include most of View/Layout styles
  }}
>
  <View style={{top:8,left:9}}>
<Switch
onValueChange={toggleSwitch1}
value={isEnabled1}
disabled={false}
activeText={'ON'}
inActiveText={'OFF'}
circleSize={35}
barHeight={45}
circleBorderWidth={25}
circleBorderInactiveColor={'#181818'}
circleBorderActiveColor={'#181818'}
backgroundActive={'#141414'}
backgroundInactive={'#141414'}
circleActiveColor={'green'}
circleInActiveColor={'gray'}
// renderInsideCircle={() => <CustomComponent />} // custom component to render inside the Switch circle (Text, Image, etc.)
changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
innerCircleStyle={{ width:75,height:57,alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
renderActiveText={true}
renderInActiveText={true}
switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
switchWidthMultiplier={4} // multiplied by the `circleSize` prop to calculate total width of the Switch
switchBorderRadius={26}
/>
</View>
</Neomorph>
<Text style={{textAlign:'center',top:5,fontSize:20,color:'white'}}>nav equipment</Text>
</View>
{/*shadow drop neomorph propulsion*/}
  <View style={{position:'absolute',top:210,left:150}}>
  <Neomorph
  inner // <- enable inner shadow
  darkShadowColor="#141414" // <- set this
  lightShadowColor="#2e2e2e"
  style={{
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 1,
    shadowColor: "white",
    shadowRadius: 3,
    borderRadius: 150,
    backgroundColor: '#141414',
    width:158,
    height:62,
    
    // ...include most of View/Layout styles
  }}
>
  <View style={{top:8,left:9}}>
<Switch
onValueChange={toggleSwitch2}
value={isEnabled2}
disabled={false}
activeText={'ON'}
inActiveText={'OFF'}
circleSize={35}
barHeight={45}
circleBorderWidth={25}
circleBorderInactiveColor={'#181818'}
circleBorderActiveColor={'#181818'}
backgroundActive={'#141414'}
backgroundInactive={'#141414'}
circleActiveColor={'green'}
circleInActiveColor={'gray'}
// renderInsideCircle={() => <CustomComponent />} // custom component to render inside the Switch circle (Text, Image, etc.)
changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
innerCircleStyle={{ width:75,height:57,alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
renderActiveText={true}
renderInActiveText={true}
switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
switchWidthMultiplier={4} // multiplied by the `circleSize` prop to calculate total width of the Switch
switchBorderRadius={26}
/>
</View>
</Neomorph>
<Text style={{textAlign:'center',top:5,fontSize:20,color:'white'}}>propulsion</Text>
  </View>
{/*MOB BUTTON */}
<View style={{position:'absolute',alignSelf:'flex-end',top:30,right:50}}>
<NeumorphismButton style={{padding: 25,borderColor:'#7b0000',borderWidth:5,borderRadius:40,height:120}}> 
 <Text style={{color:'white',fontSize:30,alignSelf:'center',top:5}} >MOB</Text>
</NeumorphismButton>
   {/*shadow drop neomorph switch winches*/}
   <View style={{position:'absolute',top:170,right:80}}>
   <Neomorph
  inner // <- enable inner shadow
  darkShadowColor="#141414" // <- set this
  lightShadowColor="#2e2e2e"
  style={{
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 1,
    shadowColor: "white",
    shadowRadius: 3,
    borderRadius: 150,
    backgroundColor: '#141414',
    width:158,
    height:62,
    
    // ...include most of View/Layout styles
  }}
>
  <View style={{top:8,left:9}}>
<Switch
onValueChange={toggleSwitch3}
value={isEnabled3}
disabled={false}
activeText={'ON'}
inActiveText={'OFF'}
circleSize={35}
barHeight={45}
circleBorderWidth={25}
circleBorderInactiveColor={'#181818'}
circleBorderActiveColor={'#181818'}
backgroundActive={'#141414'}
backgroundInactive={'#141414'}
circleActiveColor={'green'}
circleInActiveColor={'gray'}
// renderInsideCircle={() => <CustomComponent />} // custom component to render inside the Switch circle (Text, Image, etc.)
changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
innerCircleStyle={{ width:75,height:57,alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
renderActiveText={true}
renderInActiveText={true}
switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
switchWidthMultiplier={4} // multiplied by the `circleSize` prop to calculate total width of the Switch
switchBorderRadius={26}
/>
</View>
</Neomorph>
<Text style={{textAlign:'center',top:5,fontSize:20,color:'white'}}>winches</Text>
</View>
   {/*shadow drop neomorph switch windlass*/}
   <View style={{position:'absolute',top:300,right:80}}>
   <Neomorph
  inner // <- enable inner shadow
  darkShadowColor="#141414" // <- set this
  lightShadowColor="#2e2e2e"
  style={{
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 1,
    shadowColor: "white",
    shadowRadius: 3,
    borderRadius: 150,
    backgroundColor: '#141414',
    width:158,
    height:62,
    
    // ...include most of View/Layout styles
  }}
>
  <View style={{top:8,left:9}}>
<Switch
onValueChange={toggleSwitch4}
value={isEnabled4}
disabled={false}
activeText={'ON'}
inActiveText={'OFF'}
circleSize={35}
barHeight={45}
circleBorderWidth={25}
circleBorderInactiveColor={'#181818'}
circleBorderActiveColor={'#181818'}
backgroundActive={'#141414'}
backgroundInactive={'#141414'}
circleActiveColor={'green'}
circleInActiveColor={'gray'}
// renderInsideCircle={() => <CustomComponent />} // custom component to render inside the Switch circle (Text, Image, etc.)
changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
innerCircleStyle={{ width:75,height:57,alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
renderActiveText={true}
renderInActiveText={true}
switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
switchWidthMultiplier={4} // multiplied by the `circleSize` prop to calculate total width of the Switch
switchBorderRadius={26}
/>
</View>
</Neomorph>
<Text style={{textAlign:'center',top:8,fontSize:20,color:'white'}}>windlass</Text>

</View>

</View>

{/*north west angles at the top of the screen */} 
<View style={{justifyContent:'center',alignItems:'center',top:30}}>
<View style={{borderWidth:0.7,top:10
,borderColor:'gray',borderRadius:10,padding:10,left:25}}>  
<View style={{ flexDirection:'row', justifyContent: 'space-between'}}>
<Text style={{fontSize:18,color:'white'}}>POS</Text>
<Text style={{alignSelf:'flex-end',fontSize:18,color:'white'}}>GPS</Text>
</View>
<Text style={{fontSize:35,fontWeight:'bold',alignSelf:'center',color:'white'}}>N 38°54'51.4" | W 006°51'50.0"</Text>
</View>
</View>

{/*row views*/}
<View style={{flexDirection:'row',justifyContent:'space-between',top:30}}>
{/*log 1, log 2, time */}
<View style={{left:80,marginLeft:"20%",width:"10%",height:"70%",padding:18,flexDirection:'column',borderWidth:0.7,borderColor:'gray',borderRadius:10,top:30}}>
{/* reset button */}
<View  style={{position:'absolute',right:150,top:40}}>
<TouchableOpacity
onPress = {() => Alert.alert(
  '',
  'Are you sure you want to Reset?',  
  [
     {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
     {text: 'Yes', onPress: () => setMyText1("0.0")},
  ],
  { cancelable: false }
)}
// onPress = {() => setMyText1("0.0")}
>  
<Resetbtn  style={{padding:12,width:90,borderRadius:40,borderColor:'#000000',borderWidth:4}}> 
 <Text style={{color:'white',fontSize:22,alignSelf:'center',fontWeight:'bold'}}>reset</Text>
</Resetbtn>
</TouchableOpacity>
</View>
{/* reset button */}
<View style={{position:'absolute',right:150,top:180}}>
<TouchableOpacity
onPress = {() => Alert.alert(
  '',
  'Are you sure you want to Reset?',  
  [
     {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
     {text: 'Yes', onPress: () => setMyText2("0.0")},
  ],
  { cancelable: false }
)}>
<Resetbtn  style={{padding:12,width:90,borderRadius:40,borderColor:'#000000',borderWidth:4}}> 
 <Text style={{color:'white',fontSize:22,alignSelf:'center',fontWeight:'bold'}}>reset</Text>
</Resetbtn>
</TouchableOpacity>
</View>
<View>
<View style={{flexDirection:'row', justifyContent:'space-between'}}>
<Text style={{fontSize:18,color:'white'}}>LOG 1</Text>
<Text style={{alignSelf:'flex-end',fontSize:18,color:'white'}}>nm</Text>
</View>
</View>
<Text style={{fontSize:50,alignSelf:'center',fontWeight:'bold',top:8,color:'white'}}>{myText1}</Text>
<View style={{height:1,top:25,alignSelf:'center',width:"90%",backgroundColor: 'gray',flexDirection:'row'}}></View>
<View style={{top:40}}>  
<View style={{flexDirection:'row', justifyContent:'space-between'}}>
<Text style={{fontSize:18,color:'white'}}>LOG 2</Text>
<Text style={{alignSelf:'flex-end',fontSize:18,color:'white'}}>nm</Text>
</View>
<Text style={{fontSize:50,alignSelf:'center',fontWeight:'bold',top:5,color:'white'}}>{myText2}</Text>
</View>
<View style={{height:1,top:65,alignSelf:'center',width:"90%",backgroundColor: 'gray',flexDirection:'row'}}></View>
<View style={{top:60}}>  
<View style={{flexDirection:'row', justifyContent:'space-between',top:10}}>
<Text style={{fontSize:18,color:'white'}}>time</Text>
<Text style={{fontSize:18,alignSelf:'flex-end',color:'white'}}>local</Text>
</View>
<Text style={{fontSize:35,alignSelf:'center',fontWeight:'bold',top:30,color:'white'}}>12:07:03</Text>
</View>
</View>
{/*speed and sog*/}
<View style={{alignItems:'center',flexDirection:'column',top:5}}>
<View style={{justifyContent:'center',width:'60%',alignItems:'center',flexDirection:'row',borderWidth:0.7,borderColor:'gray',borderRadius:10,padding:10,top:30}}> 
<View>
<View style={{flexDirection:'row', justifyContent:'space-between'}}>
<Text style={{right:10,fontSize:18,color:'white'}}>Speed</Text>
<Text style={{alignSelf:'flex-end',right:5,fontSize:18,color:'white'}}>kn</Text>
</View>
<View style={{flexDirection:'row'}}>
<Text style={{fontSize:50,left:60,fontWeight:'bold',color:'white'}}>9.9</Text>
<Text>                                              </Text>
</View>
</View>
<View style={{ height: '100%',width: 1,backgroundColor: 'gray',marginLeft:5}}></View>
<View>
<View style={{fontSize:18,marginLeft:20,flexDirection:'row', justifyContent:'space-between'}}>
<Text style={{color:'white'}}>SOG</Text>
<Text style={{fontSize:18,alignSelf:'flex-end',right:5,color:'white'}}>kn</Text>
</View>
<View style={{flexDirection:'row'}}>
<Text style={{fontSize:50,left:100,fontWeight:'bold',color:'white'}}>13.6</Text>
<Text>                                              </Text>
</View>
</View>
</View>
<Image
      style={[
        styles.image,
        {transform: [{rotate: `${360 - compassHeading}deg`}]},
      ]}
      resizeMode="contain"
      source={centerCompass}
    >
    </Image>
    <Image style={{position:'absolute',top:270}}
source={boat}
></Image>
<Image
style={{position:'absolute',top:380,left:110,}}
source={leftrev}
> 
</Image>
<Text style={{position:'absolute',color:'white',top:420,fontSize:50,left:155}}>1270</Text>
<Image
style={{position:'absolute',top:380,right:110,}}
source={rightrev}
> 
</Image>
<Text style={{position:'absolute',color:'white',top:420,fontSize:50,right:155}}>1350</Text>
</View>

{/* dtw, ttw, eta */}
<View style={{right:80,marginRight:"20%",width:"10%",height:"70%",padding:15,flexDirection:'column',borderWidth:0.7,borderColor:'gray',borderRadius:10,top:30}}>
<View>
<View style={{flexDirection:'row', justifyContent:'space-between'}}>
<Text style={{fontSize:18,color:'white'}}>DTW</Text>
<Text style={{alignSelf:'flex-end',fontSize:18,color:'white'}}>nm</Text>
</View>
</View>
<Text style={{fontSize:50,alignSelf:'center',fontWeight:'bold',top:5,color:'white'}}>37.3</Text>
<View style={{top:30,height:1,alignSelf:'center',width:"90%",backgroundColor: 'gray',flexDirection:'row'}}></View>

<View style={{top:40}}>  
<View style={{flexDirection:'row', justifyContent:'space-between'}}>
<Text style={{fontSize:18,color:'white'}}>TTW</Text>
<Text style={{alignSelf:'flex-end',fontSize:18,color:'white'}}>hrs</Text>
</View>
<Text style={{top:10,fontSize:50,alignSelf:'center',fontWeight:'bold',color:'white'}}>04:00</Text>
</View>
<View style={{height:1,top:65,alignSelf:'center',width:"90%",backgroundColor: 'gray',flexDirection:'row'}}></View>
<View style={{top:60}}>  
<View style={{flexDirection:'row', justifyContent:'space-between',top:10}}>
<Text style={{fontSize:18,color:'white'}}>ETA</Text>
<Text style={{alignSelf:'flex-end',fontSize:18,color:'white'}}>24h</Text>
</View>
<Text style={{fontSize:50,alignSelf:'center',fontWeight:'bold',color:'white',top:25}}>16:07</Text>
</View>
</View>
</View> 
  {/* controller and engine bb tab */}
<View style={{flexDirection:'row'}}>
<Text style={{left:270,fontSize:20,bottom:80,color:'white'}}>controller</Text>
<Text style={{left:440,fontSize:20,bottom:80,color:'white'}}>engine bb</Text></View>
<View style={{flexDirection:'row',left:250,bottom:60 }}>
<View style={{flexDirection:'column',right:20}}>
<Neomorph
  inner // <- enable inner shadow
  darkShadowColor="#141414" // <- set this
  lightShadowColor="#2e2e2e"
  style={{
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 1,
    shadowColor: "white",
    shadowRadius: 3,
    borderRadius: 145,
    backgroundColor: '#141414',
    width:155,
    height:65,
    
    // ...include most of View/Layout styles
  }}
>
  <View style={{flexDirection:'row',width:138,backgroundColor:'#101010',borderRadius:26,top:8,left:9}}>
<Text style={{marginLeft:20,marginTop:5,color:'white',alignSelf:'center',fontSize:30}}>97</Text>
<View style={{ height: '80%',marginTop:5,width: 2,backgroundColor: 'gray',marginLeft:25}}></View>
<Text style={{marginLeft:10,marginTop:10,color:'white',fontSize:20}}>°C</Text>
</View>
</Neomorph>
</View>
<View style={{flexDirection:'column',left:10}}>
<Neomorph
  inner // <- enable inner shadow
  darkShadowColor="#141414" // <- set this
  lightShadowColor="#2e2e2e"
  style={{
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 1,
    shadowColor: "white",
    shadowRadius: 3,
    borderRadius: 145,
    backgroundColor: '#141414',
    width:155,
    height:65,
    
    // ...include most of View/Layout styles
  }}
>
  <View style={{flexDirection:'row',width:138,backgroundColor:'#101010',borderRadius:26,top:8,left:9}}>
<Text style={{marginLeft:20,marginTop:5,fontSize:30,color:'white'}}>135</Text>
<View style={{ height: '80%',marginTop:5,width: 2,backgroundColor: 'gray',marginLeft:20}}></View>
<Text style={{marginLeft:5,marginTop:10,fontSize:20,color:'white'}}>°C</Text>
</View>
</Neomorph>
<View style={{flexDirection:'row',top:5,left:50}}>
<Text style={{fontSize:20,color:'white'}}>sea water pump</Text>
<Image style={{width:20,height:20,alignSelf:'center',left:5}} 
source={greenCircle}></Image>
</View>
</View>
<View style={{flexDirection:'column',left:10}}>
<Neomorph
  inner // <- enable inner shadow
  darkShadowColor="#141414" // <- set this
  lightShadowColor="#2e2e2e"
  style={{
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 1,
    shadowColor: "white",
    shadowRadius: 3,
    borderRadius: 145,
    backgroundColor: '#141414',
    width:155,
    height:65,
    
    // ...include most of View/Layout styles
  }}
>
  <View style={{flexDirection:'row',width:138,backgroundColor:'#101010',borderRadius:26,top:8,left:9}}>
<Text style={{marginLeft:20,marginTop:5,color:'white',fontSize:30}}>3.9</Text>
<View style={{ height: '80%',marginTop:5,width: 2,backgroundColor: 'gray',marginLeft:20}}></View>
<Text style={{marginLeft:5,marginTop:10,fontSize:20,color:'white'}}>KW</Text>
</View>
</Neomorph>
<View style={{flexDirection:'row',top:5,left:90}}>
<Text style={{fontSize:20,color:'white'}}>cooling pump</Text>
<Image style={{width:20,height:20,alignSelf:'center',left:5}} 
source={greenCircle}></Image>
</View>
</View>
</View>

{/* engine stb and controller tab*/}
<View style={{flexDirection:'row',justifyContent:'flex-end'}}>
<Text style={{right:390,fontSize:20,bottom:200,color:'white'}}>engine stb</Text>
<Text style={{right:210,fontSize:20,bottom:200,color:'white'}}>controller</Text></View>
<View style={{flexDirection:'row',justifyContent:'flex-end',bottom:180,right:200 }}>
<View style={{flexDirection:'column'}}>
<Neomorph
  inner // <- enable inner shadow
  darkShadowColor="#141414" // <- set this
  lightShadowColor="#2e2e2e"
  style={{
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 1,
    shadowColor: "white",
    shadowRadius: 3,
    borderRadius: 145,
    backgroundColor: '#141414',
    width:155,
    height:65,
    
    // ...include most of View/Layout styles
  }}
>
  <View style={{flexDirection:'row',width:138,backgroundColor:'#101010',borderRadius:26,top:8,left:9}}>
<Text style={{marginLeft:20,marginTop:5,fontSize:30,color:'white'}}>3.5</Text>
<View style={{ height: '80%',marginTop:5,width: 2,backgroundColor: 'gray',marginLeft:20}}></View>
<Text style={{marginLeft:5,marginTop:10,fontSize:20,color:'white'}}>kw</Text>
</View>
</Neomorph>

<View style={{flexDirection:'row',top:5,right:90}}>
<Image style={{width:20,height:20,alignSelf:'center',right:10}} 
source={greenCircle}></Image>
<Text style={{fontSize:20,color:'white'}}>cooling pump</Text>
</View>
</View>
<View style={{flexDirection:'column',left:10}}>
<Neomorph
  inner // <- enable inner shadow
  darkShadowColor="#141414" // <- set this
  lightShadowColor="#2e2e2e"
  style={{
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 1,
    shadowColor: "white",
    shadowRadius: 3,
    borderRadius: 145,
    backgroundColor: '#141414',
    width:155,
    height:65,
    
    // ...include most of View/Layout styles
  }}
>
  <View style={{flexDirection:'row',width:138,backgroundColor:'#101010',borderRadius:26,top:8,left:9}}>
<Text style={{marginLeft:20,marginTop:5,fontSize:30,color:'white'}}>135</Text>
<View style={{ height: '80%',marginTop:5,width: 2,backgroundColor: 'gray',marginLeft:20}}></View>
<Text style={{marginLeft:5,marginTop:10,fontSize:20,color:'white'}}>°C</Text>
</View>
</Neomorph>

<View style={{flexDirection:'row',top:5,right:70}}>
<Image style={{width:20,height:20,alignSelf:'center',left:5}} 
source={greenCircle}></Image>
<Text style={{color:'white',left:10,fontSize:20}}>sea water pump</Text>
</View>
</View>
<Neomorph
  inner // <- enable inner shadow
  darkShadowColor="#141414" // <- set this
  lightShadowColor="#2e2e2e"
  style={{
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 1,
    shadowColor: "white",
    shadowRadius: 3,
    borderRadius: 145,
    backgroundColor: '#141414',
    width:155,
    height:65,
    left:30
    
    // ...include most of View/Layout styles
  }}
>
  <View style={{flexDirection:'row',width:138,backgroundColor:'#101010',borderRadius:26,top:8,left:9}}>
<Text style={{marginLeft:20,marginTop:5,fontSize:30,color:'white'}}>97</Text>
<View style={{ height: '80%',marginTop:5,width: 2,backgroundColor: 'gray',marginLeft:20}}></View>
<Text style={{marginLeft:5,marginTop:10,fontSize:20,color:'white'}}>KW</Text>
</View>
</Neomorph>
</View>

{/*generator toogle*/}
<View style={{bottom:120,left:100,flexDirection:'row'}}>
<Neomorph
  inner // <- enable inner shadow
  darkShadowColor="#141414" // <- set this
  lightShadowColor="#2e2e2e"
  style={{
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 1,
    shadowColor: "white",
    shadowRadius: 3,
    borderRadius: 150,
    backgroundColor: '#141414',
    width:158,
    height:62,
    
    // ...include most of View/Layout styles
  }}
>
  <View style={{top:8,left:9}}>
<Switch
onValueChange={toggleSwitch5}
value={isEnabled5}
disabled={false}
activeText={'ON'}
inActiveText={'OFF'}
circleSize={35}
barHeight={45}
circleBorderWidth={25}
circleBorderInactiveColor={'#181818'}
circleBorderActiveColor={'#181818'}
backgroundActive={'#141414'}
backgroundInactive={'#141414'}
circleActiveColor={'green'}
circleInActiveColor={'gray'}
// renderInsideCircle={() => <CustomComponent />} // custom component to render inside the Switch circle (Text, Image, etc.)
changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
innerCircleStyle={{ width:75,height:57,alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
renderActiveText={true}
renderInActiveText={true}
switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
switchWidthMultiplier={4} // multiplied by the `circleSize` prop to calculate total width of the Switch
switchBorderRadius={26}
/>
</View>
<Text style={{textAlign:'center',color:'white',top:15,fontSize:20}}>generator</Text>

</Neomorph>


{/* water temp */}
<View style={{alignSelf:'center',flexDirection:'row',left:100}}>
<View style={{top:10,alignItems:'center',width:"20%",justifyContent:'center',left:8,borderWidth:0.7,borderColor:'gray',borderRadius:10,padding:10}}> 
<View>
<View style={{flexDirection:'row', justifyContent:'space-between'}}>
<Text style={{fontSize:18,right:70,color:'white'}}>WATER TEMP</Text>
<Text style={{alignSelf:'flex-end',fontSize:18,left:70,color:'white'}}>°C</Text>
</View>
<View style={{}}>
<Text style={{fontSize:50,marginLeft:50,fontWeight:'bold',color:'white'}}>28.3</Text>

</View>
</View>
</View>
{/* Range */}
<View style={{top:10,alignItems:'center'}}>
<View style={{width:"70%",justifyContent:'center',alignItems:'center',flexDirection:'row',borderWidth:0.7,borderColor:'gray',borderRadius:10,padding:10}}> 
<View style={{}}>
<View style={{flexDirection:'row', justifyContent:'space-between'}}>
<Text style={{fontSize:18,right:100,color:'white'}}>RANGE</Text>
<Text style={{alignSelf:'flex-end',fontSize:18,color:'white'}}>nm</Text>
</View>
<View style={{}}>
<Text style={{right:40,fontSize:50,fontWeight:'bold',alignSelf:'center',color:'white'}}>300</Text>
</View>
</View>
<View style={{ height: '100%',width: 1,backgroundColor: 'gray',marginLeft:8}}></View>
<View style={{}}>
<View style={{marginLeft:20,flexDirection:'row', justifyContent:'space-between'}}>
<Text style={{fontSize:18,color:'white'}}>RANGE</Text>
<Text style={{alignSelf:'flex-end',fontSize:18,left:100,color:'white'}}>min</Text>
</View>
<View style={{flexDirection:'row'}}>
<Text style={{fontSize:50,left:70,fontWeight:'bold',color:'white'}}>7:42</Text>
</View>
</View>
</View>
</View>

{/* Depth*/}
<View style={{top:10,width:"20%",justifyContent:'center',borderWidth:0.7,borderColor:'gray',borderRadius:10,padding:10}}> 
<View>
<View style={{flexDirection:'row', justifyContent:'space-between'}}>
<Text style={{fontSize:18,color:'white'}}>DEPTH</Text>
<Text style={{alignSelf:'flex-end',fontSize:18,color:'white'}}>m</Text>
</View>
<View style={{flexDirection:'row'}}>
<Text style={{fontSize:50,left:100,fontWeight:'bold',color:'white'}}>36.5</Text>

</View>
</View>
</View>
</View>
{/* capstan winches */}
<View style={{top:10,right:70}}>
<Neomorph
  inner // <- enable inner shadow
  darkShadowColor="#141414" // <- set this
  lightShadowColor="#2e2e2e"
  style={{
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 1,
    shadowColor: "white",
    shadowRadius: 3,
    borderRadius: 150,
    backgroundColor: '#141414',
    width:158,
    height:62,
    
    // ...include most of View/Layout styles
  }}
>
  <View style={{top:8,left:9}}>
<Switch
onValueChange={toggleSwitch6}
value={isEnabled6}
disabled={false}
activeText={'ON'}
inActiveText={'OFF'}
circleSize={35}
barHeight={45}
circleBorderWidth={25}
circleBorderInactiveColor={'#181818'}
circleBorderActiveColor={'#181818'}
backgroundActive={'#141414'}
backgroundInactive={'#141414'}
circleActiveColor={'green'}
circleInActiveColor={'gray'}
// renderInsideCircle={() => <CustomComponent />} // custom component to render inside the Switch circle (Text, Image, etc.)
changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
innerCircleStyle={{ width:75,height:57,alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
renderActiveText={true}
renderInActiveText={true}
switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
switchWidthMultiplier={4} // multiplied by the `circleSize` prop to calculate total width of the Switch
switchBorderRadius={26}
/>
</View>
  <Text style={{textAlign:'center',top:18,fontSize:18,color:'white'}}>capstan winches</Text>
</Neomorph>
</View>

</View>
{/* start/stop btn view*/}
<View  style={{flexDirection:'row',bottom:140,left:90}}>
{/* start btn */}
<View style={{flexDirection:'row'}}>
<Resetbtn  style={{padding:12,width:80,borderRadius:40,borderColor:bgColor1,borderWidth:5}}> 
 <Text style={{color:'white',fontSize:22,alignSelf:'center',fontWeight:'bold'}}
 onPress = {() => setBoth1()}>start</Text>
</Resetbtn>
{/* stop btn */}
<Resetbtn  style={{padding:12,width:80,borderRadius:40,borderColor:bgColor2,borderWidth:5,left:5}}> 
 <Text style={{color:'white',fontSize:22,alignSelf:'center',fontWeight:'bold'}}
 onPress = {() => setBoth2()}>stop</Text>
</Resetbtn>
</View>

</View>


{/* <View style={{height:2}} /> */}
{/* </ScrollView> */}
</View>
)
}
const styles = StyleSheet.create({
  image: {
    top:80
  },
});
export default UnderEngine;