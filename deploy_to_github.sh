#!/usr/bin/env bash

./gradlew jsWeb
cp -r build/web* docs
du -sh docs/*
