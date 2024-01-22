#!/usr/bin/python3
def safe_print_list(my_list=[], x=0):
    try:
        tally = 0
        for i in range(x):
            print(my_list[i], end="")
            tally += 1
        print()
        return (tally)
    except IndexError:
        print()
        return (tally)
