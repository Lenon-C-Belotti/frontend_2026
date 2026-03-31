const cria = document.getElementById("b");
const btn = document.getElementById("btn");
const petInput = document.getElementById("petInput");
const btnSetName = document.getElementById("btnSetName");
const petName = document.getElementById("petName");
const status = document.getElementById("status");
const container = document.querySelector(".container");
const themeToggle = document.getElementById("themeToggle");

// Tema escuro/claro
let isDarkTheme = localStorage.getItem("darkTheme") === "true";

if (isDarkTheme) {
    container.classList.add("dark-theme");
    themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
    isDarkTheme = !isDarkTheme;
    container.classList.toggle("dark-theme");
    themeToggle.textContent = isDarkTheme ? "☀️" : "🌙";
    localStorage.setItem("darkTheme", isDarkTheme);
});

const estados = {
    normal:  "c_n.png",
    puto: "c_p.png",
    morto: "baixados.png",
    comendo: "c_c.png",
    alimentado: "c_f.png",
}

let contador = 0; 
let intervalo = null;
let time_click = null;
let time_out = null;
let petNomeAtual = null;
let petAlimentado = false;

function controlador() {
    if(intervalo) clearInterval(intervalo);
        
    intervalo = setInterval(() => {
        contador++;

        console.log("tempo:", contador);
        
        if (contador == 30) {
            cria.src = estados.puto;
            status.textContent = `${petNomeAtual} está com fome! 😤`;
        }

        if(contador == 60) {
            cria.src = estados.morto;
            status.textContent = `${petNomeAtual} morreu de fome! 💀`;
            clearInterval(intervalo);
            intervalo = null;
            btn.disabled = true;
        }
    }, 1000);
}


btnSetName.addEventListener("click", () => {
    const nome = petInput.value.trim();
    
    if (nome === "") {
        alert("⚠️ Digite um nome para seu pet!");
        return;
    }
    
    if (nome.length < 2) {
        alert("⚠️ O nome deve ter pelo menos 2 caracteres!");
        return;
    }
    
    petNomeAtual = nome;
    petName.textContent = `Seu pet: ${nome} 🐣`;
    petInput.value = "";
    petInput.disabled = true;
    btnSetName.disabled = true;
    status.textContent = `${nome} nasceu! Cuide bem dele! ❤️`;
    btn.disabled = false;
    
    
    if(!intervalo) {
        controlador();
    }
});


petInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        btnSetName.click();
    }
});


btn.addEventListener("click", () => {
    if (!petNomeAtual) {
        alert("⚠️ Primeiro coloque um nome no seu pet!");
        return;
    }
    
    if (contador >= 60) {
        alert("💀 Seu pet já morreu! Recarregue a página para recomeçar.");
        return;
    }
    
    if(intervalo) clearInterval(intervalo);
    intervalo = null;
    
    contador = 0;
    cria.src = estados.comendo;
    status.textContent = `${petNomeAtual} está comendo! 😋`;
    
    if(time_out) clearTimeout(time_out);
    
    
    time_out = setTimeout(() => {
        cria.src = estados.alimentado;
        status.textContent = `${petNomeAtual} terminou de comer! 😊`;
        
        
        setTimeout(() => {
            cria.src = estados.normal;
            status.textContent = `${petNomeAtual} está feliz! ❤️`;
            controlador();
        }, 2000);
    }, 3000);
});

btn.disabled = true;

// Configurações de fundos disponíveis
const backgroundOptions = {
    gradient1: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    gradient2: "linear-gradient(135deg, #0093E9 0%, #80D0C7 100%)",
    gradient3: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
    gradient4: "linear-gradient(135deg, #FF6B6B 0%, #FFE66D 100%)",
    color1: "#87CEEB",
    color2: "#90EE90",
    color3: "#FFB6C1",
    color4: "#FFFFE0"
};

// Elemento do seletor
const backgroundSelect = document.getElementById("backgroundSelect");

// Evento para mudar o fundo
backgroundSelect.addEventListener("change", (e) => {
    const selectedBackground = backgroundOptions[e.target.value];
    if (selectedBackground) {
        document.body.style.background = selectedBackground;
    }
});