#!/bin/bash
npm install
npm rebuild node-sass
npm run eslint
npm run test:ci