#!/usr/bin/env node

import { gameLogic } from '../src/index.js';

import { brainCalcGame, gameRules } from '../games/calc.js';
console.log(gameLogic(brainCalcGame, gameRules));
