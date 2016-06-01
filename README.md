# irisTable

Prompt: Build a simple prototype for a restaurant reservation system, usable by both staff and customers for my multiple restaurants.

# Data to Collect
* Users' average dining times (Staff can mark their checkout time when they pay) - this can be used to forecast availablility of seating
* Busiest times of day, and busiest days of week (Measure this as number of reservations per timeslot) - this can be used to assess whether staffing and restaurant hours are optimal for business
* Staff should be able to leave notes on customers in case they have dietary restrictions, medical issues, or also if we want to refuse their business in the future for poor behavior
* Staff activity - who modifies the most reservations or checks out the most customers? This can be used to assess performance of staff
* Keep track of all reservations (name, size, etc) to fact check or respond to Yelp reviews
* Additionally, average party size for reservations will help us assess if restaurant seating is optimal - should we use round tables because there are normally large parties, or square ones when the party size is more variant and we need to move tables around?

# Functional To-Do's
* Customers should be able to to make/view/edit their own reservations
* Staff should be able to view and update customers' reservations (each reservation should keep an update history to hold staff/customers accountable for changes)
* Customers/Staff should not be able to make multiple reservations in the same time slot. Additionally, customers should not be able to make reservations at other restaurants within 2 hours of an existing reservation without an explanation

# Reservation Functionality
* Restaurant capacity should be stored in the database, and as reservations are made, the capacity is updated to reflect the remaining possible seating arrangements 

# Extra To-Do's
* <strike>Add location of each restaurant via Google Maps on the reservation page</strike>
* Add a statistics page
