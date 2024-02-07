#!/usr/bin/python3
"""a class MyList that inherits from list:"""


class MyList(list):
    """Defined inheritance"""
    pass

    def print_sorted(self):
        """Method  to print list in ascending order"""
        
        print(sorted(list(self)))
