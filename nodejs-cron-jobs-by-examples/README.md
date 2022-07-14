# The express module powers the webserver you will build. 
# The node-cron module is the task scheduler.

## task

1. Building the Backend Server and Scheduling a Task
 to schedule a task to run every minute.
    * * * * * *
  | | | | | |
  | | | | | day of week
  | | | | month
  | | | day of month
  | | hour
  | minute
  second ( optional )

  2.  Deleting an Error Log

  Consider a scenario where you need to routinely delete the log file from the server on the twenty-first day of every month

  Notice the pattern: 0 0 21 * *.

It defines a value for minutes and hours as 0 and 0 (“00:00” - the start of the day).
It defines a value for day as 21.
It does not define a month or day of the week.

3.  Exploring Using node-cron to Back Up Databases
Consider a scenario where you need to routinely back up a dump of the database at 11:59 PM every day. You can accomplish this with node-cron.

Notice the pattern: 59 23 * * *.

It defines a value for minute as 59.
It defines a value for hour as 23 (or 11 PM in a 24-hour clock).
It does not define a day, a month, or day of the week.

4. Exploring Using node-cron to Send Scheduled Emails

Consider a scenario where you curate a list of interesting links and then email them to subscribers every Wednesday. You can accomplish this with node-cron.

Notice the pattern: 0 0 * * 3.

It defines a value for minutes and hours as 0 and 0 (“00:00” - the start of the day).
It does not define a day of the month or a month.
It defines a value for day of the week as '3' (Wednesday).