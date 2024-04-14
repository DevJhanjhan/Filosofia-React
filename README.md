#53 Filosofia React

O React Native permite a criação de aplicativos formados por vários componentes.
Uma classe componente (**Component**) é estabelecida na biblioteca react. Logo, na linha 1 temos a importação do módulo React e desestruturação para extração da classe **Component**. Assim podemos usar a classe sem precisar fazer referência a 'React.Component'.
import React, {Component} from 'react';


```javascript
// Este trecho de código demonstra um exemplo básico de um aplicativo React Native.
// Ele cria um componente principal chamado `App` que contém um texto em negrito e um botão vermelho.
// O botão é implementado como um componente separado chamado `RedButton`.
// O componente `App` está centralizado na tela e usa estilos para isso.
import React, {Component} from 'react';
import {
  Button, View, Text
} from 'react-native';

// Definição do componente RedButton
class RedButton extends Component{
  render(){
    return(
      <View style={{width:'100%'}}>
        <Button color='red' title='Clique em mim'></Button>
      </View>
    );
  }
}

// Definição do componente principal App
export default class App extends Component{
  render(){
    return(
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontWeight:'bold'}}>Meu segundo App</Text>
        <RedButton/>
      </View>
    );
  }
}
```
