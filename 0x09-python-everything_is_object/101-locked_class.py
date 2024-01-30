#!/usr/bin/python3
"""Lockedclass: user will be able to dynamucallly
    create an instance attribute titled first_name"""


class LockedClass:
    """user can dynamically access first_name attribute"""
    __slots__ = ("first_name",)
