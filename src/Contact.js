function Contact(){
    this.content = document.getElementById('content');

    const self = this;

    const FIELDS = [ 'name', 'email', 'message' ];

    function capitalize(str){
        let strArr = str.split('');
        strArr.splice(0, 1, strArr[0].toUpperCase());
        return strArr.join('');
    };
    function createHeader(){
        const header = document.createElement('h1');
        header.classList.add('section-header');
        header.innerHTML = 'Contact';

        return header;
    };
    function createFormGroup(field){
        const group = document.createElement('div');
        group.classList.add('form-group');

        const label = document.createElement('label');
        label.htmlFor = field;
        label.innerHTML = capitalize(field);
        group.appendChild(label);

        let input;
        if(field === 'name' || field === 'email'){
            input = document.createElement('input');
        };
        if(field === 'message'){
            input = document.createElement('textarea');
            input.rows = 5;
            input.cols = 100;
        };
        input.type = 'text';
        input.id = field;
        input.name = field;
        group.appendChild(input);


        return group;
    };
    function createContactForm(){
        const form = document.createElement('form');
        form.classList.add('form');

        for(let i = 0; i < FIELDS.length; i++){
            form.appendChild(createFormGroup(FIELDS[i]));
        };

        const submitBtn = document.createElement('button');
        submitBtn.classList.add('btn-submit');
        submitBtn.type = 'button';
        submitBtn.innerHTML = 'Submit';
        submitBtn.addEventListener('click', function(e){
            e.preventDefault();
            handleFormSubmit();
        });
        form.appendChild(submitBtn);

        return form;
    };
    function handleFormSubmit(){
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;

        alert(`
        MESSAGE SENT: \n
        NAME: ${name} \n
        EMAIL: ${email} \n
        MESSAGE: ${message}
        `)
    };


    return {
        render: function(){
            let h = createHeader();
            let f = createContactForm();

            self.content.classList.add('contact');
            self.content.append(h, f);
        },
    };
};

module.exports = new Contact();