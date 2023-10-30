# Notes

Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

Task
You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

Examples
A size 3 diamond:
```
 *
***
 *
```
...which would appear as a string of " *\n***\n *\n"

A size 5 diamond:
```
  *
 ***
*****
 ***
  *
```
...that is:

"  *\n ***\n*****\n ***\n  *\n"

## Legend
- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## Plans

Pomodoro 1:
- ✅ DONE Plan pomodoro 1
- ✅ DONE Initial refactor
- ✅ DONE add project description
- ✅ DONE examples
- ✅ DONE User stories & UATs

Pomodoro 2:
Story1: negative + small numbers
As a user, I want to see null and one diamond for negative or small numbers
- ✅ DONE UAT1.1: When I pass -1, then I should see null
- ✅ DONE UAT1.2: When I pass 0, then I should see null
- ✅ DONE UAT1.3: When I pass 1, then I should see *
- ✅ DONE UAT1.4: When I pass 2, then I should see null

- 🚧 IN PROGRESS Story2: number 3+
As a user, I want to see a diamonds for bigger odd numbers 
- ✅ DONE UAT2.1: When I pass 3, then I should see " *\n***\n *\n"
- ✅ DONE UAT2.2: When I pass 4, then I should see null
- 🚧 IN PROGRESS UAT2.3: When I pass 5, then I should see "  *\n ***\n*****\n ***\n  *\n"
- ⚠ TODO UAT2.4: When I pass 6, then I should see null
- ⚠ TODO UAT2.5: When I pass 7, then I should see "   *\n   ***\n *****\n*******\n *****\n  ***\n  *\n"