// Very bare bones- need to have their full schedule in a scrollable view
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import HelpButton from '@/components/HelpButton';

const helpText = `This page displays your full schedule for the day. 
                  All appointments, reminders, and important events will be listed here in a scrollable view.
                  Check this page daily to stay on top of your activities.`

export default function VitalsPage() {
  const router = useRouter();

  return (
    // Title needs to be moved up to the top of the page
    <View style={styles.container}>
      <HelpButton input={helpText} />

      <Text style={styles.text}>Schedule</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  helpButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    width: 60,
    height: 60,
    backgroundColor: '#FF0000', // Red
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  helpButtonText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
});