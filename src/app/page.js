import React from 'react';

import {
  readFile,
  writeFile,
} from '../helpers/file-helpers';
import CounterText from './CounterText';

const DATABASE_PATH = '/src/database.json';

/*
`readFile` takes 1 argument:
• the path to the file:

readFile('/path/to/file');

`writeFile` takes 2 arguments:
• The path to the file
• The new contents for the file

writeFile(
  '/path/to/file',
  '{ "hello": "world" }'
);
*/


function Home() {
  const file = readFile(DATABASE_PATH)
  let parsedFile = JSON.parse(file)
  parsedFile.hits++
  const stringifiedFile = JSON.stringify(parsedFile)
  writeFile(DATABASE_PATH, stringifiedFile)

  return (
    <main>
      <h1>Welcome!</h1>
      <CounterText hits={parsedFile.hits} />
    </main>
  );
}

export default Home;
