#!/usr/bin/python3
"""Dedfinition of magic class"""
import math
"""Importation of module"""


class MagicClass:
    """Magic class allocation"""

    def __init__(self, radius=0):
        """initialization"""

        self.__radius = 0

        if type(radius) is not int and type(radius) is not float:
            raise TypeError("radius must be a number")

        else:
            self.__radius = radius

        def area(self):
            """method: area"""

            return (self.__radius ** 2 * math.pi)

        def circumference(self):
            """returns circumference"""

            return (2 * math.pi * self.__radius)
