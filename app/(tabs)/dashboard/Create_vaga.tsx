//PÁGINA RESPONSÁVEL PELO 'INDEX DE DASHBOARD - TELA DE PERFIL'
import { Text, View, StyleSheet, Touchable, Pressable, Alert } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';

import { colors } from '../../../src/COMPONENTS/global';
import { InputWhite } from '../../../src/COMPONENTS/Input';
import { Botão } from '../../../src/COMPONENTS/Botão';
import { TextArea } from '../../../src/COMPONENTS/TextArea';


export default function Create_vaga() {

  
    const EnterCriarVaga = () => {
      router.push('/CriarVaga')
    }; 
    const EnterCriarCurso = () => {
      router.push('/CriarCurso')
    }; 
    const EnterCriarStartup = () => {
      router.push('/CriarStartup')
    }; 
  
      return(
      <View style={styles.container}>
  
          <View style={styles.box}>
            
          <Text style={styles.Title}>Criação de Proposta</Text>

              <Botão onPress={EnterCriarVaga}>
                <Text style={{color: "#fff", fontSize: 20}}>Cria vaga CLT</Text>
              </Botão>
              <Botão onPress={EnterCriarStartup}>
                <Text style={{color: "#fff", fontSize: 20}}>Cria vaga Startup</Text>
              </Botão>
              <Botão onPress={EnterCriarCurso}>
                <Text style={{color: "#fff", fontSize: 20}}>Cria vaga de curso</Text>
              </Botão>
          </View>
      </View>
      );
  }
  
  const styles = StyleSheet.create({
      container: {
          flex: 1,
          backgroundColor: colors.back,
          alignItems: 'center',
          justifyContent: 'flex-start',
      },
      box:{
          width: "100%",
          top: 10,
          height: "40%",
          alignItems: 'center',
      },
      Title:{
        fontSize: 40,
        color: colors.titleW,
        marginBottom: 50,
      },
      SubTitle:{
        fontSize: 24,
        color: colors.Text,
        marginBottom: 10,
      },
  });