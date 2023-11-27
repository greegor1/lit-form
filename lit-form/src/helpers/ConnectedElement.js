import { connect } from 'pwa-helpers'
import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js'
import { LitElement } from 'lit'
import store from '../redux/store'

export default class ConnectedElement extends connect(store)(ScopedElementsMixin(LitElement)) {}
