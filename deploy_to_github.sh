#!/usr/bin/env bash

./gradlew jsWeb
rm -rf docs/*
cp -r build/web/* docs/
du -sh docs/*
