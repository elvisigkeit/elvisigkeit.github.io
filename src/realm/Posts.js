import helloworldPic from './titlepic/helloworld.png';
import bootPic from './titlepic/boot.png';
import linkingPic from './titlepic/linking.png';
import cursorPic from './titlepic/cursor.png';
import printPic from './titlepic/print.png';

const posts = [
    {index: 0, path: '', image: helloworldPic, title: 'The Hello World', summary: 'Does it work to develop OS in virtual machines?'},
    {index: 1, path: '', image: bootPic, title: 'Starting the system', summary: 'How could I bootstrap my system?'},
    {index: 2, path: '', image: printPic, title: 'Writing on the screen', summary: 'How I write on the screen?'},
    {index: 3, path: '', image: cursorPic, title: 'Making the screen blink', summary: 'How I define a cursor?'},
    {index: 4, path: '', image: linkingPic, title: 'Linking the code', summary: 'How I make the program compile?'},
]

export default posts;