import React from 'react'; 
import helloworldPic from './titlepic/helloworld.png';
import bootPic from './titlepic/boot.png';
import linkingPic from './titlepic/linking.png';
import cursorPic from './titlepic/cursor.png';
import printPic from './titlepic/print.png';
import Typography from '@material-ui/core/Typography';

const posts = [
    {
        index: 0, image: helloworldPic, title: 'The Hello World', summary: 'Does it work to develop OS in virtual machines?', content: helloworld
    },
    {
        index: 1, image: bootPic, title: 'Starting the system', summary: 'How could I bootstrap my system?', content: 'a'
    },
    {
        index: 2, image: printPic, title: 'Writing on the screen', summary: 'How I write on the screen?', content: 'b'
    },
    {
        index: 3, image: cursorPic, title: 'Making the screen blink', summary: 'How I define a cursor?', content: 'c'
    },
    {
        index: 4, image: linkingPic, title: 'Linking the code', summary: 'How I make the program compile?', content: 'd'
    },
]

function helloworld () {  
  return (
    <Typography variant="h6" style={{textAlign: 'justify'}} paragraph>
        The main objective of this project is to discover and show ways to play with 
        the harsh and complex challenge of coding from almost nothing
    </Typography>
  )
}

export default posts;