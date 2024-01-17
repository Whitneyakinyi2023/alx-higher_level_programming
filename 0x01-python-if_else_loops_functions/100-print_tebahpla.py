#!/usr/bin/python3
for x in range(ord('z'), ord('a') - 1, -1):
    if x % 2 == 0:
        print(chr(x).lower(), end="")
    else:
        print(chr(x).upper(), end="")
