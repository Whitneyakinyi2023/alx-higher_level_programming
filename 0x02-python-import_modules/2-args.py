#!/usr/bin/python3
if __name__ == "__main__":
    from sys import argv
    num_arguments = len(argv) - 1

    if num_arguments == 0:
        print("0 arguments.")
    elif num_arguments == 1:
        print("1 argument:")
    else:
        print("{} arguments:".format(num_argument))

    for index, argument in enumerate(argv[1:], start=1):
        print("{}: {}".format(index, argument))
