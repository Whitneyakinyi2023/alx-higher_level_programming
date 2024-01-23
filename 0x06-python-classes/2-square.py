#!/usr/bin/python3
"""Square size validation"""


class Square:
    def __init__(self, size=0):
        self.__size = size

        """Error handling in size validation"""

        if type(size) is not int:
            raise TypeError("size must be an integer")
        if size < 0:
            raise ValueError("size must be >= 0")
