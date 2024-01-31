#!/usr/bin/python3
"""Definition of a rectangle"""


class Rectangle:
    """Square defined"""
    def __init__(self, width=0, height=0):
        """iClass"""

        self.height = height
        self.width = width

    @property
    def width(self):
        """Retrieva of required width"""
        return (self.__width)

    @width.setter
    def width(self, value):
        """Width property setter"""
        if not isinstance(value, int):
            raise TypeError("width must be an integer")
        elif value < 0:
            raise ValueError("width must be >= 0")
        else:
            self.__width = value

    @property
    def height(self):
        """Retieval of required height"""
        return (self.__height)

    @height.setter
    def height(self, value):
        """Height property setter"""
        if not isinstance(value, int):
            raise TypeError("height must be an integer")
        elif value < 0:
            raise ValueError("height must be >= 0")
        else:
            self.__height = value
