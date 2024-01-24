#!/usr/bin/python3
"""Square class allocation"""


class Square:
    """method"""
    def __init__(self, size=0, position=(0, 0)):
        self.__size = size
        self.__position = position

    @property
    def size(self):
        """getter"""
        return (self.__size)

    @size.setter
    def size(self, value):
        """setter"""
        if type(value) is not int:
            raise TypeError("size must be an integer")
        if value < 0:
            raise ValueError("size must be >= 0")
        self.__size = value

    @property
    def position(self):
        """method for position:getter"""
        return (self.__position)

    @position.setter
    def position(self, value):
        """Method for position: setter"""
        if(
                type(value) is not tuple
                or len(value) != 2
                or type(value[0]) is not int
                or type(value[1]) is not int
                or value[0] < 0
                or value[1] < 0
                ):
            raise TypeError("position must be a tuple of 2 positive integers")
        self.__position = value

    def area(self):
        return (self.__size ** 2)

    def my_print(self):
        """printig the square using # on stdout"""
        if self.__size == 0:
            print("")
        else:
            for _ in range(self.__position[1]):
                print()

            for _ in range(self.__size):
                print(" " * self.__position[0] + "#" * self.__size)

    def __str__(self):
        """Print Square instance"""
        if self.size == 0:
            return ''
        spaces = ' ' * self.position[0]
        new_lines = '\n' * self.position[1]
        hashes = '#' * self.size
        return new_lines + '\n'.join(spaces + hashes for e in range(self.size))
