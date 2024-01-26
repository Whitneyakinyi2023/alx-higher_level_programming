#!/usr/bin/python3
"""Function to print out square"""


def print_square(size):
    """Prototype for the function to print squares"""
    if type(size) is not int:
        raise TypeError("size must be an integer")
    if size < 0:
        raise ValueError("size must be >= 0")
    if size is float and size < 0:
        raise TypeError("size must be an integer")
    for _ in range(size):
        print("#" * size)
