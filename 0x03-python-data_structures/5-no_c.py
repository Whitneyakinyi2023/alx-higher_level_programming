#!/usr/bin/env python3
def no_c(my_string):
    if my_string[:]:
        new_translation = str.maketrans("", "", "cC")
        no_c = my_string.translate(new_translation)
        return no_c
    return my_string
