FROM mongo

COPY items.js /items.json 
COPY categories.json /categories.json
COPY questions.json /questions.json

CMD mongoimport --host mongo --db bot-db --collection items --type json --file /items.json --jsonArray
CMD mongoimport --host mongo --db bot-db --collection categories --type json --file /categories.json --jsonArray
CMD mongoimport --host mongo --db bot-db --collection questions --type json --file /questions.json --jsonArray
