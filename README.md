# Quadratic Equation Solver

 Первєєв Євгеній ІМ-13
## Description 

This is a console application designed to solve quadratic equations, it supports two modes of operation: interactive(console) and non-interactive (file) mode.

In the interactive mode (application is launched without any arguments) application prompts user to enter the values of the coefficients a, b, and c one by one, then displays the resulting equation on the screen, and computes and displays the roots of the equation. If user enter invalid values he will see an error and application prompts him to try again. 

In the non-interactive (file) mode, application accepts a single argument, which is the path to a file with coefficients of the equation. The file should contain three numbers separated by a single space.

## How to Run

### To start in interactive mode:
```
$ node main.js
```

### To start in interactive mode:
```
$ node main.js /path/to/file
```

## Application output

### Interactive mode:

```
Enter the coefficient a: 2
Enter the coefficient b: 5
Enter the coefficient c: -3
------------------------------
a = 2
b = 5
c = -3
Equation is: (2)x^2 + (5)x +(-3) = 0 
2 roots are:
 x1 = 0.5
 x2 = -3
```
Example with wrong input
```
Enter the coefficient a: 2
Enter the coefficient b: 5
Enter the coefficient c: bukva
Please enter a numerical value
Enter the coefficient c: -3
-------------------------------
a = 2
b = 5
c = -3
Equation is: (2)x^2 + (5)x +(-3) = 0     
2 roots are:
 x1 = 0.5
 x2 = -3
```
Example with 0 roots
```
Enter the coefficient a: 3
Enter the coefficient b: 3
Enter the coefficient c: 4
--------------------------
a = 2
b = 2
c = 2
Equation is: (3)x^2 + (3)x +(4) = 0
There is 0 roots
```
Example with 1 root
```
Enter the coefficient a: 1
Enter the coefficient b: -6
Enter the coefficient c: 9
-------------------------
a = 1
b = -6
c = 9
Equation is: (1)x^2 + (-6)x +(9) = 0
1 root is:
x = 3
```

### Non-interactive

File input.txt: 2 5 -3

```
$node main.js input.txt
```
```
a = 2
b = 5
c = -3
Equation is: (2)x^2 + (5)x +(-3) = 0 
2 roots are:
 x1 = 0.5
 x2 = -3
```
File input.txt: 5 6 7 
```
Equation is: (5)x^2 + (6)x +(7) = 0 
0 roots  
```

# Link on Revert Commit
