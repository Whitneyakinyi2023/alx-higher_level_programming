#!usr/bin/python3
"""Function that divides elements of a matrix"""


def matrix_divided(matrix, div):
    """Divides elements of a matrix"""
    if any(type(r) != list or any(type(n) not in (int, float) for n in r) for r in matrix):
        raise TypeError("matrix must be a matrix (list of lists) of integers/floats")
    row_size = len(matrix[0])
    
    if not all(len(r) == row_size for r in matrix):
        raise TypeError("Each row of the matrix must have the same size")
    if type(div) not in (int, float):
        raise TypeError("div must be a number")
    if div == 0:
        raise ZeroDivisionError("division by zero")
    
    result = [[round(n / div, 2) for n in r] for r in matrix]
    return result
