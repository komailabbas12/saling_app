import React, { useState } from 'react';
import {View, Text,ScrollView,Dimensions,TouchableOpacity,Alert} from  'react-native';
import NeumorphismButton from './src/neumorphism-button';
import Resetbtn from './src/resetbtn';
import { Switch } from 'react-native-switch';
import { Shadow, Neomorph } from 'react-native-neomorph-shadows';
import { color } from 'react-native-reanimated';





function App (){
    const [isEnabled1, setIsEnabled1] = useState(false);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);

    const [isEnabled2, setIsEnabled2] = useState(false);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

    const [isEnabled3, setIsEnabled3] = useState(false);
    const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);

    const [isEnabled4, setIsEnabled4] = useState(false);
    const toggleSwitch4 = () => setIsEnabled4(previousState => !previousState);
    const screenHeight = Dimensions.get('window').height  
 
    //set log 1 value
    const [myText1, setMyText1] = useState("11.5");
    const [myText2, setMyText2] = useState("13.5");
    const [bgColor1, setBgColor1] = useState('white');
    const [bgColor2, setBgColor2] = useState('white');

    const setBoth1 = () => {
      setBgColor1('red');
      setBgColor2('white');
    };
    
    const setBoth2 = () => {
      setBgColor1('white');
      setBgColor2('red');
    };

