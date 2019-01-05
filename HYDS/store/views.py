from django.shortcuts import render,redirect,reverse
from . import models
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required



#开店
@login_required
def add(request):
    if request.method=='GET':
        return render(request,'store/add.html',)
    elif request.method=='POST':
        name=request.POST['name'].strip()

        if name=='':
            return render(request,'store/add.html',{'msg':'店铺名字为空'})

        try:
            intro = request.POST['intro'].strip()
            cover = request.FILES['cover']
            store=models.Store(name=name,intro=intro,cover=cover,user=request.user)
            store.save()
            return redirect('store:store_list')
        except Exception as e :
            print(e)
            store = models.Store(name=name, user=request.user)
            store.save()
            return redirect('store:store_list')

#店铺列表
@login_required
def store_list(request):
    store_lists=models.Store.objects.filter(user=request.user)
    return render(request,'store/store_list.html',{'lists':store_lists})


#店铺详情
@login_required
def storeinfo(request,s_id):
    store=models.Store.objects.get(pk=s_id)

    return render(request,'store/storeinfo.html',{'store':store})


#店铺修改
@login_required
def update_store(request,s_id):

    store=models.Store.objects.get(pk=s_id)
    if request.method=='GET':
        return render(request,'store/update_store.html',{'store':store})
    elif request.method=='POST':
        name=request.POST['name'].strip()
        intro=request.POST['intro'].strip()
        status = request.POST['status'].strip()

        if name=='':
            return render(request,'store/update_store.html',{'msg':'店铺名字为空'})
        if intro =='':
            return render(request,'store/update_store.html',{'msg':'店铺介绍为空'})
        store.name = name
        store.intro = intro
        store.status = status
        try:
            cover = request.FILES['cover']
            store.cover=cover
        except Exception as e :
            print(e,'没有上传头像')
            pass
        store.save()
        return redirect(reverse('store:storeinfo',kwargs={'s_id':s_id}))
