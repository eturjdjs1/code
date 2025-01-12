a=int(input())
n=[]
s=[]
for i in range (0,a):
    b=input()
    n.append(b)
for i in range (0,a):
    for j in range(i+1,a):
        m=n[j]
        if len(n[i])>len(n[j]):
            n[j]=n[i]
            n[i]=m
b=a-1
for i in range (0,a):
    s.append(n[b])
    b-=1
print(n,s)
