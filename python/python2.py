a=int(input())
n=[]
y=[]
z=[]
res=[]
for i in range (0,a):
    b=input()
    n.append(b)
for i in range (0,a):
    if n[i].isnumeric():
        y.append(n[i])
    else:
        z.append(n[i])
for i in range (0,len(z)):
    for j in range (i+1,len(z)):
        m=z[j]
        if (len(z[i])>len(z[j])):
            z[j]=z[i]
            z[i]=m
for i in range (0,len(y)):
    y[i]=int(y[i])
for i in range (0,len(y)):
    for j in range (i+1,len(y)):
        m=y[j]
        if (y[i]>y[j]):
            y[j]=y[i]
            y[i]=m
for i in range (0,len(y)):
    res.append(y[i])
for i in range (0,len(z)):
    res.append(z[i])
print(res)

