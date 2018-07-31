// const root = document.createElement("div");
// root.innerHTML = `<p>Hello Webpack.</p>`;
// document.body.appendChild(root);
import World from './world';
import Hello from './hello';

var hello = new Hello();
var world = new World();


document.write(hello.get() + ', ' + world.get() + '!');