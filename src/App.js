import React from 'react';
import { Figure } from './Components/Figure/Figure';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, Helvetica, sans-serif;
    a {
        color: #cecece;
    }
  }
`;

const Application = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const pexels = [
    'https://images.pexels.com/photos/1647214/pexels-photo-1647214.jpeg?dl&fit=crop&crop=entropy&w=640&h=1006',
    'https://images.pexels.com/photos/2674064/pexels-photo-2674064.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/2648337/pexels-photo-2648337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/1122408/pexels-photo-1122408.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/1295036/pexels-photo-1295036.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/1451399/pexels-photo-1451399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/2253573/pexels-photo-2253573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/2668676/pexels-photo-2668676.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/2649403/pexels-photo-2649403.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/2614854/pexels-photo-2614854.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
];

function App() {
    return (
        <Application>
            <Figure src={pexels[0]} arHeight={16} arWidth={9} />
            <Figure src={pexels[1]} arHeight={16} arWidth={9}>
                Автор:{' '}
                <a href="https://www.pexels.com/@simonmigaj">Simon Migaj</a>
            </Figure>
            <Figure src={pexels[2]} arHeight={16} arWidth={9}>
                Автор:{' '}
                <a href="https://www.pexels.com/@simonmigaj">Simon Migaj</a>
            </Figure>
            <Figure src="error" arHeight={16} arWidth={9} />
            <Figure src={pexels[3]} arHeight={1} arWidth={2} />
            <Figure src={pexels[4]} arHeight={1} arWidth={2} />
            <Figure src={pexels[5]} arHeight={1} arWidth={2} />
            <Figure src={pexels[6]} arHeight={1} arWidth={2} />
            <Figure src={pexels[7]} arHeight={1} arWidth={1} />
            <Figure src={pexels[8]} arHeight={1} arWidth={1} />
            <Figure src={pexels[9]} arHeight={1} arWidth={1} />
            <Figure src={pexels[10]} arHeight={1} arWidth={1} />
            <GlobalStyle />
        </Application>
    );
}

export default App;
