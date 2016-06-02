# irisTable #

Prompt: Build a simple prototype for a restaurant reservation system, usable by both staff and customers for my multiple restaurants.

## Data to Collect ##

### Reservations ###
* Having a record of all reservations (name, size, etc) will be useful to fact check or respond to Yelp reviews
* Users' average dining times (Staff can mark their checkout time when they pay) - this can be used to forecast availablility of seating.  Would be good to have a lighter, staff version of IrisTable for phone that simply shows reservations with a "checkout" button and "notes" button
* Busiest times of day, and busiest days of week (Measure this as number of reservations per timeslot) - this can be used to assess whether staffing and restaurant hours are optimal for business
* Additionally, average party size for reservations will help us assess if restaurant seating is optimal - should we use round tables because there are normally large parties, or square ones when the party size is more variant and we need to move tables around?

### Customers ###
* Users' most frequent reservation time (this is calculated by the reservations saved to the database) - the site could prepopulate a user's reservation form with this. 
* In general, shortcuts would be nice so users get a sense of having a personalized experience from Iris Restaurant Group (e.g. "Welcome back, John! Would you like make another dinner reservation at Mussels on Mussels?")
* Staff and customers should be able to leave notes on the customer's profile in case they have dietary restrictions, medical issues, etc.. Staff should be able to make notes on customers if we want to refuse their business in the future for poor behavior

### Site Usage ###
* Staff activity - who modifies the most reservations or checks out the most customers? This can be used to assess performance of staff
* Which customers make the most reservations? They should get perks based on how often they dine at each restaurant, to let them know they are appreciated

## MongoDB Models ##
* Restaurants
* Reservations
* Members

## Current Features ##
* There is a customers view, a staff view, and admin view. Customers can view/make reservations, staff can view/edit the current reservation schedule, and the admin can do both. The admin also has a private "users" page where they can search, view and edit all users of the site.
* All users are marked as customers by default when they sign up; admin (me) can later mark them as staff.
* Restaurant "locations" are viewable on Google Maps, in the home page
* The reservation page uses [angular-bootstrap-datetimepicker](https://github.com/dalelotts/angular-bootstrap-datetimepicker) for picking times. I edited it so that a user can't select days/times in the past, but should probably make it so that users can only make reservations at least 1 hour in advance. The booking windows are every 30 minutes.
* The reservation page alerts the user of the availability of their selected time. This is calculated by adding the number of diners from all reservations within a 2 hour time window, and seeing if there is still capacity for the requested party. 
* The schedule page shows upcoming reservations within each timeblock of the day. There is a current-diners panel that shows who is still dining at the restaurant at the moment, and staff can check them out when they are done for data collection. When the staff checks a party out, the party is no longer visible for the current-diners panel. 

## Extra To-Do's/ Future ##

* Each reservation should keep an update history to hold staff/customers accountable for changes made
* The schedule page, viewable by staff, should show just the restaurant the staff works for. They don't need to see the schedule of other restaurants (this could be implemented by perhaps adding a restaurantId reference to each staff member).
* The schedule page's current-diners panel should display the total number of diners at the bottom. This will be helpful for staff to check availability for walk-in diners.
* After dining, customers and servers should be able to rate each other (I got this idea from Uber, which I always thought was a great idea)
* Reservation logic: Customers/Staff should not be able to make multiple reservations in the same time slot. Additionally, customers should not be able to make reservations at other restaurants within 2 hours of an existing reservation without an explanation
* If a reservation time isn't available, the site should show other options for available times that are close to the requested one.
* Add form validation on reservation page (date, size of reservation are required)
* Add restaurant hours to restaurant Model. That way, each restaurant's reservation page and schedule page can filter by the restaurant hours currently in the system. Right now, I'm just using a sample array of the same times for all.
* Add a statistics page
* Use something else than angular-bootstrap-datetimepicker if I want to customize more

Note: This site was generated with the [FSG boilerplate](https://github.com/FullstackAcademy/fsg)
