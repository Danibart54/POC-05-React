  # POC-05-React

<img src="banner.jpg">

Projeto que mostra como criar um projeto Next.js e utilizar o React.


## Criação do Projeto

Para a criação do projeto next.js é necessario seguir uma sequencia de ações.

1.Instalar o node.js.

2.Após a instalação, ir no terminal do VS code e digitar "npx create-next-app@latest nome-do-projeto".

3.Apareceram algumas opções, configure da forma que quiser. Esta eu acho a melhor forma de configuração.

<img src="opcoes.PNG">


4.Para entrar no diretório digite " cd nome-do-projeto"

5.E para iniciar o servidor digite " npm run dev "

Para a execução do código de um "npm install " antes do " npm run dev"

## ReactJS 
Ele é uma biblioteca de JavaScript, criada pela Facebook, de código aberto para criar interfaces de usuário (UI) em aplicativos web ou a vídeos de reações em redes sociais.
Quando criar o projeto esse sera os arquivos que seram criados.

<img src="projeto2.PNG">

## Package.json 

O arquivo package.json é essencial em projetos Node.js e JavaScript, pois contém metadados sobre o projeto, como o nome, versão e descrição. Ele também lista as dependências necessárias para o funcionamento da aplicação, além de scripts que automatizam tarefas (como iniciar o servidor ou rodar testes). Este arquivo facilita a gestão e compartilhamento do projeto, garantindo que outras pessoas possam instalar as mesmas dependências e rodar o código corretamente.


## src/APP
No React, o arquivo src/App contém o primeiro componente do aplicativo, o App, e outras linhas de código.Cada arquivo ou subpasta dentro de app é mapeado automaticamente para uma rota correspondente na aplicação, simplificando a estrutura e o roteamento.Se houver um arquivo src/app/nome/page.js, a URL correspondente será http://localhost:3000 que é onde seu app , pagina ou projeto vai estar rodando.
No projeto de exemplo está:

### Pasta Sherk
A pasta shrek é outro site, que ao adicionar /Shrek na url vai para outra pagina. O site foi criada por ter a pasta Shrenk e um page.js dentro dela.

```function Shrek() {
    return (
        <div>
            <h1>Shrek</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPR3D8tZbjSu5Efx2mLj84KEUQFKnCbS0grg&s"/>
        </div>
    )
}

export default Shrek;//Exporta este componente para que possa ser utilizado em outros arquivos.
```

### Layout.js
Nesse ja terá codigos escritos que define um layout global com fontes personalizadas e configurações de meadados para a aplicação Next.js, utilizando o sistema de fontes locais e injeção de componentes filhos.t

### page.js
é um arquivo específico dentro de uma subpasta do app que define o conteúdo de uma rota. No Next.js, cada page.js dentro de uma pasta é responsável por renderizar a interface da rota correspondente. Nele onde vai colocar os codigos principais ou o codigo todo , como um main .
No codigo exemplo ele constrói uma página Home usando componentes e estilos específicos.
```
import Card from "../components/card/Card"; 
import styles from "./page.module.css";
import Menu from "../components/menu/Menu";

export default function Home() {
  return (
    <main>
      <Menu/>
      <h1 className={styles.titulo}>Qual filme é melhor?</h1>
      <section className={styles.filmes}>
        <Card url="https://br.web.img2.acsta.net/medias/nmedia/18/91/54/04/20150812.jpg"/>
        <Card url="https://play-lh.googleusercontent.com/QrSBQU8p6TijnsH2EfDpBfneddIP6JVYR4bSKyacA-cyIiYZQqdiryOTMkwqxxnfvfaL9UOhIo8-3XI2MWvQ"/>
      </section>
    </main>
  );
}
```
Os import são usados para trazer módulos, componentes, estilos ou outras dependências de arquivos externos para o arquivo atual. 


Nessa parte:
```
export default function Home() {
  return (
    <main> //Envolve todo o conteúdo principal da página.
      <Menu/> // um menu de navegação.
      <h1 className={styles.titulo}>Qual filme é melhor?</h1>
      <section className={styles.filmes}> //"styles.filmes}" CSS importado 
        <Card url="https://br.web.img2.acsta.net/medias/nmedia/18/91/54/04/20150812.jpg"/>
        <Card url="https://play-lh.googleusercontent.com/QrSBQU8p6TijnsH2EfDpBfneddIP6JVYR4bSKyacA-cyIiYZQqdiryOTMkwqxxnfvfaL9UOhIo8-3XI2MWvQ"/>
      </section>
    </main>
  );
```
Será uma função para criar a pagina principal , onde foi criado dois card (dentro do section ).

