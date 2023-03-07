![alt text](https://github.com/GeccoRhiguelNavalta/KitchenGenie/blob/main/kitchengenie/src/assets/Logo.png "Logo Title Text 1")

![alt text](https://github.com/GeccoRhiguelNavalta/KitchenGenie/blob/main/kitchengenie/src/assets/genie.png "Logo Title Text 1")

# KitchenGenie - A Recipe Finder App

KitchenGenie is a recipe finder app that allows users to input at least three ingredients and fetches recipes from an API that contains those ingredients. The app is named after the genie with three wishes since users are required to input three ingredients.

The app uses the Edamam Recipes API, which provides an extensive database of recipes. However, due to limitations from the API, the app is only allowed to send ten requests per minute.

### Tech Stack and Packages Used

The following technologies were used to develop KitchenGenie:

- React: A JavaScript library used for building user interfaces
- NodeJS: An open-source, cross-platform JavaScript runtime environment used for server-side scripting
- ExpressJS: A fast, unopinionated, minimalist web framework for Node.js
- Mongoose: A MongoDB object modeling tool designed to work in an asynchronous environment
- MongoDB Atlas: A document-oriented NoSQL database used for high volume data storage
- Nodemon: A tool that automatically restarts the server when file changes are detected
- express-rate-limiter: A package used to limit the number of requests made to the API
- CORS: A package used to enable Cross-Origin Resource Sharing
- Dotenv: A zero-dependency module that loads environment variables from a .env file

### Limitations

Due to the API limitations, the app can only send ten requests per minute. Therefore, if you continuously enter or delete ingredients more than the limit, the app will have a cool down period (approx. < 1 min).

### Conclusion

KitchenGenie is a simple but effective recipe finder app that demonstrates the power of APIs and the importance of working within API limitations. With its intuitive user interface and comprehensive recipe database, KitchenGenie is the perfect tool for anyone looking to make delicious meals with the ingredients they have on hand.
