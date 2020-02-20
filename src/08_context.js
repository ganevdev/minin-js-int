const person = {
  surname: 'Старк',
  knows: function(what, name) {
    console.log('this:');
    console.log(this);
    console.log(`Ты ${what} знаешь, ${name} ${this.surname}`);
  },
};

person.knows('все', 'Бран');
