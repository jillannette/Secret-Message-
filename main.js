let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015', 'Chris', 'Pine', 'Learn', 'JavaScript'];

secretMessage.pop();

console.log(secretMessage.length);

secretMessage.push('to', 'Program');

secretMessage.splice(7, 1, 'right');

secretMessage[0] = 'Programming';

secretMessage.splice(10, 1, 'know');

secretMessage.splice(6,4);

console.log(secretMessage.join());
