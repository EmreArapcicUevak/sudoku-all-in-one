from aima_toolkit.ConstraintSatisfactionProblemPackage import ConstraintSatisfactionProblem, Constraint
from aima_toolkit.ConstraintSatisfactionProblemPackage.ConstraintPropagation import node_constraint_propagation
from typing import Any
from itertools import product

def get_equal_constraint_func(index : int, depended_var : str, aux_var : str):
  assert index >= 0

  def equal_constraint_func(assignment: dict[ str, Any]):
    return assignment[depended_var] == assignment[aux_var][index]

  return equal_constraint_func


def add_cage_constraint(csp : ConstraintSatisfactionProblem, variables : list[str]):
  assert len(variables) >= 2

  number = int(variables[0])
  assert number > 0

  current_temp_var_name = "temp_cage_0"
  for i in range(len(csp.variables)):
    current_temp_var_name = f"temp_cage_{i}"
    if current_temp_var_name not in csp.variables: break

  dependent_domains = [csp.domains[variable] for variable in variables[1:]]
  aux_variable_domain = set(product(*dependent_domains)) # Compute the cross product of the variable
  csp.add_variable(current_temp_var_name, aux_variable_domain) # Add the aux variable

  for index, depended_variable in enumerate(variables[1:]): # Link the depended variables to the aux variable
    csp.add_constraint(Constraint(
      variables = [current_temp_var_name, depended_variable],
      constraint_func=get_equal_constraint_func(index, depended_variable, current_temp_var_name)
    )) # Link the two variables together

  csp.add_constraint(Constraint(
    variables = [current_temp_var_name],
    constraint_func = lambda assignment: sum(assignment[current_temp_var_name]) == number,
  )) # Add the final constraint that makes sure that X0 is equal to the sum of other components

  node_constraint_propagation(csp, remove_constraints_after=True) # Get rid of all the combinations of other variables that cannot work


__all__ = ['add_cage_constraint']