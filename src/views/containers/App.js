import { h } from 'ld-components'
import { Link, Route, location, Switch } from "@hyperapp/router"

import { HelloWorld } from '../../components/HelloWorld'


export const App = () => (state, actions) =>

    <div>

        <HelloWorld message="[components/helloworld] - specified in the SCSS file - I must be red and bordered" />

    </div>
