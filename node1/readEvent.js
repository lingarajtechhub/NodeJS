import {createReadStream} from 'fs';

var rs = createReadStream('./note.txt');

//Assign the open event on to open a file.
rs.on('open', function(){
    console.log('This file is open.');
});
