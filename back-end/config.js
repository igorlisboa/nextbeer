const Cardapio = require('./models/cardapio')

//Configuração inicial deve ser feita aqui
const mock = [
    {
        nome: "Drink's",
        icone: "fa fa-glass",
        itens: [
            {
                codigoProduto: "a12",
                nome: "teste",
                preco: "12.3",
                descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales venenatis turpis ullamcorper consectetur. Vivamus fermentum nunc ipsum, at pulvinar.",
                imagens: [
                    {
                        path: "https://pizzariatop10.com.br/pedido-online/image/cache/data/produtos/p.batata.fw-600x600.png"
                    }
                ]
            }
        ],
        tema: 'bg-green'
    },
    {
        nome: "Comidas",
        icone: "fa fa-cutlery",
        itens: [
            {
                codigoProduto: "a12",
                nome: "teste",
                preco: "12.3",
                descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales venenatis turpis ullamcorper consectetur. Vivamus fermentum nunc ipsum, at pulvinar.",
                imagens: [
                    {
                        path: "https://pizzariatop10.com.br/pedido-online/image/cache/data/produtos/p.batata.fw-600x600.png"
                    }
                ]
            }
        ],
        tema: 'bg-blue'
    },
    {
        nome: "Bebidas",
        icone: "fa fa-beer",
        itens: [
            {
                codigoProduto: "a12",
                nome: "teste",
                preco: "12.3",
                descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales venenatis turpis ullamcorper consectetur. Vivamus fermentum nunc ipsum, at pulvinar.",
                imagens: [
                    {
                        path: "https://pizzariatop10.com.br/pedido-online/image/cache/data/produtos/p.batata.fw-600x600.png"
                    }
                ]
            }
        ],
        tema: 'bg-orange'
    },
    {
        nome: "Diversão",
        icone: "fa fa-gamepad",
        itens: [
            {
                codigoProduto: "a12",
                nome: "teste",
                preco: "12.3",
                descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales venenatis turpis ullamcorper consectetur. Vivamus fermentum nunc ipsum, at pulvinar.",
                imagens: [
                    {
                        path: "https://pizzariatop10.com.br/pedido-online/image/cache/data/produtos/p.batata.fw-600x600.png"
                    }
                ]
            }
        ],
        tema: 'bg-red'
    }
];

const configureDefaultUser = async () => {
    // console.log('====================  conf 1  ======================');
    let cardapio = await Cardapio.find({});
    // console.log(cardapio);
    // console.log('====================  conf 2  ======================');
    if (cardapio[0]) return;
    // console.log('====================  conf 3  ======================');

    let initCardapio = mock.map(item => new Cardapio(item));
    // console.log('====================  conf 4  ======================');
    initCardapio.forEach(async item => {
        await item.save();
    });
    // console.log('====================  conf 5  ======================');
    console.info("Connection start")
};

module.exports = {
    configureDefaultUser
};