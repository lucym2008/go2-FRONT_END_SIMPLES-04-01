// 'INDEX DE LOGIN'
// 'PAGINA DE CRIAR CONTA'
import React, { useState } from 'react';

import { Text, View, TextInput, TouchableOpacity , Alert} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter, Link } from 'expo-router'; //TENTANDO FAZER A NAVEGAÇÃO
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../src/firebase/config'

import { StyleSheet } from 'react-native';
import { Botão } from '../src/COMPONENTS/Botão';
import { colors } from '../src/COMPONENTS/global';
import  LoadingModal  from '../src/utils/LoadingModal'


export default function Create() {
  const router = useRouter(); // Hook para navegação

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onRegisterPress = async () => {
    if (password !== confirmPassword) {
        alert("Passwords don't match.");
        return;
    }

    setIsLoading(true);
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const uid = userCredential.user.uid;
        const data = {
            id: uid,
            email,
            fullName,
        };
        
        await setDoc(doc(db, 'users', uid), data);
        
        // Navegar para a página "Home"
        router.replace('/dashboard')
      
    } catch (error) {
        alert('VOLE PASSOU');
    } finally {
        setIsLoading(false);
    }
}
  return (
    <View style={styles.container}>

      <View style={styles.cardTop}>
      </View>

      <View style={styles.cardBottom}>

      <Text style={styles.Title}>Criar conta</Text>
          <View style={styles.Card}>

            <TextInput
                style={styles.input}
                placeholder="Digite seu nome"
                onChangeText={(text) => setFullName(text)}
                value={fullName}
            />

            <TextInput
                style={styles.input}
                placeholder="Digite seu email"
                onChangeText={(text) => setEmail(text)}
                value={email}
            />

            <TextInput
                style={styles.input}
                placeholder="Digite sua senha"
                onChangeText={(text) => setPassword(text)}
                value={password}
            />

            <TextInput
                style={styles.input} 
                placeholder="voçe busca representar uma empresa?"
                onChangeText={(text) => setConfirmPassword(text)}
                value={confirmPassword}
            />

            <Botão
            activeOpacity={.80}
            onPress={onRegisterPress}>
              <Text style={styles.btnText}>Entrar</Text>
            </Botão>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#242424"
  },
  cardTop:{
    width: "100%",
    height: "10%",
  },
  icon:{
    top: 70,
    left: 40,
  },
  cardBottom:{
    width: "100%",
    height: "90%",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderTopLeftRadius: 130,
    padding: 20
  },
  Card:{
    width: "90%",
    height: 200,
    alignItems: "center",
    marginTop: 40,
  },
  Title: {
    fontSize: 45,
    marginTop: 20,
    color: "#000"
  },
  input: {
    width: 330,
    marginTop: 20,
    height: 50,
    paddingLeft: 20,
    color: "#000",
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 0,
    marginBottom: 15,
    fontSize: 16,
  },
  botao:{
    width: 330,
    height: 60,
    backgroundColor: colors.yellow,
    borderRadius: 10,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText:{
    color: "#000",
    fontSize: 18,
  },
  textBottom:{
    fontSize: 17,
    top: "50%",
  },

  links:{
    color: "#ACA465",
  },
})