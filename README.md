# Quadratic Equation Solver

 Первєєв Євгеній ІМ-13
## Description 

This is a console application designed to solve quadratic equations, it supports two modes of operation: interactive(console) and non-interactive (file) mode.

## How to Run
Download nodejs https://nodejs.org/uk/
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
Value is not a number!
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
```
node .\main.js ttt      
Error: file ttt does not exist
```
```
node .\main.js input.txt
Not all arguments are numbers
```
# Link on Revert Commit
https://github.com/PerveevEvgen/mtrpz_lab1/commit/b068c54b6f3a67ec06536c40a5326d6ca319ab4c
