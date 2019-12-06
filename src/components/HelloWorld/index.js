import style from 'ld-components';

import { Link, Route, location, Switch } from "@hyperapp/router";

import stylesheet from './index.scss'

import { h, app } from 'hyperapp';

const // 

Ctnr = style.div(stylesheet),

Span = style.span`
    color: black;
    font-size: 12px;
`,

H3 = style.h3`
    border: 1px dotted green;
    color: brown;
    & .ORANGE{
        color: orange;
    }
`,

H3_inherits = style(H3)`
    color: purple;
    border-color: blue;
`;


export const HelloWorld = ({ message }) =>

    <Ctnr>

        <h1> <Span>[ components / helloworld / index.</Span>SCSS<Span> ] : </Span> red & bordered <Span> ( message origin : </Span> {message}<Span> ) </Span></h1>

        <h2> <Span>[ components / helloworld / index.</Span>SCSS<Span> ] : </Span> blue</h2>

        <H3> <Span>[ components / helloworld / index.</Span>JS<Span> ] : </Span> brown <Span>&</Span> <span class="ORANGE">orange</span><Span> ( H3 component )</Span></H3>
        <h2 class="mod"> <Span>[ components / helloworld / index.</Span>SCSS<Span> ] : </Span> green</h2>

        <br />

        <H3_inherits><Span>[ components / helloworld / index.</Span>JS<Span> ] : </Span> purple<Span> & </Span>border-color: blue <Span> ( overrides H3 component )</Span></H3_inherits>

    </Ctnr>