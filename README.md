# Projeto_Front_end_e_AFD
# 🧠 Portfólio Técnico  
## Simulações Interativas com Autômatos  
**Desenvolvido com:** HTML, CSS, JavaScript, Python (Flask)

---

## 📦 Projeto 1 – Simulador de Máquina de Doces (AFD)

### 📝 Descrição  
Simulação interativa de uma máquina de doces inspirada no funcionamento de um Autômato Finito Determinístico (AFD). A máquina aceita diferentes combinações de moedas e libera doces apenas quando a sequência de entrada é reconhecida como válida pelo autômato.

### 🎯 Objetivos Técnicos  
- Aplicar os conceitos teóricos de AFD em uma simulação real.  
- Implementar um sistema de reconhecimento de sequência de entradas (moedas).  
- Realizar a comunicação entre front-end (interface da máquina) e back-end (validação dos estados) via Flask/Python.

### ⚙️ Principais Funcionalidades  
- Interface gráfica simulando uma máquina com botões para moedas.  
- Transições de estado exibidas de forma visual e interativa.  
- Validação da sequência usando uma estrutura de estados determinísticos.  
- Exibição de mensagens como "Doce Liberado" ou "Sequência Inválida".

### 🔍 Foco  
Aplicação de AFD com integração entre front-end e back-end para controle de fluxo baseado em estados finitos.

---

## 🛗 Projeto 2 – Simulador de Elevador (PDA)

### 📝 Descrição  
Simulação de um elevador com controle de andares, utilizando os princípios de um Autômato de Pilha (PDA). O sistema registra o histórico de movimentações em uma pilha, permitindo retornar ao andar anterior — comportamento impossível com um AFD.

### 🎯 Objetivos Técnicos  
- Representar a lógica de controle de andares usando uma pilha (estrutura LIFO).  
- Demonstrar o uso de PDA para navegação com memória de estados anteriores.  
- Enriquecer a interface com transições visuais e animações interativas.

### ⚙️ Principais Funcionalidades  
- Interface com botões para ir a qualquer andar (Térreo a 3º).  
- Animações visuais nas portas do elevador e na transição entre andares.  
- Exibição dinâmica do andar atual com alteração de plano de fundo e visuais.  
- Suporte ao retorno ao andar anterior via teclado (Backspace ou seta para baixo).

### 🔍 Foco  
Simulação de um PDA com manipulação dinâmica de pilha, reforçando o aprendizado de estruturas de dados e comportamento com memória.

---

## 🧩 Tecnologias Utilizadas

- **HTML5 & CSS3:** Estrutura e estilização responsiva com foco em experiência visual.  
- **JavaScript:** Manipulação de DOM, eventos e lógica de simulação (estados e pilhas).  
- **Python + Flask (Case AFD):** Backend leve para gerenciamento de transições e validações.  
- **Design Temático:** Uso da fonte *Press Start 2P* e sprites retro para interface inspirada em videogames.

---

## 📂 Aplicações

- **Didática:** Ensino de autômatos e estruturas de dados com visualização prática.  
- **Portfólio Técnico:** Projetos voltados a vagas de desenvolvimento front-end e lógica computacional.  
- **Base para Extensões:** Possível expansão para FSMs (Finite State Machines) e PDAs mais complexos.
