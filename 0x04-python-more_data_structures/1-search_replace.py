#!/usr/bin/python3
def search_replace(my_list, search, replace):
    search_replace = [replace if x == search else x for x in my_list]
    return search_replace
