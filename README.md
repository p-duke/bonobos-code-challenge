== README

=== Dependencies

* This is a Rails application that uses version 5.1.4

* Postgresql database

* The Ruby version is 2.4.1 

* This application uses Bundler to manage dependencies. Bundler version 1.13.6

* Make sure to 'bundle install' (see instructions below)


=== Instructions for running the application:

* git clone https://github.com/p-duke/bonobos-code-challenge.git

* cd bonobos-code-challenge/

* run 'bundle install' in the command line

* start a Postgres connection (If your on mac this app is easy to install and use https://postgresapp.com/)

* run 'rake db:setup' in the command line

* run 'bundle exec rails s' in the command line

* Open a separate terminal window ( cmd + d or cmd + t on unix)

* cd bonobos-code-challenge/frontend-display/

* either run 'npm install && npm start' or 'yarn install && yarn start' (whichever you prefer)

* navigate to http://localhost:3000 in web browser (I was using Chrome)

* You should see the application loaded with products listed and an inventory selection panel available

=== Submission

__Design:__
In the design of this application I chose to break the domain into two models, Product and Inventory. Each product is associated with many inventory
models which each contain the neccessary stock information for a given product. Having this association will be useful when someone is trying to find the amount of product
available for a particular waist, length, and style.

__Testing:__
I tested the models for basic validations and associations with the help of FactoryGirl (now apparently called FactoryBot since October 2017) and Shoulda Matchers. I decided
to test the controllers with "request" specs instead of controller specs which I learned is recommended by both the Rails and Rspec core team because it "makes requests with
a thin wrapper around Rails’ integration tests, and are designed to drive behavior through the full stack, including routing." I included a JSON requst helper to parse
response body.

For the request specs I chose to only test GET index and show routes since that's all the current challenge required.

__Frontend:__
For the frontend display I decided to use React. I realize that the instructions just asked for a webpage to list the products and inventory grouped together
but I really like using React and wanted to try to create a fun experience for interacting with the data. 

In order to skip spending time configuring webpack and babel I chose to use the 'create-react-app' cli within the rails project. I would normally have the React frontend
in a completely different repository but thought that would make running this application more challenging and annoying so I kept them together. The user experience is meant
to be interactive, somewhat similar to what it's like to shop on Bonobos.com with these goals in mind:

* As a user I can scroll through the exisiting products or navigate to them from the sidebar
* As a user I can choose my waist size, pant length, and style to see what's currently available in stock
* After I select all three inventory attributes of a particular product I should see the "count" of how many pairs are available
* If I choose another product the other previously selected product sizes will be deselected

__API && Improvements:__
I chose to use a serializer for the product data to recieve nested inventory data on request with active_model_serializers. I also versioned the api by
namespacing the routes with '/api/v1.' If this application was more extensive I would create a more sophisticated approach to versioning by using
the appropriate request headers for the correct api version.

Additional improvements:
* Pagination for larger data sets that could portion our data while optimizing for speed.
* JSON based token authentication if we suddenly have users that want to purchase the products listed. That would mean that each api request would need to have
a valid token and user. If valid it would generate a token that would have an expiration date for a particular user session.

I enjoyed spending time thinking through how to build this application, especially when it came to parsing the data, and building the api. I hope
you enjoy it! Thanks!

- Peter
