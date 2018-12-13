# Learn JavaScript (Crash Course)

**Everything you need to know about JavaScript, from the book, JavaScript: The Good Parts and my journey with JavaScript**

**Introduction**

When I was a young journeyman programmer, I would learn about every feature of the languages I was using, and I would attempt to use all of those features when I wrote. I suppose it was a way of showing off, and I suppose it worked because I was the guy you went to if you wanted to know how to use a particular feature.

> What I learnt as a programmer, Never code to show off, code to learn and love to code.

Eventually I figured out that some of those features were more trouble than they were worth. Some of them were poorly specified, and so were more likely to cause portability problems. 

Some resulted in code that was difficult to read or modify. Some induced me to write in a manner that was too tricky and error-prone. And some of those features were design errors. Sometimes language designers make mistakes.

Most programming languages contain good parts and bad parts. I discovered that I could be a better programmer by using only the good parts and avoiding the bad parts. After all, how can you build something good out of bad parts?

It is rarely possible for standards committees to remove imperfections from a lan- guage because doing so would cause the breakage of all of the bad programs that depend on those bad parts. 

They are usually powerless to do anything except heap more features on top of the existing pile of imperfections. And the new features do not always interact harmoniously, thus producing more bad parts.

But you have the power to define your own subset. You can write better programs by relying exclusively on the good parts.
JavaScript is a language with more than its share of bad parts.

**Why JavaScript?**

JavaScript is an important language because it is the language of the web browser. Its association with the browser makes it one of the most popular programming languages in the world. At the same time, it is one of the most despised programming languages in the world. 

The API of the browser, the Document Object Model (DOM) is quite awful, and JavaScript is unfairly blamed. The DOM would be painful to work with in any language. The DOM is poorly specified and inconsistently implemented. 

The amazing thing about JavaScript is that it is possible to get work done with it without knowing much about the language, or even knowing much about program- ming. It is a language with enormous expressive power. It is even better when you know what you’re doing. 

Programming is difficult but interesting business. It should never be undertaken in ignorance.

**Analyzing JavaScript**

JavaScript is built on some very good ideas and a few very bad ones.

The very good ideas include functions, loose typing, dynamic objects, and an expres- sive object literal notation. The bad ideas include a programming model based on global variables.

JavaScript’s functions are first class objects with (mostly) lexical scoping. JavaScript is the first lambda language to go mainstream. Deep down, JavaScript has more in common with Lisp and Scheme than with Java. It is Lisp in C’s clothing. This makes JavaScript a remarkably powerful language.

The fashion in most programming languages today demands strong typing. The theory is that strong typing allows a compiler to detect a large class of errors at compile time. The sooner we can detect and repair errors, the less they cost us. JavaScript is a loosely typed language, so JavaScript compilers are unable to detect type errors. 

This can be alarming to people who are coming to JavaScript from strongly typed lan- guages. But it turns out that strong typing does not eliminate the need for careful testing. And I have found in my work that the sorts of errors that strong type checking finds are not the errors I worry about. 

On the other hand, I find loose typing to be liberating. I don’t need to form complex class hierarchies. And I never have to cast or wrestle with the type system to get the behavior that I want.

JavaScript has a very powerful object literal notation. Objects can be created simply by listing their components. This notation was the inspiration for JSON, the popu- lar data interchange format.

A controversial feature in JavaScript is prototypal inheritance. JavaScript has a class- free object system in which objects inherit properties directly from other objects. This is really powerful, but it is unfamiliar to classically trained programmers. 

If you attempt to apply classical design patterns directly to JavaScript, you will be frustrated. But if you learn to work with JavaScript’s prototypal nature, your efforts will be rewarded.

Enough with this, now just jump through the files, in order and learn JavaScript... No, JavaScript good parts :)

- [index.html](https://github.com/CodeNerve/LearnJavaScript/blob/master/index.html) 

>Base html for linking the JavaScript files

- [first.js](https://github.com/CodeNerve/LearnJavaScript/blob/master/first.js) 

>Formal starting with JavaScript

- [second.js](https://github.com/CodeNerve/LearnJavaScript/blob/master/second.js) 

>Objects in JavaScript

- third.js 

>Functions in JavaScript

- fourth.js 

>Inheritance in JavaScript

- fifth.js 

>Arrays in JavaScript

- Regular Expressions and Appendix

