import { h } from 'ld-components'
import { Link, Route, location, Switch } from "@hyperapp/router"

import { HelloWorld } from '../../components/HelloWorld'

import config from '../../config.ini'

export const App = () => (state, actions) =>

    <div>

        <HelloWorld message='<HelloWorld message="..." />' />

        <br />

        <h3>[ config.INI ]: "{config.App.testStr}"</h3>

        <br />

        <Link to="/page"> @Hyperapp-router Link component </Link>

        <br />


    </div>
