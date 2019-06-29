#!/bin/bash

sleep 30
mongoimport --host mongo --db bot-db --collection items --type json --file /items.json --jsonArray
mongoimport --host mongo --db bot-db --collection catogary--type json --file /categories.json --jsonArray
mongoimport --host mongo --db bot-db --collection questions --type json --file /questions.json --jsonArray
#mongoimport --host mongo --db bot-db --collection items --type json --file /init.json --jsonArray
