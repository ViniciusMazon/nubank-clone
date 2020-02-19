import React from 'react';
import QRCode from 'react-native-qrcode-svg';
import { MaterialIcons } from '@expo/vector-icons';

import {
  Container,
  Code,
  Nav,
  NavItem,
  NavText,
  SingOutButton,
  SingOutButtonText
} from './styles';

export default function Menu({ translateY }) {
  return (
    <Container style={{
      opacity: translateY.interpolate({
        inputRange: [0, 150],
        outputRange: [0, 1],
      })
    }}>
      <Code>
        <QRCode
          value={"https://github.com/ViniciusMazon"}
          size={90}
          color="#8B10AE"
          logoBackgroundColor="#FFF"
        />
      </Code>

      <Nav>
        <NavItem>
          <MaterialIcons name="help-outline" size={20} color="#FFF" />
          <NavText>Me ajuda</NavText>
        </NavItem>
        <NavItem>
          <MaterialIcons name="person-outline" size={20} color="#FFF" />
          <NavText>Perfil</NavText>
        </NavItem>
        <NavItem>
          <MaterialIcons name="credit-card" size={20} color="#FFF" />
          <NavText>Configurar cartão</NavText>
        </NavItem>
        <NavItem>
          <MaterialIcons name="smartphone" size={20} color="#FFF" />
          <NavText>Configuração do app</NavText>
        </NavItem>
      </Nav>

      <SingOutButton onPress={() => { }}>
        <SingOutButtonText>Sair do App</SingOutButtonText>
      </SingOutButton>
    </Container>
  );
}
