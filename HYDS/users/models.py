from django.db import models
from django.contrib.auth.models import User

class UserInfo(models.Model):
    id=models.AutoField(primary_key=True,verbose_name='用户标识')
    # username=models.CharField(max_length=100,null=False,unique=True,verbose_name='用户名')
    nickname=models.CharField(max_length=100,null=False,default='匿名用户',verbose_name='用户昵称')
    age=models.IntegerField(default=18,verbose_name='年龄')
    # email=models.CharField(max_length=100,default='110@qq.com',verbose_name='邮箱')
    sex=models.CharField(max_length=10,default='男',verbose_name='性别')
    phone=models.CharField(max_length=50,default=123456,verbose_name='联系方式')
    # createtime=models.DateTimeField(auto_now_add=True,verbose_name='注册时间')
    avatar=models.ImageField(upload_to='static/users/avatar/',default='static/users/avatar/default.jpg')
   #一对一外键
    user=models.OneToOneField(User,on_delete=models.CASCADE)


class Address(models.Model):
    id=models.AutoField(primary_key=True,verbose_name='dizhi_id')
    recv=models.CharField(max_length=50)
    phone=models.CharField(max_length=50,verbose_name='手机号')
    diqu=models.CharField(max_length=50,verbose_name='diqu')
    province=models.CharField(max_length=50,verbose_name='')
    city=models.CharField(max_length=50,verbose_name='')
    qu=models.CharField(max_length=50,verbose_name='')
    intro=models.CharField(max_length=255,verbose_name='')
    status=models.BooleanField(default=False,verbose_name='')

    user = models.ForeignKey(User,on_delete=models.CASCADE)