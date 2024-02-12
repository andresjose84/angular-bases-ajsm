#! /bin/bash

#deploy project
ng build --base-href ./

#delete doc folder
rm -rf ./doc

#create folder docs
mkdir -p ./docs

#copy project folder doc
cp -r ./dist/bases/browser/. ./docs
