#!/bin/bash

ng build --prod=true --baseHref=/johnnybouder/personal-site

cp docs/index.html docs/404.html
