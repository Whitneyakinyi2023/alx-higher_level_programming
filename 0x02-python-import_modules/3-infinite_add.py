#!/usr/bin/python3
if __name__ == "__main__":
    from sys import argv

    if len(argv) <= 1:
        print("0")

    else:
        sumint = sum(int(arg) for arg in argv[1:])
        print("{}".format(sumint))
