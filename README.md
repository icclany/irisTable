# irisTable #

Prompt: Build a simple prototype for a restaurant reservation system, usable by both staff and customers for my multiple restaurants.
*Bullet points are crossed off when they have been implemented for this proof-of-concept*

## Data to Collect ##
### Customers ###
* Users' most frequent reservation time - the site could prepopulate the reservation form with this, to save time. In general, shortcuts would be nice so users get a sense of having a personalized experience from Iris Restaurant Group (e.g. "Welcome back, John! Would you like make another dinner reservation at Mussels on Mussels?")
* Staff and customers should be able to leave notes on the customer's profile in case they have dietary restrictions, medical issues. Staff should be able to make notes on customers if we want to refuse their business in the future for poor behavior

### Reservations ###
* <strike>Having a record of all reservations (name, size, etc) will be useful to fact check or respond to Yelp reviews</strike>
* Users' average dining times (Staff can mark their checkout time when they pay) - this can be used to forecast availablility of seating.  Would be good to have a lighter, staff version of IrisTable for phone that simply shows reservations with a "checkout" button and "notes" button
* Busiest times of day, and busiest days of week (Measure this as number of reservations per timeslot) - this can be used to assess whether staffing and restaurant hours are optimal for business
* Additionally, average party size for reservations will help us assess if restaurant seating is optimal - should we use round tables because there are normally large parties, or square ones when the party size is more variant and we need to move tables around?

### Site Usage ###
* Staff activity - who modifies the most reservations or checks out the most customers? This can be used to assess performance of staff
* Which customers make the most reservations? They should get perks based on how often they dine at each restaurant, to let them know they are appreciated

## Functional To-Do's ##
* <strike>All users are marked as customers by default; admin (me) can later mark them a staff. Staff/Customers have different site visibility</strike>
* Customers should be able to to make/view/edit their own reservations
* After dining, customers and servers should be able to rate each other (I got this idea from Uber, which I always thought was a great idea)
* Add form validation on reservation page (date, size of reservation are required)
* <strike>Schedule page is visible to staff,</strike> shows schedule for which restaurant the staff user works for 

## Reservation Functionality ##
* <strike>Restaurant capacity should be stored in the database, and available reservations are calculated by seeing how much capacity is left within a dining window</strike>
* <strike>Dates/times that have passed should not be selectable for reservations</strike>
* Dates and times that are all booked should not be selectable in the form (to save a user time)
* Customers/Staff should not be able to make multiple reservations in the same time slot. Additionally, customers should not be able to make reservations at other restaurants within 2 hours of an existing reservation without an explanation
* <strike>Staff should be able to view and update customers' reservations</strike> (each reservation should keep an update history to hold staff/customers accountable for changes)

## Extra To-Do's ##
* <strike>Add location of each restaurant via Google Maps on the reservation page</strike>
* Add a statistics page
