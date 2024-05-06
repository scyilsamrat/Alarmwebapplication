# JavaScript Alarm Clock

## Project Overview
This project is a simple alarm clock application built with HTML, CSS, and JavaScript. It allows users to view the current time, set alarms, and manage a list of alarms. The alarm clock has three main components: the Clock Face, the Alarm Setup, and the Alarms List.

## Features

### Clock Face
- **Current Time:** The clock displays the current time in hours, minutes, and seconds. It updates every second to reflect real-time changes.

### Set Alarm
- **Alarm Input Boxes:** Users can set alarms by entering the desired time (hours, minutes, and seconds), along with an AM/PM selection.
- **Set Alarm Button:** After entering the alarm time, users can click the "Set Alarm" button to add the alarm to the Alarms List.
- **Alarm Alert:** When the set alarm time is reached, the application uses a JavaScript alert function to notify the user.

### Alarms List
- **Display Alarms:** This section shows a list of all alarms set by the user, including the specified time and whether it's AM or PM.
- **Delete Alarm:** Each alarm in the list has a "Delete" button. Clicking this button removes the alarm from the list. Deleting an alarm should not trigger any alert.

## Technical Requirements
- **HTML:** Used to structure the alarm clock's components, including input boxes for setting alarms and the list of existing alarms.
- **CSS:** Provides styling to enhance the visual appearance of the application.
- **JavaScript:** Handles the clock logic, alarm setting, and alarm management.

## Installation and Setup
1. Clone the repository to your local environment.
   ```bash
   git clone <repository_url>
