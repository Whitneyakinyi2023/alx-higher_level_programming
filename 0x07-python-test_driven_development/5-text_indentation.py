#!/usr/bin/python3
"""function that executes text indentation"""


def text_indentation(text):
    """printing a new line  after each of these characters: ., ? and :"""
    if type(text) is not str:
        raise TypeError("text must be a string")
    
    exceptions_set = {'.', ':', '?',}
    new_line = True

    for char in text:
        if char in exceptions_set:
            print(char, end="\n\n")
            new_line = True
        elif char.strip():
            if new_line:
                print(char, end="")
                new_line = False
            else:
                print(char, end='')
        elif not new_line:
            print(' ', end='')
            new_line = True
