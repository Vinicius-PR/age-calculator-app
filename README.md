# Frontend Mentor - Age calculator app

![Design preview for the Age calculator app coding challenge](./design/desktop-preview.jpg)

## The challenge

The challenge is to build out this age calculator app and get it looking as close to the design as possible. In the design did not have the title but I decided to include it. It is a good practice to put an **h1** element at each page.

The users can: 

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

## Technologies used

This is a simple project, so I did not use any framework or library. I used:

- HTML5
- CSS3
- JavaScript

## The logic

To explain the logic, I'll show an example.
Date format will be: day/month/year

Lets supose that:
* A: The now day will be 03/01/2025
* B: The birth date that the user provided is 24/12/1993

Performing the subtraction:

```
  (B):  03 / 01 / 2025
 -(A):  24 / 12 / 1993
-----------------------
Diff: -21 / -11 / 32
```

* Day difference is 03 - 24 = -21
* Month difference is 01 - 12 = -11
* Year difference is 2025 - 1993 = 32

If the difference in days is negative, it means the same day of the month hasn’t been reached yet. In this case, we “borrow” days from the previous month.

The previous month of 01 (january) is 12 (December). So we do:
* -21 (Day Difference) + 31 (Amount of days of December) = **10 days**

Also will need to decrease the difference of month, because we borrowed days
* Month difference will be -11 - 1 = -12

In the code, it was done like this:

```js
  if (dayDiff < 0) {
    /* 
      Get the value of the last day of the previous month. To do this, must:
      1 - set the day value to 0 in the constructor to get previous date. It will return a date object of the last day of the previous month.
      2 - Use getDate() method to get the value of the date. It can be 28, 29, 30 or 31.
    */
    const prevMonth = new Date(nowDate.getFullYear(), nowDate.getMonth(), 0);
    dayDiff += prevMonth.getDate();
    monthDiff--;
  }
```

The next step is to check if, after adjusting the days, the number of months becomes negative. This means the full year hasn’t been completed yet. In this case, we “borrow” one year.

One year has 12 months, so we do:
* The month difference will be -12 + 12 (the number of months that were borrowed) = **0 months**

Since we borrowed one year, we must also decrease the year difference by 1:
* The year difference will be 32 - 1 = **31 years**

In the code, it was done like this:

```js
// Adjust the months if it's negative.
  if (monthDiff < 0) {
    monthDiff += 12;
    yearDiff--;
  }
```

The final result of the difference between 24/12/1993 - 03/01/2025 is **31 years, 0 months and 10 days**


## My steps and what I learned

First of all, I created the HTML. I put everything that I needed in the HTML file. After that, I went to styles and made it near as possible to the design. Also made it responsive.

Finally, I went to the logic, which was the most difficult part. Working with dates in JavaScript can be tricky sometimes.

To calculate the age, I started simply by just checking the difference between dates, getting the result in milliseconds. However, it did not help. To display the difference in years, months and days, I need much more than milliseconds. For that, I used the Date object to get the differences and also had to check for the Leap Year, so I could have a precise result. I confess that I did not know how to check if the year was a leap year or not. Now I know.

## Check it running

You can check it running by clicking on the link above, near description.

Thank you.
Vinicius 😁