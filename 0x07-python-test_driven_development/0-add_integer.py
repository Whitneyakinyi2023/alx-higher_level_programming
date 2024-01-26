#!/usr/bin/python3
"""Function to add integers"""


def add_integer(a, b=98):
    """Sums up the Values of two integers"""

    if type(a) not in (int, float):
        raise TypeError("a must be an integer")
    if type(b) not in (int, float):
        raise TypeError("b must be an integer")
    return (int(a) + int(b))
