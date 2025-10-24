from aima_toolkit.ConstraintSatisfactionProblemPackage import ConstraintSatisfactionProblem, Constraint
from typing import Any

def get_thermo_constraint_func(for_variables: tuple[str, str]):
  def thermo_constraint_func(assignment : dict[str, Any]):
    return assignment[for_variables[0]] < assignment[for_variables[1]]

  return thermo_constraint_func

def add_thermo_constraint(csp: ConstraintSatisfactionProblem, variables: list[ str ]):
  for i in range( len( variables ) - 1 ):
    arc = (variables[ i ], variables[ i + 1 ])
    csp.add_constraint(
      Constraint(
        list( arc ),
        get_thermo_constraint_func(arc)
      )
    )


__all__ = [ 'add_thermo_constraint' ]