import AsyncStorage from "@react-native-async-storage/async-storage";

async function setData(key, value){
  try{
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  }
  catch(e){
    console.log(e);
  }
}

async function getData(key){
  try{
    const jsonValue = await AsyncStorage.getItem(key);
    const parse = JSON.parse(jsonValue);
    return parse; 
  }
  catch(e){
    console.log(e);
  }
}

export {setData, getData};