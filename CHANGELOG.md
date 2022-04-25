# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.4.0] - 2022-04-27
### Added
* Home page where user can view club announcements, news, and events
* Admin access to particular users that can delete information from the home and workouts pages
* Filtering workouts by category
* Viewing PDFs of each workout on button click
* Basic email notification service for admin users
* Profile page for viewing and editing personal profile

### Changed
* Moved data from exercises module into workout table
* Adding workouts form now pushes workouts to the database

## [0.3.0] - 2022-03-27
### Added
* Authentication modules
* Parse user authentication
* Protected routes on app data display
* Added logout button to menubar, and added logout functionality

### Changed
* Changed routes to use protected routes and new authentication modules
* User sign up and login now connects to the database

## [0.2.0] - 2022-03-16
### Added
* Static login page with styling
* Static register page with styling
* Table to view all exercises being pulled from Parse database
* Dynamic routing throughout the application

### Changed
* Pull data from Parse database instead of local JSON file
* Convert previous version from Preact to React

## [0.1.0] - 2022-02-23
### Added
* Table to view all workouts being pulled from local JSON file with styling
* Static form for user to add a workout
* Version built using Preact