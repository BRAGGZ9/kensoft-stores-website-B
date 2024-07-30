# admin.py
from django.contrib import admin
from django.contrib.auth.models import Group
from .models import Product

# Unregister the Group model
admin.site.unregister(Group)

class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'price', 'image')

admin.site.register(Product, ProductAdmin)
