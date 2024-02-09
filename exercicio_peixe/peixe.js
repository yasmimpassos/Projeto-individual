var config = {
    type: Phaser.AUTO,
    width: 800, //define a largura do quadro
    height: 600, //define a altura do quadro

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var peixinho;

function preload() {
    this.load.image('fundo', 'assets/fundo.jpg'); //identificamos o fundo com a imagem correspondente
    this.load.image('logo', 'assets/logo-inteli_branco.png'); //identificamos o logo com a imagem correspondente
    this.load.image('peixe', 'assets/peixes/tubarao.png'); //identificamos o tubarão com a imagem correspondente
    this.load.image('algas', 'assets/algas.png'); //identificamos as algas com a imagem correspondente
    this.load.image('tartaruga', 'assets/peixes/turtle.webp'); //identificamos a tartaruga com a imagem correspondente
    this.load.image('raia', 'assets/peixes/raia.png'); //identificamos a raia com a imagem correspondente
    this.load.image('areia', 'assets/areia.png');//identificamos a areia com a imagem correspondente
}

function create() {
    this.add.image(400, 300, 'fundo').setScale(0.45); // adicionamos a imagem a tela, da seguinte maneira (x, y, nome da imagem)
    this.add.image(400,550, 'areia');
    this.add.image(600, 500, 'algas').setScale(0.3); // setScale é a escala em que a imagem está
    this.add.image(70, 100, 'tartaruga').setScale(0.2);
    this.add.image(700, 100, 'raia').setScale(0.4);
    this.add.image(400, 70, 'logo').setScale(0.7);
    peixinho = this.add.image(400, 300, 'peixe');
}

function update() {
    peixinho.x = this.input.x; // define que o x do peixinho é o mesmo do mouse
    peixinho.y = this.input.y; // define que o y do peixinho é o mesmo do mouse
}