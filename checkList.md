## Must haves

We expect all submissions to have the following:

1. [] Build instructions - Include a simple README or other file giving clear,
   concise instructions on how to build/run your code.

2. []Repeatable builds - All of engineers should be able to take your submission
   and instructions and run them without any major, obvious issues.

3. []Version history - Version control and history is an important part of our
   process and we expect it to be a part of yours too. We like and prefer git.

# Gotchas --------

To be clear, many of the following issues will either reflect poorly or result
in a no-pass from the interview team:

1. [x] Unstructured code/Single commit - We expect any results to be reflective of
       production quality, maintainable code. Writing the entirety of the challenge in a
       single file, or committing it once is not reflective of that quality standard.

2. [x] Scope Creep - An important part of professional engineering is producing a
       product that matches requirements. Submissions that go far beyond what is asked will
       reduce our ability to engage with your submission and is not a good use of your
       time.

3. [x] Re-implementing standard libraries - Spending your limited time writing lists,
       http servers, security algorithms, etc. provided by the standard library is in general
       a bad idea and specifically not a good use of your time. It's okay to stick to the proven
       software!

   # Requirements ------------

[x] Your application should lead a user through the initial portion of qualifying
for an auto loan.

[x] It should consist of a landing page to collect basic info
about both the car they are interested in buying and their own financial
situation.

[] Based on this, you should be able to make a simulated network call
that will redirect the user to either a new account creation page or a
disqualification notice.

[] The styling should be simple, plain but deliberate.

# Landing Page

The initial page should show a simple form with inputs for the following field:

// [x] Auto Purchase Price (Currency)
// [x] Auto Make (Text)
// [x] Auto Model (Text)
// [x] User Estimated Yearly Income (Currency)
// [x] User Estimated Credit Score (Number from 300-850)

// [x] These fields are all required and should validate to type.
// [x] Provide feedback to the user when they wrong or missing.
// [] There should be space for marketing copy (Lorum Ipsem)
// and controls for moving forward.

# New Account Page

// If the api call does not return a disqualification message(see below), this page
// should have a simple account creation form including:

// [x] Username (Text)
// [x] Password (Text)

// [x]The username should be validated as an email and password should require more than 8
// characters and a number or special character. Ensure the user types their password
// twice to validate their intent.

- [x] Disqualification Page
      Display a simple page with the disqualification message that comes from
      the api call as well as fake information to get in contact with a customer service.
      There should be no further way to get off this page or re-enter the information.

- API call
  [x]You should implement a mock fetch call for your backend communication.

  [x]This call should
  have the same interface as the real fetch and return a promise wrapped response object.

  The response should return disqualify message (Lorum Ipsem is fine) if the purchase price
  is more than 1/5th of the income or their estimated credit is below 600. Otherwise it
  should return a positive qualification flag. A `Bad Request` response should be returned
  for any auto purchase price above $1,000,000.

# ------ if time

1. [] Design docs - Explain your thinking clearly in an overview document helps us
   and future readers (including yourself) better understand your thinking and your
   structure.

2. [] Comprehensive Testing - We don't expect complete test coverage, but you should
   provide some tests for key, critical areas. This helps us see your testing strategies
   and what you think is critical.

3. [] Comprehensive Error Handling - Understanding the places where errors can be thrown
   and how to deal with them is an important part of this task, but we again understand
   that doing this completely could be time consuming. Feel free to detail errors
   through comments or other similar means to demonstrate your understanding.
