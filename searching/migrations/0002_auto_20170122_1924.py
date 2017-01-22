# -*- coding: utf-8 -*-
# Generated by Django 1.9.9 on 2017-01-22 19:24
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('searching', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='match',
            name='weather',
            field=models.CharField(choices=[('choice1', 'Sunny'), ('choice2', 'Windy'), ('choice3', 'Showers'), ('choice4', 'Heavy Rain')], default='choice1', max_length=30),
        ),
    ]