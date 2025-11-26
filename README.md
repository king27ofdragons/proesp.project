# 🏃‍♂️ PROESP-Br — Interface Web de Avaliação Física (IHM)

Este projeto consiste no desenvolvimento de uma **interface web funcional de alta fidelidade** para simular a coleta de dados da avaliação física baseada no **Manual PROESP-Br**.  

O objetivo principal do sistema é aplicar, na prática, os **conceitos de Interação Humano-Computador (IHM)**, garantindo:
- Eficiência de uso
- Prevenção de erros
- Feedback imediato ao usuário
- Clareza visual e organização

---

## 🎯 Objetivo do Sistema

A aplicação permite simular a coleta de dados em três etapas principais:

1. **Triagem e Identificação**
2. **Antropometria**
3. **Testes Motores**

O sistema foi desenvolvido apenas com:
- **HTML semântico**
- **CSS puro**
- **JavaScript puro**
- Sem uso de frameworks

---

## 🧠 Aplicação dos Conceitos de IHM

### ✅ Lei de Fitts
Os botões e campos de entrada possuem:
- Tamanho grande
- Espaçamento adequado
- Fácil acessibilidade ao clique e toque  

Isso reduz o esforço do usuário e aumenta a velocidade da interação.

---

### ✅ Lei de Hick-Hyman
O sistema foi dividido em apenas **3 formulários principais**, reduzindo a sobrecarga de escolhas:
- Identificação/Triagem
- Antropometria
- Testes Motores  

Isso facilita a tomada de decisão e torna a navegação mais intuitiva.

---

### ✅ Feedback ao Usuário
A interface fornece feedback por meio de:
- Mudança de cores
- Respostas visuais ao clicar nos botões
- Atualização dinâmica de campos quando aplicado pelo JavaScript

Esses recursos informam ao usuário que sua ação foi reconhecida corretamente.

---

### ✅ Prevenção de Erros
Foram aplicadas validações por meio de:
- `type="number"` nos campos numéricos
- Uso de `step` para limitar casas decimais
- Separação correta de unidades (cm, kg, segundos)

Isso evita a entrada de dados inválidos.

---

### ✅ Princípios da Gestalt
Os campos são organizados visualmente por agrupamento:
- Cada formulário representa uma etapa específica
- Uso de `fieldset` para separar blocos de informações
- Organização lógica por tipo de capacidade física

Isso melhora a percepção visual e a compreensão das informações.

---

### ✅ Acessibilidade
A acessibilidade foi considerada através de:
- Alto contraste entre fundo e texto
- Tamanho de fonte confortável
- Navegação funcional pelo teclado (tecla TAB)
- Campos e botões bem destacados

---

## 🎨 Estilização (CSS)

Principais características do layout:

- Formulário centralizado
- Bordas arredondadas
- Botões grandes e acessíveis
- Cores suaves para conforto visual
- Destaque para botões de ação

Exemplo prático:
- O botão possui:
  - Bordas arredondadas apenas na parte inferior
  - Cor contrastante
  - Altura aumentada para melhor interação

---

## 📂 Estrutura do Projeto

/proesp.project

  ─ index.html → Página inicial
  ─ antropometria.html → Formulário de Antropometria
  ─ motores.html → Testes Motores
  ─ style.css → Estilização
  ─ script.js → Lógica e interações


---

## 🚀 Como Executar o Projeto

1. Baixe os arquivos do repositório
2. Abra o arquivo:

3. Navegue entre os formulários normalmente

OU

Acesse pelo GitHub Pages (link fornecido pelo autor).

---

## 👨‍🎓 Autor

Projeto desenvolvido por:
**Thiago**

Disciplina: Interação Humano-Computador (IHM)

---

## ✅ Conclusão

O projeto atende aos requisitos propostos, aplicando de forma prática os princípios de IHM, oferecendo uma interface:
- Intuitiva
- Acessível
- Organizada
- Funcional

Servindo como uma simulação eficiente da coleta de dados do protocolo PROESP-Br.
