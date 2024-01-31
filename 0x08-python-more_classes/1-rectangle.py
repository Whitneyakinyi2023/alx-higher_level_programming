#!/usr/bin/python3
"""Definition of a rectangle"""


class Rectangle:
    """Square defined"""
    def __init__(self, width=0, height=0):
        """creation of a rectangle instance"""
        self.__height = height
        self.__width = width

    @property
    def width(self):
        """Retrieva of required width"""
        return (self.__width)

    @width.setter
    def width(self, value):
        """Width property setter"""
        if type(value) is not int:
            raise TypeError("width must be an integer")
        if value < 0:
            raise ValueError("width must be >= 0")
        self.__width = value

    @property
    def height(self):
        """Retieval of required height"""
        return (self.__height)

    @height.setter
    def height(self, value):
        """Height property setter"""
        if type(value) is not int:
            raise TypeError("height must be an integer")
        if value < 0:
            raise ValueError("height must be >= 0")
        self.__height = value
