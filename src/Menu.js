function Menu(){
    this.content = document.getElementById('content');

    const self = this;

    const menuItems = [
        { name: 'Default Glizzy', img_path: './images/default_glizzy.jpg', description: 'Just a regular glizzy. Top as desired.', price: '5.00' },
        { name: 'Shrimp Glizzy', img_path: './images/shrimp_glizzy.jpg', description: 'Glizzy straight from the ocean.', price: '10.25' },
        { name: 'Banana Glizzy', img_path: './images/banana_glizzy.jpg', description: 'Glizzy for the healthy ones out there.', price: '6.75' },
        { name: 'Bacon Wrapped Glizzy', img_path: './images/bacon_wrapped_glizzy.jpg', description: 'Glizzy wrapped in bacon. Top as desired.', price: '12.50' },
        { name: 'Ramen Glizzy', img_path: './images/ramen_glizzy.jpg', description: 'Glizzy with an international touch.', price: '7.00' },
        { name: 'Taco Glizzy', img_path: './images/taco_glizzy.jpg', description: 'Spanish twist on the glizzy.', price: '10.00' },
    ];

    function createHeader(){
        const header = document.createElement('h1');
        header.classList.add('section-header');
        header.innerHTML = 'Menu';

        return header;
    };
    function createMenuItem(item){
        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.classList.add('card--img');
        img.src = item.img_path;
        img.alt = `Image of ${item.name}`;
        card.appendChild(img);

        const cardContent = document.createElement('div');
        cardContent.classList.add('card--content');
        card.appendChild(cardContent);

        const cardTitle = document.createElement('h4');
        cardTitle.classList.add('card--title');
        cardTitle.innerHTML = `${item.name}`;
        cardContent.appendChild(cardTitle);

        const cardDescription = document.createElement('p');
        cardDescription.classList.add('card--description');
        cardDescription.innerHTML = `${item.description}`;
        cardContent.appendChild(cardDescription);

        const cardPrice = document.createElement('p');
        cardPrice.classList.add('card--price');
        cardPrice.innerHTML = `PRICE: $${item.price}`;
        cardContent.appendChild(cardPrice);

        return card;
    };
    function createMenu(items){
        const menu = document.createElement('div');
        menu.classList.add('menu-list');
        
        for(let i = 0; i < items.length; i++){
            menu.appendChild(createMenuItem(items[i]));
        };

        return menu;
    };

    return {
        render: function(){
            let h = createHeader();
            let m = createMenu(menuItems);

            self.content.classList.add('menu');
            self.content.append(h, m);
        },
    };
};

module.exports = new Menu();