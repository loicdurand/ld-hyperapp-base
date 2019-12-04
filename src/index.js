import { h , app } from 'ld-components';

import {  location } from "@hyperapp/router";

import { state }  from './state/state';
import  { actions } from './actions/actions';
import { view }   from './routes';

import './assets/styles/starter.scss';
import  './assets/styles/app.scss';

const main = app(state, actions, view, document.getElementById('app'));

const unsubscribe = location.subscribe(main.location);