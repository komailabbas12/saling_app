import React, { useState,useEffect } from "react";
import {View,Text,StatusBar,Image} from 'react-native';
import { Switch } from 'react-native-switch';
import { Shadow, Neomorph } from 'react-native-neomorph-shadows';
import NeumorphismButton from '../src/neumorphism-button';
import slyderLogo from '../images/slyderlogo.png';
import yellowTri from '../images/yellowtriangle.png';
import grayTri from '../images/graytriangle.png'

function WelcomeScreen(){

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
    return(
        <View style={{height:'100%',width:'100%',backgroundColor:'#242424'}}>
           <StatusBar hidden />
         <Image
         style={{alignSelf:'center',top:50}}
         source={slyderLogo}
         />
         <View style={{position:'absolute',alignSelf:'flex-end',marginTop:30,right:40}}>
        <NeumorphismButton style={{padding: 25,borderColor:'#7b0000',borderWidth:5,borderRadius:40,height:120}}> 
        <Text style={{color:'white',fontSize:30,alignSelf:'center',top:5}} >MOB</Text>
        </NeumorphismButton>
        </View>
        <View>
        <Text style={{fontSize:35,fontWeight:'bold',left:600,top:90}}>Welcome</Text>
        </View>
        <View style={{flexDirection:'row',marginLeft:150}}>
 {/*shadow drop neomorph switch system check*/}
 <View style={{top:150,marginLeft:100}}>
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
<Text style={{textAlign:'center',top:5,fontSize:20,color:'white',right:125}}>system check</Text>
<View style={{flexDirection:'column',top:30,right:100}}>
<View style={{backgroundColor:'black',width:'110%',height:2,top:30,right:30}}/>
<View style={{flexDirection:'row',top:40,right:20}}>
<Image
style={{width:30,height:30}}
source={grayTri}
/>
<Text style={{color:'gray',fontSize:25,left:10}}>ALL ELECTRIC SYSTEMS ARE OK?</Text>
</View>
<View style={{backgroundColor:'black',width:'110%',height:2,top:50,right:30}}/>
</View>
</View>

 {/*shadow drop neomorph switch power up*/}
 <View style={{top:150,right:80}}>
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
<Text style={{textAlign:'center',top:5,fontSize:20,color:'white'}}>power up</Text>
</View>

 {/*shadow drop neomorph switch air con*/}
 <View style={{top:150,left:100}}>
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
<Text style={{textAlign:'center',top:5,fontSize:20,color:'white',right:20}}>air con</Text>
<View style={{flexDirection:'column',top:30}}>
<View style={{backgroundColor:'black',width:'120%',height:2,top:30,right:30}}/>
<View style={{flexDirection:'row',top:40,right:20}}>
<Image
style={{width:40,height:40}}
source={yellowTri}
/>
<Text style={{color:'gray',fontSize:25}}>seacock open?</Text>
</View>
<View style={{backgroundColor:'black',width:'120%',height:2,top:50,right:30}}/>
</View>
</View>
<View style={{flexDirection:'row'}}>
<View style={{flexDirection:'column'}}>
<View style={{ height: '80%',width: 1,backgroundColor: 'gray',marginLeft:200,bottom:10,top:100}}></View>
      </View>
<Text style={{left:200,fontSize:36,top:50,fontWeight:'bold'}}>GOODBYE</Text>
<View style={{flexDirection:'column',marginLeft:40}}>
 {/*shadow drop neomorph switch in harbor*/}
 <View style={{top:150}}>
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
<Text style={{textAlign:'center',top:5,fontSize:20,color:'white'}}>in harbor</Text>
</View>
 {/*shadow drop neomorph switch in at anchor*/}
 <View style={{top:200}}>
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
</Neomorph>
<Text style={{textAlign:'center',top:5,fontSize:20,color:'white'}}>at anchor</Text>
</View>

 {/*shadow drop neomorph switch in long term*/}
 <View style={{top:250}}>
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
</Neomorph>
<Text style={{textAlign:'center',top:5,fontSize:20,color:'white'}}>long term</Text>
</View>


</View>
</View>
</View>
        </View>
    )
}
export default WelcomeScreen;