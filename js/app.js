// es5, 6, and 7 polyfills, powered by babel
import polyfill from "babel-polyfill"

//
// fetch method, returns es6 promises
// if you uncomment 'universal-utils' below, you can comment out this line
import fetch from "isomorphic-fetch"

// universal utils: cache, fetch, store, resource, fetcher, router, vdom, etc
// import * as u from 'universal-utils'

// the following line, if uncommented, will enable browserify to push
// a changed fn to you, with source maps (reverse map from compiled
// code line # to source code line #), in realtime via websockets
// -- browserify-hmr having install issues right now
// if (module.hot) {
//     module.hot.accept()
//     module.hot.dispose(() => {
//         app()
//     })
// }

// Check for ServiceWorker support before trying to install it
// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('./serviceworker.js').then(() => {
//         // Registration was successful
//         console.info('registration success')
//     }).catch(() => {
//         console.error('registration failed')
//             // Registration failed
//     })
// } else {
//     // No ServiceWorker Support
// }

import DOM from 'react-dom'
import React, {Component} from 'react'

function app() {
    // start app
    // new Router()

    var AppView = React.createClass ({
    	
    	_increaseTime: function() {
    		if(!this.state.changingTime){
    				var incrementYear = function() {
    					this.setState({
	    				year: this.state.year + 1,
	    				changingTime: true
	    			})
    				}
	    			
	    		var boundIncrementer = incrementYear.bind(this)
    			this.intervalId = setInterval(boundIncrementer, 500)	
    			
    		}
    		// else{
    		// 	clearInterval(this.intervalId)
    		// 	this.setState({
    		// 		changingTime: false
    		// 	})
    		// }
    	},

    	_decreaseTime: function() {
    		if(!this.state.changingTime){
    				var decrementYear = function() {
    					this.setState({
	    				year: this.state.year - 1,
	    				changingTime: true

	    			})
    				}
	    			
	    		var boundDecrementer = decrementYear.bind(this)
    			this.intervalId = setInterval(boundDecrementer, 500)	
    			
    		}
    		// else{
    		// 	clearInterval(this.intervalId)
    		// 	this.setState({
    		// 		changingTime: false
    		// 	})
    		// }
    	},

    	_stopTime: function() {
    			clearInterval(this.intervalId)
    			this.setState({
    				changingTime: false
    			})
    	},

    	getInitialState: function() {
    		return {
    			year: 2000,
    			changingTime: false
    		}
    	},	

    	render: function() {

    		return(
    			<div className = "timerContainer">
    				<h1 className="headline"> Time Machine! </h1> 
    				<h3>{this.state.year}</h3>
    				<button className="forwardButton" onClick={this._increaseTime}> Go forward! </button> 
    				<button className="backwardButton" onClick={this._decreaseTime}> Go backwards! </button>
    				<button className="stopButton" onClick={this._stopTime}> Stop time! </button>
    			</div>
    		)
    	}

    })



    DOM.render(<AppView/>, document.querySelector('.container'))
}

app()













