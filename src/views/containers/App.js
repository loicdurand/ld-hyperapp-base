import { h } from 'ld-components'
import { Link, Route, location, Switch } from "@hyperapp/router"

import { HelloWorld } from '../../components/HelloWorld'

import config from '../../config.ini'

export const App = () => (state, actions) =>

    <div>

        <HelloWorld message="[components/helloworld] - specified in the SCSS file - I must be red and bordered" />

        <br />

        <Link to="/page"> Click </Link>

        <br />

        <h3>test: "{config.App.testStr}"</h3>


    </div>
