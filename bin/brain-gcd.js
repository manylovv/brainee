#!/usr/bin/env node

import { gameLogic } from '../src/index.js'
import { brainGCDGame } from '../games/gcd.js'

console.log(gameLogic(brainGCDGame()))