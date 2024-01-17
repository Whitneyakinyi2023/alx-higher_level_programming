#!/usr/bin/python3
for x in range(ord('z'), ord('a') - 1, -1):
    print("{}".format(chr(x).lower() if x % 2 == 0 else chr(x).upper(), end="")
