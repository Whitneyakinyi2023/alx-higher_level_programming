#!/usr/bin/python3
"""Python - input/output"""


def read_file(filename=""):
    """function that reads a text file (UTF8) and prints it to stdout"""
    with open(filename, encoding="utf8") as file:
        for line in file:
            print(line, end='')
