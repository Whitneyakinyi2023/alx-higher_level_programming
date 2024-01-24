#!/usr/bin/python3
"""Class square defined"""


class Square:
    """ properties of squares defined"""

    def __init__(self, size=0):
        """Initialization"""

        self.size = size

    @property
    def size(self):
        """Returns size"""
        return (self._size)

    @size.setter
    def size(self, value):
        """property setter for size"""
        if not isinstance(value, (int, float)):
            raise TypeError("size must be a number")
        if value < 0:
            raise ValueError("size must be >= 0")
        self._size = value

    def area(self):
        """returns area of a square"""
        return (self.size ** 2)

    def __eq__(self, other):
        """Comparators based on the square area"""
        return (self.area() == other.area())

    def __ne__(self, other):
        """Comparators based on the square area"""
        return (self.area() != other.area())

    def __lt__(self, other):
        """Comparators based on the square area"""
        return (self.area() < other.area())

    def __le__(self, other):
        """Comparators based on the square area"""
        return (self.area() <= other.area())

    def __gt__(self, other):
        """Comparators based on the square area"""
        return (self.area() > other.area())

    def __ge__(self, other):
        """Comparators based on the square area"""
        return (self.area() >= other.area())
