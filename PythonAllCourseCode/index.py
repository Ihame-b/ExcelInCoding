
#import this
#import math
# from math import sqrt,ceil
# #import random
# from random import randint
# import sys

# x=100
# y=100
# z=x+y
# print(z)

#n=math.sqrt(81)
#n=sqrt(256)
#print(n)
#n1=math.ceil(n)#alondice
#n1=ceil(n)
#print(n1)
#random 

#r=random.randint(1,5)
#r=randint(1,100)
#print(r)
# print("enter your name")
# i=input()
# print(i)

# s=sys.argv[1]
# print(s)

# print("enter your age")
# a=int(input())
# y=2021-a
# #print("born year is:"+str(y))
# print(f'you born in {y}')

#ifStatement

# print("how old are you?")
# age=int(input())
# if age<2:
#    print("dring water")
# elif age<18:
#    print("you can now enjoy tv")
# else:
#     print("go to job")   

# message=""
# if message:
#     print("hello")
# else:
#     print("qui")    

#for loop
#x=[1,2,3,4,5,6,7,8,9]
#for xy in x:
   # print("value: "+str(xy))

#range
#for vs in range(100,1000):
    #print(vs)

#list
# s=list(range(10,20))
# for s1 in s:
#     if s1%2!=0:
#         print(s1)

#while loop
# player=0
# while player<11:
#     player=player+1
#     print(player)

#Array
#extend() is used to add elements to a given array
# x=[1,3,6,5,4,8,7,6,9,8,2,4]
# y=[3,4,7,2,5,4,8,7,9,7,3,5,7,3]
# x.extend(y)
# #print(x)
# print(y)
# #append() to add element in a given array
# x.append(6)
# print(x)
# #reverse() is used to reverse array
# x.reverse()
# #sort assending order
# x.sort()

#Object
# student={

#     'fn':"ihame",
#     'ln':"glb",
#     'age':54
# }
# #print curent element
# #print a single value of object
# print(student['fn'])
# #print attribute of object
# print(student.keys())
# #print all element of abject
# print(student)
# #add item on object
# student["email"]="ihg@gmail.com"
# print(student)

# #printing string with cote
# x='ihg\'s lov2code' #print with 's
# print(x)
# x1=r'ihg\'s lov2code'#print as it is
# print(x1)

# #String method in python
# x='ihame'
# print(x.isalpha()) # it only check our sting if is alphabet it return true else false
# x.isalnum() #contain leter and number
# x.isdecimal() #only number
# x.isspace() #contain space
# x.istitle() # start with capital leter

# #tycasting
# nm="ihame"
# ag=100
# print(nm+' has '+str(ag)+' years old')
# #print(f"...{nm} has {ag} years old..")
# #print(nm," has ",ag,"years old")

# #slice
# print(nm[-1])
# print(nm[1])
# print(nm[-3:-1])
# print(nm[1:3])

#function
# def fifa():
#     print("hello")
# sifa()

    # def sifa1(a,b):
    #     return a*b
    #     sifa1(12,9)
#pass staff
# def sifa():
#     pass

#try and exception
# def askAge():
#     try:
#     print(" enter your name ")
#     name=str(input())
#     print(" enter your age ")
#     age=int(input())
#     print(f' hello {name} you have {age} year old')
#     except ValueError:
#     print("invalid input")
# askAge()    

import datetime as dt
def date():
    days=dt.date.today()
    print(days)