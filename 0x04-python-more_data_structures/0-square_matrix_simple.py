#!/usr/bin/python3
def square_matrix_simple(matrix=[]):
    square_matrix_simple = [[x**2 for x in row] for row in matrix]
    return square_matrix_simple
