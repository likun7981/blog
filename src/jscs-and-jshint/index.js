
'use strict';

var avb = 2;
function Would( name, something ) {
  this.name = name;
  this.something = something;
  this.sayHello = function () {
    console.log( 'hello' + name );
  };
  var a = 1;
  a++ ;
}
( function () {
  console.log( 1 );
}() );
var a = [[1],2];
var b = ( { c: { a: 1 }} );
var c = 1 + 2;
var d = ( 'aaa', 'bb' );
var e = {
  a: 1,
  b: 2
};
var f = {
  a: 1,
  while: 2
};
console.log( f.a );
var STATIC_VAR = 'ABC';
console.log( STATIC_VAR );
var would2 = new Would( avb, '123' );
function abc() {
  console.log( arguments[0] );
}
for ( var i = a.length - 1; i >= 0; i-- ) {
  console.log( a[i] );
}
would2.sayHello();
abc( 123, 456 );
var people = [1,2,3,4,5];
for ( var i = 0, person; person = people[i]; i++ ) {
	console.log( i );
}
function a( bc, vc ) {
	console.log( bc );
	console.log( vc );
}
a( 'ni', 'wo' );
