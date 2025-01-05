//PÁGINA RESPONSÁVEL PELO 'INDEX DE DASHBOARD - TELA DE PERFIL'
import { Text, View, StyleSheet } from 'react-native';
import { Botão } from '../../../src/COMPONENTS/Botão';
import { colors } from '../../../src/COMPONENTS/global';

import { router, useRouter } from 'expo-router'; //TENTANDO FAZER A NAVEGAÇÃO

export default function Account() {
    return(
        <View style={styles.container}>
            <Botão 
            // onPress={() => {router.replace('')}} 
            >
                <Text style={{color: "#fff", fontSize: 20}}>Sair da conta</Text>
            </Botão>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.back,
        alignItems: 'center',
        justifyContent: 'center',
    }
});