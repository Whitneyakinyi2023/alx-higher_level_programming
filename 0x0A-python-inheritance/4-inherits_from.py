#!/usr/bin/python3
"""Only subclass of"""


def inherits_from(obj, a_class):
    """Checks for subclass"""
    return issubclass(type(obj), a_class) and type(obj) != a_class
