# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# User.destroy_all
# Location.destroy_all
# Task.destroy_all

# User.create(username: "Admin", email: "admin@email.com", password: "123456")
# p "#{User.count} user(s) created"


newYork = Location.create(city: "New York", country: "U.S.A.", photo: "../../Assets/NY.jpg", lodgingDetails: "1Hotel 60 Furman St, Brooklyn, NY 11201", activityDetails: "Brooklyn Tour Guide Tuesday 10AM", user_id: 4)

agra = Location.create(city: "Agra", country: "India", photo: "../../Assets/Agra.jpg", lodgingDetails: "Swatibal Vidhya Peeth School Link Rd, Paktola, Tajganj, Basai, Uttar Pradesh 282001, India", activityDetails: "Taj Mahal Photo 4PM", user_id: 4)

montreal = Location.create(city: "Montreal", country: "Canada", photo: "../../Assets/MTL.jpg", lodgingDetails: "5000 Rue de Lanaudière, Montréal, Québec H2J 3R3, Canada", activityDetails: "Tam-Tams, Mount Royal Park, All Day", user_id: 4)

paris = Location.create(city: "Paris", country: "France", photo: "../../Assets/Paris.jpg", lodgingDetails: "2 Square Caulaincourt, 75018 Paris, France", activityDetails: "Eiffel Tower Tour 12 PM", user_id: 4)

p "#{Location.count} locations created"



newYork1 = Task.create(listItem: "Walk brooklyn bridge", location_id: 5)
newYork2 = Task.create(listItem: "Eat slice of pizza", location_id: 5)
newYork3 = Task.create(listItem: "Lay around Central Park", location_id: 5)
newYork4 = Task.create(listItem: "Bring bagels home", location_id: 5)

agra1 = Task.create(listItem: "Eat all the curries", location_id: 6)
agra2 = Task.create(listItem: "Take photos at Taj Mahal", location_id: 6)
agra3 = Task.create(listItem: "Visit spice market", location_id: 6)
agra4 = Task.create(listItem: "Buy mu-mus.", location_id: 6)

montreal1 = Task.create(listItem: "Walk down Rue Ste. Catherine", location_id: 7)
montreal2 = Task.create(listItem: "Try poutine", location_id: 7)
montreal3 = Task.create(listItem: "Go to Tam-Tams", location_id: 7)
montreal4  = Task.create(listItem: "Go to Piknic Electronik", location_id: 7)

paris1 = Task.create(listItem: "Visit Picasso Museum", location_id: 8)
paris2 = Task.create(listItem: "People watch while sipping espresso", location_id: 8)
paris3 = Task.create(listItem: "Learn how to make wine", location_id: 8)
paris4 = Task.create(listItem: "Eat all chocolate croissants", location_id: 8)

p "#{Task.count} tasks created"

# newYork.tasks.push(newYork1, newYork2, newYork3, newYork4)
# agra.tasks.push(agra1, agra2, agra3, agra4)
# montreal.tasks.push(montreal1, montreal2, montreal3, montreal4)
# paris.tasks.push(paris1, paris2, paris3, paris4)
