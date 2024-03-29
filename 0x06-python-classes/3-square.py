#!/usr/bin/python3
"""Class allocation for a square"""


class Square:
    """Method"""
    def __init__(self, size=0):
        self.__size = size
        """Area of a square"""

        if type(size) is not int:
            raise TypeError("size must be an integer")
        if size < 0:
            raise ValueError("size must be >= 0")

    def area(self):
        return (self.__size ** 2)
