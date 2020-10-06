#!/bin/bash

ng build --prod=true --baseHref=/personal-site

cp docs/index.html docs/404.html
