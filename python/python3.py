import math
#input 1 array. output all prime number have in the array
a=int(input())
n=[]
res=[]
for i in range (0,a):
    b=int(input())
    n.append(b)
for i in range (0,a):
    if n[i]==1: 
        continue
    c=True
    for j in range (2, n[i]):
        if n[i]%j==0: 
            c=False
    if c==True:
        res.append(n[i])
print(res)

#sort (merge sort, quick sort)
#n^2
#n
#nlogn