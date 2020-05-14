# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Location.destroy_all
Task.destroy_all

@user = User.create(username: "Admin", email: "admin@email.com", password: "123456")
p "#{User.count} user(s) created"


newYork = Location.create(city: "New York", country: "U.S.A.", photo: "https://imgur.com/Fa34Yuv.jpg", lodgingDetails: "1Hotel 60 Furman St, Brooklyn, NY 11201", activityDetails: "Brooklyn Tour Guide Tuesday 10AM", user: @user)

agra = Location.create(city: "Agra", country: "India", photo: "https://imgur.com/hR5WohQ.jpg", lodgingDetails: "Swatibal Vidhya Peeth School Link Rd, Paktola, Tajganj, Basai, Uttar Pradesh 282001, India", activityDetails: "Taj Mahal Photo 4PM", user: @user)

montreal = Location.create(city: "Montreal", country: "Canada", photo: "https://imgur.com/gCTttSP.jpg", lodgingDetails: "5000 Rue de Lanaudière, Montréal, Québec H2J 3R3, Canada", activityDetails: "Tam-Tams, Mount Royal Park, All Day", user: @user)

paris = Location.create(city: "Paris", country: "France", photo: "https://imgur.com/Ot2uQEu.jpg", lodgingDetails: "2 Square Caulaincourt, 75018 Paris, France", activityDetails: "Eiffel Tower Tour 12 PM", user: @user)

p "#{Location.count} locations created"



newYork1 = Task.create(listItem: "Walk brooklyn bridge", location: newYork)
newYork2 = Task.create(listItem: "Eat slice of pizza", location: newYork)
newYork3 = Task.create(listItem: "Lay around Central Park", location: newYork)
newYork4 = Task.create(listItem: "Bring bagels home", location: newYork)

agra1 = Task.create(listItem: "Eat all the curries", location: agra)
agra2 = Task.create(listItem: "Take photos at Taj Mahal", location: agra)
agra3 = Task.create(listItem: "Visit spice market", location: agra)
agra4 = Task.create(listItem: "Buy mu-mus.", location: agra)

montreal1 = Task.create(listItem: "Walk down Rue Ste. Catherine", location: montreal)
montreal2 = Task.create(listItem: "Try poutine", location: montreal)
montreal3 = Task.create(listItem: "Go to Tam-Tams", location: montreal)
montreal4  = Task.create(listItem: "Go to Piknic Electronik", location: montreal)

paris1 = Task.create(listItem: "Visit Picasso Museum", location: paris)
paris2 = Task.create(listItem: "People watch while sipping espresso", location: paris)
paris3 = Task.create(listItem: "Learn how to make wine", location: paris)
paris4 = Task.create(listItem: "Eat all chocolate croissants", location: paris)

p "#{Task.count} tasks created"