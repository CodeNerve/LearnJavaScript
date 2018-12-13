/*

The simple types of JavaScript are numbers, strings, booleans (true and false), null, and undefined. All other values are objects.
In JavaScript, arrays are objects, functions are objects, regular expressions are objects, and, of course, objects are objects.

An object is a container of properties, where a property has a name and a value. A property name can be any string, including the empty string. A property value can be any JavaScript value except for undefined.

JavaScript includes a prototype linkage feature that allows one object to inherit the properties of another.

*/

// Object literals provide a very convenient notation for creating new object values. An object literal is a pair of curly braces surrounding zero or more name/value pairs. 

var empty_object = {};

var storage = {
    "first-name": "Jerome",
    "last-name": "Howard"
};

// Objects can nest:

var flight = {             // Object fiight
    airline: "Oceanic",
    number: 815,
    departure: {           // Object departure
        IATA: "SYD",
        time: "2004-09-22 14:55",
        city: "Sydney"
}, arrival: {              // Object arrival
        IATA: "LAX",
        time: "2004-09-23 10:42",
        city: "Los Angeles"
} };

// Values can be retrieved from an object by wrapping a string expression in a [ ] suf- fix. If the string expression is a constant, and if it is a legal JavaScript name and not a reserved word, then the . notation can be used instead. 
// The . notation is preferred because it is more compact and it reads better:

storage["first-name"]     // "Joe"
flight.departure.IATA    // "SYD"

// The || operator can be used to fill in default values:

var middle = storage["middle-name"] || "(none)";
var status = flight.status || "unknown";

// Attempting to retrieve values from undefined will throw a TypeError exception. This can be guarded against with the && operator:

flight.equipment                             // undefined
flight.equipment.model                      // throw "TypeError"
flight.equipment && flight.equipment.model // undefined

// A value in an object can be updated by assignment. If the property name already exists in the object, the property value is replaced:

storage['first-name'] = 'Jerome';

// If the object does not already have that property name, the object is augmented:

storage['middle-name'] = 'Lester';
storage.nickname = 'Curly';
flight.equipment = {
    model: 'Boeing 777'
};
flight.status = 'overdue';

// Objects are passed around by reference. They are never copied: (No pointer concept for C/C++ programmers)

var x = storage;
x.nickname = 'Curly';
var nick = storage.nickname;
// nick is 'Curly' because x and storage are references to the same object
    
var a = {}, b = {}, c = {};
    // a, b, and c each refer to a different empty object
a = b = c = {};
    // a, b, and c all refer to the same empty object


/*

Every object is linked to a prototype object from which it can inherit properties. All objects created from object literals are linked to Object.prototype, an object that comes standard with JavaScript.
When you make a new object, you can select the object that should be its prototype. The mechanism that JavaScript provides to do this is messy and complex, but it can be significantly simplified. We will add a create method to the Object function. 
The create method creates a new object that uses an old object as its prototype. 
There will be much more about functions in the next file.

*/

if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        var F = function () {};
        F.prototype = o;
        return new F();
    };
}
var another_storage = Object.create(storage);

// The prototype link has no effect on updating. When we make changes to an object, the object’s prototype is not touched:

another_storage['first-name'] = 'Harry';
another_storage['middle-name'] = 'Moses';
another_storage.nickname = 'Moe';

/*

The prototype link is used only in retrieval. If we try to retrieve a property value from an object, and if the object lacks the property name, 
then JavaScript attempts to retrieve the property value from the prototype object. And if that object is lacking the property, then it goes to its prototype, and so on until the process finally bottoms out with Object.prototype. 
If the desired property exists nowhere in the prototype chain, then the result is the undefined value. 
This is called delegation.

*/




