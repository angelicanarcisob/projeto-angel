alert("Fala, Dev!") // Fala, Dev!

alert ((10 * 100) + "abraços !") // 1000 abraços !
--em um arquivo index.html 
--executa o js direto no arquivo .html
<script>alert('Olá')</script>
--importa um arquivo .js no seu .html
<scrip src="./script.js"></script>

-- declaro e atribuo valor
left boasVindas = "Fala, Dev!";
boasVindas = "Fala, Dev! Beleza?!"

-- constante nao pode mudar o valor
const serHumano = true;
serHumano = false -- ERRO!

-- String (" "  ou ' ' ou ``)
-- Numero Number (1 ou 1.2)
-- Boolean (true ou false )

-- alert cria uma caixinha de mensagem

-- exemplo
left boasVindas = "Fala, Dev!";
alert(boasVindas)

-- outro exemplo
boasVindas = "Fala, Dev! Beleza?!"
alert(boasVindas)

-- Usando uma funcao
alert('Fala, Dev!')

-- Criando uma Funcao
function alert(text) {
    return text
}

-- exemplo
function sayHello() {
    alert("Olá")
}
-- executar a funcao
sayHello()

-- exemplo dado dentro da funcao 
function sayHello(name) {
    alert("Olá" + name)
}
para chamar esse dado vc chama 
sayHello("Angelica")

-- outro exemplo
function soma(a, b) {
    return a + b
}
chamar o codigo
soma(2, 2) ele retorna 4
-- pegar resultado para usar mais tarde 
left resultado = soma(3, 56) ele nao mostrou pq ta guardado p usar mais tarde ai nesse caso e so chamar o alerta
alert(resultado)

-- Criando um objeto
const person = {
    age: 18;
    drive: function(){}
}

-- Usando um objeto
person.drive()

-- Criando uma variavel que vai obter um objeto (o objeto vc cria com par de chaves)
exemplo 
const celular = {
    cor: "preto",
    ligar: function() {alert("ligando")}
}
acessando a funcao vc usa .e oque vc quer
por exemplo do celular
celular.cor
ele retorna preto que esta cadastrado acima
celulaer.ligar()
ele retorna ligando como esta acima

-- procurar primeiro link a da pagina
document.querySelector("a")
-- dar um click no primeiro link a da pagina
document.querySelector("a").click 