#53 Filosofia React

O React Native permite a criação de aplicativos formados por vários componentes.
Uma classe componente (**Component**) é estabelecida na biblioteca react. Logo, na linha 1 temos a importação do módulo React e desestruturação para extração da classe **Component**. Assim podemos usar a classe sem precisar fazer referência a 'React.Component'.

```javascript
import React, {Component} from 'react';
```
Na linha 2  temos a importação de componentes fundamentais para o desenvolviemnto de interfaces de aplicativos do módulo react-native.
```javascript
import { Button, View, Text } from 'react-native';
```

```javascript
class RedButton extends Component
{
render() {
    return (
      <View style={{ width: '100%' }}>
        <Button color="red" title="Clique em mim"></Button>
      </View>
    );
  }
}
```
```javascript
export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontWeight: 'bold' }}>Meu segundo App</Text>
        <RedButton />
      </View>
    );
  }
}
```
