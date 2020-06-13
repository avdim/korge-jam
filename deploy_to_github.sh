#!/usr/bin/env bash

./gradlew jsWeb jsWebMinWebpack
rm -rf docs/*
cp -r build/web-min-webpack/* docs/
cp -r build/genMainResources/* docs/
rm -rf docs/kotlin
rm -rf docs/kotlinx
rm -rf docs/linkdata
du -sh docs/*
