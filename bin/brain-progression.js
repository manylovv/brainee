#!/usr/bin/env node

import { gameLogic } from '../src/index.js'
import { brainProgressionGame } from '../games/progression.js'
import { gameRules } from '../games/progression.js'
console.log(gameLogic(brainProgressionGame, gameRules))