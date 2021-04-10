function tt() {
    console.log(this);


}


function Layer(path, options, fn) {

    console.log('dd',this.__proto__ === Layer.prototype)
    if (!(this instanceof Layer)) {
      return new Layer(path, options, fn);
    }
    this.name = 'ddd';
}

// tt();

let Ser = Layer;

// let l = new Layer();

let l = new Ser();