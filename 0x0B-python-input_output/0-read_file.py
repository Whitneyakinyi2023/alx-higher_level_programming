#!/usr/bin/python3
"""Python - input/output"""


def read_file(filename=""):
    """function that reads a text file (UTF8) and prints it to stdout"""
    f = open("UTF8", "r")
    print(f.read())
