# Portfolio

Um simples frontend para servir como hub dos meus projetos, currículos e coisas assim.

## Visite o projeto já hosteado

Visite ele em: <https://pedrothiagomaisse.github.io/newPortfolio/>

## Rodando

Para rodar localmente, siga o normal:
> npm run dev

para dar o deploy direto para gitpages use:
> npm run deploy

## Melhorias mapeadas

### Release 1: O básico
<details>

- ~Banner img~  
- ~Garantir nota alta no lighthouse (talvez isso quebre em mais tasks)~  
    nota atual: 100, 100, 100, 100  
    -~Page prevented back/forward cache restoration - resolvido quando foi pro git~  
    -~ Cor do open source não tem contraste suficiente~  
    -~Diminuir tamanho das imagens~  
    -~Aspect Ratio das imagens~  
- ~Melhorar o ReadMe~  
- ~Adicionar listas com links, e tags dentro do banner~  
- ~Adicionar um gradiante nas imagens do banner para facilitar a leitura (ou uma layer cinza)~  
- ~Melhorar o texto dos banners~  
- ~Bug de clicar no banner~  
- ~Diminuir as ondas no curriculo~  
- ~Novo componente de bubbles para cada opção~  
- ~Modificar a Appbar para parte dela ficar emcima do conteúdo~  
- ~Criar uma variável global para pegar as cores de tags (sim, isso é sério)~  
- ~Juntar os projetos e ver se o componente precisa de algo~  
- ~Separar o Banner em +1 componente~  
- ~Rever o visual geral da page~  
- ~Limpar outras coisas~  
- ~Usabilidade no cel~  
- ~Animate Blobs~
- ~Diminuir o tamanho dos pacotes, depois de um estudo vi que o problema está em outros arquivos e coisas, vou focar neles~
- ~minimaze the images size~

</details>

# Release 2
- Ux/Ui
	- Novo design
	- Aviso de Redirect
	- Avisos de erro / notificações
	- Tradução da Page
	- Garantir Acessibilidade
- Pactoes / Tooling
	- Resolver o problema de import com o vite
    - See if possible to reduce "main thread work'
	- SvelteKit
	- Automatizar o Deploy

# Release 3:
- Pacotes / Tooling
    - Google Tags (terei que refazer)
    - Party Town (terei que refazer)
- Melhorias em UX / UI    
    - Fireworks quando é a primeira visita da pessoa após um novo release
    - Patch Notes??
    - Opção para redução as animações
    - Mais animações / fundos mais dinâmicos?

# Release 4: Backend (finalmente)
- Achar algum jeito de hospedar as imagens das bubbles
- Conectar com backend
- Puxar informação do backend no deploy
- Melhorar Store e Diálogos

# Release 5: Detalhes pós (pós pós) launch
- Mapear com personas (KK) possíveis pontos para adicionar no portal
- Modo Claro
- Responsividade
- versão mobile (isso com crtz vai quebrar em mais pontos)
- Mudar para o Scroll aparecer acima da tela
- Padronizar funções por meio de API interna
