//Criando as funções:



//Função:
function gerarMsg():void{
    const nome:HTMLInputElement = document.querySelector('#area') as HTMLInputElement;
    const msg:HTMLParagraphElement = document.getElementById('texto') as HTMLParagraphElement;
    if(nome.value === "Front-End"){
        msg.innerHTML = `Ok, você quer aprender ${nome.value}, mas qual das seguintes linguagens de programação ou frame-work você pretende aprender?`
        const selecao:HTMLSelectElement = document.getElementById('lingaugens') as HTMLSelectElement;
        selecao.innerHTML = '<option value="default">React</option><br> <option value="default">Vue</option>'
    } else if(nome.value === "Back-End"){
        msg.innerHTML = `Ok, você quer aprender ${nome.value}, mas qual das seguintes linguagens de programação ou frame-work você pretende aprender?`
        const selecao:HTMLSelectElement = document.getElementById('lingaugens') as HTMLSelectElement;
        selecao.innerHTML = '<option value="default">C#</option><br> <option value="default">Java</option>'
    }
};

//Criando a função para perguntar se a pessoa quer ou não se especiliazar na sua área.

function section():void{
    const section:HTMLSelectElement = document.getElementById('especializar') as HTMLSelectElement;
    section.innerHTML = '<option value="default">Continuar na minha área</option><br><option value="default">Virar Full-Stack</option>'
};

//Criando a função para a pessoa escolher qual tecnologia ela quer se especializar ou aprender:
function ling():void{
    const input:HTMLDivElement = document.getElementById('divinput') as HTMLDivElement;
    input.innerHTML = ('<p> Digite a lingaugem que você quer aprender os se especializar: <br><input type="text" placeholder="Digite a tecnologia" required>')
}



const form:HTMLElement = document.getElementById('form') as HTMLFormElement;

form.addEventListener('submit', x=> {
    x.preventDefault()
    gerarMsg();
    section();
    ling();
});