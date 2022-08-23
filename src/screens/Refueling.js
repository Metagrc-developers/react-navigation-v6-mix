import React, {useContext, useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import DatePicker from 'react-native-date-picker';

import InputField from '../components/InputField';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import CustomButton from '../components/CustomButton';
import {API_BASE_URL} from '../context/Config';
import {AuthContext} from '../context/AuthContext';

const Refueling = ({navigation}) => {
  const {userToken} = useContext(AuthContext);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [dobLabel, setDobLabel] = useState('Date of Birth');
  const [isLoading, setIsLoading] = useState(false);
  const [vehicles, setVehicles] = useState(null);
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': userToken,
    },
  };
  const getVehicles = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${API_BASE_URL}vms/vehicle/list-all`,
        config,
      );
      setVehicles(response.data.result);
      if (vehicles) {
        console.log('vehicle', vehicles);
      }
    } catch (error) {
      console.log('error', error);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    getVehicles();
  }, []);
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal: 25}}>
        {/* <View style={{alignItems: 'center'}}>
          <RegistrationSVG
            height={300}
            width={300}
            style={{transform: [{rotate: '-5deg'}]}}
          />
        </View> */}

        <Text
          style={{
            fontFamily: 'Roboto-Medium',
            fontSize: 15,
            fontWeight: '500',
            color: '#333',
            marginBottom: 30,
            alignItems: 'baseline',
          }}>
          Add Fuel Details
        </Text>
        <InputField
          label={'Vehicle'}
          icon={
            <Ionicons
              name="car-sport-outline"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
        />

        <InputField
          label={'Meter Reading(KM)'}
          icon={
            <Ionicons
              name="speedometer-outline"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
          keyboardType="email-address"
        />

        <InputField
          label={'Amount (Rs)'}
          icon={
            <Ionicons
              name="ios-cash-outline"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
        />

        <InputField
          label={'Qty (Liters)'}
          icon={
            <FontAwesome
              name="thermometer-quarter"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
        />
        <InputField
          label={'Filling Station'}
          icon={
            <MaterialIcons
              name="local-gas-station"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
        />

        <InputField
          label={'Description'}
          icon={
            <Ionicons
              name="ios-book-outline"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
        />
        {/* <View
          style={{
            flexDirection: 'row',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 30,
          }}>
          <Ionicons
            name="calendar-outline"
            size={20}
            color="#666"
            style={{marginRight: 5}}
          />
          <TouchableOpacity onPress={() => setOpen(true)}>
            <Text style={{color: '#666', marginLeft: 5, marginTop: 5}}>
              {dobLabel}
            </Text>
          </TouchableOpacity>
        </View>

        <DatePicker
          modal
          open={open}
          date={date}
          mode={'date'}
          maximumDate={new Date('2005-01-01')}
          minimumDate={new Date('1980-01-01')}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
            setDobLabel(date.toDateString());
          }}
          onCancel={() => {
            setOpen(false);
          }}
        /> */}

        <CustomButton label={'Submit Data'} onPress={() => {}} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Refueling;
