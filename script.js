const items = [{
        title: "Игрушка мячик",
        description: "Ваш питомец будет счастлив!",
        tags: ["cat", "dog"],
        price: 500,
        img: "./img/1.jpeg",
    },
    {
        title: "Игрушка лабиринт",
        description: "Поможет в развитии интеллекта!",
        tags: ["cat", "dog"],
        price: 900,
        img: "./img/2.jpeg",
    },
    {
        title: "Игрушка для котят",
        description: "Отвлечет вашего питомца!",
        tags: ["cat"],
        price: 300,
        img: "./img/3.jpeg",
    },
    {
        title: "Миска «Котик»",
        description: "Подойдет и для собак!",
        tags: ["cat", "dog"],
        price: 660,
        img: "./img/4.jpeg",
    },
    {
        title: "Лоток розовый",
        description: "Теперь вы можете забыть о проблемах с туалетом",
        tags: ["cat"],
        price: 400,
        img: "./img/5.jpeg",
    },
    {
        title: "Сухой корм для кошек",
        description: "Специальная формула для милых усатиков!",
        tags: ["cat"],
        price: 200,
        img: "./img/6.jpeg",
    },
    {
        title: "Сухой корм для собак",
        description: "Содержит полный комплекс витаминов",
        tags: ["dog"],
        price: 300,
        img: "./img/7.jpeg",
    },
    {
        title: "Игрушка для собак",
        description: "Теперь вы можете не переживать за личные вещи",
        tags: ["dog"],
        price: 500,
        img: "./img/8.jpeg",
    },
    {
        title: "Лежанка",
        description: "Идеальное место для отдыха!",
        tags: ["cat", "dog"],
        price: 1500,
        img: "./img/9.jpeg",
    },
    {
        title: "Поилка для собак",
        description: "Возьмите с собой в путешествие",
        tags: ["dog"],
        price: 800,
        img: "./img/10.jpeg",
    },
    {
        title: "Переноска",
        description: "Путешествуйте с комфортом!",
        tags: ["cat", "dog"],
        price: 3500,
        img: "./img/11.jpeg",
    },
    {
        title: "Поводок для собак",
        description: "Для чудесных прогулок вместе",
        tags: ["dog"],
        price: 800,
        img: "./img/12.jpeg",
    },
];

const container = document.querySelector('#shop-items');
const goodsTemplate = document.querySelector('#item-template');

function makeGoodsByTemplate() {
    const newGoods = goodsTemplate.content.cloneNode(true);

    newGoods.querySelector('h1').textContent = this.title;
    newGoods.querySelector('p').textContent = this.description;
    newGoods.querySelector('img').src = this.img;
    newGoods.querySelector('.price').textContent = this.price;

    for (let tag of this.tags) {
        const tagsContainer = newGoods.querySelector('.tags');
        const newTag = document.createElement('div');
        newTag.classList.add('tag');
        newTag.textContent = tag;
        newGoods.querySelector('.tags').append(newTag);
    }

    return newGoods;
}

function addToContainer(elem) {
    elem.makeGoodsByTemplate = makeGoodsByTemplate;

    container.append(elem.makeGoodsByTemplate());
}

items.forEach(addToContainer);

const searchButton = document.querySelector('#search-btn');
const searchInput = document.querySelector('#search-input');
const nothingFound = document.querySelector('#nothing-found');
let arr = [];

function findGoods() {
    const searchText = searchInput.value.trim().toLowerCase();

    container.innerHTML = '';
    nothingFound.textContent = "";
    arr = [];

    for (let item of items) {
        const newTitle = item.title.toLowerCase();

        if (newTitle.includes(searchText)) {
            arr.push(item);
        }
    }

    arr.forEach(addToContainer);

    if (arr.length == 0) {
        nothingFound.textContent = 'Ничего не найдено';
    }

    searchInput.value = '';
}

searchButton.addEventListener('click', findGoods());

searchInput.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        findGoods();
    }
});