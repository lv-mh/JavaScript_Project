function log(x, y) {
    m = y || 'World';
    console.log(x, m);
  }
  
  log("Hello") // Hello World
  log('Hello', 'China') // Hello China
  log('Hello', '') 