import { connect } from 'pwa-helpers'
import { LitElement } from 'lit'
import store from '../redux/store'

export default class ConnectedElement extends connect(store)(LitElement) {}
