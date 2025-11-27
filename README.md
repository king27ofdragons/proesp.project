# 🏃 PROESP-Br — Interface Web de Avaliação Física (IHM)

Este projeto consiste no desenvolvimento de uma **interface web de alta fidelidade** para simular a coleta de dados da avaliação física do **Manual PROESP-Br**, aplicando na prática os **princípios de Interação Humano-Computador (IHM)**.

O sistema foi projetado para oferecer:
- Clareza visual  
- Organização das informações  
- Prevenção de erros  
- Acessibilidade  
- Feedback imediato ao usuário  

---

## 🎯 Objetivo do Projeto

Desenvolver uma interface funcional que simule, de forma organizada e intuitiva, a coleta de dados da avaliação física do PROESP-Br, dividida em **três etapas principais**:

1. **Identificação e Triagem**
2. **Antropometria**
3. **Testes Motores**

Todo o sistema foi desenvolvido exclusivamente com:
- ✅ HTML semântico  
- ✅ CSS puro  
- ✅ JavaScript puro  
- ❌ Sem uso de frameworks  

---

## 🧠 Aplicação dos Princípios de IHM

---

### ✅ Lei de Fitts (Tamanho e Acessibilidade dos Alvos)

Os elementos interativos foram projetados com dimensões amplas para facilitar o clique e reduzir erros:

- Botão principal com:
  - `width: 100%`
  - `height: 70px`
  - Fonte grande e com espaçamento (`letter-spacing`)
- Campos de entrada ocupam 100% da largura do formulário

Isso garante rapidez, conforto e precisão na interação.

---

### ✅ Lei de Hick-Hyman (Redução da Sobrecarga Cognitiva)

O sistema foi dividido em apenas **três telas principais**, reduzindo a quantidade de decisões simultâneas:

- Uma etapa por vez
- Fluxo linear e intuitivo
- Sem excesso de opções visíveis ao mesmo tempo

Isso facilita a navegação e melhora a experiência do usuário.

---

### ✅ Feedback ao Usuário

O sistema oferece feedback visual por meio de:

- Efeito `hover` no botão com:
  - Aumento de brilho (`filter: brightness`)
  - Alteração no espaçamento das letras
- Alteração visual nos campos ao receber foco (`:focus`)

Esses recursos informam claramente que a ação do usuário foi reconhecida.

---

### ✅ Prevenção de Erros

Foram aplicadas estratégias de prevenção de erros como:

- Uso de `input` e `select` com validação por tipo
- Separação adequada por campos específicos
- Organização lógica dos dados
- Destaque visual no campo ativo

Esses fatores evitam preenchimentos incorretos.

---

### ✅ Princípios da Gestalt (Organização Visual)

A organização visual do sistema utiliza:

- `fieldset` para agrupar informações relacionadas
- Bordas e espaçamentos bem definidos
- Separação clara entre blocos de conteúdo
- Layout limpo e padronizado

Isso facilita a leitura e a compreensão dos dados.

---

### ✅ Acessibilidade

A acessibilidade foi considerada por meio de:

- Alto contraste entre fundo, formulário e texto
- Fontes legíveis
- Campos grandes
- Navegação funcional via teclado (TAB)
- Layout responsivo para telas menores

---

## 🎨 Design e Estilização (CSS)

O projeto adota uma **paleta sofisticada e moderna**, com cores quentes e contrastantes, utilizando variáveis CSS:

```css
:root {
  --laranja-profundo: #2b1f1c;
  --laranja-envelhecido: #7a4a34;
  --bege-contraste: #f4f1ee;
  --branco-suave: #fbfaf8;
  --texto-escuro: #1f1f1f;
}
```
  Principais características visuais:

  Fundo com gradiente radial

  Formulário com bordas sólidas e layout limpo

  Campos com estilo minimalista e foco animado

  Botão com efeito cinematográfico ao passar o mouse

  Layout totalmente responsivo

  Fundo suave para reduzir cansaço visual:
  background: rgb(239, 235, 241);

📂 Estrutura do Projeto
/proesp.project
│
├── index.html          → Formulário de Triagem
├── antropometria.html → Avaliação Antropométrica
├── motores.html       → Testes Motores
├── style.css          → Estilização completa
└── script.js          → Lógica e interações

🚀 Como Executar o Projeto
🔹 Opção 1 — Execução Local

Baixe os arquivos

Abra o arquivo:

index.html

🔹 Opção 2 — Acesso Online (GitHub Pages)

O projeto pode ser acessado diretamente pelo link:

https://king27ofdragons.github.io/proesp.project/

👨‍🎓 Autor

Projeto desenvolvido por:
Thiago

Disciplina: interface do usuario.
