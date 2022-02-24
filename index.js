function receivesAFunction(spy)  {
    return spy();
}

function returnsANamedFunction() {
    return function namedFunction() {
    };
}

function returnsAnAnonymousFunction() {
   return function() {
       
   }
}