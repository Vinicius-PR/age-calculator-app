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

## My steps and what I learned

First of all, I created the HTML. I put everything that I needed in the HTML file. After that, I went to styles and made it near as possible to the design. Also made it responsive.

Finally, I went to the logic, which was the most difficult part. Working with dates in JavaScript can be tricky sometimes.

To calculate the age, I started simply by just checking the difference between dates, getting the result in milliseconds. However, it did not help. To display the difference in years, months and days, I need much more than milliseconds. For that, I used the Date object to get the differences and also had to check for the Leap Year, so I could have a precise result. I confess that I did not know how to check if the year was a leap year or not. Now I know.

## Check it running

You can check it running by clicking on the link above, near description.

Thank you.
Vinicius 😁