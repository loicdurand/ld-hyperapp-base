import style from 'ld-components';

import { Link, Route, location, Switch } from "@hyperapp/router";

import stylesheet from './index.scss'

import { h, app } from 'hyperapp';

const Ctnr = style.div(stylesheet);

const H3 = style.h3`
    color: brown;
    & .yellow{
        color: yellow;
    }
`


export const HelloWorld = ({ message }) =>

    <Ctnr>

        <h1> {message} </h1>

        <h2> [components/helloworld] - specified in the SCSS file - I must be blue</h2>

        <H3>[components/helloworld] - specified in the JS file - I must be brown and: <span class="yellow">yellow</span></H3>
        <h2 class="mod"> [components/helloworld] - specified in the SCSS file - I must be green</h2>

        <br />

        <Link to="/page"> Click </Link>

    </Ctnr>