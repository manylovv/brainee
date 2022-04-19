#!/usr/bin/env node

import { gameLogic } from '../src/index.js';
import { brainPrimeGame, gameRules } from '../games/prime.js';
console.log(gameLogic(brainPrimeGame, gameRules));