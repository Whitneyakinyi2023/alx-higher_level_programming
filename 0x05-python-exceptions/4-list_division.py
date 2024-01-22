#!/usr/bin/python3
def list_division(my_list_1, my_list_2, list_length):
    results = []

    for x in range(list_length):
        try:
            elem_1 = my_list_1[x]
            elem_2 = my_list_2[x]

            if not all(isinstance(b, (int, float)) for b in (elem_1, elem_2)):
                    raise TypeError("wrong type",)

            if elem_1 == 0 or elem_2 == 0:
                          raise ZeroDivisionError("division by 0")

            answer = elem_1 / elem_2
            results.append(answer)

        except TypeError as e:
            print(e)
            results.append(0)

        except ZeroDivisionError as e:
            print(e)
            results.append(0)

        except IndexError:
            print("out of range")
            results.append(0)
    return (results)
