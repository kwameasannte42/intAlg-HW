function addTogether() {
    const [arg1, arg2] = [...arguments];
  
    if (typeof arg1 !== 'number') {
      return undefined;
    }
    if ( arg2 === undefined) {
      return function (num) {
        if (typeof num !== 'number') {
          return undefined;
        }
        return arg1 + num;
      };
    }
    if (typeof arg2 !== 'number') {
      return undefined;
    }
    return arg1 + arg2;
  }

  


  const Person = function(firstAndLast) {
    let fullName = firstAndLast;
  
    this.getFirstName = function() {
      return fullName.split(" ")[0];
    };
  
    this.getLastName = function() {
      return fullName.split(" ")[1];
    };
  
    this.getFullName = function() {
      return fullName;
    };
  
    this.setFirstName = function(name) {
      fullName = name + " " + fullName.split(" ")[1];
    };
  
    this.setLastName = function(name) {
      fullName = fullName.split(" ")[0] + " " + name;
    };
  
    this.setFullName = function(name) {
      fullName = name;
    };
  };
  
  const bob = new Person("Bob Ross");
  console.log(bob.getFullName());




  function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    return arr.map(({ name, avgAlt }) => {
      const earth = earthRadius + avgAlt;
      const orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earth, 3)/GM));
      return { name, orbitalPeriod };
    });
  }
  
  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);