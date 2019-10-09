# fastboot-errors

This repo demonstrates how ember-fastboot handles error scenarios.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone git@github.com:rileyhilliard/fastboot-errors.git` this repository
* `cd fastboot-errors`
* `yarn`

## Running

* `ember s`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Turn off client JS execution, refresh, and observe the delivered content.
* Notice that the component that throws an error is not delivered, but fastboot still returns a `200` response.
