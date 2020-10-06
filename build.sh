#!/bin/bash

ng build --prod=true --baseHref=/personal-site/

cp dist/personal-site/index.html dist/personal-site/404.html