return(    
  
<View>
  <ScrollView>
    {/*shadow drop neomorph switch equipment*/}
    <View style={{position:'absolute',top:10,left:3}}>
    <Neomorph
  inner // <- enable inner shadow
  darkShadowColor="#141414" // <- set this
  lightShadowColor="#474747"
  style={{
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 1,
    shadowColor: "white",
    shadowRadius: 3,
    borderRadius: 25,
    backgroundColor: '#141414',
    width:95.5,
    height:34,
    
    // ...include most of View/Layout styles
  }}
>
  <View style={{top:3,left:3}}>
<Switch
onValueChange={toggleSwitch1}
value={isEnabled1}
disabled={false}
activeText={'On'}
inActiveText={'Off'}
circleSize={30}
barHeight={30}
circleBorderWidth={14}
circleBorderInactiveColor={'#141414'}
circleBorderActiveColor={'#141414'}
backgroundActive={'#202020'}
backgroundInactive={'#202020'}
circleActiveColor={'green'}
circleInActiveColor={'gray'}
// renderInsideCircle={() => <CustomComponent />} // custom component to render inside the Switch circle (Text, Image, etc.)
changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
innerCircleStyle={{ width:40,alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
renderActiveText={true}
renderInActiveText={true}
switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
switchWidthMultiplier={3} // multiplied by the `circleSize` prop to calculate total width of the Switch
switchBorderRadius={15}
/>
</View>
  <Text style={{textAlign:'center',top:5}}>nav equipment</Text>
</Neomorph>
</View>
{/*shadow drop neomorph propulsion*/}
  <View style={{position:'absolute',top:70,left:3}}>
  <Neomorph
  inner // <- enable inner shadow
  darkShadowColor="#141414" // <- set this
  lightShadowColor="#474747"
  style={{
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 1,
    shadowColor: "white",
    shadowRadius: 3,
    borderRadius: 25,
    backgroundColor: '#141414',
    width:95.5,
    height:34,
    
    // ...include most of View/Layout styles
  }}
>
<View style={{top:3,left:3}}>
<Switch
onValueChange={toggleSwitch2}
value={isEnabled2}
disabled={false}
activeText={'On'}
inActiveText={'Off'}
circleSize={30}
barHeight={30}
circleBorderWidth={14}
circleBorderInactiveColor={'#141414'}
circleBorderActiveColor={'#141414'}
backgroundActive={'#202020'}
backgroundInactive={'#202020'}
circleActiveColor={'green'}
circleInActiveColor={'gray'}
// renderInsideCircle={() => <CustomComponent />} // custom component to render inside the Switch circle (Text, Image, etc.)
changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
innerCircleStyle={{ width:40,alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
renderActiveText={true}
renderInActiveText={true}
switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
switchWidthMultiplier={3} // multiplied by the `circleSize` prop to calculate total width of the Switch
switchBorderRadius={15}
/>
</View>
</Neomorph>
<Text style={{textAlign:'center',top:5}}>propulsion</Text>
  </View>
{/*MOB BUTTON */}
<View style={{position:'absolute',alignSelf:'flex-end',top:10,right:20}}>
<NeumorphismButton style={{padding: 15,height:55}}> 
 <Text style={{}} >MOB</Text>
</NeumorphismButton>
   {/*shadow drop neomorph switch winches*/}
   <View style={{position:'absolute',top:150}}>
    <Neomorph
  inner // <- enable inner shadow
  darkShadowColor="#141414" // <- set this
  lightShadowColor="#474747"
  style={{
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 1,
    shadowColor: "white",
    shadowRadius: 3,
    borderRadius: 25,
    backgroundColor: '#141414',
    width:95.5,
    height:34,
    
    // ...include most of View/Layout styles
  }}
>
  <View style={{top:3,left:3}}>
<Switch
onValueChange={toggleSwitch3}
value={isEnabled3}
disabled={false}
activeText={'On'}
inActiveText={'Off'}
circleSize={30}
barHeight={30}
circleBorderWidth={14}
circleBorderInactiveColor={'#141414'}
circleBorderActiveColor={'#141414'}
backgroundActive={'#202020'}
backgroundInactive={'#202020'}
circleActiveColor={'green'}
circleInActiveColor={'gray'}
// renderInsideCircle={() => <CustomComponent />} // custom component to render inside the Switch circle (Text, Image, etc.)
changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
innerCircleStyle={{ width:40,alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
renderActiveText={true}
renderInActiveText={true}
switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
switchWidthMultiplier={3} // multiplied by the `circleSize` prop to calculate total width of the Switch
switchBorderRadius={15}
/>
</View>
  <Text style={{textAlign:'center',top:5}}>winches</Text>
</Neomorph>
</View>
   {/*shadow drop neomorph switch windlass*/}
   <View style={{position:'absolute',top:213}}>
    <Neomorph
  inner // <- enable inner shadow
  darkShadowColor="#141414" // <- set this
  lightShadowColor="#474747"
  style={{
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 1,
    shadowColor: "white",
    shadowRadius: 3,
    borderRadius: 25,
    backgroundColor: '#141414',
    width:95.5,
    height:34,
    
    // ...include most of View/Layout styles
  }}
>
  <View style={{top:3,left:3}}>
<Switch
onValueChange={toggleSwitch4}
value={isEnabled4}
disabled={false}
activeText={'On'}
inActiveText={'Off'}
circleSize={30}
barHeight={30}
circleBorderWidth={14}
circleBorderInactiveColor={'#141414'}
circleBorderActiveColor={'#141414'}
backgroundActive={'#202020'}
backgroundInactive={'#202020'}
circleActiveColor={'green'}
circleInActiveColor={'gray'}
// renderInsideCircle={() => <CustomComponent />} // custom component to render inside the Switch circle (Text, Image, etc.)
changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
innerCircleStyle={{ width:40,alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
renderActiveText={true}
renderInActiveText={true}
switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
switchWidthMultiplier={3} // multiplied by the `circleSize` prop to calculate total width of the Switch
switchBorderRadius={15}
/>
</View>
  <Text style={{textAlign:'center',top:5}}>windlass</Text>
</Neomorph>
</View>

</View>

{/*north west angles at the top of the screen */} 
<View style={{justifyContent:'center',alignItems:'center'}}>
<View style={{borderWidth:0.7,top:10
,borderColor:'gray',borderRadius:10,padding:10}} >  
<View style={{ flexDirection:'row', justifyContent: 'space-between'}}>
<Text>POS</Text>
<Text style={{alignSelf:'flex-end'}}>GPS</Text>
</View>
<Text style={{fontSize:18,fontWeight:'bold'}}>N 38°54'51.4" | W 006°51'50.0"</Text>
</View>
</View>

{/*row views*/}
<View style={{flexDirection:'row',justifyContent:'space-between'}}>
{/*log 1, log 2, time */}
<View style={{marginLeft:"14%",width:"16%",padding:16,flexDirection:'column',borderWidth:0.7,borderColor:'gray',borderRadius:10,top:30}}>
{/* reset button */}
<View  style={{position:'absolute',right:90,top:30}}>
<TouchableOpacity
onPress = {() => Alert.alert(
  '',
  'Are you sure you want to Reset?',  
  [
     {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
     {text: 'OK', onPress: () => setMyText1("0.0")},
  ],
  { cancelable: false }
)}
// onPress = {() => setMyText1("0.0")}
>  
<Resetbtn  style={{padding:6}}> 
 <Text style={{}} >reset</Text>
</Resetbtn>
</TouchableOpacity>
</View>
{/* reset button */}
<View style={{position:'absolute',right:90,top:95}}>
<TouchableOpacity
onPress = {() => Alert.alert(
  '',
  'Are you sure you want to Reset?',  
  [
     {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
     {text: 'OK', onPress: () => setMyText2("0.0")},
  ],
  { cancelable: false }
)}>
<Resetbtn style={{padding:6}}> 
 <Text style={{}} >reset</Text>
</Resetbtn>
</TouchableOpacity>
</View>
<View>
<View style={{flexDirection:'row', justifyContent:'space-between'}}>
<Text>LOG 1</Text>
<Text style={{alignSelf:'flex-end'}}>nm</Text>
</View>
</View>
<Text style={{fontSize:21,marginLeft:20,fontWeight:'bold',top:8}}>{myText1}</Text>
<View style={{height:1,top:20,alignSelf:'center',width:"90%",backgroundColor: 'gray',flexDirection:'row'}}></View>
<View style={{top:20}}>  
<View style={{flexDirection:'row', justifyContent:'space-between'}}>
<Text>LOG 2</Text>
<Text style={{alignSelf:'flex-end'}}>nm</Text>
</View>
<Text style={{fontSize:21,marginLeft:20,fontWeight:'bold',top:5}}>{myText2}</Text>
</View>
<View style={{height:1,top:30,alignSelf:'center',width:"90%",backgroundColor: 'gray',flexDirection:'row'}}></View>
<View style={{top:20}}>  
<View style={{flexDirection:'row', justifyContent:'space-between',top:10}}>
<Text>time</Text>
<Text style={{alignSelf:'flex-end'}}>local</Text>
</View>
<Text style={{fontSize:20,marginLeft:0,fontWeight:'bold',top:20}}>12:07:03</Text>
</View>
</View>
{/*speed and sog*/}
<View style={{alignItems:'center'}}>
<View style={{justifyContent:'center',alignItems:'center',flexDirection:'row',borderWidth:0.7,borderColor:'gray',borderRadius:10,padding:10,top:30}}> 
<View>
<View style={{flexDirection:'row', justifyContent:'space-between'}}>
<Text>Speed</Text>
<Text style={{alignSelf:'flex-end'}}>kn</Text>
</View>
<View style={{flexDirection:'row'}}>
<Text style={{fontSize:22,marginLeft:50,fontWeight:'bold'}}>9.9</Text>
<Text>         </Text>
</View>
</View>
<View style={{ height: '100%',width: 1,backgroundColor: 'gray',marginLeft:5}}></View>
<View>
<View style={{marginLeft:20,flexDirection:'row', justifyContent:'space-between'}}>
<Text>SOG</Text>
<Text style={{alignSelf:'flex-end'}}>kn</Text>
</View>
<View style={{flexDirection:'row'}}>
<Text style={{fontSize:22,marginLeft:50,fontWeight:'bold'}}>13.6</Text>
<Text>         </Text>
</View>
</View>
</View>
</View>
{/* dtw, ttw, eta */}
<View style={{marginRight:"14%",width:"16%",padding:15,flexDirection:'column',borderWidth:0.7,borderColor:'gray',borderRadius:10,top:30}}>
<View>
<View style={{flexDirection:'row', justifyContent:'space-between'}}>
<Text>DTW</Text>
<Text style={{alignSelf:'flex-end'}}>nm</Text>
</View>
</View>
<Text style={{fontSize:21,marginLeft:20,fontWeight:'bold',top:5}}>37.3</Text>
<View style={{top:30,height:1,top:15,alignSelf:'center',width:"90%",backgroundColor: 'gray',flexDirection:'row'}}></View>

<View style={{top:20}}>  
<View style={{flexDirection:'row', justifyContent:'space-between'}}>
<Text>TTW</Text>
<Text style={{alignSelf:'flex-end'}}>hrs</Text>
</View>
<Text style={{fontSize:21,marginLeft:20,fontWeight:'bold'}}>04:00</Text>
</View>
<View style={{height:1,top:25,alignSelf:'center',width:"90%",backgroundColor: 'gray',flexDirection:'row'}}></View>
<View style={{top:10}}>  
<View style={{flexDirection:'row', justifyContent:'space-between',top:20}}>
<Text>ETA</Text>
<Text style={{alignSelf:'flex-end'}}>24h</Text>
</View>
<Text style={{fontSize:21,marginLeft:20,fontWeight:'bold',top:25}}>16:07</Text>
</View>
</View>
</View> 
  {/* controller and engine bb tab */}
<View style={{flexDirection:'row'}}>
<Text style={{left:20,top:42}}>controller</Text>
<Text style={{left:95,top:42}}>engine bb</Text></View>
<View style={{flexDirection:'row',left:10,top:50 }}>
<Neomorph
  inner // <- enable inner shadow
  darkShadowColor="#141414" // <- set this
  lightShadowColor="#474747"
  style={{
    shadowOffset: {width: 3.9, height: 3.9},
    shadowOpacity: 1,
    shadowColor: "white",
    shadowRadius: 6,
    borderRadius: 25,
    backgroundColor: '#141414',
    width:84,
    height:35,
      
    // ...include most of View/Layout styles
  }}
>
  <View style={{flexDirection:'row'}}>
<Text style={{marginLeft:21,marginTop:5}}>97</Text>
<View style={{ height: '80%',marginTop:5,width: 1,backgroundColor: '#474747',marginLeft:5}}></View>
<Text style={{marginLeft:5,marginTop:5}}>°C</Text>
</View>
</Neomorph>
<Neomorph
  inner // <- enable inner shadow
  darkShadowColor="#141414" // <- set this
  lightShadowColor="#474747"
  style={{
    shadowOffset: {width: 3.9, height: 3.9},
    shadowOpacity: 1,
    shadowColor: "white",
    shadowRadius: 6,
    borderRadius: 25,
    backgroundColor: '#141414',
    width:84,
    height:35,
    marginLeft:5
      
    // ...include most of View/Layout styles
  }}
>
  <View style={{flexDirection:'row'}}>
<Text style={{marginLeft:21,marginTop:5}}>135</Text>
<View style={{ height: '80%',marginTop:5,width: 1,backgroundColor: '#474747',marginLeft:5}}></View>
<Text style={{marginLeft:5,marginTop:5}}>°C</Text>
</View>
</Neomorph>
<Neomorph
  inner // <- enable inner shadow
  darkShadowColor="#141414" // <- set this
  lightShadowColor="#474747"
  style={{
    shadowOffset: {width: 3.9, height: 3.9},
    shadowOpacity: 1,
    shadowColor: "white",
    shadowRadius: 6,
    borderRadius: 25,
    backgroundColor: '#141414',
    width:84,
    height:35,
    left:5  
    // ...include most of View/Layout styles
  }}
>
  <View style={{flexDirection:'row'}}>
<Text style={{marginLeft:21,marginTop:5}}>3.9</Text>
<View style={{ height: '80%',marginTop:5,width: 1,backgroundColor: '#474747',marginLeft:5}}></View>
<Text style={{marginLeft:5,marginTop:5}}>KW</Text>
</View>
</Neomorph>
</View>

{/* engine stb and controller tab*/}
<View style={{flexDirection:'row',justifyContent:'flex-end'}}>
<Text style={{right:80,bottom:12}}>engine stb</Text>
<Text style={{right:50,bottom:12}}>controller</Text></View>
<View style={{flexDirection:'row',justifyContent:'flex-end',bottom:5 }}>
<Neomorph
  inner // <- enable inner shadow
  darkShadowColor="#141414" // <- set this
  lightShadowColor="#474747"
  style={{
    shadowOffset: {width: 3.9, height: 3.9},
    shadowOpacity: 1,
    shadowColor: "white",
    shadowRadius: 6,
    borderRadius: 25,
    backgroundColor: '#141414',
    width:84,
    height:35,
    right:10  
    // ...include most of View/Layout styles
  }}
>
  <View style={{flexDirection:'row'}}>
<Text style={{marginLeft:21,marginTop:5}}>3.5</Text>
<View style={{ height: '80%',marginTop:5,width: 1,backgroundColor: '#474747',marginLeft:5}}></View>
<Text style={{marginLeft:5,marginTop:5}}>kw</Text>
</View>
</Neomorph>
<Neomorph
  inner // <- enable inner shadow
  darkShadowColor="#141414" // <- set this
  lightShadowColor="#474747"
  style={{
    shadowOffset: {width: 3.9, height: 3.9},
    shadowOpacity: 1,
    shadowColor: "white",
    shadowRadius: 6,
    borderRadius: 25,
    backgroundColor: '#141414',
    width:84,
    height:35,
    right:5  
    // ...include most of View/Layout styles
  }}
>
  <View style={{flexDirection:'row'}}>
<Text style={{marginLeft:21,marginTop:5}}>135</Text>
<View style={{ height: '80%',marginTop:5,width: 1,backgroundColor: '#474747',marginLeft:5}}></View>
<Text style={{marginLeft:5,marginTop:5}}>°C</Text>
</View>
</Neomorph>
<Neomorph
  inner // <- enable inner shadow
  darkShadowColor="#141414" // <- set this
  lightShadowColor="#474747"
  style={{
    shadowOffset: {width: 3.9, height: 3.9},
    shadowOpacity: 1,
    shadowColor: "white",
    shadowRadius: 6,
    borderRadius: 25,
    backgroundColor: '#141414',
    width:84,
    height:35,
    // ...include most of View/Layout styles
  }}
>
  <View style={{flexDirection:'row'}}>
<Text style={{marginLeft:21,marginTop:5}}>97</Text>
<View style={{ height: '80%',marginTop:5,width: 1,backgroundColor: '#474747',marginLeft:5}}></View>
<Text style={{marginLeft:5,marginTop:5}}>KW</Text>
</View>
</Neomorph>
</View>

{/*generator toogle*/}
<View style={{top:20,left:10}}>
<Neomorph
  inner // <- enable inner shadow
  darkShadowColor="#141414" // <- set this
  lightShadowColor="#474747"
  style={{
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 1,
    shadowColor: "white",
    shadowRadius: 3,
    borderRadius: 25,
    backgroundColor: '#141414',
    width:95.5,
    height:34,
    
    // ...include most of View/Layout styles
  }}
>
  <View style={{top:3,left:3}}>
<Switch
onValueChange={toggleSwitch1}
value={isEnabled1}
disabled={false}
activeText={'On'}
inActiveText={'Off'}
circleSize={30}
barHeight={30}
circleBorderWidth={14}
circleBorderInactiveColor={'#141414'}
circleBorderActiveColor={'#141414'}
backgroundActive={'#202020'}
backgroundInactive={'#202020'}
circleActiveColor={'green'}
circleInActiveColor={'gray'}
// renderInsideCircle={() => <CustomComponent />} // custom component to render inside the Switch circle (Text, Image, etc.)
changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
innerCircleStyle={{ width:40,alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
renderActiveText={true}
renderInActiveText={true}
switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
switchWidthMultiplier={3} // multiplied by the `circleSize` prop to calculate total width of the Switch
switchBorderRadius={15}
/>
</View>
  <Text style={{textAlign:'center',top:5}}>generator</Text>
</Neomorph>
</View>
{/* start/stop btn view*/}
<View  style={{flexDirection:'row',top:50,left:5}}>
{/* start btn */}
<TouchableOpacity style={{
    borderRadius: 15,
    backgroundColor:bgColor1,alignSelf:'center',
    padding:1
    }}
onPress = {() => setBoth1()}
>  
 
 <Text style={{color:'white',backgroundColor:'#222222',borderColor:'black',textAlign:'center',padding:8,borderRadius:15}} >start</Text>
</TouchableOpacity>
{/* stop btn */}
<TouchableOpacity style={{left:10,
    borderRadius: 15,
    padding:1,
    backgroundColor:bgColor2,}}
onPress = {() => setBoth2()}>  

<Text style={{color:'white',backgroundColor:'#222222',borderColor:'black',textAlign:'center',padding:8,borderRadius:15}} >stop</Text>


</TouchableOpacity>
</View>
<View style={{height:100}} />
</ScrollView>
</View>
)
}

export default App;