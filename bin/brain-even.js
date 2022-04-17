#!/usr/bin/env node

import { gameLogic } from '../src/index.js'
import { brainEvenGame } from '../games/even.js'
import { gameRules } from '../games/even.js'

console.log(gameLogic(brainEvenGame, gameRules))