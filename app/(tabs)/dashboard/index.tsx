import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Text, Button } from 'react-native';
import { Router } from 'expo-router';

import { colors } from '../../../src/COMPONENTS/global';
import { Botão2 } from '../../../src/COMPONENTS/Botão';
import { useRouter } from 'expo-router';


export default function index(){
  const router = useRouter(); // Hook para navegação

  const Criar1 = () =>{
    router.push('Cursos')
  }
  const Criar2 = () =>{
    router.replace('Cursos')
  }
  const Criar3 = () =>{
    router.replace('Create_vaga')
  }
  return(
    <View style={styles.container}>
      <View style={styles.TopArea}>
        <Text style={styles.TitleTop}>Go 2 Work</Text>
        <Text style={styles.description}>Aqui vc podera procurar sua vaga de emprego clt ou frellancer,
            e ate mesmo se inscrever em um curso para aumentar seu conhecimento.</Text>
        <View style={styles.sub}>
            <Text style={styles.SubTitle}>Opções de inscrição</Text>
              <Botão2 onPress={Criar1}>
                <Text style={{color: "#fff", fontSize: 17}}>Vagas de emprego ClT ou freelancer</Text>
              </Botão2>
              <Botão2 onPress={Criar2}>
                <Text style={{color: "#fff", fontSize: 17}}>Cursos profissionalizantes</Text>
              </Botão2>
        </View>
        <View style={styles.sub}>
            <Text style={styles.SubTitle}>Criar vaga</Text>
            <Botão2 onPress={Criar3}>
                <Text style={{color: "#fff", fontSize: 17}}>Escolha oque criar</Text>
            </Botão2>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.back,
  },
  TopArea:{
    width: "100%",
    height: 340,
    alignItems: "center",
  },
  TitleTop:{
    fontSize: 55,
    color: "#ffffff",
    margin: 15,
  },
  description:{
    color: colors.Text,
    textAlign: "justify",
    paddingInline: 16,
    paddingBottom: 20,
    fontSize: 16,
  },
  sub:{
    paddingTop: 20,
    width: "100%",
    maxHeight: 230,
    backgroundColor: colors.back,
    alignItems: "center"
  },
  SubTitle:{
    color: colors.titleW,
    fontSize: 20,
    marginLeft: 20
  }
});
