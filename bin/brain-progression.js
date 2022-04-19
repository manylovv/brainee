#!/usr/bin/env node

import gameLogic from '../src/index.js';
import { brainProgressionGame, gameRules } from '../games/progression.js';

console.log(gameLogic(brainProgressionGame, gameRules));
