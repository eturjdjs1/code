a=int(input())
n=[]
for i in range (0,a):
    b=int(input())
    n.append(b)
n=sorted(n)
res1=n[a-2]
print (res1)
