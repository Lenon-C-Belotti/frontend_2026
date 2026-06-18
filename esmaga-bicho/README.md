# 🐜 Esmaga Bicho!

Jogo de navegador estilo "mata-mosca" feito com React + Vite.

## Como rodar

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar em modo desenvolvimento
npm run dev

# 3. Abrir no navegador
http://localhost:5173
```

## Como fazer o build final

```bash
npm run build
# os arquivos prontos ficam na pasta /dist
```

## Estrutura do projeto

```
esmaga-bicho/
├── index.html                    # HTML de entrada
├── vite.config.js                # Config do Vite
├── package.json
└── src/
    ├── main.jsx                  # Ponto de entrada React
    ├── App.jsx                   # Componente raiz
    ├── constants.js              # Configurações do jogo
    ├── hooks/
    │   └── useGameLogic.js       # Toda a lógica do jogo (hook)
    ├── components/
    │   ├── Game.jsx / .module.css        # Arena principal
    │   ├── Bug.jsx  / .module.css        # Cada bicho
    │   ├── Splat.jsx / .module.css       # Animação de esmagamento
    │   ├── ScoreBar.jsx / .module.css    # HUD (pontos, tempo, nível)
    │   └── Overlay.jsx / .module.css     # Telas de início e fim
    └── styles/
        └── global.css            # Reset e estilos base
```

## Regras

- Clique nos bichos antes que fujam
- Cada bicho vale `nível + 1` pontos
- Se 10 bichos escaparem → fim de jogo
- O jogo dura 30 segundos e fica mais rápido a cada 8 segundos
- Nível máximo: 8
