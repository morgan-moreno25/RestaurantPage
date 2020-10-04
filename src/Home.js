function Home(){
    this.content = document.getElementById('content');

    let self = this;

    function createHeader(){
        const header = document.createElement('h1');
        header.innerHTML = "Papi's Restaurant";
        header.classList.add('section-header');

        return header;
    };
    function createContent(){
        const content = document.createElement('p');
        content.innerHTML = `
            Here at Papi's, we specialize in bringing you top shelf cuisines at affordable prices. We were founded in 1920 by Papi himself and have evolved throughout the years to
            be able to serve you as best as we can! Here you will be able to find whatever food suits your fancy as our everything is our specialty!
          `

        return content;
    };

    return {
        render: function(){
            let h = createHeader();
            let c = createContent();

            self.content.classList.add('home');
            self.content.append(h, c);
        },
    };
};

module.exports = new Home();