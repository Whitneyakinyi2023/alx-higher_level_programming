#!/usr/bin/python3
"""write text to a file"""


def write_file(filename="", text=""):
    """Function that writes text to a file"""
    with open(filename, 'w', encoding="utf-8") as file:
        number_of_characters = file.write(text)
    return number_of_characters
