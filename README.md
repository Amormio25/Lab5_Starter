# Lab 5 - Starter

Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

Participants - Amormio (just me)

## Explore Part 3

1. No, you would not use unit testing for the specified messaging feature. It involves
   way too many components to test: creating the message which may include some form,
   sending the message which may include making sure the button works properly and sends
   to the correct user over a real network, the receiving user's display, etc.

2. Yes, a max message length is a very specific and singular thing to test for with
   basic logic. You simply receive a message as input and output likely something determining its validity (e.g. true if the input is below the max message length).
   This test is reasonable since it tests for one simple thing with no other complex list
   of dependencies on other features/logic.

[Github pages link](https://amormio25.github.io/Lab5_Starter/)
