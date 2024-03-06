//this is a single line comment

/*
multi-line comment
*/

/*
console.log(100);
console.log('HELLO WORLD')
console.log(20, 'Hello', true)
*/

const x = 100;

console.log(x)

console.error('error')

console.warn('warning');

console.table({name:'Benji', email:'benji@gmail.com'})

console.group('first'); 
console.log('hi');
console.log(x)
console.error('error')
console.warn('warning')
console.groupEnd();

const styles = 'padding: 10px; color: green; background-color: black ';
console.log('%cHello world', styles);