<img src= "filmes.jpg">

E é assim que fica nossa pagina.


### globals.css
O CSS Global aplica-se a toda a aplicação, ou seja, todos os elementos em qualquer página ou componente serão afetados por essas regras.

Ele é geralmente definido em um arquivo como globals.css, localizado na pasta src.

Ele é semelhante ao CSS tradicional, onde as classes e seletores aplicam estilos em nível global.

Bom para: reset de CSS, tipografia padrão, e estilos comuns que se aplicam em várias partes da aplicação.



Nessa parte:
```
body {
    background-color: lightblue;
}
```
Ele muda o corpo da pagina inteiro para cor azul claro, isso será aplicado para qualquer pagina ou componentes 

<img src="shrek.PNG">

Por isso ambas as paginas tem o mesmo fundo sem colocarmos em seu respectivo CSS.
 
### Page.module.css
Um CSS Módulo é usado para aplicar estilos localmente em um componente. Isso significa que os estilos definidos em um módulo só afetam o componente ao qual estão associados.

Arquivos de CSS Módulo têm a extensão .module.css e são importados diretamente dentro do componente onde os estilos serão usados.

Ao importar, Next.js gera classes únicas automaticamente, garantindo que não haja conflitos de nomes de classe entre diferentes componentes.


Nessa parte:
```
.filmes {
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
}

.titulo {
  display:flex;
  justify-content:center;
  text-align: center;
  color: darkblue;
  gap: 15px;
  padding: 10px;
}
```
.filmes: é um contêiner flexível que organiza seus itens em múltiplas linhas (se necessário), centralizando-os horizontalmente e deixando um espaço de 25px entre cada item.

.titulo: é um contêiner flexível que centraliza seu conteúdo e texto, com um espaçamento de 15px entre os itens internos e uma margem interna de 10px. O texto tem uma cor azul escura.
Esses estilos são aplicados localmente no componente que importa esse CSS Módulo


## Pasta components
Components são o bloco de construção fundamental em React, e são essenciais para a arquitetura de qualquer aplicação baseada em React, incluindo o Next.js. Na qual permitem a criação de interfaces de usuário (UI) de forma modular, reutilizável e manutenível.A pasta /components (normalmente criada manualmente) é onde colocamos os componentes reutilizáveis. Esses componentes podem ser usados em várias partes da aplicação, como páginas, layouts e outros componentes. A ideia é modularizar a aplicação.
No projeto de exemplo está:

### card
Nessa parte criamos um componente card (Card.js) que será usado em uma página do Next.js:
```
import styles from "./card.module.css";

function Card({url}){
    console.log(url);
    return (
        <article className={styles.poster}>
            <img className={styles.imagem} src={url} />
            <button>clique</button>
        </article>
    )
}

export default Card;
```
O componente Card recebe uma prop url que contém o link da imagem a ser exibida. Agora o módulo CSS card.module.css define classes específicas para estilizar o componente (poster e imagem), e essas classes são aplicadas de forma escopada e única. 
Os componente exibe um article que contém uma imagem (cujo src é a url recebida pela prop) e um botão. Por consequência , o console.log(url) é usado para imprimir a URL no console, ajudando na verificação de que a prop está sendo corretamente passada. 

### menu
Nessa parte criamos um componente menu (Menu.js) que será usado em uma página do Next.js:
```
import Link from "next/link";
import style from "./menu.module.css";

export function Menu() {
    return (
        <header className={style.menu}>
            <Link href="/">Filmes</Link>
            <Link href="/Shrek">Shrek</Link>
        </header>
    )
}

export default Menu;
```
O código implementa um menu de navegação no formato de um componente funcional em React/Next.js. Ele usa o componente Link do Next.js para criar links de navegação entre páginas da aplicação, sem recarregar a página inteira (navegação client-side). O arquivo CSS menu.module.css é importado usando CSS Modules, permitindo que estilos sejam aplicados de forma modular e exclusiva ao componente Menu. 

Como na Page.js nos importamos o Menu e Card no final do js dos componentes temos que dar um Export Default para que o os componentes sejam reutilizados em qualquer parte da aplicação enviando para o import.

