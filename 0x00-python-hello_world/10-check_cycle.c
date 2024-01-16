#include <stdlib.h>
#include <string.h>
#include <stdio.h>
#include "lists.h"
/**
 *  check_cycle - checking cycle program
 *  list: pointer to list
 *  Return: 0 if there is no cycle, 1 if there is a cycle
 */
int check_cycle(listint_t *list)
{
	listint_t *snail = list;
	listint_t *horse = list;

	if (!list)
		return(0);

	while (snail && horse && horse ->next)
	{
		snail = snail->next;
		horse = horse->next->next;

		if (snail == horse)
			return (1);
	}
	return (0);
}
