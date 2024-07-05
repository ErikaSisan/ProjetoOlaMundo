# Olá Mundo!

## Sobre o projeto

"Olá Mundo!" é um projeto web que apresenta um banner sobre mim e vários artigos para leitura e aquisição de conhecimento. Também possui uma página "Sobre mim", contando um pouco sobre minha trajetória em programação.

Este projeto foi desenvolvido com base no curso (React: desenvolvendo em React Router com JavaScript da Alura).

## Tecnologias utilizadas

* React
* npm
* JSX
* React Router Dom
* React Markdown

## Instalação e execução

1. Clone este repositório: `git clone https://github.com/seu-usuario/ola-mundo.git`
2. Acesse a pasta do projeto: `cd ola-mundo`
3. Instale as dependências: `npm install`
4. Inicie o servidor de desenvolvimento: `npm start`

## Dependências

* `@testing-library/jest-dom`:  Para testes de DOM.
* `@testing-library/react`: Para testes de componentes React.
* `@testing-library/user-event`: Para simular eventos de usuário em testes.
* `react`: A biblioteca React.
* `react-dom`: Para renderizar componentes React no DOM.
* `react-markdown`: Para renderizar Markdown em componentes React.
* `react-router-dom`: Para roteamento de páginas.
* `react-scripts`: Ferramentas para desenvolvimento React.
* `web-vitals`: Para medir o desempenho da aplicação.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença

Este projeto está licenciado sob a licença MIT.

## Rotas Aninhadas: Organizando seu App com Eficiência

No projeto "Olá Mundo!", as rotas aninhadas são fundamentais para uma organização clara e eficiente da estrutura do aplicativo. O layout principal do site é configurado como uma rota pai, enquanto as diferentes seções do site, como "Artigos" e "Sobre mim", são renderizadas como rotas filhas. Isso permite uma navegação mais intuitiva e um código mais modular.

**Exemplo:**

```javascript
import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
        </Route>
        
        <Route path="posts/:id/*" element={<Post />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}
```
Neste exemplo, a rota raiz ("/") contém o layout padrão (<PaginaPadrao />) e renderiza suas rotas filhas (<Inicio /> e <SobreMim />). As rotas específicas, como a de posts individuais ("posts/:id/*"), e uma rota de fallback para páginas não encontradas ("*"), também são definidas para garantir uma navegação completa e robusta.

Essas rotas aninhadas não só organizam o conteúdo de forma lógica, mas também facilitam a manutenção e a expansão do aplicativo conforme ele cresce.