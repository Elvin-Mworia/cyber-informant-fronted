from scipy.linalg import solve
import numpy as np
A=np.array([[9,3,1],[4,2,1],[1,1,1]])
b=np.array([25,20,5])
x=solve(A,b)
print(x)