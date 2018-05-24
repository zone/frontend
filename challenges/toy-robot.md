# Toy robot challenge

[![Part of Zone Frontend][zone-fe-image]][zone-fe-url]

> This is not a test! Seriously, try and have fun with it, make it your own!

## Introduction

* 🤨 Take your time but limit yourself to 3hrs. Feel free to use a starter kit like [create React app][create-react-app] or [Vue CLI][vue-cli] to save time.
* 😭 Run out of time? No worries, just think about what you are leaving out and make sure you have enough time to write up your notes.
* 🤩 Feel free to use a framework, we use React, Vue and plain JavaScript here but use what you’re most comfortable with.
* 🤗 UI is great but a clean layout and typography will do.
* 🧐 We’re most interested to see problem solving and your approach… also ES6 please.
* 😇 Keep it simple, keep it DRY, but don’t over complicate or over engineer, comment and test as much as possible.
* 🤓 Commit your code to a public Git repository and provide us with the URL.
* 😬 Provide a README with a simple way to run the project and any notes about your solution.

## Brief

You have a toy robot on a table top, a grid of 5 x 5 units, there are no obstructions. You can issue commands to your robot allowing it to roam around the table top. But be careful, don't let it fall off!

Create an app that allows [commands](#input-commands) to be issued to the robot. The robot should be prevented from failing off the table top to its destruction.

A failed command should not stop the app, valid commands should be allowed.

The application should discard all commands until a valid `place()` command has been executed.

0, 0 on the grid should be seen as bottom left.

## Input

> Every command should provide visual output that the command has either succeeded or failed.

### `place(x, y, facing)`

* `x` and `y` are integers that relate to a location on the grid. Values that are outside the boundary of the grid should not be allowed.
* `facing` is a string referencing the direction the robot is facing. Values `NORTH`, `SOUTH`, `EAST` or `WEST` are allowed.

### `move()`

Moves the robot 1 grid unit in the direction it is facing unless that movement will cause the robot to fall off the grid.

### `left()`

Rotate the robot 90° anticlockwise/counterclockwise.

### `right()`

Rotate the robot 90° clockwise.

### `report()`

Outputs the robot's current grid location and facing direction.

## Output

* `place(0, 0, 'NORTH')`
* `move()`
* `report()` _=> Output: 0, 1, NORTH_
* `place(0, 0, NORTH)`
* `left()`
* `report()` _=> Output: 0, 0, WEST_
* `place(1, 2, EAST)`
* `move()`
* `move()`
* `left()`
* `move()`
* `report()` _=> Output: 3, 3, NORTH_

[zone-fe-image]: https://img.shields.io/badge/-frontend-lightgrey.svg?logo=data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTMgMTQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgIDxwb2x5Z29uIGlkPSJTaGFwZSIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIiBwb2ludHM9IjYuMjc3NjY4NzEgMTAuNzU0MjMzMSAxMi45OTU5NTA5IDAgMi43MzMwMDYxMyAwIDAuNzMwMDYxMzUgMy4xOTc2Njg3MSA2LjcxOTE0MTEgMy4xOTc2Njg3MSAwIDEzLjk1MTA0MjkgMTAuMjU5NTA5MiAxMy45NTEwNDI5IDEyLjI2MzMxMjkgMTAuNzUxNjU2NCI+PC9wb2x5Z29uPjwvc3ZnPg==&longCache=true&style=flat-square&colorA=2C2B39&colorB=1010E5
[zone-fe-url]: https://github.com/zone/frontend
[create-react-app]: https://github.com/facebook/create-react-app#readme
[vue-cli]: https://vuejs.org/v2/guide/installation.html#CLI
