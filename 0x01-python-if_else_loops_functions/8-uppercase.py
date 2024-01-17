#!/usr/bin/python3
def uppercase(str):
    for r in str:
        if ord(r) >= 97 and ord(r) <= 122:
            r = chr(ord(r) - 32)
            print("{}".format(r), end="")
    print()
