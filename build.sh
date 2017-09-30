#!/bin/bash

rm -rf docs
yarn build
mv build docs
cp _config.yml docs

