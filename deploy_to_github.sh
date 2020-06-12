#!/usr/bin/env bash

./gradlew jsWebMinWebpack
rm -rf docs/*
cp -r build/web-min-webpack/* docs/
rm -rf docs/kotlin
rm -rf docs/kotlinx
rm -rf docs/linkdata
du -sh docs/*
