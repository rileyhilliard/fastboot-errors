# fastboot-errors

This repo demonstrates how ember-fastboot handles error scenarios.

## Installation

* `git clone git@github.com:rileyhilliard/fastboot-errors.git` this repository
* `cd fastboot-errors`
* `yarn`

## Running

* `ember s`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Turn off client JS execution, refresh, and observe the delivered content.
* Notice that the component that throws an error is not delivered, but fastboot still returns a `200` response.

![Demo](/public/assets/images/demo.gif)