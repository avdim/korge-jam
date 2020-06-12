#!/usr/bin/env bash

./gradlew jsWebMinWebpack
rm -rf docs/*
cp -r build/web-min-webpack/* docs/
du -sh docs/*
