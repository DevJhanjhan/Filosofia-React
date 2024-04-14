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
Abaixo temos a criação de um compoenente React Native denominado RedButton.

`render(){} é uma função que ajuda a exibir componenetes retornados`

`return() é uma função que ajuda a retornar.`

`<View></View> é um componente para visualização nativa.`

`<Button></Button> é um componente para criar botão.`

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
Abaixo temos a exportação de uma classe padrão denominada **App (principal compoenente do qual todos os outros componenetes devem estar dentro.)** que estende a classe **Compoenent**.

`render(){} é uma função que ajuda a exibir componenetes retornados` 

`return() é uma função que ajuda a retornar.` 

`<View></View> é um componente para visualização nativa.`

`<Text></Text> é um componente para criar texto.`

`style={{}} é um atributo para estilizar o componente. Você pode ver dois {{ }} porque um {} diz que escreveremos código javascript. O outro {} é para o objeto json.
`

`<RedButton /> Chama uma classe externa denominada RedButton.`

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

`Uma função de renderização pode retornar apenas um componente React. Se houver mais de um componente React que precise ser retornado, eles devem ser aninhados dentro de View`
