/* 
To Start a new project
npm init -y
npm install better-sqlite3
*/

// 1. Import the database driver
const databaseDriver = require('better-sqlite3');

// 2. connect to the database
const db = databaseDriver('bands.sqlite3');

/* 
   Prepare a statement , execute statement
*/

// 3. Send our first query
let statement = db.prepare('SELECT * FROM bands');

// 4. Execute statement, receive results 
let results = statement.all();

// 5. Check the results
console.log(results);

// 6. Using parameter
let statement2 = db.prepare(`
    SELECT * FROM bands WHERE genre = ?
`);

let results2 = statement2.all('Metal');

//console.log(results2[0]);

// Using named parameters
let statement3 = db.prepare(`SELECT * FROM bands WHERE genre = :gn`);

let results3 = statement3.all({
    gn: 'Rock'
});

//console.log(results3);

// Insert something into the database
let table = 'bands';
let insertStatement = db.prepare(`
    INSERT INTO ${table} (name, genre) VALUES (:name , :genre)
`);

let resultOfInsert = insertStatement.run({
    name: 'Venom',
    genre: 'Metal'
});

console.log(resultOfInsert);
