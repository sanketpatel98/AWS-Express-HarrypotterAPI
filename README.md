# AWS-Express-HarrypotterAPI
This project is simple harry potter api project
It has CRUD operation in Express.js backend - integrated database dynamodb by AWS

Start project by hitting
nodemon app.js

populate database by hitting 
node seed.js

Do not forget to add .env file
.env file consist of =>
AWS_ACCESS_KEY_ID= your-key-id
AWS_SECRET_ACCESS_KEY= your-access-key
AWS_DEFAULT_REGION= your-database-region

End Points:
Get All characters: https://harrypotter-api-dynamodb.herokuapp.com/characters
Get character by id: https://harrypotter-api-dynamodb.herokuapp.com/characters/id
Add character: https://harrypotter-api-dynamodb.herokuapp.com/character · add JSON data in Body
Update character: https://harrypotter-api-dynamodb.herokuapp.com/character/id · add JSON data in Body
Delete character: https://harrypotter-api-dynamodb.herokuapp.com/character/id
